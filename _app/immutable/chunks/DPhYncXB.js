const e=`# Welcome to the Empyrean Defense Wiki\r
\r
Welcome to the official wiki for <a href="https://store.steampowered.com/app/3575690/Empyrean_Defense/" target="_blank">Empyrean Defense</a>! Use the links below or in the sidebar to explore the wiki or search for a specific topic.\r
\r
## About\r
\r
Empyrean Defense is a modern warfare tower defense game where you build, upgrade, and customize defenses to hold back an enemy invasion. Learn abilities and skills, craft advanced ammunition, and gather resources on the battlefield to strengthen and expand your defense.\r
\r
## News\r
\r
We're gearing up for an exciting 2026!\r
- **Official Playtest**: The official playtest is LIVE! For anyone interested in testing the game prior to the demo and Early Access, please sign up <a href="https://forms.gle/dwwXvsX9oaai5b5p6" target="_blank">here</a>. Once your submission is accepted, you will receive an activation key and can head over to the [Playtest Page](/playtest) to get started!\r
- **Public Demo**: Our first public demo will be available in early **February**. Come try the game, share feedback, and help shape development.\r
- **Steam Next Fest**: Check out Empyrean Defense at Steam Next Fest **June 15-22, 2026**.\r
- **Early Access Release**: Empyrean Defense launches into Early Access on **July 23, 2026**.\r
\r
## Status\r
\r
## **v0.7.0 - Steam Deck Support, QoL Improvements & Bug Fixes (February 1, 2026)**\r
**Status:** 🟢 *Live on Steam Playtest*\r
\r
#### New Features\r
- Added sound effects for skill up and reset skills actions in the skill tree\r
- Added a red glow to site HP bars when below 30% HP\r
- Added on-screen arrow indicators for:\r
  - Sites below 30% HP\r
  - Sites that have run out of ammo\r
  - Landed Supply Drops\r
  - Incoming boss units\r
  - Rare item drops\r
- Added a side button on the abilities bar to toggle *Night Vision Goggles* for keyboard & mouse users\r
*(the toggle setting is still available in Settings)*\r
- Renamed *Greenwood Shoreline* to *Brightwood Bay*\r
\r
#### Improvements\r
- Split Display settings out of cloud saves and keep them user/device specific\r
- Removed redundant item descriptions from bottom pickup notifications\r
- Updated interface action font to better match the game's theme\r
- Improved clarity of Power Meter used/available text indicators\r
- Dynamically position Objectives and Enemy Info panels based on UI scale and panel visibility\r
- Standardized sizes for enemy damage numbers and notification popups\r
- Display site HP bars above other objects by default, with a new toggle option in Settings\r
- Display next wave panels above other objects\r
- Added scrolling support to the mission description panel on the realm map\r
- Added support for holding the D-pad to quickly adjust market item quantities when using a controller\r
- Added *PS5*, *Steam*, and *Steam Deck* controller glyphs\r
- Improved Steam Input API handling to better identify connected controller types\r
- Increased the maximum value of *UI Scale* setting\r
- Increased UI component and font sizes across the game for better readability\r
- Removed market item quantity text input boxes on *Steam Deck*\r
- Slightly increased the size of quick action menu icons\r
- Allow B / O / Esc to exit pause menu\r
\r
#### Balance Changes\r
- Removed the final two LATVs from the boss wave on *Sidewinder Pass*\r
- Increased Rocket Post base damage from **200** -> **210**\r
- Reduced item drop amounts from [Adv. Supply Drop](/abilities/supply_drop)\r
- Increased the cost of skill points in the market from **5,000** → **10,000**\r
- Reduced the base cost of several power and economy sites:\r
  - Solar Array (**300** → **200**)\r
  - Wind Turbine (**600** → **400**)\r
  - Power Plant (**1200** → **800**)\r
  - Fabrication Facility (**1600** → **1200**)\r
\r
\r
#### Bug Fixes\r
- Fixed an issue with the Inspect icon when inspecting items using a controller\r
- Fixed multiple controller focus issues across all menu pages\r
- Prevented pausing before mission intro dialogue appears\r
- Fixed a performance issue related to in-game cursor icon updates\r
- Fixed an issue where selling a Power site right before taking damage could cause double power loss\r
- Fixed mouse rotation continuing after pausing and unpausing\r
- Fixed centering issues with the quick action menu when using a controller\r
- Fixed an issue when binding abilities or quick action slots to *Reset to Defaults* button\r
- Fixed tooltips appearing behind initial tutorial dialogues on menu pages\r
- Fixed an issue where market item quantities could be adjusted via D-pad even when the quantity was 1`;export{e as default};
