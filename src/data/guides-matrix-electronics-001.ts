import { Guide } from "@/lib/types";

export const matrixElectronicsGuides001: Guide[] = [
  {
    id: "apple-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Apple Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Apple Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "apple-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Apple Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Apple Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "apple-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your Apple Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "Apple Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your Apple Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "Apple Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your Apple Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "Apple Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your Apple Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "Apple Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Apple Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Apple Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Apple Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Apple Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your Apple Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "Apple Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your Apple Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "Apple Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
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
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Samsung Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Samsung Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Samsung Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Samsung Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your Samsung Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "Samsung Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your Samsung Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "Samsung Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your Samsung Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "Samsung Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your Samsung Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "Samsung Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
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
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Samsung Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Samsung Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Samsung Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Samsung Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your Samsung Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "Samsung Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your Samsung Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "Samsung Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "google-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
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
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Google Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Google Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "google-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Google Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Google Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "google-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your Google Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "Google Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your Google Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "Google Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your Google Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "Google Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your Google Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "Google Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
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
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Google Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Google Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Google Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Google Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your Google Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "Google Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "google-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Google%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Google%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your Google Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "Google Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Google Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "oneplus-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
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
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your OnePlus Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "OnePlus Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "oneplus-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your OnePlus Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "OnePlus Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "oneplus-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your OnePlus Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "OnePlus Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your OnePlus Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "OnePlus Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your OnePlus Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "OnePlus Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your OnePlus Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "OnePlus Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
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
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your OnePlus Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "OnePlus Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your OnePlus Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "OnePlus Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your OnePlus Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "OnePlus Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "oneplus-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "OnePlus",
    brandSlug: "oneplus",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=OnePlus%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=OnePlus%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your OnePlus Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "OnePlus Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your OnePlus Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "motorola-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
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
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Motorola Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Motorola Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "motorola-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Motorola Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Motorola Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "motorola-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your Motorola Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "Motorola Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your Motorola Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "Motorola Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your Motorola Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "Motorola Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your Motorola Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "Motorola Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
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
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Motorola Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Motorola Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Motorola Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Motorola Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your Motorola Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "Motorola Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "motorola-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "Motorola",
    brandSlug: "motorola",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Motorola%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Motorola%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your Motorola Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "Motorola Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Motorola Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
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
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your LG Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "LG Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your LG Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "LG Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your LG Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "LG Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your LG Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "LG Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your LG Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "LG Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your LG Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "LG Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
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
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your LG Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "LG Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your LG Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "LG Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your LG Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "LG Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=LG%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your LG Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "LG Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "xiaomi-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
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
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Xiaomi Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Xiaomi Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "xiaomi-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Xiaomi Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Xiaomi Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "xiaomi-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your Xiaomi Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "Xiaomi Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your Xiaomi Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "Xiaomi Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your Xiaomi Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "Xiaomi Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your Xiaomi Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "Xiaomi Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
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
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Xiaomi Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Xiaomi Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Xiaomi Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Xiaomi Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your Xiaomi Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "Xiaomi Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "xiaomi-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "Xiaomi",
    brandSlug: "xiaomi",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Xiaomi%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Xiaomi%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your Xiaomi Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "Xiaomi Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Xiaomi Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-phones-won-t-turn-on",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Sony Phone won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Sony Phone Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-phones-screen-flickering",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Sony Phone is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Sony Phone Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-phones-battery-draining-fast",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "battery-draining-fast",
    problemTitle: "Battery Draining Fast",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "None (software fixes)",
      "Pentalobe/Torx screwdriver (if replacing battery)"
    ],
    partsNeeded: [
      {
        name: "Replacement Battery",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20replacement%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20replacement%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
      "Swollen lithium batteries can catch fire — handle with extreme care.",
      "Never puncture or bend a lithium battery."
    ],
    quickDiagnosis: "Rapid battery drain on your Sony Phone is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.",
    steps: [
      {
        number: 1,
        title: "Check battery health",
        description: "Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step."
      },
      {
        number: 2,
        title: "Identify battery-hogging apps",
        description: "In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits."
      },
      {
        number: 3,
        title: "Reduce background activity",
        description: "Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch."
      },
      {
        number: 4,
        title: "Optimize display settings",
        description: "Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer."
      },
      {
        number: 5,
        title: "Reset settings if needed",
        description: "If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement."
      }
    ],
    alternativeCauses: [
      "Poor cellular signal causing the radio to work harder",
      "A recent software update introducing a battery bug",
      "Malfunctioning sensor keeping the device awake"
    ],
    whenToCallPro: "If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.",
    metaTitle: "Sony Phone Battery Draining Fast: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone battery draining fast. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-not-charging",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Wooden toothpick or plastic spudger",
      "Flashlight",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Charging Cable",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20charging%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20charging%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only a wooden or plastic tool to clean the charging port — never metal.",
      "If you see liquid in the port, let the device dry completely before charging.",
      "Do not force a cable into a damaged port."
    ],
    quickDiagnosis: "When your Sony Phone won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and charger",
        description: "Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix."
      },
      {
        number: 3,
        title: "Try a different power source",
        description: "Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip."
      },
      {
        number: 4,
        title: "Perform a hard reset",
        description: "Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again."
      },
      {
        number: 5,
        title: "Check for water damage",
        description: "If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice."
      }
    ],
    alternativeCauses: [
      "Worn out or oxidized charging port contacts",
      "Damaged battery that can no longer accept a charge",
      "Faulty charge controller chip on the motherboard"
    ],
    whenToCallPro: "If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.",
    metaTitle: "Sony Phone Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-speaker-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "speaker-not-working",
    problemTitle: "Speaker Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Soft brush or toothbrush",
      "Compressed air (optional)"
    ],
    partsNeeded: [
      {
        name: "Replacement Speaker",
        costRange: "$10-$30",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
      "Power off before cleaning speaker grilles."
    ],
    quickDiagnosis: "No sound from your Sony Phone? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.",
    steps: [
      {
        number: 1,
        title: "Check volume and mute settings",
        description: "Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position."
      },
      {
        number: 2,
        title: "Disconnect Bluetooth",
        description: "Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on."
      },
      {
        number: 3,
        title: "Clean the speaker grille",
        description: "Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too."
      },
      {
        number: 4,
        title: "Test with different apps",
        description: "Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on speaker contacts",
      "Headphone jack debris making the device think headphones are plugged in",
      "Software bug after a recent update"
    ],
    whenToCallPro: "If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.",
    metaTitle: "Sony Phone Speaker Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone speaker not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-camera-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "camera-not-working",
    problemTitle: "Camera Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing camera)"
    ],
    partsNeeded: [
      {
        name: "Replacement Camera Module",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20replacement%20camera&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20replacement%20camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before attempting any camera hardware inspection.",
      "Do not use sharp objects near the camera lens."
    ],
    quickDiagnosis: "If the camera on your Sony Phone shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.",
    steps: [
      {
        number: 1,
        title: "Force close and reopen the camera app",
        description: "Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder."
      },
      {
        number: 2,
        title: "Clean the camera lens",
        description: "Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos."
      },
      {
        number: 3,
        title: "Check app permissions",
        description: "Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset."
      },
      {
        number: 4,
        title: "Restart the device",
        description: "A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem."
      },
      {
        number: 5,
        title: "Reset or update software",
        description: "Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty."
      }
    ],
    alternativeCauses: [
      "Third-party camera app conflicting with the hardware",
      "Lens crack or internal condensation from water exposure",
      "Loose ribbon cable connecting camera to motherboard"
    ],
    whenToCallPro: "If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.",
    metaTitle: "Sony Phone Camera Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone camera not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-overheating",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Sony Phone overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Sony Phone Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-wifi-not-connecting",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Sony Phone are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Sony Phone WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-microphone-not-working",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "microphone-not-working",
    problemTitle: "Microphone Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Soft brush",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Microphone",
        costRange: "$8-$25",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20replacement%20microphone&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20replacement%20microphone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not insert anything into the microphone hole.",
      "Be gentle when cleaning around microphone openings."
    ],
    quickDiagnosis: "Microphone issues on your Sony Phone are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.",
    steps: [
      {
        number: 1,
        title: "Check microphone permissions",
        description: "Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues."
      },
      {
        number: 2,
        title: "Clean the microphone opening",
        description: "Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole."
      },
      {
        number: 3,
        title: "Disconnect Bluetooth devices",
        description: "Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again."
      },
      {
        number: 4,
        title: "Test with a voice recording app",
        description: "Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too."
      },
      {
        number: 5,
        title: "Restart and reset",
        description: "Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement."
      }
    ],
    alternativeCauses: [
      "Water damage causing corrosion on the microphone",
      "Screen protector or case blocking the microphone hole",
      "Noise cancellation feature malfunction"
    ],
    whenToCallPro: "If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.",
    metaTitle: "Sony Phone Microphone Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone microphone not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-phones-touchscreen-not-responding",
    category: "Phones",
    categorySlug: "phones",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "touchscreen-not-responding",
    problemTitle: "Touchscreen Not Responding",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: [
      "Microfiber cloth",
      "Screwdriver set (if replacing digitizer)"
    ],
    partsNeeded: [
      {
        name: "Replacement Digitizer / Screen Assembly",
        costRange: "$30-$80",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20Phone%20replacement%20touchscreen%20digitizer&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20Phone%20replacement%20touchscreen%20digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
      "Power off the device before attempting any hardware fixes."
    ],
    quickDiagnosis: "An unresponsive touchscreen on your Sony Phone can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the screen",
        description: "Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well."
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description: "If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges."
      },
      {
        number: 3,
        title: "Force restart the device",
        description: "Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function."
      },
      {
        number: 4,
        title: "Boot into safe mode",
        description: "Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves."
      },
      {
        number: 5,
        title: "Factory reset as last resort",
        description: "If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement."
      }
    ],
    alternativeCauses: [
      "Extreme temperature affecting touch sensor accuracy",
      "Water damage corroding touch sensor connections",
      "Dropped device causing digitizer flex cable to disconnect"
    ],
    whenToCallPro: "If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.",
    metaTitle: "Sony Phone Touchscreen Not Responding: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony Phone touchscreen not responding. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hp-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
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
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your HP Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "HP Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hp-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
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
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your HP Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "HP Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hp-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your HP Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "HP Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hp-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "battery-not-charging",
    problemTitle: "Battery Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-25 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Wooden toothpick",
      "Flashlight",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Charger / Battery",
        costRange: "$15-$30",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your HP Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Test with a different charger and cable",
        description: "Use a known-good charger and cable. Cables are the most common failure point. Try charging from a wall adapter rather than USB — wall adapters deliver more consistent power."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Use a flashlight to inspect the port. Carefully remove lint and debris with a wooden toothpick. Compressed air helps too. A clogged port prevents the cable from making proper contact."
      },
      {
        number: 3,
        title: "Check for software issues",
        description: "Restart the device. Check battery settings for any warnings or calibration issues. Some devices stop charging at a certain percentage to preserve battery life — check if this feature is enabled."
      },
      {
        number: 4,
        title: "Try charging while powered off",
        description: "Power off the device completely and then plug in the charger. If it charges while off but not while on, a background process is draining power faster than the charger can deliver it."
      },
      {
        number: 5,
        title: "Inspect for physical damage",
        description: "Look at the charging port for bent pins, corrosion, or damage. Check the battery compartment (if accessible) for swelling. A visibly swollen battery must be replaced immediately."
      }
    ],
    alternativeCauses: [
      "Faulty wall outlet or power strip",
      "Power management IC failure on the motherboard",
      "Corroded battery contacts"
    ],
    whenToCallPro: "If multiple chargers don't work and the port is clean, the charging port or battery likely needs replacement. Expect to pay $40-$100 for port replacement, $30-$80 for battery replacement.",
    metaTitle: "HP Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hp-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "keyboard-not-working",
    problemTitle: "Keyboard Not Working",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Compressed air",
      "Screwdriver set",
      "Isopropyl alcohol"
    ],
    partsNeeded: [
      {
        name: "Replacement Keyboard",
        costRange: "$20-$50",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your HP Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
    steps: [
      {
        number: 1,
        title: "Restart and check for driver issues",
        description: "Restart the device. Check Device Manager (Windows) or System Preferences (Mac) for keyboard driver warnings. Update or reinstall keyboard drivers if needed."
      },
      {
        number: 2,
        title: "Check for stuck keys",
        description: "Look for keys that are physically stuck down or feel different. A single stuck key can prevent other keys from registering. Gently pry up the affected keycap and clean underneath."
      },
      {
        number: 3,
        title: "Clean with compressed air",
        description: "Tilt the device at a 75-degree angle and spray compressed air between the keys in a left-to-right motion. Rotate and repeat. This dislodges crumbs and debris that prevent key presses."
      },
      {
        number: 4,
        title: "Try an external keyboard",
        description: "Plug in an external USB keyboard. If it works perfectly, the issue is with the built-in keyboard hardware, not software. This helps isolate the problem."
      },
      {
        number: 5,
        title: "Check the ribbon cable",
        description: "If you're comfortable opening the device, check that the keyboard ribbon cable is firmly seated in its connector on the motherboard. A loose cable is a common cause after drops or repairs."
      }
    ],
    alternativeCauses: [
      "Liquid spill causing sticky or dead keys",
      "Failed keyboard controller chip",
      "Accessibility settings filtering key presses (Sticky Keys, Filter Keys)"
    ],
    whenToCallPro: "If cleaning and reseating the cable doesn't fix it, the keyboard assembly likely needs replacement. Laptop keyboard replacement typically costs $50-$150 at a repair shop.",
    metaTitle: "HP Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hp-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your HP Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "HP Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hp-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "blue-screen",
    problemTitle: "Blue Screen (BSOD)",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0-$40",
    toolsNeeded: [
      "USB drive (for recovery)",
      "Screwdriver set (if checking RAM/SSD)"
    ],
    partsNeeded: [
      {
        name: "Replacement RAM / SSD",
        costRange: "$20-$40",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your HP Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
    steps: [
      {
        number: 1,
        title: "Note the error code",
        description: "When the blue screen appears, write down the stop code (e.g., IRQL_NOT_LESS_OR_EQUAL, CRITICAL_PROCESS_DIED). This code tells you exactly what caused the crash. Search for it to find targeted fixes."
      },
      {
        number: 2,
        title: "Boot into Safe Mode",
        description: "Restart and boot into Safe Mode (hold Shift while clicking Restart, or press F8 during boot). If the blue screen doesn't occur in Safe Mode, a driver or startup program is the cause."
      },
      {
        number: 3,
        title: "Update or roll back drivers",
        description: "In Safe Mode, open Device Manager and check for devices with warning icons. Update or roll back recently changed drivers, especially graphics and network drivers. These are the most common BSOD culprits."
      },
      {
        number: 4,
        title: "Run memory and disk diagnostics",
        description: "Run Windows Memory Diagnostic (mdsched.exe) to test RAM. Run CHKDSK to check for disk errors. Failing RAM or a corrupted drive are common blue screen causes."
      },
      {
        number: 5,
        title: "Check for overheating",
        description: "Overheating can cause blue screens under load. Clean the vents, check that fans are running, and monitor CPU temperature. If the laptop crashes during heavy tasks but not at idle, heat is likely the issue."
      }
    ],
    alternativeCauses: [
      "Corrupted Windows system files (run sfc /scannow)",
      "Recent Windows update causing compatibility issues",
      "Malware or virus infection"
    ],
    whenToCallPro: "If blue screens persist after driver updates and diagnostics show clean RAM and disk, there may be a motherboard issue or failing component. Professional diagnosis costs $50-$100. Consider whether repair costs exceed the device's value.",
    metaTitle: "HP Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hp-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "fan-loud",
    problemTitle: "Fan Running Loud",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Compressed air",
      "Screwdriver set",
      "Soft brush"
    ],
    partsNeeded: [
      {
        name: "Replacement Cooling Fan",
        costRange: "$10-$25",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your HP Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Close resource-heavy applications",
        description: "Open Task Manager (Ctrl+Shift+Esc) and check CPU/GPU usage. Close applications using excessive resources. Browsers with many tabs are a common culprit."
      },
      {
        number: 2,
        title: "Clean the vents and fans",
        description: "Power off and unplug the device. Use compressed air to blow out dust from all vents. Short bursts at an angle work best. You'll likely see a cloud of dust come out — this is the most common fix."
      },
      {
        number: 3,
        title: "Ensure proper airflow",
        description: "Place the device on a hard, flat surface. Soft surfaces like beds and couches block the bottom vents. Use a laptop stand or cooling pad for better airflow."
      },
      {
        number: 4,
        title: "Check for malware",
        description: "Run a full malware scan. Cryptomining malware and other malicious software can pin your CPU at 100%, causing constant fan noise."
      },
      {
        number: 5,
        title: "Consider thermal paste replacement",
        description: "If the device is over 2-3 years old and cleaning didn't help, the thermal paste between the CPU and heatsink may have dried out. Re-applying thermal paste requires opening the device and is a Medium-difficulty repair."
      }
    ],
    alternativeCauses: [
      "Fan bearings wearing out (grinding or clicking noise)",
      "BIOS settings keeping fan at max speed",
      "Failing hard drive causing excessive heat"
    ],
    whenToCallPro: "If the fan makes grinding or clicking noises, the bearings are failing and it needs replacement ($20-$60 for the part, $40-$80 for professional service). If the fan runs loud even at idle after cleaning, the thermal paste needs replacing.",
    metaTitle: "HP Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hp-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "trackpad-not-working",
    problemTitle: "Trackpad Not Working",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$40",
    toolsNeeded: [
      "Microfiber cloth",
      "Compressed air",
      "Screwdriver set (if checking cable)"
    ],
    partsNeeded: [
      {
        name: "Replacement Trackpad",
        costRange: "$20-$40",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your HP Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
    steps: [
      {
        number: 1,
        title: "Clean the trackpad surface",
        description: "Wipe the trackpad with a slightly damp microfiber cloth. Oils, lotion, and dirt can interfere with touch detection. Make sure your fingers are clean and dry too."
      },
      {
        number: 2,
        title: "Check if the trackpad is disabled",
        description: "Many laptops have a function key (Fn + F5/F6/F7) that toggles the trackpad on and off. You may have accidentally pressed it. Check the setting in your system preferences or control panel."
      },
      {
        number: 3,
        title: "Update or reinstall drivers",
        description: "Go to Device Manager > Mouse and pointing devices. Uninstall the trackpad driver, restart the laptop, and let it reinstall automatically. Also check the manufacturer's website for updated drivers."
      },
      {
        number: 4,
        title: "Check for a swollen battery",
        description: "If the trackpad is physically stiff or hard to click, the battery underneath may be swollen and pushing up. If the laptop bottom is bulging, stop using it immediately — a swollen battery is a safety hazard."
      },
      {
        number: 5,
        title: "Try an external mouse",
        description: "Connect a USB or Bluetooth mouse. If it works fine, the issue is specifically with the trackpad hardware or its connection. Check that a connected external mouse isn't automatically disabling the trackpad in settings."
      }
    ],
    alternativeCauses: [
      "Liquid spill damage under the trackpad",
      "Loose ribbon cable connecting trackpad to motherboard",
      "Accessibility settings like Sticky Keys interfering with trackpad"
    ],
    whenToCallPro: "If the trackpad is physically stiff (possible swollen battery) or drivers/cleaning don't fix it, professional repair costs $40-$100 for trackpad replacement, or $50-$100 for battery replacement if swollen.",
    metaTitle: "HP Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hp-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "slow-performance",
    problemTitle: "Slow Performance",
    difficulty: "Easy",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0-$60",
    toolsNeeded: [
      "None for software fixes",
      "Screwdriver (for RAM/SSD upgrade)"
    ],
    partsNeeded: [
      {
        name: "SSD Upgrade / Additional RAM",
        costRange: "$25-$60",
        amazonUrl: "https://www.amazon.com/s?k=HP%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=HP%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow HP Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
    steps: [
      {
        number: 1,
        title: "Disable startup programs",
        description: "Open Task Manager > Startup tab and disable programs you don't need at boot. Many installed apps add themselves to startup, slowing boot time and consuming RAM in the background."
      },
      {
        number: 2,
        title: "Free up disk space",
        description: "Run Disk Cleanup (Windows) or check Storage Management (Mac). Delete temporary files, empty the recycle bin, and uninstall programs you don't use. Keep at least 15-20% of your drive free."
      },
      {
        number: 3,
        title: "Check for malware",
        description: "Run a full system scan with your antivirus software. Malware, adware, and unwanted browser extensions are major causes of slowdown. Consider using Malwarebytes for a thorough scan."
      },
      {
        number: 4,
        title: "Check RAM and CPU usage",
        description: "Open Task Manager and monitor RAM and CPU. If RAM is consistently above 80%, you either need to close applications or upgrade RAM. If CPU spikes to 100% frequently, find and address the offending process."
      },
      {
        number: 5,
        title: "Consider hardware upgrades",
        description: "The two most impactful upgrades are switching from HDD to SSD (massive speed improvement) and adding more RAM. An SSD upgrade alone can make a 5-year-old laptop feel new."
      }
    ],
    alternativeCauses: [
      "Failing hard drive (check with CrystalDiskInfo or similar)",
      "Overheating causing thermal throttling",
      "Outdated operating system needing a clean install"
    ],
    whenToCallPro: "If software cleanup doesn't help and the device has adequate specs, the hard drive may be failing or the OS may need a clean install. An SSD upgrade by a professional typically costs $80-$150 including the drive and labor.",
    metaTitle: "HP Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your HP Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "dell-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
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
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Dell Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Dell Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "dell-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
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
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Dell Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Dell Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "dell-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "screen-flickering",
    problemTitle: "Screen Flickering",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set (if opening device)",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement Display Cable / Screen",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Dell Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Restart the device",
        description: "A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues."
      },
      {
        number: 2,
        title: "Adjust display settings",
        description: "Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models."
      },
      {
        number: 3,
        title: "Boot into safe mode",
        description: "Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one."
      },
      {
        number: 4,
        title: "Update or reset software",
        description: "Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first)."
      },
      {
        number: 5,
        title: "Check for hardware damage",
        description: "If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair."
      }
    ],
    alternativeCauses: [
      "Water or moisture damage affecting the display connector",
      "GPU or graphics chip beginning to fail",
      "Incompatible screen protector interfering with display"
    ],
    whenToCallPro: "If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.",
    metaTitle: "Dell Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "dell-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "battery-not-charging",
    problemTitle: "Battery Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-25 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "Wooden toothpick",
      "Flashlight",
      "Compressed air"
    ],
    partsNeeded: [
      {
        name: "Replacement Charger / Battery",
        costRange: "$15-$30",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your Dell Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Test with a different charger and cable",
        description: "Use a known-good charger and cable. Cables are the most common failure point. Try charging from a wall adapter rather than USB — wall adapters deliver more consistent power."
      },
      {
        number: 2,
        title: "Clean the charging port",
        description: "Use a flashlight to inspect the port. Carefully remove lint and debris with a wooden toothpick. Compressed air helps too. A clogged port prevents the cable from making proper contact."
      },
      {
        number: 3,
        title: "Check for software issues",
        description: "Restart the device. Check battery settings for any warnings or calibration issues. Some devices stop charging at a certain percentage to preserve battery life — check if this feature is enabled."
      },
      {
        number: 4,
        title: "Try charging while powered off",
        description: "Power off the device completely and then plug in the charger. If it charges while off but not while on, a background process is draining power faster than the charger can deliver it."
      },
      {
        number: 5,
        title: "Inspect for physical damage",
        description: "Look at the charging port for bent pins, corrosion, or damage. Check the battery compartment (if accessible) for swelling. A visibly swollen battery must be replaced immediately."
      }
    ],
    alternativeCauses: [
      "Faulty wall outlet or power strip",
      "Power management IC failure on the motherboard",
      "Corroded battery contacts"
    ],
    whenToCallPro: "If multiple chargers don't work and the port is clean, the charging port or battery likely needs replacement. Expect to pay $40-$100 for port replacement, $30-$80 for battery replacement.",
    metaTitle: "Dell Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "dell-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "keyboard-not-working",
    problemTitle: "Keyboard Not Working",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Compressed air",
      "Screwdriver set",
      "Isopropyl alcohol"
    ],
    partsNeeded: [
      {
        name: "Replacement Keyboard",
        costRange: "$20-$50",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your Dell Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
    steps: [
      {
        number: 1,
        title: "Restart and check for driver issues",
        description: "Restart the device. Check Device Manager (Windows) or System Preferences (Mac) for keyboard driver warnings. Update or reinstall keyboard drivers if needed."
      },
      {
        number: 2,
        title: "Check for stuck keys",
        description: "Look for keys that are physically stuck down or feel different. A single stuck key can prevent other keys from registering. Gently pry up the affected keycap and clean underneath."
      },
      {
        number: 3,
        title: "Clean with compressed air",
        description: "Tilt the device at a 75-degree angle and spray compressed air between the keys in a left-to-right motion. Rotate and repeat. This dislodges crumbs and debris that prevent key presses."
      },
      {
        number: 4,
        title: "Try an external keyboard",
        description: "Plug in an external USB keyboard. If it works perfectly, the issue is with the built-in keyboard hardware, not software. This helps isolate the problem."
      },
      {
        number: 5,
        title: "Check the ribbon cable",
        description: "If you're comfortable opening the device, check that the keyboard ribbon cable is firmly seated in its connector on the motherboard. A loose cable is a common cause after drops or repairs."
      }
    ],
    alternativeCauses: [
      "Liquid spill causing sticky or dead keys",
      "Failed keyboard controller chip",
      "Accessibility settings filtering key presses (Sticky Keys, Filter Keys)"
    ],
    whenToCallPro: "If cleaning and reseating the cable doesn't fix it, the keyboard assembly likely needs replacement. Laptop keyboard replacement typically costs $50-$150 at a repair shop.",
    metaTitle: "Dell Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "dell-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "wifi-not-connecting",
    problemTitle: "WiFi Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: [
      "None (software fixes)",
      "Screwdriver (if replacing WiFi card)"
    ],
    partsNeeded: [
      {
        name: "WiFi Antenna / Card",
        costRange: "$8-$20",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Dell Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
    steps: [
      {
        number: 1,
        title: "Toggle WiFi off and on",
        description: "Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios."
      },
      {
        number: 2,
        title: "Restart your device and router",
        description: "Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues."
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description: "Go to WiFi settings, tap on your network, and choose \"Forget.\" Then reconnect by entering the password fresh. Saved network profiles can become corrupted."
      },
      {
        number: 4,
        title: "Reset network settings",
        description: "Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues."
      },
      {
        number: 5,
        title: "Check for interference",
        description: "Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range."
      }
    ],
    alternativeCauses: [
      "Router firmware needs updating",
      "Too many devices connected to the router",
      "Damaged WiFi antenna inside the device"
    ],
    whenToCallPro: "If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.",
    metaTitle: "Dell Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "dell-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "blue-screen",
    problemTitle: "Blue Screen (BSOD)",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0-$40",
    toolsNeeded: [
      "USB drive (for recovery)",
      "Screwdriver set (if checking RAM/SSD)"
    ],
    partsNeeded: [
      {
        name: "Replacement RAM / SSD",
        costRange: "$20-$40",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your Dell Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
    steps: [
      {
        number: 1,
        title: "Note the error code",
        description: "When the blue screen appears, write down the stop code (e.g., IRQL_NOT_LESS_OR_EQUAL, CRITICAL_PROCESS_DIED). This code tells you exactly what caused the crash. Search for it to find targeted fixes."
      },
      {
        number: 2,
        title: "Boot into Safe Mode",
        description: "Restart and boot into Safe Mode (hold Shift while clicking Restart, or press F8 during boot). If the blue screen doesn't occur in Safe Mode, a driver or startup program is the cause."
      },
      {
        number: 3,
        title: "Update or roll back drivers",
        description: "In Safe Mode, open Device Manager and check for devices with warning icons. Update or roll back recently changed drivers, especially graphics and network drivers. These are the most common BSOD culprits."
      },
      {
        number: 4,
        title: "Run memory and disk diagnostics",
        description: "Run Windows Memory Diagnostic (mdsched.exe) to test RAM. Run CHKDSK to check for disk errors. Failing RAM or a corrupted drive are common blue screen causes."
      },
      {
        number: 5,
        title: "Check for overheating",
        description: "Overheating can cause blue screens under load. Clean the vents, check that fans are running, and monitor CPU temperature. If the laptop crashes during heavy tasks but not at idle, heat is likely the issue."
      }
    ],
    alternativeCauses: [
      "Corrupted Windows system files (run sfc /scannow)",
      "Recent Windows update causing compatibility issues",
      "Malware or virus infection"
    ],
    whenToCallPro: "If blue screens persist after driver updates and diagnostics show clean RAM and disk, there may be a motherboard issue or failing component. Professional diagnosis costs $50-$100. Consider whether repair costs exceed the device's value.",
    metaTitle: "Dell Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "dell-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "fan-loud",
    problemTitle: "Fan Running Loud",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$25",
    toolsNeeded: [
      "Compressed air",
      "Screwdriver set",
      "Soft brush"
    ],
    partsNeeded: [
      {
        name: "Replacement Cooling Fan",
        costRange: "$10-$25",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your Dell Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Close resource-heavy applications",
        description: "Open Task Manager (Ctrl+Shift+Esc) and check CPU/GPU usage. Close applications using excessive resources. Browsers with many tabs are a common culprit."
      },
      {
        number: 2,
        title: "Clean the vents and fans",
        description: "Power off and unplug the device. Use compressed air to blow out dust from all vents. Short bursts at an angle work best. You'll likely see a cloud of dust come out — this is the most common fix."
      },
      {
        number: 3,
        title: "Ensure proper airflow",
        description: "Place the device on a hard, flat surface. Soft surfaces like beds and couches block the bottom vents. Use a laptop stand or cooling pad for better airflow."
      },
      {
        number: 4,
        title: "Check for malware",
        description: "Run a full malware scan. Cryptomining malware and other malicious software can pin your CPU at 100%, causing constant fan noise."
      },
      {
        number: 5,
        title: "Consider thermal paste replacement",
        description: "If the device is over 2-3 years old and cleaning didn't help, the thermal paste between the CPU and heatsink may have dried out. Re-applying thermal paste requires opening the device and is a Medium-difficulty repair."
      }
    ],
    alternativeCauses: [
      "Fan bearings wearing out (grinding or clicking noise)",
      "BIOS settings keeping fan at max speed",
      "Failing hard drive causing excessive heat"
    ],
    whenToCallPro: "If the fan makes grinding or clicking noises, the bearings are failing and it needs replacement ($20-$60 for the part, $40-$80 for professional service). If the fan runs loud even at idle after cleaning, the thermal paste needs replacing.",
    metaTitle: "Dell Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "dell-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "trackpad-not-working",
    problemTitle: "Trackpad Not Working",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$40",
    toolsNeeded: [
      "Microfiber cloth",
      "Compressed air",
      "Screwdriver set (if checking cable)"
    ],
    partsNeeded: [
      {
        name: "Replacement Trackpad",
        costRange: "$20-$40",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your Dell Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
    steps: [
      {
        number: 1,
        title: "Clean the trackpad surface",
        description: "Wipe the trackpad with a slightly damp microfiber cloth. Oils, lotion, and dirt can interfere with touch detection. Make sure your fingers are clean and dry too."
      },
      {
        number: 2,
        title: "Check if the trackpad is disabled",
        description: "Many laptops have a function key (Fn + F5/F6/F7) that toggles the trackpad on and off. You may have accidentally pressed it. Check the setting in your system preferences or control panel."
      },
      {
        number: 3,
        title: "Update or reinstall drivers",
        description: "Go to Device Manager > Mouse and pointing devices. Uninstall the trackpad driver, restart the laptop, and let it reinstall automatically. Also check the manufacturer's website for updated drivers."
      },
      {
        number: 4,
        title: "Check for a swollen battery",
        description: "If the trackpad is physically stiff or hard to click, the battery underneath may be swollen and pushing up. If the laptop bottom is bulging, stop using it immediately — a swollen battery is a safety hazard."
      },
      {
        number: 5,
        title: "Try an external mouse",
        description: "Connect a USB or Bluetooth mouse. If it works fine, the issue is specifically with the trackpad hardware or its connection. Check that a connected external mouse isn't automatically disabling the trackpad in settings."
      }
    ],
    alternativeCauses: [
      "Liquid spill damage under the trackpad",
      "Loose ribbon cable connecting trackpad to motherboard",
      "Accessibility settings like Sticky Keys interfering with trackpad"
    ],
    whenToCallPro: "If the trackpad is physically stiff (possible swollen battery) or drivers/cleaning don't fix it, professional repair costs $40-$100 for trackpad replacement, or $50-$100 for battery replacement if swollen.",
    metaTitle: "Dell Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "dell-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "slow-performance",
    problemTitle: "Slow Performance",
    difficulty: "Easy",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0-$60",
    toolsNeeded: [
      "None for software fixes",
      "Screwdriver (for RAM/SSD upgrade)"
    ],
    partsNeeded: [
      {
        name: "SSD Upgrade / Additional RAM",
        costRange: "$25-$60",
        amazonUrl: "https://www.amazon.com/s?k=Dell%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Dell%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow Dell Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
    steps: [
      {
        number: 1,
        title: "Disable startup programs",
        description: "Open Task Manager > Startup tab and disable programs you don't need at boot. Many installed apps add themselves to startup, slowing boot time and consuming RAM in the background."
      },
      {
        number: 2,
        title: "Free up disk space",
        description: "Run Disk Cleanup (Windows) or check Storage Management (Mac). Delete temporary files, empty the recycle bin, and uninstall programs you don't use. Keep at least 15-20% of your drive free."
      },
      {
        number: 3,
        title: "Check for malware",
        description: "Run a full system scan with your antivirus software. Malware, adware, and unwanted browser extensions are major causes of slowdown. Consider using Malwarebytes for a thorough scan."
      },
      {
        number: 4,
        title: "Check RAM and CPU usage",
        description: "Open Task Manager and monitor RAM and CPU. If RAM is consistently above 80%, you either need to close applications or upgrade RAM. If CPU spikes to 100% frequently, find and address the offending process."
      },
      {
        number: 5,
        title: "Consider hardware upgrades",
        description: "The two most impactful upgrades are switching from HDD to SSD (massive speed improvement) and adding more RAM. An SSD upgrade alone can make a 5-year-old laptop feel new."
      }
    ],
    alternativeCauses: [
      "Failing hard drive (check with CrystalDiskInfo or similar)",
      "Overheating causing thermal throttling",
      "Outdated operating system needing a clean install"
    ],
    whenToCallPro: "If software cleanup doesn't help and the device has adequate specs, the hard drive may be failing or the OS may need a clean install. An SSD upgrade by a professional typically costs $80-$150 including the drive and labor.",
    metaTitle: "Dell Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Dell Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  }
];
