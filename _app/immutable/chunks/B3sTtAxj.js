const e=`# Release Notes\r
\r
## **v0.12.5 - Demo Updates & Scattershot (April 12, 2026)**\r
**Status:**\r
🟢 *Live on Steam Demo*\r
🟠 *Coming soon to Steam Playtest*\r
\r
#### New Features\r
- Added the **Scattershot** ability: Detonates a burst of white hot shrapnel in all directions, damaging all enemies within range\r
- [DEMO] Added a supply drop to the beginning of *Graywake Reach* in the demo filled with **Rockets** and **Sniper Rounds**\r
- [DEMO] Updated the demo to start directly in *Graywake Reach*\r
\r
#### Improvements\r
- [DEMO] Players now start with both **Rocket Strike** and **Scattershot** abilities selected\r
- [DEMO] **Repair** ability is now available without the need to purchase on the market\r
- [DEMO] **Wraith Turret** ability has been moved to the market for purchase\r
- [DEMO] Reduced the market cost of the **Wraith Turret** and **Overdrive** abilities significantly\r
\r
#### Balance Changes\r
- Increased the base damage boost of the Overdrive ability from **15%** → **25%**\r
- [DEMO] Reduced the base damage of the Attack Vessel from **45** → **40**\r
- [DEMO] Reduced the base damage of the APC from **45** → **40**\r
\r
#### Bug Fixes\r
- Fixed issue with generic progress bar tweens causing incorrect health values to display when switching targets\r
\r
#### Bug Fixes\r
- Fixed issue with generic progress bar tweens causing incorrect health values to display when switching targets\r
\r
## **v0.12.2 - Performance Enhancements & Localization (April 1, 2026)**\r
**Status:** 🟢 *Live on Steam Playtest*\r
\r
#### New Features\r
- Localization added with support for 5 languages: English, Simplified Chinese, Japanese, Korean, and Russian\r
- Added Overdrive ability\r
  - Boosts the firepower of all military sites within range by 15% for a short duration\r
- Added controller guides to settings and level loading screens\r
- Added controller pointer icon when hovering over sites\r
- Added action text to tooltips for neutral targets\r
- Added soft text glow to Founder DLC titles and all Tier II and Tier III market items and abilities\r
\r
#### Improvements\r
- General performance improvements to reduce minor stuttering\r
- Reduced shadow map size to improve performance\r
- Updated main font and increased font sizes across the UI for better readability\r
- Improved UI layout for popups and the in-game top bar\r
- Updated site descriptions to sound more natural\r
- Reworded all skills for improved clarity and consistency\r
- Increased visibility of important UI elements such as warning text and completion labels\r
- Adjusted default draw distance from 1.5 to 1.3\r
- Increased render distance of rocket trails\r
- Improved explosion audio intensity\r
- Updated landmines to move with Gerstner wave swells\r
- Increased vessel collision box sizes for better hit detection\r
- Updated path shield symbol and site shield visuals\r
- Updated Landmark and Boss icons and switch Boss to High Value Target\r
- Increased focus and hover highlight color intensity in some of the menu pages\r
- Automatically scroll to the top/bottom of the Abilities page when focusing a top/bottom row ability\r
- Automatically scroll to the top of the Foundry page when focusing a top row element\r
\r
#### Balance Changes\r
- Reduced SAM Launcher health slightly (demo version)\r
- Reduced Extra Credit skill bonus from **15%** → **10%**\r
- Reduced Reduced Taxes skill bonus from **15%** → **10%**\r
- Adjusted starting resource amounts in the Market\r
- Rounded site repair values to align with credit/hitpoint ratio\r
\r
#### Bug Fixes\r
- Fixed achievements persisting incorrectly across save slots\r
- Fixed new enemy encountered popups not appearing\r
- Fixed controller action icon displaying mouse input in level panel\r
- Fixed demo Level 3 time requirement issues\r
- Fixed LNG models losing material overlays\r
- Fixed settings not saving correctly from the main menu\r
- Fixed visual issues with site shield upgrades\r
- Fixed some explosion ghosting\r
- Fixed issue with redeeming Founder DLC packages granting equipment already purchased\r
- Fixed issue where ability text in game would flash briefly\r
\r
## **v0.11.0 - Breakpoint Reservoir & Performance Improvements (March 11, 2026)**\r
\r
#### New Features\r
- Added 10th campaign level: *Breakpoint Reservoir*. Help defend Sentinel Dam and stop General Zharos from seizing control of the reservoir and its vital energy infrastructure\r
- Item drops and Supply drop crates now interact with water and float on the surface instead of sinking\r
- Decorative boats in water environments now move naturally with the waves\r
\r
#### Improvements\r
- Improved the wording of several loading screen tips to make them clearer and more natural\r
- Increased the LOD distance for Humvees to improve their visual appearance at range\r
- Default camera pan sensitivity increased slightly for smoother navigation\r
- The Quit confirmation popup in the game menu now properly returns focus to the mission panel when closed\r
- Improved stability and responsiveness when a large number of enemies are active\r
- Updated the main UI font for improved readability\r
\r
#### Balance Changes\r
- Critical hit multiplier reduced for military sites\r
  - Reduced from **300%** → **200%**\r
- *Deep Impact* skill adjusted\r
  - Reduced effect from **15%** → **5%**\r
- *Brute Force* skill adjusted\r
  - Damage bonus reduced from **15%** → **10%**\r
- Difficulty scaling adjusted\r
  - Enemy hitpoints scaling on *Hard* and *Impossible* difficulties has been reduced\r
- Enemy balance adjustments\r
  - *IFV*\r
    - Hitpoints increased from **3500** → **3800**\r
    - Armor increased from **45%** → **60%**\r
  - *Tank*\r
    - Hitpoints increased from **4000** → **7500**\r
    - Armor increased from **50%** → **70%**\r
- Mission objective changes\r
  - *Sunflare Dunes* oil objective increased from **6000** → **8000**\r
\r
#### Bug Fixes\r
- Fixed an issue where enemy vessel scale could reset incorrectly\r
- Fixed incorrect critical chance values appearing in the site upgrade menu\r
- Fixed an issue where map mission paths displayed incorrectly for *Breakpoint Reservoir*\r
- Fixed several issues affecting map mission flags in the demo version\r
- Fixed an issue where Landmarks were not properly registered by the mission manager \r
\r
## **v0.10.0 - Teleport, Path Indicators, and Improved Vessel Water Dynamics (March 1, 2026)**\r
\r
#### New Features\r
- New Ability: Teleport - Displaces a group of enemies, instantly teleporting them back along their advance and disrupting their push.\r
- Path Indicators: Added ground and naval path indicators during the setup phase\r
- Water Improvements: Updated water shader to include Gerstner swells and CPU wave sampling for vessel rotation\r
\r
#### Improvements\r
- Updated ability icons for:\r
  - Firestorm\r
  - Lightning Storm\r
- Added tabbed containers in the Market to make browsing and navigation easier\r
- Allow tooltips in menu pages to be hidden when using controller\r
- Updated UI Scale setting info text and reordered it within the settings list\r
- Updated wave overlay countdown to use mm:ss format\r
\r
#### Balance Changes\r
- Landmines Ability\r
  - Cooldown increased from **30s** → **80s**\r
- Set all mission countdown timers to 90 seconds\r
\r
#### Bug Fixes\r
- Fixed pause menu reliability on Steam Deck when application not focused\r
- Fixed main menu flicker when returning from gameplay menu\r
- Fixed Nyra popup triggering incorrectly for deployment checklist items that aren't completed after *Verdant Anchorage*\r
\r
## **v0.9.1 - Interface & Performance Improvements (February 22, 2026)**\r
\r
#### New Features\r
- Added progress bars to Economy Sites to better visualize resource production\r
\r
#### Improvements\r
- Improved performance and stability during extended play sessions\r
- Improved UI readability with larger fonts across the top navigation menu, buttons, credits and briefing panels\r
- Improved controller navigation\r
  - Map mission panel objectives and medals are now focusable when using a controller\r
  - Tooltips behave more consistently when navigating with a controller\r
- Introduced a new Main Menu layout with an integrated Briefing Panel\r
- Added new UI button effect with a sticky selected option for controller navigation\r
- Added Armory enhancements including ground, naval, and airborne scenes for improved presentation\r
- Added higher resolution medal and tutorial icons\r
\r
#### Balance Changes\r
- Repair Ability\r
  - Repair per tick reduced from **200** → **120**\r
- Firestorm (formerly Napalm Strike)\r
  - Damage per tick increased from **50** → **70**\r
- Wraith Turret\r
  - Damage per shot increased from **50** → **70**\r
- Rocket attacks\r
  - Blast radius increased slightly\r
- *Sidewinder Pass*\r
  - Crystal objective reduced from **1000** → **800**\r
- *Graywake Reach*\r
  - Adjusted time requirements slightly for Silver and Gold medals\r
\r
#### Bug Fixes\r
- Fixed Site Menu not showing base Power and Economy stats\r
- Fixed multiple UI focus issues, especially when using a controller or Steam Deck\r
- Fixed issues where ammo drops failed to spawn\r
- Fixed Support Sites incorrectly applying or removing bonuses during power outages\r
- Fixed Founder Boosts displaying incorrectly in the post game screen\r
- Fixed several stability issues caused by orphaned terrain objects\r
\r
## **v0.9.0 - Landmarks, Performance and Stability Improvements (February 16, 2026)**\r
\r
#### New Features\r
- Introduced landmarks as neutral targets, including new interactions and mission fail conditions\r
  - Added *Chapel of the First Sovereign* landmark to *Graywake Reach*\r
- Added ability damage popups with accompanying icons for clearer combat feedback\r
- Abilities can now interact with sites during Mission Prep (before Wave 1 begins)\r
- World repair and shield abilities now affect landmarks\r
- Added a controller target icon for clearer target selection\r
- Added a loss reason indicator when failing due to landmark destruction\r
- Supply drop crates now auto-remove after one minute if uncollected\r
- Added a dedicated boss icon for improved readability\r
\r
#### Improvements\r
- Improved item drop cooldown indicators with clearer visuals and background contrast\r
- Increased font and icon sizes in the Site Menu right panel for better readability\r
- Improved controller navigation and focus behavior across menus and UI panels\r
- Power meter now appears earlier if the player owns a power related site\r
- Improved ability targeting and AoE placement on uneven terrain\r
- Increased decal height for AoE hover indicators to better handle elevation changes\r
- Enemy info panel now also displays landmark details when applicable\r
- Added landmark damage edge indicators for clearer situational awareness\r
- Enemies now prioritize landmarks when appropriate\r
- Improved visual clarity of circular menu buttons with updated fonts\r
- Reduced UI tooltip flicker when navigating between menu pages\r
\r
#### Balance Changes\r
- Updated enemy targeting logic so enemies can engage both sites and landmarks\r
- Adjusted large AoE abilities to rely on terrain based targeting for consistency\r
- Reduced enemy soldier LOD bias to improve performance during large engagements\r
- Improved explosion effect scaling for better visual feedback\r
\r
#### Bug Fixes\r
- Fixed save files failing to load when rank data exceeded the current max rank\r
- Fixed demo save data incorrectly carrying over into the full game\r
- Fixed controller and mouse input conflicts causing unintended camera panning\r
- Fixed multiple controller focus issues across pause menus, medal containers, and play menus\r
- Fixed landmark selection not properly updating the info panel\r
- Fixed supply crate indicators persisting after the crate expired\r
- Fixed pause flow when losing a mission due to landmark destruction\r
- Fixed several tooltip positioning and rendering issues\r
- Fixed post game menu animation issues\r
- Removed unused assets and improved memory cleanup during loading and pause screens\r
\r
## **v0.8.0 - Save Slots, Onboarding & Performance (February 8, 2026)**\r
\r
#### New Features\r
- Added an onboarding checklist for new recruits to better familiarize them with the game menu and core mechanics\r
- Added multiple game save slots, and the game menu quit button now provides an option to return to the main menu\r
- Added enemy and site overlay shaders that trigger on damaging hits and abilities\r
- Added Rank 2 [Fire and Ice](/skills) skill: boosts the [Firestorm](/abilities/napalm_strike) ability's damage by 25% and increases the effectiveness of the [Blizzard](/abilities/blizzard) ability's slow by 25%\r
\r
#### Improvements\r
- Increased initial camera rotation and movement speed slightly\r
- The quick actions menu now reappears and highlights the site after closing site menu if the cursor is still hovering over it\r
- Major performance enhancements to:\r
  - Military sites and enemies particle systems\r
  - Plasma Gun site\r
  - Reduced mesh counts across numerous models\r
  - Cache additional game menu resources for faster page loading\r
- Increased dialogue font size and split up longer conversations for better readability\r
- Moved game menu page intro dialogues to optional tutorial feature on each page\r
- Added character popups for checklist completions and first-time game menu page visits\r
\r
#### Balance Changes\r
- Removed ability requirements from some skills\r
\r
#### Bug Fixes\r
- Fixed an issue where mission difficulty did not scale boss subcomponents hitpoints\r
- Fixed an issue where repair drones did not trigger on pre-built damaged sites\r
- Fixed an issue where the last selected map mission was not focused when the active input changed and the mission panel was closed\r
- Fixed an issue with ammo crafting which allowed players to craft ammo that ran out of resources when crafting a previous different ammo type\r
- Fixed an issue where Night Vision goggles toggle appeared incorrectly in the abilities side menu\r
- Fixed an issue where out of ammo edge screen notifications could persist for certain ammo types\r
\r
## **v0.7.0 - Steam Deck Support, QoL Improvements & Bug Fixes (February 1, 2026)**\r
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
#### Bug Fixes\r
- Fixed an issue with the Inspect icon when inspecting items using a controller\r
- Fixed multiple controller focus issues across all menu pages\r
- Prevented pausing before mission intro dialogue appears\r
- Fixed a performance issue related to in-game cursor icon updates\r
- Fixed an issue where selling a Power site right before taking damage could cause double power loss\r
- Fixed mouse rotation continuing after pausing and unpausing\r
- Fixed centering issues with the quick action menu when using a controller\r
- Fixed an issue when binding abilities or quick action slots to *Reset to Defaults* button binding\r
- Fixed tooltips appearing behind initial tutorial dialogues on menu pages\r
- Fixed an issue where market item quantities could be adjusted via D-pad even when the quantity was 1\r
\r
## **v0.6.2 - QOL Improvements & Bug Fixes (January 24, 2026)**\r
\r
#### New Features\r
- Added left click and drag for easier mouse map panning\r
- Added character popup when building first site and performing first upgrade on *Verdant Anchorage*\r
\r
#### Improvements\r
- Increased coin/item drop sizes and timers to make it easier to see and pick up\r
- Increased hitpoints bars for sites and enemies and scale to distance to make it easier to see\r
- Increased [Supply Drop](/abilities/supply_drop) crate size\r
\r
#### Balance Changes\r
- Reduced item drop rates and increased drop amounts for all enemies\r
\r
#### Bug Fixes\r
- Prevent camera control and using abilities after level loads in but before intro conversation starts\r
- Fixed an issue on controller with picking up coins and items under water\r
\r
#### Steam Integration\r
- Added rich presence tokens for menu and mission status\r
\r
## **v0.6.1 - QOL Improvements & Bug Fixes (January 17, 2026)**\r
\r
#### Improvements\r
- Reduced installation size from **~3GB** → **~1GB** \r
- Improved Pillbox Site targeting accuracy by adjusting attack line-of-sight origin\r
- Updated Site Menu descriptions for improved clarity\r
- Updated mission and loading screen images\r
- Added scrolling to armory description panel using controller right stick\r
\r
#### Balance Changes\r
- Increased the amount of rockets given on *Graywake Reach* from **600** → **1000**\r
\r
#### Bug Fixes\r
- Fixed incorrect controller icon display for DualShock and DualSense controllers\r
- Fixed an issue where attack range indicators could clip at extreme terrain elevation changes\r
- Fixed an issue with confirming selected ability on roads, bridges, and water when using a controller\r
\r
## **v0.6.0 - SAM Launcher & Supply Drop (January 10, 2026)**\r
\r
#### New Features\r
- Added [SAM Launcher](/enemies/sam_launcher) boss to *Sidewinder Pass* \r
- Added boss and resources icons to map flags\r
- Added [Supply Drop](/abilities/supply_drop) ability\r
- Added Advanced Logistics skill\r
\r
#### Bug Fixes\r
- Fixed targeting issue with enemy subcomponents\r
- Fixed issue with ability bar interactions with picked up abilities\r
- Fixed issue with Assault Rifle damage bonus\r
\r
## **v0.5.2 - More Equipment (January 3, 2026)**\r
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
- Nerf Missile Launcher Racking System upgrade from **50%** → **15%**\r
- Increase Tesla Coil damage from **20** → **50**\r
- Increase Plasma Gun damage from **100** → **150**\r
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
  - Increase hitpoints from **3000** → **3500**\r
  - Increase damage from **50** → **100**\r
  - Increase range from **40** → **45**\r
  - Increase armor from **40%** → **45%**\r
- Increase Pillbox damage from **44** → **45**\r
- Increase power usage of Field Tent from **200** → **400**\r
\r
## **v0.3.0 - Dusthorn Canyon (November 9, 2025)**\r
\r
#### New Features\r
- Added 7th campaign level: Dusthorn Canyon\r
\r
#### Balance Changes\r
- Remove most APCs from Harborview District\r
- Reduce resources needed to craft Rockets and Flak Shells\r
- Reduce credits given by Hidden Caches from **1000** → **500**\r
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
  - Buff base damage from **40 → 44**\r
  - Nerf crit chance from **3% → 2%**\r
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
