#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Existing IDs – read from all guide TS files so we can skip duplicates
// ---------------------------------------------------------------------------
const srcData = path.join(__dirname, "..", "src", "data");
const existingIds = new Set();
fs.readdirSync(srcData)
  .filter((f) => f.startsWith("guides") && f.endsWith(".ts"))
  .forEach((f) => {
    const content = fs.readFileSync(path.join(srcData, f), "utf-8");
    const re = /id:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(content))) existingIds.add(m[1]);
  });

console.log(`Found ${existingIds.size} existing guide IDs`);

// ---------------------------------------------------------------------------
// Affiliate link helpers
// ---------------------------------------------------------------------------
const AMAZON_TAG = "repairitfree-20";
const EBAY_SUFFIX =
  "&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1";

function amazonUrl(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
function ebayUrl(query) {
  return `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}${EBAY_SUFFIX}`;
}

// ---------------------------------------------------------------------------
// Slug helper
// ---------------------------------------------------------------------------
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ---------------------------------------------------------------------------
// Symptom content templates (device-category aware)
// ---------------------------------------------------------------------------
function getSymptomContent(category, brand, symptom) {
  const brandLower = brand.toLowerCase();
  const searchPrefix = `${brand} ${category.replace(/s$/, "")}`;
  const key = symptom.toLowerCase();

  const templates = {
    "won't turn on": {
      problemTitle: "Won't Turn On",
      difficulty: "Medium",
      timeEstimate: "15-45 minutes",
      costEstimate: "$0-$30",
      toolsNeeded: ["Multimeter (optional)", "Screwdriver set", "Flashlight"],
      partsNeeded: [
        {
          name: "Replacement Power Supply / Charger",
          costRange: "$10-$30",
          amazonUrl: amazonUrl(`${searchPrefix} charger power supply`),
          ebayUrl: ebayUrl(`${searchPrefix} charger power supply`),
        },
      ],
      safetyWarnings: [
        "Unplug the device before opening any panels.",
        "If you smell burning or see scorch marks, stop immediately and consult a professional.",
        "Do not attempt to jump-start lithium batteries — they can catch fire.",
      ],
      quickDiagnosis: `When your ${brand} ${category.replace(/s$/, "")} won't turn on, it's usually a drained battery, faulty charger, or a software crash. Start with the simplest checks before assuming the worst.`,
      steps: [
        { number: 1, title: "Check the power source", description: `Make sure your charger and cable are working. Try a different outlet or USB port. Inspect the cable for fraying or damage. Borrow a known-good charger if possible.` },
        { number: 2, title: "Perform a hard reset", description: `Hold down the power button for 15-30 seconds. On some devices you may need to hold power + volume down simultaneously. This forces a restart even if the screen is completely black.` },
        { number: 3, title: "Charge for at least 30 minutes", description: `If the battery is completely dead, the device may not respond immediately. Plug it in and wait at least 30 minutes before trying to turn it on again. Look for any charging indicator light.` },
        { number: 4, title: "Inspect the charging port", description: `Use a flashlight to look inside the charging port for lint, debris, or bent pins. Gently clean with a wooden toothpick if needed. A clogged port is one of the most common reasons a device appears dead.` },
        { number: 5, title: "Try an alternate boot method", description: `Try booting into safe mode or recovery mode. This varies by device — typically hold power + volume up/down during startup. If the device boots in recovery mode, the hardware is fine and the issue is software-related.` },
      ],
      alternativeCauses: [
        "Swollen or degraded battery that can no longer hold charge",
        "Liquid damage causing a short circuit",
        "Failed motherboard or logic board component",
      ],
      whenToCallPro: `If the device won't respond to any button combination, won't charge at all, and you've tried multiple chargers, the issue is likely a dead battery or motherboard failure. Professional repair typically costs $50-$200 depending on the device.`,
    },

    "screen flickering": {
      problemTitle: "Screen Flickering",
      difficulty: "Medium",
      timeEstimate: "10-30 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["Screwdriver set (if opening device)", "Microfiber cloth"],
      partsNeeded: [
        {
          name: "Replacement Display Cable / Screen",
          costRange: "$15-$50",
          amazonUrl: amazonUrl(`${searchPrefix} replacement screen`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement screen`),
        },
      ],
      safetyWarnings: [
        "If the screen has visible cracks, handle carefully to avoid cutting yourself.",
        "Power off the device before inspecting any internal cables.",
        "Avoid pressing hard on a flickering screen — it can worsen the damage.",
      ],
      quickDiagnosis: `A flickering screen on your ${brand} ${category.replace(/s$/, "")} is usually caused by a loose display cable, software glitch, or failing backlight. Software fixes resolve this about 40% of the time.`,
      steps: [
        { number: 1, title: "Restart the device", description: `A simple restart can resolve software glitches causing screen flicker. Power off completely, wait 10 seconds, then power back on. This clears temporary display driver issues.` },
        { number: 2, title: "Adjust display settings", description: `Go to Settings > Display and try adjusting brightness, turning off auto-brightness, and changing the refresh rate if available. Adaptive brightness can sometimes cause flickering on certain models.` },
        { number: 3, title: "Boot into safe mode", description: `Boot in safe mode to determine if a third-party app is causing the flicker. If the flickering stops in safe mode, a recently installed app is likely the culprit. Uninstall recent apps one by one.` },
        { number: 4, title: "Update or reset software", description: `Check for system updates — manufacturers often release fixes for display issues. If updating doesn't help, try a factory reset as a last software step (back up your data first).` },
        { number: 5, title: "Check for hardware damage", description: `If software fixes don't work, the display cable may be loose or the screen itself may be failing. Gently press around the edges of the screen — if pressing affects the flicker, it's likely a loose connection. This typically requires professional repair.` },
      ],
      alternativeCauses: [
        "Water or moisture damage affecting the display connector",
        "GPU or graphics chip beginning to fail",
        "Incompatible screen protector interfering with display",
      ],
      whenToCallPro: `If the flickering persists after a factory reset and happens in safe mode, the screen or display cable likely needs replacement. Professional screen replacement runs $50-$250 depending on the device and model.`,
    },

    "battery draining fast": {
      problemTitle: "Battery Draining Fast",
      difficulty: "Easy",
      timeEstimate: "10-20 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["None (software fixes)", "Pentalobe/Torx screwdriver (if replacing battery)"],
      partsNeeded: [
        {
          name: "Replacement Battery",
          costRange: "$15-$50",
          amazonUrl: amazonUrl(`${searchPrefix} replacement battery`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement battery`),
        },
      ],
      safetyWarnings: [
        "If the battery is visibly swollen (device bulging), stop using it immediately and do not charge it.",
        "Swollen lithium batteries can catch fire — handle with extreme care.",
        "Never puncture or bend a lithium battery.",
      ],
      quickDiagnosis: `Rapid battery drain on your ${brand} ${category.replace(/s$/, "")} is usually caused by background apps, poor signal, or a degraded battery. Software tweaks fix this most of the time.`,
      steps: [
        { number: 1, title: "Check battery health", description: `Go to Settings > Battery (or Battery Health) and check the battery's maximum capacity. If it's below 80%, the battery is degraded and may need replacement. This is the single most important diagnostic step.` },
        { number: 2, title: "Identify battery-hogging apps", description: `In Settings > Battery, look at which apps are using the most battery. Close or uninstall apps that are draining excessively. Social media and navigation apps are common culprits.` },
        { number: 3, title: "Reduce background activity", description: `Turn off background app refresh for non-essential apps. Disable location services for apps that don't need it. Turn off push email and switch to manual fetch.` },
        { number: 4, title: "Optimize display settings", description: `Lower screen brightness, enable auto-brightness, reduce screen timeout to 30 seconds, and use dark mode if your device has an OLED screen. The display is typically the #1 battery consumer.` },
        { number: 5, title: "Reset settings if needed", description: `If drain persists, reset all settings (this won't delete your data, just preferences). If that doesn't help, back up and factory reset as a last resort before considering battery replacement.` },
      ],
      alternativeCauses: [
        "Poor cellular signal causing the radio to work harder",
        "A recent software update introducing a battery bug",
        "Malfunctioning sensor keeping the device awake",
      ],
      whenToCallPro: `If your battery health is below 80% or the device is more than 2 years old, the battery likely needs physical replacement. Manufacturer battery replacement costs $50-$100. Third-party repair shops charge $30-$60.`,
    },

    "not charging": {
      problemTitle: "Not Charging",
      difficulty: "Easy",
      timeEstimate: "10-20 minutes",
      costEstimate: "$0-$25",
      toolsNeeded: ["Wooden toothpick or plastic spudger", "Flashlight", "Compressed air (optional)"],
      partsNeeded: [
        {
          name: "Replacement Charging Cable",
          costRange: "$8-$20",
          amazonUrl: amazonUrl(`${searchPrefix} charging cable`),
          ebayUrl: ebayUrl(`${searchPrefix} charging cable`),
        },
      ],
      safetyWarnings: [
        "Use only a wooden or plastic tool to clean the charging port — never metal.",
        "If you see liquid in the port, let the device dry completely before charging.",
        "Do not force a cable into a damaged port.",
      ],
      quickDiagnosis: `When your ${brand} ${category.replace(/s$/, "")} won't charge, the most common cause is debris in the charging port or a bad cable. Cleaning the port fixes this about 70% of the time.`,
      steps: [
        { number: 1, title: "Try a different cable and charger", description: `Before anything else, try a known-good cable and power adapter. Cables wear out, especially near the connector. This is the fastest way to rule out accessories as the problem.` },
        { number: 2, title: "Clean the charging port", description: `Shine a flashlight into the charging port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape along the back of the port. You'll be surprised how much comes out — this is the #1 fix.` },
        { number: 3, title: "Try a different power source", description: `Try a wall outlet instead of a computer USB port (more power). Try a different wall outlet. If using a power strip, plug directly into the wall to rule out the strip.` },
        { number: 4, title: "Perform a hard reset", description: `Sometimes a software glitch prevents the device from recognizing the charger. Do a hard reset by holding the power button for 15-30 seconds (or power + volume down on some devices). Then try charging again.` },
        { number: 5, title: "Check for water damage", description: `If the device got wet recently, it may refuse to charge as a safety feature. Let it dry completely in a warm, dry place for 24-48 hours. Do not use a hair dryer or put it in rice.` },
      ],
      alternativeCauses: [
        "Worn out or oxidized charging port contacts",
        "Damaged battery that can no longer accept a charge",
        "Faulty charge controller chip on the motherboard",
      ],
      whenToCallPro: `If cleaning the port and trying multiple cables doesn't work, the charging port or battery may need replacement. Port replacement costs $40-$80 at most repair shops.`,
    },

    "speaker not working": {
      problemTitle: "Speaker Not Working",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0-$30",
      toolsNeeded: ["Soft brush or toothbrush", "Compressed air (optional)"],
      partsNeeded: [
        {
          name: "Replacement Speaker",
          costRange: "$10-$30",
          amazonUrl: amazonUrl(`${searchPrefix} replacement speaker`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement speaker`),
        },
      ],
      safetyWarnings: [
        "Do not blow compressed air directly into the speaker at close range — it can damage the membrane.",
        "Power off before cleaning speaker grilles.",
      ],
      quickDiagnosis: `No sound from your ${brand} ${category.replace(/s$/, "")}? Most of the time it's a software setting, Bluetooth connection, or debris blocking the speaker grille. Hardware speaker failure is less common.`,
      steps: [
        { number: 1, title: "Check volume and mute settings", description: `Make sure the device isn't muted or on Do Not Disturb. Turn the volume all the way up. Check if the ringer/silent switch (if present) is in the right position.` },
        { number: 2, title: "Disconnect Bluetooth", description: `Your device may be sending audio to a Bluetooth speaker or headphones. Go to Settings > Bluetooth and disconnect all audio devices. Also check if headphone mode is stuck on.` },
        { number: 3, title: "Clean the speaker grille", description: `Use a soft brush or toothbrush to gently clean the speaker grille openings. Dust and pocket lint can muffle or block sound. A few short bursts of compressed air can help too.` },
        { number: 4, title: "Test with different apps", description: `Try playing audio from different apps — music, videos, ringtone. If sound works in some apps but not others, it's an app-specific setting, not a hardware issue.` },
        { number: 5, title: "Restart and reset", description: `Restart the device. If that doesn't work, reset all settings (this won't delete data). If sound still doesn't work, try booting in safe mode to rule out third-party apps.` },
      ],
      alternativeCauses: [
        "Water damage causing corrosion on speaker contacts",
        "Headphone jack debris making the device think headphones are plugged in",
        "Software bug after a recent update",
      ],
      whenToCallPro: `If none of the software fixes work, the speaker itself is likely blown or disconnected. Speaker replacement is typically $30-$60 at a repair shop.`,
    },

    "camera not working": {
      problemTitle: "Camera Not Working",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["Microfiber cloth", "Screwdriver set (if replacing camera)"],
      partsNeeded: [
        {
          name: "Replacement Camera Module",
          costRange: "$15-$50",
          amazonUrl: amazonUrl(`${searchPrefix} replacement camera`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement camera`),
        },
      ],
      safetyWarnings: [
        "Power off the device before attempting any camera hardware inspection.",
        "Do not use sharp objects near the camera lens.",
      ],
      quickDiagnosis: `If the camera on your ${brand} ${category.replace(/s$/, "")} shows a black screen, blurry image, or won't open, it's usually a software issue or dirty lens. Hardware camera failure is less common but does happen.`,
      steps: [
        { number: 1, title: "Force close and reopen the camera app", description: `Close the camera app completely (swipe it away from recent apps). Wait a few seconds, then reopen it. A stuck camera process is the most common cause of a black viewfinder.` },
        { number: 2, title: "Clean the camera lens", description: `Wipe the camera lens with a microfiber cloth. Check for fingerprints, smudges, or a case that's partially blocking the lens. Even a thin film of oil can cause blurry photos.` },
        { number: 3, title: "Check app permissions", description: `Go to Settings > Apps > Camera and make sure camera permissions are enabled. If you recently updated the OS, permissions may have been reset.` },
        { number: 4, title: "Restart the device", description: `A full restart clears the camera hardware connection. Power off completely, wait 10 seconds, then power back on. Try both front and rear cameras to isolate the problem.` },
        { number: 5, title: "Reset or update software", description: `Check for system updates that may contain camera fixes. If the camera still doesn't work, try a factory reset (back up first). If it fails even after a reset, the camera module is likely faulty.` },
      ],
      alternativeCauses: [
        "Third-party camera app conflicting with the hardware",
        "Lens crack or internal condensation from water exposure",
        "Loose ribbon cable connecting camera to motherboard",
      ],
      whenToCallPro: `If the camera doesn't work even after a factory reset, the camera module or its flex cable needs replacement. This typically costs $40-$100 at a repair shop depending on the device.`,
    },

    overheating: {
      problemTitle: "Overheating",
      difficulty: "Easy",
      timeEstimate: "10-30 minutes",
      costEstimate: "$0-$20",
      toolsNeeded: ["Compressed air", "Soft brush", "Thermal paste (for laptops/consoles)"],
      partsNeeded: [
        {
          name: "Thermal Paste / Cooling Pad",
          costRange: "$5-$20",
          amazonUrl: amazonUrl(`${searchPrefix} thermal paste cooling`),
          ebayUrl: ebayUrl(`${searchPrefix} thermal paste cooling`),
        },
      ],
      safetyWarnings: [
        "Let the device cool down completely before working on it.",
        "Do not block air vents while the device is running.",
        "A device that is too hot to touch may have a swollen battery — handle with caution.",
        "Overheated lithium batteries can be a fire hazard. If the device is bulging, stop using it.",
      ],
      quickDiagnosis: `Your ${brand} ${category.replace(/s$/, "")} overheating is typically caused by heavy usage, blocked vents, or too many background processes. Cleaning vents and reducing load usually fixes it.`,
      steps: [
        { number: 1, title: "Close resource-heavy apps", description: `Close all apps running in the background. Games, video streaming, and GPS navigation generate the most heat. Let the device rest for a few minutes in a cool area.` },
        { number: 2, title: "Remove the case", description: `Protective cases trap heat. Remove your case and see if the device cools down. If it does, consider switching to a thinner case or one with better ventilation.` },
        { number: 3, title: "Clean air vents and fans", description: `Use compressed air to blow out dust from vents and fan openings. Dust buildup is the #1 cause of overheating in laptops and consoles. Hold the fan blade still while blowing air to avoid damaging it.` },
        { number: 4, title: "Check for software issues", description: `Update your operating system and apps. Check for runaway processes using a task manager or battery usage screen. A misbehaving app can pin the CPU at 100% and generate excessive heat.` },
        { number: 5, title: "Improve airflow", description: `Make sure the device has adequate ventilation. Don't use laptops on soft surfaces like beds or pillows. Keep consoles in open areas, not inside enclosed cabinets. Consider a cooling pad or stand.` },
      ],
      alternativeCauses: [
        "Degraded thermal paste between the CPU and heatsink (laptops, consoles)",
        "Failed cooling fan",
        "Swollen battery generating excess heat",
      ],
      whenToCallPro: `If cleaning vents and reducing load doesn't help, the thermal paste may need replacing or the cooling fan may be failing. A professional can re-paste and inspect the cooling system for $30-$80.`,
    },

    "wifi not connecting": {
      problemTitle: "WiFi Not Connecting",
      difficulty: "Easy",
      timeEstimate: "5-20 minutes",
      costEstimate: "$0-$20",
      toolsNeeded: ["None (software fixes)", "Screwdriver (if replacing WiFi card)"],
      partsNeeded: [
        {
          name: "WiFi Antenna / Card",
          costRange: "$8-$20",
          amazonUrl: amazonUrl(`${searchPrefix} wifi antenna card`),
          ebayUrl: ebayUrl(`${searchPrefix} wifi antenna card`),
        },
      ],
      safetyWarnings: [
        "Power off the device before inspecting internal WiFi components.",
      ],
      quickDiagnosis: `WiFi problems on your ${brand} ${category.replace(/s$/, "")} are almost always software or router-related. A few quick resets will fix most connection issues.`,
      steps: [
        { number: 1, title: "Toggle WiFi off and on", description: `Turn WiFi off, wait 10 seconds, then turn it back on. This forces the device to re-scan for networks. Also toggle Airplane Mode on and off — this resets all wireless radios.` },
        { number: 2, title: "Restart your device and router", description: `Restart your device first. Then unplug your router for 30 seconds and plug it back in. Wait 2-3 minutes for the router to fully boot. This fixes the majority of WiFi issues.` },
        { number: 3, title: "Forget and reconnect to the network", description: `Go to WiFi settings, tap on your network, and choose "Forget." Then reconnect by entering the password fresh. Saved network profiles can become corrupted.` },
        { number: 4, title: "Reset network settings", description: `Go to Settings > General > Reset > Reset Network Settings (location varies by device). This clears all saved WiFi passwords and network configurations but often fixes persistent connection issues.` },
        { number: 5, title: "Check for interference", description: `Move closer to the router to rule out range issues. Other devices, microwaves, and thick walls can interfere with WiFi. Try connecting to the 5GHz band if available — it's faster but has shorter range.` },
      ],
      alternativeCauses: [
        "Router firmware needs updating",
        "Too many devices connected to the router",
        "Damaged WiFi antenna inside the device",
      ],
      whenToCallPro: `If the device can't see any WiFi networks at all (not just yours), the internal WiFi antenna or chip may be damaged. Repair typically costs $40-$80.`,
    },

    "microphone not working": {
      problemTitle: "Microphone Not Working",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0-$25",
      toolsNeeded: ["Soft brush", "Compressed air"],
      partsNeeded: [
        {
          name: "Replacement Microphone",
          costRange: "$8-$25",
          amazonUrl: amazonUrl(`${searchPrefix} replacement microphone`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement microphone`),
        },
      ],
      safetyWarnings: [
        "Do not insert anything into the microphone hole.",
        "Be gentle when cleaning around microphone openings.",
      ],
      quickDiagnosis: `Microphone issues on your ${brand} ${category.replace(/s$/, "")} are usually caused by blocked microphone holes, app permission issues, or Bluetooth routing audio to a connected device.`,
      steps: [
        { number: 1, title: "Check microphone permissions", description: `Go to Settings > Privacy > Microphone and make sure the app you're trying to use has microphone access. This is the most overlooked cause of mic issues.` },
        { number: 2, title: "Clean the microphone opening", description: `Find the microphone pinhole (usually on the bottom edge or near the camera). Gently brush away any debris. Use a short burst of compressed air from a distance. Cases sometimes cover the mic hole.` },
        { number: 3, title: "Disconnect Bluetooth devices", description: `Bluetooth headsets and speakers can hijack the microphone input. Disconnect all Bluetooth audio devices and try again.` },
        { number: 4, title: "Test with a voice recording app", description: `Open the built-in voice recorder and record a short clip. Play it back. If you can hear yourself, the mic hardware is fine and the issue is app-specific. Try the mic in a phone call too.` },
        { number: 5, title: "Restart and reset", description: `Restart the device. If the mic still doesn't work in any app, reset all settings. If it still fails, the microphone hardware may need replacement.` },
      ],
      alternativeCauses: [
        "Water damage causing corrosion on the microphone",
        "Screen protector or case blocking the microphone hole",
        "Noise cancellation feature malfunction",
      ],
      whenToCallPro: `If the microphone doesn't work in any app after cleaning and resetting, it likely needs physical replacement. Mic replacement costs $25-$60 at most repair shops.`,
    },

    "touchscreen not responding": {
      problemTitle: "Touchscreen Not Responding",
      difficulty: "Medium",
      timeEstimate: "10-30 minutes",
      costEstimate: "$0-$80",
      toolsNeeded: ["Microfiber cloth", "Screwdriver set (if replacing digitizer)"],
      partsNeeded: [
        {
          name: "Replacement Digitizer / Screen Assembly",
          costRange: "$30-$80",
          amazonUrl: amazonUrl(`${searchPrefix} replacement touchscreen digitizer`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement touchscreen digitizer`),
        },
      ],
      safetyWarnings: [
        "If the screen is cracked, cover it with clear tape before handling to prevent cuts.",
        "Power off the device before attempting any hardware fixes.",
      ],
      quickDiagnosis: `An unresponsive touchscreen on your ${brand} ${category.replace(/s$/, "")} can be caused by a screen protector, software freeze, or damaged digitizer. Software fixes work about 50% of the time.`,
      steps: [
        { number: 1, title: "Clean the screen", description: `Wipe the screen thoroughly with a microfiber cloth. Oils, moisture, and dirt can interfere with touch sensitivity. Make sure your fingers are clean and dry as well.` },
        { number: 2, title: "Remove the screen protector", description: `If you have a screen protector, remove it and test. Cheap or poorly fitted screen protectors are a very common cause of touch issues, especially bubbles and lifted edges.` },
        { number: 3, title: "Force restart the device", description: `Hold power + volume down for 15-30 seconds to force a restart. If the device is frozen, a force restart clears the freeze and restores touch function.` },
        { number: 4, title: "Boot into safe mode", description: `Boot in safe mode to test if a third-party app is causing the problem. If touch works in safe mode, uninstall recent apps until the issue resolves.` },
        { number: 5, title: "Factory reset as last resort", description: `If nothing else works, back up your data and perform a factory reset. If the touchscreen still doesn't work after a reset, the digitizer is damaged and needs physical replacement.` },
      ],
      alternativeCauses: [
        "Extreme temperature affecting touch sensor accuracy",
        "Water damage corroding touch sensor connections",
        "Dropped device causing digitizer flex cable to disconnect",
      ],
      whenToCallPro: `If the touchscreen doesn't respond after a factory reset and with the screen protector removed, the digitizer needs replacement. This costs $50-$200 depending on the device model.`,
    },

    "battery not charging": {
      problemTitle: "Battery Not Charging",
      difficulty: "Easy",
      timeEstimate: "10-25 minutes",
      costEstimate: "$0-$30",
      toolsNeeded: ["Wooden toothpick", "Flashlight", "Compressed air"],
      partsNeeded: [
        {
          name: "Replacement Charger / Battery",
          costRange: "$15-$30",
          amazonUrl: amazonUrl(`${searchPrefix} charger battery`),
          ebayUrl: ebayUrl(`${searchPrefix} charger battery`),
        },
      ],
      safetyWarnings: [
        "If the battery is visibly swollen, stop charging immediately and do not use the device.",
        "Use only manufacturer-approved or certified chargers.",
        "Never leave a device charging unattended on flammable surfaces.",
      ],
      quickDiagnosis: `Your ${brand} ${category.replace(/s$/, "")} not charging is most likely due to a faulty charger, dirty charging port, or degraded battery. Simple troubleshooting fixes this 80% of the time.`,
      steps: [
        { number: 1, title: "Test with a different charger and cable", description: `Use a known-good charger and cable. Cables are the most common failure point. Try charging from a wall adapter rather than USB — wall adapters deliver more consistent power.` },
        { number: 2, title: "Clean the charging port", description: `Use a flashlight to inspect the port. Carefully remove lint and debris with a wooden toothpick. Compressed air helps too. A clogged port prevents the cable from making proper contact.` },
        { number: 3, title: "Check for software issues", description: `Restart the device. Check battery settings for any warnings or calibration issues. Some devices stop charging at a certain percentage to preserve battery life — check if this feature is enabled.` },
        { number: 4, title: "Try charging while powered off", description: `Power off the device completely and then plug in the charger. If it charges while off but not while on, a background process is draining power faster than the charger can deliver it.` },
        { number: 5, title: "Inspect for physical damage", description: `Look at the charging port for bent pins, corrosion, or damage. Check the battery compartment (if accessible) for swelling. A visibly swollen battery must be replaced immediately.` },
      ],
      alternativeCauses: [
        "Faulty wall outlet or power strip",
        "Power management IC failure on the motherboard",
        "Corroded battery contacts",
      ],
      whenToCallPro: `If multiple chargers don't work and the port is clean, the charging port or battery likely needs replacement. Expect to pay $40-$100 for port replacement, $30-$80 for battery replacement.`,
    },

    "keyboard not working": {
      problemTitle: "Keyboard Not Working",
      difficulty: "Medium",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["Compressed air", "Screwdriver set", "Isopropyl alcohol"],
      partsNeeded: [
        {
          name: "Replacement Keyboard",
          costRange: "$20-$50",
          amazonUrl: amazonUrl(`${searchPrefix} replacement keyboard`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement keyboard`),
        },
      ],
      safetyWarnings: [
        "Disconnect the laptop from power and remove the battery (if removable) before working on the keyboard.",
        "Avoid spilling any liquids near the keyboard area.",
      ],
      quickDiagnosis: `Keyboard problems on your ${brand} ${category.replace(/s$/, "")} are usually caused by debris under the keys, driver issues, or a loose ribbon cable connection. Start with cleaning before assuming you need a replacement.`,
      steps: [
        { number: 1, title: "Restart and check for driver issues", description: `Restart the device. Check Device Manager (Windows) or System Preferences (Mac) for keyboard driver warnings. Update or reinstall keyboard drivers if needed.` },
        { number: 2, title: "Check for stuck keys", description: `Look for keys that are physically stuck down or feel different. A single stuck key can prevent other keys from registering. Gently pry up the affected keycap and clean underneath.` },
        { number: 3, title: "Clean with compressed air", description: `Tilt the device at a 75-degree angle and spray compressed air between the keys in a left-to-right motion. Rotate and repeat. This dislodges crumbs and debris that prevent key presses.` },
        { number: 4, title: "Try an external keyboard", description: `Plug in an external USB keyboard. If it works perfectly, the issue is with the built-in keyboard hardware, not software. This helps isolate the problem.` },
        { number: 5, title: "Check the ribbon cable", description: `If you're comfortable opening the device, check that the keyboard ribbon cable is firmly seated in its connector on the motherboard. A loose cable is a common cause after drops or repairs.` },
      ],
      alternativeCauses: [
        "Liquid spill causing sticky or dead keys",
        "Failed keyboard controller chip",
        "Accessibility settings filtering key presses (Sticky Keys, Filter Keys)",
      ],
      whenToCallPro: `If cleaning and reseating the cable doesn't fix it, the keyboard assembly likely needs replacement. Laptop keyboard replacement typically costs $50-$150 at a repair shop.`,
    },

    "blue screen": {
      problemTitle: "Blue Screen (BSOD)",
      difficulty: "Medium",
      timeEstimate: "20-60 minutes",
      costEstimate: "$0-$40",
      toolsNeeded: ["USB drive (for recovery)", "Screwdriver set (if checking RAM/SSD)"],
      partsNeeded: [
        {
          name: "Replacement RAM / SSD",
          costRange: "$20-$40",
          amazonUrl: amazonUrl(`${searchPrefix} RAM memory upgrade`),
          ebayUrl: ebayUrl(`${searchPrefix} RAM memory upgrade`),
        },
      ],
      safetyWarnings: [
        "Back up important data as soon as possible — blue screens can indicate impending drive failure.",
        "Use an anti-static wrist strap when handling RAM or storage drives.",
      ],
      quickDiagnosis: `Blue screens on your ${brand} ${category.replace(/s$/, "")} are usually caused by driver conflicts, bad RAM, or failing storage. Note the error code displayed — it's a critical clue for diagnosis.`,
      steps: [
        { number: 1, title: "Note the error code", description: `When the blue screen appears, write down the stop code (e.g., IRQL_NOT_LESS_OR_EQUAL, CRITICAL_PROCESS_DIED). This code tells you exactly what caused the crash. Search for it to find targeted fixes.` },
        { number: 2, title: "Boot into Safe Mode", description: `Restart and boot into Safe Mode (hold Shift while clicking Restart, or press F8 during boot). If the blue screen doesn't occur in Safe Mode, a driver or startup program is the cause.` },
        { number: 3, title: "Update or roll back drivers", description: `In Safe Mode, open Device Manager and check for devices with warning icons. Update or roll back recently changed drivers, especially graphics and network drivers. These are the most common BSOD culprits.` },
        { number: 4, title: "Run memory and disk diagnostics", description: `Run Windows Memory Diagnostic (mdsched.exe) to test RAM. Run CHKDSK to check for disk errors. Failing RAM or a corrupted drive are common blue screen causes.` },
        { number: 5, title: "Check for overheating", description: `Overheating can cause blue screens under load. Clean the vents, check that fans are running, and monitor CPU temperature. If the laptop crashes during heavy tasks but not at idle, heat is likely the issue.` },
      ],
      alternativeCauses: [
        "Corrupted Windows system files (run sfc /scannow)",
        "Recent Windows update causing compatibility issues",
        "Malware or virus infection",
      ],
      whenToCallPro: `If blue screens persist after driver updates and diagnostics show clean RAM and disk, there may be a motherboard issue or failing component. Professional diagnosis costs $50-$100. Consider whether repair costs exceed the device's value.`,
    },

    "fan loud": {
      problemTitle: "Fan Running Loud",
      difficulty: "Easy",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$25",
      toolsNeeded: ["Compressed air", "Screwdriver set", "Soft brush"],
      partsNeeded: [
        {
          name: "Replacement Cooling Fan",
          costRange: "$10-$25",
          amazonUrl: amazonUrl(`${searchPrefix} replacement cooling fan`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement cooling fan`),
        },
      ],
      safetyWarnings: [
        "Unplug the device and let it cool completely before cleaning.",
        "Hold fan blades still when using compressed air to prevent bearing damage.",
      ],
      quickDiagnosis: `A loud fan on your ${brand} ${category.replace(/s$/, "")} usually means it's working overtime to cool the system due to dust buildup, heavy CPU usage, or degraded thermal paste. Cleaning fixes this 80% of the time.`,
      steps: [
        { number: 1, title: "Close resource-heavy applications", description: `Open Task Manager (Ctrl+Shift+Esc) and check CPU/GPU usage. Close applications using excessive resources. Browsers with many tabs are a common culprit.` },
        { number: 2, title: "Clean the vents and fans", description: `Power off and unplug the device. Use compressed air to blow out dust from all vents. Short bursts at an angle work best. You'll likely see a cloud of dust come out — this is the most common fix.` },
        { number: 3, title: "Ensure proper airflow", description: `Place the device on a hard, flat surface. Soft surfaces like beds and couches block the bottom vents. Use a laptop stand or cooling pad for better airflow.` },
        { number: 4, title: "Check for malware", description: `Run a full malware scan. Cryptomining malware and other malicious software can pin your CPU at 100%, causing constant fan noise.` },
        { number: 5, title: "Consider thermal paste replacement", description: `If the device is over 2-3 years old and cleaning didn't help, the thermal paste between the CPU and heatsink may have dried out. Re-applying thermal paste requires opening the device and is a Medium-difficulty repair.` },
      ],
      alternativeCauses: [
        "Fan bearings wearing out (grinding or clicking noise)",
        "BIOS settings keeping fan at max speed",
        "Failing hard drive causing excessive heat",
      ],
      whenToCallPro: `If the fan makes grinding or clicking noises, the bearings are failing and it needs replacement ($20-$60 for the part, $40-$80 for professional service). If the fan runs loud even at idle after cleaning, the thermal paste needs replacing.`,
    },

    "trackpad not working": {
      problemTitle: "Trackpad Not Working",
      difficulty: "Easy",
      timeEstimate: "10-20 minutes",
      costEstimate: "$0-$40",
      toolsNeeded: ["Microfiber cloth", "Compressed air", "Screwdriver set (if checking cable)"],
      partsNeeded: [
        {
          name: "Replacement Trackpad",
          costRange: "$20-$40",
          amazonUrl: amazonUrl(`${searchPrefix} replacement trackpad touchpad`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement trackpad touchpad`),
        },
      ],
      safetyWarnings: [
        "Disconnect power and remove the battery before inspecting internal components.",
      ],
      quickDiagnosis: `A non-responsive trackpad on your ${brand} ${category.replace(/s$/, "")} is usually caused by driver issues, a dirty surface, or a swollen battery pushing against the trackpad from underneath.`,
      steps: [
        { number: 1, title: "Clean the trackpad surface", description: `Wipe the trackpad with a slightly damp microfiber cloth. Oils, lotion, and dirt can interfere with touch detection. Make sure your fingers are clean and dry too.` },
        { number: 2, title: "Check if the trackpad is disabled", description: `Many laptops have a function key (Fn + F5/F6/F7) that toggles the trackpad on and off. You may have accidentally pressed it. Check the setting in your system preferences or control panel.` },
        { number: 3, title: "Update or reinstall drivers", description: `Go to Device Manager > Mouse and pointing devices. Uninstall the trackpad driver, restart the laptop, and let it reinstall automatically. Also check the manufacturer's website for updated drivers.` },
        { number: 4, title: "Check for a swollen battery", description: `If the trackpad is physically stiff or hard to click, the battery underneath may be swollen and pushing up. If the laptop bottom is bulging, stop using it immediately — a swollen battery is a safety hazard.` },
        { number: 5, title: "Try an external mouse", description: `Connect a USB or Bluetooth mouse. If it works fine, the issue is specifically with the trackpad hardware or its connection. Check that a connected external mouse isn't automatically disabling the trackpad in settings.` },
      ],
      alternativeCauses: [
        "Liquid spill damage under the trackpad",
        "Loose ribbon cable connecting trackpad to motherboard",
        "Accessibility settings like Sticky Keys interfering with trackpad",
      ],
      whenToCallPro: `If the trackpad is physically stiff (possible swollen battery) or drivers/cleaning don't fix it, professional repair costs $40-$100 for trackpad replacement, or $50-$100 for battery replacement if swollen.`,
    },

    "slow performance": {
      problemTitle: "Slow Performance",
      difficulty: "Easy",
      timeEstimate: "20-45 minutes",
      costEstimate: "$0-$60",
      toolsNeeded: ["None for software fixes", "Screwdriver (for RAM/SSD upgrade)"],
      partsNeeded: [
        {
          name: "SSD Upgrade / Additional RAM",
          costRange: "$25-$60",
          amazonUrl: amazonUrl(`${searchPrefix} SSD upgrade RAM`),
          ebayUrl: ebayUrl(`${searchPrefix} SSD upgrade RAM`),
        },
      ],
      safetyWarnings: [
        "Back up important files before making any system changes.",
        "Use an anti-static wrist strap when handling RAM or storage drives.",
      ],
      quickDiagnosis: `A slow ${brand} ${category.replace(/s$/, "")} is usually caused by too many startup programs, low disk space, or insufficient RAM. Software cleanup makes a huge difference before considering hardware upgrades.`,
      steps: [
        { number: 1, title: "Disable startup programs", description: `Open Task Manager > Startup tab and disable programs you don't need at boot. Many installed apps add themselves to startup, slowing boot time and consuming RAM in the background.` },
        { number: 2, title: "Free up disk space", description: `Run Disk Cleanup (Windows) or check Storage Management (Mac). Delete temporary files, empty the recycle bin, and uninstall programs you don't use. Keep at least 15-20% of your drive free.` },
        { number: 3, title: "Check for malware", description: `Run a full system scan with your antivirus software. Malware, adware, and unwanted browser extensions are major causes of slowdown. Consider using Malwarebytes for a thorough scan.` },
        { number: 4, title: "Check RAM and CPU usage", description: `Open Task Manager and monitor RAM and CPU. If RAM is consistently above 80%, you either need to close applications or upgrade RAM. If CPU spikes to 100% frequently, find and address the offending process.` },
        { number: 5, title: "Consider hardware upgrades", description: `The two most impactful upgrades are switching from HDD to SSD (massive speed improvement) and adding more RAM. An SSD upgrade alone can make a 5-year-old laptop feel new.` },
      ],
      alternativeCauses: [
        "Failing hard drive (check with CrystalDiskInfo or similar)",
        "Overheating causing thermal throttling",
        "Outdated operating system needing a clean install",
      ],
      whenToCallPro: `If software cleanup doesn't help and the device has adequate specs, the hard drive may be failing or the OS may need a clean install. An SSD upgrade by a professional typically costs $80-$150 including the drive and labor.`,
    },

    "no picture but has sound": {
      problemTitle: "No Picture But Has Sound",
      difficulty: "Medium",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["Flashlight", "Screwdriver set"],
      partsNeeded: [
        {
          name: "Replacement LED Backlight Strips",
          costRange: "$15-$50",
          amazonUrl: amazonUrl(`${searchPrefix} LED backlight strips`),
          ebayUrl: ebayUrl(`${searchPrefix} LED backlight strips`),
        },
      ],
      safetyWarnings: [
        "Unplug the TV from the wall before working on it.",
        "TV capacitors can hold lethal voltage even when unplugged — do not touch circuit boards unless you know what you're doing.",
        "Wait at least 30 minutes after unplugging before opening the back panel.",
      ],
      quickDiagnosis: `When your ${brand} TV has sound but no picture, the backlight has usually failed. Shine a flashlight at the screen — if you can faintly see the image, the backlight is dead but the panel itself is fine.`,
      steps: [
        { number: 1, title: "Perform the flashlight test", description: `Turn the TV on, then shine a flashlight directly at the screen from a few inches away. Look closely — if you can see a faint image, the LED backlight has failed. This is the most common cause.` },
        { number: 2, title: "Check HDMI connections", description: `Unplug and replug all HDMI cables. Try a different HDMI port. Try a different HDMI cable. A loose or faulty HDMI connection can cause a blank screen with audio still working.` },
        { number: 3, title: "Try a different input source", description: `Switch to a different input (antenna, different HDMI, built-in apps). If some inputs show a picture and others don't, the issue is with that specific input rather than the display.` },
        { number: 4, title: "Power cycle the TV", description: `Unplug the TV from the wall (not just the remote power off). Hold the power button on the TV itself for 30 seconds. Wait 5 minutes, then plug back in and turn on. This drains residual power and resets the firmware.` },
        { number: 5, title: "Check the T-Con board", description: `If the flashlight test shows no image at all, the T-Con (timing control) board may have failed. This board sits between the main board and the panel. Replacement T-Con boards are typically $20-$50.` },
      ],
      alternativeCauses: [
        "Failed power supply board not providing enough voltage to the backlight",
        "Damaged panel ribbon cables",
        "Main board HDMI processor failure",
      ],
      whenToCallPro: `Backlight replacement requires opening the TV and handling LED strips behind the panel — it's risky for beginners. A professional can replace the backlight for $100-$200. Compare this to the cost of a new TV.`,
    },

    "remote not working": {
      problemTitle: "Remote Not Working",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0-$15",
      toolsNeeded: ["Small Phillips screwdriver", "Isopropyl alcohol", "Cotton swabs"],
      partsNeeded: [
        {
          name: "Replacement Batteries / Remote",
          costRange: "$3-$15",
          amazonUrl: amazonUrl(`${searchPrefix} replacement remote`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement remote`),
        },
      ],
      safetyWarnings: [
        "Remove old batteries promptly if they show any signs of leaking or corrosion.",
        "Do not mix old and new batteries.",
      ],
      quickDiagnosis: `A non-working remote for your ${brand} TV is almost always dead batteries or IR signal issues. New batteries fix it 80% of the time.`,
      steps: [
        { number: 1, title: "Replace the batteries", description: `Put in fresh, name-brand batteries. Even if you replaced them recently, try new ones — cheap batteries can die quickly. Make sure they're inserted in the correct orientation (+/-).` },
        { number: 2, title: "Clean the IR sensor", description: `Clean the IR emitter on the front tip of the remote with a cotton swab dipped in isopropyl alcohol. Also clean the IR receiver on the TV (usually a small dark spot on the bottom front edge).` },
        { number: 3, title: "Test the remote with your phone camera", description: `Point the remote at your phone's front camera and press a button. If the remote is working, you'll see a purple/white flash through the camera. If you see nothing, the remote is dead.` },
        { number: 4, title: "Check for obstructions", description: `Make sure nothing is blocking the line of sight between the remote and the TV's IR sensor. Sound bars, decorations, or even a dirty sensor window can block the signal.` },
        { number: 5, title: "Re-pair the remote (for Bluetooth/RF remotes)", description: `Some smart TV remotes use Bluetooth, not IR. Check your TV's settings for a "Pair Remote" option. Hold the pairing button on the remote (usually for 5+ seconds) to put it in pairing mode.` },
      ],
      alternativeCauses: [
        "Battery contacts corroded inside the remote",
        "Button contacts worn out from heavy use",
        "TV's IR receiver board failed",
      ],
      whenToCallPro: `If a new remote doesn't work either, the TV's IR receiver board may be faulty. This is an inexpensive part ($10-$20) but requires opening the TV. A universal remote ($10-$15) is often the easiest solution.`,
    },

    "no sound": {
      problemTitle: "No Sound",
      difficulty: "Easy",
      timeEstimate: "5-20 minutes",
      costEstimate: "$0-$30",
      toolsNeeded: ["None for basic troubleshooting"],
      partsNeeded: [
        {
          name: "Replacement TV Speaker / Sound Bar",
          costRange: "$15-$30",
          amazonUrl: amazonUrl(`${searchPrefix} replacement speaker`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement speaker`),
        },
      ],
      safetyWarnings: [
        "Unplug the TV before inspecting internal speakers.",
      ],
      quickDiagnosis: `No sound from your ${brand} TV is usually a settings issue — muted volume, wrong audio output, or disabled speakers. Hardware speaker failure is rare.`,
      steps: [
        { number: 1, title: "Check the obvious settings", description: `Make sure the TV isn't muted (press Mute on the remote). Turn the volume all the way up. Check if the TV is set to output audio to external speakers that aren't connected.` },
        { number: 2, title: "Check audio output settings", description: `Go to Settings > Audio/Sound. Make sure the output is set to "TV Speakers" and not "External Speakers," "ARC," or "Optical." If you have a sound bar, make sure it's powered on and set to the correct input.` },
        { number: 3, title: "Test different input sources", description: `Switch between HDMI inputs, antenna, and streaming apps. If some sources have sound and others don't, the issue is with that specific source, not the TV speakers.` },
        { number: 4, title: "Power cycle the TV", description: `Unplug the TV from the wall for 5 minutes. This resets the audio processor and clears software glitches. Press the power button on the TV while it's unplugged to drain residual power.` },
        { number: 5, title: "Factory reset audio settings", description: `Go to Settings > Audio and reset to defaults. If that doesn't work, try a full factory reset (back up settings first). Corrupted audio settings are more common than speaker failure.` },
      ],
      alternativeCauses: [
        "HDMI ARC/eARC cable not supporting audio pass-through",
        "Broadcast channel audio issue (not your TV)",
        "Internal speaker wire disconnected",
      ],
      whenToCallPro: `If the TV has no sound from any source after a factory reset, the internal speakers or audio processor board may have failed. Speaker replacement is usually $30-$60 at a repair shop. A sound bar ($30-$100) is often a more practical solution.`,
    },

    "black screen": {
      problemTitle: "Black Screen",
      difficulty: "Medium",
      timeEstimate: "10-30 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["Flashlight", "Screwdriver set"],
      partsNeeded: [
        {
          name: "Replacement Power Board / Main Board",
          costRange: "$20-$50",
          amazonUrl: amazonUrl(`${searchPrefix} replacement power board`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement power board`),
        },
      ],
      safetyWarnings: [
        "Unplug the TV completely before any inspection.",
        "TV power supplies contain capacitors that hold dangerous voltage — do not touch circuit boards.",
        "Wait at least 30 minutes after unplugging before opening the back.",
      ],
      quickDiagnosis: `A black screen on your ${brand} TV can be caused by a power issue, failed backlight, or input problem. Before assuming the worst, try a hard power cycle — it fixes this problem surprisingly often.`,
      steps: [
        { number: 1, title: "Hard power cycle", description: `Unplug the TV from the wall. Press and hold the power button on the TV (not the remote) for 30 seconds. Wait 5 full minutes. Plug back in and turn on. This resets the power supply and firmware.` },
        { number: 2, title: "Check for standby light", description: `Look for the standby indicator light. If it's on, the TV has power. If it's off, check the outlet, try a different one. If the light blinks in a pattern, look up the blink code for your model.` },
        { number: 3, title: "Flashlight test for backlight failure", description: `Turn the TV on and shine a flashlight at the screen. If you can see a faint image, the backlight has failed but the panel works. This is a common failure in TVs over 3 years old.` },
        { number: 4, title: "Try different inputs", description: `Press the Source/Input button and cycle through all inputs. The TV might be set to an input with nothing connected. Try the TV's built-in smart apps to test if the panel works.` },
        { number: 5, title: "Inspect for swollen capacitors", description: `If you're comfortable opening the back panel (after waiting 30+ minutes unplugged), visually inspect the power supply board for swollen or leaking capacitors (they'll have bulging tops). This is a common and repairable failure.` },
      ],
      alternativeCauses: [
        "Failed power supply board",
        "Main board failure",
        "Damaged T-Con board",
      ],
      whenToCallPro: `If the power cycle doesn't fix it and you've confirmed the outlet works, the TV likely has a failed board. Board replacements cost $50-$150 at a repair shop. For TVs over 5 years old, compare repair cost to replacement.`,
    },

    "lines on screen": {
      problemTitle: "Lines on Screen",
      difficulty: "Medium",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$50",
      toolsNeeded: ["Screwdriver set", "Microfiber cloth"],
      partsNeeded: [
        {
          name: "Replacement T-Con Board / Ribbon Cable",
          costRange: "$15-$50",
          amazonUrl: amazonUrl(`${searchPrefix} T-Con board ribbon cable`),
          ebayUrl: ebayUrl(`${searchPrefix} T-Con board ribbon cable`),
        },
      ],
      safetyWarnings: [
        "Unplug the TV before any hardware work.",
        "Handle ribbon cables very carefully — they tear easily.",
        "Do not press on the LCD/OLED panel — it can cause permanent damage.",
      ],
      quickDiagnosis: `Lines on your ${brand} TV screen are typically caused by a loose ribbon cable, failing T-Con board, or panel damage. If the lines are horizontal, it's more likely a cable/connection issue. Vertical lines often indicate panel damage.`,
      steps: [
        { number: 1, title: "Determine the line type", description: `Note whether lines are horizontal or vertical, colored or black, and whether they appear on all inputs. Take a photo. Horizontal lines across the full screen often point to a loose connection. Vertical lines may indicate panel failure.` },
        { number: 2, title: "Power cycle the TV", description: `Unplug for 5 minutes. A software glitch can occasionally cause display artifacts that look like lines. If the lines disappear after a power cycle, it was a temporary issue.` },
        { number: 3, title: "Gently press on the bezel edges", description: `With the TV on, gently press along the edges of the frame (not the screen itself). If lines change or disappear when you press, a ribbon cable connection is loose.` },
        { number: 4, title: "Reseat ribbon cables", description: `Open the back panel (after unplugging and waiting). Locate the ribbon cables connecting the T-Con board to the panel. Carefully unlatch and reseat each cable. Corrosion or a loose fit is a common cause of lines.` },
        { number: 5, title: "Replace the T-Con board", description: `If reseating cables doesn't help, the T-Con board itself may be faulty. It's an affordable part ($20-$50) and easy to swap — usually just 2-4 screws and a couple ribbon cables.` },
      ],
      alternativeCauses: [
        "Physical damage to the LCD panel (drop or impact)",
        "Failed panel driver IC (often visible as lines from one edge)",
        "Electromagnetic interference from nearby devices",
      ],
      whenToCallPro: `If reseating cables and replacing the T-Con board doesn't fix the lines, the panel itself is likely damaged. Panel replacement usually costs more than a new TV — it's typically not worth repairing.`,
    },

    "picture too dark": {
      problemTitle: "Picture Too Dark",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0",
      toolsNeeded: ["None — settings adjustments only"],
      partsNeeded: [],
      safetyWarnings: [],
      quickDiagnosis: `A dark picture on your ${brand} TV is almost always a settings issue — energy saver mode, low backlight, or ambient light sensor. This is one of the easiest fixes.`,
      steps: [
        { number: 1, title: "Turn off energy saver mode", description: `Go to Settings > General or System > Energy Saving / Eco Mode. Turn it off. Energy saver mode drastically dims the screen. This is the #1 cause of a too-dark picture and the most commonly overlooked setting.` },
        { number: 2, title: "Increase backlight/brightness", description: `Go to Settings > Picture. Increase the Backlight setting (this is different from Brightness). Backlight controls how bright the LEDs behind the screen are. Set it to 80-100% for normal viewing.` },
        { number: 3, title: "Check ambient light sensor", description: `Some TVs have a light sensor that auto-adjusts brightness based on room lighting. Find this in Picture > Advanced Settings > Ambient Light Detection and turn it off if your room is dark.` },
        { number: 4, title: "Switch picture mode", description: `Change the picture mode from Cinema/Movie to Standard or Vivid. Cinema modes are intentionally dimmer for movie watching. Standard mode provides good brightness for everyday viewing.` },
        { number: 5, title: "Reset picture settings", description: `If you've made too many adjustments, reset picture settings to factory defaults. Then just adjust the backlight up. Factory defaults are a good baseline for most viewing environments.` },
      ],
      alternativeCauses: [
        "Failing LED backlight (if brightness settings don't help)",
        "HDMI content outputting in HDR that the TV can't handle",
        "Damaged dimming zones on local-dimming TVs",
      ],
      whenToCallPro: `If maxing out backlight and disabling energy saver doesn't help, the LED backlight may be failing. This is a hardware issue requiring professional repair ($100-$200). For older TVs, replacement may be more cost-effective.`,
    },

    "hdmi not working": {
      problemTitle: "HDMI Not Working",
      difficulty: "Easy",
      timeEstimate: "5-20 minutes",
      costEstimate: "$0-$15",
      toolsNeeded: ["Compressed air", "Isopropyl alcohol", "Cotton swabs"],
      partsNeeded: [
        {
          name: "Replacement HDMI Cable",
          costRange: "$5-$15",
          amazonUrl: amazonUrl(`${searchPrefix} HDMI cable`),
          ebayUrl: ebayUrl(`${searchPrefix} HDMI cable`),
        },
      ],
      safetyWarnings: [
        "Do not force HDMI cables — they only go in one way.",
      ],
      quickDiagnosis: `HDMI issues on your ${brand} TV are usually a loose cable, wrong input setting, or HDCP handshake problem. A different cable or power cycle fixes this 90% of the time.`,
      steps: [
        { number: 1, title: "Check the input source", description: `Make sure the TV is set to the correct HDMI input. Press the Source/Input button on your remote and select the HDMI port your device is connected to. TVs often have 2-4 HDMI ports.` },
        { number: 2, title: "Reseat the HDMI cable", description: `Unplug the HDMI cable from both the TV and the source device. Wait 10 seconds. Plug it back in firmly on both ends. A slightly loose connection is one of the most common HDMI issues.` },
        { number: 3, title: "Try a different HDMI cable", description: `Swap to a different HDMI cable. Cables can fail internally even without visible damage. Use a High Speed or Ultra High Speed HDMI cable for 4K content.` },
        { number: 4, title: "Try a different HDMI port", description: `Plug the cable into a different HDMI port on the TV. If the other port works, the original port may be damaged or have a different HDMI version/capability.` },
        { number: 5, title: "Power cycle both devices", description: `Unplug both the TV and the source device from power. Wait 2 minutes. Plug the TV in first and turn it on, then plug in and turn on the source device. This resets the HDCP handshake.` },
      ],
      alternativeCauses: [
        "HDCP (copy protection) handshake failure",
        "Source device resolution higher than TV supports",
        "Damaged HDMI port pins",
      ],
      whenToCallPro: `If no HDMI ports work after trying multiple cables and devices, the HDMI controller on the main board may have failed. Board repair costs $80-$150. If only one port is damaged, using a different port is the easiest solution.`,
    },

    "disc drive not reading": {
      problemTitle: "Disc Drive Not Reading",
      difficulty: "Medium",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$40",
      toolsNeeded: ["Microfiber cloth", "Compressed air", "Torx screwdriver set"],
      partsNeeded: [
        {
          name: "Replacement Disc Drive / Laser Lens",
          costRange: "$20-$40",
          amazonUrl: amazonUrl(`${searchPrefix} disc drive replacement`),
          ebayUrl: ebayUrl(`${searchPrefix} disc drive replacement`),
        },
      ],
      safetyWarnings: [
        "Power off and unplug the console before opening it.",
        "Opening the console may void your warranty — check first.",
        "Do not touch the laser lens with your fingers.",
      ],
      quickDiagnosis: `If your ${brand} disc drive won't read discs, it's usually a dirty laser lens, scratched disc, or worn-out drive mechanism. Cleaning the lens fixes it about 50% of the time.`,
      steps: [
        { number: 1, title: "Try a different disc", description: `Test with a known-good, clean disc. If one disc doesn't work but others do, that specific disc is likely scratched or damaged. Try both game discs and Blu-ray movies to isolate the issue.` },
        { number: 2, title: "Clean the disc", description: `Wipe the disc with a microfiber cloth from the center outward (never in circles). Look for deep scratches. If the disc is dirty or has fingerprints, that may be the entire problem.` },
        { number: 3, title: "Power cycle the console", description: `Turn off the console completely (not rest/standby mode). Unplug it for 2 minutes. This resets the disc drive controller. Plug back in and try again.` },
        { number: 4, title: "Clean the laser lens", description: `Use a disc drive cleaning disc (available for $5-$10) or carefully open the console and use compressed air to blow dust off the laser lens. Do not touch the lens directly.` },
        { number: 5, title: "Rebuild database / clear cache", description: `Boot into the console's maintenance or safe mode and rebuild the database or clear the system cache. Corrupted data can sometimes prevent disc recognition.` },
      ],
      alternativeCauses: [
        "Laser lens failure (common after 3-4 years of heavy use)",
        "Disc drive motor failure (makes grinding sounds)",
        "Firmware bug (check for system updates)",
      ],
      whenToCallPro: `If the drive makes grinding noises, won't accept or eject discs, or doesn't read after cleaning, the drive mechanism or laser is failing. Replacement costs $60-$120 at a repair shop.`,
    },

    "controller not connecting": {
      problemTitle: "Controller Not Connecting",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0-$15",
      toolsNeeded: ["USB cable", "Small pin or toothpick (for reset button)"],
      partsNeeded: [
        {
          name: "Replacement Controller / USB Cable",
          costRange: "$10-$15",
          amazonUrl: amazonUrl(`${searchPrefix} controller USB cable`),
          ebayUrl: ebayUrl(`${searchPrefix} controller USB cable`),
        },
      ],
      safetyWarnings: [
        "Use only certified/original USB cables for controller pairing.",
      ],
      quickDiagnosis: `When your ${brand} controller won't connect, it's usually a dead battery, Bluetooth pairing issue, or stuck firmware. A wired connection and re-pairing fixes it most of the time.`,
      steps: [
        { number: 1, title: "Charge the controller", description: `Connect the controller to the console with a USB cable and let it charge for at least 15 minutes. A completely dead battery won't pair wirelessly. The controller should show a charging indicator.` },
        { number: 2, title: "Reset the controller", description: `Most controllers have a small reset button on the back (usually a tiny hole you need a pin or toothpick to reach). Press and hold it for 5 seconds. This clears the Bluetooth pairing memory.` },
        { number: 3, title: "Re-pair via USB cable", description: `Connect the controller to the console with a USB cable and press the PS/Xbox/Home button to pair. Some consoles require you to go to Settings > Accessories > Bluetooth to manually pair.` },
        { number: 4, title: "Restart the console", description: `Fully power off the console (not rest mode). Unplug it for 1 minute. Plug back in and try pairing the controller again with a USB cable. This clears Bluetooth cache.` },
        { number: 5, title: "Update controller firmware", description: `Connect via USB and check for controller firmware updates in the console's settings. Outdated firmware can cause connection issues, especially after a system update.` },
      ],
      alternativeCauses: [
        "Bluetooth interference from nearby devices",
        "Damaged USB port on the controller",
        "Controller paired to a different console or device",
        "Defective Bluetooth antenna in the controller",
      ],
      whenToCallPro: `If the controller won't connect via USB cable either, the USB port or Bluetooth module on the controller is likely damaged. Replacement controllers cost $40-$70. Repair is usually not cost-effective for controllers.`,
    },

    "no video output": {
      problemTitle: "No Video Output",
      difficulty: "Medium",
      timeEstimate: "10-25 minutes",
      costEstimate: "$0-$20",
      toolsNeeded: ["Different HDMI cable", "Compressed air"],
      partsNeeded: [
        {
          name: "Replacement HDMI Cable / Port",
          costRange: "$5-$20",
          amazonUrl: amazonUrl(`${searchPrefix} HDMI cable`),
          ebayUrl: ebayUrl(`${searchPrefix} HDMI cable`),
        },
      ],
      safetyWarnings: [
        "Do not force HDMI cables — check orientation before pushing.",
        "Make sure the console is well-ventilated during use.",
      ],
      quickDiagnosis: `No video output from your ${brand} usually means an HDMI issue, resolution mismatch, or boot problem. Try a different HDMI cable first — it's the simplest and most common fix.`,
      steps: [
        { number: 1, title: "Check HDMI connections", description: `Unplug the HDMI cable from both the console and TV. Inspect for bent pins. Reconnect firmly. Try a different HDMI port on the TV. Make sure the TV is set to the correct input.` },
        { number: 2, title: "Try a different HDMI cable", description: `HDMI cables can fail without visible damage. Swap to a known-good cable. Use a High Speed HDMI cable or better for 4K consoles.` },
        { number: 3, title: "Boot into safe/low-resolution mode", description: `Some consoles boot in low-resolution safe mode when you hold the power button. PS: hold power for 7 seconds until second beep. Xbox: hold power + eject for 10 seconds. This outputs at 480p so any TV can display it.` },
        { number: 4, title: "Power cycle the console", description: `Unplug the console and TV for 2 minutes. Plug the TV in first and turn it on. Then plug in the console and power on. This resets the HDCP handshake between devices.` },
        { number: 5, title: "Try a different TV or monitor", description: `Test the console on a different display to determine if the issue is with the console or the TV. If it works on another display, the issue is with your TV's HDMI handling.` },
      ],
      alternativeCauses: [
        "Failed HDMI chip on the console motherboard",
        "Resolution set higher than TV supports",
        "Damaged HDMI port on the console",
      ],
      whenToCallPro: `If the console doesn't output video on any TV with any cable, the HDMI port or chip on the motherboard is likely damaged. HDMI port repair costs $80-$150 at a repair shop.`,
    },

    "loud fan noise": {
      problemTitle: "Loud Fan Noise",
      difficulty: "Medium",
      timeEstimate: "20-45 minutes",
      costEstimate: "$0-$15",
      toolsNeeded: ["Torx screwdriver set", "Compressed air", "Soft brush", "Thermal paste (optional)"],
      partsNeeded: [
        {
          name: "Replacement Fan / Thermal Paste",
          costRange: "$8-$15",
          amazonUrl: amazonUrl(`${searchPrefix} replacement fan thermal paste`),
          ebayUrl: ebayUrl(`${searchPrefix} replacement fan thermal paste`),
        },
      ],
      safetyWarnings: [
        "Unplug the console and let it cool for 30 minutes before opening.",
        "Opening the console may void your warranty.",
        "Hold fan blades still when using compressed air.",
      ],
      quickDiagnosis: `A loud fan on your ${brand} means it's overheating. Dust buildup is the most common cause. Regular cleaning can prevent this and extend your console's life.`,
      steps: [
        { number: 1, title: "Improve ventilation", description: `Make sure the console has at least 4-6 inches of clearance on all sides. Move it out of enclosed cabinets. Stand it vertically if the design allows. Poor ventilation makes the fan work 2-3x harder.` },
        { number: 2, title: "Clean external vents", description: `Use compressed air to blow out the vents without opening the console. Short bursts at an angle will dislodge dust. A vacuum on low suction held near the vents can also help.` },
        { number: 3, title: "Deep clean (open the console)", description: `Remove the outer shell (usually Torx screws). Use compressed air to thoroughly clean the fan, heatsink, and internal surfaces. You'll likely find significant dust buildup. This alone usually fixes loud fan noise.` },
        { number: 4, title: "Replace thermal paste", description: `If the console is 2+ years old, the thermal paste between the CPU/GPU and heatsink may have dried out. Clean off the old paste with isopropyl alcohol and apply a small pea-sized drop of new paste. This can reduce temps by 10-20C.` },
        { number: 5, title: "Check for game-specific issues", description: `Some games push the hardware harder than others. If the fan is only loud during specific games, it's normal. If it's loud at the home screen, there's a ventilation or thermal issue.` },
      ],
      alternativeCauses: [
        "Fan bearings wearing out (rattling/grinding sound vs. whooshing)",
        "Thermal pads on VRAM need replacing",
        "Console placed on carpet or soft surface blocking bottom vents",
      ],
      whenToCallPro: `If cleaning and re-pasting don't help, or if the fan makes grinding/rattling noises, the fan itself needs replacement. Professional service typically costs $40-$80 including parts.`,
    },

    "wifi issues": {
      problemTitle: "WiFi Issues",
      difficulty: "Easy",
      timeEstimate: "5-20 minutes",
      costEstimate: "$0-$25",
      toolsNeeded: ["Ethernet cable (for testing)"],
      partsNeeded: [
        {
          name: "USB WiFi Adapter / Ethernet Adapter",
          costRange: "$10-$25",
          amazonUrl: amazonUrl(`${searchPrefix} USB wifi adapter ethernet`),
          ebayUrl: ebayUrl(`${searchPrefix} USB wifi adapter ethernet`),
        },
      ],
      safetyWarnings: [],
      quickDiagnosis: `WiFi problems on your ${brand} are usually caused by signal interference, router issues, or DNS settings. Most can be fixed with a few setting changes.`,
      steps: [
        { number: 1, title: "Restart the console and router", description: `Power off the console completely. Unplug your router for 30 seconds. Plug the router back in, wait 2-3 minutes, then turn on the console. This clears network caches on both devices.` },
        { number: 2, title: "Test your internet speed", description: `Run a network speed test from the console's settings. Compare with a test on your phone. If the phone gets good speeds but the console doesn't, the issue is between the router and console specifically.` },
        { number: 3, title: "Use 5GHz instead of 2.4GHz", description: `If your router broadcasts both bands, connect the console to the 5GHz network. It's faster and less prone to interference. Position the console closer to the router if 5GHz signal is weak.` },
        { number: 4, title: "Change DNS settings", description: `Set DNS to Google (8.8.8.8 / 8.8.4.4) or Cloudflare (1.1.1.1 / 1.0.0.1). Go to Network Settings > Advanced/Manual and enter the DNS servers. This can improve connection reliability and speed.` },
        { number: 5, title: "Use a wired connection", description: `If WiFi problems persist, connect via Ethernet cable for the most stable connection. If the console is too far from the router, a powerline adapter ($30-$50) can send internet through your electrical wiring.` },
      ],
      alternativeCauses: [
        "ISP throttling gaming traffic",
        "Too many devices on the same WiFi network",
        "Console's internal WiFi antenna damaged",
      ],
      whenToCallPro: `If the console can't see any WiFi networks, the internal WiFi module may be damaged. This typically costs $40-$80 to repair. A USB WiFi adapter ($15-$25) may be a cheaper workaround.`,
    },

    "charging issues": {
      problemTitle: "Charging Issues",
      difficulty: "Easy",
      timeEstimate: "5-15 minutes",
      costEstimate: "$0-$25",
      toolsNeeded: ["Wooden toothpick", "Compressed air", "Microfiber cloth"],
      partsNeeded: [
        {
          name: "Replacement Charger / Charging Cable",
          costRange: "$10-$25",
          amazonUrl: amazonUrl(`${searchPrefix} charger cable replacement`),
          ebayUrl: ebayUrl(`${searchPrefix} charger cable replacement`),
        },
      ],
      safetyWarnings: [
        "Do not use third-party chargers that are not certified for your device.",
        "If the device is hot while charging, disconnect immediately.",
        "A swollen battery is a fire hazard — stop using the device if you notice bulging.",
      ],
      quickDiagnosis: `Charging problems with your ${brand} are usually caused by a faulty cable, dirty charging port, or software issue. Try a different charger first — it's the quickest diagnosis.`,
      steps: [
        { number: 1, title: "Try a different charger and cable", description: `Use a known-good charger and cable. Many charging issues are simply worn-out cables. Make sure you're using the correct wattage charger for your device.` },
        { number: 2, title: "Clean the charging port", description: `Use a flashlight to inspect the port. Remove lint and debris with a wooden toothpick. Compressed air can also help. A dirty port is the most common reason a device won't charge properly.` },
        { number: 3, title: "Restart the device", description: `Power off completely and power back on. Software glitches can prevent the device from recognizing the charger. A restart clears these issues.` },
        { number: 4, title: "Charge while powered off", description: `Turn the device off completely, then plug in the charger. If it charges while off, a background process may be draining battery faster than the charger can supply. Check for runaway apps.` },
        { number: 5, title: "Check battery health", description: `Look in Settings > Battery for battery health information. If the battery's maximum capacity is below 80%, it may need replacement. Batteries naturally degrade over 2-3 years.` },
      ],
      alternativeCauses: [
        "Charging port pins bent or corroded",
        "Power supply board issue (for consoles with external power supplies)",
        "Battery cell failure",
      ],
      whenToCallPro: `If multiple chargers don't work and the port is clean, the charging port or battery may need replacement. Port replacement costs $40-$80, battery replacement $30-$70.`,
    },

    "freezing/crashing": {
      problemTitle: "Freezing and Crashing",
      difficulty: "Medium",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$30",
      toolsNeeded: ["Compressed air", "Torx screwdriver (if cleaning internals)"],
      partsNeeded: [
        {
          name: "Replacement Thermal Paste / Internal SSD",
          costRange: "$10-$30",
          amazonUrl: amazonUrl(`${searchPrefix} thermal paste SSD`),
          ebayUrl: ebayUrl(`${searchPrefix} thermal paste SSD`),
        },
      ],
      safetyWarnings: [
        "Always save your game progress when possible — crashes can corrupt save data.",
        "Let the device cool down if it freezes during heavy use.",
      ],
      quickDiagnosis: `Freezing and crashing on your ${brand} is usually caused by overheating, corrupted data, or a failing storage drive. Clearing the cache and improving ventilation fixes most cases.`,
      steps: [
        { number: 1, title: "Clear the system cache", description: `Boot into safe mode or maintenance mode and clear the system cache. Corrupted cached data is one of the most common causes of freezing. This won't delete your games or saves.` },
        { number: 2, title: "Check for system updates", description: `Make sure your system software is fully up to date. Manufacturers regularly release stability patches. Connect via Ethernet if WiFi is unreliable for downloads.` },
        { number: 3, title: "Check for overheating", description: `Feel the device — is it very hot? Clean the vents with compressed air. Make sure it has adequate ventilation. Overheating causes thermal throttling and crashes. See the overheating guide for detailed steps.` },
        { number: 4, title: "Rebuild database / repair storage", description: `Boot into safe mode and rebuild the database (PS) or reset the cache (Xbox/Switch). This reorganizes the storage and fixes corrupted files without deleting your games.` },
        { number: 5, title: "Test with different games/apps", description: `If only one game crashes, uninstall and reinstall it — the installation may be corrupted. If all games crash, it's a system-level issue (overheating, failing storage, or bad RAM).` },
      ],
      alternativeCauses: [
        "Failing internal SSD or hard drive",
        "Insufficient storage space (keep 10%+ free)",
        "RAM failure causing random crashes",
      ],
      whenToCallPro: `If crashes persist after clearing cache, updating software, and cleaning the unit, the internal storage or another component may be failing. Professional diagnosis costs $40-$80. SSD replacement costs $50-$120 including the drive.`,
    },

    "storage full": {
      problemTitle: "Storage Full",
      difficulty: "Easy",
      timeEstimate: "15-30 minutes",
      costEstimate: "$0-$80",
      toolsNeeded: ["USB external drive (optional)", "Torx screwdriver (for internal SSD upgrade)"],
      partsNeeded: [
        {
          name: "External Hard Drive / SSD Upgrade",
          costRange: "$30-$80",
          amazonUrl: amazonUrl(`${searchPrefix} external hard drive storage`),
          ebayUrl: ebayUrl(`${searchPrefix} external hard drive storage`),
        },
      ],
      safetyWarnings: [
        "Back up important saves before deleting anything.",
        "Only use compatible external drives recommended for your device.",
      ],
      quickDiagnosis: `Running out of storage on your ${brand} is a common issue as modern games can be 50-100GB+ each. Managing your library and expanding storage are the main solutions.`,
      steps: [
        { number: 1, title: "Check what's using storage", description: `Go to Settings > Storage to see a breakdown of what's taking up space. Games, apps, screenshots, and video captures all add up. Sort by size to see the biggest offenders.` },
        { number: 2, title: "Delete unused games and apps", description: `Uninstall games you're not currently playing. You can always redownload them later — your save data is typically stored separately (and often in the cloud). Start with the largest games first.` },
        { number: 3, title: "Clear screenshots and video clips", description: `Capture galleries can take up surprising amounts of space. Transfer clips you want to keep to a USB drive or cloud storage, then delete them from the device.` },
        { number: 4, title: "Move games to external storage", description: `Connect a compatible external USB drive and move games to it. Most consoles support playing games from external storage. This is the easiest way to expand capacity without opening the device.` },
        { number: 5, title: "Upgrade internal storage", description: `For a permanent solution, upgrade the internal SSD to a larger one. Many consoles have a user-accessible SSD slot. A 1TB-2TB NVMe SSD costs $50-$100 and massively expands your library capacity.` },
      ],
      alternativeCauses: [
        "System updates consuming hidden storage space",
        "Game patches accumulating old update files",
        "Corrupted data taking up phantom space (rebuild database to fix)",
      ],
      whenToCallPro: `Storage management is typically a DIY task. If you need help upgrading the internal SSD, a repair shop can do it for $30-$50 plus the cost of the drive. Most console SSD upgrades are designed to be user-friendly.`,
    },
  };

  // Map certain symptoms to the closest template
  const aliasMap = {
    "not charging": "not charging",
    "battery not charging": "battery not charging",
    "battery draining fast": "battery draining fast",
    "won't turn on": "won't turn on",
    "screen flickering": "screen flickering",
    "speaker not working": "speaker not working",
    "camera not working": "camera not working",
    "overheating": "overheating",
    "wifi not connecting": "wifi not connecting",
    "microphone not working": "microphone not working",
    "touchscreen not responding": "touchscreen not responding",
    "keyboard not working": "keyboard not working",
    "blue screen": "blue screen",
    "fan loud": "fan loud",
    "trackpad not working": "trackpad not working",
    "slow performance": "slow performance",
    "no picture but has sound": "no picture but has sound",
    "remote not working": "remote not working",
    "no sound": "no sound",
    "black screen": "black screen",
    "lines on screen": "lines on screen",
    "picture too dark": "picture too dark",
    "hdmi not working": "hdmi not working",
    "disc drive not reading": "disc drive not reading",
    "controller not connecting": "controller not connecting",
    "no video output": "no video output",
    "loud fan noise": "loud fan noise",
    "wifi issues": "wifi issues",
    "charging issues": "charging issues",
    "freezing/crashing": "freezing/crashing",
    "storage full": "storage full",
  };

  const tmpl = templates[aliasMap[key] || key];
  if (!tmpl) {
    console.warn(`  No template for symptom: "${symptom}" — skipping`);
    return null;
  }
  return tmpl;
}

// ---------------------------------------------------------------------------
// Category definitions
// ---------------------------------------------------------------------------
const CATEGORIES = [
  {
    categorySlug: "phones",
    category: "Phones",
    brands: [
      { brand: "Apple", brandSlug: "apple" },
      { brand: "Samsung", brandSlug: "samsung" },
      { brand: "Google", brandSlug: "google" },
      { brand: "OnePlus", brandSlug: "oneplus" },
      { brand: "Motorola", brandSlug: "motorola" },
      { brand: "LG", brandSlug: "lg" },
      { brand: "Xiaomi", brandSlug: "xiaomi" },
      { brand: "Sony", brandSlug: "sony" },
    ],
    symptoms: [
      "won't turn on",
      "screen flickering",
      "battery draining fast",
      "not charging",
      "speaker not working",
      "camera not working",
      "overheating",
      "wifi not connecting",
      "microphone not working",
      "touchscreen not responding",
    ],
  },
  {
    categorySlug: "laptops",
    category: "Laptops",
    brands: [
      { brand: "HP", brandSlug: "hp" },
      { brand: "Dell", brandSlug: "dell" },
      { brand: "Lenovo", brandSlug: "lenovo" },
      { brand: "ASUS", brandSlug: "asus" },
      { brand: "Acer", brandSlug: "acer" },
      { brand: "Apple", brandSlug: "apple" },
      { brand: "MSI", brandSlug: "msi" },
      { brand: "Toshiba", brandSlug: "toshiba" },
    ],
    symptoms: [
      "won't turn on",
      "overheating",
      "screen flickering",
      "battery not charging",
      "keyboard not working",
      "wifi not connecting",
      "blue screen",
      "fan loud",
      "trackpad not working",
      "slow performance",
    ],
  },
  {
    categorySlug: "tvs",
    category: "TVs",
    brands: [
      { brand: "Samsung", brandSlug: "samsung" },
      { brand: "LG", brandSlug: "lg" },
      { brand: "Sony", brandSlug: "sony" },
      { brand: "Vizio", brandSlug: "vizio" },
      { brand: "TCL", brandSlug: "tcl" },
      { brand: "Hisense", brandSlug: "hisense" },
      { brand: "Roku", brandSlug: "roku" },
      { brand: "Toshiba", brandSlug: "toshiba" },
    ],
    symptoms: [
      "won't turn on",
      "no picture but has sound",
      "screen flickering",
      "remote not working",
      "no sound",
      "black screen",
      "lines on screen",
      "wifi not connecting",
      "picture too dark",
      "hdmi not working",
    ],
  },
  {
    categorySlug: "game-consoles",
    category: "Game Consoles",
    brands: [
      { brand: "Sony PS5", brandSlug: "sony-ps5" },
      { brand: "Sony PS4", brandSlug: "sony-ps4" },
      { brand: "Microsoft Xbox Series X", brandSlug: "microsoft-xbox-series-x" },
      { brand: "Microsoft Xbox One", brandSlug: "microsoft-xbox-one" },
      { brand: "Nintendo Switch", brandSlug: "nintendo-switch" },
      { brand: "Nintendo Switch Lite", brandSlug: "nintendo-switch-lite" },
      { brand: "Valve Steam Deck", brandSlug: "valve-steam-deck" },
      { brand: "Meta Quest", brandSlug: "meta-quest" },
    ],
    symptoms: [
      "won't turn on",
      "overheating",
      "disc drive not reading",
      "controller not connecting",
      "no video output",
      "loud fan noise",
      "wifi issues",
      "charging issues",
      "freezing/crashing",
      "storage full",
    ],
  },
];

// ---------------------------------------------------------------------------
// Generate all guides
// ---------------------------------------------------------------------------
const allGuides = [];
let skippedExisting = 0;
let skippedNoTemplate = 0;

for (const cat of CATEGORIES) {
  for (const { brand, brandSlug } of cat.brands) {
    for (const symptom of cat.symptoms) {
      const symptomSlug = slugify(symptom);
      const id = `${brandSlug}-${cat.categorySlug}-${symptomSlug}`;

      if (existingIds.has(id)) {
        skippedExisting++;
        continue;
      }

      const content = getSymptomContent(cat.category, brand, symptom);
      if (!content) {
        skippedNoTemplate++;
        continue;
      }

      const guide = {
        id,
        category: cat.category,
        categorySlug: cat.categorySlug,
        brand,
        brandSlug,
        problemSlug: symptomSlug,
        problemTitle: content.problemTitle,
        difficulty: content.difficulty,
        timeEstimate: content.timeEstimate,
        costEstimate: content.costEstimate,
        toolsNeeded: content.toolsNeeded,
        partsNeeded: content.partsNeeded,
        safetyWarnings: content.safetyWarnings,
        quickDiagnosis: content.quickDiagnosis,
        steps: content.steps,
        alternativeCauses: content.alternativeCauses,
        whenToCallPro: content.whenToCallPro,
        metaTitle: `${brand} ${cat.category.replace(/s$/, "")} ${content.problemTitle}: How to Fix | RepairItFree`,
        metaDescription: `Learn how to fix your ${brand} ${cat.category.replace(/s$/, "")} ${content.problemTitle.toLowerCase()}. Step-by-step guide with parts and tools. Difficulty: ${content.difficulty}.`,
      };

      allGuides.push(guide);
    }
  }
}

console.log(`Generated ${allGuides.length} new guides`);
console.log(`Skipped ${skippedExisting} (already exist)`);
console.log(`Skipped ${skippedNoTemplate} (no template)`);

// ---------------------------------------------------------------------------
// Write files – 100 guides per file
// ---------------------------------------------------------------------------
const GUIDES_PER_FILE = 100;
const fileCount = Math.ceil(allGuides.length / GUIDES_PER_FILE);
const fileNames = [];

function jsonToTs(obj, indent = 2) {
  return JSON.stringify(obj, null, indent)
    // Remove quotes from object keys that are valid JS identifiers
    .replace(/"(\w+)":/g, "$1:")
    // But keep quoted strings as values (don't break URLs etc.)
    ;
}

for (let i = 0; i < fileCount; i++) {
  const chunk = allGuides.slice(i * GUIDES_PER_FILE, (i + 1) * GUIDES_PER_FILE);
  const num = String(i + 1).padStart(3, "0");
  const varName = `matrixElectronicsGuides${num}`;
  const fileName = `guides-matrix-electronics-${num}.ts`;
  fileNames.push({ fileName, varName });

  let ts = `import { Guide } from "@/lib/types";\n\n`;
  ts += `export const ${varName}: Guide[] = `;
  ts += jsonToTs(chunk);
  ts += `;\n`;

  const outPath = path.join(srcData, fileName);
  fs.writeFileSync(outPath, ts);
  console.log(`Wrote ${outPath} (${chunk.length} guides)`);
}

// ---------------------------------------------------------------------------
// Update guides.ts — add imports and spread
// ---------------------------------------------------------------------------
const guidesPath = path.join(srcData, "guides.ts");
let guidesContent = fs.readFileSync(guidesPath, "utf-8");

// Add imports before the first "const" line
const importBlock = fileNames
  .map((f) => `import { ${f.varName} } from "./${f.fileName.replace(".ts", "")}";`)
  .join("\n");

// Find last import line
const importLines = guidesContent.split("\n");
let lastImportIdx = -1;
for (let i = 0; i < importLines.length; i++) {
  if (importLines[i].startsWith("import ")) lastImportIdx = i;
}
if (lastImportIdx >= 0) {
  importLines.splice(lastImportIdx + 1, 0, importBlock);
  guidesContent = importLines.join("\n");
}

// Add spreads before the closing "];" of the guides array
const spreadBlock = fileNames.map((f) => `  ...${f.varName},`).join("\n");
guidesContent = guidesContent.replace(
  /(\n)(];[\s]*\n[\s]*\nexport function getGuide)/,
  `\n${spreadBlock}\n$2`
);

// More robust: find the line with "];" that follows the spread lines
if (!guidesContent.includes(fileNames[0].varName + ",")) {
  // fallback: insert before the last "];" before getGuide
  guidesContent = guidesContent.replace(
    /(  \.\.\.matrixGuides006,\n)(];)/,
    `$1${spreadBlock}\n$2`
  );
}

fs.writeFileSync(guidesPath, guidesContent);
console.log(`Updated ${guidesPath}`);
console.log("Done!");
