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
## **v0.9.0 - Landmarks, Performance and Stability Improvements (February 16, 2026)**\r
**Status:** 🟢 *Live on Steam Playtest*\r
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
- Removed unused assets and improved memory cleanup during loading and pause screens`;export{e as default};
