// alt1 base libs, provides all the commonly used methods for image matching and capture
// also gives your editor info about the window.alt1 api
import * as a1lib from 'alt1';
import * as sauce from './a1sauce';

// tell webpack that this file relies index.html, appconfig.json and icon.png, this makes webpack
// add these files to the output directory
// this works because in /webpack.config.js we told webpack to treat all html, json and imageimports
// as assets
import './index.html';
import './appconfig.json';
import './icon.png';
import './css/styles.css';


function getByID(id: string) {
	return document.getElementById(id);
}

let recentlyDetected = false;

let helperItems = {
	Output: getByID('output'),
	abilityHistory: <HTMLUListElement>getByID('abilityHistory'),
	settings: getByID('Settings'),
};

var abilityHighlight = a1lib.webpackImages({
	highlightBorder: require('./asset/data/ability-border-3.data.png'),
});

let history = [];
async function tryFindAbility() {
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
			(ability) => ability.x === positions.x && ability.y === positions.y
		)
	) {
		console.log('Repeated ability?');
		return;
	}
		recentlyDetected = true;
		captureAsImage(
			usedAbility.abilityPosition[0].x,
			usedAbility.abilityPosition[0].y
		);
		setTimeout(function () {
			recentlyDetected = false;
		}, 300);
	}
}

async function captureAsImage(x, y) {
	if (helperItems.abilityHistory.children.length >= 20) {
		helperItems.abilityHistory.children.item(0).remove();
	}
	setTimeout(function() {
		let abilityImage = a1lib.captureHold(x + 2, y + 1, 32, 32);
		let ability = document.createElement('li');
		let img = document.createElement('img');
			img.src = 'data:image/png;base64,' + abilityImage.toData().toPngBase64();
			ability.appendChild(img);
			helperItems.abilityHistory.appendChild(ability);
		history.push({ x: x, y: y });
	}, 50);
	setTimeout(function() {
		clearHistory();
	}, 900);
}

async function clearHistory() {
	if (history.length > 0) {
		history.shift();
	}
}

export function startApp() {
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

	setInterval(tryFindAbility, 100);
}

const settingsObject = {
	settingsHeader: sauce.createHeading('h2', 'Settings'),
	reverse: sauce.createCheckboxSetting('reverse', 'Reverse Direction', sauce.getSetting('reverse') ?? false),
	abilitySize: sauce.createRangeSetting('abilitySize', 'Size of ability images', { defaultValue: '32', min: 16, max: 128, unit: 'px' })
};

settingsObject.reverse.addEventListener('change', function () {
	helperItems.abilityHistory.classList.toggle(
		'reverse',
	);
});

settingsObject.abilitySize.addEventListener('change', function () {
	let size = parseInt(sauce.getSetting('abilitySize'), 10);
	let sheet = getByID('abilitySizes');
	sheet.innerHTML = `#abilityHistory li { min-width: ${size}px; max-width: ${size}px;`;
	document.body.appendChild(sheet);
});

window.onload = function () {
	//check if we are running inside alt1 by checking if the alt1 global exists
	if (window.alt1) {
		//tell alt1 about the app
		//this makes alt1 show the add app button when running inside the embedded browser
		//also updates app settings if they are changed

		alt1.identifyAppUrl('./appconfig.json');
		Object.values(settingsObject).forEach((val) => {
			helperItems.settings.before(val);
		});
		let size = parseInt(sauce.getSetting('abilitySize'), 10);
		let sheet = document.createElement('style');
		sheet.id = 'abilitySizes';
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
