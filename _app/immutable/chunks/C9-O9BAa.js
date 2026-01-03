const e=`# Release Notes\r
\r
## **v0.5.2 - More Equipment (January 3, 2026)**\r
**Status:** 🟢 *Live on Steam Playtest*\r
\r
#### New Features\r
- Added *Service Pistol* to the Market (**1,500** tokens)\r
  - Increases site and ability damage by 2%\r
- Added *Service Rifle* to the Market (**5,000** tokens)\r
  - Increases site and ability damage by 3%\r
- Added *Assault Rifle* to the Market (**10,000** tokens)\r
  - Increases site and ability damage by 5%\r
- Added *Field Logistics Kit* to the Market (**5,000** tokens)\r
  - Reduces site build and upgrade costs by 3%\r
- Added *Seed Capital* to the Market (**10,000** tokens)\r
  - Grants an additional 5% starting credits at the beginning of each mission\r
- Added *Power Cell* to the Market (**5,000** tokens)\r
  - Lowers energy usage of all sites by 5%\r
\r
## **v0.5.1 - Night Vision Goggles (January 1, 2026)**\r
\r
#### New Features\r
- Added Night Vision Goggles to the Market (**1,000** tokens)\r
  - Used for night missions with low visibility\r
\r
#### Bug Fixes\r
- Fix issue with enemy subcomponents hitpoints not respecting mission difficulty\r
\r
## **v0.5.0 - Azure Run (December 28, 2025)**\r
\r
#### New Features\r
- Added 9th campaign level: Azure Run\r
- Added Day/Night phases\r
- Prevent Solar Arrays from providing power on night missions\r
- Better environment fog effects\r
- Remove fog toggle option in Settings\r
- Added environment brightness option in Settings\r
- Added a Next Wave indicator for each path, showing each enemy unit/amount expected in the next wave\r
- Added option in Settings to toggle air path clouds\r
- Added first boss and boss icons to related UI elements\r
\r
#### Bug Fixes\r
- Fix issue with persisting global attack prioritization setting\r
\r
## **v0.4.2 - UX Improvements and Tier 2 Site Balance Changes (December 3, 2025)**\r
\r
#### New Features\r
- New Damage/Crit popups\r
- Added hotkey and icon for quitting the game from the play menu using a controller\r
- Added dialogue container mission markers for better user experience during mission intros\r
\r
#### Balance Changes\r
- Nerf Missile Launcher Racking System upgrade from **50%** -> **15%**\r
- Increase Tesla Coil damage from **20** -> **50**\r
- Increase Plasma Gun damage from **100** -> **150**\r
\r
#### Bug Fixes\r
- Fix issue with Infinite Reserves (Tier 1) skill showing infinite icons for Tier 2/3 sites\r
- Fix issue with hitpoints bars color being affected by range ring decals\r
- Fix issue with Tesla Coil damage sparks lagging behind units\r
- Fix issue with buying items in the market with the Wolf of Wall Street skill learned\r
\r
## **v0.4.1 - Controller Improvements (November 29, 2025)**\r
\r
#### New Features\r
- Added *Pause When Unfocused* setting (default to true) that will pause the game when the window loses focus or the Steam overlay is actived\r
- If using a controller, automatically pause the game if the controller disconnects\r
\r
#### Bug Fixes\r
- Added controller hotkey for *Reset To Defaults* button in settings pages\r
- Fix the rotation of build sites on *Greenwood Shoreline*\r
\r
## **v0.4.0 - Rolling Hills (November 19, 2025)**\r
\r
#### New Features\r
- Added 8th campaign level: Rolling Hills\r
\r
#### Balance Changes\r
- Buff IFV\r
  - Increase hitpoints from **3000** -> **3500**\r
  - Increase damage from **50** -> **100**\r
  - Increase range from **40** -> **45**\r
  - Increase armor from **40%** -> **45%**\r
- Increase Pillbox damage from **44** -> **45**\r
- Increase power usage of Field Tent from **200** -> **400**\r
\r
## **v0.3.0 - Dusthorn Canyon (November 9, 2025)**\r
\r
#### New Features\r
- Added 7th campaign level: Dusthorn Canyon\r
\r
#### Balance Changes\r
- Remove most APCs from Harborview District\r
- Reduce resources needed to craft Rockets and Flak Shells\r
- Reduce credits given by Hidden Caches from **1000** -> **500**\r
- Added **200** extra starting credits on Verdant Anchorage\r
\r
#### Bug Fixes\r
- Fix issue with Flak Cannons doing double damage\r
\r
## **v0.2.0 - Harborview District (November 7, 2025)**\r
\r
#### New Features\r
- Added 6th campaign level: Harborview District\r
\r
## **v0.1.2 - Log Exporting and Balance Changes (November 3, 2025)**\r
\r
#### New Features\r
- Added logging and log export button to Settings for bug/crash reports\r
- Added skip button to character dialogues\r
\r
#### Balance Changes\r
- Pillbox\r
  - Buff base damage from **40 -> 44**\r
  - Nerf crit chance from **3% -> 2%**\r
- Rocket Strike Ability\r
  - Rockets now always travel the same distance for more consistent timing\r
- Switched the positions of the Ability Chain and Triple Threat skills in the Skills Tree\r
\r
## **v0.1.1 - Sunflare Dunes (October 31, 2025)**\r
\r
#### New Features\r
- Added 5th campaign level: Sunflare Dunes\r
\r
## **v0.0.3 - Bug Fixes (October 29, 2025)**\r
\r
#### Bug fixes\r
- Disallow controller focus on Quit button in Pause Menu when Settings menu is open\r
\r
## **v0.0.2 - Playtest Launch (October 28, 2025)**\r
\r
#### New Features\r
- Initial public playtest release\r
- Includes first 4 campaign levels: Verdant Anchorage, Greenwood Shoreline, Sidewinder Pass, and Graywake Reach`;export{e as default};
