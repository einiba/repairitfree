import { Guide } from "@/lib/types";

export const electronicsGuides: Guide[] = [
  // ==========================================
  // IPHONES
  // ==========================================
  {
    id: "apple-iphone-screen-flickering",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$200",
    toolsNeeded: [
      "Pentalobe screwdriver (P2)",
      "Suction cup",
      "Plastic spudger",
      "Tweezers",
    ],
    partsNeeded: [
      {
        name: "iPhone Display Assembly (model-specific)",
        costRange: "$30–$200",
        amazonUrl: "https://www.amazon.com/s?k=iphone+replacement+screen+assembly&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=iphone+replacement+screen+assembly&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your iPhone completely before starting any repair.",
      "If you see swelling or a bulging battery, stop immediately — this is a fire hazard. Take it to a pro.",
      "Work on a clean, flat surface. Tiny screws are easy to lose.",
    ],
    quickDiagnosis:
      "A flickering iPhone screen is usually caused by a loose display cable, a software glitch, or a damaged screen. The good news is that most people can fix this — and the software fixes cost nothing. Try those first before opening your phone.",
    steps: [
      {
        number: 1,
        title: "Try a force restart first",
        description:
          "Before opening anything, try a force restart. On iPhone 8 or newer: quickly press and release the Volume Up button, then quickly press and release the Volume Down button, then press and hold the Side button until you see the Apple logo. On iPhone 7: hold the Volume Down and Side buttons together for 10 seconds. This fixes many flickering issues caused by software glitches.",
      },
      {
        number: 2,
        title: "Update your iOS software",
        description:
          "Go to Settings > General > Software Update. If there's an update available, install it. Apple has fixed screen flickering bugs in past updates. Make sure your phone is charged above 50% or plugged in before updating.",
      },
      {
        number: 3,
        title: "Turn off Auto-Brightness",
        description:
          "Go to Settings > Accessibility > Display & Text Size and toggle off Auto-Brightness. Sometimes the light sensor causes flickering. If this fixes it, the sensor may be dirty or faulty — but at least you have a free workaround.",
      },
      {
        number: 4,
        title: "Check for physical damage",
        description:
          "If software fixes didn't help, look closely at your screen. Do you see any cracks, even tiny hairline ones? Press gently on the edges of the screen — if the flickering changes when you press, the display cable is probably loose inside.",
      },
      {
        number: 5,
        title: "Reseat the display cable (if comfortable opening your phone)",
        description:
          "Power off your iPhone. Remove the two pentalobe screws at the bottom. Use the suction cup to gently lift the screen. Be very careful — there are ribbon cables connecting the screen to the phone. Use the plastic spudger to gently disconnect and reconnect the display cable connectors. This is like unplugging and replugging a USB cable. Search YouTube for your exact iPhone model for a visual guide.",
      },
      {
        number: 6,
        title: "Replace the screen if reseating didn't work",
        description:
          "If the cable reseat didn't fix it, you likely need a new display assembly. Disconnect the old screen completely, then connect the new one following the same cable connections. Make sure every connector clicks firmly into place.",
      },
      {
        number: 7,
        title: "Test before fully closing",
        description:
          "Before screwing everything back together, power on the phone and check that the screen works properly — no flickering, touch works everywhere, and the colors look right. Then close the phone and replace the pentalobe screws.",
      },
    ],
    alternativeCauses: [
      "Water damage inside the phone can cause flickering. Check for a red indicator in the SIM tray slot.",
      "A failing GPU (graphics chip) on the logic board can cause flickering — this is not a DIY fix.",
      "Third-party screen replacements sometimes flicker due to low quality. Try an OEM or high-quality aftermarket screen.",
    ],
    whenToCallPro:
      "If the software fixes don't work and you're not comfortable opening your phone, take it to a repair shop. Screen replacements cost $50–$150 at a third-party shop or $200–$330 at Apple. If the flickering is caused by a logic board issue, a pro will need to diagnose it — repairs can cost $200–$400.",
    metaTitle:
      "iPhone Screen Flickering — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your iPhone screen flickering. Step-by-step guide from software fixes to screen replacement. Difficulty: Medium. Save $150+.",
  },
  {
    id: "apple-iphone-battery-draining-fast",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "15-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Pentalobe screwdriver (P2) — only if replacing battery",
      "Suction cup — only if replacing battery",
      "Plastic spudger — only if replacing battery",
      "Tri-point Y000 screwdriver — only if replacing battery",
    ],
    partsNeeded: [
      {
        name: "iPhone Replacement Battery (model-specific)",
        costRange: "$12–$30",
        amazonUrl: "https://www.amazon.com/s?k=iphone+replacement+battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=iphone+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never puncture or bend an iPhone battery — they can catch fire.",
      "If your battery is swollen or bulging, do not try to remove it yourself. Take it to a professional immediately.",
      "Only use batteries designed for your specific iPhone model.",
    ],
    quickDiagnosis:
      "If your iPhone battery drains too fast, it's usually caused by a rogue app, bad settings, or an old battery. The great news is that most fixes are free software changes. You can check your battery's health right in your settings to know if it needs replacing.",
    steps: [
      {
        number: 1,
        title: "Check your battery health",
        description:
          "Go to Settings > Battery > Battery Health. If Maximum Capacity is below 80%, your battery is worn out and should be replaced. If it's above 80%, the problem is likely software — keep going with the next steps.",
      },
      {
        number: 2,
        title: "Find what's draining your battery",
        description:
          "Go to Settings > Battery and scroll down to see which apps are using the most battery. If one app is using way more than the others, that's your culprit. Try deleting and reinstalling that app.",
      },
      {
        number: 3,
        title: "Turn off background app refresh",
        description:
          "Go to Settings > General > Background App Refresh. Turn it off for apps that don't need to update in the background (most of them). This stops apps from running when you're not using them.",
      },
      {
        number: 4,
        title: "Reduce location tracking",
        description:
          "Go to Settings > Privacy & Security > Location Services. Set most apps to 'While Using' instead of 'Always'. GPS is one of the biggest battery drains. You can also turn off Location Services completely to test if it helps.",
      },
      {
        number: 5,
        title: "Lower screen brightness and enable Auto-Lock",
        description:
          "Swipe down from the top right to open Control Center and lower your brightness. Then go to Settings > Display & Brightness > Auto-Lock and set it to 30 seconds or 1 minute. Your screen is the single biggest battery user.",
      },
      {
        number: 6,
        title: "Reset all settings if nothing else works",
        description:
          "Go to Settings > General > Transfer or Reset iPhone > Reset > Reset All Settings. This won't delete your photos or apps, but it resets Wi-Fi passwords and customized settings. It fixes many hidden software issues that drain battery.",
      },
    ],
    alternativeCauses: [
      "A recent iOS update can sometimes cause temporary battery drain for a day or two while the phone re-indexes data.",
      "Weak cell signal forces your phone to work harder, which drains the battery much faster.",
      "Push email (checking for new mail constantly) uses a lot of battery. Switch to fetch every 15 or 30 minutes in Settings > Mail > Accounts > Fetch New Data.",
    ],
    whenToCallPro:
      "If your battery health is below 80%, replacing it yourself costs $12–$30 for the part. Apple charges $89–$119 and third-party shops charge $40–$70. If you're not comfortable opening your phone, a shop replacement is worth the money — it's quick and they'll guarantee the work.",
    metaTitle:
      "iPhone Battery Draining Fast — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your iPhone battery draining fast. Free software fixes plus battery replacement guide. Difficulty: Easy. Save $89+.",
  },
  {
    id: "apple-iphone-speaker-not-working",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Soft-bristle toothbrush",
      "Compressed air can",
      "Pentalobe screwdriver (P2) — only if replacing speaker",
      "Plastic spudger — only if replacing speaker",
    ],
    partsNeeded: [
      {
        name: "iPhone Loudspeaker Replacement (model-specific)",
        costRange: "$5–$25",
        amazonUrl: "https://www.amazon.com/s?k=iphone+loudspeaker+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=iphone+loudspeaker+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your iPhone before cleaning or opening it.",
      "Don't stick metal objects into the speaker grille — you'll damage the speaker membrane.",
      "Use compressed air gently. Blasting at full pressure can damage internal components.",
    ],
    quickDiagnosis:
      "If your iPhone speaker isn't working, it's often caused by a blocked speaker grille, a software glitch, or a Bluetooth connection stealing your audio. Most of the time, a quick cleaning or settings change will fix it. You can usually solve this in under 10 minutes.",
    steps: [
      {
        number: 1,
        title: "Check the obvious stuff first",
        description:
          "Make sure your ringer switch (the little switch on the left side of your phone) isn't set to silent — you'll see orange if it's on silent. Also check that your volume is turned up by pressing the Volume Up button.",
      },
      {
        number: 2,
        title: "Turn off Bluetooth",
        description:
          "Go to Settings > Bluetooth and turn it off. Your phone might be sending audio to a Bluetooth speaker, headphones, or your car instead of the built-in speaker. This is one of the most common reasons people think their speaker is broken.",
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description:
          "Look at the bottom of your iPhone — the speaker grille is the row of small holes to the right of the charging port. Use a soft-bristle toothbrush to gently brush across the holes. Then use short bursts of compressed air from about 2 inches away. Pocket lint is a very common cause of muffled or no sound.",
      },
      {
        number: 4,
        title: "Test with different apps",
        description:
          "Play a song in the Music or YouTube app, then try making a phone call on speaker. If one works but not the other, it's a software issue with a specific app, not a hardware problem. Also try going to Settings > Sounds & Haptics and dragging the Ringer slider — you should hear a preview sound.",
      },
      {
        number: 5,
        title: "Force restart your iPhone",
        description:
          "On iPhone 8 or newer: quickly press Volume Up, then Volume Down, then hold the Side button until the Apple logo appears. This clears audio software glitches that can make the speaker seem broken.",
      },
      {
        number: 6,
        title: "Replace the speaker if nothing else worked",
        description:
          "If cleaning and software fixes didn't help, the speaker itself may be blown or damaged. Power off the phone, remove the bottom pentalobe screws, carefully open the phone, and replace the loudspeaker module. Search for a teardown video for your exact model — it's usually just a few screws and one connector.",
      },
    ],
    alternativeCauses: [
      "Water damage can short out the speaker. If your phone got wet recently, let it dry completely for 48 hours before assuming the speaker is dead.",
      "A case or screen protector might be blocking the speaker grille. Try removing your case and testing.",
      "The earpiece speaker (top of phone) and loudspeaker (bottom) are separate. If only one doesn't work, that narrows down the problem.",
    ],
    whenToCallPro:
      "If cleaning and software fixes don't work, a speaker replacement at a repair shop costs $40–$80. Apple charges $100+ for out-of-warranty speaker repairs. The part itself is cheap ($5–$25), so if you're comfortable with small screws, the DIY route saves a lot.",
    metaTitle:
      "iPhone Speaker Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your iPhone speaker not working. Cleaning tips and speaker replacement guide. Difficulty: Medium. Save $80+.",
  },
  {
    id: "apple-iphone-stuck-on-apple-logo",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "stuck-on-apple-logo",
    problemTitle: "Stuck on Apple Logo",
    difficulty: "Easy",
    timeEstimate: "10-60 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Lightning or USB-C cable",
      "Computer with iTunes or Finder",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Using recovery mode or DFU mode will erase your data if you haven't backed up. Try a force restart first.",
      "Make sure your computer has the latest version of iTunes (Windows) or macOS (Mac) before attempting a restore.",
    ],
    quickDiagnosis:
      "An iPhone stuck on the Apple logo is usually caused by a failed software update, a bad app, or corrupted data. This is almost always a software problem — not a hardware one. Most people fix it with a simple force restart, and it costs nothing.",
    steps: [
      {
        number: 1,
        title: "Wait a few minutes",
        description:
          "Sometimes after an update, your iPhone will show the Apple logo for up to 15 minutes while it finishes installing. If it's been less than 15 minutes, give it more time. If it's been over 30 minutes, move to the next step.",
      },
      {
        number: 2,
        title: "Force restart your iPhone",
        description:
          "On iPhone 8 or newer: quickly press and release Volume Up, quickly press and release Volume Down, then press and hold the Side button for about 10 seconds until the Apple logo disappears and reappears. On iPhone 7: hold Volume Down and Side button together for 10 seconds. On iPhone 6s or older: hold Home and Top button together. This fixes the problem about half the time.",
      },
      {
        number: 3,
        title: "Try recovery mode if force restart didn't work",
        description:
          "Connect your iPhone to a computer with a cable. Open iTunes (Windows) or Finder (Mac). Then force restart again using the same buttons from Step 2, but keep holding until you see the recovery mode screen (a cable pointing to a computer icon). Your computer will detect the phone and give you the option to Update — try Update first, as it keeps your data.",
      },
      {
        number: 4,
        title: "Use DFU mode as a last resort",
        description:
          "If recovery mode didn't work, try DFU (Device Firmware Update) mode. Connect your phone to the computer. On iPhone 8+: press Volume Up, press Volume Down, hold Side button for 10 seconds, then while holding Side also hold Volume Down for 5 seconds, then release Side but keep holding Volume Down for 10 more seconds. The screen should stay black but iTunes/Finder will detect it. Choose Restore — note this erases everything.",
      },
      {
        number: 5,
        title: "Restore and set up your iPhone",
        description:
          "After the restore completes, your iPhone will restart like new. Follow the setup screens. If you have an iCloud backup, you can restore your data from it during setup. Go to Settings > General > Software Update to make sure you're on the latest iOS version.",
      },
    ],
    alternativeCauses: [
      "A failing battery can cause boot loops. If your phone dies quickly or shuts off randomly, the battery may need replacing.",
      "Water damage to the logic board can cause startup issues.",
      "Very rarely, a faulty storage chip (NAND) prevents the phone from booting. This is not a DIY fix.",
    ],
    whenToCallPro:
      "If DFU mode and a full restore don't fix the problem, it's likely a hardware issue — either the logic board or NAND storage chip. Repair costs $100–$350 depending on the model. At that price, compare it to the cost of a refurbished replacement phone.",
    metaTitle:
      "iPhone Stuck on Apple Logo — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your iPhone stuck on the Apple logo. Force restart and recovery mode guide. Difficulty: Easy. Save $100+.",
  },
  {
    id: "apple-iphone-face-id-not-working",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "face-id-not-working",
    problemTitle: "Face ID Not Working",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Microfiber cloth",
      "Soft-bristle toothbrush",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Do not attempt to replace the TrueDepth camera system yourself — it is paired to your phone's logic board and a replacement will not work unless done by Apple.",
      "Avoid spraying liquid cleaner directly on the notch or Dynamic Island area.",
    ],
    quickDiagnosis:
      "Face ID problems are usually caused by a dirty sensor, a software glitch, or a screen protector blocking the camera. The fix is almost always free — just cleaning and resetting. Most people get Face ID working again in a few minutes.",
    steps: [
      {
        number: 1,
        title: "Clean the TrueDepth camera area",
        description:
          "The TrueDepth camera is in the notch (or Dynamic Island on newer models) at the top of your screen. Use a clean microfiber cloth to gently wipe the entire area. Oils from your face, dirt, and smudges can block the sensors. Use a soft toothbrush to clean any gunk from the edges.",
      },
      {
        number: 2,
        title: "Remove your screen protector and case",
        description:
          "Some screen protectors — especially thick tempered glass ones — can block the Face ID sensors. Remove your screen protector and test Face ID. If it works without it, you need a Face ID-compatible screen protector with a proper cutout.",
      },
      {
        number: 3,
        title: "Reset Face ID and set it up again",
        description:
          "Go to Settings > Face ID & Passcode, enter your passcode, and tap Reset Face ID. Then tap Set Up Face ID and follow the on-screen instructions. Move your head slowly in a circle when prompted. Make sure you're in good lighting and not wearing anything unusual that covers your face.",
      },
      {
        number: 4,
        title: "Set up an Alternate Appearance",
        description:
          "If Face ID works sometimes but not others — for example with glasses or a hat — go to Settings > Face ID & Passcode > Set Up an Alternate Appearance. This teaches Face ID to recognize you in a second look.",
      },
      {
        number: 5,
        title: "Update iOS and restart",
        description:
          "Go to Settings > General > Software Update and install any available updates. Then force restart your phone (Volume Up, Volume Down, hold Side button). Apple has fixed several Face ID bugs through software updates.",
      },
      {
        number: 6,
        title: "Reset all settings",
        description:
          "If nothing else works, go to Settings > General > Transfer or Reset iPhone > Reset > Reset All Settings. This won't delete your photos or apps but resets system settings. It can fix deep software issues affecting Face ID.",
      },
    ],
    alternativeCauses: [
      "A cracked screen near the notch area can damage the TrueDepth sensors even if they look fine from the outside.",
      "After a third-party screen replacement, Face ID often stops working because the sensor module wasn't properly transferred.",
      "Extreme cold temperatures can temporarily affect Face ID performance.",
    ],
    whenToCallPro:
      "If cleaning and software fixes don't work, the TrueDepth camera system may be damaged. This is NOT a DIY repair — the sensors are paired to your phone's motherboard. Apple charges $300–$400 for Face ID repair. Third-party shops usually can't fix this because the parts must be programmed by Apple. If your phone is under warranty or AppleCare, get it fixed for free or at reduced cost.",
    metaTitle:
      "iPhone Face ID Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix iPhone Face ID not working. Cleaning and reset guide. Difficulty: Medium. Save $300+.",
  },

  // ==========================================
  // ANDROID PHONES
  // ==========================================
  {
    id: "samsung-galaxy-screen-cracked-repair",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "screen-cracked-repair",
    problemTitle: "Screen Cracked Repair",
    difficulty: "Hard",
    timeEstimate: "60-120 minutes",
    costEstimate: "$30–$250",
    toolsNeeded: [
      "Heat gun or hair dryer",
      "Suction cup",
      "Plastic spudger",
      "Phillips #00 screwdriver",
      "Tweezers",
      "Plastic opening picks",
      "Adhesive strips or B-7000 glue",
    ],
    partsNeeded: [
      {
        name: "Samsung Galaxy Screen Assembly with Frame (model-specific)",
        costRange: "$30–$250",
        amazonUrl: "https://www.amazon.com/s?k=samsung+galaxy+screen+replacement+assembly&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+screen+replacement+assembly&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your phone and remove the SIM card before starting.",
      "Wear safety glasses — cracked glass can flake off in sharp pieces.",
      "Be extremely careful around the battery. Samsung batteries can ignite if punctured.",
      "Use a heat gun on LOW setting or a hair dryer. Too much heat can damage the AMOLED display underneath.",
    ],
    quickDiagnosis:
      "A cracked Samsung Galaxy screen looks scary, but screen replacement is one of the most common phone repairs in the world. If you buy a screen assembly that includes the frame, it makes the job much easier. This is a harder repair, but thousands of people do it every day with the help of a YouTube video for their specific model.",
    steps: [
      {
        number: 1,
        title: "Back up your data and power off the phone",
        description:
          "Before you start, back up everything to Google Drive or a computer. Power off the phone completely and remove the SIM card tray. You don't want to lose your photos and contacts if something goes wrong.",
      },
      {
        number: 2,
        title: "Heat the back panel to loosen the adhesive",
        description:
          "Use a hair dryer on high or a heat gun on low for about 2-3 minutes on the back glass. The goal is to soften the glue holding the back cover on. It should feel hot but not too hot to briefly touch. Apply the suction cup to the back and gently pull while sliding a plastic opening pick into the gap.",
      },
      {
        number: 3,
        title: "Remove the back panel and disconnect the battery",
        description:
          "Slide the plastic pick around all edges to cut through the adhesive. Remove the back panel. Inside, you'll see screws holding down a metal plate over the battery connector. Remove those screws and use a plastic spudger to gently pop the battery connector off the motherboard. This is crucial for safety.",
      },
      {
        number: 4,
        title: "Disconnect all ribbon cables",
        description:
          "Carefully disconnect the display cable, camera cables, and any other ribbon cables connected to the motherboard. Take a photo at each step so you remember where everything goes. Remove any screws holding brackets or metal plates in place. Keep screws organized — a magnetic mat or labeled tape helps.",
      },
      {
        number: 5,
        title: "Transfer components to the new screen assembly",
        description:
          "If you bought a screen with frame, transfer the motherboard, cameras, battery, charging port, and other components from the old frame to the new one. If you bought just a screen, you'll need to separate the old screen from the frame using heat and a pick, then attach the new screen. The frame version is much easier.",
      },
      {
        number: 6,
        title: "Reconnect everything and test",
        description:
          "Reconnect all ribbon cables, making sure each one clicks into place. Reconnect the battery. Before sealing the phone, power it on and test: does the screen work? Does touch work everywhere? Do the cameras work? Test the speakers and charging port too.",
      },
      {
        number: 7,
        title: "Seal the phone back up",
        description:
          "Once everything checks out, apply new adhesive strips or a thin line of B-7000 glue around the edges of the back panel. Press the back cover into place firmly and let it set for at least 30 minutes. Avoid getting the phone wet for 24 hours — the water resistance is reduced after opening.",
      },
    ],
    alternativeCauses: [
      "If the screen is cracked but still fully functional, you can apply a tempered glass screen protector on top to prevent further damage and keep using it.",
      "If the display shows colored lines or dead spots, the AMOLED panel underneath is damaged too — you need a full display assembly, not just the glass.",
    ],
    whenToCallPro:
      "This is a hard repair. Samsung charges $200–$350 for screen replacement. Third-party shops charge $100–$250 depending on the model. If you've never opened a phone before, watching a full teardown video for your exact model first is essential. If you're nervous about it, a repair shop is a good investment.",
    metaTitle:
      "Samsung Galaxy Screen Cracked Repair — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a cracked Samsung Galaxy screen yourself. Full teardown guide with parts list. Difficulty: Hard. Save $200+.",
  },
  {
    id: "samsung-galaxy-wont-turn-on",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "wont-turn-on",
    problemTitle: "Won't Turn On",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "USB-C or Micro-USB charging cable",
      "Wall charger (not a computer USB port)",
      "Paperclip or SIM eject tool",
    ],
    partsNeeded: [
      {
        name: "Samsung Galaxy Replacement Battery (model-specific)",
        costRange: "$10–$30",
        amazonUrl: "https://www.amazon.com/s?k=samsung+galaxy+replacement+battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Use only a Samsung-compatible charger. Cheap knockoff chargers can damage your phone.",
      "If the phone feels hot while charging but the screen stays black, unplug it immediately and take it to a repair shop.",
    ],
    quickDiagnosis:
      "A Samsung Galaxy that won't turn on is usually just completely dead from a drained battery or a frozen system. Don't panic — this is rarely a sign of permanent damage. A simple charge and force restart fixes it most of the time, and it costs nothing to try.",
    steps: [
      {
        number: 1,
        title: "Charge it for at least 30 minutes",
        description:
          "Plug your phone into a wall charger (not a computer). Use the original cable if you have it. Leave it plugged in for at least 30 minutes even if nothing appears on screen. When a battery is completely dead, it can take several minutes before the phone shows any sign of life — even a charging icon.",
      },
      {
        number: 2,
        title: "Try a force restart while plugged in",
        description:
          "While the phone is still plugged into the charger, press and hold the Power button and Volume Down button at the same time for 15-20 seconds. If the phone vibrates or shows the Samsung logo, let go and wait for it to boot up. Sometimes you need to try this 2-3 times.",
      },
      {
        number: 3,
        title: "Try a different cable and charger",
        description:
          "A bad cable is one of the most common reasons a phone won't charge. Try a different USB cable and a different wall charger. If you can, try a wireless charger. Also check the charging port on your phone for lint or debris — use a toothpick (not metal) to gently clean it out.",
      },
      {
        number: 4,
        title: "Boot into Safe Mode",
        description:
          "If your phone briefly turns on then shuts off, try Safe Mode. Press and hold the Power button until the Samsung logo appears, then immediately press and hold the Volume Down button until the phone finishes booting. You'll see 'Safe mode' at the bottom. If it stays on in Safe Mode, a recently installed app is the problem — uninstall your newest apps.",
      },
      {
        number: 5,
        title: "Try Recovery Mode",
        description:
          "If the phone still won't boot normally: while the phone is off, press and hold Volume Up + Power button together until you see the recovery menu. Use the volume buttons to scroll and the power button to select. Try 'Wipe cache partition' first — this doesn't delete your data. Only use 'Factory reset' as a last resort, as it erases everything.",
      },
    ],
    alternativeCauses: [
      "A completely dead battery that won't hold a charge needs to be replaced. If the phone only works while plugged in, the battery is shot.",
      "Liquid damage can cause a phone to stop powering on. Look for a red or pink water indicator inside the SIM tray slot.",
      "A faulty power button can prevent the phone from turning on even if the battery is fine.",
    ],
    whenToCallPro:
      "If charging, force restart, and recovery mode don't work, the issue is likely a dead battery ($10–$30 part, $40–$80 at a shop) or a damaged motherboard ($100–$300+). A repair shop can test the battery quickly to tell you which it is.",
    metaTitle:
      "Samsung Galaxy Won't Turn On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Samsung Galaxy that won't turn on. Charging fixes and recovery mode guide. Difficulty: Easy. Save $80+.",
  },
  {
    id: "samsung-galaxy-overheating",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "overheating",
    problemTitle: "Overheating",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "If your phone is so hot it's uncomfortable to hold, power it off immediately and place it on a cool surface away from flammable materials.",
      "Never put an overheating phone in a refrigerator or freezer — rapid temperature changes can cause condensation inside the phone and cause more damage.",
      "A swollen battery is a fire hazard. If your back panel is lifting or bulging, stop using the phone and take it to a repair shop.",
    ],
    quickDiagnosis:
      "Samsung Galaxy phones overheating is almost always caused by software running in the background, heavy use while charging, or direct sunlight. The good news is that this is usually a settings issue, not a hardware problem. A few quick changes should cool your phone down right away.",
    steps: [
      {
        number: 1,
        title: "Remove the case and move to a cool area",
        description:
          "Take off your phone case — cases trap heat. Move your phone out of direct sunlight and away from warm surfaces. If you're charging, unplug it. Let it sit for 5-10 minutes and it should cool down on its own.",
      },
      {
        number: 2,
        title: "Close all apps and restart",
        description:
          "Tap the Recent Apps button (the three lines at the bottom) and close all open apps. Then restart your phone by holding the power button and tapping Restart. Background apps running out of control are the most common cause of overheating.",
      },
      {
        number: 3,
        title: "Check for a rogue app",
        description:
          "Go to Settings > Battery and Device Care > Battery. Look at which apps are using the most power. If an app you barely use is at the top of the list, it's probably running wild in the background. Uninstall it or force stop it in Settings > Apps.",
      },
      {
        number: 4,
        title: "Update your software",
        description:
          "Go to Settings > Software Update > Download and install. Samsung regularly releases updates that fix overheating bugs. Also update all your apps from the Google Play Store — tap your profile icon > Manage apps & device > Update all.",
      },
      {
        number: 5,
        title: "Turn off features you don't need",
        description:
          "Turn off 5G (switch to LTE), GPS, Bluetooth, and Wi-Fi when you don't need them. Go to Settings > Display and lower the screen brightness and set the screen resolution to FHD+ instead of WQHD+ if available. Each of these reduces heat.",
      },
      {
        number: 6,
        title: "Avoid heavy use while charging",
        description:
          "Playing games or watching video while charging produces a lot of heat. If your phone overheats mainly while charging, use a Samsung-branded charger (not a fast charger) and don't use the phone until it's done. You can also turn on Adaptive Charging in Settings > Battery.",
      },
    ],
    alternativeCauses: [
      "A degraded battery can cause overheating. If your phone is over 2 years old and gets hot quickly, the battery may need replacing.",
      "Malware can cause constant background processing. Run a scan with the built-in Device Care or install a trusted antivirus app.",
      "Using the camera for extended periods (recording long videos) is normal to cause heat.",
    ],
    whenToCallPro:
      "If your phone overheats even when idle and after trying all these steps, the battery may be failing. Battery replacement costs $40–$80 at a repair shop. If the back panel is bulging or the phone smells like chemicals, stop using it immediately — this is a battery failure and needs professional attention right away.",
    metaTitle:
      "Samsung Galaxy Overheating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Samsung Galaxy overheating problem. Quick settings changes to cool your phone. Difficulty: Easy. Save $80+.",
  },
  {
    id: "google-pixel-not-charging",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Wooden or plastic toothpick",
      "Flashlight",
      "Compressed air can (optional)",
    ],
    partsNeeded: [
      {
        name: "USB-C Charging Cable",
        costRange: "$6–$15",
        amazonUrl: "https://www.amazon.com/s?k=usb+c+charging+cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=usb+c+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never use a metal object to clean the charging port — you can short-circuit the pins and fry your phone.",
      "Don't force the charging cable in. If it doesn't click in smoothly, the port needs cleaning or repair.",
    ],
    quickDiagnosis:
      "A Google Pixel not charging is almost always caused by lint packed inside the charging port, a bad cable, or a software glitch. Before you assume the worst, a 5-minute cleaning usually fixes it. Most people are surprised how much pocket lint builds up in there.",
    steps: [
      {
        number: 1,
        title: "Inspect the charging port",
        description:
          "Grab a flashlight and look inside the USB-C port on the bottom of your Pixel. You'll probably see lint, dust, or debris packed in there. This is the number one reason phones stop charging. The lint prevents the cable from making a solid connection.",
      },
      {
        number: 2,
        title: "Clean out the charging port",
        description:
          "Power off your phone first. Take a wooden or plastic toothpick and very gently scrape out any lint or debris from the port. Work carefully — the pins inside are delicate. You can also use short bursts of compressed air to blow out dust. Clean until you can see the metal contacts clearly.",
      },
      {
        number: 3,
        title: "Try a different cable and charger",
        description:
          "USB-C cables wear out and break internally even if they look fine outside. Try a different cable and a different wall charger. Make sure you're plugging into a wall outlet, not a computer USB port — computers often don't provide enough power. Google recommends using an 18W or 30W USB-C charger.",
      },
      {
        number: 4,
        title: "Try wireless charging",
        description:
          "If you have a Pixel 3 or newer, try a wireless charger. If wireless charging works but wired doesn't, the charging port itself is damaged and may need replacement. If neither works, it's likely a battery or software problem.",
      },
      {
        number: 5,
        title: "Force restart while plugged in",
        description:
          "With the charger plugged in, hold the Power button for 30 seconds. This forces a restart even if the screen appears completely dead. Sometimes a frozen system prevents the charging icon from appearing even though the phone is actually charging.",
      },
      {
        number: 6,
        title: "Boot into Safe Mode",
        description:
          "If the phone turns on but stops charging after a few percent, boot into Safe Mode: hold the Power button, then long-press 'Power off' until you see 'Reboot to safe mode'. If it charges normally in Safe Mode, a third-party app is interfering with charging. Uninstall recent apps.",
      },
    ],
    alternativeCauses: [
      "The battery may be completely dead. Charge for at least 1 hour before giving up — deeply drained batteries can take a long time to show any sign of life.",
      "Moisture in the charging port can prevent charging. Let the phone dry out for a few hours.",
      "A damaged charging port board needs soldering or replacement — usually a $50–$80 repair at a shop.",
    ],
    whenToCallPro:
      "If port cleaning and new cables don't fix it, the charging port may need replacement. At a repair shop, this costs $50–$80. If the battery itself is dead, replacement costs $50–$100. Google's official repair through iFixit costs $70–$100 for battery replacement with genuine parts.",
    metaTitle:
      "Google Pixel Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Google Pixel not charging. Port cleaning and troubleshooting guide. Difficulty: Easy. Save $80+.",
  },
  {
    id: "android-phone-boot-loop",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "boot-loop",
    problemTitle: "Boot Loop",
    difficulty: "Medium",
    timeEstimate: "15-60 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "USB cable",
      "Computer (optional, for ADB)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "A factory reset will erase all data on your phone. Try Safe Mode and cache wipe first.",
      "If your phone is extremely hot during a boot loop, power it off and let it cool for 15 minutes before trying again.",
    ],
    quickDiagnosis:
      "A boot loop means your Android phone keeps restarting over and over — it shows the logo, starts to boot, then restarts. This is almost always a software problem caused by a bad app, a corrupted update, or corrupted system files. Most of the time, you can fix it without losing your data.",
    steps: [
      {
        number: 1,
        title: "Let the battery drain completely",
        description:
          "If your phone is stuck in a boot loop, sometimes the simplest fix is to let the battery die completely. Just leave it alone until it runs out of power and the screen goes black. Then charge it for 30 minutes and try turning it on. This clears the loop by forcing a cold start.",
      },
      {
        number: 2,
        title: "Force a power off",
        description:
          "Press and hold the Power button for 30 full seconds. On some phones, hold Power + Volume Down for 30 seconds. This forces the phone to shut off completely. Wait 30 seconds, then press Power to turn it back on.",
      },
      {
        number: 3,
        title: "Boot into Safe Mode",
        description:
          "Turn off the phone. Then turn it on and as soon as you see the manufacturer logo, press and hold the Volume Down button until the phone finishes booting. You'll see 'Safe mode' at the bottom of the screen. If the phone works in Safe Mode, a recently installed app is causing the boot loop. Uninstall your newest apps one by one until the problem stops.",
      },
      {
        number: 4,
        title: "Wipe the cache partition",
        description:
          "Power off the phone. Hold Volume Up + Power (or Volume Up + Home + Power on older Samsung phones) until you see the recovery menu. Use the Volume buttons to highlight 'Wipe cache partition' and press Power to select. This clears temporary system files without deleting your personal data. Reboot when done.",
      },
      {
        number: 5,
        title: "Factory reset from recovery mode (last resort)",
        description:
          "If nothing else works, you'll need a factory reset. From the same recovery menu, select 'Wipe data/factory reset'. This erases everything on your phone. After it finishes, select 'Reboot system now'. Your phone will boot up fresh like the day you bought it. You can restore from a Google backup during setup.",
      },
    ],
    alternativeCauses: [
      "A failed system update can cause boot loops. If this started right after an update, a factory reset usually fixes it.",
      "Insufficient storage space can prevent Android from booting properly. This is common if your phone was nearly full.",
      "A failing eMMC/UFS storage chip can cause boot loops — this is a hardware issue that requires professional repair.",
    ],
    whenToCallPro:
      "If a factory reset from recovery mode doesn't fix the boot loop, the problem is hardware — likely the storage chip or motherboard. Repairs cost $80–$250 depending on the phone. Compare that to the cost of a new phone before deciding.",
    metaTitle:
      "Android Phone Boot Loop — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an Android phone stuck in a boot loop. Safe Mode and recovery mode guide. Difficulty: Medium. Save $100+.",
  },

  // ==========================================
  // LAPTOPS
  // ==========================================
  {
    id: "hp-laptop-wont-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "wont-turn-on",
    problemTitle: "Won't Turn On",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "AC power adapter (original HP adapter preferred)",
      "Phillips screwdriver (for battery removal on some models)",
    ],
    partsNeeded: [
      {
        name: "HP Laptop Replacement Battery (model-specific)",
        costRange: "$25–$50",
        amazonUrl: "https://www.amazon.com/s?k=hp+laptop+replacement+battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=hp+laptop+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the charger before removing the battery or opening any panels.",
      "Static electricity can damage laptop components. Touch a metal object to ground yourself before handling internal parts.",
    ],
    quickDiagnosis:
      "An HP laptop that won't turn on is usually caused by a drained battery, a power issue, or static buildup. The good news is that a simple power reset fixes this problem about 70% of the time. It takes just a few minutes and costs nothing.",
    steps: [
      {
        number: 1,
        title: "Check the power adapter",
        description:
          "Make sure the charger is fully plugged into both the wall and the laptop. Check for a small LED light on the charger brick — if it's off, the charger might be dead. Try a different wall outlet. Also check the charging cable for any damage, bends, or frayed spots.",
      },
      {
        number: 2,
        title: "Perform a hard reset (power drain)",
        description:
          "This is the most common fix. Unplug the charger. If your HP laptop has a removable battery, take it out. Then press and hold the Power button for 30 seconds straight — this drains all residual electricity from the motherboard. Then put the battery back in (or plug in the charger if the battery isn't removable) and try turning it on.",
      },
      {
        number: 3,
        title: "Try running on AC power only",
        description:
          "Remove the battery (if removable), plug in the charger, and try to power on. If it turns on without the battery, your battery is dead and needs replacing. If it still won't turn on, the problem is the charger or the motherboard.",
      },
      {
        number: 4,
        title: "Look for signs of life",
        description:
          "When you press the Power button, watch carefully. Do any lights come on? Do fans spin? Does the screen flash briefly? If the power light turns on but the screen stays black, the laptop IS turning on — the problem is the display, not the power. Try connecting an external monitor with HDMI.",
      },
      {
        number: 5,
        title: "Reseat the RAM",
        description:
          "If your laptop has an accessible RAM panel on the bottom, remove the screws, open the panel, and gently push the RAM sticks out, then push them back in firmly until they click. Loose RAM is a surprisingly common reason a laptop won't boot. This takes just 2 minutes.",
      },
    ],
    alternativeCauses: [
      "A blown AC adapter is common. Borrow or buy a replacement adapter that matches your laptop's voltage and connector size.",
      "The DC jack (where the charger plugs in) can come loose inside the laptop from repeated plugging and unplugging.",
      "A failing CMOS battery can prevent booting on some older HP models.",
    ],
    whenToCallPro:
      "If the hard reset and RAM reseat don't work, and you've confirmed the charger is good, the motherboard may be the issue. Motherboard repair costs $150–$300. Compare that to the laptop's value — sometimes a new laptop is the better investment.",
    metaTitle:
      "HP Laptop Won't Turn On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an HP laptop that won't turn on. Hard reset and power drain guide. Difficulty: Easy. Save $150+.",
  },
  {
    id: "dell-laptop-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "overheating",
    problemTitle: "Overheating",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Compressed air can",
      "Phillips screwdriver",
      "Thermal paste (optional, for reapplication)",
      "Isopropyl alcohol 90%+ (optional, for cleaning old thermal paste)",
      "Lint-free cloth or coffee filter",
    ],
    partsNeeded: [
      {
        name: "Thermal Paste (Arctic MX-4 or similar)",
        costRange: "$6–$12",
        amazonUrl: "https://www.amazon.com/s?k=thermal+paste+laptop&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=thermal+paste+laptop&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the laptop and remove the battery before opening any panels.",
      "Ground yourself by touching a metal object before handling internal components.",
      "Don't spin the fan blades with compressed air — hold them still with a finger while blowing.",
    ],
    quickDiagnosis:
      "A Dell laptop overheating is almost always caused by dust clogging the fans and air vents. Over time, a thick blanket of dust builds up inside, blocking airflow. Cleaning it out with compressed air takes just a few minutes and usually fixes the problem completely. You can do this even if you've never opened a laptop before.",
    steps: [
      {
        number: 1,
        title: "Clean the vents from the outside first",
        description:
          "Shut down your laptop and unplug it. Look at the sides and bottom for air vent openings. Use short bursts of compressed air to blow dust out of the vents. Hold the can upright and keep it 2-3 inches away. You'll probably see clouds of dust come out — that's a good sign.",
      },
      {
        number: 2,
        title: "Elevate the laptop for better airflow",
        description:
          "Many people use laptops on beds, couches, or their lap — all of which block the bottom air vents. Place your laptop on a hard, flat surface. Better yet, use a laptop stand or prop the back up with a book. This simple change can drop temperatures by 5-10 degrees.",
      },
      {
        number: 3,
        title: "Adjust power settings to reduce heat",
        description:
          "Right-click the battery icon in the taskbar and select Power Options. Choose 'Balanced' instead of 'High Performance'. Also open Dell Power Manager (pre-installed on most Dells) and set the thermal management profile to 'Cool' or 'Quiet'. This limits the CPU and reduces heat.",
      },
      {
        number: 4,
        title: "Open the back panel for a deep clean",
        description:
          "Flip the laptop over and remove the bottom panel screws (usually 6-10 Phillips screws). Gently pry the panel off with a plastic spudger or old credit card. Inside, you'll see the fan and heatsink. Hold the fan in place with a finger and use compressed air to blow out all the dust from the fan blades and heatsink fins. You'll be amazed how much dust is in there.",
      },
      {
        number: 5,
        title: "Reapply thermal paste (optional but effective)",
        description:
          "If your Dell is more than 3 years old, the thermal paste between the CPU and heatsink may have dried out. Remove the heatsink screws (usually 4, numbered in order). Clean off the old paste from both the CPU chip and the heatsink using isopropyl alcohol and a lint-free cloth. Apply a pea-sized dot of fresh thermal paste on the CPU, then reattach the heatsink. This can drop temps by 10-20 degrees.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the back panel on and replace the screws. Boot up the laptop and use it normally for 15-20 minutes. You can download a free tool like HWMonitor to check your CPU temperature. Under normal use, it should stay below 80°C (176°F). If it does, you've fixed it.",
      },
    ],
    alternativeCauses: [
      "Running too many browser tabs or heavy programs maxes out the CPU and generates heat. Close unused tabs and programs.",
      "Malware can cause high CPU usage and overheating. Run a scan with Windows Defender or Malwarebytes.",
      "An aging battery can generate excess heat. If the bottom of the laptop near the battery is especially hot, consider replacing the battery.",
    ],
    whenToCallPro:
      "If cleaning doesn't help and the laptop still overheats, the fan itself may be failing — you can usually hear a grinding or rattling noise. A fan replacement costs $30–$80 at a repair shop. If the motherboard has heat damage, repair costs $150–$300, and at that point it's worth comparing to a replacement laptop.",
    metaTitle:
      "Dell Laptop Overheating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Dell laptop overheating. Dust cleaning and thermal paste guide. Difficulty: Medium. Save $100+.",
  },
  {
    id: "apple-macbook-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "keyboard-not-working",
    problemTitle: "Keyboard Not Working",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Compressed air can",
      "Soft brush",
      "USB or Bluetooth keyboard (for troubleshooting)",
    ],
    partsNeeded: [
      {
        name: "External USB-C Keyboard (for workaround)",
        costRange: "$15–$50",
        amazonUrl: "https://www.amazon.com/s?k=usb+c+keyboard+for+macbook&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=usb+c+keyboard+macbook&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down your MacBook before cleaning the keyboard.",
      "MacBook keyboards (especially 2016-2019 butterfly keyboards) are extremely fragile. Don't pry keys off unless you're prepared to break them.",
      "Never spray liquid cleaner directly onto the keyboard.",
    ],
    quickDiagnosis:
      "MacBook keyboard problems are very common, especially on 2016-2019 models with butterfly-style keys. The good news is that most keyboard issues are caused by dust and debris under the keys. Apple's recommended cleaning method fixes it for a lot of people. If your MacBook is a 2016-2019 model, Apple may fix it for free under their keyboard service program.",
    steps: [
      {
        number: 1,
        title: "Check if it's a software issue first",
        description:
          "Connect an external USB or Bluetooth keyboard. If the external keyboard works fine, the problem is hardware (your built-in keyboard). If the external keyboard also has issues, it might be a software problem. Try restarting your MacBook first: click the Apple menu > Restart.",
      },
      {
        number: 2,
        title: "Clean with compressed air (Apple's recommended method)",
        description:
          "Shut down your MacBook. Tilt it at about a 75-degree angle (almost vertical). Spray compressed air across the keyboard in a left-to-right motion. Rotate the MacBook to the left side and spray again. Rotate to the right side and spray again. For specific stuck keys, direct the air straw at the problem key edges.",
      },
      {
        number: 3,
        title: "Reset the SMC (System Management Controller)",
        description:
          "For Intel MacBooks: Shut down. Press and hold Shift + Control + Option on the left side of the keyboard AND the Power button for 10 seconds. Release all keys, then press the Power button to turn on. For Apple Silicon MacBooks (M1/M2/M3): simply shut down, wait 30 seconds, then restart — the SMC resets automatically.",
      },
      {
        number: 4,
        title: "Reset the PRAM/NVRAM",
        description:
          "For Intel MacBooks: Shut down. Turn on and immediately hold Option + Command + P + R for about 20 seconds. The MacBook will restart. For Apple Silicon: this resets automatically during a normal restart, so just restart your computer.",
      },
      {
        number: 5,
        title: "Check for Apple's Keyboard Service Program",
        description:
          "If you have a MacBook Pro 2016-2019 or MacBook 2015-2017 with butterfly keys, Apple offers free keyboard repair regardless of warranty status. Go to Apple's website and search for 'keyboard service program' to check if your model qualifies. If it does, Apple will replace the entire top case (keyboard, battery, trackpad) for free.",
      },
      {
        number: 6,
        title: "Use an external keyboard as a workaround",
        description:
          "If nothing fixes the built-in keyboard, a USB-C external keyboard is a reliable workaround. This is especially useful while you wait for a repair appointment or decide what to do next. You can also use the on-screen keyboard: go to System Settings > Accessibility > Keyboard > Accessibility Keyboard.",
      },
    ],
    alternativeCauses: [
      "Liquid spills are a very common cause of keyboard failure. Even a small spill can damage the connections under the keys.",
      "The keyboard ribbon cable connecting to the logic board can come loose, especially after a drop or impact.",
      "Software issues like corrupted keyboard preferences can cause problems. Try creating a new user account to test.",
    ],
    whenToCallPro:
      "MacBook keyboards are not designed for DIY replacement — the keyboard is riveted to the top case on most models. Apple charges $300–$600 for out-of-warranty keyboard replacement. Third-party shops can sometimes do it for $150–$300. Check for the free service program first — it could save you hundreds.",
    metaTitle:
      "MacBook Keyboard Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a MacBook keyboard not working. Cleaning and reset guide. Difficulty: Medium. Save $300+.",
  },
  {
    id: "lenovo-laptop-black-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
    problemSlug: "black-screen",
    problemTitle: "Black Screen",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "HDMI cable (for external monitor test)",
      "External monitor or TV",
      "Phillips screwdriver (for RAM reseat)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the charger before performing a hard reset or opening any panels.",
      "If you hear a popping sound or smell burning when trying to turn on the laptop, stop immediately and unplug it.",
    ],
    quickDiagnosis:
      "A Lenovo laptop with a black screen usually means the display is off but the computer might still be running. Listen for the fan — if you hear it, the laptop is on and it's a display problem, not a power problem. A hard reset fixes this issue most of the time.",
    steps: [
      {
        number: 1,
        title: "Check if the laptop is actually on",
        description:
          "Press the power button and wait. Look for any lights — power light, keyboard backlight, hard drive activity light. Listen for fan noise. If lights are on but the screen is black, the problem is the display. If nothing happens at all, it's a power issue — try the HP won't turn on guide steps (hard reset, charger check, etc.).",
      },
      {
        number: 2,
        title: "Perform a hard reset",
        description:
          "Turn off the laptop by holding the power button for 10 seconds. Unplug the charger. If the battery is removable, take it out. Press and hold the power button for 30 seconds. Some Lenovo laptops have a tiny pinhole reset button on the bottom — press it with a paperclip for 10 seconds if you see one (usually labeled 'Novo' or has a curved arrow icon). Reconnect power and try turning it on.",
      },
      {
        number: 3,
        title: "Adjust the brightness",
        description:
          "This sounds silly but it happens more than you'd think: the brightness got turned all the way down. Press the Function (Fn) key and the brightness-up key (usually F5 or F6 on Lenovo — look for a sun icon). Press it several times. If you see a brightness indicator appear faintly on screen, that's your problem.",
      },
      {
        number: 4,
        title: "Test with an external monitor",
        description:
          "Connect your laptop to a TV or monitor using an HDMI cable. If you see your desktop on the external screen, your laptop is working fine — the built-in display or its cable is the problem. Press Windows + P and select 'Duplicate' to show the same image on both screens.",
      },
      {
        number: 5,
        title: "Reseat the RAM and check connections",
        description:
          "If you're comfortable opening the bottom panel, remove the screws and locate the RAM sticks. Press the clips on each side to release the RAM, then push them firmly back in until they click. Also check that the display cable (a flat ribbon cable near the hinge) is securely connected to the motherboard.",
      },
    ],
    alternativeCauses: [
      "A failed Windows update can cause a black screen. Try booting into Safe Mode by pressing F8 repeatedly during startup.",
      "A failing display backlight makes the screen look black but you can still faintly see the image if you shine a flashlight at the screen.",
      "The display cable that runs through the hinge can wear out from opening and closing the lid. This is common after 3-4 years of daily use.",
    ],
    whenToCallPro:
      "If the laptop works on an external monitor, the display panel or its cable needs replacing. Screen replacement costs $80–$200 at a repair shop. If the laptop shows no signs of life at all, it may be a motherboard issue ($150–$350). Consider the laptop's age and value before investing in motherboard repair.",
    metaTitle:
      "Lenovo Laptop Black Screen — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Lenovo laptop black screen. Hard reset and display troubleshooting guide. Difficulty: Easy. Save $150+.",
  },
  {
    id: "generic-laptop-fan-loud-noisy",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "fan-loud-noisy",
    problemTitle: "Fan Loud or Noisy",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Compressed air can",
      "Phillips screwdriver",
      "Soft brush or cotton swabs",
    ],
    partsNeeded: [
      {
        name: "Laptop Replacement Fan (model-specific)",
        costRange: "$8–$25",
        amazonUrl: "https://www.amazon.com/s?k=laptop+replacement+cooling+fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=laptop+replacement+cooling+fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop and unplug the charger before opening any panels.",
      "Hold fan blades still when using compressed air — spinning them with air can damage the motor bearings.",
      "Ground yourself before touching internal components.",
    ],
    quickDiagnosis:
      "A loud laptop fan is almost always caused by dust buildup or high CPU usage. Dust clogs the fan and heatsink, forcing the fan to spin faster and louder. The fix is usually just a good cleaning. If the fan is grinding or clicking, it may need replacing — but even that is an affordable and doable repair.",
    steps: [
      {
        number: 1,
        title: "Check what's using your CPU",
        description:
          "Press Ctrl + Shift + Esc to open Task Manager (Windows) or Command + Space and type 'Activity Monitor' (Mac). Click the CPU column to sort by usage. If a program is using more than 30-40% of your CPU, that's what's making the fan work overtime. Close it or uninstall it if it's not essential.",
      },
      {
        number: 2,
        title: "Close unnecessary programs and browser tabs",
        description:
          "Each open browser tab uses CPU and memory. If you have 20+ tabs open, that's a lot of extra heat. Close tabs you don't need. Also close programs running in the background — check the system tray (bottom right on Windows) for hidden programs.",
      },
      {
        number: 3,
        title: "Clean the air vents from outside",
        description:
          "Shut down the laptop. Use short bursts of compressed air to blow into every vent opening on the sides and bottom. Angle the can so you're blowing dust OUT of the laptop, not further in. This alone can make a big difference.",
      },
      {
        number: 4,
        title: "Open the laptop and clean the fan directly",
        description:
          "If external cleaning didn't help, remove the back panel screws and carefully take off the bottom panel. Locate the fan (usually near a vent opening). Hold the fan blade with one finger and use compressed air to blow dust off the blades. Use a soft brush or cotton swab to clean any stubborn dust from the fan blades and the heatsink fins (the metal grid next to the fan).",
      },
      {
        number: 5,
        title: "Listen for grinding or clicking noises",
        description:
          "Put the panel back on and boot up. If the fan is still loud, listen carefully. A constant whirring is normal — the fan is just spinning fast. A grinding, clicking, or rattling noise means the fan bearings are worn out and the fan needs to be replaced. Replacement fans cost $8–$25 and are usually held in by 2-3 screws and one cable connector.",
      },
    ],
    alternativeCauses: [
      "Power settings on 'High Performance' make the CPU run full speed even when idle. Switch to 'Balanced'.",
      "A hot room makes the laptop work harder to stay cool. Working in air conditioning helps.",
      "An old or degraded battery can generate extra heat, making fans work harder.",
    ],
    whenToCallPro:
      "If cleaning the fan doesn't help and the fan isn't making grinding sounds, there may be a deeper issue like dry thermal paste or a failing component generating excess heat. A laptop tune-up at a repair shop (cleaning, thermal paste, fan check) costs $50–$100 and can make an old laptop feel like new.",
    metaTitle:
      "Laptop Fan Loud/Noisy — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a loud or noisy laptop fan. Cleaning and troubleshooting guide. Difficulty: Medium. Save $100+.",
  },
  {
    id: "generic-laptop-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "battery-not-charging",
    problemTitle: "Battery Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Different power adapter (for testing)",
      "Phillips screwdriver (if battery is internal)",
    ],
    partsNeeded: [
      {
        name: "Laptop Replacement Battery (model-specific)",
        costRange: "$20–$50",
        amazonUrl: "https://www.amazon.com/s?k=laptop+replacement+battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=laptop+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Always use a charger with the correct voltage for your laptop. Wrong voltage can damage the motherboard.",
      "Never puncture or pry at a laptop battery — lithium batteries are a fire risk.",
      "If a battery is swollen (bulging), do not use the laptop. Remove the battery and recycle it at an electronics store.",
    ],
    quickDiagnosis:
      "A laptop battery that won't charge is usually caused by a software glitch, a worn-out battery, or a faulty charger. Before you spend money on a new battery, try the free software fixes — they work more often than you'd think. You can check your battery's health right from the command line.",
    steps: [
      {
        number: 1,
        title: "Check the charger and connections",
        description:
          "Make sure the charger is fully plugged into the wall and the laptop. Check the cable for any damage. Try a different wall outlet. Look at the charging port on your laptop — is it loose or wobbly? If the cable doesn't sit firmly in the port, lint might be blocking it. Clean the port gently with a toothpick.",
      },
      {
        number: 2,
        title: "Check your battery health",
        description:
          "On Windows: open Command Prompt as administrator and type 'powercfg /batteryreport' then press Enter. Open the generated HTML file — look at 'Design Capacity' vs 'Full Charge Capacity'. If full charge is less than 50% of design, the battery is worn out. On Mac: hold Option and click the Apple menu > System Information > Power — check the Cycle Count and Condition.",
      },
      {
        number: 3,
        title: "Update or reinstall the battery driver (Windows)",
        description:
          "Right-click the Start button and select Device Manager. Expand 'Batteries'. Right-click 'Microsoft ACPI-Compliant Control Method Battery' and select Uninstall device. Confirm the uninstall, then restart your laptop. Windows will automatically reinstall the driver. This fixes a surprisingly common glitch where Windows wrongly thinks the battery is full.",
      },
      {
        number: 4,
        title: "Reset the battery management system",
        description:
          "Shut down the laptop. Unplug the charger. If the battery is removable, take it out. Press and hold the power button for 30 seconds. Put the battery back in, plug in the charger, and turn on the laptop. For Lenovo laptops with the Novo button, press it with a paperclip for 10 seconds while unplugged.",
      },
      {
        number: 5,
        title: "Try a different charger",
        description:
          "Borrow a compatible charger or buy a universal laptop charger. A dead charger is a common culprit. Make sure the replacement matches your laptop's voltage and wattage requirements — check the sticker on the bottom of your laptop or the original charger for the correct specs.",
      },
      {
        number: 6,
        title: "Replace the battery if it's worn out",
        description:
          "If the battery report shows low health, a replacement battery costs $20–$50 from Amazon or eBay. Search for your exact laptop model number plus 'replacement battery'. On most laptops, it's an easy swap — remove the bottom panel, unplug the old battery connector, and plug in the new one.",
      },
    ],
    alternativeCauses: [
      "The charging port on the laptop can break from repeated plugging and unplugging, especially if the cable was yanked. A port replacement costs $40–$80.",
      "Third-party chargers with the wrong wattage can charge very slowly or not at all.",
      "Some laptops stop charging at 80% to preserve battery longevity — check your manufacturer's battery settings app.",
    ],
    whenToCallPro:
      "If a new charger and battery driver reset don't help, the charging circuit on the motherboard may be damaged. This repair costs $80–$200. For a cheap or old laptop, it may be more cost-effective to replace the whole machine.",
    metaTitle:
      "Laptop Battery Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a laptop battery not charging. Driver fix, health check, and replacement guide. Difficulty: Easy. Save $100+.",
  },

  // ==========================================
  // GAME CONSOLES
  // ==========================================
  {
    id: "sony-ps5-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "disc-drive-not-reading",
    problemTitle: "Disc Drive Not Reading",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Isopropyl alcohol 90%+",
      "Torx T8 security screwdriver",
      "Phillips #1 screwdriver",
      "Compressed air can",
    ],
    partsNeeded: [
      {
        name: "PS5 Blu-ray Disc Drive Laser Lens",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=ps5+disc+drive+laser+lens&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ps5+disc+drive+laser+lens&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "PS5 Replacement Disc Drive (model-specific, must be married to motherboard)",
        costRange: "$50–$80",
        amazonUrl: "https://www.amazon.com/s?k=ps5+replacement+disc+drive&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ps5+replacement+disc+drive&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the PS5 from power and wait 30 seconds before opening it.",
      "Be aware that opening the PS5 may void your warranty if it's still active. Check your warranty status first.",
      "The PS5 disc drive is paired to the motherboard — a replacement drive from another PS5 won't work without re-pairing.",
    ],
    quickDiagnosis:
      "If your PS5 isn't reading discs, it's usually caused by a dirty disc, a dirty laser lens, or a misaligned disc drive. Start with the simple stuff — cleaning the disc and rebuilding the database fixes it more often than people expect. Most of these steps cost nothing.",
    steps: [
      {
        number: 1,
        title: "Clean the disc",
        description:
          "Take the disc out and look at the shiny bottom side. If you see fingerprints, smudges, or scratches, clean it with a microfiber cloth. Wipe from the center hole straight out to the edge — never wipe in circles. For stubborn smudges, dampen the cloth with a tiny bit of isopropyl alcohol. Try a different disc to see if the problem is just one disc or all of them.",
      },
      {
        number: 2,
        title: "Rebuild the PS5 database",
        description:
          "Turn off the PS5 completely (not rest mode). Press and hold the power button until you hear a second beep (about 7 seconds). Connect your controller with a USB cable and press the PS button. Select 'Rebuild Database' from the Safe Mode menu. This reorganizes data on the drive and can fix disc recognition issues. It doesn't delete your games or saves.",
      },
      {
        number: 3,
        title: "Update the system software",
        description:
          "Go to Settings > System > System Software > System Software Update. Install any available updates. Sony has released patches that fix disc drive recognition bugs. If the disc drive won't read discs at all, you can update via USB — download the update file from PlayStation's website onto a USB drive.",
      },
      {
        number: 4,
        title: "Clean the laser lens with compressed air",
        description:
          "Remove the PS5 side panels by pulling them up and away (they snap off, no screws). Use compressed air to blow into the disc slot opening from different angles. This removes dust from the laser lens. Use short bursts — long sprays can cause condensation. Let the console sit for 5 minutes after cleaning before inserting a disc.",
      },
      {
        number: 5,
        title: "Manually reseat the disc drive (advanced)",
        description:
          "If compressed air didn't help, you can access the disc drive by removing the internal screws and metal shielding. Use a Torx T8 and Phillips screwdriver. Carefully disconnect and reconnect the disc drive's ribbon cable and power cable. Make sure the connections are firm. Sometimes vibration loosens these over time.",
      },
    ],
    alternativeCauses: [
      "If the drive makes grinding or clicking noises, the disc roller mechanism may be jammed or broken.",
      "If the drive accepts discs but immediately ejects them, the eject sensor may be faulty.",
      "Power surges can damage the disc drive controller. Use a surge protector for your PS5.",
    ],
    whenToCallPro:
      "If the disc drive laser is dead, the drive needs replacement. PS5 disc drives are paired to the motherboard, so a repair shop needs to 'marry' the new drive to your console using specialized tools. This costs $100–$200 at a repair shop. Sony charges around $250 for out-of-warranty repair. Check your warranty first — if it's under a year old, Sony will fix it for free.",
    metaTitle:
      "PS5 Disc Drive Not Reading — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a PS5 disc drive not reading discs. Cleaning and troubleshooting guide. Difficulty: Medium. Save $200+.",
  },
  {
    id: "sony-ps4-blinking-blue-light",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "blinking-blue-light",
    problemTitle: "Blinking Blue Light (Blue Light of Death)",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Torx T8 security screwdriver",
      "Phillips #1 screwdriver",
      "Compressed air can",
      "HDMI cable (for testing)",
    ],
    partsNeeded: [
      {
        name: "HDMI Cable (for testing)",
        costRange: "$5–$15",
        amazonUrl: "https://www.amazon.com/s?k=hdmi+cable+ps4&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=hdmi+cable+ps4&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the PS4 from the wall before starting any repair.",
      "Don't force the HDMI cable into the port — if the port is damaged, forcing it can make things worse.",
    ],
    quickDiagnosis:
      "The blinking blue light on your PS4 (also called the 'Blue Light of Death') means the console is turning on but can't output a video signal to your TV. This is usually caused by a loose HDMI connection, a software issue, or a hardware handshake problem. Many people fix it by simply reseating cables and booting into Safe Mode.",
    steps: [
      {
        number: 1,
        title: "Unplug everything and wait",
        description:
          "Unplug the power cable, HDMI cable, and any USB devices from your PS4. Wait a full 60 seconds. This completely drains the internal power and resets the hardware state. Plug the power cable back in first, then the HDMI cable. Make sure both ends of the HDMI cable are firmly pushed in — you should feel a click.",
      },
      {
        number: 2,
        title: "Try a different HDMI cable and TV input",
        description:
          "A bad HDMI cable is the most common cause. Try a different HDMI cable if you have one. Also try plugging into a different HDMI port on your TV. Make sure your TV is set to the correct input. Try a different TV entirely if possible — some TVs have HDMI handshake issues with PS4.",
      },
      {
        number: 3,
        title: "Boot into Safe Mode",
        description:
          "Turn off the PS4 completely. Press and hold the power button for about 7 seconds — you'll hear one beep, then a second beep. Release the button. Connect your controller with a USB cable and press the PS button. From the Safe Mode menu, try 'Restart PS4' first. If that doesn't work, try 'Change Resolution' — this forces 480p output that works with any TV.",
      },
      {
        number: 4,
        title: "Rebuild the database in Safe Mode",
        description:
          "From the same Safe Mode menu, select 'Rebuild Database'. This reorganizes system data and can fix video output issues caused by corrupted data. It takes 5-30 minutes depending on how much data you have. Your games and saves won't be deleted.",
      },
      {
        number: 5,
        title: "Check the HDMI port on the PS4",
        description:
          "Look inside the HDMI port on the back of the PS4 with a flashlight. The pins should all be straight and even. If any pins are bent or the connector is loose, the HDMI port needs replacing. This is a soldering repair — you can do it if you have soldering experience, or take it to a shop.",
      },
      {
        number: 6,
        title: "Clean the inside of the PS4",
        description:
          "If none of the above worked, dust buildup may be causing overheating during boot. Remove the top cover (it snaps off on the original PS4) and use compressed air to blow dust out of the fan and heatsink. Overheating can prevent the PS4 from completing its boot sequence.",
      },
    ],
    alternativeCauses: [
      "A corrupted system update can cause the blue light issue. If this started after an update, reinstall the system software from USB using Safe Mode.",
      "A failed hard drive can prevent booting. If the PS4 makes clicking sounds, the hard drive may need replacing.",
      "In rare cases, a failed APU (graphics/CPU chip) causes this. This requires professional reballing or replacement.",
    ],
    whenToCallPro:
      "If the HDMI port pins are bent, a shop can replace the port for $60–$100. If the problem is the APU or motherboard, repair costs $100–$200. Given that used PS4s sell for $150–$250, get a repair estimate before committing. A bad hard drive is the cheapest fix — a 1TB replacement costs $40–$60.",
    metaTitle:
      "PS4 Blinking Blue Light — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the PS4 blinking blue light of death. HDMI and Safe Mode troubleshooting. Difficulty: Medium. Save $100+.",
  },
  {
    id: "microsoft-xbox-series-x-no-signal",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "no-signal",
    problemTitle: "No Signal",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "HDMI cable (preferably HDMI 2.1 for Xbox Series X)",
      "Microfiber cloth",
    ],
    partsNeeded: [
      {
        name: "HDMI 2.1 Cable (for 4K/120Hz)",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=hdmi+2.1+cable+xbox+series+x&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=hdmi+2.1+cable+xbox+series+x&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the Xbox from power before checking cables to avoid electrical shock.",
      "Don't force the HDMI cable if the port feels loose — a bent port needs professional repair.",
    ],
    quickDiagnosis:
      "An Xbox Series X showing 'No Signal' on your TV is almost always a cable, input, or settings issue — not a console hardware failure. This fix is usually fast, free, and simple. Start with the basics and you'll likely have it working within minutes.",
    steps: [
      {
        number: 1,
        title: "Check all cable connections",
        description:
          "Unplug the HDMI cable from both the Xbox and the TV. Plug them back in firmly. Make sure you're using the HDMI OUT port on the Xbox (not the HDMI IN port if your model has one). Make sure your TV is on the correct HDMI input — use the Input or Source button on your TV remote to cycle through inputs.",
      },
      {
        number: 2,
        title: "Try a different HDMI cable",
        description:
          "The Xbox Series X needs an HDMI 2.1 cable for full 4K/120Hz output. Older HDMI cables can cause no signal issues. If you don't have HDMI 2.1, any HDMI cable will work at lower resolutions for testing purposes. Also try a different HDMI port on your TV.",
      },
      {
        number: 3,
        title: "Perform a full power cycle",
        description:
          "Press and hold the Xbox power button for 10 seconds until it shuts off completely. Unplug the power cable from the back of the Xbox. Wait 30 seconds. Plug it back in and press the power button. This clears the cache and resets the video output settings.",
      },
      {
        number: 4,
        title: "Boot in low-resolution mode",
        description:
          "If you recently changed display settings to a resolution your TV doesn't support, boot in low-res mode. Turn off the Xbox. Press and hold both the Power button and the Eject button (disc version) or Power button and Pair button (digital version) until you hear a second beep (about 10 seconds). The Xbox will boot at 640x480, which works on any TV. Then go to Settings > Display to fix your resolution.",
      },
      {
        number: 5,
        title: "Try a different TV or monitor",
        description:
          "If nothing works on your current TV, try connecting the Xbox to a different TV or monitor. If it works on the other display, your original TV might have an HDMI port issue, a compatibility problem, or need a firmware update. Check your TV manufacturer's website for TV software updates.",
      },
    ],
    alternativeCauses: [
      "Some TVs need HDMI Enhanced Mode or UHD Deep Color enabled in TV settings for the Xbox to output 4K.",
      "An AV receiver or HDMI splitter between the Xbox and TV can cause signal issues. Try connecting directly.",
      "A power surge can damage the HDMI port on the Xbox. Inspect the port for bent or broken pins.",
    ],
    whenToCallPro:
      "If the Xbox works on one TV but not another, the issue is TV compatibility, not the Xbox. If it doesn't work on any TV and you've tried multiple cables, the HDMI port on the Xbox may be damaged. HDMI port replacement costs $80–$150 at a repair shop. Microsoft charges around $300 for out-of-warranty repair.",
    metaTitle:
      "Xbox Series X No Signal — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix Xbox Series X no signal. Cable, input, and low-res boot guide. Difficulty: Easy. Save $150+.",
  },
  {
    id: "nintendo-switch-wont-charge",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo",
    brandSlug: "nintendo",
    problemSlug: "wont-charge",
    problemTitle: "Won't Charge",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Wooden or plastic toothpick",
      "Flashlight",
      "Compressed air can (optional)",
    ],
    partsNeeded: [
      {
        name: "Nintendo Switch USB-C Charging Cable",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=nintendo+switch+charging+cable+usb+c&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=nintendo+switch+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Nintendo Switch AC Adapter",
        costRange: "$15–$25",
        amazonUrl: "https://www.amazon.com/s?k=nintendo+switch+ac+adapter+charger&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=nintendo+switch+ac+adapter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Only use the official Nintendo Switch charger or a reputable USB-C PD charger. Cheap third-party chargers have bricked Switches.",
      "Don't use a phone charger — most don't provide enough power (the Switch needs USB-C Power Delivery).",
      "Don't use metal tools to clean the USB-C port.",
    ],
    quickDiagnosis:
      "A Nintendo Switch that won't charge is most often caused by a dirty USB-C port, a bad cable, or a completely drained battery. The good news is that cleaning the port and trying a different cable fixes it the vast majority of the time. Give it a try before assuming the worst.",
    steps: [
      {
        number: 1,
        title: "Charge it for at least 30 minutes without touching it",
        description:
          "Plug the Switch into the official AC adapter connected to a wall outlet (not the dock). Leave it for at least 30 minutes even if the screen stays black. When the battery is completely dead, it can take 15-20 minutes before the charging indicator appears on screen. Be patient.",
      },
      {
        number: 2,
        title: "Try charging in the dock",
        description:
          "If direct charging doesn't work, place the Switch in the dock with the AC adapter connected to the dock. Some Switches respond better to dock charging when the battery is extremely low. Make sure the dock's USB-C connector lines up properly with the port on the bottom of the Switch.",
      },
      {
        number: 3,
        title: "Clean the USB-C port",
        description:
          "Shine a flashlight into the USB-C port on the bottom of the Switch. You'll likely see lint and pocket debris. Use a wooden or plastic toothpick to gently scrape out the lint. Work carefully — the port is delicate. After cleaning, try plugging in the charger — it should click in more firmly.",
      },
      {
        number: 4,
        title: "Try a different cable and outlet",
        description:
          "If you have another USB-C cable that supports Power Delivery, try it. Make sure you're using a wall outlet, not a computer USB port. Try a different wall outlet too — some outlets have low power output. If the official charger's LED doesn't light up, the adapter itself may be dead.",
      },
      {
        number: 5,
        title: "Hard reset the Switch",
        description:
          "Press and hold the Power button for 15 full seconds. Release it, wait 10 seconds, then press the Power button once. If the Switch was frozen and not actually dead, this will reboot it. After the restart, plug in the charger to see if it charges normally.",
      },
    ],
    alternativeCauses: [
      "Third-party docks have been known to damage the Switch's charging chip. If you've used a non-Nintendo dock, the charging circuit may be fried.",
      "A bent or broken USB-C port prevents a proper connection. Check for damage with a flashlight.",
      "If the Switch charges slowly but won't reach 100%, the battery may be degraded and need replacement.",
    ],
    whenToCallPro:
      "If cleaning the port and trying new cables doesn't work, the USB-C port may need replacing ($40–$80 at a repair shop) or the charging IC chip on the motherboard may be damaged ($60–$120). Nintendo charges $100+ for out-of-warranty repair. A new battery costs $15–$25 if you're comfortable opening the Switch.",
    metaTitle:
      "Nintendo Switch Won't Charge — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Nintendo Switch that won't charge. Port cleaning and troubleshooting guide. Difficulty: Easy. Save $100+.",
  },
  {
    id: "nintendo-switch-joy-con-drift",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo",
    brandSlug: "nintendo",
    problemSlug: "joy-con-drift",
    problemTitle: "Joy-Con Drift",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Tri-wing Y00 screwdriver",
      "Phillips #00 screwdriver",
      "Plastic spudger",
      "Tweezers",
      "Isopropyl alcohol 90%+ and cotton swab (for cleaning method)",
      "Compressed air can",
    ],
    partsNeeded: [
      {
        name: "Replacement Joy-Con Analog Stick Module",
        costRange: "$5–$12",
        amazonUrl: "https://www.amazon.com/s?k=nintendo+switch+joy+con+analog+stick+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=nintendo+switch+joy+con+analog+stick+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "The Joy-Con contains very small screws and delicate ribbon cables. Work slowly and carefully.",
      "Keep track of the different screw sizes — mixing them up can strip the screw holes.",
      "The Joy-Con battery has a small ribbon cable. Disconnect it carefully before working inside.",
    ],
    quickDiagnosis:
      "Joy-Con drift — where your character moves on screen even when you're not touching the stick — is one of the most common Nintendo Switch problems. It's caused by dust under the stick or worn-out contacts. A quick cleaning with compressed air fixes it temporarily, and a $5-$12 stick replacement fixes it permanently. This is a very doable repair.",
    steps: [
      {
        number: 1,
        title: "Calibrate the joystick first",
        description:
          "Go to System Settings > Controllers and Sensors > Calibrate Control Sticks. Follow the on-screen instructions. If the stick shows movement when you're not touching it, calibration confirms the drift is real. This alone doesn't usually fix drift, but it rules out software issues.",
      },
      {
        number: 2,
        title: "Clean under the stick flap with compressed air",
        description:
          "Gently lift the small rubber flap at the base of the joystick. Spray short bursts of compressed air under the flap from different angles. This can blow out dust and debris that's causing the drift. Test the controller after cleaning — this temporary fix works for many people and lasts days to weeks.",
      },
      {
        number: 3,
        title: "Clean with isopropyl alcohol",
        description:
          "Lift the rubber flap again. Dip a cotton swab in 90%+ isopropyl alcohol and gently rub it around the base of the joystick under the flap. Move the joystick in circles while doing this. Let it dry for 5 minutes. The alcohol dissolves the buildup on the contacts. This fix lasts longer than compressed air alone.",
      },
      {
        number: 4,
        title: "Open the Joy-Con for a permanent fix",
        description:
          "If cleaning didn't work permanently, it's time to replace the stick module. Remove the four tri-wing screws from the back of the Joy-Con. Carefully lift the back panel. Disconnect the battery ribbon cable. You'll see the joystick module held in place by a small metal bracket and two Phillips screws.",
      },
      {
        number: 5,
        title: "Replace the analog stick module",
        description:
          "Remove the two Phillips screws holding the stick bracket. Carefully lift out the old stick module and disconnect its ribbon cable from the connector (lift the small dark flap on the connector first, then slide the ribbon out). Slide the new stick's ribbon cable in, close the flap, and screw the new module in place.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Reconnect the battery ribbon cable. Place the back panel on and replace the four tri-wing screws. Go to System Settings and calibrate the new stick. Test it in a game — the drift should be completely gone. The whole replacement takes about 20 minutes once you've done it once.",
      },
    ],
    alternativeCauses: [
      "Nintendo offers free Joy-Con drift repair even without warranty in many countries. Check Nintendo's support website before buying parts.",
      "Software updates can occasionally cause temporary drift-like behavior. Update your Switch and controller firmware.",
      "Using third-party thumb grips that are too tight can push the stick off-center.",
    ],
    whenToCallPro:
      "Joy-Con drift is so common that Nintendo repairs it for free in the US, Canada, and many EU countries — even without a warranty. Contact Nintendo Support before spending any money. If you want an immediate fix, replacement sticks cost $5–$12 and the repair takes 20-30 minutes. A repair shop will charge $25–$50.",
    metaTitle:
      "Nintendo Switch Joy-Con Drift — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix Nintendo Switch Joy-Con drift. Cleaning and stick replacement guide. Difficulty: Medium. Save $50+.",
  },
  {
    id: "sony-ps4-overheating-shutting-off",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "overheating-shutting-off",
    problemTitle: "Overheating and Shutting Off",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Torx T8 security screwdriver",
      "Torx T9 screwdriver",
      "Phillips #1 screwdriver",
      "Compressed air can",
      "Thermal paste (Arctic MX-4 or similar)",
      "Isopropyl alcohol 90%+",
      "Lint-free cloth or coffee filter",
    ],
    partsNeeded: [
      {
        name: "Thermal Paste for PS4",
        costRange: "$6–$12",
        amazonUrl: "https://www.amazon.com/s?k=thermal+paste+ps4&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=thermal+paste+ps4&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the PS4 and wait 15 minutes for it to cool down before opening.",
      "Keep track of different screw sizes and where they came from — the PS4 uses several different sizes.",
      "The PS4 power supply has capacitors that hold charge. Don't touch the power supply internals.",
    ],
    quickDiagnosis:
      "A PS4 that overheats and shuts off is almost always caused by dust buildup inside the console or dried-out thermal paste. After 3-4 years of use, the inside of your PS4 looks like a lint factory. Cleaning it out and replacing the thermal paste can make it run like new. This is one of the most rewarding DIY fixes you can do.",
    steps: [
      {
        number: 1,
        title: "Improve airflow around the console",
        description:
          "Make sure your PS4 has at least 4 inches of open space on all sides, especially the back where hot air exits. Don't put it in a closed cabinet. Don't stack anything on top of it. Place it on a hard surface, never carpet or cloth. Check that the side vents aren't blocked. This alone might fix mild overheating.",
      },
      {
        number: 2,
        title: "Clean the vents from outside",
        description:
          "With the PS4 turned off and unplugged, use compressed air to blow into every vent opening. Use short bursts and angle the can so dust blows OUT. You'll probably see a cloud of dust come out from the back. Do this from the sides and back.",
      },
      {
        number: 3,
        title: "Remove the top cover and clean the fan",
        description:
          "On the original PS4: flip it upside down and remove the three screws in the bottom (under the warranty stickers — yes, you'll break the stickers). Slide the top cover off. On the PS4 Slim/Pro: the top panel snaps off. You'll now see the fan. Hold the fan blades with one finger and blast compressed air to clean all the dust off. Clean the heatsink fins too.",
      },
      {
        number: 4,
        title: "Deep clean: remove the power supply and fan",
        description:
          "For a thorough cleaning, unscrew the power supply (3-4 screws) and carefully lift it out — there's a cable on the back, so don't yank it. Now remove the fan (3 screws). With these out of the way, you can access the heatsink directly. Clean every surface with compressed air until there's no visible dust.",
      },
      {
        number: 5,
        title: "Replace the thermal paste",
        description:
          "Remove the heatsink screws (usually 4 spring-loaded screws around the APU chip — numbered for removal order). Lift off the heatsink. Clean the old thermal paste off both the APU chip and the heatsink surface using isopropyl alcohol and a lint-free cloth. The old paste is probably dry and crusty. Apply a pea-sized dot of fresh thermal paste on the center of the APU chip.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Screw the heatsink back on in the numbered order (this ensures even pressure). Reinstall the fan and power supply. Put the cover back on. Plug in the PS4 and play a demanding game for 30 minutes. The fan should be noticeably quieter and the console should stay on without overheating.",
      },
    ],
    alternativeCauses: [
      "A failing fan motor can cause overheating even after cleaning. If the fan spins slowly or makes grinding noises, replace it ($10–$20 part).",
      "Using rest mode constantly instead of fully shutting down can lead to heat buildup over time.",
      "Playing in a hot room (above 80°F / 27°C) with poor ventilation puts extra stress on the cooling system.",
    ],
    whenToCallPro:
      "If cleaning and thermal paste replacement don't fix it, the APU solder connections may be degrading — a problem called 'reflowing' that requires professional equipment ($80–$150). Given that used PS4s sell for $150–$250, weigh the repair cost against a replacement. The cleaning and thermal paste fix works for 90% of overheating PS4s though, so try it first.",
    metaTitle:
      "PS4 Overheating and Shutting Off — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a PS4 overheating and shutting off. Dust cleaning and thermal paste guide. Difficulty: Medium. Save $150+.",
  },

  // ==========================================
  // PRINTERS
  // ==========================================
  {
    id: "hp-printer-paper-jam",
    category: "Printers",
    categorySlug: "printers",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "paper-jam",
    problemTitle: "Paper Jam",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Flashlight",
      "Tweezers (for hard-to-reach paper scraps)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Turn off the printer and unplug it before reaching inside.",
      "Pull jammed paper slowly and gently. Yanking it can tear the paper and leave pieces inside, or damage the rollers.",
      "Laser printers have a hot fuser unit inside — let it cool for 10 minutes before reaching in.",
    ],
    quickDiagnosis:
      "Paper jams in HP printers are super common and almost always easy to fix. The paper gets stuck because of a small torn piece inside, worn-out rollers, or paper that was loaded incorrectly. This takes just a few minutes to clear and costs nothing.",
    steps: [
      {
        number: 1,
        title: "Turn off and unplug the printer",
        description:
          "Press the power button to turn off the printer, then unplug the power cord from the wall. This is important for safety and also releases the rollers, making it easier to pull out stuck paper.",
      },
      {
        number: 2,
        title: "Remove the paper tray and check for jammed paper",
        description:
          "Pull out the paper input tray. Look inside the opening for any jammed or crumpled paper. If you see paper, grip it with both hands and pull it out slowly and evenly. Don't pull at an angle — pull it straight in the direction the paper normally travels. Check the tray itself for any torn scraps.",
      },
      {
        number: 3,
        title: "Open the front or rear access panel",
        description:
          "Most HP printers have a rear access panel or door that opens for jam clearing. Open it and look inside with a flashlight. If you see jammed paper, pull it out gently. On inkjet printers, you can also open the top cover to access the ink cartridge area — paper sometimes jams here.",
      },
      {
        number: 4,
        title: "Check for small torn pieces",
        description:
          "Use a flashlight to look carefully inside every opening. Even a tiny piece of torn paper can cause repeated jams. Use tweezers to grab any small scraps you find. Check near the rollers — the rubber cylinders that grab the paper. Spin them slowly by hand to see if any paper is wrapped around them.",
      },
      {
        number: 5,
        title: "Reload the paper correctly",
        description:
          "Fan the paper stack before loading it — this separates the sheets and prevents them from sticking together. Don't overfill the tray past the maximum line. Slide the paper guides so they touch the edges of the paper snugly (not too tight). Make sure the paper is the right size for your tray — using the wrong size causes jams.",
      },
      {
        number: 6,
        title: "Clean the rollers to prevent future jams",
        description:
          "Dampen a lint-free cloth with water (not soaking wet) and gently wipe the rubber rollers you can see inside the paper path. Over time, rollers get dusty and lose grip, causing paper to feed crookedly and jam. Cleaning them takes 2 minutes and prevents most future jams.",
      },
    ],
    alternativeCauses: [
      "Humid paper absorbs moisture and gets sticky. Store paper in a dry place and use a fresh ream if the current one has been sitting open.",
      "Worn-out pickup rollers can't grab paper properly. You can buy roller replacement kits for $10–$20.",
      "Using paper that's too thick or too thin for your printer causes jams. Check your printer's supported paper weight range in the manual.",
    ],
    whenToCallPro:
      "If you've cleared all the visible paper and the printer still shows a paper jam error, a piece may be stuck deep inside near the fuser or print head. A repair shop can disassemble and clear it for $30–$60. If jams happen constantly, the rollers or pickup mechanism need replacing — this costs $40–$100 depending on the model.",
    metaTitle:
      "HP Printer Paper Jam — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an HP printer paper jam. Step-by-step clearing and prevention guide. Difficulty: Easy. Save $60+.",
  },
  {
    id: "epson-printer-offline",
    category: "Printers",
    categorySlug: "printers",
    brand: "Epson",
    brandSlug: "epson",
    problemSlug: "offline",
    problemTitle: "Showing Offline",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Don't uninstall printer drivers unless other fixes fail — reinstalling can be a hassle.",
    ],
    quickDiagnosis:
      "An Epson printer showing 'offline' on your computer is almost never a hardware problem. It's a communication issue between your computer and the printer. This is one of the most frustrating printer problems, but also one of the easiest to fix. A few quick settings changes will get you printing again.",
    steps: [
      {
        number: 1,
        title: "Check the basics",
        description:
          "Make sure the printer is turned on and has no error lights blinking. If it's connected by USB, check that the cable is plugged in firmly at both ends. If it's on Wi-Fi, make sure the printer is connected to the same Wi-Fi network as your computer. Many printers have a Wi-Fi icon on the display — if it's not lit, the printer is disconnected.",
      },
      {
        number: 2,
        title: "Restart the printer and computer",
        description:
          "Turn off the printer. Wait 30 seconds. Turn it back on. Then restart your computer. This simple step fixes offline printer issues about 50% of the time. The restart forces both devices to re-establish their connection.",
      },
      {
        number: 3,
        title: "Set the printer as online (Windows)",
        description:
          "On Windows: go to Settings > Devices > Printers & Scanners (or Settings > Bluetooth & Devices > Printers & Scanners on Windows 11). Click on your Epson printer, then click 'Open print queue'. In the print queue window, click the 'Printer' menu at the top. If 'Use Printer Offline' is checked, click it to uncheck it. Your printer should immediately switch to online.",
      },
      {
        number: 4,
        title: "Clear stuck print jobs",
        description:
          "In the same print queue window, check if there are stuck print jobs. Click Printer > Cancel All Documents. Stuck jobs can make the printer appear offline. After clearing the queue, try printing a test page: go back to the Epson printer in settings, click Manage, and select 'Print a test page'.",
      },
      {
        number: 5,
        title: "Set your Epson as the default printer",
        description:
          "Go to Settings > Devices > Printers & Scanners. Turn off 'Let Windows manage my default printer'. Then click your Epson printer and select 'Set as default'. Sometimes Windows switches to another printer (like a PDF printer) without telling you.",
      },
      {
        number: 6,
        title: "Restart the print spooler service (Windows)",
        description:
          "Press Windows + R, type 'services.msc' and press Enter. Scroll down to 'Print Spooler'. Right-click it and select 'Restart'. This resets the entire printing system and often fixes stubborn offline issues. After restarting, try printing again.",
      },
    ],
    alternativeCauses: [
      "A router or network change (new password, new router) disconnects Wi-Fi printers. Reconnect the printer to Wi-Fi using its control panel.",
      "Printer firmware updates can cause connectivity issues. Check Epson's website for the latest firmware for your model.",
      "If you have multiple printer entries (like 'Epson Copy 1'), delete the duplicates and keep only the correct one.",
      "Mac users: go to System Settings > Printers & Scanners, remove the printer, and re-add it.",
    ],
    whenToCallPro:
      "Printer offline issues are almost always fixable with the steps above. If you've tried everything and the printer still won't come online, reinstalling the printer driver from Epson's website usually solves it. If the printer is old and constantly goes offline, it might be time for a new printer — decent Epson inkjet printers start at $50–$100.",
    metaTitle:
      "Epson Printer Offline — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an Epson printer showing offline. Settings and connection troubleshooting guide. Difficulty: Easy. Save $50+.",
  },
  {
    id: "brother-printer-streaking",
    category: "Printers",
    categorySlug: "printers",
    brand: "Brother",
    brandSlug: "brother",
    problemSlug: "streaking",
    problemTitle: "Streaking on Pages",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Lint-free cloth",
      "Isopropyl alcohol 90%+",
      "Cotton swabs",
    ],
    partsNeeded: [
      {
        name: "Brother Toner Cartridge (model-specific) — for laser printers",
        costRange: "$20–$50",
        amazonUrl: "https://www.amazon.com/s?k=brother+printer+toner+cartridge&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=brother+printer+toner+cartridge&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Brother Drum Unit (model-specific) — for laser printers",
        costRange: "$25–$50",
        amazonUrl: "https://www.amazon.com/s?k=brother+printer+drum+unit&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=brother+printer+drum+unit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off and unplug the printer before cleaning inside it.",
      "Toner powder is messy and harmful to breathe. Handle cartridges carefully and don't shake them over anything you care about.",
      "On laser printers, the fuser can be very hot. Wait 10 minutes after printing before touching internal components.",
    ],
    quickDiagnosis:
      "Streaks or lines on your Brother printer pages are usually caused by a dirty drum, a low toner cartridge, or a dirty corona wire. These are all easy fixes. In many cases, a simple cleaning inside the printer makes the streaks disappear instantly. You probably won't even need to buy anything.",
    steps: [
      {
        number: 1,
        title: "Print a test page to identify the problem",
        description:
          "Print a test page from your printer's menu or from your computer. Look at the streaks carefully. Vertical lines running down the page usually point to a drum problem. Horizontal lines across the page suggest a toner issue. Faded spots mean low toner. Repeating marks at regular intervals usually mean something is stuck on the drum or roller.",
      },
      {
        number: 2,
        title: "Remove and reseat the toner and drum",
        description:
          "Open the front cover of the printer. Pull out the toner and drum unit assembly. Separate the toner cartridge from the drum unit (usually a lever or button releases them). Put them back together firmly and slide the assembly back in. Sometimes a loose connection causes streaks. Close the cover and print a test page.",
      },
      {
        number: 3,
        title: "Clean the corona wire",
        description:
          "With the drum unit removed, look for a green or blue tab on the drum unit — this is the corona wire cleaner. Slide the tab back and forth from end to end several times. Make sure you return it to its home position when done. The corona wire electrically charges the drum, and if it's dirty, you get streaks.",
      },
      {
        number: 4,
        title: "Clean the drum surface",
        description:
          "Look at the green drum cylinder. Slowly rotate it by hand and look for any toner buildup, marks, or scratches on the surface. If you see a mark, gently wipe it with a dry, lint-free cloth. Don't touch the drum with your fingers — oils cause print quality issues. If the drum has deep scratches, it needs replacing.",
      },
      {
        number: 5,
        title: "Check the toner level and replace if needed",
        description:
          "If the test page is faded or has light streaks, the toner may be low. Take out the toner cartridge and gently rock it side to side 5-6 times — this redistributes the remaining toner and can give you a few hundred more pages. If that doesn't help, it's time for a new toner cartridge.",
      },
      {
        number: 6,
        title: "Replace the drum unit if streaks persist",
        description:
          "Drum units wear out over time (typically after 12,000-15,000 pages). If cleaning didn't fix the streaks and the toner is fine, the drum is likely worn out. Replace the drum unit — they cost $25–$50 and are easy to swap (just pull out the old one and put in the new one).",
      },
    ],
    alternativeCauses: [
      "Humidity can affect print quality. Store paper in a dry location and avoid printing right after bringing the printer in from the cold.",
      "Refilled or third-party toner cartridges sometimes cause streaks. Try a genuine Brother cartridge to see if that's the issue.",
      "A dirty fuser roller can leave marks on pages. These typically appear as shiny or smeared streaks. The fuser is harder to clean and may require a service kit.",
    ],
    whenToCallPro:
      "If cleaning and replacing the toner and drum don't fix the streaks, the fuser unit may need replacement ($50–$100). A repair shop will charge $60–$120 for this service. For budget Brother laser printers (under $150 new), it may be more cost-effective to replace the printer than to replace the fuser unit. For higher-end models, the fuser replacement is worth it.",
    metaTitle:
      "Brother Printer Streaking — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix Brother printer streaking on pages. Corona wire and drum cleaning guide. Difficulty: Easy. Save $100+.",
  },
];
