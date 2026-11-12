# Mobile HUD redesign — before/after report

Checked 13 November 2026, Asia/Calcutta, with Playwright + system Chrome (SwiftShader).
Overlap test: 8 px intersection, parent/child ignored; elements with display:none / visibility:hidden / opacity < 0.05 excluded.

**After-shot result: 0 overlaps and 0 clips on every required screen at 360×800, 412×915, 800×360 and 915×412.**

| Viewport | Screen | Before | After | Overlaps | Clipped |
|---|---|---|---|---:|---:|
| 360x800 | onboarding | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/onboarding.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/onboarding.png` | 0 | 0 |
| 360x800 | tower | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/tower.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/tower.png` | 0 | 0 |
| 360x800 | floor | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/floor.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/floor.png` | 0 | 0 |
| 360x800 | flat-picker | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/flat-picker.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/flat-picker.png` | 0 | 0 |
| 360x800 | dollhouse | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/dollhouse.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/dollhouse.png` | 0 | 0 |
| 360x800 | walk | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/walk.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/walk.png` | 0 | 0 |
| 360x800 | rooms | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/rooms.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/rooms.png` | 0 | 0 |
| 360x800 | guided-tour | `(none — guided tour did not exist in the old HUD)` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/guided-tour.png` | 0 | 0 |
| 360x800 | lead-form | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/lead-form.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/lead-form.png` | 0 | 0 |
| 360x800 | toast | `/workspace/leadsetu-3d-demo/screens/mobile/before/360x800/toast.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/360x800/toast.png` | 0 | 0 |
| 412x915 | onboarding | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/onboarding.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/onboarding.png` | 0 | 0 |
| 412x915 | tower | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/tower.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/tower.png` | 0 | 0 |
| 412x915 | floor | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/floor.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/floor.png` | 0 | 0 |
| 412x915 | flat-picker | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/flat-picker.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/flat-picker.png` | 0 | 0 |
| 412x915 | dollhouse | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/dollhouse.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/dollhouse.png` | 0 | 0 |
| 412x915 | walk | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/walk.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/walk.png` | 0 | 0 |
| 412x915 | rooms | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/rooms.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/rooms.png` | 0 | 0 |
| 412x915 | guided-tour | `(none — guided tour did not exist in the old HUD)` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/guided-tour.png` | 0 | 0 |
| 412x915 | lead-form | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/lead-form.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/lead-form.png` | 0 | 0 |
| 412x915 | toast | `/workspace/leadsetu-3d-demo/screens/mobile/before/412x915/toast.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/412x915/toast.png` | 0 | 0 |
| 800x360 | onboarding | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/onboarding.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/onboarding.png` | 0 | 0 |
| 800x360 | tower | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/tower.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/tower.png` | 0 | 0 |
| 800x360 | floor | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/floor.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/floor.png` | 0 | 0 |
| 800x360 | flat-picker | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/flat-picker.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/flat-picker.png` | 0 | 0 |
| 800x360 | dollhouse | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/dollhouse.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/dollhouse.png` | 0 | 0 |
| 800x360 | walk | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/walk.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/walk.png` | 0 | 0 |
| 800x360 | rooms | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/rooms.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/rooms.png` | 0 | 0 |
| 800x360 | guided-tour | `(none — guided tour did not exist in the old HUD)` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/guided-tour.png` | 0 | 0 |
| 800x360 | lead-form | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/lead-form.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/lead-form.png` | 0 | 0 |
| 800x360 | toast | `/workspace/leadsetu-3d-demo/screens/mobile/before/800x360/toast.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/800x360/toast.png` | 0 | 0 |
| 915x412 | onboarding | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/onboarding.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/onboarding.png` | 0 | 0 |
| 915x412 | tower | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/tower.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/tower.png` | 0 | 0 |
| 915x412 | floor | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/floor.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/floor.png` | 0 | 0 |
| 915x412 | flat-picker | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/flat-picker.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/flat-picker.png` | 0 | 0 |
| 915x412 | dollhouse | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/dollhouse.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/dollhouse.png` | 0 | 0 |
| 915x412 | walk | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/walk.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/walk.png` | 0 | 0 |
| 915x412 | rooms | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/rooms.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/rooms.png` | 0 | 0 |
| 915x412 | guided-tour | `(none — guided tour did not exist in the old HUD)` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/guided-tour.png` | 0 | 0 |
| 915x412 | lead-form | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/lead-form.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/lead-form.png` | 0 | 0 |
| 915x412 | toast | `/workspace/leadsetu-3d-demo/screens/mobile/before/915x412/toast.png` | `/workspace/leadsetu-3d-demo/screens/mobile/after/915x412/toast.png` | 0 | 0 |

Extra after shots (not in the required list): `tower-menu.png` in each after viewport, showing time of day inside the sun menu.

