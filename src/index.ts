// alt1 base libs, provides all the commonly used methods for image matching and capture
// also gives your editor info about the window.alt1 api
import * as a1lib from 'alt1';

// tell webpack that this file relies index.html, appconfig.json and icon.png, this makes webpack
// add these files to the output directory
// this works because in /webpack.config.js we told webpack to treat all html, json and imageimports
// as assets
import './index.html';
import './appconfig.json';
import './icon.png';
import './css/styles.css';
import { A1Sauce } from './A1Sauce/index';
import {
	appName,
	majorVersion,
	minorVersion,
	patchVersion,
} from './data/constants';
import { getSetting } from './A1Sauce/Settings/Storage';
import { notes } from './patchnotes';
import { Patches } from './A1Sauce/Patches/patchNotes';
import { hexToRgb } from './A1Sauce/Utils/hextoRgb';
import { getById } from './A1Sauce/Utils/getById';

function getByID(id: string) {
	return document.getElementById(id);
}

const sauce = A1Sauce.instance;
sauce.setName(appName);
sauce.setVersion(majorVersion, minorVersion, patchVersion);
sauce.createSettings();

let recentlyDetected = false;

let helperItems = {
	Output: getByID('output'),
	abilityHistory: <HTMLUListElement>getByID('abilityHistory'),
	settings: getByID('Settings'),
};

var abilityHighlight = a1lib.webpackImages({
	highlightBorder: require('./asset/data/ability-border-3.data.png'),
	placeholder: require('./asset/data/placeholder.data.png')
});

let history = [];
async function tryFindAbility(imagewidth: number) {
	let client_screen = a1lib.captureHoldFullRs();

	let usedAbility = {
		abilityPosition: client_screen.findSubimage(
			abilityHighlight.highlightBorder
		),
	};

	if (usedAbility.abilityPosition[0] !== undefined && !recentlyDetected) {
		let positions = {
			x: usedAbility.abilityPosition[0].x,
			y: usedAbility.abilityPosition[0].y,
		};

		if (
			history.some(
				(ability) =>
					ability.x === positions.x && ability.y === positions.y
			)
		) {
			console.log('Repeated ability?');
			return;
		}
		recentlyDetected = true;
		captureAsImage(
			usedAbility.abilityPosition[0].x,
			usedAbility.abilityPosition[0].y,
			imagewidth
		);
	}
}

const overlays: string[] = [
];

const transparent = new RegExp('AAA', 'g');
const darkRed = 'AAB';

async function captureAsImage(x: number, y: number, imagewidth: number) {
	if (helperItems.abilityHistory.children.length >= 10) {
		helperItems.abilityHistory.children.item(0).remove();
	}
	setTimeout(async function () {
		let abilityImage = a1lib.captureHold(x + 2, y + 1, 32, 32);
		if (!getSetting('activeOverlay')) {
			let ability = document.createElement('li');
			let img = document.createElement('img');
			img.src =
				'data:image/png;base64,' + abilityImage.toData().toPngBase64();
			ability.appendChild(img);
			helperItems.abilityHistory.appendChild(ability);
			history.push({ x: x, y: y });
		} else {
			overlays.push(
				a1lib
					.encodeImageString(
						await resizeImageData(
							abilityImage.toData(),
							loadedSettings.scale
						)
					)
					.replace(transparent, darkRed)
			);
			renderOverlay(imagewidth);
			history.push({ x: x, y: y });
		}
	}, 50);

	setTimeout(() => {
		recentlyDetected = false;
	}, 450);

	setTimeout(() => {
		clearHistory();
	}, 1050);
}

async function renderOverlay(imagewidth: number) {
	if (overlays.length > 0) {
		if (overlays.length >= 10) {
			overlays.shift();
		}
		for (let i = 0; i < overlays.length; i++) {
			alt1.overLaySetGroup('AbilityHistory');
			alt1.overLayContinueGroup('AbilityHistory');
			alt1.overLayImage(
				loadedSettings.x_position +
					(imagewidth + 2) *
						i *
						(loadedSettings.inverseDirection ? -1 : 1),
				loadedSettings.y_position,
				overlays[i],
				imagewidth,
				30000
			);
			alt1.overLayFreezeGroup('AbilityHistory');
		}
	}
	alt1.overLaySetGroup('FirstAbility');
	alt1.overLayRect(
		a1lib.mixColor(
			loadedSettings.red,
			loadedSettings.green,
			loadedSettings.blue[2]
		),
		loadedSettings.x_position +
			(imagewidth + 2) * 8 * (loadedSettings.inverseDirection ? -1 : 1),
		loadedSettings.y_position,
		imagewidth,
		imagewidth,
		30000,
		1
	);
	alt1.overLayContinueGroup('FirstAbility');
}

async function clearHistory() {
	if (history.length > 0) {
		history.shift();
	}
}

const loadedSettings = {
	scale: 0,
	inverseDirection: false,
	red: 255,
	green: 255,
	blue: 255,
	x_position: 0,
	y_position: 0,
};

export async function startApp() {
	if (!window.alt1) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<div>You need to run this page in alt1 to capture the screen</div>`
		);
		return;
	}
	if (!alt1.permissionPixel) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<div><p>Page is not installed as app or capture permission is not enabled</p></div>`
		);
		return;
	}
	if (!alt1.permissionOverlay) {
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`<div><p>Attempted to use Overlay but app overlay permission is not enabled. Please enable "Show Overlay" permission in Alt1 settinsg (wrench icon in corner).</p></div>`
		);
		return;
	}

	loadSettings();

	let patchCheck = new Patches();
	patchCheck.setNotes(notes);
	patchCheck.showPatchNotes();

	await abilityHighlight.promise;

	abilityHighlight.placeholder = await resizeImageData(abilityHighlight.placeholder, parseInt(getSetting('scaleFactor'), 10) / 100);

	for (let i = 0 ; i < 8 ; i++) {
		overlays[i] = a1lib.encodeImageString(abilityHighlight.placeholder);
	}

	const imageWidth = abilityHighlight.placeholder.width;

	setInterval(tryFindAbility, 100, imageWidth);
}

function loadSettings() {
	loadedSettings.scale = parseInt(getSetting('scaleFactor'), 10) / 100;
	loadedSettings.inverseDirection = getSetting('inverseDirection');
	loadedSettings.red = hexToRgb(getSetting('borderColor')).r;
	loadedSettings.green = hexToRgb(getSetting('borderColor')).g;
	loadedSettings.blue = hexToRgb(getSetting('borderColor')).b;
	loadedSettings.x_position = parseInt(getSetting('x_position'), 10);
	loadedSettings.y_position = parseInt(getSetting('y_position'), 10);
}

export async function resizeImageData(
	imageData: ImageData,
	scaleFactor: number
) {
	// Create a new canvas element
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	// Calculate the dimensions of the new canvas
	const newWidth = Math.round(imageData.width * scaleFactor);
	const newHeight = Math.round(imageData.height * scaleFactor);

	// Set the canvas dimensions
	canvas.width = newWidth;
	canvas.height = newHeight;

	// Create a temporary canvas to draw the original image data
	const tempCanvas = document.createElement('canvas');
	const tempContext = tempCanvas.getContext('2d');
	tempCanvas.width = imageData.width;
	tempCanvas.height = imageData.height;

	// Draw the original image data onto the temporary canvas
	tempContext.putImageData(imageData, 0, 0);

	// Draw the temporary canvas onto the new canvas with the desired scale
	context.drawImage(
		tempCanvas,
		0,
		0,
		imageData.width,
		imageData.height,
		0,
		0,
		newWidth,
		newHeight
	);

	// Extract the new image data from the resized canvas
	return context.getImageData(0, 0, newWidth, newHeight);
}

window.onload = function () {
	if (window.alt1) {
		alt1.identifyAppUrl('./appconfig.json');

		let settings = sauce.createSettings();
		settings
			.addHeader(
				`h2`,
				`Settings - v ${majorVersion}.${minorVersion}.${patchVersion}`
			)
			.addCheckboxSetting(
				'inverseDirection',
				'Reverse Sort (Newest->Oldest)',
				getSetting('inverseDirection') ?? false
			)
			.addCheckboxSetting(
				'activeOverlay',
				'Use Overlay instead of App Interface',
				getSetting('activeOverlay') ?? true
			)
			.addRangeSetting(
				'appScale',
				'Image Size (App View)',
				{ defaultValue: getSetting('appScale') ?? '100', min: 32, max: 300, unit: 'px' }
			)
			.addRangeSetting(
				'scaleFactor',
				'Scale (Overlay View)',
				{ defaultValue: getSetting('scaleFactor') ?? '100', min: 10, max: 300, unit: '%' }
			)
			.addColorSetting('borderColor', 'Border Color', '#FF0000')
			.addRangeSetting('x_position', 'X Offset - Overlay Position', {
				defaultValue: '100',
				min: -4000,
				max: 4000,
				unit: 'px',
			})
			.addRangeSetting('y_position', 'Y Offset - Overlay Position', {
				defaultValue: '100',
				min: -2000,
				max: 2000,
				unit: 'px',
			})
			.build();

		const x_pos = <HTMLInputElement>getById('x_position');
		const x_val =
			((parseInt(x_pos.value, 10) - parseInt(x_pos.min, 10)) /
				(parseInt(x_pos.max, 10) - parseInt(x_pos.min))) *
			100;
		x_pos.style.background =
			'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
			x_val +
			'%, #0d1c24 ' +
			x_val +
			'%, #0d1c24 100%)';

		const y_pos = <HTMLInputElement>getById('y_position');
		const y_val =
			((parseInt(y_pos.value, 10) - parseInt(y_pos.min, 10)) /
				(parseInt(y_pos.max, 10) - parseInt(y_pos.min))) *
			100;
		y_pos.style.background =
			'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
			y_val +
			'%, #0d1c24 ' +
			y_val +
			'%, #0d1c24 100%)';

		const appScaleEl = <HTMLInputElement>getById('appScale');
		const appScaleVal =
			((parseInt(appScaleEl.value, 10) - parseInt(appScaleEl.min, 10)) /
				(parseInt(appScaleEl.max, 10) - parseInt(appScaleEl.min))) *
			100;
		appScaleEl.style.background =
			'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
			appScaleVal +
			'%, #0d1c24 ' +
			appScaleVal +
			'%, #0d1c24 100%)';

		const overlayScale = <HTMLInputElement>getById('scaleFactor');
		const overlayScaleVal =
			((parseInt(overlayScale.value, 10) - parseInt(overlayScale.min, 10)) /
				(parseInt(overlayScale.max, 10) - parseInt(overlayScale.min))) *
			100;
		overlayScale.style.background =
			'linear-gradient(to right, #3e5765 0%, #3e5765 ' +
			overlayScaleVal +
			'%, #0d1c24 ' +
			overlayScaleVal +
			'%, #0d1c24 100%)';

		document.querySelectorAll('[data-setting]').forEach((el) => {
			el.addEventListener('input', () => {
				loadSettings();
			});
		});
		document.querySelectorAll('[data-setting]').forEach((el) => {
			el.addEventListener('change', () => {
				loadSettings();
			});
		});

		document.getElementById('inverseDirection').addEventListener('change', function () {
			helperItems.abilityHistory.classList.toggle('reverse');
		});


		document
			.getElementById('scaleFactor')
			.addEventListener('change', function () {
				location.reload();
			});

		document
			.getElementById('scaleFactor')
			.addEventListener('input', function () {
				location.reload();
			});

		document.getElementById('appScale').addEventListener('change', function () {
			let size = parseInt(getSetting('appScale'), 10);
			let sheet = getByID('appScaleStyles');
			sheet.innerHTML = `#abilityHistory li { min-width: ${size}px; max-width: ${size}px;`;
			document.body.appendChild(sheet);
		});
		let size = parseInt(getSetting('appScale'), 10);
		let sheet = document.createElement('style');
		sheet.id = 'appScaleStyles';
		sheet.innerHTML = `#abilityHistory li { min-width: ${size}px; max-width: ${size}px;`;
		document.body.appendChild(sheet);
		startApp();
	} else {
		let addappurl = `alt1://addapp/${
			new URL('./appconfig.json', document.location.href).href
		}`;
		helperItems.Output.insertAdjacentHTML(
			'beforeend',
			`
			Alt1 not detected, click <a href='${addappurl}'>here</a> to add this app to Alt1
		`
		);
	}
};
