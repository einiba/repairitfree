import { Guide } from "@/lib/types";

export const matrixElectronicsGuides002: Guide[] = [
  {
    id: "lenovo-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Lenovo Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Lenovo Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lenovo-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Lenovo Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Lenovo Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lenovo-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Lenovo Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Lenovo Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lenovo-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your Lenovo Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
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
    metaTitle: "Lenovo Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lenovo-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your Lenovo Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
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
    metaTitle: "Lenovo Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lenovo-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Lenovo Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Lenovo Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lenovo-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your Lenovo Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
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
    metaTitle: "Lenovo Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lenovo-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your Lenovo Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
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
    metaTitle: "Lenovo Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lenovo-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your Lenovo Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
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
    metaTitle: "Lenovo Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lenovo-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
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
        amazonUrl: "https://www.amazon.com/s?k=Lenovo%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Lenovo%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow Lenovo Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
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
    metaTitle: "Lenovo Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Lenovo Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "asus-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your ASUS Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "ASUS Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "asus-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your ASUS Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "ASUS Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "asus-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your ASUS Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "ASUS Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "asus-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your ASUS Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
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
    metaTitle: "ASUS Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "asus-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your ASUS Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
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
    metaTitle: "ASUS Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "asus-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your ASUS Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "ASUS Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "asus-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your ASUS Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
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
    metaTitle: "ASUS Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "asus-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your ASUS Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
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
    metaTitle: "ASUS Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "asus-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your ASUS Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
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
    metaTitle: "ASUS Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "asus-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
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
        amazonUrl: "https://www.amazon.com/s?k=ASUS%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ASUS%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow ASUS Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
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
    metaTitle: "ASUS Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your ASUS Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "acer-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Acer Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Acer Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "acer-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Acer Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Acer Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "acer-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Acer Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Acer Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "acer-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your Acer Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
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
    metaTitle: "Acer Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "acer-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your Acer Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
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
    metaTitle: "Acer Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "acer-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Acer Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Acer Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "acer-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your Acer Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
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
    metaTitle: "Acer Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "acer-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your Acer Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
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
    metaTitle: "Acer Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "acer-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your Acer Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
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
    metaTitle: "Acer Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "acer-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
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
        amazonUrl: "https://www.amazon.com/s?k=Acer%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Acer%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow Acer Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
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
    metaTitle: "Acer Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Acer Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Apple Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Apple Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "apple-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Apple Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Apple Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Apple Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Apple Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "apple-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your Apple Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
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
    metaTitle: "Apple Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your Apple Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
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
    metaTitle: "Apple Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "apple-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Apple Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Apple Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your Apple Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
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
    metaTitle: "Apple Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "apple-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your Apple Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
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
    metaTitle: "Apple Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your Apple Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
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
    metaTitle: "Apple Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "apple-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
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
        amazonUrl: "https://www.amazon.com/s?k=Apple%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Apple%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow Apple Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
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
    metaTitle: "Apple Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Apple Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "msi-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your MSI Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "MSI Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "msi-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your MSI Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "MSI Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "msi-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your MSI Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "MSI Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "msi-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your MSI Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
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
    metaTitle: "MSI Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "msi-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your MSI Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
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
    metaTitle: "MSI Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "msi-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your MSI Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "MSI Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "msi-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your MSI Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
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
    metaTitle: "MSI Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "msi-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your MSI Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
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
    metaTitle: "MSI Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "msi-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your MSI Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
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
    metaTitle: "MSI Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "msi-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "MSI",
    brandSlug: "msi",
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
        amazonUrl: "https://www.amazon.com/s?k=MSI%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=MSI%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow MSI Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
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
    metaTitle: "MSI Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your MSI Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-laptops-won-t-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Toshiba Laptop won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Toshiba Laptop Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-laptops-overheating",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Toshiba Laptop overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Toshiba Laptop Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-laptops-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Toshiba Laptop is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Toshiba Laptop Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-laptops-battery-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20charger%20battery&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20charger%20battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the battery is visibly swollen, stop charging immediately and do not use the device.",
      "Use only manufacturer-approved or certified chargers.",
      "Never leave a device charging unattended on flammable surfaces."
    ],
    quickDiagnosis: "Your Toshiba Laptop not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.",
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
    metaTitle: "Toshiba Laptop Battery Not Charging: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop battery not charging. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-laptops-keyboard-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20replacement%20keyboard&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20replacement%20keyboard&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
      "Avoid spilling any liquids near the keyboard area."
    ],
    quickDiagnosis: "Keyboard problems on your Toshiba Laptop are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.",
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
    metaTitle: "Toshiba Laptop Keyboard Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop keyboard not working. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-laptops-wifi-not-connecting",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Toshiba Laptop are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Toshiba Laptop WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-laptops-blue-screen",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20RAM%20memory%20upgrade&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20RAM%20memory%20upgrade&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "Blue screens on your Toshiba Laptop are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.",
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
    metaTitle: "Toshiba Laptop Blue Screen (BSOD): How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop blue screen (bsod). Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-laptops-fan-loud",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20replacement%20cooling%20fan&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20replacement%20cooling%20fan&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device and let it cool completely before cleaning.",
      "Hold fan blades still when using compressed air to prevent bearing damage."
    ],
    quickDiagnosis: "A loud fan on your Toshiba Laptop usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.",
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
    metaTitle: "Toshiba Laptop Fan Running Loud: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop fan running loud. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-laptops-trackpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20replacement%20trackpad%20touchpad&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20replacement%20trackpad%20touchpad&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Disconnect power and remove the battery before inspecting internal components."
    ],
    quickDiagnosis: "A non-responsive trackpad on your Toshiba Laptop is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.",
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
    metaTitle: "Toshiba Laptop Trackpad Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop trackpad not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-laptops-slow-performance",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20Laptop%20SSD%20upgrade%20RAM&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20Laptop%20SSD%20upgrade%20RAM&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important files before making any system changes.",
      "Use an anti-static wrist strap when handling RAM or storage drives."
    ],
    quickDiagnosis: "A slow Toshiba Laptop is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.",
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
    metaTitle: "Toshiba Laptop Slow Performance: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba Laptop slow performance. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Samsung TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Samsung TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "no-picture-but-has-sound",
    problemTitle: "No Picture But Has Sound",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement LED Backlight Strips",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your Samsung TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
    steps: [
      {
        number: 1,
        title: "Perform the flashlight test",
        description: "Turn the TV on, then shine a flashlight directly at the screen from a few inches away. Look closely — if you can see a faint image, the LED backlight has failed. This is the most common cause."
      },
      {
        number: 2,
        title: "Check HDMI connections",
        description: "Unplug and replug all HDMI cables. Try a different HDMI port. Try a different HDMI cable. A loose or faulty HDMI connection can cause a blank screen with audio still working."
      },
      {
        number: 3,
        title: "Try a different input source",
        description: "Switch to a different input (antenna, different HDMI, built-in apps). If some inputs show a picture and others don't, the issue is with that specific input rather than the display."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall (not just the remote power off). Hold the power button on the TV itself for 30 seconds. Wait 5 minutes, then plug back in and turn on. This drains residual power and resets the firmware."
      },
      {
        number: 5,
        title: "Check the T-Con board",
        description: "If the flashlight test shows no image at all, the T-Con (timing control) board may have failed. This board sits between the main board and the panel. Replacement T-Con boards are typically $20-$50."
      }
    ],
    alternativeCauses: [
      "Failed power supply board not providing enough voltage to the backlight",
      "Damaged panel ribbon cables",
      "Main board HDMI processor failure"
    ],
    whenToCallPro: "Backlight replacement requires opening the TV and handling LED strips behind the panel — it's risky for beginners. A professional can replace the backlight for $100-$200. Compare this to the cost of a new TV.",
    metaTitle: "Samsung TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Samsung TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Samsung TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "remote-not-working",
    problemTitle: "Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Small Phillips screwdriver",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement Batteries / Remote",
        costRange: "$3-$15",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your Samsung TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Replace the batteries",
        description: "Put in fresh, name-brand batteries. Even if you replaced them recently, try new ones — cheap batteries can die quickly. Make sure they're inserted in the correct orientation (+/-)."
      },
      {
        number: 2,
        title: "Clean the IR sensor",
        description: "Clean the IR emitter on the front tip of the remote with a cotton swab dipped in isopropyl alcohol. Also clean the IR receiver on the TV (usually a small dark spot on the bottom front edge)."
      },
      {
        number: 3,
        title: "Test the remote with your phone camera",
        description: "Point the remote at your phone's front camera and press a button. If the remote is working, you'll see a purple/white flash through the camera. If you see nothing, the remote is dead."
      },
      {
        number: 4,
        title: "Check for obstructions",
        description: "Make sure nothing is blocking the line of sight between the remote and the TV's IR sensor. Sound bars, decorations, or even a dirty sensor window can block the signal."
      },
      {
        number: 5,
        title: "Re-pair the remote (for Bluetooth/RF remotes)",
        description: "Some smart TV remotes use Bluetooth, not IR. Check your TV's settings for a \"Pair Remote\" option. Hold the pairing button on the remote (usually for 5+ seconds) to put it in pairing mode."
      }
    ],
    alternativeCauses: [
      "Battery contacts corroded inside the remote",
      "Button contacts worn out from heavy use",
      "TV's IR receiver board failed"
    ],
    whenToCallPro: "If a new remote doesn't work either, the TV's IR receiver board may be faulty. This is an inexpensive part ($10-$20) but requires opening the TV. A universal remote ($10-$15) is often the easiest solution.",
    metaTitle: "Samsung TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "no-sound",
    problemTitle: "No Sound",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "None for basic troubleshooting"
    ],
    partsNeeded: [
      {
        name: "Replacement TV Speaker / Sound Bar",
        costRange: "$15-$30",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your Samsung TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
    steps: [
      {
        number: 1,
        title: "Check the obvious settings",
        description: "Make sure the TV isn't muted (press Mute on the remote). Turn the volume all the way up. Check if the TV is set to output audio to external speakers that aren't connected."
      },
      {
        number: 2,
        title: "Check audio output settings",
        description: "Go to Settings > Audio/Sound. Make sure the output is set to \"TV Speakers\" and not \"External Speakers,\" \"ARC,\" or \"Optical.\" If you have a sound bar, make sure it's powered on and set to the correct input."
      },
      {
        number: 3,
        title: "Test different input sources",
        description: "Switch between HDMI inputs, antenna, and streaming apps. If some sources have sound and others don't, the issue is with that specific source, not the TV speakers."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall for 5 minutes. This resets the audio processor and clears software glitches. Press the power button on the TV while it's unplugged to drain residual power."
      },
      {
        number: 5,
        title: "Factory reset audio settings",
        description: "Go to Settings > Audio and reset to defaults. If that doesn't work, try a full factory reset (back up settings first). Corrupted audio settings are more common than speaker failure."
      }
    ],
    alternativeCauses: [
      "HDMI ARC/eARC cable not supporting audio pass-through",
      "Broadcast channel audio issue (not your TV)",
      "Internal speaker wire disconnected"
    ],
    whenToCallPro: "If the TV has no sound from any source after a factory reset, the internal speakers or audio processor board may have failed. Speaker replacement is usually $30-$60 at a repair shop. A sound bar ($30-$100) is often a more practical solution.",
    metaTitle: "Samsung TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "black-screen",
    problemTitle: "Black Screen",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement Power Board / Main Board",
        costRange: "$20-$50",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your Samsung TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
    steps: [
      {
        number: 1,
        title: "Hard power cycle",
        description: "Unplug the TV from the wall. Press and hold the power button on the TV (not the remote) for 30 seconds. Wait 5 full minutes. Plug back in and turn on. This resets the power supply and firmware."
      },
      {
        number: 2,
        title: "Check for standby light",
        description: "Look for the standby indicator light. If it's on, the TV has power. If it's off, check the outlet, try a different one. If the light blinks in a pattern, look up the blink code for your model."
      },
      {
        number: 3,
        title: "Flashlight test for backlight failure",
        description: "Turn the TV on and shine a flashlight at the screen. If you can see a faint image, the backlight has failed but the panel works. This is a common failure in TVs over 3 years old."
      },
      {
        number: 4,
        title: "Try different inputs",
        description: "Press the Source/Input button and cycle through all inputs. The TV might be set to an input with nothing connected. Try the TV's built-in smart apps to test if the panel works."
      },
      {
        number: 5,
        title: "Inspect for swollen capacitors",
        description: "If you're comfortable opening the back panel (after waiting 30+ minutes unplugged), visually inspect the power supply board for swollen or leaking capacitors (they'll have bulging tops). This is a common and repairable failure."
      }
    ],
    alternativeCauses: [
      "Failed power supply board",
      "Main board failure",
      "Damaged T-Con board"
    ],
    whenToCallPro: "If the power cycle doesn't fix it and you've confirmed the outlet works, the TV likely has a failed board. Board replacements cost $50-$150 at a repair shop. For TVs over 5 years old, compare repair cost to replacement.",
    metaTitle: "Samsung TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "lines-on-screen",
    problemTitle: "Lines on Screen",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement T-Con Board / Ribbon Cable",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your Samsung TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
    steps: [
      {
        number: 1,
        title: "Determine the line type",
        description: "Note whether lines are horizontal or vertical, colored or black, and whether they appear on all inputs. Take a photo. Horizontal lines across the full screen often point to a loose connection. Vertical lines may indicate panel failure."
      },
      {
        number: 2,
        title: "Power cycle the TV",
        description: "Unplug for 5 minutes. A software glitch can occasionally cause display artifacts that look like lines. If the lines disappear after a power cycle, it was a temporary issue."
      },
      {
        number: 3,
        title: "Gently press on the bezel edges",
        description: "With the TV on, gently press along the edges of the frame (not the screen itself). If lines change or disappear when you press, a ribbon cable connection is loose."
      },
      {
        number: 4,
        title: "Reseat ribbon cables",
        description: "Open the back panel (after unplugging and waiting). Locate the ribbon cables connecting the T-Con board to the panel. Carefully unlatch and reseat each cable. Corrosion or a loose fit is a common cause of lines."
      },
      {
        number: 5,
        title: "Replace the T-Con board",
        description: "If reseating cables doesn't help, the T-Con board itself may be faulty. It's an affordable part ($20-$50) and easy to swap — usually just 2-4 screws and a couple ribbon cables."
      }
    ],
    alternativeCauses: [
      "Physical damage to the LCD panel (drop or impact)",
      "Failed panel driver IC (often visible as lines from one edge)",
      "Electromagnetic interference from nearby devices"
    ],
    whenToCallPro: "If reseating cables and replacing the T-Con board doesn't fix the lines, the panel itself is likely damaged. Panel replacement usually costs more than a new TV — it's typically not worth repairing.",
    metaTitle: "Samsung TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "samsung-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Samsung TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Samsung TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "picture-too-dark",
    problemTitle: "Picture Too Dark",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "None — settings adjustments only"
    ],
    partsNeeded: [],
    safetyWarnings: [],
    quickDiagnosis: "A dark picture on your Samsung TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
    steps: [
      {
        number: 1,
        title: "Turn off energy saver mode",
        description: "Go to Settings > General or System > Energy Saving / Eco Mode. Turn it off. Energy saver mode drastically dims the screen. This is the #1 cause of a too-dark picture and the most commonly overlooked setting."
      },
      {
        number: 2,
        title: "Increase backlight/brightness",
        description: "Go to Settings > Picture. Increase the Backlight setting (this is different from Brightness). Backlight controls how bright the LEDs behind the screen are. Set it to 80-100% for normal viewing."
      },
      {
        number: 3,
        title: "Check ambient light sensor",
        description: "Some TVs have a light sensor that auto-adjusts brightness based on room lighting. Find this in Picture > Advanced Settings > Ambient Light Detection and turn it off if your room is dark."
      },
      {
        number: 4,
        title: "Switch picture mode",
        description: "Change the picture mode from Cinema/Movie to Standard or Vivid. Cinema modes are intentionally dimmer for movie watching. Standard mode provides good brightness for everyday viewing."
      },
      {
        number: 5,
        title: "Reset picture settings",
        description: "If you've made too many adjustments, reset picture settings to factory defaults. Then just adjust the backlight up. Factory defaults are a good baseline for most viewing environments."
      }
    ],
    alternativeCauses: [
      "Failing LED backlight (if brightness settings don't help)",
      "HDMI content outputting in HDR that the TV can't handle",
      "Damaged dimming zones on local-dimming TVs"
    ],
    whenToCallPro: "If maxing out backlight and disabling energy saver doesn't help, the LED backlight may be failing. This is a hardware issue requiring professional repair ($100-$200). For older TVs, replacement may be more cost-effective.",
    metaTitle: "Samsung TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "samsung-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "hdmi-not-working",
    problemTitle: "HDMI Not Working",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Compressed air",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement HDMI Cable",
        costRange: "$5-$15",
        amazonUrl: "https://www.amazon.com/s?k=Samsung%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Samsung%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your Samsung TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
    steps: [
      {
        number: 1,
        title: "Check the input source",
        description: "Make sure the TV is set to the correct HDMI input. Press the Source/Input button on your remote and select the HDMI port your device is connected to. TVs often have 2-4 HDMI ports."
      },
      {
        number: 2,
        title: "Reseat the HDMI cable",
        description: "Unplug the HDMI cable from both the TV and the source device. Wait 10 seconds. Plug it back in firmly on both ends. A slightly loose connection is one of the most common HDMI issues."
      },
      {
        number: 3,
        title: "Try a different HDMI cable",
        description: "Swap to a different HDMI cable. Cables can fail internally even without visible damage. Use a High Speed or Ultra High Speed HDMI cable for 4K content."
      },
      {
        number: 4,
        title: "Try a different HDMI port",
        description: "Plug the cable into a different HDMI port on the TV. If the other port works, the original port may be damaged or have a different HDMI version/capability."
      },
      {
        number: 5,
        title: "Power cycle both devices",
        description: "Unplug both the TV and the source device from power. Wait 2 minutes. Plug the TV in first and turn it on, then plug in and turn on the source device. This resets the HDCP handshake."
      }
    ],
    alternativeCauses: [
      "HDCP (copy protection) handshake failure",
      "Source device resolution higher than TV supports",
      "Damaged HDMI port pins"
    ],
    whenToCallPro: "If no HDMI ports work after trying multiple cables and devices, the HDMI controller on the main board may have failed. Board repair costs $80-$150. If only one port is damaged, using a different port is the easiest solution.",
    metaTitle: "Samsung TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Samsung TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your LG TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "LG TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "no-picture-but-has-sound",
    problemTitle: "No Picture But Has Sound",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement LED Backlight Strips",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your LG TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
    steps: [
      {
        number: 1,
        title: "Perform the flashlight test",
        description: "Turn the TV on, then shine a flashlight directly at the screen from a few inches away. Look closely — if you can see a faint image, the LED backlight has failed. This is the most common cause."
      },
      {
        number: 2,
        title: "Check HDMI connections",
        description: "Unplug and replug all HDMI cables. Try a different HDMI port. Try a different HDMI cable. A loose or faulty HDMI connection can cause a blank screen with audio still working."
      },
      {
        number: 3,
        title: "Try a different input source",
        description: "Switch to a different input (antenna, different HDMI, built-in apps). If some inputs show a picture and others don't, the issue is with that specific input rather than the display."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall (not just the remote power off). Hold the power button on the TV itself for 30 seconds. Wait 5 minutes, then plug back in and turn on. This drains residual power and resets the firmware."
      },
      {
        number: 5,
        title: "Check the T-Con board",
        description: "If the flashlight test shows no image at all, the T-Con (timing control) board may have failed. This board sits between the main board and the panel. Replacement T-Con boards are typically $20-$50."
      }
    ],
    alternativeCauses: [
      "Failed power supply board not providing enough voltage to the backlight",
      "Damaged panel ribbon cables",
      "Main board HDMI processor failure"
    ],
    whenToCallPro: "Backlight replacement requires opening the TV and handling LED strips behind the panel — it's risky for beginners. A professional can replace the backlight for $100-$200. Compare this to the cost of a new TV.",
    metaTitle: "LG TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your LG TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "LG TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "remote-not-working",
    problemTitle: "Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Small Phillips screwdriver",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement Batteries / Remote",
        costRange: "$3-$15",
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your LG TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Replace the batteries",
        description: "Put in fresh, name-brand batteries. Even if you replaced them recently, try new ones — cheap batteries can die quickly. Make sure they're inserted in the correct orientation (+/-)."
      },
      {
        number: 2,
        title: "Clean the IR sensor",
        description: "Clean the IR emitter on the front tip of the remote with a cotton swab dipped in isopropyl alcohol. Also clean the IR receiver on the TV (usually a small dark spot on the bottom front edge)."
      },
      {
        number: 3,
        title: "Test the remote with your phone camera",
        description: "Point the remote at your phone's front camera and press a button. If the remote is working, you'll see a purple/white flash through the camera. If you see nothing, the remote is dead."
      },
      {
        number: 4,
        title: "Check for obstructions",
        description: "Make sure nothing is blocking the line of sight between the remote and the TV's IR sensor. Sound bars, decorations, or even a dirty sensor window can block the signal."
      },
      {
        number: 5,
        title: "Re-pair the remote (for Bluetooth/RF remotes)",
        description: "Some smart TV remotes use Bluetooth, not IR. Check your TV's settings for a \"Pair Remote\" option. Hold the pairing button on the remote (usually for 5+ seconds) to put it in pairing mode."
      }
    ],
    alternativeCauses: [
      "Battery contacts corroded inside the remote",
      "Button contacts worn out from heavy use",
      "TV's IR receiver board failed"
    ],
    whenToCallPro: "If a new remote doesn't work either, the TV's IR receiver board may be faulty. This is an inexpensive part ($10-$20) but requires opening the TV. A universal remote ($10-$15) is often the easiest solution.",
    metaTitle: "LG TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "no-sound",
    problemTitle: "No Sound",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "None for basic troubleshooting"
    ],
    partsNeeded: [
      {
        name: "Replacement TV Speaker / Sound Bar",
        costRange: "$15-$30",
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your LG TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
    steps: [
      {
        number: 1,
        title: "Check the obvious settings",
        description: "Make sure the TV isn't muted (press Mute on the remote). Turn the volume all the way up. Check if the TV is set to output audio to external speakers that aren't connected."
      },
      {
        number: 2,
        title: "Check audio output settings",
        description: "Go to Settings > Audio/Sound. Make sure the output is set to \"TV Speakers\" and not \"External Speakers,\" \"ARC,\" or \"Optical.\" If you have a sound bar, make sure it's powered on and set to the correct input."
      },
      {
        number: 3,
        title: "Test different input sources",
        description: "Switch between HDMI inputs, antenna, and streaming apps. If some sources have sound and others don't, the issue is with that specific source, not the TV speakers."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall for 5 minutes. This resets the audio processor and clears software glitches. Press the power button on the TV while it's unplugged to drain residual power."
      },
      {
        number: 5,
        title: "Factory reset audio settings",
        description: "Go to Settings > Audio and reset to defaults. If that doesn't work, try a full factory reset (back up settings first). Corrupted audio settings are more common than speaker failure."
      }
    ],
    alternativeCauses: [
      "HDMI ARC/eARC cable not supporting audio pass-through",
      "Broadcast channel audio issue (not your TV)",
      "Internal speaker wire disconnected"
    ],
    whenToCallPro: "If the TV has no sound from any source after a factory reset, the internal speakers or audio processor board may have failed. Speaker replacement is usually $30-$60 at a repair shop. A sound bar ($30-$100) is often a more practical solution.",
    metaTitle: "LG TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "black-screen",
    problemTitle: "Black Screen",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement Power Board / Main Board",
        costRange: "$20-$50",
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your LG TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
    steps: [
      {
        number: 1,
        title: "Hard power cycle",
        description: "Unplug the TV from the wall. Press and hold the power button on the TV (not the remote) for 30 seconds. Wait 5 full minutes. Plug back in and turn on. This resets the power supply and firmware."
      },
      {
        number: 2,
        title: "Check for standby light",
        description: "Look for the standby indicator light. If it's on, the TV has power. If it's off, check the outlet, try a different one. If the light blinks in a pattern, look up the blink code for your model."
      },
      {
        number: 3,
        title: "Flashlight test for backlight failure",
        description: "Turn the TV on and shine a flashlight at the screen. If you can see a faint image, the backlight has failed but the panel works. This is a common failure in TVs over 3 years old."
      },
      {
        number: 4,
        title: "Try different inputs",
        description: "Press the Source/Input button and cycle through all inputs. The TV might be set to an input with nothing connected. Try the TV's built-in smart apps to test if the panel works."
      },
      {
        number: 5,
        title: "Inspect for swollen capacitors",
        description: "If you're comfortable opening the back panel (after waiting 30+ minutes unplugged), visually inspect the power supply board for swollen or leaking capacitors (they'll have bulging tops). This is a common and repairable failure."
      }
    ],
    alternativeCauses: [
      "Failed power supply board",
      "Main board failure",
      "Damaged T-Con board"
    ],
    whenToCallPro: "If the power cycle doesn't fix it and you've confirmed the outlet works, the TV likely has a failed board. Board replacements cost $50-$150 at a repair shop. For TVs over 5 years old, compare repair cost to replacement.",
    metaTitle: "LG TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "lines-on-screen",
    problemTitle: "Lines on Screen",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement T-Con Board / Ribbon Cable",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your LG TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
    steps: [
      {
        number: 1,
        title: "Determine the line type",
        description: "Note whether lines are horizontal or vertical, colored or black, and whether they appear on all inputs. Take a photo. Horizontal lines across the full screen often point to a loose connection. Vertical lines may indicate panel failure."
      },
      {
        number: 2,
        title: "Power cycle the TV",
        description: "Unplug for 5 minutes. A software glitch can occasionally cause display artifacts that look like lines. If the lines disappear after a power cycle, it was a temporary issue."
      },
      {
        number: 3,
        title: "Gently press on the bezel edges",
        description: "With the TV on, gently press along the edges of the frame (not the screen itself). If lines change or disappear when you press, a ribbon cable connection is loose."
      },
      {
        number: 4,
        title: "Reseat ribbon cables",
        description: "Open the back panel (after unplugging and waiting). Locate the ribbon cables connecting the T-Con board to the panel. Carefully unlatch and reseat each cable. Corrosion or a loose fit is a common cause of lines."
      },
      {
        number: 5,
        title: "Replace the T-Con board",
        description: "If reseating cables doesn't help, the T-Con board itself may be faulty. It's an affordable part ($20-$50) and easy to swap — usually just 2-4 screws and a couple ribbon cables."
      }
    ],
    alternativeCauses: [
      "Physical damage to the LCD panel (drop or impact)",
      "Failed panel driver IC (often visible as lines from one edge)",
      "Electromagnetic interference from nearby devices"
    ],
    whenToCallPro: "If reseating cables and replacing the T-Con board doesn't fix the lines, the panel itself is likely damaged. Panel replacement usually costs more than a new TV — it's typically not worth repairing.",
    metaTitle: "LG TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "lg-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your LG TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "LG TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "picture-too-dark",
    problemTitle: "Picture Too Dark",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "None — settings adjustments only"
    ],
    partsNeeded: [],
    safetyWarnings: [],
    quickDiagnosis: "A dark picture on your LG TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
    steps: [
      {
        number: 1,
        title: "Turn off energy saver mode",
        description: "Go to Settings > General or System > Energy Saving / Eco Mode. Turn it off. Energy saver mode drastically dims the screen. This is the #1 cause of a too-dark picture and the most commonly overlooked setting."
      },
      {
        number: 2,
        title: "Increase backlight/brightness",
        description: "Go to Settings > Picture. Increase the Backlight setting (this is different from Brightness). Backlight controls how bright the LEDs behind the screen are. Set it to 80-100% for normal viewing."
      },
      {
        number: 3,
        title: "Check ambient light sensor",
        description: "Some TVs have a light sensor that auto-adjusts brightness based on room lighting. Find this in Picture > Advanced Settings > Ambient Light Detection and turn it off if your room is dark."
      },
      {
        number: 4,
        title: "Switch picture mode",
        description: "Change the picture mode from Cinema/Movie to Standard or Vivid. Cinema modes are intentionally dimmer for movie watching. Standard mode provides good brightness for everyday viewing."
      },
      {
        number: 5,
        title: "Reset picture settings",
        description: "If you've made too many adjustments, reset picture settings to factory defaults. Then just adjust the backlight up. Factory defaults are a good baseline for most viewing environments."
      }
    ],
    alternativeCauses: [
      "Failing LED backlight (if brightness settings don't help)",
      "HDMI content outputting in HDR that the TV can't handle",
      "Damaged dimming zones on local-dimming TVs"
    ],
    whenToCallPro: "If maxing out backlight and disabling energy saver doesn't help, the LED backlight may be failing. This is a hardware issue requiring professional repair ($100-$200). For older TVs, replacement may be more cost-effective.",
    metaTitle: "LG TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "lg-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "hdmi-not-working",
    problemTitle: "HDMI Not Working",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Compressed air",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement HDMI Cable",
        costRange: "$5-$15",
        amazonUrl: "https://www.amazon.com/s?k=LG%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your LG TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
    steps: [
      {
        number: 1,
        title: "Check the input source",
        description: "Make sure the TV is set to the correct HDMI input. Press the Source/Input button on your remote and select the HDMI port your device is connected to. TVs often have 2-4 HDMI ports."
      },
      {
        number: 2,
        title: "Reseat the HDMI cable",
        description: "Unplug the HDMI cable from both the TV and the source device. Wait 10 seconds. Plug it back in firmly on both ends. A slightly loose connection is one of the most common HDMI issues."
      },
      {
        number: 3,
        title: "Try a different HDMI cable",
        description: "Swap to a different HDMI cable. Cables can fail internally even without visible damage. Use a High Speed or Ultra High Speed HDMI cable for 4K content."
      },
      {
        number: 4,
        title: "Try a different HDMI port",
        description: "Plug the cable into a different HDMI port on the TV. If the other port works, the original port may be damaged or have a different HDMI version/capability."
      },
      {
        number: 5,
        title: "Power cycle both devices",
        description: "Unplug both the TV and the source device from power. Wait 2 minutes. Plug the TV in first and turn it on, then plug in and turn on the source device. This resets the HDCP handshake."
      }
    ],
    alternativeCauses: [
      "HDCP (copy protection) handshake failure",
      "Source device resolution higher than TV supports",
      "Damaged HDMI port pins"
    ],
    whenToCallPro: "If no HDMI ports work after trying multiple cables and devices, the HDMI controller on the main board may have failed. Board repair costs $80-$150. If only one port is damaged, using a different port is the easiest solution.",
    metaTitle: "LG TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your LG TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Sony TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Sony TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "no-picture-but-has-sound",
    problemTitle: "No Picture But Has Sound",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement LED Backlight Strips",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your Sony TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
    steps: [
      {
        number: 1,
        title: "Perform the flashlight test",
        description: "Turn the TV on, then shine a flashlight directly at the screen from a few inches away. Look closely — if you can see a faint image, the LED backlight has failed. This is the most common cause."
      },
      {
        number: 2,
        title: "Check HDMI connections",
        description: "Unplug and replug all HDMI cables. Try a different HDMI port. Try a different HDMI cable. A loose or faulty HDMI connection can cause a blank screen with audio still working."
      },
      {
        number: 3,
        title: "Try a different input source",
        description: "Switch to a different input (antenna, different HDMI, built-in apps). If some inputs show a picture and others don't, the issue is with that specific input rather than the display."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall (not just the remote power off). Hold the power button on the TV itself for 30 seconds. Wait 5 minutes, then plug back in and turn on. This drains residual power and resets the firmware."
      },
      {
        number: 5,
        title: "Check the T-Con board",
        description: "If the flashlight test shows no image at all, the T-Con (timing control) board may have failed. This board sits between the main board and the panel. Replacement T-Con boards are typically $20-$50."
      }
    ],
    alternativeCauses: [
      "Failed power supply board not providing enough voltage to the backlight",
      "Damaged panel ribbon cables",
      "Main board HDMI processor failure"
    ],
    whenToCallPro: "Backlight replacement requires opening the TV and handling LED strips behind the panel — it's risky for beginners. A professional can replace the backlight for $100-$200. Compare this to the cost of a new TV.",
    metaTitle: "Sony TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Sony TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Sony TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "remote-not-working",
    problemTitle: "Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Small Phillips screwdriver",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement Batteries / Remote",
        costRange: "$3-$15",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your Sony TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Replace the batteries",
        description: "Put in fresh, name-brand batteries. Even if you replaced them recently, try new ones — cheap batteries can die quickly. Make sure they're inserted in the correct orientation (+/-)."
      },
      {
        number: 2,
        title: "Clean the IR sensor",
        description: "Clean the IR emitter on the front tip of the remote with a cotton swab dipped in isopropyl alcohol. Also clean the IR receiver on the TV (usually a small dark spot on the bottom front edge)."
      },
      {
        number: 3,
        title: "Test the remote with your phone camera",
        description: "Point the remote at your phone's front camera and press a button. If the remote is working, you'll see a purple/white flash through the camera. If you see nothing, the remote is dead."
      },
      {
        number: 4,
        title: "Check for obstructions",
        description: "Make sure nothing is blocking the line of sight between the remote and the TV's IR sensor. Sound bars, decorations, or even a dirty sensor window can block the signal."
      },
      {
        number: 5,
        title: "Re-pair the remote (for Bluetooth/RF remotes)",
        description: "Some smart TV remotes use Bluetooth, not IR. Check your TV's settings for a \"Pair Remote\" option. Hold the pairing button on the remote (usually for 5+ seconds) to put it in pairing mode."
      }
    ],
    alternativeCauses: [
      "Battery contacts corroded inside the remote",
      "Button contacts worn out from heavy use",
      "TV's IR receiver board failed"
    ],
    whenToCallPro: "If a new remote doesn't work either, the TV's IR receiver board may be faulty. This is an inexpensive part ($10-$20) but requires opening the TV. A universal remote ($10-$15) is often the easiest solution.",
    metaTitle: "Sony TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "no-sound",
    problemTitle: "No Sound",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "None for basic troubleshooting"
    ],
    partsNeeded: [
      {
        name: "Replacement TV Speaker / Sound Bar",
        costRange: "$15-$30",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your Sony TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
    steps: [
      {
        number: 1,
        title: "Check the obvious settings",
        description: "Make sure the TV isn't muted (press Mute on the remote). Turn the volume all the way up. Check if the TV is set to output audio to external speakers that aren't connected."
      },
      {
        number: 2,
        title: "Check audio output settings",
        description: "Go to Settings > Audio/Sound. Make sure the output is set to \"TV Speakers\" and not \"External Speakers,\" \"ARC,\" or \"Optical.\" If you have a sound bar, make sure it's powered on and set to the correct input."
      },
      {
        number: 3,
        title: "Test different input sources",
        description: "Switch between HDMI inputs, antenna, and streaming apps. If some sources have sound and others don't, the issue is with that specific source, not the TV speakers."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall for 5 minutes. This resets the audio processor and clears software glitches. Press the power button on the TV while it's unplugged to drain residual power."
      },
      {
        number: 5,
        title: "Factory reset audio settings",
        description: "Go to Settings > Audio and reset to defaults. If that doesn't work, try a full factory reset (back up settings first). Corrupted audio settings are more common than speaker failure."
      }
    ],
    alternativeCauses: [
      "HDMI ARC/eARC cable not supporting audio pass-through",
      "Broadcast channel audio issue (not your TV)",
      "Internal speaker wire disconnected"
    ],
    whenToCallPro: "If the TV has no sound from any source after a factory reset, the internal speakers or audio processor board may have failed. Speaker replacement is usually $30-$60 at a repair shop. A sound bar ($30-$100) is often a more practical solution.",
    metaTitle: "Sony TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "black-screen",
    problemTitle: "Black Screen",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement Power Board / Main Board",
        costRange: "$20-$50",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your Sony TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
    steps: [
      {
        number: 1,
        title: "Hard power cycle",
        description: "Unplug the TV from the wall. Press and hold the power button on the TV (not the remote) for 30 seconds. Wait 5 full minutes. Plug back in and turn on. This resets the power supply and firmware."
      },
      {
        number: 2,
        title: "Check for standby light",
        description: "Look for the standby indicator light. If it's on, the TV has power. If it's off, check the outlet, try a different one. If the light blinks in a pattern, look up the blink code for your model."
      },
      {
        number: 3,
        title: "Flashlight test for backlight failure",
        description: "Turn the TV on and shine a flashlight at the screen. If you can see a faint image, the backlight has failed but the panel works. This is a common failure in TVs over 3 years old."
      },
      {
        number: 4,
        title: "Try different inputs",
        description: "Press the Source/Input button and cycle through all inputs. The TV might be set to an input with nothing connected. Try the TV's built-in smart apps to test if the panel works."
      },
      {
        number: 5,
        title: "Inspect for swollen capacitors",
        description: "If you're comfortable opening the back panel (after waiting 30+ minutes unplugged), visually inspect the power supply board for swollen or leaking capacitors (they'll have bulging tops). This is a common and repairable failure."
      }
    ],
    alternativeCauses: [
      "Failed power supply board",
      "Main board failure",
      "Damaged T-Con board"
    ],
    whenToCallPro: "If the power cycle doesn't fix it and you've confirmed the outlet works, the TV likely has a failed board. Board replacements cost $50-$150 at a repair shop. For TVs over 5 years old, compare repair cost to replacement.",
    metaTitle: "Sony TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "lines-on-screen",
    problemTitle: "Lines on Screen",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement T-Con Board / Ribbon Cable",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your Sony TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
    steps: [
      {
        number: 1,
        title: "Determine the line type",
        description: "Note whether lines are horizontal or vertical, colored or black, and whether they appear on all inputs. Take a photo. Horizontal lines across the full screen often point to a loose connection. Vertical lines may indicate panel failure."
      },
      {
        number: 2,
        title: "Power cycle the TV",
        description: "Unplug for 5 minutes. A software glitch can occasionally cause display artifacts that look like lines. If the lines disappear after a power cycle, it was a temporary issue."
      },
      {
        number: 3,
        title: "Gently press on the bezel edges",
        description: "With the TV on, gently press along the edges of the frame (not the screen itself). If lines change or disappear when you press, a ribbon cable connection is loose."
      },
      {
        number: 4,
        title: "Reseat ribbon cables",
        description: "Open the back panel (after unplugging and waiting). Locate the ribbon cables connecting the T-Con board to the panel. Carefully unlatch and reseat each cable. Corrosion or a loose fit is a common cause of lines."
      },
      {
        number: 5,
        title: "Replace the T-Con board",
        description: "If reseating cables doesn't help, the T-Con board itself may be faulty. It's an affordable part ($20-$50) and easy to swap — usually just 2-4 screws and a couple ribbon cables."
      }
    ],
    alternativeCauses: [
      "Physical damage to the LCD panel (drop or impact)",
      "Failed panel driver IC (often visible as lines from one edge)",
      "Electromagnetic interference from nearby devices"
    ],
    whenToCallPro: "If reseating cables and replacing the T-Con board doesn't fix the lines, the panel itself is likely damaged. Panel replacement usually costs more than a new TV — it's typically not worth repairing.",
    metaTitle: "Sony TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Sony TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Sony TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "picture-too-dark",
    problemTitle: "Picture Too Dark",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "None — settings adjustments only"
    ],
    partsNeeded: [],
    safetyWarnings: [],
    quickDiagnosis: "A dark picture on your Sony TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
    steps: [
      {
        number: 1,
        title: "Turn off energy saver mode",
        description: "Go to Settings > General or System > Energy Saving / Eco Mode. Turn it off. Energy saver mode drastically dims the screen. This is the #1 cause of a too-dark picture and the most commonly overlooked setting."
      },
      {
        number: 2,
        title: "Increase backlight/brightness",
        description: "Go to Settings > Picture. Increase the Backlight setting (this is different from Brightness). Backlight controls how bright the LEDs behind the screen are. Set it to 80-100% for normal viewing."
      },
      {
        number: 3,
        title: "Check ambient light sensor",
        description: "Some TVs have a light sensor that auto-adjusts brightness based on room lighting. Find this in Picture > Advanced Settings > Ambient Light Detection and turn it off if your room is dark."
      },
      {
        number: 4,
        title: "Switch picture mode",
        description: "Change the picture mode from Cinema/Movie to Standard or Vivid. Cinema modes are intentionally dimmer for movie watching. Standard mode provides good brightness for everyday viewing."
      },
      {
        number: 5,
        title: "Reset picture settings",
        description: "If you've made too many adjustments, reset picture settings to factory defaults. Then just adjust the backlight up. Factory defaults are a good baseline for most viewing environments."
      }
    ],
    alternativeCauses: [
      "Failing LED backlight (if brightness settings don't help)",
      "HDMI content outputting in HDR that the TV can't handle",
      "Damaged dimming zones on local-dimming TVs"
    ],
    whenToCallPro: "If maxing out backlight and disabling energy saver doesn't help, the LED backlight may be failing. This is a hardware issue requiring professional repair ($100-$200). For older TVs, replacement may be more cost-effective.",
    metaTitle: "Sony TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "hdmi-not-working",
    problemTitle: "HDMI Not Working",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Compressed air",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement HDMI Cable",
        costRange: "$5-$15",
        amazonUrl: "https://www.amazon.com/s?k=Sony%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your Sony TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
    steps: [
      {
        number: 1,
        title: "Check the input source",
        description: "Make sure the TV is set to the correct HDMI input. Press the Source/Input button on your remote and select the HDMI port your device is connected to. TVs often have 2-4 HDMI ports."
      },
      {
        number: 2,
        title: "Reseat the HDMI cable",
        description: "Unplug the HDMI cable from both the TV and the source device. Wait 10 seconds. Plug it back in firmly on both ends. A slightly loose connection is one of the most common HDMI issues."
      },
      {
        number: 3,
        title: "Try a different HDMI cable",
        description: "Swap to a different HDMI cable. Cables can fail internally even without visible damage. Use a High Speed or Ultra High Speed HDMI cable for 4K content."
      },
      {
        number: 4,
        title: "Try a different HDMI port",
        description: "Plug the cable into a different HDMI port on the TV. If the other port works, the original port may be damaged or have a different HDMI version/capability."
      },
      {
        number: 5,
        title: "Power cycle both devices",
        description: "Unplug both the TV and the source device from power. Wait 2 minutes. Plug the TV in first and turn it on, then plug in and turn on the source device. This resets the HDCP handshake."
      }
    ],
    alternativeCauses: [
      "HDCP (copy protection) handshake failure",
      "Source device resolution higher than TV supports",
      "Damaged HDMI port pins"
    ],
    whenToCallPro: "If no HDMI ports work after trying multiple cables and devices, the HDMI controller on the main board may have failed. Board repair costs $80-$150. If only one port is damaged, using a different port is the easiest solution.",
    metaTitle: "Sony TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "vizio-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
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
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Vizio TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Vizio TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "vizio-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "no-picture-but-has-sound",
    problemTitle: "No Picture But Has Sound",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement LED Backlight Strips",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your Vizio TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
    steps: [
      {
        number: 1,
        title: "Perform the flashlight test",
        description: "Turn the TV on, then shine a flashlight directly at the screen from a few inches away. Look closely — if you can see a faint image, the LED backlight has failed. This is the most common cause."
      },
      {
        number: 2,
        title: "Check HDMI connections",
        description: "Unplug and replug all HDMI cables. Try a different HDMI port. Try a different HDMI cable. A loose or faulty HDMI connection can cause a blank screen with audio still working."
      },
      {
        number: 3,
        title: "Try a different input source",
        description: "Switch to a different input (antenna, different HDMI, built-in apps). If some inputs show a picture and others don't, the issue is with that specific input rather than the display."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall (not just the remote power off). Hold the power button on the TV itself for 30 seconds. Wait 5 minutes, then plug back in and turn on. This drains residual power and resets the firmware."
      },
      {
        number: 5,
        title: "Check the T-Con board",
        description: "If the flashlight test shows no image at all, the T-Con (timing control) board may have failed. This board sits between the main board and the panel. Replacement T-Con boards are typically $20-$50."
      }
    ],
    alternativeCauses: [
      "Failed power supply board not providing enough voltage to the backlight",
      "Damaged panel ribbon cables",
      "Main board HDMI processor failure"
    ],
    whenToCallPro: "Backlight replacement requires opening the TV and handling LED strips behind the panel — it's risky for beginners. A professional can replace the backlight for $100-$200. Compare this to the cost of a new TV.",
    metaTitle: "Vizio TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "vizio-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
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
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Vizio TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Vizio TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "vizio-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "remote-not-working",
    problemTitle: "Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Small Phillips screwdriver",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement Batteries / Remote",
        costRange: "$3-$15",
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your Vizio TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Replace the batteries",
        description: "Put in fresh, name-brand batteries. Even if you replaced them recently, try new ones — cheap batteries can die quickly. Make sure they're inserted in the correct orientation (+/-)."
      },
      {
        number: 2,
        title: "Clean the IR sensor",
        description: "Clean the IR emitter on the front tip of the remote with a cotton swab dipped in isopropyl alcohol. Also clean the IR receiver on the TV (usually a small dark spot on the bottom front edge)."
      },
      {
        number: 3,
        title: "Test the remote with your phone camera",
        description: "Point the remote at your phone's front camera and press a button. If the remote is working, you'll see a purple/white flash through the camera. If you see nothing, the remote is dead."
      },
      {
        number: 4,
        title: "Check for obstructions",
        description: "Make sure nothing is blocking the line of sight between the remote and the TV's IR sensor. Sound bars, decorations, or even a dirty sensor window can block the signal."
      },
      {
        number: 5,
        title: "Re-pair the remote (for Bluetooth/RF remotes)",
        description: "Some smart TV remotes use Bluetooth, not IR. Check your TV's settings for a \"Pair Remote\" option. Hold the pairing button on the remote (usually for 5+ seconds) to put it in pairing mode."
      }
    ],
    alternativeCauses: [
      "Battery contacts corroded inside the remote",
      "Button contacts worn out from heavy use",
      "TV's IR receiver board failed"
    ],
    whenToCallPro: "If a new remote doesn't work either, the TV's IR receiver board may be faulty. This is an inexpensive part ($10-$20) but requires opening the TV. A universal remote ($10-$15) is often the easiest solution.",
    metaTitle: "Vizio TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "vizio-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "no-sound",
    problemTitle: "No Sound",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: [
      "None for basic troubleshooting"
    ],
    partsNeeded: [
      {
        name: "Replacement TV Speaker / Sound Bar",
        costRange: "$15-$30",
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your Vizio TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
    steps: [
      {
        number: 1,
        title: "Check the obvious settings",
        description: "Make sure the TV isn't muted (press Mute on the remote). Turn the volume all the way up. Check if the TV is set to output audio to external speakers that aren't connected."
      },
      {
        number: 2,
        title: "Check audio output settings",
        description: "Go to Settings > Audio/Sound. Make sure the output is set to \"TV Speakers\" and not \"External Speakers,\" \"ARC,\" or \"Optical.\" If you have a sound bar, make sure it's powered on and set to the correct input."
      },
      {
        number: 3,
        title: "Test different input sources",
        description: "Switch between HDMI inputs, antenna, and streaming apps. If some sources have sound and others don't, the issue is with that specific source, not the TV speakers."
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description: "Unplug the TV from the wall for 5 minutes. This resets the audio processor and clears software glitches. Press the power button on the TV while it's unplugged to drain residual power."
      },
      {
        number: 5,
        title: "Factory reset audio settings",
        description: "Go to Settings > Audio and reset to defaults. If that doesn't work, try a full factory reset (back up settings first). Corrupted audio settings are more common than speaker failure."
      }
    ],
    alternativeCauses: [
      "HDMI ARC/eARC cable not supporting audio pass-through",
      "Broadcast channel audio issue (not your TV)",
      "Internal speaker wire disconnected"
    ],
    whenToCallPro: "If the TV has no sound from any source after a factory reset, the internal speakers or audio processor board may have failed. Speaker replacement is usually $30-$60 at a repair shop. A sound bar ($30-$100) is often a more practical solution.",
    metaTitle: "Vizio TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "vizio-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "black-screen",
    problemTitle: "Black Screen",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver set"
    ],
    partsNeeded: [
      {
        name: "Replacement Power Board / Main Board",
        costRange: "$20-$50",
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your Vizio TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
    steps: [
      {
        number: 1,
        title: "Hard power cycle",
        description: "Unplug the TV from the wall. Press and hold the power button on the TV (not the remote) for 30 seconds. Wait 5 full minutes. Plug back in and turn on. This resets the power supply and firmware."
      },
      {
        number: 2,
        title: "Check for standby light",
        description: "Look for the standby indicator light. If it's on, the TV has power. If it's off, check the outlet, try a different one. If the light blinks in a pattern, look up the blink code for your model."
      },
      {
        number: 3,
        title: "Flashlight test for backlight failure",
        description: "Turn the TV on and shine a flashlight at the screen. If you can see a faint image, the backlight has failed but the panel works. This is a common failure in TVs over 3 years old."
      },
      {
        number: 4,
        title: "Try different inputs",
        description: "Press the Source/Input button and cycle through all inputs. The TV might be set to an input with nothing connected. Try the TV's built-in smart apps to test if the panel works."
      },
      {
        number: 5,
        title: "Inspect for swollen capacitors",
        description: "If you're comfortable opening the back panel (after waiting 30+ minutes unplugged), visually inspect the power supply board for swollen or leaking capacitors (they'll have bulging tops). This is a common and repairable failure."
      }
    ],
    alternativeCauses: [
      "Failed power supply board",
      "Main board failure",
      "Damaged T-Con board"
    ],
    whenToCallPro: "If the power cycle doesn't fix it and you've confirmed the outlet works, the TV likely has a failed board. Board replacements cost $50-$150 at a repair shop. For TVs over 5 years old, compare repair cost to replacement.",
    metaTitle: "Vizio TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "vizio-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "lines-on-screen",
    problemTitle: "Lines on Screen",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: [
      "Screwdriver set",
      "Microfiber cloth"
    ],
    partsNeeded: [
      {
        name: "Replacement T-Con Board / Ribbon Cable",
        costRange: "$15-$50",
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your Vizio TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
    steps: [
      {
        number: 1,
        title: "Determine the line type",
        description: "Note whether lines are horizontal or vertical, colored or black, and whether they appear on all inputs. Take a photo. Horizontal lines across the full screen often point to a loose connection. Vertical lines may indicate panel failure."
      },
      {
        number: 2,
        title: "Power cycle the TV",
        description: "Unplug for 5 minutes. A software glitch can occasionally cause display artifacts that look like lines. If the lines disappear after a power cycle, it was a temporary issue."
      },
      {
        number: 3,
        title: "Gently press on the bezel edges",
        description: "With the TV on, gently press along the edges of the frame (not the screen itself). If lines change or disappear when you press, a ribbon cable connection is loose."
      },
      {
        number: 4,
        title: "Reseat ribbon cables",
        description: "Open the back panel (after unplugging and waiting). Locate the ribbon cables connecting the T-Con board to the panel. Carefully unlatch and reseat each cable. Corrosion or a loose fit is a common cause of lines."
      },
      {
        number: 5,
        title: "Replace the T-Con board",
        description: "If reseating cables doesn't help, the T-Con board itself may be faulty. It's an affordable part ($20-$50) and easy to swap — usually just 2-4 screws and a couple ribbon cables."
      }
    ],
    alternativeCauses: [
      "Physical damage to the LCD panel (drop or impact)",
      "Failed panel driver IC (often visible as lines from one edge)",
      "Electromagnetic interference from nearby devices"
    ],
    whenToCallPro: "If reseating cables and replacing the T-Con board doesn't fix the lines, the panel itself is likely damaged. Panel replacement usually costs more than a new TV — it's typically not worth repairing.",
    metaTitle: "Vizio TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "vizio-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
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
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Vizio TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Vizio TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "vizio-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "picture-too-dark",
    problemTitle: "Picture Too Dark",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "None — settings adjustments only"
    ],
    partsNeeded: [],
    safetyWarnings: [],
    quickDiagnosis: "A dark picture on your Vizio TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
    steps: [
      {
        number: 1,
        title: "Turn off energy saver mode",
        description: "Go to Settings > General or System > Energy Saving / Eco Mode. Turn it off. Energy saver mode drastically dims the screen. This is the #1 cause of a too-dark picture and the most commonly overlooked setting."
      },
      {
        number: 2,
        title: "Increase backlight/brightness",
        description: "Go to Settings > Picture. Increase the Backlight setting (this is different from Brightness). Backlight controls how bright the LEDs behind the screen are. Set it to 80-100% for normal viewing."
      },
      {
        number: 3,
        title: "Check ambient light sensor",
        description: "Some TVs have a light sensor that auto-adjusts brightness based on room lighting. Find this in Picture > Advanced Settings > Ambient Light Detection and turn it off if your room is dark."
      },
      {
        number: 4,
        title: "Switch picture mode",
        description: "Change the picture mode from Cinema/Movie to Standard or Vivid. Cinema modes are intentionally dimmer for movie watching. Standard mode provides good brightness for everyday viewing."
      },
      {
        number: 5,
        title: "Reset picture settings",
        description: "If you've made too many adjustments, reset picture settings to factory defaults. Then just adjust the backlight up. Factory defaults are a good baseline for most viewing environments."
      }
    ],
    alternativeCauses: [
      "Failing LED backlight (if brightness settings don't help)",
      "HDMI content outputting in HDR that the TV can't handle",
      "Damaged dimming zones on local-dimming TVs"
    ],
    whenToCallPro: "If maxing out backlight and disabling energy saver doesn't help, the LED backlight may be failing. This is a hardware issue requiring professional repair ($100-$200). For older TVs, replacement may be more cost-effective.",
    metaTitle: "Vizio TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "vizio-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "hdmi-not-working",
    problemTitle: "HDMI Not Working",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [
      "Compressed air",
      "Isopropyl alcohol",
      "Cotton swabs"
    ],
    partsNeeded: [
      {
        name: "Replacement HDMI Cable",
        costRange: "$5-$15",
        amazonUrl: "https://www.amazon.com/s?k=Vizio%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Vizio%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your Vizio TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
    steps: [
      {
        number: 1,
        title: "Check the input source",
        description: "Make sure the TV is set to the correct HDMI input. Press the Source/Input button on your remote and select the HDMI port your device is connected to. TVs often have 2-4 HDMI ports."
      },
      {
        number: 2,
        title: "Reseat the HDMI cable",
        description: "Unplug the HDMI cable from both the TV and the source device. Wait 10 seconds. Plug it back in firmly on both ends. A slightly loose connection is one of the most common HDMI issues."
      },
      {
        number: 3,
        title: "Try a different HDMI cable",
        description: "Swap to a different HDMI cable. Cables can fail internally even without visible damage. Use a High Speed or Ultra High Speed HDMI cable for 4K content."
      },
      {
        number: 4,
        title: "Try a different HDMI port",
        description: "Plug the cable into a different HDMI port on the TV. If the other port works, the original port may be damaged or have a different HDMI version/capability."
      },
      {
        number: 5,
        title: "Power cycle both devices",
        description: "Unplug both the TV and the source device from power. Wait 2 minutes. Plug the TV in first and turn it on, then plug in and turn on the source device. This resets the HDCP handshake."
      }
    ],
    alternativeCauses: [
      "HDCP (copy protection) handshake failure",
      "Source device resolution higher than TV supports",
      "Damaged HDMI port pins"
    ],
    whenToCallPro: "If no HDMI ports work after trying multiple cables and devices, the HDMI controller on the main board may have failed. Board repair costs $80-$150. If only one port is damaged, using a different port is the easiest solution.",
    metaTitle: "Vizio TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Vizio TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  }
];
