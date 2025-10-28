const e=`[Back](/enemies)\r
\r
# Fighter Jet\r
\r
A high speed combat aircraft built for precision strikes. It sweeps across the battlefield at top speed, unleashing missile salvos that can devastate exposed defenses. Though lightly armored, its velocity makes it difficult to destroy before it completes its attack run. Strong anti-air coverage and timing are key to stopping these jets before they deal serious damage.\r
\r
## Stats\r
- Health: 2000 hp\r
- Speed: 32 m/s\r
- Armor: 15 ap\r
- Credits: 500\r
\r
- Damage: 200\r
- Rate of Fire: 1 / 5\r
- Crit Chance: 5%\r
- Range: 150m\r
\r
## Drops\r
\r
### Items drop table roll chance: 40%\r
\r
| Icon | Name | Type | Description | Drop Chance | Value | Amount |\r
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|\r
| <img src="/items/scrap_metal.png" title="Scrap Metal" alt="Scrap Metal" width="96px"> | Scrap Metal | Resource | An assortment of salvaged metal scraps | 16.67% | 5 | 6 - 8 |\r
| <img src="/items/electronics.png" title="Electronics" alt="Electronics" width="96px"> | Electronics | Resource | Circuit boards, wires, and components salvaged from destroyed enemies | 12.5% | 30 | 4 - 6 |\r
| <img src="/items/explosives.png" title="Explosives" alt="Explosives" width="96px"> | Explosives | Resource | Assorted explosives designed for advanced weaponry | 16.67% | 100 | 2 - 3 |\r
| <img src="/items/energy_cells.png" title="Energy Cells" alt="Energy Cells" width="96px"> | Energy Cells | Resource | State of the art energy cells used to power advanced technology | 1 / 24 | 500 | 1 - 2 |\r
\r
### Abilities drop table roll chance: 50%\r
\r
| Icon | Name | Type | Tier | Description | Effect | Rank Required | Drop Chance |\r
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|\r
| <a href="/abilities/wraith_turret"><img src="/abilities/WraithTurret_256.png" title="Wraith Turret" alt="Wraith Turret" width="96px"></a> | <a href="/abilities/wraith_turret">Wraith Turret</a> | Attack | I | Deploys a temporary holographic turret that projects solid light rounds, dealing reduced damage but drawing all enemy fire. Immune to enemy damage and terrain restrictions | Instant | <img src="/ranks/0_shadow_256.png" title="Private (1)" alt="Private (1)" width="96px"> | 1 / 256 |\r
| <a href="/abilities/repair_area"><img src="/abilities/RepairArea_256.png" title="Repair Area" alt="Repair Area" width="96px"></a> | <a href="/abilities/repair_area">Repair Area</a> | Utility | I | Gradually restores health to all sites within an area over time | Instant | <img src="/ranks/0_shadow_256.png" title="Private (1)" alt="Private (1)" width="96px"> | 1 / 512 |\r
| <a href="/abilities/blizzard"><img src="/abilities/Blizzard_256.png" title="Blizzard" alt="Blizzard" width="96px"></a> | <a href="/abilities/blizzard">Blizzard</a> | Utility | I | Chills all enemies within an area, reducing their movement speed | Area | <img src="/ranks/1_shadow_256.png" title="Private First Class (2)" alt="Private First Class (2)" width="96px"> | 1 / 512 |\r
| <a href="/abilities/napalm_strike"><img src="/abilities/NapalmStrike_256.png" title="Napalm Strike" alt="Napalm Strike" width="96px"></a> | <a href="/abilities/napalm_strike">Napalm Strike</a> | Attack | I | Engulfs all enemies within an area in flames | Area | <img src="/ranks/4_shadow_256.png" title="Sergeant Major (5)" alt="Sergeant Major (5)" width="96px"> | 1 / 1024 |\r
| <a href="/abilities/missile_strike"><img src="/abilities/MissileStrike_256.png" title="Missile Strike" alt="Missile Strike" width="96px"></a> | <a href="/abilities/missile_strike">Missile Strike</a> | Attack | II | Launches a precision guided missile, locking onto the selected enemy target | Single Target | <img src="/ranks/1_shadow_256.png" title="Private First Class (2)" alt="Private First Class (2)" width="96px"> | 1 / 1024 |\r
| <a href="/abilities/landmines"><img src="/abilities/MinefieldMenace_256.png" title="Landmines" alt="Landmines" width="96px"></a> | <a href="/abilities/landmines">Landmines</a> | Attack | II | Deploys a cluster of landmines that detonate when enemies step on them | Area | <img src="/ranks/6_shadow_256.png" title="Major (7)" alt="Major (7)" width="96px"> | 1 / 4096 |\r
| <a href="/abilities/bubble_shield"><img src="/abilities/BubbleShield_256.png" title="Bubble Shield" alt="Bubble Shield" width="96px"></a> | <a href="/abilities/bubble_shield">Bubble Shield</a> | Utility | II | Deploys a bubble shield that temporarily protects all sites within its radius from damage | Area | <img src="/ranks/4_shadow_256.png" title="Sergeant Major (5)" alt="Sergeant Major (5)" width="96px"> | 1 / 4096 |\r
| <a href="/abilities/sub_surface"><img src="/abilities/SubSurface_256.png" title="Sub Surface" alt="Sub Surface" width="96px"></a> | <a href="/abilities/sub_surface">Sub Surface</a> | Utility | II | Prevents all submarines from submerging within an area | Area | <img src="/ranks/5_shadow_256.png" title="Captain (6)" alt="Captain (6)" width="96px"> | 1 / 4096 |\r
| <a href="/abilities/lightning_storm"><img src="/abilities/LightningStorm_256.png" title="Lightning Storm" alt="Lightning Storm" width="96px"></a> | <a href="/abilities/lightning_storm">Lightning Storm</a> | Attack | III | Calls down a lightning storm that strikes enemies in the target area, dealing damage over time | Area | <img src="/ranks/8_shadow_256.png" title="Colonel (9)" alt="Colonel (9)" width="96px"> | 1 / 8192 |\r
| <a href="/abilities/ion_beam"><img src="/abilities/IonBeam_256.png" title="Ion Beam" alt="Ion Beam" width="96px"></a> | <a href="/abilities/ion_beam">Ion Beam</a> | Attack | III | Fires a powerful ion beam from an orbital cannon, dealing massive instant damage to enemies | Area | <img src="/ranks/9_shadow_256.png" title="General I (10)" alt="General I (10)" width="96px"> | 1 / 8192 |\r
\r
\r
### Site drop table roll chance: 50%\r
\r
| Icon | Name | Type | Tier | Description | Ammunition | Drop Chance |\r
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|\r
| <a href="/sites/rotary_cannon"><img src="/sites/RotaryCannon_256.png" title="Rotary Cannon" alt="Rotary Cannon" width="96px"></a> | <a href="/sites/rotary_cannon">Rotary Cannon</a> | Military | II | A rapid fire turret that shreds through light and mid tier enemies. Reliable front line defense with high sustained fire | <a href="/ammunition"><img src="/ammunition/advanced_rounds.png" title="Advanced Rounds" alt="Advanced Rounds" width="64px"></a> | 1 / 4096 |\r
| <a href="/sites/missile_launcher"><img src="/sites/MissileLauncher_256.png" title="Missile Launcher" alt="Missile Launcher" width="96px"></a> | <a href="/sites/missile_launcher">Missile Launcher</a> | Military | II | A long range defense site that fires guided missiles. Deadly against armored units and aerial targets alike | <a href="/ammunition"><img src="/ammunition/missiles.png" title="Missiles" alt="Missiles" width="64px"></a> | 1 / 4096 |\r
| <a href="/sites/flamethrower"><img src="/sites/Flamethrower_256.png" title="Flamethrower" alt="Flamethrower" width="96px"></a> | <a href="/sites/flamethrower">Flamethrower</a> | Military | II | An area damage turret that sprays sustained fire. Effective vs grouped enemies but limited in range | <a href="/ammunition"><img src="/ammunition/incendiary_fuel.png" title="Incendiary Fuel" alt="Incendiary Fuel" width="64px"></a> | 1 / 4096 |\r
| <a href="/sites/tesla_coil"><img src="/sites/TeslaCoil_256.png" title="Tesla Coil" alt="Tesla Coil" width="96px"></a> | <a href="/sites/tesla_coil">Tesla Coil</a> | Military | II | A high voltage military site that unleashes focused electric bursts. Delivers heavy damage to single targets | N/A | 1 / 4096 |\r
| <a href="/sites/plasma_gun"><img src="/sites/PlasmaGun_256.png" title="Plasma Gun" alt="Plasma Gun" width="96px"></a> | <a href="/sites/plasma_gun">Plasma Gun</a> | Military | II | An advanced mid tier military site that fires explosive plasma bolts that detonate on impact. Deals heavy area damage to clustered enemies | <a href="/ammunition"><img src="/ammunition/plasma.png" title="Plasma" alt="Plasma" width="64px"></a> | 1 / 4096 |\r
| <a href="/sites/ion_cannon"><img src="/sites/IonCannon_256.png" title="Ion Cannon" alt="Ion Cannon" width="96px"></a> | <a href="/sites/ion_cannon">Ion Cannon</a> | Military | III | A state of the art military site that calls down an orbital energy strike. Deals massive concentrated damage with a long charge time | N/A | 1 / 8192 |\r
| <a href="/sites/power_generator"><img src="/sites/PowerGenerator_256.png" title="Power Generator" alt="Power Generator" width="96px"></a> | <a href="/sites/power_generator">Power Generator</a> | Power | II | A modern power site that supplies energy to mid tier defenses. Reliable and efficient under moderate demand | N/A | 1 / 4096 |\r
| <a href="/sites/core_reactor"><img src="/sites/CoreReactor_256.png" title="Core Reactor" alt="Core Reactor" width="96px"></a> | <a href="/sites/core_reactor">Core Reactor</a> | Power | III | An experimental state of the art energy facility that harnesses advanced cooling and plasma cycling technology to deliver massive power output | N/A | 1 / 8192 |\r
| <a href="/sites/financial_hub"><img src="/sites/FinancialHub_256.png" title="Financial Hub" alt="Financial Hub" width="96px"></a> | <a href="/sites/financial_hub">Financial Hub</a> | Economy | I | An administrative center that funnels investments and logistics contracts into steady credit income | N/A | 1 / 1024 |\r
| <a href="/sites/refinery"><img src="/sites/Refinery_256.png" title="Refinery" alt="Financial Hub" width="96px"></a> | <a href="/sites/refinery">Refinery</a> | Economy | I | A basic refinery used to produce refined oil barrels and propellant used to craft specialized ammunition | N/A | 1 / 1024 |\r
| <a href="/sites/fabrication_facility"><img src="/sites/FabricationFacility_256.png" title="Fabrication Facility" alt="Fabrication Facility" width="96px"></a> | <a href="/sites/fabrication_facility">Fabrication Facility</a> | Economy | II | A mid tier manufacturing site that generates advanced supplies and components | N/A | 1 / 1024 |\r
\r
### Skill points drop table roll chance: 50%\r
\r
Skill point: 1 / 4096\r
\r
### Rare items drop table roll chance: 50%\r
\r
| Icon | Name | Type | Description | Drop Chance | Value | Amount |\r
|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|\r
| <img src="/items/quantum_relay_device.png" title="Quantum Relay Device" alt="Quantum Relay Device" width="96px"> | Quantum Relay Device | Resource | A rare device used for long range encrypted communication. Sell on the Market for extra tokens | 1 / 512 | 2500 | 1 |`;export{e as default};
