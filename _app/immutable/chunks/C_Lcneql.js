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
- **Public Demo**: Our first public demo will be available in **March**. Come try the game, share feedback, and help shape development.\r
- **Steam Next Fest**: Check out Empyrean Defense at Steam Next Fest **June 15-22, 2026**.\r
- **Early Access Release**: Empyrean Defense launches into Early Access on **July 23, 2026**.\r
\r
## Status\r
\r
## **v0.11.0 - Breakpoint Reservoir & Performance Improvements (March 11, 2026)**\r
**Status:** 🟢 *Live on Steam Playtest*\r
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
- Fixed an issue where Landmarks were not properly registered by the mission manager `;export{e as default};
