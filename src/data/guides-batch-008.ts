import { Guide } from "@/lib/types";

export const batch008Guides: Guide[] = [
  {
    id: "acer-laptop-wont-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
    problemSlug: "wont-turn-on",
    problemTitle: "Wont Turn On",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Acer Laptop Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Acer+laptop+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer+laptop+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "When your Acer Laptop won't turn on, it's usually something simple — a power issue, a tripped safety switch, or a connection problem. Before panicking, work through these steps. Most of the time, the fix is free.",
    steps: [
      {
        number: 1,
        title: "Check the power source",
        description:
          "Make sure the outlet is working by plugging in something else (like a lamp). Check if the power cord is fully plugged in at both ends. For battery-powered devices, make sure the battery is charged and properly seated.",
      },
      {
        number: 2,
        title: "Look for a reset button",
        description:
          "Many devices have a small reset button (often red or recessed). Check the bottom, back, or side of your laptop. Press it firmly. If it clicks, that may have been the problem.",
      },
      {
        number: 3,
        title: "Check the circuit breaker or fuse",
        description:
          "Go to your electrical panel and check if any breakers have tripped (they'll be in a middle position). Flip any tripped breakers fully off, then back on. For plug-in fuses, check if they need replacement.",
      },
      {
        number: 4,
        title: "Try a full power cycle",
        description:
          "Unplug the device completely. Wait 2-3 minutes. While unplugged, press and hold the power button for 30 seconds (this drains residual power). Plug it back in and try again.",
      },
      {
        number: 5,
        title: "Inspect the power cord and connections",
        description:
          "Look for frayed wires, bent prongs, loose connections, or burn marks on the plug. A damaged power cord is a common and inexpensive fix ($10-$20 for most replacement cords).",
      },
      {
        number: 6,
        title: "Test with a different outlet or power source",
        description:
          "Plug the device into a completely different outlet, preferably on a different circuit in your home. If it works on a different outlet, the problem is with your home's electrical, not the device.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Acer Laptop Wont Turn On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Acer Laptop Wont Turn On yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "acer-laptop-battery-draining-fast",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$15",
        amazonUrl: "https://www.amazon.com/s?k=Acer+laptop+charging+cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer+laptop+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "Battery problems with your Acer Laptop are usually caused by a worn-out battery, a faulty charger, or software draining power in the background. Many battery issues can be improved with the right settings and habits.",
    steps: [
      {
        number: 1,
        title: "Check the charger and cable",
        description:
          "Use the original charger and cable if possible. Try a different cable and outlet. Damaged or third-party chargers often can't deliver enough power.",
      },
      {
        number: 2,
        title: "Clean the charging contacts",
        description:
          "Inspect and clean all charging contacts, ports, or terminals. Use a dry toothbrush or cotton swab with isopropyl alcohol for metal contacts. Remove lint from ports with a toothpick.",
      },
      {
        number: 3,
        title: "Check battery health",
        description:
          "Most devices have a battery health indicator in the settings. If the battery health is below 80%, the battery is degraded and may need replacement.",
      },
      {
        number: 4,
        title: "Calibrate the battery",
        description:
          "Let the device run until it completely dies. Then charge it to 100% without interruption. This recalibrates the battery meter and can fix inaccurate readings.",
      },
      {
        number: 5,
        title: "Reduce power consumption",
        description:
          "Lower screen brightness, disable unused features (Bluetooth, WiFi, GPS), and close background apps. Check which apps are using the most battery in your settings.",
      },
      {
        number: 6,
        title: "Consider battery replacement",
        description:
          "If the battery is old (2+ years of heavy use) and calibration doesn't help, replacement is likely needed. Many batteries can be replaced for $20-$60, which is much cheaper than a new device.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Acer Laptop Battery Draining Fast — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Acer Laptop Battery Draining Fast yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "google-laptop-chromebook-wont-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "chromebook-wont-turn-on",
    problemTitle: "Chromebook Wont Turn On",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Google Laptop Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Google+laptop+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google+laptop+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "When your Google Laptop won't turn on, it's usually something simple — a power issue, a tripped safety switch, or a connection problem. Before panicking, work through these steps. Most of the time, the fix is free.",
    steps: [
      {
        number: 1,
        title: "Check the power source",
        description:
          "Make sure the outlet is working by plugging in something else (like a lamp). Check if the power cord is fully plugged in at both ends. For battery-powered devices, make sure the battery is charged and properly seated.",
      },
      {
        number: 2,
        title: "Look for a reset button",
        description:
          "Many devices have a small reset button (often red or recessed). Check the bottom, back, or side of your laptop. Press it firmly. If it clicks, that may have been the problem.",
      },
      {
        number: 3,
        title: "Check the circuit breaker or fuse",
        description:
          "Go to your electrical panel and check if any breakers have tripped (they'll be in a middle position). Flip any tripped breakers fully off, then back on. For plug-in fuses, check if they need replacement.",
      },
      {
        number: 4,
        title: "Try a full power cycle",
        description:
          "Unplug the device completely. Wait 2-3 minutes. While unplugged, press and hold the power button for 30 seconds (this drains residual power). Plug it back in and try again.",
      },
      {
        number: 5,
        title: "Inspect the power cord and connections",
        description:
          "Look for frayed wires, bent prongs, loose connections, or burn marks on the plug. A damaged power cord is a common and inexpensive fix ($10-$20 for most replacement cords).",
      },
      {
        number: 6,
        title: "Test with a different outlet or power source",
        description:
          "Plug the device into a completely different outlet, preferably on a different circuit in your home. If it works on a different outlet, the problem is with your home's electrical, not the device.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Google Laptop Chromebook Wont Turn On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Google Laptop Chromebook Wont Turn On yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "google-laptop-chromebook-running-slow",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "chromebook-running-slow",
    problemTitle: "Chromebook Running Slow",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Google Laptop Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Google+laptop+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google+laptop+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "This is a common issue with Google laptops and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your Google Laptop completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Google Laptop Chromebook Running Slow — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Google Laptop Chromebook Running Slow yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "google-laptop-chromebook-touchscreen-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "chromebook-touchscreen-not-working",
    problemTitle: "Chromebook Touchscreen Not Working",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Google Screen Replacement Kit",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Google+laptop+screen+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google+laptop+screen+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "Screen problems on your Google Laptop can range from simple software glitches to hardware issues. The good news is that many screen issues can be fixed without replacing the screen itself.",
    steps: [
      {
        number: 1,
        title: "Perform a hard restart",
        description:
          "Turn the device completely off. For electronics, hold the power button for 15-30 seconds. Wait a minute, then turn it back on. This clears many software-related display issues.",
      },
      {
        number: 2,
        title: "Check all cable connections",
        description:
          "If applicable, check HDMI, display, and power cables. Unplug and firmly replug each one. Try different cables and different ports if available.",
      },
      {
        number: 3,
        title: "Adjust brightness and display settings",
        description:
          "The screen may be working but with incorrect settings. Try adjusting brightness. If using a remote, try pressing the Input or Source button to cycle through input sources.",
      },
      {
        number: 4,
        title: "Test with an external display",
        description:
          "If possible, connect to an external monitor or TV. If the external display works fine, the issue is with the device's screen specifically, not the graphics processor.",
      },
      {
        number: 5,
        title: "Check for physical damage",
        description:
          "Look closely at the screen for cracks, pressure marks, discoloration, or dead spots. Shine a flashlight at the screen — if you can faintly see the image, the backlight may have failed.",
      },
      {
        number: 6,
        title: "Update software/firmware",
        description:
          "If the device powers on but the display is acting up, check for software updates. Display glitches are sometimes caused by buggy software and fixed with an update.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Google Laptop Chromebook Touchscreen Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Google Laptop Chromebook Touchscreen Not Working yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "microsoft-laptop-surface-wont-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "surface-wont-turn-on",
    problemTitle: "Surface Wont Turn On",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Microsoft Laptop Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Microsoft+laptop+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft+laptop+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "When your Microsoft Laptop won't turn on, it's usually something simple — a power issue, a tripped safety switch, or a connection problem. Before panicking, work through these steps. Most of the time, the fix is free.",
    steps: [
      {
        number: 1,
        title: "Check the power source",
        description:
          "Make sure the outlet is working by plugging in something else (like a lamp). Check if the power cord is fully plugged in at both ends. For battery-powered devices, make sure the battery is charged and properly seated.",
      },
      {
        number: 2,
        title: "Look for a reset button",
        description:
          "Many devices have a small reset button (often red or recessed). Check the bottom, back, or side of your laptop. Press it firmly. If it clicks, that may have been the problem.",
      },
      {
        number: 3,
        title: "Check the circuit breaker or fuse",
        description:
          "Go to your electrical panel and check if any breakers have tripped (they'll be in a middle position). Flip any tripped breakers fully off, then back on. For plug-in fuses, check if they need replacement.",
      },
      {
        number: 4,
        title: "Try a full power cycle",
        description:
          "Unplug the device completely. Wait 2-3 minutes. While unplugged, press and hold the power button for 30 seconds (this drains residual power). Plug it back in and try again.",
      },
      {
        number: 5,
        title: "Inspect the power cord and connections",
        description:
          "Look for frayed wires, bent prongs, loose connections, or burn marks on the plug. A damaged power cord is a common and inexpensive fix ($10-$20 for most replacement cords).",
      },
      {
        number: 6,
        title: "Test with a different outlet or power source",
        description:
          "Plug the device into a completely different outlet, preferably on a different circuit in your home. If it works on a different outlet, the problem is with your home's electrical, not the device.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Microsoft Laptop Surface Wont Turn On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Microsoft Laptop Surface Wont Turn On yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "microsoft-laptop-surface-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "surface-screen-flickering",
    problemTitle: "Surface Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Microsoft Screen Replacement Kit",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Microsoft+laptop+screen+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft+laptop+screen+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "Screen problems on your Microsoft Laptop can range from simple software glitches to hardware issues. The good news is that many screen issues can be fixed without replacing the screen itself.",
    steps: [
      {
        number: 1,
        title: "Perform a hard restart",
        description:
          "Turn the device completely off. For electronics, hold the power button for 15-30 seconds. Wait a minute, then turn it back on. This clears many software-related display issues.",
      },
      {
        number: 2,
        title: "Check all cable connections",
        description:
          "If applicable, check HDMI, display, and power cables. Unplug and firmly replug each one. Try different cables and different ports if available.",
      },
      {
        number: 3,
        title: "Adjust brightness and display settings",
        description:
          "The screen may be working but with incorrect settings. Try adjusting brightness. If using a remote, try pressing the Input or Source button to cycle through input sources.",
      },
      {
        number: 4,
        title: "Test with an external display",
        description:
          "If possible, connect to an external monitor or TV. If the external display works fine, the issue is with the device's screen specifically, not the graphics processor.",
      },
      {
        number: 5,
        title: "Check for physical damage",
        description:
          "Look closely at the screen for cracks, pressure marks, discoloration, or dead spots. Shine a flashlight at the screen — if you can faintly see the image, the backlight may have failed.",
      },
      {
        number: 6,
        title: "Update software/firmware",
        description:
          "If the device powers on but the display is acting up, check for software updates. Display glitches are sometimes caused by buggy software and fixed with an update.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Microsoft Laptop Surface Screen Flickering — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Microsoft Laptop Surface Screen Flickering yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "microsoft-laptop-surface-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "surface-not-charging",
    problemTitle: "Surface Not Charging",
    difficulty: "Easy",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$15",
        amazonUrl: "https://www.amazon.com/s?k=Microsoft+laptop+charging+cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft+laptop+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "When your Microsoft Laptop won't charge, the most common causes are a dirty or obstructed charging port, a faulty cable, or a software glitch. Before assuming the worst, some simple troubleshooting can save you a trip to the repair shop.",
    steps: [
      {
        number: 1,
        title: "Check the charging cable and adapter",
        description:
          "Try a different charging cable and power adapter. Cables wear out over time, especially near the connectors. Borrow one from someone if you need to. Also try a different wall outlet.",
      },
      {
        number: 2,
        title: "Clean the charging port",
        description:
          "Use a toothpick (wood or plastic, never metal) and shine a flashlight into the port. Gently remove any lint, dust, or debris. You'll be surprised how much gunk accumulates in there. This fixes the problem about 70% of the time.",
      },
      {
        number: 3,
        title: "Perform a hard restart",
        description:
          "Force restart your device by holding the power button (and volume button if applicable) for 15-30 seconds. Software glitches can sometimes prevent charging, and a hard restart clears them.",
      },
      {
        number: 4,
        title: "Check for physical damage",
        description:
          "Look closely at the charging port with a flashlight. Check for bent pins, corrosion, or loose parts. If you see damage, the port may need professional repair.",
      },
      {
        number: 5,
        title: "Let it charge for 30 minutes",
        description:
          "If the battery is completely drained, plug it in and wait at least 30 minutes before expecting any response. A deeply discharged battery needs time before it has enough power to turn on.",
      },
      {
        number: 6,
        title: "Try wireless charging if available",
        description:
          "If your device supports wireless charging, try that. If it charges wirelessly but not with a cable, the charging port hardware needs repair.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Microsoft Laptop Surface Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Microsoft Laptop Surface Not Charging yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Easy. Save $150+.",
  },
  {
    id: "apple-laptop-macbook-wont-charge",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "macbook-wont-charge",
    problemTitle: "MacBook Wont Charge",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$15",
        amazonUrl: "https://www.amazon.com/s?k=Apple+laptop+charging+cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple+laptop+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "When your Apple Laptop won't charge, the most common causes are a dirty or obstructed charging port, a faulty cable, or a software glitch. Before assuming the worst, some simple troubleshooting can save you a trip to the repair shop.",
    steps: [
      {
        number: 1,
        title: "Check the charging cable and adapter",
        description:
          "Try a different charging cable and power adapter. Cables wear out over time, especially near the connectors. Borrow one from someone if you need to. Also try a different wall outlet.",
      },
      {
        number: 2,
        title: "Clean the charging port",
        description:
          "Use a toothpick (wood or plastic, never metal) and shine a flashlight into the port. Gently remove any lint, dust, or debris. You'll be surprised how much gunk accumulates in there. This fixes the problem about 70% of the time.",
      },
      {
        number: 3,
        title: "Perform a hard restart",
        description:
          "Force restart your device by holding the power button (and volume button if applicable) for 15-30 seconds. Software glitches can sometimes prevent charging, and a hard restart clears them.",
      },
      {
        number: 4,
        title: "Check for physical damage",
        description:
          "Look closely at the charging port with a flashlight. Check for bent pins, corrosion, or loose parts. If you see damage, the port may need professional repair.",
      },
      {
        number: 5,
        title: "Let it charge for 30 minutes",
        description:
          "If the battery is completely drained, plug it in and wait at least 30 minutes before expecting any response. A deeply discharged battery needs time before it has enough power to turn on.",
      },
      {
        number: 6,
        title: "Try wireless charging if available",
        description:
          "If your device supports wireless charging, try that. If it charges wirelessly but not with a cable, the charging port hardware needs repair.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Apple Laptop MacBook Wont Charge — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Apple Laptop MacBook Wont Charge yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "apple-laptop-macbook-fan-always-running",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "macbook-fan-always-running",
    problemTitle: "MacBook Fan Always Running",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Phillips screwdriver (small)",
      "Compressed air",
      "Microfiber cloth",
      "Anti-static wrist strap (optional)",
    ],
    partsNeeded: [
      {
        name: "Apple Laptop Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Apple+laptop+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple+laptop+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    quickDiagnosis:
      "This is a common issue with Apple laptops and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your Apple Laptop completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    whenToCallPro:
      "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
    metaTitle:
      "Apple Laptop MacBook Fan Always Running — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Apple Laptop MacBook Fan Always Running yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "sony-game-console-ps5-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "ps5-overheating",
    problemTitle: "PS5 Overheating",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Thermal Fuse",
        costRange: "$5-$12",
        amazonUrl: "https://www.amazon.com/s?k=Sony+game+console+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony+game+console+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "This is a common issue with Sony game consoles and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your Sony Game Console completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Sony Game Console PS5 Overheating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Sony Game Console PS5 Overheating yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "sony-game-console-ps5-controller-drift",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "ps5-controller-drift",
    problemTitle: "PS5 Controller Drift",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Sony Game Console Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Sony+game+console+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony+game+console+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "This is a common issue with Sony game consoles and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your Sony Game Console completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Sony Game Console PS5 Controller Drift — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Sony Game Console PS5 Controller Drift yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "sony-game-console-ps4-eject-disc-problem",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "ps4-eject-disc-problem",
    problemTitle: "PS4 Eject Disc Problem",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Sony Game Console Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Sony+game+console+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony+game+console+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "This is a common issue with Sony game consoles and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your Sony Game Console completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Sony Game Console PS4 Eject Disc Problem — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Sony Game Console PS4 Eject Disc Problem yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "microsoft-game-console-xbox-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "xbox-controller-not-connecting",
    problemTitle: "Xbox Controller Not Connecting",
    difficulty: "Easy",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Microsoft Game Console Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Microsoft+game+console+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft+game+console+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "Connectivity issues with your Microsoft Game Console are almost always caused by software glitches, interference, or outdated firmware. These problems are usually fixable without any tools or parts.",
    steps: [
      {
        number: 1,
        title: "Restart everything",
        description:
          "Turn off your game console, your router (or the device it connects to), and wait 30 seconds. Turn the router on first, wait for it to fully boot (about 2 minutes), then turn on your device.",
      },
      {
        number: 2,
        title: "Forget and re-pair",
        description:
          "Go to your device's connection settings. Remove/forget the connection, then set it up again from scratch. This clears corrupted pairing data.",
      },
      {
        number: 3,
        title: "Check for interference",
        description:
          "Move the device closer to the router or paired device. Remove potential sources of interference — other electronics, thick walls, metal objects, and microwave ovens can all disrupt wireless signals.",
      },
      {
        number: 4,
        title: "Update firmware and software",
        description:
          "Check for updates on both your device and router/paired device. Connectivity bugs are commonly fixed in firmware updates.",
      },
      {
        number: 5,
        title: "Reset network settings",
        description:
          "If available, reset the network settings on your device. This clears all saved networks and connections, giving you a fresh start. You'll need to reconnect to all your networks afterward.",
      },
      {
        number: 6,
        title: "Factory reset as last resort",
        description:
          "If nothing else works, a factory reset will restore the device to default settings. Back up any important data first. This fixes software corruption that simpler resets can't.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Microsoft Game Console Xbox Controller Not Connecting — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Microsoft Game Console Xbox Controller Not Connecting yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Easy. Save $150+.",
  },
  {
    id: "microsoft-game-console-xbox-overheating-shutdown",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "xbox-overheating-shutdown",
    problemTitle: "Xbox Overheating Shutdown",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Thermal Fuse",
        costRange: "$5-$12",
        amazonUrl: "https://www.amazon.com/s?k=Microsoft+game+console+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft+game+console+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "This is a common issue with Microsoft game consoles and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your Microsoft Game Console completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Microsoft Game Console Xbox Overheating Shutdown — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Microsoft Game Console Xbox Overheating Shutdown yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "nintendo-game-console-switch-wont-charge",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo",
    brandSlug: "nintendo",
    problemSlug: "switch-wont-charge",
    problemTitle: "Switch Wont Charge",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$15",
        amazonUrl: "https://www.amazon.com/s?k=Nintendo+game+console+charging+cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo+game+console+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "When your Nintendo Game Console won't charge, the most common causes are a dirty or obstructed charging port, a faulty cable, or a software glitch. Before assuming the worst, some simple troubleshooting can save you a trip to the repair shop.",
    steps: [
      {
        number: 1,
        title: "Check the charging cable and adapter",
        description:
          "Try a different charging cable and power adapter. Cables wear out over time, especially near the connectors. Borrow one from someone if you need to. Also try a different wall outlet.",
      },
      {
        number: 2,
        title: "Clean the charging port",
        description:
          "Use a toothpick (wood or plastic, never metal) and shine a flashlight into the port. Gently remove any lint, dust, or debris. You'll be surprised how much gunk accumulates in there. This fixes the problem about 70% of the time.",
      },
      {
        number: 3,
        title: "Perform a hard restart",
        description:
          "Force restart your device by holding the power button (and volume button if applicable) for 15-30 seconds. Software glitches can sometimes prevent charging, and a hard restart clears them.",
      },
      {
        number: 4,
        title: "Check for physical damage",
        description:
          "Look closely at the charging port with a flashlight. Check for bent pins, corrosion, or loose parts. If you see damage, the port may need professional repair.",
      },
      {
        number: 5,
        title: "Let it charge for 30 minutes",
        description:
          "If the battery is completely drained, plug it in and wait at least 30 minutes before expecting any response. A deeply discharged battery needs time before it has enough power to turn on.",
      },
      {
        number: 6,
        title: "Try wireless charging if available",
        description:
          "If your device supports wireless charging, try that. If it charges wirelessly but not with a cable, the charging port hardware needs repair.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Nintendo Game Console Switch Wont Charge — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Nintendo Game Console Switch Wont Charge yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "nintendo-game-console-switch-screen-cracked",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo",
    brandSlug: "nintendo",
    problemSlug: "switch-screen-cracked",
    problemTitle: "Switch Screen Cracked",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Compressed air",
      "Microfiber cloth",
      "Isopropyl alcohol (90%+)",
    ],
    partsNeeded: [
      {
        name: "Nintendo Screen Replacement Kit",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Nintendo+game+console+screen+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo+game+console+screen+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    quickDiagnosis:
      "Screen problems on your Nintendo Game Console can range from simple software glitches to hardware issues. The good news is that many screen issues can be fixed without replacing the screen itself.",
    steps: [
      {
        number: 1,
        title: "Perform a hard restart",
        description:
          "Turn the device completely off. For electronics, hold the power button for 15-30 seconds. Wait a minute, then turn it back on. This clears many software-related display issues.",
      },
      {
        number: 2,
        title: "Check all cable connections",
        description:
          "If applicable, check HDMI, display, and power cables. Unplug and firmly replug each one. Try different cables and different ports if available.",
      },
      {
        number: 3,
        title: "Adjust brightness and display settings",
        description:
          "The screen may be working but with incorrect settings. Try adjusting brightness. If using a remote, try pressing the Input or Source button to cycle through input sources.",
      },
      {
        number: 4,
        title: "Test with an external display",
        description:
          "If possible, connect to an external monitor or TV. If the external display works fine, the issue is with the device's screen specifically, not the graphics processor.",
      },
      {
        number: 5,
        title: "Check for physical damage",
        description:
          "Look closely at the screen for cracks, pressure marks, discoloration, or dead spots. Shine a flashlight at the screen — if you can faintly see the image, the backlight may have failed.",
      },
      {
        number: 6,
        title: "Update software/firmware",
        description:
          "If the device powers on but the display is acting up, check for software updates. Display glitches are sometimes caused by buggy software and fixed with an update.",
      },
    ],
    alternativeCauses: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    whenToCallPro:
      "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
    metaTitle:
      "Nintendo Game Console Switch Screen Cracked — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Nintendo Game Console Switch Screen Cracked yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "samsung-microwave-not-heating-food",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-heating-food",
    problemTitle: "Not Heating Food",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter (optional)",
      "Microfiber cloth",
    ],
    partsNeeded: [
      {
        name: "Thermal Fuse",
        costRange: "$5-$12",
        amazonUrl: "https://www.amazon.com/s?k=Samsung+microwave+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung+microwave+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: Microwaves contain high-voltage capacitors that can hold a lethal charge even when unplugged. Never remove the outer cover.",
      "Unplug the microwave before any troubleshooting.",
      "Only perform the external troubleshooting steps described — internal repairs should be done by a professional.",
    ],
    quickDiagnosis:
      "When your Samsung Microwave isn't heating properly, the cause is usually a worn-out heating element, a tripped thermal safety device, or a clogged vent restricting airflow. Many of these issues are inexpensive to fix yourself.",
    steps: [
      {
        number: 1,
        title: "Check the settings",
        description:
          "Double-check that the temperature and mode are set correctly. It sounds obvious, but incorrect settings are a surprisingly common cause of \"not heating\" complaints.",
      },
      {
        number: 2,
        title: "Inspect the vents and airflow",
        description:
          "Make sure all vents, filters, and airways are clean and unobstructed. Restricted airflow causes overheating, which triggers safety cutoffs that prevent heating.",
      },
      {
        number: 3,
        title: "Check for a thermal fuse or safety cutoff",
        description:
          "Many heating devices have a thermal fuse — a one-time safety device that blows when the unit overheats. If blown, it must be replaced ($5-$15). It's usually a small white or silver component near the heating element.",
      },
      {
        number: 4,
        title: "Inspect the heating element",
        description:
          "If you can safely access the heating element, look for visible damage — broken coils, scorch marks, or separation. A broken element needs replacement.",
      },
      {
        number: 5,
        title: "Test with a multimeter (optional)",
        description:
          "If you have a multimeter, test the heating element for continuity. No continuity means the element is broken and needs replacement. Also test the thermal fuse.",
      },
      {
        number: 6,
        title: "Clean and reassemble",
        description:
          "After checking everything, clean all accessible parts, reassemble, and test. Run a short cycle to see if heating has been restored.",
      },
    ],
    alternativeCauses: [
      "Check if the door latch is closing properly — the microwave won't run if it doesn't detect a closed door.",
      "Try a different outlet to rule out a power issue.",
      "Check if the turntable motor is working by listening for a humming sound.",
    ],
    whenToCallPro:
      "Microwave internal repairs involve dangerous high-voltage components. If external troubleshooting doesn't fix it, a new microwave costs $80-$200 and is usually cheaper and safer than repair. Never attempt to open the microwave cover yourself.",
    metaTitle:
      "Samsung Microwave Not Heating Food — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Samsung Microwave Not Heating Food yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
  {
    id: "samsung-microwave-se-error-code",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "se-error-code",
    problemTitle: "SE Error Code",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter (optional)",
      "Microfiber cloth",
    ],
    partsNeeded: [
      {
        name: "Samsung Microwave Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Samsung+microwave+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung+microwave+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: Microwaves contain high-voltage capacitors that can hold a lethal charge even when unplugged. Never remove the outer cover.",
      "Unplug the microwave before any troubleshooting.",
      "Only perform the external troubleshooting steps described — internal repairs should be done by a professional.",
    ],
    quickDiagnosis:
      "The SE Error Code on your Samsung Microwave is a diagnostic alert indicating a specific malfunction. In most cases, this error can be resolved with some basic troubleshooting steps that don't require professional help or expensive parts.",
    steps: [
      {
        number: 1,
        title: "Power cycle the unit",
        description:
          "Unplug your Samsung Microwave from the wall outlet. Wait 2-3 minutes. This resets the internal computer and clears temporary error codes. Plug it back in and see if the error returns.",
      },
      {
        number: 2,
        title: "Check for obvious issues",
        description:
          "Look for anything unusual — blocked vents, loose connections, water where it shouldn't be, or unusual sounds. Many error codes are triggered by simple physical problems that are easy to spot.",
      },
      {
        number: 3,
        title: "Clean filters and accessible parts",
        description:
          "If your microwave has user-accessible filters, remove and clean them thoroughly. Clogged filters trigger many error codes. Rinse under running water and let dry completely before reinstalling.",
      },
      {
        number: 4,
        title: "Inspect connections and hoses",
        description:
          "Check all hoses, cables, and connections you can safely access. Look for kinks, clogs, loose fittings, or visible damage. Reconnect anything that looks loose.",
      },
      {
        number: 5,
        title: "Run a test cycle",
        description:
          "After cleaning and checking connections, run a short test cycle. If the error code has cleared, you've fixed the problem. If it returns, try repeating the power cycle one more time.",
      },
      {
        number: 6,
        title: "Document the error for a technician",
        description:
          "If the error persists, note exactly when it appears (start of cycle, mid-cycle, etc.) and any sounds or behaviors. This information helps a technician diagnose the issue much faster, saving you money on diagnostic fees.",
      },
    ],
    alternativeCauses: [
      "Check if the door latch is closing properly — the microwave won't run if it doesn't detect a closed door.",
      "Try a different outlet to rule out a power issue.",
      "Check if the turntable motor is working by listening for a humming sound.",
    ],
    whenToCallPro:
      "Microwave internal repairs involve dangerous high-voltage components. If external troubleshooting doesn't fix it, a new microwave costs $80-$200 and is usually cheaper and safer than repair. Never attempt to open the microwave cover yourself.",
    metaTitle:
      "Samsung Microwave SE Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Samsung Microwave SE Error Code yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Easy. Save $150+.",
  },
  {
    id: "ge-microwave-sparking-inside",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "sparking-inside",
    problemTitle: "Sparking Inside",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter (optional)",
      "Microfiber cloth",
    ],
    partsNeeded: [
      {
        name: "GE Microwave Replacement Parts",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=GE+microwave+replacement+parts&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=GE+microwave+replacement+parts&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: Microwaves contain high-voltage capacitors that can hold a lethal charge even when unplugged. Never remove the outer cover.",
      "Unplug the microwave before any troubleshooting.",
      "Only perform the external troubleshooting steps described — internal repairs should be done by a professional.",
    ],
    quickDiagnosis:
      "This is a common issue with GE microwaves and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.",
    steps: [
      {
        number: 1,
        title: "Power cycle the device",
        description:
          "Turn off your GE Microwave completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.",
      },
      {
        number: 2,
        title: "Check the basics",
        description:
          "Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.",
      },
      {
        number: 3,
        title: "Clean accessible components",
        description:
          "Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.",
      },
      {
        number: 4,
        title: "Inspect for visible damage",
        description:
          "Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.",
      },
      {
        number: 5,
        title: "Reset to factory defaults if applicable",
        description:
          "If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.",
      },
      {
        number: 6,
        title: "Test again and document results",
        description:
          "After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.",
      },
    ],
    alternativeCauses: [
      "Check if the door latch is closing properly — the microwave won't run if it doesn't detect a closed door.",
      "Try a different outlet to rule out a power issue.",
      "Check if the turntable motor is working by listening for a humming sound.",
    ],
    whenToCallPro:
      "Microwave internal repairs involve dangerous high-voltage components. If external troubleshooting doesn't fix it, a new microwave costs $80-$200 and is usually cheaper and safer than repair. Never attempt to open the microwave cover yourself.",
    metaTitle:
      "GE Microwave Sparking Inside — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your GE Microwave Sparking Inside yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $150+.",
  },
];
