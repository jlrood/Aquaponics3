# Aquaponics Week Test

Standalone test for
- Week 1 to Week 6 progression
- End-of-week overlay
- Scrollable shop list

## Run
1. Install Node 18+
2. In this folder
   - npm install
   - npm run dev
3. Open the shown localhost URL

## Use
- End Week advances the week and shows the overlay
- Open Shop opens a scrollable list
- Week rules demo
  - Week 2 shows Advanced Pump button
  - Week 5 hides the hint

## Integrate
- Copy `src/systems/WeekSystem.js` and `src/ui/WeekOverlay.js` into your game
- Copy patterns from `GameScene.applyWeekRules` and `handleEndWeek`
- The shop scrolling code is in `ShopScene.create`
