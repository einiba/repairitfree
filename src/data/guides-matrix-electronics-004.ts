import { Guide } from "@/lib/types";

export const matrixElectronicsGuides004: Guide[] = [
  {
    id: "valve-steam-deck-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "won-t-turn-on",
    problemTitle: "Won't Turn On",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Multimeter (optional)",
      "Screwdriver set",
      "Flashlight"
    ],
    partsNeeded: [
      {
        name: "Replacement Power Supply / Charger",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Valve Steam Deck Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
    steps: [
      {
        number: 1,
        title: "Check the power source",
        description: "Make sure your charger and cable are working. Try a different outlet or USB port. Inspect the cable for fraying or damage. Borrow a known-good charger if possible."
      },
      {
        number: 2,
        title: "Perform a hard reset",
        description: "Hold down the power button for 15-30 seconds. On some devices you may need to hold power + volume down simultaneously. This forces a restart even if the screen is completely black."
      },
      {
        number: 3,
        title: "Charge for at least 30 minutes",
        description: "If the battery is completely dead, the device may not respond immediately. Plug it in and wait at least 30 minutes before trying to turn it on again. Look for any charging indicator light."
      },
      {
        number: 4,
        title: "Inspect the charging port",
        description: "Use a flashlight to look inside the charging port for lint, debris, or bent pins. Gently clean with a wooden toothpick if needed. A clogged port is one of the most common reasons a device appears dead."
      },
      {
        number: 5,
        title: "Try an alternate boot method",
        description: "Try booting into safe mode or recovery mode. This varies by device — typically hold power + volume up/down during startup. If the device boots in recovery mode, the hardware is fine and the issue is software-related."
      }
    ],
    alternativeCauses: [
      "Swollen or degraded battery that can no longer hold charge",
      "Liquid damage causing a short circuit",
      "Failed motherboard or logic board component"
    ],
    whenToCallPro: "If the device won't respond to any button combination, won't charge at all, and you've tried multiple chargers, the issue is likely a dead battery or motherboard failure. Professional repair typically costs $50-$200 depending on the device.",
    metaTitle: "Valve Steam Deck Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "valve-steam-deck-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "overheating",
    problemTitle: "Overheating",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "Compressed air",
      "Soft brush",
      "Thermal paste (for laptops/consoles)"
    ],
    partsNeeded: [
      {
        name: "Thermal Paste / Cooling Pad",
        costRange: "$5-$20",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Valve Steam Deck Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
    steps: [
      {
        number: 1,
        title: "Close resource-heavy apps",
        description: "Close all apps running in the background. Games, video streaming, and GPS navigation generate the most heat. Let the device rest for a few minutes in a cool area."
      },
      {
        number: 2,
        title: "Remove the case",
        description: "Protective cases trap heat. Remove your case and see if the device cools down. If it does, consider switching to a thinner case or one with better ventilation."
      },
      {
        number: 3,
        title: "Clean air vents and fans",
        description: "Use compressed air to blow out dust from vents and fan openings. Dust buildup is the #1 cause of overheating in laptops and consoles. Hold the fan blade still while blowing air to avoid damaging it."
      },
      {
        number: 4,
        title: "Check for software issues",
        description: "Update your operating system and apps. Check for runaway processes using a task manager or battery usage screen. A misbehaving app can pin the CPU at 100% and generate excessive heat."
      },
      {
        number: 5,
        title: "Improve airflow",
        description: "Make sure the device has adequate ventilation. Don't use laptops on soft surfaces like beds or pillows. Keep consoles in open areas, not inside enclosed cabinets. Consider a cooling pad or stand."
      }
    ],
    alternativeCauses: [
      "Degraded thermal paste between the CPU and heatsink (laptops, consoles)",
      "Failed cooling fan",
      "Swollen battery generating excess heat"
    ],
    whenToCallPro: "If cleaning vents and reducing load doesn't help, the thermal paste may need replacing or the cooling fan may be failing. A professional can re-paste and inspect the cooling system for $30-$80.",
    metaTitle: "Valve Steam Deck Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "valve-steam-deck-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "disc-drive-not-reading",
    problemTitle: "Disc Drive Not Reading",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$40",
    toolsNeeded: [
      "Microfiber cloth",
      "Compressed air",
      "Torx screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement Disc Drive / Laser Lens",
        costRange: "$20-$40",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Valve Steam Deck disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different disc",
        description: "Test with a known-good, clean disc. If one disc doesn't work but others do, that specific disc is likely scratched or damaged. Try both game discs and Blu-ray movies to isolate the issue."
      },
      {
        number: 2,
        title: "Clean the disc",
        description: "Wipe the disc with a microfiber cloth from the center outward (never in circles). Look for deep scratches. If the disc is dirty or has fingerprints, that may be the entire problem."
      },
      {
        number: 3,
        title: "Power cycle the console",
        description: "Turn off the console completely (not rest/standby mode). Unplug it for 2 minutes. This resets the disc drive controller. Plug back in and try again."
      },
      {
        number: 4,
        title: "Clean the laser lens",
        description: "Use a disc drive cleaning disc (available for $5-$10) or carefully open the console and use compressed air to blow dust off the laser lens. Do not touch the lens directly."
      },
      {
        number: 5,
        title: "Rebuild database / clear cache",
        description: "Boot into the console's maintenance or safe mode and rebuild the database or clear the system cache. Corrupted data can sometimes prevent disc recognition."
      }
    ],
    alternativeCauses: [
      "Laser lens failure (common after 3-4 years of heavy use)",
      "Disc drive motor failure (makes grinding sounds)",
      "Firmware bug (check for system updates)"
    ],
    whenToCallPro: "If the drive makes grinding noises, won't accept or eject discs, or doesn't read after cleaning, the drive mechanism or laser is failing. Replacement costs $60-$120 at a repair shop.",
    metaTitle: "Valve Steam Deck Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "valve-steam-deck-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "controller-not-connecting",
    problemTitle: "Controller Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "USB cable",
      "Small pin or toothpick (for reset button)"
    ],
    partsNeeded: [
      {
        name: "Replacement Controller / USB Cable",
        costRange: "$10-$15",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Valve Steam Deck controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
    steps: [
      {
        number: 1,
        title: "Charge the controller",
        description: "Connect the controller to the console with a USB cable and let it charge for at least 15 minutes. A completely dead battery won't pair wirelessly. The controller should show a charging indicator."
      },
      {
        number: 2,
        title: "Reset the controller",
        description: "Most controllers have a small reset button on the back (usually a tiny hole you need a pin or toothpick to reach). Press and hold it for 5 seconds. This clears the Bluetooth pairing memory."
      },
      {
        number: 3,
        title: "Re-pair via USB cable",
        description: "Connect the controller to the console with a USB cable and press the PS/Xbox/Home button to pair. Some consoles require you to go to Settings > Accessories > Bluetooth to manually pair."
      },
      {
        number: 4,
        title: "Restart the console",
        description: "Fully power off the console (not rest mode). Unplug it for 1 minute. Plug back in and try pairing the controller again with a USB cable. This clears Bluetooth cache."
      },
      {
        number: 5,
        title: "Update controller firmware",
        description: "Connect via USB and check for controller firmware updates in the console's settings. Outdated firmware can cause connection issues, especially after a system update."
      }
    ],
    alternativeCauses: [
      "Bluetooth interference from nearby devices",
      "Damaged USB port on the controller",
      "Controller paired to a different console or device",
      "Defective Bluetooth antenna in the controller"
    ],
    whenToCallPro: "If the controller won't connect via USB cable either, the USB port or Bluetooth module on the controller is likely damaged. Replacement controllers cost $40-$70. Repair is usually not cost-effective for controllers.",
    metaTitle: "Valve Steam Deck Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "valve-steam-deck-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "no-video-output",
    problemTitle: "No Video Output",
    difficulty: "Medium",
    timeEstimate: "10-25 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "Different HDMI cable",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement HDMI Cable / Port",
        costRange: "$5-$20",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Valve Steam Deck usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
    steps: [
      {
        number: 1,
        title: "Check HDMI connections",
        description: "Unplug the HDMI cable from both the console and TV. Inspect for bent pins. Reconnect firmly. Try a different HDMI port on the TV. Make sure the TV is set to the correct input."
      },
      {
        number: 2,
        title: "Try a different HDMI cable",
        description: "HDMI cables can fail without visible damage. Swap to a known-good cable. Use a High Speed HDMI cable or better for 4K consoles."
      },
      {
        number: 3,
        title: "Boot into safe/low-resolution mode",
        description: "Some consoles boot in low-resolution safe mode when you hold the power button. PS: hold power for 7 seconds until second beep. Xbox: hold power + eject for 10 seconds. This outputs at 480p so any TV can display it."
      },
      {
        number: 4,
        title: "Power cycle the console",
        description: "Unplug the console and TV for 2 minutes. Plug the TV in first and turn it on. Then plug in the console and power on. This resets the HDCP handshake between devices."
      },
      {
        number: 5,
        title: "Try a different TV or monitor",
        description: "Test the console on a different display to determine if the issue is with the console or the TV. If it works on another display, the issue is with your TV's HDMI handling."
      }
    ],
    alternativeCauses: [
      "Failed HDMI chip on the console motherboard",
      "Resolution set higher than TV supports",
      "Damaged HDMI port on the console"
    ],
    whenToCallPro: "If the console doesn't output video on any TV with any cable, the HDMI port or chip on the motherboard is likely damaged. HDMI port repair costs $80-$150 at a repair shop.",
    metaTitle: "Valve Steam Deck Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "valve-steam-deck-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "loud-fan-noise",
    problemTitle: "Loud Fan Noise",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Torx screwdriver set",
      "Compressed air",
      "Soft brush",
      "Thermal paste (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Fan / Thermal Paste",
        costRange: "$8-$15",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Valve Steam Deck means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
    steps: [
      {
        number: 1,
        title: "Improve ventilation",
        description: "Make sure the console has at least 4-6 inches of clearance on all sides. Move it out of enclosed cabinets. Stand it vertically if the design allows. Poor ventilation makes the fan work 2-3x harder."
      },
      {
        number: 2,
        title: "Clean external vents",
        description: "Use compressed air to blow out the vents without opening the console. Short bursts at an angle will dislodge dust. A vacuum on low suction held near the vents can also help."
      },
      {
        number: 3,
        title: "Deep clean (open the console)",
        description: "Remove the outer shell (usually Torx screws). Use compressed air to thoroughly clean the fan, heatsink, and internal surfaces. You'll likely find significant dust buildup. This alone usually fixes loud fan noise."
      },
      {
        number: 4,
        title: "Replace thermal paste",
        description: "If the console is 2+ years old, the thermal paste between the CPU/GPU and heatsink may have dried out. Clean off the old paste with isopropyl alcohol and apply a small pea-sized drop of new paste. This can reduce temps by 10-20C."
      },
      {
        number: 5,
        title: "Check for game-specific issues",
        description: "Some games push the hardware harder than others. If the fan is only loud during specific games, it's normal. If it's loud at the home screen, there's a ventilation or thermal issue."
      }
    ],
    alternativeCauses: [
      "Fan bearings wearing out (rattling/grinding sound vs. whooshing)",
      "Thermal pads on VRAM need replacing",
      "Console placed on carpet or soft surface blocking bottom vents"
    ],
    whenToCallPro: "If cleaning and re-pasting don't help, or if the fan makes grinding/rattling noises, the fan itself needs replacement. Professional service typically costs $40-$80 including parts.",
    metaTitle: "Valve Steam Deck Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "valve-steam-deck-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "wifi-issues",
    problemTitle: "WiFi Issues",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Ethernet cable (for testing)"
    ],
    partsNeeded: [
      {
        name: "USB WiFi Adapter / Ethernet Adapter",
        costRange: "$10-$25",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Valve Steam Deck are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
    steps: [
      {
        number: 1,
        title: "Restart the console and router",
        description: "Power off the console completely. Unplug your router for 30 seconds. Plug the router back in, wait 2-3 minutes, then turn on the console. This clears network caches on both devices."
      },
      {
        number: 2,
        title: "Test your internet speed",
        description: "Run a network speed test from the console's settings. Compare with a test on your phone. If the phone gets good speeds but the console doesn't, the issue is between the router and console specifically."
      },
      {
        number: 3,
        title: "Use 5GHz instead of 2.4GHz",
        description: "If your router broadcasts both bands, connect the console to the 5GHz network. It's faster and less prone to interference. Position the console closer to the router if 5GHz signal is weak."
      },
      {
        number: 4,
        title: "Change DNS settings",
        description: "Set DNS to Google (8.8.8.8 / 8.8.4.4) or Cloudflare (1.1.1.1 / 1.0.0.1). Go to Network Settings > Advanced/Manual and enter the DNS servers. This can improve connection reliability and speed."
      },
      {
        number: 5,
        title: "Use a wired connection",
        description: "If WiFi problems persist, connect via Ethernet cable for the most stable connection. If the console is too far from the router, a powerline adapter ($30-$50) can send internet through your electrical wiring."
      }
    ],
    alternativeCauses: [
      "ISP throttling gaming traffic",
      "Too many devices on the same WiFi network",
      "Console's internal WiFi antenna damaged"
    ],
    whenToCallPro: "If the console can't see any WiFi networks, the internal WiFi module may be damaged. This typically costs $40-$80 to repair. A USB WiFi adapter ($15-$25) may be a cheaper workaround.",
    metaTitle: "Valve Steam Deck Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "valve-steam-deck-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "charging-issues",
    problemTitle: "Charging Issues",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick",
      "Compressed air",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Charger / Charging Cable",
        costRange: "$10-$25",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Valve Steam Deck are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
    steps: [
      {
        number: 1,
        title: "Try a different charger and cable",
        description: "Use a known-good charger and cable. Many charging issues are simply worn-out cables. Make sure you're using the correct wattage charger for your device."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Use a flashlight to inspect the port. Remove lint and debris with a wooden toothpick. Compressed air can also help. A dirty port is the most common reason a device won't charge properly."
      },
      {
        number: 3,
        title: "Restart the device",
        description: "Power off completely and power back on. Software glitches can prevent the device from recognizing the charger. A restart clears these issues."
      },
      {
        number: 4,
        title: "Charge while powered off",
        description: "Turn the device off completely, then plug in the charger. If it charges while off, a background process may be draining battery faster than the charger can supply. Check for runaway apps."
      },
      {
        number: 5,
        title: "Check battery health",
        description: "Look in Settings > Battery for battery health information. If the battery's maximum capacity is below 80%, it may need replacement. Batteries naturally degrade over 2-3 years."
      }
    ],
    alternativeCauses: [
      "Charging port pins bent or corroded",
      "Power supply board issue (for consoles with external power supplies)",
      "Battery cell failure"
    ],
    whenToCallPro: "If multiple chargers don't work and the port is clean, the charging port or battery may need replacement. Port replacement costs $40-$80, battery replacement $30-$70.",
    metaTitle: "Valve Steam Deck Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "valve-steam-deck-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "freezing-crashing",
    problemTitle: "Freezing and Crashing",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Compressed air",
      "Torx screwdriver (if cleaning internals)"
    ],
    partsNeeded: [
      {
        name: "Replacement Thermal Paste / Internal SSD",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Valve Steam Deck is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
    steps: [
      {
        number: 1,
        title: "Clear the system cache",
        description: "Boot into safe mode or maintenance mode and clear the system cache. Corrupted cached data is one of the most common causes of freezing. This won't delete your games or saves."
      },
      {
        number: 2,
        title: "Check for system updates",
        description: "Make sure your system software is fully up to date. Manufacturers regularly release stability patches. Connect via Ethernet if WiFi is unreliable for downloads."
      },
      {
        number: 3,
        title: "Check for overheating",
        description: "Feel the device — is it very hot? Clean the vents with compressed air. Make sure it has adequate ventilation. Overheating causes thermal throttling and crashes. See the overheating guide for detailed steps."
      },
      {
        number: 4,
        title: "Rebuild database / repair storage",
        description: "Boot into safe mode and rebuild the database (PS) or reset the cache (Xbox/Switch). This reorganizes the storage and fixes corrupted files without deleting your games."
      },
      {
        number: 5,
        title: "Test with different games/apps",
        description: "If only one game crashes, uninstall and reinstall it — the installation may be corrupted. If all games crash, it's a system-level issue (overheating, failing storage, or bad RAM)."
      }
    ],
    alternativeCauses: [
      "Failing internal SSD or hard drive",
      "Insufficient storage space (keep 10%+ free)",
      "RAM failure causing random crashes"
    ],
    whenToCallPro: "If crashes persist after clearing cache, updating software, and cleaning the unit, the internal storage or another component may be failing. Professional diagnosis costs $40-$80. SSD replacement costs $50-$120 including the drive.",
    metaTitle: "Valve Steam Deck Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "valve-steam-deck-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Valve Steam Deck",
    brandSlug: "valve-steam-deck",
    problemSlug: "storage-full",
    problemTitle: "Storage Full",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "USB external drive (optional)",
      "Torx screwdriver (for internal SSD upgrade)"
    ],
    partsNeeded: [
      {
        name: "External Hard Drive / SSD Upgrade",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Valve%20Steam%20Deck%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Valve%20Steam%20Deck%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Valve Steam Deck is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
    steps: [
      {
        number: 1,
        title: "Check what's using storage",
        description: "Go to Settings > Storage to see a breakdown of what's taking up space. Games, apps, screenshots, and video captures all add up. Sort by size to see the biggest offenders."
      },
      {
        number: 2,
        title: "Delete unused games and apps",
        description: "Uninstall games you're not currently playing. You can always redownload them later — your save data is typically stored separately (and often in the cloud). Start with the largest games first."
      },
      {
        number: 3,
        title: "Clear screenshots and video clips",
        description: "Capture galleries can take up surprising amounts of space. Transfer clips you want to keep to a USB drive or cloud storage, then delete them from the device."
      },
      {
        number: 4,
        title: "Move games to external storage",
        description: "Connect a compatible external USB drive and move games to it. Most consoles support playing games from external storage. This is the easiest way to expand capacity without opening the device."
      },
      {
        number: 5,
        title: "Upgrade internal storage",
        description: "For a permanent solution, upgrade the internal SSD to a larger one. Many consoles have a user-accessible SSD slot. A 1TB-2TB NVMe SSD costs $50-$100 and massively expands your library capacity."
      }
    ],
    alternativeCauses: [
      "System updates consuming hidden storage space",
      "Game patches accumulating old update files",
      "Corrupted data taking up phantom space (rebuild database to fix)"
    ],
    whenToCallPro: "Storage management is typically a DIY task. If you need help upgrading the internal SSD, a repair shop can do it for $30-$50 plus the cost of the drive. Most console SSD upgrades are designed to be user-friendly.",
    metaTitle: "Valve Steam Deck Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Valve Steam Deck Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "meta-quest-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "won-t-turn-on",
    problemTitle: "Won't Turn On",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Multimeter (optional)",
      "Screwdriver set",
      "Flashlight"
    ],
    partsNeeded: [
      {
        name: "Replacement Power Supply / Charger",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Meta Quest Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
    steps: [
      {
        number: 1,
        title: "Check the power source",
        description: "Make sure your charger and cable are working. Try a different outlet or USB port. Inspect the cable for fraying or damage. Borrow a known-good charger if possible."
      },
      {
        number: 2,
        title: "Perform a hard reset",
        description: "Hold down the power button for 15-30 seconds. On some devices you may need to hold power + volume down simultaneously. This forces a restart even if the screen is completely black."
      },
      {
        number: 3,
        title: "Charge for at least 30 minutes",
        description: "If the battery is completely dead, the device may not respond immediately. Plug it in and wait at least 30 minutes before trying to turn it on again. Look for any charging indicator light."
      },
      {
        number: 4,
        title: "Inspect the charging port",
        description: "Use a flashlight to look inside the charging port for lint, debris, or bent pins. Gently clean with a wooden toothpick if needed. A clogged port is one of the most common reasons a device appears dead."
      },
      {
        number: 5,
        title: "Try an alternate boot method",
        description: "Try booting into safe mode or recovery mode. This varies by device — typically hold power + volume up/down during startup. If the device boots in recovery mode, the hardware is fine and the issue is software-related."
      }
    ],
    alternativeCauses: [
      "Swollen or degraded battery that can no longer hold charge",
      "Liquid damage causing a short circuit",
      "Failed motherboard or logic board component"
    ],
    whenToCallPro: "If the device won't respond to any button combination, won't charge at all, and you've tried multiple chargers, the issue is likely a dead battery or motherboard failure. Professional repair typically costs $50-$200 depending on the device.",
    metaTitle: "Meta Quest Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "meta-quest-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "overheating",
    problemTitle: "Overheating",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "Compressed air",
      "Soft brush",
      "Thermal paste (for laptops/consoles)"
    ],
    partsNeeded: [
      {
        name: "Thermal Paste / Cooling Pad",
        costRange: "$5-$20",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Meta Quest Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
    steps: [
      {
        number: 1,
        title: "Close resource-heavy apps",
        description: "Close all apps running in the background. Games, video streaming, and GPS navigation generate the most heat. Let the device rest for a few minutes in a cool area."
      },
      {
        number: 2,
        title: "Remove the case",
        description: "Protective cases trap heat. Remove your case and see if the device cools down. If it does, consider switching to a thinner case or one with better ventilation."
      },
      {
        number: 3,
        title: "Clean air vents and fans",
        description: "Use compressed air to blow out dust from vents and fan openings. Dust buildup is the #1 cause of overheating in laptops and consoles. Hold the fan blade still while blowing air to avoid damaging it."
      },
      {
        number: 4,
        title: "Check for software issues",
        description: "Update your operating system and apps. Check for runaway processes using a task manager or battery usage screen. A misbehaving app can pin the CPU at 100% and generate excessive heat."
      },
      {
        number: 5,
        title: "Improve airflow",
        description: "Make sure the device has adequate ventilation. Don't use laptops on soft surfaces like beds or pillows. Keep consoles in open areas, not inside enclosed cabinets. Consider a cooling pad or stand."
      }
    ],
    alternativeCauses: [
      "Degraded thermal paste between the CPU and heatsink (laptops, consoles)",
      "Failed cooling fan",
      "Swollen battery generating excess heat"
    ],
    whenToCallPro: "If cleaning vents and reducing load doesn't help, the thermal paste may need replacing or the cooling fan may be failing. A professional can re-paste and inspect the cooling system for $30-$80.",
    metaTitle: "Meta Quest Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "meta-quest-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "disc-drive-not-reading",
    problemTitle: "Disc Drive Not Reading",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$40",
    toolsNeeded: [
      "Microfiber cloth",
      "Compressed air",
      "Torx screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement Disc Drive / Laser Lens",
        costRange: "$20-$40",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Meta Quest disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different disc",
        description: "Test with a known-good, clean disc. If one disc doesn't work but others do, that specific disc is likely scratched or damaged. Try both game discs and Blu-ray movies to isolate the issue."
      },
      {
        number: 2,
        title: "Clean the disc",
        description: "Wipe the disc with a microfiber cloth from the center outward (never in circles). Look for deep scratches. If the disc is dirty or has fingerprints, that may be the entire problem."
      },
      {
        number: 3,
        title: "Power cycle the console",
        description: "Turn off the console completely (not rest/standby mode). Unplug it for 2 minutes. This resets the disc drive controller. Plug back in and try again."
      },
      {
        number: 4,
        title: "Clean the laser lens",
        description: "Use a disc drive cleaning disc (available for $5-$10) or carefully open the console and use compressed air to blow dust off the laser lens. Do not touch the lens directly."
      },
      {
        number: 5,
        title: "Rebuild database / clear cache",
        description: "Boot into the console's maintenance or safe mode and rebuild the database or clear the system cache. Corrupted data can sometimes prevent disc recognition."
      }
    ],
    alternativeCauses: [
      "Laser lens failure (common after 3-4 years of heavy use)",
      "Disc drive motor failure (makes grinding sounds)",
      "Firmware bug (check for system updates)"
    ],
    whenToCallPro: "If the drive makes grinding noises, won't accept or eject discs, or doesn't read after cleaning, the drive mechanism or laser is failing. Replacement costs $60-$120 at a repair shop.",
    metaTitle: "Meta Quest Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "meta-quest-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "controller-not-connecting",
    problemTitle: "Controller Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "USB cable",
      "Small pin or toothpick (for reset button)"
    ],
    partsNeeded: [
      {
        name: "Replacement Controller / USB Cable",
        costRange: "$10-$15",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Meta Quest controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
    steps: [
      {
        number: 1,
        title: "Charge the controller",
        description: "Connect the controller to the console with a USB cable and let it charge for at least 15 minutes. A completely dead battery won't pair wirelessly. The controller should show a charging indicator."
      },
      {
        number: 2,
        title: "Reset the controller",
        description: "Most controllers have a small reset button on the back (usually a tiny hole you need a pin or toothpick to reach). Press and hold it for 5 seconds. This clears the Bluetooth pairing memory."
      },
      {
        number: 3,
        title: "Re-pair via USB cable",
        description: "Connect the controller to the console with a USB cable and press the PS/Xbox/Home button to pair. Some consoles require you to go to Settings > Accessories > Bluetooth to manually pair."
      },
      {
        number: 4,
        title: "Restart the console",
        description: "Fully power off the console (not rest mode). Unplug it for 1 minute. Plug back in and try pairing the controller again with a USB cable. This clears Bluetooth cache."
      },
      {
        number: 5,
        title: "Update controller firmware",
        description: "Connect via USB and check for controller firmware updates in the console's settings. Outdated firmware can cause connection issues, especially after a system update."
      }
    ],
    alternativeCauses: [
      "Bluetooth interference from nearby devices",
      "Damaged USB port on the controller",
      "Controller paired to a different console or device",
      "Defective Bluetooth antenna in the controller"
    ],
    whenToCallPro: "If the controller won't connect via USB cable either, the USB port or Bluetooth module on the controller is likely damaged. Replacement controllers cost $40-$70. Repair is usually not cost-effective for controllers.",
    metaTitle: "Meta Quest Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "meta-quest-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "no-video-output",
    problemTitle: "No Video Output",
    difficulty: "Medium",
    timeEstimate: "10-25 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "Different HDMI cable",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement HDMI Cable / Port",
        costRange: "$5-$20",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Meta Quest usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
    steps: [
      {
        number: 1,
        title: "Check HDMI connections",
        description: "Unplug the HDMI cable from both the console and TV. Inspect for bent pins. Reconnect firmly. Try a different HDMI port on the TV. Make sure the TV is set to the correct input."
      },
      {
        number: 2,
        title: "Try a different HDMI cable",
        description: "HDMI cables can fail without visible damage. Swap to a known-good cable. Use a High Speed HDMI cable or better for 4K consoles."
      },
      {
        number: 3,
        title: "Boot into safe/low-resolution mode",
        description: "Some consoles boot in low-resolution safe mode when you hold the power button. PS: hold power for 7 seconds until second beep. Xbox: hold power + eject for 10 seconds. This outputs at 480p so any TV can display it."
      },
      {
        number: 4,
        title: "Power cycle the console",
        description: "Unplug the console and TV for 2 minutes. Plug the TV in first and turn it on. Then plug in the console and power on. This resets the HDCP handshake between devices."
      },
      {
        number: 5,
        title: "Try a different TV or monitor",
        description: "Test the console on a different display to determine if the issue is with the console or the TV. If it works on another display, the issue is with your TV's HDMI handling."
      }
    ],
    alternativeCauses: [
      "Failed HDMI chip on the console motherboard",
      "Resolution set higher than TV supports",
      "Damaged HDMI port on the console"
    ],
    whenToCallPro: "If the console doesn't output video on any TV with any cable, the HDMI port or chip on the motherboard is likely damaged. HDMI port repair costs $80-$150 at a repair shop.",
    metaTitle: "Meta Quest Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "meta-quest-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "loud-fan-noise",
    problemTitle: "Loud Fan Noise",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Torx screwdriver set",
      "Compressed air",
      "Soft brush",
      "Thermal paste (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Fan / Thermal Paste",
        costRange: "$8-$15",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Meta Quest means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
    steps: [
      {
        number: 1,
        title: "Improve ventilation",
        description: "Make sure the console has at least 4-6 inches of clearance on all sides. Move it out of enclosed cabinets. Stand it vertically if the design allows. Poor ventilation makes the fan work 2-3x harder."
      },
      {
        number: 2,
        title: "Clean external vents",
        description: "Use compressed air to blow out the vents without opening the console. Short bursts at an angle will dislodge dust. A vacuum on low suction held near the vents can also help."
      },
      {
        number: 3,
        title: "Deep clean (open the console)",
        description: "Remove the outer shell (usually Torx screws). Use compressed air to thoroughly clean the fan, heatsink, and internal surfaces. You'll likely find significant dust buildup. This alone usually fixes loud fan noise."
      },
      {
        number: 4,
        title: "Replace thermal paste",
        description: "If the console is 2+ years old, the thermal paste between the CPU/GPU and heatsink may have dried out. Clean off the old paste with isopropyl alcohol and apply a small pea-sized drop of new paste. This can reduce temps by 10-20C."
      },
      {
        number: 5,
        title: "Check for game-specific issues",
        description: "Some games push the hardware harder than others. If the fan is only loud during specific games, it's normal. If it's loud at the home screen, there's a ventilation or thermal issue."
      }
    ],
    alternativeCauses: [
      "Fan bearings wearing out (rattling/grinding sound vs. whooshing)",
      "Thermal pads on VRAM need replacing",
      "Console placed on carpet or soft surface blocking bottom vents"
    ],
    whenToCallPro: "If cleaning and re-pasting don't help, or if the fan makes grinding/rattling noises, the fan itself needs replacement. Professional service typically costs $40-$80 including parts.",
    metaTitle: "Meta Quest Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "meta-quest-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "wifi-issues",
    problemTitle: "WiFi Issues",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Ethernet cable (for testing)"
    ],
    partsNeeded: [
      {
        name: "USB WiFi Adapter / Ethernet Adapter",
        costRange: "$10-$25",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Meta Quest are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
    steps: [
      {
        number: 1,
        title: "Restart the console and router",
        description: "Power off the console completely. Unplug your router for 30 seconds. Plug the router back in, wait 2-3 minutes, then turn on the console. This clears network caches on both devices."
      },
      {
        number: 2,
        title: "Test your internet speed",
        description: "Run a network speed test from the console's settings. Compare with a test on your phone. If the phone gets good speeds but the console doesn't, the issue is between the router and console specifically."
      },
      {
        number: 3,
        title: "Use 5GHz instead of 2.4GHz",
        description: "If your router broadcasts both bands, connect the console to the 5GHz network. It's faster and less prone to interference. Position the console closer to the router if 5GHz signal is weak."
      },
      {
        number: 4,
        title: "Change DNS settings",
        description: "Set DNS to Google (8.8.8.8 / 8.8.4.4) or Cloudflare (1.1.1.1 / 1.0.0.1). Go to Network Settings > Advanced/Manual and enter the DNS servers. This can improve connection reliability and speed."
      },
      {
        number: 5,
        title: "Use a wired connection",
        description: "If WiFi problems persist, connect via Ethernet cable for the most stable connection. If the console is too far from the router, a powerline adapter ($30-$50) can send internet through your electrical wiring."
      }
    ],
    alternativeCauses: [
      "ISP throttling gaming traffic",
      "Too many devices on the same WiFi network",
      "Console's internal WiFi antenna damaged"
    ],
    whenToCallPro: "If the console can't see any WiFi networks, the internal WiFi module may be damaged. This typically costs $40-$80 to repair. A USB WiFi adapter ($15-$25) may be a cheaper workaround.",
    metaTitle: "Meta Quest Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "meta-quest-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "charging-issues",
    problemTitle: "Charging Issues",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick",
      "Compressed air",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Charger / Charging Cable",
        costRange: "$10-$25",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Meta Quest are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
    steps: [
      {
        number: 1,
        title: "Try a different charger and cable",
        description: "Use a known-good charger and cable. Many charging issues are simply worn-out cables. Make sure you're using the correct wattage charger for your device."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Use a flashlight to inspect the port. Remove lint and debris with a wooden toothpick. Compressed air can also help. A dirty port is the most common reason a device won't charge properly."
      },
      {
        number: 3,
        title: "Restart the device",
        description: "Power off completely and power back on. Software glitches can prevent the device from recognizing the charger. A restart clears these issues."
      },
      {
        number: 4,
        title: "Charge while powered off",
        description: "Turn the device off completely, then plug in the charger. If it charges while off, a background process may be draining battery faster than the charger can supply. Check for runaway apps."
      },
      {
        number: 5,
        title: "Check battery health",
        description: "Look in Settings > Battery for battery health information. If the battery's maximum capacity is below 80%, it may need replacement. Batteries naturally degrade over 2-3 years."
      }
    ],
    alternativeCauses: [
      "Charging port pins bent or corroded",
      "Power supply board issue (for consoles with external power supplies)",
      "Battery cell failure"
    ],
    whenToCallPro: "If multiple chargers don't work and the port is clean, the charging port or battery may need replacement. Port replacement costs $40-$80, battery replacement $30-$70.",
    metaTitle: "Meta Quest Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "meta-quest-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "freezing-crashing",
    problemTitle: "Freezing and Crashing",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Compressed air",
      "Torx screwdriver (if cleaning internals)"
    ],
    partsNeeded: [
      {
        name: "Replacement Thermal Paste / Internal SSD",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Meta Quest is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
    steps: [
      {
        number: 1,
        title: "Clear the system cache",
        description: "Boot into safe mode or maintenance mode and clear the system cache. Corrupted cached data is one of the most common causes of freezing. This won't delete your games or saves."
      },
      {
        number: 2,
        title: "Check for system updates",
        description: "Make sure your system software is fully up to date. Manufacturers regularly release stability patches. Connect via Ethernet if WiFi is unreliable for downloads."
      },
      {
        number: 3,
        title: "Check for overheating",
        description: "Feel the device — is it very hot? Clean the vents with compressed air. Make sure it has adequate ventilation. Overheating causes thermal throttling and crashes. See the overheating guide for detailed steps."
      },
      {
        number: 4,
        title: "Rebuild database / repair storage",
        description: "Boot into safe mode and rebuild the database (PS) or reset the cache (Xbox/Switch). This reorganizes the storage and fixes corrupted files without deleting your games."
      },
      {
        number: 5,
        title: "Test with different games/apps",
        description: "If only one game crashes, uninstall and reinstall it — the installation may be corrupted. If all games crash, it's a system-level issue (overheating, failing storage, or bad RAM)."
      }
    ],
    alternativeCauses: [
      "Failing internal SSD or hard drive",
      "Insufficient storage space (keep 10%+ free)",
      "RAM failure causing random crashes"
    ],
    whenToCallPro: "If crashes persist after clearing cache, updating software, and cleaning the unit, the internal storage or another component may be failing. Professional diagnosis costs $40-$80. SSD replacement costs $50-$120 including the drive.",
    metaTitle: "Meta Quest Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "meta-quest-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Meta Quest",
    brandSlug: "meta-quest",
    problemSlug: "storage-full",
    problemTitle: "Storage Full",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "USB external drive (optional)",
      "Torx screwdriver (for internal SSD upgrade)"
    ],
    partsNeeded: [
      {
        name: "External Hard Drive / SSD Upgrade",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Meta%20Quest%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Meta%20Quest%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Meta Quest is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
    steps: [
      {
        number: 1,
        title: "Check what's using storage",
        description: "Go to Settings > Storage to see a breakdown of what's taking up space. Games, apps, screenshots, and video captures all add up. Sort by size to see the biggest offenders."
      },
      {
        number: 2,
        title: "Delete unused games and apps",
        description: "Uninstall games you're not currently playing. You can always redownload them later — your save data is typically stored separately (and often in the cloud). Start with the largest games first."
      },
      {
        number: 3,
        title: "Clear screenshots and video clips",
        description: "Capture galleries can take up surprising amounts of space. Transfer clips you want to keep to a USB drive or cloud storage, then delete them from the device."
      },
      {
        number: 4,
        title: "Move games to external storage",
        description: "Connect a compatible external USB drive and move games to it. Most consoles support playing games from external storage. This is the easiest way to expand capacity without opening the device."
      },
      {
        number: 5,
        title: "Upgrade internal storage",
        description: "For a permanent solution, upgrade the internal SSD to a larger one. Many consoles have a user-accessible SSD slot. A 1TB-2TB NVMe SSD costs $50-$100 and massively expands your library capacity."
      }
    ],
    alternativeCauses: [
      "System updates consuming hidden storage space",
      "Game patches accumulating old update files",
      "Corrupted data taking up phantom space (rebuild database to fix)"
    ],
    whenToCallPro: "Storage management is typically a DIY task. If you need help upgrading the internal SSD, a repair shop can do it for $30-$50 plus the cost of the drive. Most console SSD upgrades are designed to be user-friendly.",
    metaTitle: "Meta Quest Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Meta Quest Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  }
];
