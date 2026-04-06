import { Guide } from "@/lib/types";

export const phoneGuides: Guide[] = [
  // ==========================================
  // iPHONE MODEL-SPECIFIC
  // ==========================================
  {
    id: "apple-iphone-15-screen-replacement",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-15-screen-replacement",
    problemTitle: "iPhone 15 Screen Replacement",
    difficulty: "Hard",
    timeEstimate: "45-90 minutes",
    costEstimate: "$40–$250",
    toolsNeeded: [
      "Pentalobe screwdriver (P2)",
      "Suction cup",
      "Plastic spudger",
      "Tweezers",
      "Heat gun or hair dryer",
      "Magnetic screw mat",
    ],
    partsNeeded: [
      {
        name: "iPhone 15 OLED Display Assembly",
        costRange: "$40–$250",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+15+screen+replacement+oled",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+15+screen+replacement+oled&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your iPhone completely before starting.",
      "If the battery is swollen or puffy, stop immediately and take it to a professional.",
      "Keep screws organized — the iPhone 15 uses different-length screws that must go back in the right spots.",
      "Disconnect the battery before disconnecting or connecting the display cables.",
    ],
    quickDiagnosis:
      "A cracked or broken iPhone 15 screen can still be replaced at home if you are patient and careful. This is a harder repair because the iPhone 15 has thin ribbon cables and waterproof adhesive that takes effort to work through. If your screen shows an image but the glass is cracked, this guide is for you.",
    steps: [
      {
        number: 1,
        title: "Gather your tools and back up your phone",
        description:
          "Before you start, back up your iPhone to iCloud or a computer. You do not want to lose your photos or data if something goes wrong. Lay out all your tools on a clean, flat surface. A magnetic mat helps keep tiny screws from rolling away.",
      },
      {
        number: 2,
        title: "Remove the bottom screws and loosen the screen",
        description:
          "Power off the iPhone. Remove the two pentalobe screws on either side of the charging port. Apply gentle heat along the edges of the screen with a hair dryer for about 2 minutes — this softens the waterproof adhesive. Place the suction cup near the bottom edge and pull up firmly while sliding a thin plastic pick into the gap.",
      },
      {
        number: 3,
        title: "Disconnect the battery and display cables",
        description:
          "Once the screen is open (it hinges from the left side), remove the metal bracket covering the battery connector. Use your spudger to pop the battery connector off the board. Then remove the bracket over the display cables and gently disconnect each ribbon cable. There are usually 3 connectors for the display and sensors.",
      },
      {
        number: 4,
        title: "Transfer components to the new screen",
        description:
          "Your old screen has the earpiece speaker and front sensor assembly attached to it. Carefully remove these parts and transfer them to your new display. Follow a video guide for your exact model — the sensor flex cable is very delicate.",
      },
      {
        number: 5,
        title: "Connect the new display and test",
        description:
          "Connect the new display's ribbon cables to the logic board. Reconnect the battery. Power on the phone and test everything — touch response, Face ID, brightness, and the earpiece. Do this before sealing the phone shut.",
      },
      {
        number: 6,
        title: "Seal and reassemble",
        description:
          "If everything works, apply new waterproof adhesive around the frame (included with most screen kits). Press the screen down firmly and replace the two bottom pentalobe screws. Your phone will not be as water-resistant as factory, but it will still have good protection.",
      },
    ],
    alternativeCauses: [
      "A loose display cable can cause a blank screen without the glass being cracked.",
      "Software crashes can make the screen appear dead — try a force restart first.",
      "If only part of the touch screen is unresponsive, the digitizer layer may be damaged even if the glass looks fine.",
    ],
    whenToCallPro:
      "If you are not comfortable working with tiny ribbon cables, or if Face ID stops working after your repair, a professional can help. Apple and authorized service providers can also do this repair with genuine parts and preserve your warranty.",
    metaTitle: "iPhone 15 Screen Replacement — Step-by-Step Guide | RepairItFree",
    metaDescription:
      "Learn how to replace your iPhone 15 screen at home. Step-by-step guide with tools, parts, cost estimates, and tips to do it right the first time.",
  },
  {
    id: "apple-iphone-14-battery-replacement",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-14-battery-replacement",
    problemTitle: "iPhone 14 Battery Replacement",
    difficulty: "Hard",
    timeEstimate: "45-75 minutes",
    costEstimate: "$20–$50",
    toolsNeeded: [
      "Pentalobe screwdriver (P2)",
      "Tri-point Y000 screwdriver",
      "Suction cup",
      "Plastic spudger",
      "Tweezers",
      "Isopropyl alcohol (for adhesive removal)",
      "Heat gun or hair dryer",
    ],
    partsNeeded: [
      {
        name: "iPhone 14 Replacement Battery",
        costRange: "$15–$35",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+14+replacement+battery",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+14+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Battery Adhesive Strips",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+14+battery+adhesive+strips",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+14+battery+adhesive+strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Lithium batteries can catch fire if punctured or bent. Be very careful when prying the old battery out.",
      "Never use metal tools to pry a battery — only plastic spudgers.",
      "If the battery is swollen, do not attempt this repair. Take it to a professional.",
      "Work in a well-ventilated area.",
    ],
    quickDiagnosis:
      "If your iPhone 14 dies before reaching 0%, shuts off in the cold, or the Battery Health in Settings shows below 80%, it is time for a new battery. This repair saves you a lot compared to Apple's service price, but it takes patience and careful hands.",
    steps: [
      {
        number: 1,
        title: "Check your battery health first",
        description:
          "Go to Settings > Battery > Battery Health & Charging. If Maximum Capacity is below 80%, a replacement will make a big difference. If it is above 85%, your battery issue might be caused by a rogue app draining power instead. Check Settings > Battery for usage details before committing to a replacement.",
      },
      {
        number: 2,
        title: "Open the phone carefully",
        description:
          "Power off your iPhone. Remove the two bottom pentalobe screws. Heat the edges with a hair dryer for 2 minutes to soften the seal. Use the suction cup and a plastic pick to separate the screen from the frame. The screen on the iPhone 14 hinges from the left — open it like a book but do not pull it past 90 degrees.",
      },
      {
        number: 3,
        title: "Disconnect the battery",
        description:
          "Remove the screws holding the battery connector bracket (use the tri-point screwdriver for some of these). Use a plastic spudger to pop the battery connector off the logic board. This makes the repair safe — no electricity flowing while you work.",
      },
      {
        number: 4,
        title: "Remove the old battery",
        description:
          "The battery is held down with pull-tab adhesive strips. Slowly pull each tab at a low angle — like peeling a sticker off a surface. If a tab snaps, apply a few drops of isopropyl alcohol around the battery edge to dissolve the glue, wait a minute, then gently pry with a plastic spudger. Never bend the battery.",
      },
      {
        number: 5,
        title: "Install the new battery and reassemble",
        description:
          "Place new adhesive strips in the battery well. Set the new battery in place and press firmly. Reconnect the battery connector, replace the bracket and screws, then close the screen and replace the bottom pentalobe screws. Power on and check Settings > Battery to confirm the new battery is recognized.",
      },
    ],
    alternativeCauses: [
      "A rogue app running in the background can drain battery fast — check Settings > Battery for usage stats.",
      "A faulty charging cable or adapter can prevent the battery from charging fully.",
      "Extreme heat or cold exposure over time degrades battery health faster.",
    ],
    whenToCallPro:
      "If the battery is swollen, if the adhesive tabs snap and you cannot remove the old battery, or if you are uncomfortable opening the phone, a pro can handle this quickly. Apple charges a flat rate for battery replacement that includes a genuine battery and warranty.",
    metaTitle:
      "iPhone 14 Battery Replacement — DIY Guide | RepairItFree",
    metaDescription:
      "Replace your iPhone 14 battery at home and save money. Full step-by-step guide with safety tips, tools needed, and cost estimates.",
  },
  {
    id: "apple-iphone-13-camera-not-working",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-13-camera-not-working",
    problemTitle: "iPhone 13 Camera Not Working",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0–$150",
    toolsNeeded: [
      "Pentalobe screwdriver (P2)",
      "Plastic spudger",
      "Tweezers",
    ],
    partsNeeded: [
      {
        name: "iPhone 13 Rear Camera Module",
        costRange: "$30–$150",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+13+rear+camera+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+13+rear+camera+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your phone before attempting any hardware fix.",
      "Do not touch the camera lens or sensor with your fingers — oils can affect image quality.",
      "If your phone was recently dropped in water, the camera issue may be part of a bigger problem.",
    ],
    quickDiagnosis:
      "If your iPhone 13 camera shows a black screen, is blurry, or the Camera app crashes, start with the free software fixes below. Many camera problems are software-related and do not need a new part at all.",
    steps: [
      {
        number: 1,
        title: "Force restart your iPhone",
        description:
          "Press and quickly release Volume Up, then press and quickly release Volume Down, then hold the Side button until the Apple logo appears. This clears temporary glitches that can freeze the camera. Open the Camera app and test both front and rear cameras.",
      },
      {
        number: 2,
        title: "Check for iOS updates and app conflicts",
        description:
          "Go to Settings > General > Software Update and install any available update. Also try opening the camera from a different app (like FaceTime or Instagram) to see if the issue is only in the default Camera app. If a third-party camera app works fine, try deleting and reinstalling the Camera app or resetting all settings.",
      },
      {
        number: 3,
        title: "Clean the camera lens and check for obstructions",
        description:
          "Use a soft microfiber cloth to clean the camera lenses. Check for any case or screen protector that might be blocking the camera. Look closely for cracks in the camera glass cover — even a small crack can let in moisture and cause blurry photos.",
      },
      {
        number: 4,
        title: "Reset all settings",
        description:
          "Go to Settings > General > Transfer or Reset iPhone > Reset > Reset All Settings. This will not delete your photos or apps, but it resets camera permissions and system settings that may be causing the problem. Test the camera again after the restart.",
      },
      {
        number: 5,
        title: "Replace the camera module (if hardware is faulty)",
        description:
          "If none of the software fixes worked, the camera module itself may be damaged. Open the phone using the same process as a screen repair — remove bottom screws, lift the screen, disconnect the battery, then locate and disconnect the camera ribbon cable. Swap in the new camera module and reconnect everything. Note: Apple may disable some camera features with non-genuine parts.",
      },
    ],
    alternativeCauses: [
      "A cracked camera glass cover lets in dust and moisture that blurs photos.",
      "Water damage can corrode camera connectors internally.",
      "A loose ribbon cable from a drop can cause intermittent camera failures.",
      "Low storage can prevent the Camera app from opening.",
    ],
    whenToCallPro:
      "If the camera glass cover is cracked, if the phone has water damage, or if swapping the camera module did not fix the issue, a professional can diagnose whether the logic board has damage. Apple restricts some camera features to genuine parts, so an authorized repair may be worth the cost.",
    metaTitle:
      "iPhone 13 Camera Not Working — Fix Guide | RepairItFree",
    metaDescription:
      "Fix your iPhone 13 camera with this step-by-step guide. Covers black screen, blurry photos, and camera app crashes with free and low-cost solutions.",
  },
  {
    id: "apple-iphone-12-screen-flickering-green-line",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-12-screen-flickering-green-line",
    problemTitle: "iPhone 12 Screen Flickering or Green Line",
    difficulty: "Medium",
    timeEstimate: "10-60 minutes",
    costEstimate: "$0–$200",
    toolsNeeded: [
      "Pentalobe screwdriver (P2)",
      "Suction cup",
      "Plastic spudger",
    ],
    partsNeeded: [
      {
        name: "iPhone 12 OLED Display Assembly",
        costRange: "$35–$200",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+12+replacement+screen+oled",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+12+replacement+screen+oled&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your phone before any hardware work.",
      "A green line on an OLED display is usually a hardware defect — software fixes may not resolve it.",
      "If your phone is still under warranty or covered by AppleCare+, contact Apple first. They may replace the screen for free.",
    ],
    quickDiagnosis:
      "A green line running top-to-bottom on your iPhone 12 screen is a common OLED panel defect. Flickering and green tint are related issues. Start with the free software steps below, but know that a green line almost always means the display needs to be replaced.",
    steps: [
      {
        number: 1,
        title: "Force restart your iPhone",
        description:
          "Press and quickly release Volume Up, then Volume Down, then hold the Side button until the Apple logo appears. Occasionally a green flicker is a temporary software glitch that a restart can clear.",
      },
      {
        number: 2,
        title: "Check for an iOS update",
        description:
          "Go to Settings > General > Software Update. Apple has released fixes for display-related bugs in the past. Update to the latest version and see if the green line or flickering goes away.",
      },
      {
        number: 3,
        title: "Adjust display settings",
        description:
          "Turn off Auto-Brightness (Settings > Accessibility > Display & Text Size). Also try turning off True Tone (Settings > Display & Brightness). If the green line only shows at certain brightness levels, this can help narrow down the cause.",
      },
      {
        number: 4,
        title: "Contact Apple about warranty coverage",
        description:
          "Apple has acknowledged green line issues on some iPhone 12 OLED displays. Even if your warranty has expired, Apple sometimes offers free repairs for known defects. Visit support.apple.com or go to an Apple Store for evaluation before paying for a repair.",
      },
      {
        number: 5,
        title: "Replace the display if not covered",
        description:
          "If Apple will not cover the repair, you can replace the screen yourself. Remove the bottom screws, heat the edges, lift the screen with a suction cup, disconnect the battery and display cables, and swap in the new display. Transfer the earpiece and sensor assembly from the old screen. Test before sealing.",
      },
    ],
    alternativeCauses: [
      "A drop or impact can damage the OLED panel internally even without cracking the glass.",
      "Water exposure can cause screen artifacts and green tint.",
      "A loose display connector can cause intermittent flickering (but not usually a solid green line).",
    ],
    whenToCallPro:
      "Since the green line is often a known Apple defect, check with Apple first — they may fix it for free. If not, a pro can replace the display faster and preserve water resistance better than a DIY repair.",
    metaTitle:
      "iPhone 12 Green Line on Screen — Fix Guide | RepairItFree",
    metaDescription:
      "Fix the green line or flickering on your iPhone 12 screen. Learn whether Apple covers it for free and how to replace the display yourself.",
  },
  {
    id: "apple-iphone-11-touch-screen-not-responding",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-11-touch-screen-not-responding",
    problemTitle: "iPhone 11 Touch Screen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0–$150",
    toolsNeeded: [
      "Pentalobe screwdriver (P2)",
      "Suction cup",
      "Plastic spudger",
    ],
    partsNeeded: [
      {
        name: "iPhone 11 LCD Display Assembly with Digitizer",
        costRange: "$25–$150",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+11+screen+replacement+lcd",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+11+screen+replacement+lcd&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off your phone completely before any repair.",
      "If the screen is cracked and touch does not work, be careful of glass shards.",
      "Disconnect the battery before disconnecting or connecting display cables.",
    ],
    quickDiagnosis:
      "If your iPhone 11 screen does not respond to touch — or only works in some areas — it could be a software freeze, a screen protector issue, or a damaged digitizer. The good news is that the most common causes are free to fix.",
    steps: [
      {
        number: 1,
        title: "Force restart your iPhone",
        description:
          "If the screen is completely frozen, a force restart often fixes it. Quickly press and release Volume Up, then Volume Down, then hold the Side button until the Apple logo appears. If touch works after restart, the problem was a software freeze.",
      },
      {
        number: 2,
        title: "Remove your screen protector and case",
        description:
          "A damaged or poorly applied screen protector can block touch input, especially at the edges. Remove it and test. Also remove your case — some cases press on the screen edges and interfere with the touch sensors.",
      },
      {
        number: 3,
        title: "Clean the screen and dry your hands",
        description:
          "Touch screens need clean, dry contact. Wipe the screen with a soft cloth. If your hands are wet, sweaty, or have lotion on them, the screen may not respond properly. This is a surprisingly common cause.",
      },
      {
        number: 4,
        title: "Update iOS and reset settings",
        description:
          "Go to Settings > General > Software Update and install any update. Then go to Settings > General > Transfer or Reset iPhone > Reset > Reset All Settings. This fixes touch calibration issues without deleting your data.",
      },
      {
        number: 5,
        title: "Replace the display if touch is still broken",
        description:
          "If software fixes did not work and the screen has physical damage, the digitizer (touch layer) is likely broken. Open the phone by removing the bottom screws, heating the edges, and lifting the screen. Disconnect the battery, then the display cables. Install the new display assembly which includes a fresh digitizer. Test touch in all areas before sealing.",
      },
    ],
    alternativeCauses: [
      "A recent iOS update can occasionally cause touch bugs — check Apple forums for known issues.",
      "Water under the screen protector can block touch input.",
      "A drop can damage the digitizer without cracking the visible glass.",
      "Extreme cold can temporarily make the touch screen sluggish.",
    ],
    whenToCallPro:
      "If the touch screen works in some areas but not others after trying all software fixes, the digitizer is damaged and needs replacement. A pro can do this faster and test thoroughly. If you have AppleCare+, Apple may cover it.",
    metaTitle:
      "iPhone 11 Touch Screen Not Responding — Fix Guide | RepairItFree",
    metaDescription:
      "Fix an unresponsive iPhone 11 touch screen with free software fixes and step-by-step hardware repair instructions.",
  },
  {
    id: "apple-iphone-wont-connect-to-wifi",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-wont-connect-to-wifi",
    problemTitle: "iPhone Won't Connect to WiFi",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Resetting network settings will erase all saved WiFi passwords — make sure you know your WiFi password before doing this.",
    ],
    quickDiagnosis:
      "If your iPhone cannot connect to WiFi, it is almost always a software or settings issue. Hardware WiFi failures are rare on iPhones. The fixes below are free and take just a few minutes.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description:
          "Open Settings > WiFi and toggle it off. Wait 10 seconds, then toggle it back on. This forces the phone to scan for networks again. Also try turning on and off Airplane Mode — this resets all wireless connections at once.",
      },
      {
        number: 2,
        title: "Forget the network and reconnect",
        description:
          "Go to Settings > WiFi, tap the (i) icon next to your network name, and tap Forget This Network. Then reconnect by selecting the network and entering the password again. This clears any corrupted connection data.",
      },
      {
        number: 3,
        title: "Restart your phone and your router",
        description:
          "Force restart your iPhone (Volume Up, Volume Down, then hold Side button). While it restarts, unplug your WiFi router for 30 seconds and plug it back in. Wait 2 minutes for the router to fully boot, then try connecting again.",
      },
      {
        number: 4,
        title: "Reset network settings",
        description:
          "Go to Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings. This clears all saved WiFi networks, Bluetooth pairings, and VPN settings. You will need to re-enter your WiFi password. This fixes most stubborn WiFi connection issues.",
      },
      {
        number: 5,
        title: "Check for iOS updates or VPN conflicts",
        description:
          "Update to the latest iOS version (Settings > General > Software Update). Also check if you have a VPN app or profile installed — some VPNs can interfere with WiFi. Try disabling any VPN and testing the connection.",
      },
    ],
    alternativeCauses: [
      "Your router may be the problem — test with another device to confirm.",
      "Too many devices on the same network can cause connection drops.",
      "A VPN or content blocker app can interfere with WiFi connections.",
      "Your router may be using a WiFi channel with interference from neighbors.",
    ],
    whenToCallPro:
      "If you have tried all these steps and your iPhone still will not connect to any WiFi network (not just your home network), the WiFi antenna or chip may be damaged. This is rare and usually caused by water damage or a hard drop. A repair shop can diagnose the hardware.",
    metaTitle:
      "iPhone Won't Connect to WiFi — Quick Fix Guide | RepairItFree",
    metaDescription:
      "Fix your iPhone WiFi connection problems in minutes. Free step-by-step troubleshooting guide for all iPhone models.",
  },
  {
    id: "apple-iphone-microphone-not-working",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-microphone-not-working-on-calls",
    problemTitle: "iPhone Microphone Not Working on Calls",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Soft brush or clean toothbrush",
      "Compressed air (optional)",
    ],
    partsNeeded: [
      {
        name: "iPhone Bottom Microphone Flex Cable (if hardware repair needed)",
        costRange: "$8–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+microphone+flex+cable+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+microphone+flex+cable+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Do not blow directly into the microphone hole — moisture from your breath can cause more damage.",
      "Be gentle when cleaning the microphone opening. Do not push debris further inside.",
    ],
    quickDiagnosis:
      "If people cannot hear you on calls, but speakerphone works, the bottom microphone is likely blocked or damaged. If no microphone works at all, it may be a software issue. These free troubleshooting steps fix the problem most of the time.",
    steps: [
      {
        number: 1,
        title: "Figure out which microphone is affected",
        description:
          "Your iPhone has 3 microphones: bottom (for calls), front (for FaceTime), and rear (for video). Test each one. Record a voice memo to test the bottom mic. Make a FaceTime call to test the front mic. Record a video to test the rear mic. This tells you exactly which mic has the problem.",
      },
      {
        number: 2,
        title: "Remove your case and clean the microphone openings",
        description:
          "Remove your phone case — some cases block the microphone holes. Use a soft brush or clean toothbrush to gently clean the microphone openings at the bottom of the phone, next to the front camera, and near the rear camera. Lint and debris from your pocket can block the tiny mic holes.",
      },
      {
        number: 3,
        title: "Check app permissions and Bluetooth",
        description:
          "Go to Settings > Privacy & Security > Microphone and make sure the Phone app and other apps have microphone access. Also check that Bluetooth is off or that you are not connected to a headset that is capturing the audio instead of the phone mic.",
      },
      {
        number: 4,
        title: "Restart and update your phone",
        description:
          "Force restart your iPhone. Then go to Settings > General > Software Update and install any available update. Software bugs can disable the microphone, and Apple has patched mic-related bugs in past updates.",
      },
      {
        number: 5,
        title: "Test in Safe Mode (disable third-party apps)",
        description:
          "Some apps can take control of the microphone in the background. Restart your iPhone and immediately test a call before opening any other apps. If the mic works right after a fresh restart but fails later, a third-party app is likely the culprit. Delete recently installed apps one by one to find it.",
      },
    ],
    alternativeCauses: [
      "A Bluetooth headset or car system may be capturing the audio instead of the phone mic.",
      "A phone case with a thick bottom edge can muffle or block the microphone.",
      "Water damage can corrode microphone connections.",
      "A noise-canceling feature can sometimes suppress your voice if there is loud background noise.",
    ],
    whenToCallPro:
      "If cleaning and software fixes do not help, the microphone hardware itself may be damaged — often from water exposure or a drop. Replacing the bottom mic involves opening the phone and swapping a small flex cable, which a repair shop can do in about 30 minutes.",
    metaTitle:
      "iPhone Microphone Not Working on Calls — Fix Guide | RepairItFree",
    metaDescription:
      "Fix your iPhone microphone so people can hear you on calls. Step-by-step guide covering cleaning, settings, and hardware troubleshooting.",
  },
  {
    id: "apple-iphone-overheating",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-overheating",
    problemTitle: "iPhone Overheating",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "If your iPhone is too hot to hold comfortably, let it cool down in a shaded area before using it.",
      "Never put a hot phone in the fridge or freezer — rapid temperature changes can cause condensation inside and lead to water damage.",
      "A swollen or warped battery is a fire hazard. If your phone case does not fit anymore or the screen is lifting, stop using the phone and take it to a professional immediately.",
    ],
    quickDiagnosis:
      "iPhones can get warm during heavy use, charging, or software updates — that is normal. But if your phone gets hot regularly, shuts down from heat, or shows a temperature warning, something is wrong. The fixes below are all free.",
    steps: [
      {
        number: 1,
        title: "Remove your case and let it cool",
        description:
          "Phone cases trap heat. Take off your case and set the phone on a cool, flat surface away from direct sunlight. Do not use the phone while it cools down. Give it at least 5 minutes.",
      },
      {
        number: 2,
        title: "Close background apps and stop heavy tasks",
        description:
          "Swipe up from the bottom to see open apps and swipe them away to close. If you were gaming, using GPS navigation, or recording video, those tasks generate a lot of heat. Stop them and let the phone rest.",
      },
      {
        number: 3,
        title: "Check for rogue apps draining the battery",
        description:
          "Go to Settings > Battery and look at which apps have used the most battery in the last 24 hours. If an app you barely use is near the top, it is running too much in the background. Delete it or go to Settings > General > Background App Refresh and turn it off for that app.",
      },
      {
        number: 4,
        title: "Update iOS and your apps",
        description:
          "Software bugs are a common cause of overheating. Go to Settings > General > Software Update and install any update. Also open the App Store, tap your profile picture, and update all your apps. Bug fixes often solve overheating problems.",
      },
      {
        number: 5,
        title: "Check your charging setup",
        description:
          "Using a cheap or damaged charger can cause the phone to heat up while charging. Switch to an Apple-certified (MFi) cable and power adapter. Also avoid using your phone while it charges — that creates the most heat.",
      },
    ],
    alternativeCauses: [
      "Direct sunlight on the phone — especially in a car — can overheat it quickly.",
      "A new iOS update can temporarily cause extra processing and heat as it re-indexes data.",
      "A failing battery generates more heat than a healthy one.",
      "Poor cell signal forces the radio to work harder, which creates heat.",
    ],
    whenToCallPro:
      "If your phone overheats even when idle with no apps running, the battery may be degrading. Check Battery Health in Settings — if it is below 80%, a battery replacement should fix the overheating. If the phone is physically warped or swollen, stop using it immediately and take it to a repair shop.",
    metaTitle: "iPhone Overheating — How to Fix It | RepairItFree",
    metaDescription:
      "Cool down your overheating iPhone with these free fixes. Learn what causes iPhones to overheat and how to stop it.",
  },
  {
    id: "apple-iphone-storage-full-cant-update",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-storage-full-cant-update",
    problemTitle: "iPhone Storage Full — Can't Update",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Back up your photos and important data before deleting anything.",
      "Do not delete system files or apps you do not recognize — some are needed for your phone to work properly.",
    ],
    quickDiagnosis:
      "When your iPhone says Storage Almost Full and will not install updates, you need to free up space. iOS updates can need 3-6 GB of free space. The steps below will help you clear space quickly without losing anything important.",
    steps: [
      {
        number: 1,
        title: "Check what is using your storage",
        description:
          "Go to Settings > General > iPhone Storage. Wait for it to load — it takes a moment. This shows every app and how much space it uses, sorted by size. You will likely see Photos, Messages, and a few apps at the top.",
      },
      {
        number: 2,
        title: "Enable iCloud Photos to offload originals",
        description:
          "Go to Settings > Photos and turn on iCloud Photos. Then select Optimize iPhone Storage. This keeps small previews on your phone and stores full-size photos in iCloud. This alone can free up many gigabytes. You need enough iCloud storage — the free 5 GB plan fills up fast, so consider the 50 GB plan for $0.99/month.",
      },
      {
        number: 3,
        title: "Delete old messages and large attachments",
        description:
          "Messages can use several GB of storage with photos and videos. Go to Settings > General > iPhone Storage > Messages to see attachments sorted by size. Delete large videos and photos you do not need. You can also set messages to auto-delete after 1 year in Settings > Messages > Keep Messages.",
      },
      {
        number: 4,
        title: "Offload unused apps",
        description:
          "Go to Settings > General > iPhone Storage and tap Enable next to Offload Unused Apps. This removes apps you have not used recently but keeps their data so you can reinstall them later. You can also tap individual apps and choose Offload App for specific ones.",
      },
      {
        number: 5,
        title: "Clear Safari cache and downloaded content",
        description:
          "Go to Settings > Safari and tap Clear History and Website Data. Also check streaming apps like Netflix, Spotify, and Podcasts for downloaded content you no longer need. Offline downloads can quietly use gigabytes of space.",
      },
      {
        number: 6,
        title: "Try the update again",
        description:
          "After freeing space, go to Settings > General > Software Update and try the update again. You need at least 3-5 GB free for most updates. If you still do not have enough room, connect your phone to a Mac or PC and update through Finder or iTunes — this method needs less free space on the phone.",
      },
    ],
    alternativeCauses: [
      "The 'Other' or 'System Data' category can grow very large — restarting your phone or doing a backup and restore can shrink it.",
      "Cached data from streaming apps builds up over time.",
      "Old iOS updates that failed to install can leave large temporary files.",
    ],
    whenToCallPro:
      "This is always a DIY fix — no repair shop needed. If you are not comfortable deciding what to delete, ask a tech-savvy friend or visit an Apple Store for free guidance at the Genius Bar.",
    metaTitle:
      "iPhone Storage Full Can't Update — Quick Fix | RepairItFree",
    metaDescription:
      "Free up space on your iPhone so you can install updates. Step-by-step guide to clearing storage quickly and safely.",
  },
  {
    id: "apple-iphone-water-damage-recovery",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "iphone-water-damage-recovery",
    problemTitle: "iPhone Water Damage Recovery",
    difficulty: "Medium",
    timeEstimate: "24-72 hours",
    costEstimate: "$0–$100",
    toolsNeeded: [
      "Soft lint-free cloth",
      "Silica gel packets (preferred) or uncooked rice",
      "Isopropyl alcohol 90%+ (for cleaning corrosion)",
      "Soft brush",
    ],
    partsNeeded: [
      {
        name: "Silica Gel Desiccant Packets",
        costRange: "$5–$12",
        amazonUrl: "https://www.amazon.com/s?k=silica+gel+desiccant+packets&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=silica+gel+desiccant+packets&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Do NOT try to charge your iPhone until it is completely dry — charging a wet phone can short-circuit the logic board.",
      "Do NOT use a hair dryer or heat gun — heat can damage internal components and push moisture deeper inside.",
      "Do NOT shake the phone vigorously — this can spread water to areas that were dry.",
      "Modern iPhones are water-resistant, not waterproof. Damage can still happen, especially from saltwater or pool water.",
    ],
    quickDiagnosis:
      "If your iPhone got wet, the most important thing is to act fast and avoid making common mistakes. Do not try to turn it on or charge it. The steps below give your phone the best chance of recovery.",
    steps: [
      {
        number: 1,
        title: "Get the phone out of water and power it off immediately",
        description:
          "Remove the phone from the water right away. If it is still on, power it off immediately — hold the Side button and Volume button, then slide to power off. Do not press any buttons more than necessary. Every second the phone stays on while wet increases the chance of a short circuit.",
      },
      {
        number: 2,
        title: "Dry the outside and remove the SIM card",
        description:
          "Gently shake the phone with the charging port facing down to let water drain out. Wipe the outside with a lint-free cloth. Use the SIM tool to eject the SIM card tray — this opens a small hole that helps water escape. Pat the ports dry with a cloth, but do not insert anything into them.",
      },
      {
        number: 3,
        title: "Place in a drying environment for 48-72 hours",
        description:
          "Put the phone in a sealed container or bag filled with silica gel packets. Silica gel absorbs moisture much better than rice (and rice dust can clog your ports). If you do not have silica gel, set the phone in a dry, well-ventilated room with the charging port facing down. Wait at least 48 hours. Do not give in to the temptation to check on it early.",
      },
      {
        number: 4,
        title: "Test the phone carefully",
        description:
          "After 48-72 hours, try turning on the phone. If it powers on, check everything: screen, touch, cameras, speakers, microphone (make a call), and charging. Some features may work immediately while others take longer to recover as remaining moisture evaporates.",
      },
      {
        number: 5,
        title: "Clean corrosion if the phone was in saltwater or dirty water",
        description:
          "Saltwater and pool water cause corrosion faster than fresh water. If possible, open the phone (using pentalobe and spudger) and gently brush the connectors with a soft brush dipped in 90%+ isopropyl alcohol. Alcohol displaces water and evaporates quickly without leaving residue. This step is advanced and optional.",
      },
    ],
    alternativeCauses: [
      "Sweat and humidity over time can cause the same problems as a single water event.",
      "A cracked screen or damaged port seal reduces water resistance.",
      "Steam from a hot shower can cause internal condensation.",
    ],
    whenToCallPro:
      "If the phone does not turn on after 72 hours, or if it turns on but the screen, speakers, or microphone do not work, take it to a repair shop that specializes in water damage. They have ultrasonic cleaning equipment that can remove corrosion you cannot reach. Act fast — corrosion gets worse over time.",
    metaTitle:
      "iPhone Water Damage Recovery — What to Do | RepairItFree",
    metaDescription:
      "Dropped your iPhone in water? Follow this step-by-step guide to maximize your chances of saving it. Learn what to do and what NOT to do.",
  },

  // ==========================================
  // SAMSUNG GALAXY
  // ==========================================
  {
    id: "samsung-galaxy-s24-screen-replacement",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-s24-screen-replacement",
    problemTitle: "Samsung Galaxy S24 Screen Replacement",
    difficulty: "Hard",
    timeEstimate: "60-120 minutes",
    costEstimate: "$50–$280",
    toolsNeeded: [
      "Phillips #000 screwdriver",
      "Plastic spudger",
      "Suction cup",
      "Heat gun or hair dryer",
      "Tweezers",
      "Magnetic screw mat",
      "Isopropyl alcohol",
    ],
    partsNeeded: [
      {
        name: "Samsung Galaxy S24 AMOLED Display Assembly with Frame",
        costRange: "$50–$280",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+s24+screen+replacement+amoled",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+s24+screen+replacement+amoled&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off the phone and remove the SIM tray before starting.",
      "Samsung phones have the screen glued on with very strong adhesive — go slow with the heat to avoid cracking the back glass.",
      "Be extremely careful around the battery. Samsung batteries should never be punctured.",
      "Wear safety glasses in case glass shards fly when separating the screen.",
    ],
    quickDiagnosis:
      "If your Galaxy S24 screen is cracked, shows dead pixels, or the touch does not respond, a screen replacement will fix it. Samsung uses a screen-and-frame assembly that makes the replacement more straightforward than swapping just the glass. This is a harder repair due to the strong adhesive.",
    steps: [
      {
        number: 1,
        title: "Back up your phone and gather tools",
        description:
          "Back up your data to Samsung Cloud or Google. Watch a teardown video for the Galaxy S24 before you start so you know what to expect. Lay out your tools on a clean, well-lit surface. A magnetic mat is essential for keeping track of the many tiny screws.",
      },
      {
        number: 2,
        title: "Heat and remove the back glass",
        description:
          "On Samsung phones, you enter through the back, not the front. Apply heat to the back glass for 3-4 minutes. Use the suction cup and a plastic pick to slowly separate the back glass from the frame. Work the pick around the entire perimeter. Go very slowly — the back glass is thin and cracks easily.",
      },
      {
        number: 3,
        title: "Disconnect the battery and remove internal components",
        description:
          "Remove the screws holding the midframe in place. Disconnect the battery cable first for safety. Then disconnect the display cable, camera cables, and any other ribbon cables attached to the midframe. Take photos of each step so you remember where everything goes.",
      },
      {
        number: 4,
        title: "Remove the old screen and transfer to the new frame",
        description:
          "If your new display comes with a frame (recommended), you just need to transfer the logic board, battery, cameras, and other components from the old frame to the new one. This is easier than trying to separate the screen from the frame. Follow your teardown video step by step.",
      },
      {
        number: 5,
        title: "Reassemble and test everything",
        description:
          "Reconnect all ribbon cables, starting with the display and battery last. Before sealing anything, power on the phone and test: screen, touch, cameras, fingerprint sensor, and speakers. Make a test call to check the earpiece and microphone.",
      },
      {
        number: 6,
        title: "Seal the phone and replace the back glass",
        description:
          "Apply new adhesive around the frame for the back glass. Press the back glass firmly into place and apply even pressure for a minute. The phone will not be as water-resistant as factory, but the adhesive will hold the glass securely.",
      },
    ],
    alternativeCauses: [
      "A screen that looks fine but does not respond to touch may have a digitizer failure from a drop.",
      "Dead pixels or colored lines can appear after a drop even without a visible crack.",
      "Software glitches can sometimes make the screen appear broken — try a force restart first by holding Power + Volume Down for 10 seconds.",
    ],
    whenToCallPro:
      "Samsung screen replacements are one of the harder phone repairs because of the strong adhesive and back-entry design. If you are not comfortable with heat tools and tiny cables, a pro can do this in about an hour. Samsung authorized service centers use genuine parts and preserve your warranty.",
    metaTitle:
      "Samsung Galaxy S24 Screen Replacement — DIY Guide | RepairItFree",
    metaDescription:
      "Replace your cracked Samsung Galaxy S24 screen at home. Full step-by-step guide with tools, parts, safety tips, and cost estimates.",
  },
  {
    id: "samsung-galaxy-s23-battery-draining-fast",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-s23-battery-draining-fast",
    problemTitle: "Samsung Galaxy S23 Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "If your phone gets very hot while the battery drains, stop using it and let it cool down.",
    ],
    quickDiagnosis:
      "If your Galaxy S23 battery drains faster than it should, the cause is almost always a software issue — a rogue app, a bad setting, or a recent update. These free fixes solve the problem for most people.",
    steps: [
      {
        number: 1,
        title: "Check which apps are draining your battery",
        description:
          "Go to Settings > Battery and Device Care > Battery. Tap the usage graph to see which apps used the most battery. If an app you barely use is high on the list, it is running too much in the background. Tap it and select Restrict Background Usage.",
      },
      {
        number: 2,
        title: "Turn on Adaptive Battery and optimize settings",
        description:
          "Go to Settings > Battery and Device Care > Battery > More Battery Settings. Turn on Adaptive Battery — this learns your usage patterns and limits battery for apps you rarely use. Also turn on Adaptive Brightness (Settings > Display) to reduce screen power usage.",
      },
      {
        number: 3,
        title: "Reduce screen brightness and timeout",
        description:
          "The screen is the biggest battery drain. Lower your brightness or use auto-brightness. Set your screen timeout to 30 seconds (Settings > Display > Screen Timeout). Also turn off Always-On Display if it is enabled — it uses more battery than most people realize.",
      },
      {
        number: 4,
        title: "Disable unnecessary features",
        description:
          "Turn off features you do not actively use: Bluetooth (if not using wireless earbuds), NFC, Location (or set it to While Using App Only for each app), 5G (switch to LTE in Settings > Connections > Mobile Networks if you do not need 5G speeds), and sync for apps that do not need real-time updates.",
      },
      {
        number: 5,
        title: "Update your phone and clear the cache",
        description:
          "Go to Settings > Software Update and install any available update. Then clear the system cache: power off the phone, hold Volume Up + Power until the Samsung logo appears, use the volume buttons to select Wipe Cache Partition, and confirm. This does not delete your data.",
      },
    ],
    alternativeCauses: [
      "A recent software update can temporarily drain battery faster as it re-optimizes apps.",
      "Poor cell signal forces the radio to work harder and drains battery.",
      "An aging battery (after 2+ years) naturally holds less charge — check Battery Health in settings.",
      "Widgets on the home screen that update frequently use more battery than you would expect.",
    ],
    whenToCallPro:
      "If your phone is less than a year old and battery life is terrible even after these steps, contact Samsung support — it could be a defective battery covered under warranty. If the phone is over 2 years old, a battery replacement can bring it back to life.",
    metaTitle:
      "Samsung Galaxy S23 Battery Draining Fast — Fix Guide | RepairItFree",
    metaDescription:
      "Fix fast battery drain on your Samsung Galaxy S23 with these free tips. Step-by-step guide to extending your battery life.",
  },
  {
    id: "samsung-galaxy-screen-black-but-on",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-screen-black-but-phone-on",
    problemTitle: "Samsung Galaxy Screen Black but Phone Is On",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0–$250",
    toolsNeeded: [
      "Phillips #000 screwdriver",
      "Plastic spudger",
      "Heat gun or hair dryer",
    ],
    partsNeeded: [
      {
        name: "Samsung Galaxy AMOLED Display Assembly (model-specific)",
        costRange: "$40–$250",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+amoled+screen+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+amoled+screen+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If the phone is hot and the screen is black, it may have a short circuit. Let it cool before handling.",
      "Do not keep trying to charge a phone with a black screen if you smell anything burning.",
    ],
    quickDiagnosis:
      "If your Samsung Galaxy screen is black but you can hear notifications, feel vibrations, or the phone rings, the display has failed but the phone is working. This can be a software crash or a dead display. Try the free software fixes first.",
    steps: [
      {
        number: 1,
        title: "Force restart the phone",
        description:
          "Hold the Power button and Volume Down button together for 10-15 seconds until the phone vibrates and restarts. On some Samsung models, you may need to hold for up to 30 seconds. If the Samsung logo appears, the screen works and it was a software crash.",
      },
      {
        number: 2,
        title: "Boot into Safe Mode",
        description:
          "Power off the phone completely. Then press and hold the Power button. When the Samsung logo appears, release Power and immediately hold Volume Down until the phone finishes booting. You should see Safe Mode in the bottom corner. If the screen works in Safe Mode, a third-party app is causing the black screen.",
      },
      {
        number: 3,
        title: "Try connecting to an external display",
        description:
          "If you have a USB-C to HDMI adapter, connect your phone to a TV or monitor. If the phone's display shows on the external screen, the phone works fine — only the built-in display is broken. This also lets you back up your data before repair.",
      },
      {
        number: 4,
        title: "Charge the phone for at least 30 minutes",
        description:
          "Sometimes a completely dead battery shows a black screen even after plugging in. Use the original charger and cable. Wait at least 30 minutes — some phones need time before they show any sign of charging. Look for a small battery icon or LED light.",
      },
      {
        number: 5,
        title: "Replace the display if it is a hardware failure",
        description:
          "If the phone works (you can hear it, feel vibrations) but the screen stays black after all software fixes, the AMOLED display panel has died. Samsung screen replacements require removing the back glass with heat, disconnecting internal components, and swapping the display assembly. Refer to a model-specific teardown guide.",
      },
    ],
    alternativeCauses: [
      "A completely drained battery can look like a black screen — charge it for 30 minutes before assuming the screen is broken.",
      "A software crash can freeze the display while the phone keeps running.",
      "Water damage can kill the display while leaving other components working.",
      "A failed display connector from a drop can cause an intermittent black screen.",
    ],
    whenToCallPro:
      "If your phone is still under warranty and the screen went black without any drops or water damage, Samsung may repair it for free. If you need your data recovered from a phone with a dead screen, a repair shop can connect an external display and help you transfer files.",
    metaTitle:
      "Samsung Galaxy Screen Black but Phone Is On — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Samsung Galaxy with a black screen that is still receiving calls and notifications. Step-by-step troubleshooting guide.",
  },
  {
    id: "samsung-galaxy-camera-failed",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-camera-failed",
    problemTitle: "Samsung Galaxy Camera Failed Error",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: [],
    partsNeeded: [
      {
        name: "Samsung Galaxy Rear Camera Module (model-specific)",
        costRange: "$15–$80",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+rear+camera+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+rear+camera+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you need to open the phone, always disconnect the battery first.",
    ],
    quickDiagnosis:
      "The 'Camera Failed' error on Samsung Galaxy phones is very common and almost always caused by a software glitch — not broken hardware. The fixes below take just a few minutes and work for most people.",
    steps: [
      {
        number: 1,
        title: "Force close the Camera app and restart",
        description:
          "Go to Settings > Apps > Camera and tap Force Stop. Then restart your phone by holding the Power button and tapping Restart. Open the Camera app again. This clears the camera process and fixes most temporary glitches.",
      },
      {
        number: 2,
        title: "Clear the Camera app cache and data",
        description:
          "Go to Settings > Apps > Camera > Storage and tap Clear Cache. If that does not fix it, tap Clear Data as well. This resets the Camera app to its default state. You will not lose your saved photos — those are stored separately in the Gallery.",
      },
      {
        number: 3,
        title: "Boot into Safe Mode to check for app conflicts",
        description:
          "Third-party camera or flashlight apps can conflict with the built-in Camera. Boot into Safe Mode (Power off, then hold Power until logo appears, then hold Volume Down). If the camera works in Safe Mode, uninstall recently installed camera-related apps.",
      },
      {
        number: 4,
        title: "Wipe the cache partition",
        description:
          "Power off the phone. Hold Volume Up + Power until the recovery menu appears. Use volume buttons to select Wipe Cache Partition and confirm with the Power button. This clears temporary system files without deleting your data. Restart and test the camera.",
      },
      {
        number: 5,
        title: "Update your phone software",
        description:
          "Go to Settings > Software Update > Download and Install. Samsung regularly patches camera bugs. If you are several updates behind, this could be the fix. After the update, test both front and rear cameras.",
      },
    ],
    alternativeCauses: [
      "Low storage can prevent the camera from opening — free up space if your phone is nearly full.",
      "A third-party camera app or flashlight app can lock the camera hardware.",
      "A recent phone drop can loosen the camera ribbon cable internally.",
      "Dust or debris on the camera lens can confuse autofocus and cause errors.",
    ],
    whenToCallPro:
      "If you have tried every software fix and the camera still shows a 'Camera Failed' error, the camera module itself may be damaged. A repair shop can replace the camera module in about 30-45 minutes. This is a common repair and usually affordable.",
    metaTitle:
      "Samsung Galaxy Camera Failed Error — Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung Galaxy 'Camera Failed' error with these quick steps. Most fixes are free and take under 5 minutes.",
  },
  {
    id: "samsung-galaxy-wont-connect-wifi",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-wont-connect-to-wifi",
    problemTitle: "Samsung Galaxy Won't Connect to WiFi",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Resetting network settings will erase all saved WiFi passwords and Bluetooth pairings.",
    ],
    quickDiagnosis:
      "If your Samsung Galaxy will not connect to WiFi, it is almost always a software or settings issue. These free fixes work for every Galaxy model and take just a few minutes.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi and Airplane Mode",
        description:
          "Pull down the Quick Settings panel and toggle WiFi off. Wait 10 seconds, then toggle it back on. If that does not work, toggle Airplane Mode on for 10 seconds, then off again. This resets all wireless connections.",
      },
      {
        number: 2,
        title: "Forget the network and reconnect",
        description:
          "Go to Settings > Connections > WiFi. Long-press your network name and tap Forget Network. Then tap the network again and re-enter the password. This clears any corrupted connection data that may be blocking the connection.",
      },
      {
        number: 3,
        title: "Restart your phone and router",
        description:
          "Restart your Galaxy by holding the Power button and tapping Restart. While it restarts, unplug your WiFi router for 30 seconds, then plug it back in. Wait 2-3 minutes for the router to fully boot before trying to connect.",
      },
      {
        number: 4,
        title: "Reset network settings",
        description:
          "Go to Settings > General Management > Reset > Reset Network Settings. This clears all WiFi, Bluetooth, and mobile data settings. You will need to re-enter your WiFi password. This is the most effective fix for persistent WiFi problems.",
      },
      {
        number: 5,
        title: "Check for software updates",
        description:
          "Go to Settings > Software Update > Download and Install. WiFi connectivity bugs are common in Android updates and Samsung regularly releases patches. Update to the latest version and test your connection.",
      },
    ],
    alternativeCauses: [
      "Your router may be the problem — test with another device to confirm.",
      "A VPN app can interfere with WiFi connections.",
      "Too many saved WiFi networks can cause connection issues — delete old ones.",
      "Your router's MAC address filtering may be blocking the phone.",
    ],
    whenToCallPro:
      "If your Galaxy will not connect to any WiFi network after these steps, the WiFi antenna may be damaged. This is usually caused by water damage or a significant drop. A repair shop can test and replace the WiFi antenna.",
    metaTitle:
      "Samsung Galaxy Won't Connect to WiFi — Fix Guide | RepairItFree",
    metaDescription:
      "Fix WiFi connection problems on your Samsung Galaxy phone. Free step-by-step troubleshooting guide that works for all Galaxy models.",
  },
  {
    id: "samsung-galaxy-charging-port-loose",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-charging-port-loose",
    problemTitle: "Samsung Galaxy Charging Port Loose",
    difficulty: "Medium",
    timeEstimate: "10-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Wooden or plastic toothpick",
      "Compressed air",
      "Flashlight",
      "Phillips #000 screwdriver (if replacing port)",
      "Plastic spudger (if replacing port)",
    ],
    partsNeeded: [
      {
        name: "Samsung Galaxy USB-C Charging Port Flex Cable (model-specific)",
        costRange: "$8–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+usb-c+charging+port+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+usb-c+charging+port+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Use a wooden or plastic toothpick to clean the port — never use a metal object like a pin or needle, which can damage the pins.",
      "Do not blow into the port with your mouth — moisture from your breath can cause corrosion.",
    ],
    quickDiagnosis:
      "A loose-feeling charging port is almost always caused by lint and pocket debris packed into the port — not a broken port. In most cases, cleaning it out is a free fix that takes 2 minutes.",
    steps: [
      {
        number: 1,
        title: "Inspect the port with a flashlight",
        description:
          "Shine a flashlight into the USB-C port and look closely. You will likely see a layer of compressed lint at the bottom. This lint prevents the cable from clicking in all the way, making the connection feel loose. This is the most common cause.",
      },
      {
        number: 2,
        title: "Clean out lint and debris",
        description:
          "Power off your phone. Use a wooden or plastic toothpick to gently scrape the bottom and sides of the charging port. You will be surprised how much lint comes out. Work carefully and do not force anything. Then use short bursts of compressed air to blow out remaining debris.",
      },
      {
        number: 3,
        title: "Try a different cable",
        description:
          "Not all USB-C cables are made equal. Some have slightly thinner connectors that do not grip as well. Try a high-quality cable or the cable that originally came with your phone. If a different cable fits snugly, the port is fine and your old cable was the problem.",
      },
      {
        number: 4,
        title: "Check for physical damage to the port",
        description:
          "Look inside the port again with the flashlight. The center tab should be straight and centered. If it is bent, you can very gently straighten it with a toothpick. If the center tab is broken or missing, the port needs to be replaced.",
      },
      {
        number: 5,
        title: "Replace the charging port (if damaged)",
        description:
          "If the port is physically damaged, the charging port flex cable needs to be replaced. This requires opening the phone from the back, disconnecting the battery, and swapping the flex cable. It is a moderate repair — follow a model-specific guide. The part is cheap but the labor takes patience.",
      },
    ],
    alternativeCauses: [
      "A worn-out or cheap cable can feel loose even with a clean port.",
      "Wireless charging can be a free workaround if your phone supports it.",
      "Corrosion from water exposure can make the connection unreliable.",
    ],
    whenToCallPro:
      "If cleaning the port did not fix the issue and the center tab is damaged, a repair shop can replace the charging port flex cable in about 30 minutes. This is a common and affordable repair for Samsung phones.",
    metaTitle:
      "Samsung Galaxy Charging Port Loose — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a loose Samsung Galaxy charging port. Most of the time it just needs cleaning — learn how with this free step-by-step guide.",
  },
  {
    id: "samsung-galaxy-speaker-crackling",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-speaker-crackling",
    problemTitle: "Samsung Galaxy Speaker Crackling",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Soft brush or clean toothbrush",
      "Compressed air (optional)",
    ],
    partsNeeded: [
      {
        name: "Samsung Galaxy Speaker Module (model-specific)",
        costRange: "$8–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+speaker+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+speaker+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Lower your volume before testing the speaker to avoid further damage to a compromised speaker.",
    ],
    quickDiagnosis:
      "Crackling, buzzing, or distorted sound from your Samsung Galaxy speaker is usually caused by debris in the speaker grille, a software glitch, or a blown speaker. Start with the free fixes — they work most of the time.",
    steps: [
      {
        number: 1,
        title: "Restart your phone and test at different volumes",
        description:
          "Restart your Galaxy and play audio at a low volume. If it only crackles at high volume, the speaker may be physically damaged. If it crackles at all volumes, it is more likely a software issue or debris problem.",
      },
      {
        number: 2,
        title: "Clean the speaker grille",
        description:
          "Lint, dust, and pocket debris can cover the speaker grille and cause muffled or crackling sound. Use a soft brush or clean toothbrush to gently brush the speaker grilles at the bottom and top of the phone. Use short bursts of compressed air to blow out stubborn debris.",
      },
      {
        number: 3,
        title: "Check if a case or screen protector is covering the speaker",
        description:
          "Remove your phone case and screen protector. Some cases partially cover the speaker grilles, and screen protectors can block the earpiece speaker. Test the audio without the case to see if the crackling stops.",
      },
      {
        number: 4,
        title: "Check for Bluetooth and software issues",
        description:
          "Turn off Bluetooth to make sure audio is not routing to a wireless device. Then go to Settings > Apps > find a music or media app > Storage > Clear Cache. Also try playing audio in a different app — if only one app crackles, the problem is with that app, not your speaker.",
      },
      {
        number: 5,
        title: "Use Samsung's built-in diagnostics",
        description:
          "Open the Phone app and dial *#0*# to enter Samsung's diagnostic menu. Tap Speaker to test both speakers. This plays a test tone directly through the hardware, bypassing any software issues. If the test tone crackles, the speaker hardware is damaged and needs replacement.",
      },
    ],
    alternativeCauses: [
      "Water in the speaker grille can cause temporary crackling — it usually dries on its own.",
      "A cracked speaker membrane from a drop causes permanent crackling at higher volumes.",
      "Certain audio codecs or streaming quality settings can cause crackling in specific apps.",
    ],
    whenToCallPro:
      "If the speaker crackles during Samsung's built-in diagnostic test, the speaker module is damaged. A repair shop can replace it quickly. If both speakers crackle and it happened after water exposure, there may be corrosion on the logic board that a pro needs to clean.",
    metaTitle:
      "Samsung Galaxy Speaker Crackling — Fix Guide | RepairItFree",
    metaDescription:
      "Fix crackling or distorted sound from your Samsung Galaxy speaker. Free troubleshooting steps and hardware repair guide.",
  },

  // ==========================================
  // GOOGLE PIXEL
  // ==========================================
  {
    id: "google-pixel-8-screen-replacement",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "pixel-8-screen-replacement",
    problemTitle: "Google Pixel 8 Screen Replacement",
    difficulty: "Hard",
    timeEstimate: "60-90 minutes",
    costEstimate: "$50–$200",
    toolsNeeded: [
      "Phillips #000 screwdriver",
      "Plastic spudger",
      "Suction cup",
      "Heat gun or hair dryer",
      "Tweezers",
      "Isopropyl alcohol",
    ],
    partsNeeded: [
      {
        name: "Google Pixel 8 OLED Display Assembly",
        costRange: "$50–$200",
        amazonUrl:
          "https://www.amazon.com/s?k=google+pixel+8+screen+replacement+oled",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=google+pixel+8+screen+replacement+oled&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Power off the phone and remove the SIM tray before starting.",
      "Pixel phones have strong adhesive — take your time with heat and go slowly.",
      "The fingerprint sensor is integrated into the screen. A third-party screen may disable it.",
      "Disconnect the battery before working on any cables.",
    ],
    quickDiagnosis:
      "A cracked Pixel 8 screen can be replaced at home, but it is one of the harder phone repairs because of the strong adhesive and integrated fingerprint sensor. Google also partners with iFixit to sell genuine parts, which is worth considering.",
    steps: [
      {
        number: 1,
        title: "Order the right part and watch a teardown video",
        description:
          "Check iFixit.com for Pixel 8 genuine screen kits — Google has partnered with them for official parts. Watch a teardown video all the way through before you start. The Pixel 8 opens from the back, not the front, so the process is different from iPhones.",
      },
      {
        number: 2,
        title: "Heat and remove the back glass",
        description:
          "Apply heat to the back of the phone for 3-4 minutes. Use the suction cup to start lifting the back panel and slide a plastic pick around the perimeter to cut through the adhesive. Go very slowly along the edges near the camera bar. Set the back glass aside carefully.",
      },
      {
        number: 3,
        title: "Disconnect the battery and internal cables",
        description:
          "Remove the screws from the internal shield/bracket. Disconnect the battery connector first using a plastic spudger. Then disconnect the display cable and any other ribbon cables connecting the screen to the logic board. Take photos to remember cable positions.",
      },
      {
        number: 4,
        title: "Remove the old screen and install the new one",
        description:
          "Heat the front of the phone to soften the screen adhesive. Carefully separate the screen from the frame. If your new display comes pre-mounted on a frame, transfer the logic board, battery, cameras, and speakers to the new assembly. If it is just a screen, mount it on your existing frame with new adhesive.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Reconnect all cables, battery last. Power on and test everything: screen, touch, fingerprint sensor, cameras, speakers, and microphone. If the fingerprint sensor does not work with a third-party screen, you may need a Google genuine part. Seal the back glass with new adhesive.",
      },
    ],
    alternativeCauses: [
      "A force restart (hold Power for 30 seconds) can fix a black screen caused by a software crash.",
      "A loose display cable from a drop can cause a partially working screen.",
      "The screen may look fine but have dead touch zones from digitizer damage.",
    ],
    whenToCallPro:
      "Google offers mail-in repair and has authorized repair partners. If you want the fingerprint sensor to work reliably, a genuine Google screen from an authorized provider is your best bet. The DIY repair is doable but takes patience.",
    metaTitle:
      "Google Pixel 8 Screen Replacement — DIY Guide | RepairItFree",
    metaDescription:
      "Replace your cracked Google Pixel 8 screen at home. Step-by-step guide with genuine parts sources, tools, and tips.",
  },
  {
    id: "google-pixel-camera-not-working",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "pixel-camera-not-working",
    problemTitle: "Google Pixel Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "If your phone is very hot, let it cool down before troubleshooting — overheating can temporarily disable the camera.",
    ],
    quickDiagnosis:
      "If your Google Pixel camera shows a black screen, freezes, or gives an error, the cause is almost always a software glitch. Pixel phones are known for their amazing cameras, and software fixes resolve the issue for most people.",
    steps: [
      {
        number: 1,
        title: "Force close the Camera app",
        description:
          "Go to Settings > Apps > Camera > Force Stop. Wait a few seconds, then open the Camera app again. This clears the camera process. If the camera works now, it was a temporary glitch.",
      },
      {
        number: 2,
        title: "Clear Camera app cache and data",
        description:
          "Go to Settings > Apps > Camera > Storage & Cache. Tap Clear Cache first and test. If that does not work, tap Clear Storage to reset the app completely. Your photos are safe in the Gallery or Google Photos — this only resets camera settings.",
      },
      {
        number: 3,
        title: "Restart your phone",
        description:
          "Hold the Power button and tap Restart. A simple restart clears many temporary bugs that can freeze the camera. After the restart, open the Camera and test both front and rear cameras.",
      },
      {
        number: 4,
        title: "Check for system updates",
        description:
          "Go to Settings > System > System Update and install any pending updates. Google frequently patches camera bugs in monthly security updates. Pixel phones receive updates directly from Google, so they arrive quickly.",
      },
      {
        number: 5,
        title: "Boot into Safe Mode",
        description:
          "Hold the Power button, then long-press the Power Off option on screen until Safe Mode appears. Tap OK. In Safe Mode, only built-in apps run. If the camera works in Safe Mode, a third-party app is conflicting. Boot normally and uninstall recently installed apps one by one.",
      },
    ],
    alternativeCauses: [
      "Low storage can prevent the camera from working — free up space.",
      "A third-party camera app can lock the camera hardware and prevent the default app from accessing it.",
      "Overheating temporarily disables the camera to protect the sensor.",
      "Physical damage from a drop can loosen the camera connector.",
    ],
    whenToCallPro:
      "If none of the software fixes work and the camera has physical damage or was exposed to water, the camera module may need replacement. Google and authorized repair partners can replace Pixel camera modules.",
    metaTitle:
      "Google Pixel Camera Not Working — Fix Guide | RepairItFree",
    metaDescription:
      "Fix your Google Pixel camera with these quick free steps. Covers black screen, errors, and freezing issues.",
  },
  {
    id: "google-pixel-wont-turn-on",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "pixel-wont-turn-on",
    problemTitle: "Google Pixel Won't Turn On",
    difficulty: "Medium",
    timeEstimate: "10-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Original charger and cable",
      "Phillips #000 screwdriver (if opening phone)",
      "Plastic spudger (if opening phone)",
    ],
    partsNeeded: [
      {
        name: "Google Pixel Replacement Battery (model-specific)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=google+pixel+replacement+battery",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=google+pixel+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If the phone feels hot or smells unusual, do not attempt to charge or power it on.",
      "If the phone was in water recently, do not charge it until it is completely dry.",
    ],
    quickDiagnosis:
      "A Pixel that will not turn on is usually caused by a dead battery, a frozen system, or a charging problem. Most of the time, you can fix it without opening the phone. Work through these steps in order.",
    steps: [
      {
        number: 1,
        title: "Force restart the phone",
        description:
          "Hold the Power button for 30 full seconds. This is longer than you think — count it out. Some Pixel phones need a long press to force restart from a completely frozen state. If the Google logo appears, the phone was just frozen and is now restarting normally.",
      },
      {
        number: 2,
        title: "Charge with the original charger for 30 minutes",
        description:
          "Plug in your phone using the charger and cable that came with it. Leave it for at least 30 minutes without touching it. A completely dead battery may take several minutes before the screen shows any sign of life — not even a charging icon. If you see a small battery icon after a few minutes, the battery was just dead.",
      },
      {
        number: 3,
        title: "Try a different cable, charger, and outlet",
        description:
          "The cable or charger may be the problem, not the phone. Try a different USB-C cable and power adapter. Also try a different wall outlet. Charging from a computer USB port may be too slow to revive a dead phone — use a wall adapter rated for at least 18W.",
      },
      {
        number: 4,
        title: "Boot into Recovery Mode",
        description:
          "With the phone off, hold Power + Volume Down together for about 15 seconds. This enters the bootloader. Use the volume buttons to navigate to Recovery Mode and press Power to select it. If you see the Android robot, hold Power and tap Volume Up once to access the recovery menu. Select Restart System Now.",
      },
      {
        number: 5,
        title: "Check for a dead battery (hardware)",
        description:
          "If nothing works after charging for an hour with a known-good charger, the battery may be completely dead and unable to hold a charge. A battery replacement requires opening the phone from the back — follow a Pixel-specific teardown guide. Google also partners with iFixit for genuine replacement batteries.",
      },
    ],
    alternativeCauses: [
      "A failed software update can leave the phone in a boot loop.",
      "Water damage can cause the phone to shut down and not turn back on.",
      "A damaged charging port can prevent the battery from charging.",
      "A dropped phone can dislodge the battery connector internally.",
    ],
    whenToCallPro:
      "If the phone does not respond to any button presses after charging for an hour, or if it gets stuck in a boot loop (Google logo repeats over and over), a professional can diagnose whether the battery, logic board, or charging port is the issue. Google offers mail-in repair for Pixel phones.",
    metaTitle:
      "Google Pixel Won't Turn On — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Google Pixel that will not turn on or charge. Step-by-step guide covering dead batteries, frozen screens, and boot issues.",
  },
  {
    id: "google-pixel-battery-replacement",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "pixel-battery-replacement",
    problemTitle: "Google Pixel Battery Replacement",
    difficulty: "Hard",
    timeEstimate: "45-90 minutes",
    costEstimate: "$20–$40",
    toolsNeeded: [
      "Phillips #000 screwdriver",
      "Plastic spudger",
      "Suction cup",
      "Heat gun or hair dryer",
      "Tweezers",
      "Isopropyl alcohol",
    ],
    partsNeeded: [
      {
        name: "Google Pixel Replacement Battery (model-specific)",
        costRange: "$15–$35",
        amazonUrl:
          "https://www.amazon.com/s?k=google+pixel+replacement+battery",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=google+pixel+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Battery Adhesive Strips",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=google+pixel+battery+adhesive",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=google+pixel+battery+adhesive&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Back Glass Adhesive",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=google+pixel+back+glass+adhesive",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=google+pixel+back+glass+adhesive&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Lithium batteries are a fire hazard if punctured. Use only plastic tools near the battery.",
      "If the battery is swollen or puffy, do not attempt removal yourself — take it to a professional.",
      "Work in a well-ventilated area and keep a fire-safe container nearby just in case.",
      "Disconnect the battery cable before disconnecting any other components.",
    ],
    quickDiagnosis:
      "If your Pixel battery dies before the end of the day, drains quickly in standby, or the phone shuts off unexpectedly, it is likely time for a new battery. Check Settings > Battery for battery health information. Google partners with iFixit for genuine replacement batteries.",
    steps: [
      {
        number: 1,
        title: "Order a genuine battery and watch a teardown",
        description:
          "Check iFixit.com for your Pixel model's battery kit — Google provides genuine parts through this partnership. Watch the full teardown video before starting. The Pixel opens from the back, and the process varies between Pixel models.",
      },
      {
        number: 2,
        title: "Remove the back glass",
        description:
          "Power off the phone and remove the SIM tray. Apply heat to the back of the phone for 3-4 minutes. Use a suction cup to lift the back glass and slide a plastic pick around the perimeter. Be very careful near the camera bar and fingerprint sensor cable (on older models). Set the back glass aside.",
      },
      {
        number: 3,
        title: "Disconnect the battery",
        description:
          "Remove the screws from any brackets or shields covering the battery connector. Use a plastic spudger to disconnect the battery from the logic board. This is a safety step — always disconnect the battery before doing anything else inside the phone.",
      },
      {
        number: 4,
        title: "Remove the old battery",
        description:
          "The battery is held down with adhesive. If there are pull tabs, slowly pull them at a low angle. If the tabs snap, apply a few drops of isopropyl alcohol around the battery edges and wait 2 minutes for the adhesive to weaken. Use a plastic spudger to gently pry the battery out. Never bend or puncture the battery.",
      },
      {
        number: 5,
        title: "Install the new battery and reassemble",
        description:
          "Place new adhesive in the battery well. Set the new battery in place and press firmly. Reconnect the battery cable and replace the bracket screws. Power on the phone and verify it charges and shows battery info in Settings. Apply new adhesive around the frame and press the back glass into place.",
      },
    ],
    alternativeCauses: [
      "Software issues can mimic a bad battery — try the 'battery draining fast' software fixes first.",
      "A faulty charger can prevent full charging, making the battery seem bad.",
      "An old battery (2+ years of daily use) naturally loses capacity.",
    ],
    whenToCallPro:
      "If the battery is visibly swollen, do not attempt this repair — a professional has the tools and training to safely remove a swollen battery. If you are not comfortable with heat tools and adhesive, Google's authorized repair partners and iFixit offer this service.",
    metaTitle:
      "Google Pixel Battery Replacement — DIY Guide | RepairItFree",
    metaDescription:
      "Replace your Google Pixel battery at home with genuine iFixit parts. Full step-by-step guide with safety tips and cost breakdown.",
  },

  // ==========================================
  // OTHER PHONES
  // ==========================================
  {
    id: "oneplus-phone-wont-charge",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "oneplus-wont-charge",
    problemTitle: "OnePlus Phone Won't Charge",
    difficulty: "Easy",
    timeEstimate: "5-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Wooden or plastic toothpick",
      "Flashlight",
      "Compressed air (optional)",
    ],
    partsNeeded: [
      {
        name: "OnePlus USB-C Charging Port Flex Cable (model-specific)",
        costRange: "$8–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=oneplus+charging+port+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=oneplus+charging+port+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never use a metal tool to clean the charging port.",
      "If the phone is hot while attempting to charge, unplug it immediately.",
      "OnePlus Warp Charge / SUPERVOOC requires the original cable and adapter — third-party chargers may not work.",
    ],
    quickDiagnosis:
      "If your OnePlus phone will not charge, it is usually caused by a dirty port, a bad cable, or a software glitch — not a broken phone. OnePlus fast charging (Warp Charge / SUPERVOOC) is also picky about cables, so make sure you are using the right one.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description:
          "OnePlus fast charging only works with the charger and cable that came with your phone. Third-party cables often do not support Warp Charge or SUPERVOOC. Try the original cable first. If you do not have it, try any USB-C cable to see if the phone charges at all, even slowly.",
      },
      {
        number: 2,
        title: "Clean the charging port",
        description:
          "Shine a flashlight into the USB-C port and look for lint or debris. Use a wooden toothpick to gently scrape out any buildup at the bottom of the port. This is the single most common fix for charging problems on any phone.",
      },
      {
        number: 3,
        title: "Restart the phone",
        description:
          "Hold the Power button for 10 seconds to force restart. Software bugs can sometimes prevent the phone from recognizing the charger. After the restart, plug in the charger and check if it charges.",
      },
      {
        number: 4,
        title: "Check for software updates",
        description:
          "Go to Settings > System > System Updates and install any available update. OnePlus has fixed charging bugs in past OxygenOS updates. Also check that Battery Optimization or any battery-saving mode is not interfering with charging.",
      },
      {
        number: 5,
        title: "Boot into Safe Mode",
        description:
          "Power off the phone, then hold the Power button. When the OnePlus logo appears, hold Volume Down until the phone boots with Safe Mode in the corner. Try charging in Safe Mode. If it charges normally, a third-party app is interfering — uninstall recently installed apps.",
      },
    ],
    alternativeCauses: [
      "A damaged or frayed cable can cause intermittent charging.",
      "A low-power USB port (like on a laptop) may not charge the phone fast enough to keep up with usage.",
      "Water or moisture in the port can temporarily prevent charging.",
      "A failing battery can refuse to charge — especially if the phone is more than 2 years old.",
    ],
    whenToCallPro:
      "If cleaning the port and trying different cables does not work, the charging port may be physically damaged. A repair shop can replace the charging port flex cable. If the battery itself is the problem, they can replace that too.",
    metaTitle:
      "OnePlus Phone Won't Charge — Fix Guide | RepairItFree",
    metaDescription:
      "Fix your OnePlus phone that will not charge. Covers dirty ports, cable issues, and software fixes for all OnePlus models.",
  },
  {
    id: "motorola-phone-stuck-on-logo",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "motorola-stuck-on-logo",
    problemTitle: "Motorola Phone Stuck on Logo Screen",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "USB-C cable",
      "Computer with Rescue and Smart Assistant software (optional)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "A factory reset will erase all data on the phone. Back up regularly so you do not lose everything.",
      "If the phone is stuck in a boot loop (logo appears, disappears, repeats), let the battery drain completely before attempting fixes.",
    ],
    quickDiagnosis:
      "If your Motorola phone is stuck on the Motorola logo and will not boot, it is almost always a software issue — a failed update, a corrupt app, or a system crash. These software fixes resolve it for most people without needing any parts.",
    steps: [
      {
        number: 1,
        title: "Force restart the phone",
        description:
          "Hold the Power button for 20-30 seconds. On some Motorola phones, hold Power + Volume Down for 15 seconds. The phone should vibrate and restart. If it boots past the logo this time, the problem was a one-time crash.",
      },
      {
        number: 2,
        title: "Boot into Safe Mode",
        description:
          "Power off the phone. Press and hold the Power button. When the Motorola logo appears, release Power and immediately hold Volume Down until the phone boots fully. If you see Safe Mode in the corner and the phone works, a third-party app caused the problem. Restart normally and uninstall recently installed apps.",
      },
      {
        number: 3,
        title: "Wipe the cache partition",
        description:
          "Power off the phone. Hold Volume Down + Power together until the bootloader menu appears. Use Volume buttons to scroll to Recovery and press Power to select it. When you see the Android robot, hold Power and tap Volume Up once. Select Wipe Cache Partition and confirm. This clears temporary system files without deleting your personal data.",
      },
      {
        number: 4,
        title: "Factory reset from Recovery Mode (last resort)",
        description:
          "If wiping the cache did not help, you can do a factory reset from the same Recovery menu. Select Wipe Data/Factory Reset and confirm. This erases everything on the phone and returns it to factory settings. The phone should boot normally after this. You will need to set it up from scratch.",
      },
      {
        number: 5,
        title: "Use Motorola Rescue and Smart Assistant",
        description:
          "If the phone is completely unresponsive, download Motorola's Rescue and Smart Assistant tool on your computer. Connect the phone via USB-C. The tool can flash a fresh copy of the operating system onto your phone, which fixes even the most stubborn boot loops.",
      },
    ],
    alternativeCauses: [
      "A failed system update is the most common cause of being stuck on the logo.",
      "A corrupt app downloaded from outside the Play Store can crash the system.",
      "Low storage can prevent the phone from booting properly.",
      "A severely degraded battery can cause boot loops if it cannot supply enough power.",
    ],
    whenToCallPro:
      "If the phone is stuck on the logo even after a factory reset and the Rescue tool cannot connect, there may be a hardware problem with the storage chip or logic board. A repair shop can diagnose this, but it may not be worth the cost on a budget Motorola phone.",
    metaTitle:
      "Motorola Phone Stuck on Logo — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Motorola phone stuck on the boot logo. Step-by-step guide covering Safe Mode, cache wipe, and factory reset solutions.",
  },
  {
    id: "android-phone-screen-burn-in",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "android-screen-burn-in",
    problemTitle: "Android Phone Screen Burn-In",
    difficulty: "Easy",
    timeEstimate: "5-30 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Burn-in fix apps that rapidly flash colors can trigger seizures in people with photosensitive epilepsy. Use them in a well-lit room and do not stare directly at the screen.",
    ],
    quickDiagnosis:
      "Screen burn-in shows faint ghost images of navigation bars, keyboards, or app icons even when displaying other content. On AMOLED screens, this is caused by uneven pixel wear. Mild burn-in can sometimes be reduced, but severe burn-in is permanent. Try the steps below before considering a screen replacement.",
    steps: [
      {
        number: 1,
        title: "Confirm it is burn-in and not image retention",
        description:
          "Open a solid white image in full screen. If you see faint ghost images, it could be burn-in or just temporary image retention. Turn off the phone for an hour. If the ghost images are gone when you turn it back on, it was temporary retention — not burn-in. No repair needed.",
      },
      {
        number: 2,
        title: "Enable Dark Mode and reduce brightness",
        description:
          "Go to Settings > Display and turn on Dark Mode. Dark Mode reduces the strain on AMOLED pixels that are still healthy and slows down future burn-in. Also lower your screen brightness — high brightness accelerates burn-in. Turn on Adaptive Brightness to let the phone adjust automatically.",
      },
      {
        number: 3,
        title: "Reduce screen timeout and hide the navigation bar",
        description:
          "Set screen timeout to 30 seconds (Settings > Display > Screen Timeout). The less time a static image is on screen, the less burn-in occurs. If your phone supports gesture navigation instead of the 3-button bar, switch to it — this removes the always-visible nav bar that causes the most common burn-in pattern.",
      },
      {
        number: 4,
        title: "Try a burn-in reduction app",
        description:
          "Download a burn-in fixer app from the Play Store (search for OLED burn-in fix). These apps display rapidly shifting colors to even out pixel wear. Run it for 20-30 minutes. This can reduce mild burn-in but will not fix severe cases. Results vary — it is worth trying since it is free.",
      },
      {
        number: 5,
        title: "Invert colors as a workaround",
        description:
          "If burn-in is bothering you and the above steps did not fully fix it, you can use Settings > Accessibility > Color Inversion as a temporary workaround — burn-in is less visible on inverted colors. Some people also set a colorful, frequently-changing wallpaper to mask mild burn-in.",
      },
    ],
    alternativeCauses: [
      "Using navigation apps (like Google Maps) for hours creates burn-in from the static map interface.",
      "Always-On Display can contribute to burn-in over time.",
      "High screen brightness significantly accelerates burn-in on AMOLED screens.",
      "Some AMOLED panels are more prone to burn-in than others — it varies by manufacturer.",
    ],
    whenToCallPro:
      "If burn-in is severe and affects your daily use, the only permanent fix is a screen replacement. A repair shop can install a new AMOLED display. On older or budget phones, it may not be worth the cost — consider whether the burn-in is truly bothering you before spending the money.",
    metaTitle:
      "Android Phone Screen Burn-In — Fix Guide | RepairItFree",
    metaDescription:
      "Reduce or fix screen burn-in on your Android AMOLED phone. Free tips for prevention and reduction, plus when to replace the screen.",
  },
  {
    id: "android-phone-ghost-touching",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "android-touchscreen-ghost-touching",
    problemTitle: "Android Phone Touchscreen Ghost Touching",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Microfiber cloth",
    ],
    partsNeeded: [
      {
        name: "Tempered Glass Screen Protector (model-specific)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=tempered+glass+screen+protector",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=tempered+glass+screen+protector&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Ghost touches can accidentally open apps, send messages, or make calls. Keep your phone locked when not in use until you fix the issue.",
    ],
    quickDiagnosis:
      "Ghost touching means your phone registers touches you did not make — the screen taps on its own, opens apps randomly, or types by itself. This is usually caused by a dirty screen, a bad screen protector, or a damaged digitizer. Most of the time, the fix is free.",
    steps: [
      {
        number: 1,
        title: "Clean the screen thoroughly",
        description:
          "Wipe the screen with a clean microfiber cloth. Moisture, oils, and dirt on the screen can cause false touches. Make sure your hands are clean and dry when using the phone. This simple step fixes the problem more often than you would think.",
      },
      {
        number: 2,
        title: "Remove or replace your screen protector",
        description:
          "A damaged, poorly fitted, or air-bubbled screen protector is one of the most common causes of ghost touching. Remove it completely and test the phone. If the ghost touches stop, the screen protector was the problem. Apply a new high-quality tempered glass protector.",
      },
      {
        number: 3,
        title: "Remove your phone case",
        description:
          "Some cases press on the edges of the screen and trigger phantom touches. Remove the case and test. If ghost touching stops, switch to a case with a slimmer profile that does not overlap the screen edges.",
      },
      {
        number: 4,
        title: "Restart and check for software updates",
        description:
          "Restart your phone to clear any software glitches. Then check for system updates (Settings > System > System Update) and install any available update. Touch calibration bugs are sometimes fixed in software updates.",
      },
      {
        number: 5,
        title: "Disable touch sensitivity and developer options",
        description:
          "If your phone has a Touch Sensitivity setting (Settings > Display), turn it off — this setting is meant for use with screen protectors and can make the screen too sensitive. Also check if Developer Options are enabled. If so, look for Pointer Location or Show Touches and turn them off.",
      },
    ],
    alternativeCauses: [
      "A cracked screen (even a small crack) can cause ghost touches in the damaged area.",
      "Water or moisture under the screen protector triggers phantom touches.",
      "Charging with a cheap or ungrounded charger can cause electrical interference that triggers ghost touches.",
      "A failing digitizer from a drop can cause random touch inputs.",
    ],
    whenToCallPro:
      "If the screen is cracked and ghost touching, the digitizer is damaged and the screen needs replacement. If the screen is not cracked and cleaning and software fixes did not help, a repair shop can test whether the digitizer or the logic board is causing the issue.",
    metaTitle:
      "Android Phone Ghost Touching — Fix Guide | RepairItFree",
    metaDescription:
      "Fix ghost touching on your Android phone. Learn why your screen taps on its own and how to stop it with these free steps.",
  },
  {
    id: "android-phone-keeps-restarting",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "android-phone-keeps-restarting",
    problemTitle: "Android Phone Keeps Restarting",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "If the phone restarts every few seconds and is very hot, let it cool down completely before troubleshooting.",
      "A factory reset will erase all your data — back up first if possible.",
    ],
    quickDiagnosis:
      "A phone that keeps restarting on its own (boot loop) is almost always caused by a bad app, a failed update, or a corrupt system file. These are software problems with free fixes. Work through the steps below before thinking about hardware.",
    steps: [
      {
        number: 1,
        title: "Boot into Safe Mode",
        description:
          "Safe Mode disables all third-party apps. Power off the phone. Then hold the Power button. When the manufacturer logo appears, release Power and hold Volume Down until the phone finishes booting. If it stays on in Safe Mode, a third-party app is causing the restarts. Uninstall recently installed apps one by one until the problem stops.",
      },
      {
        number: 2,
        title: "Check for and install system updates",
        description:
          "If the phone stays on long enough, go to Settings > System > System Update. A failed or partial update can cause restart loops. Installing the full update often fixes the issue.",
      },
      {
        number: 3,
        title: "Clear the system cache",
        description:
          "Power off the phone and boot into Recovery Mode (usually Power + Volume Up or Power + Volume Down — varies by manufacturer). Select Wipe Cache Partition. This clears temporary system files that may be corrupted without deleting your personal data.",
      },
      {
        number: 4,
        title: "Check your storage",
        description:
          "If you can get into Settings before the phone restarts, check Settings > Storage. A phone with less than 500 MB of free space can behave unpredictably, including restarting. Delete large files, clear app caches, or move photos to cloud storage.",
      },
      {
        number: 5,
        title: "Factory reset from Recovery Mode (last resort)",
        description:
          "If nothing else works, a factory reset from Recovery Mode will wipe everything and give you a clean start. Boot into Recovery Mode and select Wipe Data/Factory Reset. After the reset, set up the phone fresh. If the restarting continues even after a factory reset, the problem is hardware — likely the battery or logic board.",
      },
    ],
    alternativeCauses: [
      "A degraded battery that cannot supply stable voltage causes random restarts — especially when the phone is cold.",
      "A faulty power button that is stuck or intermittent can trigger restarts.",
      "Overheating causes the phone to restart as a safety measure.",
      "A corrupted SD card can cause system instability on phones that use them.",
    ],
    whenToCallPro:
      "If the phone keeps restarting even after a factory reset, the issue is hardware. The most likely cause is a dying battery or a failing logic board. A repair shop can test both and tell you whether a repair is worth it.",
    metaTitle:
      "Android Phone Keeps Restarting — Fix Guide | RepairItFree",
    metaDescription:
      "Fix an Android phone that keeps restarting on its own. Step-by-step guide covering Safe Mode, cache wipe, and when to worry about hardware.",
  },
  {
    id: "phone-screen-cracked-should-you-repair",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "phone-screen-cracked-but-works",
    problemTitle: "Phone Screen Cracked but Still Works — Should You Repair?",
    difficulty: "Easy",
    timeEstimate: "10 minutes (to decide)",
    costEstimate: "$0–$300",
    toolsNeeded: [],
    partsNeeded: [
      {
        name: "Screen Replacement Assembly (model-specific)",
        costRange: "$20–$300",
        amazonUrl:
          "https://www.amazon.com/s?k=phone+screen+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=phone+screen+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Tempered Glass Screen Protector (temporary fix)",
        costRange: "$5–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=tempered+glass+screen+protector",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=tempered+glass+screen+protector&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "A cracked screen can cut your fingers — especially on the edges.",
      "Cracks allow dust and moisture to enter the phone, which can cause more damage over time.",
      "If the crack is over the camera, your photos may be blurry or have flares.",
    ],
    quickDiagnosis:
      "Your phone screen is cracked but everything still works. Should you fix it now or wait? This guide helps you decide based on how bad the damage is and what it costs for your specific phone.",
    steps: [
      {
        number: 1,
        title: "Assess the damage level",
        description:
          "Look at the crack carefully. Is it a small corner crack, a single line across the screen, or a spiderweb of cracks? Small cracks in the corner are mostly cosmetic. A single line is stable and usually does not spread. Spiderweb cracks weaken the glass and will likely spread — these should be repaired or covered soon.",
      },
      {
        number: 2,
        title: "Check if touch still works everywhere",
        description:
          "Run your finger across the entire screen, especially near the cracks. If touch is unresponsive or glitchy near the cracked area, the digitizer is damaged and the problem will get worse. If touch works perfectly everywhere, the crack is only in the outer glass layer.",
      },
      {
        number: 3,
        title: "Apply a screen protector as a temporary fix",
        description:
          "If the crack is minor, applying a tempered glass screen protector over the cracked screen can prevent the crack from spreading, protect your fingers from sharp edges, and keep dust and moisture out. This can buy you weeks or months of normal use before deciding on a repair.",
      },
      {
        number: 4,
        title: "Compare repair costs to phone value",
        description:
          "Look up the screen replacement cost for your phone model. For flagship phones (iPhone 15, Galaxy S24, Pixel 8), a DIY screen is $50-250 and professional repair is $100-350. If your phone is worth $400+, the repair makes sense. If the phone is worth less than the repair cost, consider upgrading instead.",
      },
      {
        number: 5,
        title: "Check your insurance and warranty",
        description:
          "Check if you have AppleCare+, Samsung Care+, or carrier insurance (like Asurion). Most insurance plans cover cracked screens with a deductible of $29-99 — much cheaper than paying full price. Also check if your credit card offers phone protection for phones purchased with that card.",
      },
    ],
    alternativeCauses: [
      "A cracked screen can lead to touch problems, water damage, and display failures if left unrepaired.",
      "Cracks tend to spread with temperature changes and additional minor drops.",
      "Some cracks are only in the screen protector, not the actual screen — remove the protector to check.",
    ],
    whenToCallPro:
      "If the crack is severe, if the screen leaks dark spots (LCD or OLED damage), or if touch is unreliable, repair it soon. A professional can typically replace a phone screen in 30-60 minutes. If the phone is under insurance, always file a claim before paying out of pocket.",
    metaTitle:
      "Phone Screen Cracked but Works — Should You Repair? | RepairItFree",
    metaDescription:
      "Phone screen cracked but still working? Learn whether to repair now, apply a temporary fix, or wait. Cost comparisons and decision guide.",
  },
  {
    id: "phone-speaker-muffled-quiet",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "phone-speaker-muffled-quiet",
    problemTitle: "Phone Speaker Muffled or Quiet",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Soft brush or clean toothbrush",
      "Compressed air (optional)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Do not blow into the speaker with your mouth — moisture can damage it.",
      "Do not use sharp objects to clean the speaker grille — you can puncture the speaker membrane.",
    ],
    quickDiagnosis:
      "A muffled or quiet phone speaker is usually caused by debris in the speaker grille or a software setting — not a broken speaker. These free fixes take just a few minutes and solve the problem for most people.",
    steps: [
      {
        number: 1,
        title: "Check the volume and sound settings",
        description:
          "Press the Volume Up button to make sure the volume is at maximum. Check that Do Not Disturb mode is off. Go to Settings > Sound and check that the media volume slider is turned up. Some phones have separate volume controls for ringtone, media, and calls.",
      },
      {
        number: 2,
        title: "Clean the speaker grille",
        description:
          "The speaker grilles on the bottom (and sometimes top) of your phone collect lint and dust from your pocket. Use a soft brush or clean toothbrush to gently brush the grille. Use short bursts of compressed air to blow out stubborn debris. You will likely hear an immediate improvement.",
      },
      {
        number: 3,
        title: "Remove your case",
        description:
          "Many phone cases partially cover or muffle the speaker grilles. Remove your case and test the audio. If the sound is louder without the case, switch to a case with larger speaker cutouts.",
      },
      {
        number: 4,
        title: "Check for Bluetooth connections",
        description:
          "Your phone may be sending audio to a Bluetooth speaker, headphones, or your car instead of playing through the phone speaker. Turn off Bluetooth (Settings > Bluetooth or the Quick Settings toggle) and test the speaker.",
      },
      {
        number: 5,
        title: "Restart your phone",
        description:
          "Restart the phone to clear any software bugs affecting the audio. After the restart, play some music at moderate volume and listen for any crackling or distortion. If the speaker sounds clear after a restart, the issue was a software glitch.",
      },
    ],
    alternativeCauses: [
      "Water in the speaker can cause temporary muffled sound — it usually dries on its own in a few hours.",
      "A screen protector covering the earpiece speaker muffles call audio.",
      "An equalizer setting in a music app can reduce perceived volume.",
      "A blown speaker from playing audio too loud will sound permanently distorted.",
    ],
    whenToCallPro:
      "If cleaning and software fixes did not help and the speaker sounds distorted or crackly, the speaker hardware is likely damaged. A repair shop can replace the speaker module in about 30 minutes. This is usually an affordable repair.",
    metaTitle:
      "Phone Speaker Muffled or Quiet — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a muffled or quiet phone speaker in minutes. Free cleaning and troubleshooting guide for all phone brands.",
  },
  {
    id: "phone-headphone-jack-not-working",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "phone-headphone-jack-not-working",
    problemTitle: "Phone Headphone Jack Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Wooden or plastic toothpick",
      "Flashlight",
      "Compressed air (optional)",
    ],
    partsNeeded: [
      {
        name: "Headphone Jack Flex Cable (model-specific, if replacement needed)",
        costRange: "$5–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=phone+headphone+jack+replacement",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=phone+headphone+jack+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Be gentle when cleaning the headphone jack — the contacts inside are delicate.",
      "Do not use a metal tool to clean the jack.",
    ],
    quickDiagnosis:
      "If your headphones do not work when plugged in, or the audio cuts in and out, the headphone jack is almost always clogged with lint. This is a free 2-minute fix. Try that before assuming the jack is broken.",
    steps: [
      {
        number: 1,
        title: "Test with different headphones",
        description:
          "Before cleaning anything, try a different pair of wired headphones. If the second pair works, your original headphones have a bad plug or cable. If neither pair works, the problem is with the phone's headphone jack.",
      },
      {
        number: 2,
        title: "Clean lint from the headphone jack",
        description:
          "Shine a flashlight into the headphone jack. You will likely see packed lint at the bottom — this prevents the plug from making contact. Use a wooden or plastic toothpick to gently scrape the bottom and sides of the jack. Pull out any lint. Use compressed air for a final clean.",
      },
      {
        number: 3,
        title: "Check audio routing settings",
        description:
          "Make sure your phone is not routing audio to Bluetooth. Turn off Bluetooth and try the headphones again. Also check if your phone has an audio output setting — some phones let you choose between headphones and speaker, and it may be set wrong.",
      },
      {
        number: 4,
        title: "Restart your phone",
        description:
          "Restart the phone with the headphones plugged in. Some audio routing bugs only clear after a restart with headphones connected. After the restart, play music and check if audio comes through the headphones.",
      },
      {
        number: 5,
        title: "Check for water or corrosion",
        description:
          "If the phone was exposed to water or sweat, the headphone jack contacts may be corroded. Plug and unplug the headphones 10-15 times — the friction can clean light corrosion. If that helps temporarily but the problem returns, the jack may need replacement.",
      },
    ],
    alternativeCauses: [
      "A headphone plug that is slightly bent will not make proper contact.",
      "Some phone cases are too thick and prevent the headphone plug from inserting fully.",
      "A TRRS (4-ring) headphone plug may not work in a TRS (3-ring) jack on some devices.",
      "A USB-C to 3.5mm adapter may be needed if your phone does not have a headphone jack.",
    ],
    whenToCallPro:
      "If cleaning did not fix the jack and you have tried multiple working headphones, the jack itself may be physically damaged. A repair shop can replace the headphone jack module. As a cheaper alternative, consider using Bluetooth headphones or a USB-C audio adapter.",
    metaTitle:
      "Phone Headphone Jack Not Working — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a phone headphone jack that stopped working. Most of the time it just needs cleaning — here is how to do it in 2 minutes.",
  },
  {
    id: "phone-gps-not-working",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Android",
    brandSlug: "android",
    problemSlug: "phone-gps-not-working",
    problemTitle: "Phone GPS Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Do not rely on a phone with unreliable GPS for navigation in unfamiliar or remote areas. Download offline maps as a backup.",
    ],
    quickDiagnosis:
      "If your phone GPS is inaccurate, slow to lock, or not working at all, it is almost always a software or settings issue. GPS hardware rarely fails. These free fixes solve the problem for most people in a few minutes.",
    steps: [
      {
        number: 1,
        title: "Check your location settings",
        description:
          "Go to Settings > Location and make sure Location is turned on. Tap Mode or Location Accuracy and select High Accuracy (uses GPS, WiFi, and cell towers). If it is set to Battery Saving or Device Only, GPS may not work well. Also check that the map or navigation app has permission to use Location (Settings > Apps > [app] > Permissions).",
      },
      {
        number: 2,
        title: "Toggle Airplane Mode and restart",
        description:
          "Turn on Airplane Mode, wait 10 seconds, then turn it off. This resets all wireless connections including GPS. Then restart your phone. Open your maps app and wait 30 seconds for the GPS to get a fix. Being outdoors with a clear view of the sky helps GPS lock much faster.",
      },
      {
        number: 3,
        title: "Clear the map app cache",
        description:
          "Go to Settings > Apps > Google Maps (or your navigation app) > Storage > Clear Cache. Outdated cached location data can cause GPS to show the wrong position or take a long time to update.",
      },
      {
        number: 4,
        title: "Recalibrate the compass",
        description:
          "Open Google Maps, tap the blue location dot, and tap Calibrate Compass. Follow the on-screen instructions to move your phone in a figure-8 pattern. This recalibrates the magnetic sensor that works with GPS for accurate direction. Poor compass calibration can make GPS navigation confusing even when your position is accurate.",
      },
      {
        number: 5,
        title: "Update your phone and apps",
        description:
          "Go to Settings > System > System Update and install any update. Also update Google Maps and any other navigation apps from the Play Store or App Store. GPS and location bugs are frequently fixed in updates.",
      },
    ],
    alternativeCauses: [
      "Being indoors, in a tunnel, or surrounded by tall buildings can block GPS signals.",
      "A phone case with a metal plate (for magnetic car mounts) can interfere with GPS.",
      "A VPN or mock location app (used for gaming) can override real GPS data.",
      "Battery-saving modes can limit GPS accuracy to save power.",
    ],
    whenToCallPro:
      "GPS hardware failure is rare but possible after water damage or a significant drop. If GPS does not work at all even outdoors with a clear sky and all software fixes have been tried, the GPS antenna may be damaged. A repair shop can test and replace it, though this is uncommon.",
    metaTitle: "Phone GPS Not Working — Fix Guide | RepairItFree",
    metaDescription:
      "Fix GPS problems on your phone with these quick free steps. Covers inaccurate location, slow GPS lock, and navigation issues.",
  },
];
