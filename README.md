# Nyu's Action Bar Tracker

Track your actions as you use them.

## How to Install & Required Settings

To install Action Bar Tracker copy & paste this link into Alt1's browser app:
`alt1://addapp/https://nadyanayme.github.io/NyusActionBarTracker/dist/appconfig.json`

If you do not have Alt1 Toolkit installed already you can [download it from runeapps.org](https://runeapps.org/alt1). In order for Voice of Seren to work make sure your Runescape settings for Game and UI Scale settings are set to `100%` as this is required for Alt1 to be able to read your game screen.

## Early Access

This plugin is considered to be in Early Access. This means it may be buggy, take up more CPU than necessary as it has not been optimized yet, and may change between uses due to changes in the code. Please join my [Discord server](https://discord.gg/KJ2SgWyJFF) if you would like to leave feedback or make feature quests.

## Known Limitations

- Can't track multiple highlights at once so if you press multiple keybinds at once (eg. bridding) then only the top, left most action will be tracked
- Can't track actions that do not get highlighted when used (eg. Dive/Bladed Dive, Magma Tempest when targetted, possibly others)
- GCD rolling timer partially obstructs view of some actions. Please consider this a feature to learn about early/late inputs. :)
- Bad inputs (eg. using an ability that is already on cooldown) displays the ability as-is with its cooldown timer. Please consider this a feature and stop pressing bad inputs. :)

Of these known limitations the only one that might possibly be fixed in the future is the first issue of multiple highlights.

## My Other Plugins

To see my other Alt1 plugins [click here](https://github.com/NadyaNayme/NyusPluginDirectory)

## Alternative

I would highly recommend [Shaggy's Ability Tracker](https://github.com/ShaggyHW/RS3AbilityTracker/). It requires some initial configuration to get it setup properly but if you take the time to do so it will be more reliable than my action bar tracker. It can also function as an overlay preventing you from misclicking it while PvMing. It does, however, require you to trust Shaggy as ability trackers that listen for specific keys are essentially keyloggers. I wouldn't recommend the program if I hadn't read the source code and trust it myself. If you do not trust the release build supplied by Shaggy you can compile the program from source yourself with Visual Studio.

If the alternative is so much better why does this plugin exist at all?

- Doesn't require trusting another executable program. You only need to trust Alt1.
- Zero config/setup. Works out of the box and is Accurate Enough™ to be usable. If you adjust your keybinds you don't need to reconfigure the entire program.
- Due to how actions are captured - will automatically update for any new abilities and items that cause a highlight when pressed
- Since it doesn't actually care about your action bars if your action bars change (eg. changing mainhand weapon style) it will continue to track your new action bar accurately
