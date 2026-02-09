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
## **v0.8.0 - Save Slots, Onboarding & Performance (February 8, 2026)**\r
**Status:** 🟢 *Live on Steam Playtest*\r
\r
#### New Features\r
- Added an onboarding checklist for new recruits to better familiarize them with the game menu and core mechanics\r
- Added multiple game save slots, and the game menu quit button now provides an option to return to the main menu\r
- Added enemy and site overlay shaders that trigger on damaging hits and abilities\r
- Added Rank 2 [Fire and Ice](/skills) skill: boosts the [Napalm Strike](/abilities/napalm_strike) ability's damage by 25% and increases the effectiveness of the [Blizzard](/abilities/blizzard) ability's slow by 25%\r
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
- Fixed an issue where out of ammo edge screen notifications could persist for certain ammo types`;export{e as default};
