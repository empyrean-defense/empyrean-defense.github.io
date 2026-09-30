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
- **Public Demo**: The public demo is LIVE! Come try the game, share feedback, and help shape development.\r
- **Steam Next Fest**: Check out Empyrean Defense at Steam Next Fest **June 15-22, 2026**.\r
- **Early Access Release**: Empyrean Defense launches into Early Access on **July 23, 2026**.\r
\r
## Status\r
\r
## **v0.15.0 - Highpoint Station, Assassinate Ability, Phase Disruptor & More (September 29, 2026)**\r
**Status:**\r
🟢 *Live on Steam*\r
🟢 *Live on Steam Demo*\r
\r
#### New Features\r
- Added **Highpoint Station**, an entirely new campaign mission set high in the snowy mountains\r
- Added the **Tactical Support Jet**, a heavily armored enemy aircraft equipped with a forward-mounted rotary cannon\r
- Added the **Assassinate** ability, a Tier II single target attack that instantly eliminates an enemy (excluding high value targets)\r
- Added the **Bounty Contract** skill, which guarantees two larger credit drops from enemies eliminated with the Assassinate ability\r
- Added the **Silent Blade** achievement for eliminating 100 enemies with the **Assassinate** ability\r
- Added the **Restoration Protocol** skill, which upgrades the Repair ability, restoring 50% more hitpoints to sites and 100% more to landmarks\r
- Added the **Clear Signal** achievement for defending Highpoint Station without any radar installation taking damage\r
- Added the Phase Disruptor equipment which increases the armor piercing of all military sites by 8%. Available on the Market for 50,000 tokens or craft at the Foundry using:\r
  - Heavy Alloy x250\r
  - Energy Cells x40\r
  - Void Resonator Core x1\r
- Added **Ammo estimates** on the mission select panel. A new section shows roughly how many rockets, flak shells and sniper rounds a mission needs, for the sites you've unlocked\r
- Added **Enemy Breaching** warnings. A new on-screen warning appears when an enemy is about to reach the end of its path\r
- Produces and Drops icons in the Armory. Site tooltips now show what each economy site produces. Enemy tooltips now show what each enemy can drop\r
- Market item tooltip update: resources that production sites can make now tell you where, e.g. "Produced at: Fabrication Facility, Refinery (Volatile Compound Synthesis)"\r
\r
#### Improvements\r
- In the site menu, items that need a site upgrade are grayed out until you buy it. Hover one to see which upgrade it needs. The icons light up as soon as the upgrade is bought\r
- Missions can now have more than one landmark. Losing any of them fails the mission\r
- Mission flags on the campaign map now show each mission's own landmark icon\r
- Market items of the same type and tier are now sorted by price\r
- Achievements that can't be earned yet in Early Access now say so in their tooltips\r
- Crafting components for the Ballistics Solver and Overcharge Module are now listed in a more consistent order in the Foundry\r
- Update the Acid Rain Ability icon\r
- Deployment warnings now appear in the full game too, and only warns about abilities when you have one unequipped and an empty slot to put it in\r
\r
#### Balance Changes\r
- Significant price reduction for Tier II and III sites:\r
  - Machine Gun: **2,000 → 1,400**\r
  - Missile Launcher: **,400 → 2,000**\r
  - Flamethrower: **2,400 → 1,800**\r
  - Tesla Coil: **2,800 → 2,000**\r
  - Plasma Gun: **3,200 → 2,400**\r
  - Ion Cannon: **4,000 → 2,600**\r
  - Core Reactor: **3,000 → 2,000**\r
  - Research Center: **2,400 → 1,800**\r
- Production Site Drop Amounts\r
  - Fabrication Facility\r
    - Scrap Metal: **15-25 → 15-30**\r
    - Propellant: **3-8 → 14-22**\r
    - Engine Components: **2-4 → 4-8**\r
    - Heavy Alloy: **1-4 → 2-4**\r
    - Explosives (requires upgrade): **1-4 → 2-4**\r
    - Electronics (requires upgrade): **1-4 → 18-24**\r
  - Refinery\r
    - Oil Barrel: **1 → 1-3**\r
    - Propellant (requires upgrade): **4-8 → 12-20**\r
- Scrap Metal: initial market supply raised from **1000 → 1500**\r
- Engine Components: initial market supply raised from **100 → 300**\r
- Electronics: initial market supply raised from **300 → 500**\r
- Significantly increased drop rates of items from High Value Targets\r
\r
#### Bug Fixes\r
- Fixed issue where the Assault Rifle was providing 3% damage boost instead of 5%\r
- Fixed the Founder's Pack popup not closing on a new save slot\r
- Fixed issue with Missile Strike and Bombing Raid abilities taking longer to hit on high elevation maps\r
- Fixed the "Show On-Screen Indicators" setting showing the "Show Item Drop Indicators" label and tooltip\r
- Fixed "Credits" currency tooltips in non-English languages\r
- Fixed the Gold medal name, which showed the word for the gold resource instead of the medal color in some languages\r
- Added missing translations for "SELECTED" in Chinese, Japanese, Korean and Russian\r
- Fixed the Korean translation of "Gold"\r
- Fixed an inconsistent Chinese translation for "Sites"\r
- Fixed several English typos\r
- Fixed a sizing issue in the Market center panel to prevent action buttons from being pushed off-screen`;export{e as default};
