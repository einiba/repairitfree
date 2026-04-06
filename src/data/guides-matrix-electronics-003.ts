import { Guide } from "@/lib/types";

export const matrixElectronicsGuides003: Guide[] = [
  {
    id: "tcl-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your TCL TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "TCL TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "tcl-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your TCL TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
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
    metaTitle: "TCL TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "tcl-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your TCL TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "TCL TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "tcl-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your TCL TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
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
    metaTitle: "TCL TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "tcl-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your TCL TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
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
    metaTitle: "TCL TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "tcl-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your TCL TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
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
    metaTitle: "TCL TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "tcl-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your TCL TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
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
    metaTitle: "TCL TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "tcl-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your TCL TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "TCL TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "tcl-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
    quickDiagnosis: "A dark picture on your TCL TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
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
    metaTitle: "TCL TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "tcl-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
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
        amazonUrl: "https://www.amazon.com/s?k=TCL%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=TCL%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your TCL TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
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
    metaTitle: "TCL TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your TCL TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hisense-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Hisense TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Hisense TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hisense-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your Hisense TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
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
    metaTitle: "Hisense TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hisense-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Hisense TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Hisense TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hisense-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your Hisense TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
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
    metaTitle: "Hisense TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hisense-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your Hisense TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
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
    metaTitle: "Hisense TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hisense-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your Hisense TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
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
    metaTitle: "Hisense TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hisense-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your Hisense TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
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
    metaTitle: "Hisense TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "hisense-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Hisense TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Hisense TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hisense-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
    quickDiagnosis: "A dark picture on your Hisense TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
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
    metaTitle: "Hisense TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "hisense-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Hisense",
    brandSlug: "hisense",
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
        amazonUrl: "https://www.amazon.com/s?k=Hisense%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Hisense%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your Hisense TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
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
    metaTitle: "Hisense TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Hisense TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "roku-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Roku TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Roku TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "roku-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your Roku TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
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
    metaTitle: "Roku TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "roku-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Roku TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Roku TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "roku-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your Roku TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
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
    metaTitle: "Roku TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "roku-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your Roku TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
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
    metaTitle: "Roku TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "roku-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your Roku TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
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
    metaTitle: "Roku TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "roku-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your Roku TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
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
    metaTitle: "Roku TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "roku-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Roku TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Roku TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "roku-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
    quickDiagnosis: "A dark picture on your Roku TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
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
    metaTitle: "Roku TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "roku-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
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
        amazonUrl: "https://www.amazon.com/s?k=Roku%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Roku%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your Roku TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
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
    metaTitle: "Roku TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Roku TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-tvs-won-t-turn-on",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Toshiba TV won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Toshiba TV Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-tvs-no-picture-but-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20LED%20backlight%20strips&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20LED%20backlight%20strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV from the wall before working on it.",
      "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
      "Wait at least 30 minutes after unplugging before opening the back panel."
    ],
    quickDiagnosis: "When your Toshiba TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.",
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
    metaTitle: "Toshiba TV No Picture But Has Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV no picture but has sound. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-tvs-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20replacement%20screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20replacement%20screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
      "Power off the device before inspecting any internal cables.",
      "Avoid pressing hard on a flickering screen — it can worsen the damage."
    ],
    quickDiagnosis: "A flickering screen on your Toshiba TV is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.",
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
    metaTitle: "Toshiba TV Screen Flickering: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV screen flickering. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-tvs-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20replacement%20remote&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20replacement%20remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Remove old batteries promptly if they show any signs of leaking or corrosion.",
      "Do not mix old and new batteries."
    ],
    quickDiagnosis: "A non-working remote for your Toshiba TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.",
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
    metaTitle: "Toshiba TV Remote Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV remote not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-tvs-no-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20replacement%20speaker&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20replacement%20speaker&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before inspecting internal speakers."
    ],
    quickDiagnosis: "No sound from your Toshiba TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.",
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
    metaTitle: "Toshiba TV No Sound: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV no sound. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-tvs-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20replacement%20power%20board&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20replacement%20power%20board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV completely before any inspection.",
      "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
      "Wait at least 30 minutes after unplugging before opening the back."
    ],
    quickDiagnosis: "A black screen on your Toshiba TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.",
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
    metaTitle: "Toshiba TV Black Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV black screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-tvs-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20T-Con%20board%20ribbon%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20T-Con%20board%20ribbon%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the TV before any hardware work.",
      "Handle ribbon cables very carefully — they tear easily.",
      "Do not press on the LCD/OLED panel — it can cause permanent damage."
    ],
    quickDiagnosis: "Lines on your Toshiba TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.",
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
    metaTitle: "Toshiba TV Lines on Screen: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV lines on screen. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "toshiba-tvs-wifi-not-connecting",
    category: "TVs",
    categorySlug: "tvs",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20wifi%20antenna%20card&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20wifi%20antenna%20card&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off the device before inspecting internal WiFi components."
    ],
    quickDiagnosis: "WiFi problems on your Toshiba TV are almost always software or router-related. A few quick resets will fix most connection issues.",
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
    metaTitle: "Toshiba TV WiFi Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV wifi not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-tvs-picture-too-dark",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
    quickDiagnosis: "A dark picture on your Toshiba TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.",
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
    metaTitle: "Toshiba TV Picture Too Dark: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV picture too dark. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "toshiba-tvs-hdmi-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Toshiba",
    brandSlug: "toshiba",
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
        amazonUrl: "https://www.amazon.com/s?k=Toshiba%20TV%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Toshiba%20TV%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — they only go in one way."
    ],
    quickDiagnosis: "HDMI issues on your Toshiba TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.",
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
    metaTitle: "Toshiba TV HDMI Not Working: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Toshiba TV hdmi not working. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps5-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Sony PS5 Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Sony PS5 Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps5-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Sony PS5 Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Sony PS5 Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps5-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Sony PS5 disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
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
    metaTitle: "Sony PS5 Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps5-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Sony PS5 controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
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
    metaTitle: "Sony PS5 Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps5-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Sony PS5 usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
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
    metaTitle: "Sony PS5 Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps5-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Sony PS5 means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
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
    metaTitle: "Sony PS5 Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps5-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Sony PS5 are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
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
    metaTitle: "Sony PS5 Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps5-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Sony PS5 are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
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
    metaTitle: "Sony PS5 Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps5-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Sony PS5 is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
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
    metaTitle: "Sony PS5 Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps5-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS5",
    brandSlug: "sony-ps5",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS5%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS5%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Sony PS5 is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
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
    metaTitle: "Sony PS5 Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS5 Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps4-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Sony PS4 Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Sony PS4 Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps4-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Sony PS4 Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Sony PS4 Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps4-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Sony PS4 disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
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
    metaTitle: "Sony PS4 Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps4-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Sony PS4 controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
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
    metaTitle: "Sony PS4 Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps4-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Sony PS4 usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
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
    metaTitle: "Sony PS4 Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps4-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Sony PS4 means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
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
    metaTitle: "Sony PS4 Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps4-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Sony PS4 are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
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
    metaTitle: "Sony PS4 Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps4-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Sony PS4 are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
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
    metaTitle: "Sony PS4 Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "sony-ps4-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Sony PS4 is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
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
    metaTitle: "Sony PS4 Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "sony-ps4-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony PS4",
    brandSlug: "sony-ps4",
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
        amazonUrl: "https://www.amazon.com/s?k=Sony%20PS4%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Sony%20PS4%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Sony PS4 is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
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
    metaTitle: "Sony PS4 Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Sony PS4 Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Microsoft Xbox Series X Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Microsoft Xbox Series X Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Microsoft Xbox Series X disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Microsoft Xbox Series X controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Microsoft Xbox Series X usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
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
    metaTitle: "Microsoft Xbox Series X Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Microsoft Xbox Series X means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Microsoft Xbox Series X are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
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
    metaTitle: "Microsoft Xbox Series X Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Microsoft Xbox Series X are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Microsoft Xbox Series X is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-series-x-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox Series X",
    brandSlug: "microsoft-xbox-series-x",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20Series%20X%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20Series%20X%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Microsoft Xbox Series X is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
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
    metaTitle: "Microsoft Xbox Series X Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox Series X Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-one-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Microsoft Xbox One Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Microsoft Xbox One Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-one-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Microsoft Xbox One Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Microsoft Xbox One Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-one-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Microsoft Xbox One disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
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
    metaTitle: "Microsoft Xbox One Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-one-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Microsoft Xbox One controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
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
    metaTitle: "Microsoft Xbox One Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-one-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Microsoft Xbox One usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
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
    metaTitle: "Microsoft Xbox One Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-one-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Microsoft Xbox One means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
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
    metaTitle: "Microsoft Xbox One Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-one-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Microsoft Xbox One are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
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
    metaTitle: "Microsoft Xbox One Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-one-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Microsoft Xbox One are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
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
    metaTitle: "Microsoft Xbox One Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "microsoft-xbox-one-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Microsoft Xbox One is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
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
    metaTitle: "Microsoft Xbox One Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "microsoft-xbox-one-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft Xbox One",
    brandSlug: "microsoft-xbox-one",
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
        amazonUrl: "https://www.amazon.com/s?k=Microsoft%20Xbox%20One%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Microsoft%20Xbox%20One%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Microsoft Xbox One is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
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
    metaTitle: "Microsoft Xbox One Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Microsoft Xbox One Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Nintendo Switch Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Nintendo Switch Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Nintendo Switch Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Nintendo Switch Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Nintendo Switch disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
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
    metaTitle: "Nintendo Switch Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Nintendo Switch controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
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
    metaTitle: "Nintendo Switch Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Nintendo Switch usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
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
    metaTitle: "Nintendo Switch Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Nintendo Switch means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
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
    metaTitle: "Nintendo Switch Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Nintendo Switch are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
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
    metaTitle: "Nintendo Switch Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Nintendo Switch are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
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
    metaTitle: "Nintendo Switch Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Nintendo Switch is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
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
    metaTitle: "Nintendo Switch Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch",
    brandSlug: "nintendo-switch",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Nintendo Switch is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
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
    metaTitle: "Nintendo Switch Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-lite-game-consoles-won-t-turn-on",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20charger%20power%20supply&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20charger%20power%20supply&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the device before opening any panels.",
      "If you smell burning or see scorch marks, stop immediately and consult a professional.",
      "Do not attempt to jump-start lithium batteries — they can catch fire."
    ],
    quickDiagnosis: "When your Nintendo Switch Lite Game Console won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.",
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
    metaTitle: "Nintendo Switch Lite Game Console Won't Turn On: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console won't turn on. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-lite-game-consoles-overheating",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20thermal%20paste%20cooling&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20thermal%20paste%20cooling&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Let the device cool down completely before working on it.",
      "Do not block air vents while the device is running.",
      "A device that is too hot to touch may have a swollen battery — handle with caution.",
      "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it."
    ],
    quickDiagnosis: "Your Nintendo Switch Lite Game Console overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.",
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
    metaTitle: "Nintendo Switch Lite Game Console Overheating: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console overheating. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-lite-game-consoles-disc-drive-not-reading",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20disc%20drive%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20disc%20drive%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Power off and unplug the console before opening it.",
      "Opening the console may void your warranty — check first.",
      "Do not touch the laser lens with your fingers."
    ],
    quickDiagnosis: "If your Nintendo Switch Lite disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.",
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
    metaTitle: "Nintendo Switch Lite Game Console Disc Drive Not Reading: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console disc drive not reading. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-lite-game-consoles-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20controller%20USB%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20controller%20USB%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Use only certified/original USB cables for controller pairing."
    ],
    quickDiagnosis: "When your Nintendo Switch Lite controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.",
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
    metaTitle: "Nintendo Switch Lite Game Console Controller Not Connecting: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console controller not connecting. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-lite-game-consoles-no-video-output",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20HDMI%20cable&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20HDMI%20cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not force HDMI cables — check orientation before pushing.",
      "Make sure the console is well-ventilated during use."
    ],
    quickDiagnosis: "No video output from your Nintendo Switch Lite usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.",
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
    metaTitle: "Nintendo Switch Lite Game Console No Video Output: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console no video output. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-lite-game-consoles-loud-fan-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20replacement%20fan%20thermal%20paste&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20replacement%20fan%20thermal%20paste&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Unplug the console and let it cool for 30 minutes before opening.",
      "Opening the console may void your warranty.",
      "Hold fan blades still when using compressed air."
    ],
    quickDiagnosis: "A loud fan on your Nintendo Switch Lite means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.",
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
    metaTitle: "Nintendo Switch Lite Game Console Loud Fan Noise: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console loud fan noise. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-lite-game-consoles-wifi-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20USB%20wifi%20adapter%20ethernet&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20USB%20wifi%20adapter%20ethernet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [],
    quickDiagnosis: "WiFi problems on your Nintendo Switch Lite are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.",
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
    metaTitle: "Nintendo Switch Lite Game Console WiFi Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console wifi issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-lite-game-consoles-charging-issues",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20charger%20cable%20replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20charger%20cable%20replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Do not use third-party chargers that are not certified for your device.",
      "If the device is hot while charging, disconnect immediately.",
      "A swollen battery is a fire hazard — stop using the device if you notice bulging."
    ],
    quickDiagnosis: "Charging problems with your Nintendo Switch Lite are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.",
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
    metaTitle: "Nintendo Switch Lite Game Console Charging Issues: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console charging issues. Step-by-step guide with parts and tools. Difficulty: Easy."
  },
  {
    id: "nintendo-switch-lite-game-consoles-freezing-crashing",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20thermal%20paste%20SSD&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20thermal%20paste%20SSD&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Always save your game progress when possible — crashes can corrupt save data.",
      "Let the device cool down if it freezes during heavy use."
    ],
    quickDiagnosis: "Freezing and crashing on your Nintendo Switch Lite is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.",
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
    metaTitle: "Nintendo Switch Lite Game Console Freezing and Crashing: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console freezing and crashing. Step-by-step guide with parts and tools. Difficulty: Medium."
  },
  {
    id: "nintendo-switch-lite-game-consoles-storage-full",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo Switch Lite",
    brandSlug: "nintendo-switch-lite",
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
        amazonUrl: "https://www.amazon.com/s?k=Nintendo%20Switch%20Lite%20Game%20Console%20external%20hard%20drive%20storage&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=Nintendo%20Switch%20Lite%20Game%20Console%20external%20hard%20drive%20storage&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1"
      }
    ],
    safetyWarnings: [
      "Back up important saves before deleting anything.",
      "Only use compatible external drives recommended for your device."
    ],
    quickDiagnosis: "Running out of storage on your Nintendo Switch Lite is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.",
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
    metaTitle: "Nintendo Switch Lite Game Console Storage Full: How to Fix | RepairItFree",
    metaDescription: "Learn how to fix your Nintendo Switch Lite Game Console storage full. Step-by-step guide with parts and tools. Difficulty: Easy."
  }
];
