import { Guide } from "@/lib/types";

export const batch004Guides: Guide[] = [
  // ============================================================
  // CAR ELECTRONICS
  // ============================================================
  {
    id: "car-radio-no-sound",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "car-radio-no-sound",
    problemTitle: "Car Radio/Stereo Has No Sound",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Trim removal tool",
      "Multimeter",
      "Wire stripper/crimper",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Inline fuse (if blown)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=car+stereo+inline+fuse&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+stereo+inline+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Speaker wire connectors",
        costRange: "$5–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=car+speaker+wire+connectors&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+speaker+wire+connectors&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the negative battery terminal before working on car wiring.",
      "Do not run the engine in a closed garage — carbon monoxide is deadly.",
    ],
    quickDiagnosis:
      "If your car radio powers on but produces no sound from any speaker, the most common causes are a blown fuse, a loose wiring harness behind the head unit, or a faulty amplifier connection. Start with the simplest checks first.",
    steps: [
      {
        number: 1,
        title: "Check the obvious settings",
        description:
          "Before you take anything apart, make sure the volume is turned up, the balance and fade controls are centered, and the correct audio source is selected. Try switching between FM radio, AM, and AUX or Bluetooth. If sound works on one source but not another, the issue is with that specific input, not the whole system.",
      },
      {
        number: 2,
        title: "Inspect the stereo fuse",
        description:
          "Find your vehicle's fuse box (check the owner's manual for location). Look for the fuse labeled RADIO, AUDIO, or ACC. Pull it out and hold it up to the light — if the thin metal strip inside is broken, the fuse is blown. Replace it with one of the same amperage rating. If the new fuse blows immediately, there may be a short circuit that needs professional attention.",
      },
      {
        number: 3,
        title: "Check the wiring harness",
        description:
          "Using your trim removal tool, carefully pull off the dashboard panel surrounding the head unit. Slide the stereo out far enough to reach the wiring harness on the back. Make sure the main connector and the antenna cable are firmly seated. A loose harness is one of the most common causes of no sound — push each connector in until you feel it click.",
      },
      {
        number: 4,
        title: "Test speaker wires with a multimeter",
        description:
          "Set your multimeter to continuity mode. Disconnect the speaker wires from the back of the head unit and test each pair. If you get no continuity on a pair, that wire is broken somewhere between the stereo and the speaker. You can also test the speakers themselves by briefly touching a 1.5V battery to the speaker terminals — you should hear a soft pop if the speaker is working.",
      },
      {
        number: 5,
        title: "Check the amplifier connection (if equipped)",
        description:
          "Many vehicles have a separate amplifier, often under a seat or in the trunk. Make sure its power and signal cables are firmly connected. Check the amp's inline fuse as well. If the amp has a power light, see if it comes on when the car is running. A dead amplifier will kill sound to all speakers it feeds.",
      },
    ],
    alternativeCauses: [
      "Faulty head unit internal amplifier",
      "Water damage to speakers from door leaks",
      "Anti-theft lockout requiring a reset code",
      "Corroded ground wire connection",
    ],
    whenToCallPro:
      "If the fuse keeps blowing (indicating a short circuit), if you suspect the head unit's internal amplifier has failed, or if the anti-theft system has locked the radio and you cannot find the reset code, a car audio shop can diagnose and fix the problem safely.",
    metaTitle:
      "Car Radio No Sound Fix — Step-by-Step Stereo Troubleshooting | RepairItFree",
    metaDescription:
      "Fix a car radio with no sound. Check fuses, wiring harness, speakers, and amplifier connections with this free step-by-step guide.",
  },
  {
    id: "car-backup-camera-not-working",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "backup-camera-not-working",
    problemTitle: "Backup Camera Not Working",
    difficulty: "Medium",
    timeEstimate: "30-90 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Trim removal tool",
      "Multimeter",
      "Phillips screwdriver",
      "Electrical tape",
    ],
    partsNeeded: [
      {
        name: "Replacement backup camera",
        costRange: "$15–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=universal+car+backup+camera&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=universal+car+backup+camera&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Reverse light fuse (if blown)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=car+mini+blade+fuse+assortment&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+mini+blade+fuse+assortment&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the negative battery terminal before working on wiring.",
      "Never rely solely on the backup camera when reversing — always look behind you.",
      "Do not work under a vehicle without proper jack stands.",
    ],
    quickDiagnosis:
      "When you shift into reverse and the screen stays black, shows static, or does not switch to the camera view, the issue is usually a blown fuse, a bad camera connection, or a faulty camera unit. If the screen shows guidelines but no image, the camera itself is likely the problem.",
    steps: [
      {
        number: 1,
        title: "Verify your reverse lights work",
        description:
          "The backup camera gets its power from the reverse light circuit. Have someone watch the back of the car while you shift into reverse (with the parking brake on). If the reverse lights do not come on, check the reverse light fuse in your fuse box. A blown fuse here means the camera has no power at all.",
      },
      {
        number: 2,
        title: "Restart the head unit",
        description:
          "Sometimes the display freezes or loses its camera input signal. Turn the car completely off, wait 30 seconds, and restart. On some vehicles, you can hold the power button on the stereo for 10 seconds to force a reboot. This simple step fixes the problem more often than you might expect.",
      },
      {
        number: 3,
        title: "Inspect the camera lens",
        description:
          "Go to the back of your car and look at the camera — usually mounted above the license plate or in the tailgate handle. Clean off any dirt, mud, or road grime. A thick layer of dirt can block the image entirely. Also check for moisture or condensation inside the lens, which means water has gotten in and may have damaged the camera.",
      },
      {
        number: 4,
        title: "Check the camera wiring",
        description:
          "Open the trunk or tailgate and find where the camera wire runs inside. Look for loose connections, pinched wires, or corroded connectors. The connection point is often near the tailgate hinge area, where the wire flexes every time you open and close the tailgate. A broken wire here is very common, especially on SUVs and hatchbacks.",
      },
      {
        number: 5,
        title: "Test camera power with a multimeter",
        description:
          "Unplug the camera connector and set your multimeter to DC voltage. With the car in reverse, check for voltage at the camera connector — you should see around 12V. If you have power but no image, the camera itself has failed and needs replacement. If there is no power, trace the wire back toward the reverse light to find the break.",
      },
      {
        number: 6,
        title: "Replace the camera if needed",
        description:
          "Universal backup cameras are affordable and most bolt right into the existing location. Disconnect the old camera, mount the new one, and connect the power and video cables to the existing wiring. Make sure the new camera is aimed slightly downward so you can see the ground close behind the car.",
      },
    ],
    alternativeCauses: [
      "Head unit software glitch requiring a factory reset",
      "Damaged video cable between camera and head unit",
      "Aftermarket camera incompatible with head unit",
      "Corroded ground connection at camera mount",
    ],
    whenToCallPro:
      "If the head unit display itself seems faulty, if you are unable to locate the wiring break, or if your vehicle uses a camera system integrated into a complex infotainment computer, a car electronics specialist can test the entire system with diagnostic tools.",
    metaTitle:
      "Backup Camera Not Working — How to Fix It Yourself | RepairItFree",
    metaDescription:
      "Fix a car backup camera that shows a black screen or no image. Step-by-step guide covering fuses, wiring, and camera replacement.",
  },
  {
    id: "car-bluetooth-not-connecting",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "bluetooth-not-connecting",
    problemTitle: "Car Bluetooth Not Connecting to Phone",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Your phone", "Vehicle owner's manual"],
    partsNeeded: [],
    safetyWarnings: [
      "Do not attempt Bluetooth pairing while driving — park the vehicle first.",
    ],
    quickDiagnosis:
      "Bluetooth connection failures between your phone and car are almost always a software or pairing issue, not a hardware problem. The fix usually involves clearing old pairings and starting fresh. This is one of the easiest car electronics problems to solve.",
    steps: [
      {
        number: 1,
        title: "Toggle Bluetooth off and on",
        description:
          "On your phone, turn Bluetooth off, wait 10 seconds, then turn it back on. Do the same in your car's Bluetooth settings if the option is available. This simple reset clears temporary connection errors and works surprisingly often.",
      },
      {
        number: 2,
        title: "Delete the old pairing on both devices",
        description:
          "On your phone, go to Bluetooth settings, find your car's name, and tap Forget This Device. Then go into your car's Bluetooth or phone settings menu and delete your phone from the paired devices list. Old or corrupted pairing data is the most common cause of connection failures.",
      },
      {
        number: 3,
        title: "Restart both devices",
        description:
          "Turn your phone completely off and back on. Turn the car off, wait a full minute, and start it again. Some infotainment systems only fully reset when the car has been off long enough for the electronics to power down completely.",
      },
      {
        number: 4,
        title: "Re-pair from scratch",
        description:
          "With both devices freshly restarted, go to your car's Bluetooth menu and put it in pairing mode (check your owner's manual for the exact steps). On your phone, search for new Bluetooth devices and select your car's name. Confirm the pairing code matches on both screens. Once connected, test a phone call and music playback to make sure both work.",
      },
      {
        number: 5,
        title: "Check for software updates",
        description:
          "Update your phone to the latest operating system version — Bluetooth compatibility fixes are included in many updates. Some car manufacturers also release infotainment updates, often available through a USB drive or the car's built-in Wi-Fi. Check your manufacturer's website for available updates.",
      },
    ],
    alternativeCauses: [
      "Too many paired devices on the car (most support 5-7 max)",
      "Phone's Bluetooth version incompatible with older car system",
      "Nearby device interference",
      "Faulty Bluetooth antenna module in vehicle",
    ],
    whenToCallPro:
      "If you have tried all the pairing steps, updated your software, and the car still refuses to find or connect to any phone, the car's Bluetooth module may have failed. A dealer or car electronics shop can test and replace the module.",
    metaTitle:
      "Car Bluetooth Not Connecting to Phone — Quick Fix Guide | RepairItFree",
    metaDescription:
      "Fix car Bluetooth pairing problems fast. Clear old pairings, re-pair your phone, and troubleshoot connection failures with this free guide.",
  },
  {
    id: "dash-cam-not-turning-on",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "dash-cam-not-turning-on",
    problemTitle: "Dash Cam Not Turning On",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: ["Microfiber cloth", "Compressed air can", "USB cable (spare)"],
    partsNeeded: [
      {
        name: "Replacement USB car charger cable",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=dash+cam+USB+power+cable+mini&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dash+cam+USB+power+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Replacement micro SD card",
        costRange: "$8–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=high+endurance+micro+sd+card+dash+cam&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=high+endurance+micro+sd+card+dash+cam&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Do not handle the dash cam while driving.",
      "A dash cam mounted to a hot windshield can be very warm — let it cool before handling.",
    ],
    quickDiagnosis:
      "A dash cam that will not power on usually has a power supply issue — the cable, the cigarette lighter adapter, or the car's power outlet. Less commonly, the SD card is corrupted and the camera freezes at startup. Try a different power source first.",
    steps: [
      {
        number: 1,
        title: "Check the power source",
        description:
          "Make sure the car is running or the ignition is in the accessory position — most 12V outlets only work when the key is turned. Try plugging a phone charger into the same outlet to confirm it has power. If the outlet is dead, check the cigarette lighter fuse in your fuse box.",
      },
      {
        number: 2,
        title: "Inspect the power cable",
        description:
          "Examine the USB or power cable from end to end. Look for kinks, fraying, or a bent connector. Try a different cable if you have one. Dash cam cables routed along the headliner can get pinched in the A-pillar trim over time, causing an invisible break inside the insulation.",
      },
      {
        number: 3,
        title: "Remove and re-insert the SD card",
        description:
          "Power the dash cam off, remove the micro SD card, and inspect the gold contacts for dirt or corrosion. Wipe them gently with a dry microfiber cloth. Re-insert the card and try powering on again. A corrupted card can prevent some dash cams from booting at all.",
      },
      {
        number: 4,
        title: "Try without the SD card",
        description:
          "Remove the SD card entirely and attempt to power on the dash cam. If it turns on without the card, your SD card is corrupted or incompatible. Format the card using your computer (FAT32 for cards up to 32GB, exFAT for larger), or replace it with a high-endurance card rated for dash cam use.",
      },
      {
        number: 5,
        title: "Perform a factory reset",
        description:
          "Most dash cams have a tiny reset button — usually a small hole on the side or bottom of the unit. Use a paperclip to press and hold it for 10 seconds. This clears any frozen firmware state. After the reset, you will need to set the date, time, and recording preferences again.",
      },
    ],
    alternativeCauses: [
      "Internal battery completely dead (needs extended charging)",
      "Overheating from direct sun exposure shutting down the unit",
      "Firmware update failed mid-process",
      "Defective unit (manufacturing fault)",
    ],
    whenToCallPro:
      "If the dash cam will not turn on with a known-good cable and power source, and a factory reset does not help, the unit is likely defective. Check if it is still under warranty before purchasing a replacement.",
    metaTitle:
      "Dash Cam Not Turning On — Easy Troubleshooting Guide | RepairItFree",
    metaDescription:
      "Fix a dash cam that won't turn on. Check power cables, SD cards, and reset your dash cam with this free step-by-step guide.",
  },
  {
    id: "car-speaker-buzzing-crackling",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "speaker-buzzing-crackling",
    problemTitle: "Car Speaker Buzzing or Crackling",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Trim removal tool",
      "Phillips screwdriver",
      "Multimeter",
      "Electrical tape",
    ],
    partsNeeded: [
      {
        name: "Replacement car speaker (if torn)",
        costRange: "$15–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=car+replacement+speaker+6.5+inch&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+replacement+speaker+6.5+inch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Speaker wire and connectors",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=car+speaker+wire+16+gauge&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+speaker+wire+16+gauge&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the negative battery terminal before removing door panels or working on wiring.",
      "Be careful with door panel clips — they break easily and are annoying to replace.",
    ],
    quickDiagnosis:
      "Buzzing or crackling from a car speaker typically comes from a torn speaker cone, a loose mounting, or a bad wire connection. If it only happens at high volume, the speaker is probably blown. If it happens at all volumes, look for loose hardware or damaged wiring.",
    steps: [
      {
        number: 1,
        title: "Isolate the problem speaker",
        description:
          "Use your stereo's balance and fade controls to send audio to one speaker at a time. This tells you exactly which speaker is the troublemaker. Note whether the buzzing happens at low volume, high volume, or both — this clue points to the cause.",
      },
      {
        number: 2,
        title: "Remove the speaker grille or door panel",
        description:
          "For door speakers, carefully pry off the door panel using a trim removal tool — start at the bottom and work your way around. For dash or rear deck speakers, remove the speaker grille. Work slowly to avoid breaking the plastic clips.",
      },
      {
        number: 3,
        title: "Inspect the speaker cone",
        description:
          "Look closely at the speaker cone (the paper or fabric part that moves). Gently press on it — it should move smoothly without scraping. Look for tears, holes, or areas where the cone has separated from the surround (the rubber ring around the edge). A torn cone is the most common cause of crackling and means the speaker needs to be replaced.",
      },
      {
        number: 4,
        title: "Check the mounting and connections",
        description:
          "Tighten all the screws holding the speaker to the door or panel. Even one loose screw can cause a rattling buzz. Check the wire connectors on the back of the speaker — push them on firmly. A loose connector causes intermittent crackling, especially on bumpy roads.",
      },
      {
        number: 5,
        title: "Replace the speaker if damaged",
        description:
          "If the cone is torn or the speaker does not move freely, it is time for a replacement. Unscrew the old speaker, disconnect the wires, connect them to the new speaker (match positive to positive), and screw it in place. Test it before reassembling the door panel. New speakers often sound noticeably better than worn factory ones, so this is a satisfying upgrade.",
      },
    ],
    alternativeCauses: [
      "Loose items behind the door panel vibrating against the speaker",
      "Amplifier clipping from gain set too high",
      "Electrical interference from phone charger or LED lights",
      "Water damage from a leaking door seal",
    ],
    whenToCallPro:
      "If the buzzing is coming from multiple speakers simultaneously or changes with engine RPM (a whining noise), the issue is likely electrical interference or a grounding problem in the audio system, which can be tricky to track down without experience.",
    metaTitle:
      "Car Speaker Buzzing or Crackling — How to Fix | RepairItFree",
    metaDescription:
      "Fix buzzing or crackling car speakers. Diagnose torn cones, loose mounts, and bad connections with this free step-by-step repair guide.",
  },
  {
    id: "car-amplifier-not-turning-on",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "amplifier-not-turning-on",
    problemTitle: "Car Amplifier Not Turning On",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Multimeter",
      "Socket set or wrench",
      "Wire stripper/crimper",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Inline fuse for amplifier power wire",
        costRange: "$5–$12",
        amazonUrl:
          "https://www.amazon.com/s?k=car+amplifier+inline+fuse+holder&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+amplifier+inline+fuse+holder&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Remote turn-on wire",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=car+amplifier+remote+turn+on+wire&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+amplifier+remote+wire&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the negative battery terminal before working on amplifier wiring.",
      "The power wire to the amp carries high current — a short can cause a fire. Always use properly rated fuses.",
      "Do not run the engine in a closed garage.",
    ],
    quickDiagnosis:
      "A car amp that will not turn on needs three things to work: constant 12V power, a ground connection, and a remote turn-on signal from the head unit. If any one of those three is missing, the amp stays dark. The most common culprit is a blown inline fuse on the power wire.",
    steps: [
      {
        number: 1,
        title: "Check the inline fuse",
        description:
          "Follow the thick power wire from the amplifier toward the battery. Within 18 inches of the battery, you will find an inline fuse holder. Open it and inspect the fuse. If the metal strip is broken, the fuse is blown. Replace it with the same amperage rating — never use a higher-rated fuse, as this creates a fire hazard.",
      },
      {
        number: 2,
        title: "Test constant power at the amp",
        description:
          "Set your multimeter to DC voltage. With the car running, touch the red probe to the amp's power terminal (marked 12V+ or B+) and the black probe to a known good ground. You should see 12-14 volts. If not, trace the power wire back looking for loose connections or damage.",
      },
      {
        number: 3,
        title: "Test the ground connection",
        description:
          "Check the amp's ground wire — it should be short (under 18 inches) and bolted to bare metal on the car's chassis. Remove the bolt, sand away any paint or rust from the contact area, and re-attach firmly. A bad ground is the second most common cause of amp problems. Test for near-zero ohms between the amp's ground terminal and the car's chassis.",
      },
      {
        number: 4,
        title: "Test the remote turn-on wire",
        description:
          "The remote wire (usually a thin blue or blue-and-white wire) carries a signal from the head unit telling the amp to wake up. With the car on and the stereo playing, test for voltage on the remote terminal — you should see 5-12V. If you get nothing, the wire may be disconnected at the back of the head unit, or the head unit's remote output may have failed.",
      },
      {
        number: 5,
        title: "Check the amp's protect mode",
        description:
          "If the amp's power light comes on red or orange instead of green, it is in protection mode. This usually means a short circuit in the speaker wires or a problem with the speaker load. Disconnect all speaker wires from the amp and turn it on. If it comes out of protect mode, reconnect speakers one at a time to find which circuit has the short.",
      },
    ],
    alternativeCauses: [
      "Internal amp failure from overheating",
      "Corroded battery terminal reducing available voltage",
      "Head unit remote output blown (common after incorrect wiring)",
      "Power wire too thin for the amp's current draw",
    ],
    whenToCallPro:
      "If the amp has constant power, a solid ground, and a remote signal but still will not turn on, the internal circuitry has likely failed. A car audio shop can confirm the diagnosis and recommend whether repair or replacement makes more sense.",
    metaTitle:
      "Car Amplifier Not Turning On — Troubleshooting Guide | RepairItFree",
    metaDescription:
      "Fix a car amplifier that won't turn on. Check fuses, power, ground, and remote wires step by step with this free repair guide.",
  },
  {
    id: "car-subwoofer-not-working",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "subwoofer-not-working",
    problemTitle: "Car Subwoofer Not Working",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "RCA cables (spare pair for testing)",
    ],
    partsNeeded: [
      {
        name: "RCA audio cables",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=car+audio+RCA+cables&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+audio+RCA+cables&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Replacement subwoofer (if voice coil is blown)",
        costRange: "$25–$60",
        amazonUrl:
          "https://www.amazon.com/s?k=car+subwoofer+10+inch&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=car+subwoofer+10+inch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the negative battery terminal before working on wiring.",
      "Subwoofer enclosures can be heavy — lift carefully to avoid back strain.",
    ],
    quickDiagnosis:
      "If your car subwoofer has stopped producing bass, the problem is usually the amplifier (see the amp guide), the RCA signal cables, or the subwoofer itself. If the amp is on and working but the sub is silent, focus on the signal path and the sub's voice coil.",
    steps: [
      {
        number: 1,
        title: "Verify the amplifier is working",
        description:
          "Check that the amplifier's power light is on and green (not in protect mode). If the amp is not turning on, follow the Car Amplifier Not Turning On guide first. The amp must be working before you can diagnose the subwoofer.",
      },
      {
        number: 2,
        title: "Check the head unit settings",
        description:
          "Make sure the subwoofer output is enabled in your head unit's audio settings. Check that the low-pass crossover is set correctly (usually 80-120Hz) and the sub level is not turned all the way down. On some head units, you need to specifically enable the subwoofer output in the setup menu.",
      },
      {
        number: 3,
        title: "Test the RCA cables",
        description:
          "Swap the subwoofer RCA cables with a known-good pair. If you only have one pair, try swapping the left and right RCA plugs at the amplifier end. If the sub starts working with one swap, the original cable is bad. RCA cables can develop internal breaks from being stepped on in the trunk.",
      },
      {
        number: 4,
        title: "Test the subwoofer with a multimeter",
        description:
          "Disconnect the speaker wire from the amp and set your multimeter to measure resistance (ohms). Touch the probes to the speaker wire terminals. A working sub should read close to its rated impedance (usually 2 or 4 ohms). If you read infinite resistance (open circuit), the voice coil is blown. If you read near zero, it is shorted. Either way, the sub needs replacement.",
      },
      {
        number: 5,
        title: "Check the speaker wire connections",
        description:
          "Inspect the wire connections at both the amplifier and the subwoofer terminals. Loose or corroded connections are common, especially at the sub's terminal cup in the enclosure. Remove each connection, clean the bare wire ends, and reconnect firmly. A weak connection can cause intermittent or no bass output.",
      },
    ],
    alternativeCauses: [
      "Amplifier gain turned too low",
      "Bass boost on head unit disabled after a settings reset",
      "Enclosure leak reducing bass output (not a complete failure)",
      "Subwoofer wired out of phase (canceling bass instead of producing it)",
    ],
    whenToCallPro:
      "If the amp and wiring check out but the sub still produces no sound, or if you hear a scraping noise from the sub, the voice coil is damaged. A car audio shop can test the sub properly and help you pick the right replacement for your enclosure.",
    metaTitle:
      "Car Subwoofer Not Working — Diagnosis and Fix | RepairItFree",
    metaDescription:
      "Fix a car subwoofer with no bass. Test amplifier, RCA cables, and voice coils step by step with this free troubleshooting guide.",
  },
  {
    id: "car-usb-port-not-charging",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "usb-port-not-charging",
    problemTitle: "Car USB Port Not Charging Phone",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Compressed air can",
      "Wooden toothpick",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "USB car charger adapter (alternative)",
        costRange: "$8–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=fast+charge+car+USB+adapter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=fast+charge+car+USB+adapter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Do not use metal objects to clean the USB port — you could short the contacts.",
    ],
    quickDiagnosis:
      "When your car's USB port will not charge your phone, the most common cause is lint and debris packed into the USB port. The second most common cause is a bad cable. Actual port failure is relatively rare.",
    steps: [
      {
        number: 1,
        title: "Try a different cable",
        description:
          "Swap your charging cable with a different one. Charging cables wear out faster than you might think, especially near the connectors where they get bent repeatedly. If a new cable works, your old cable was the problem — toss it and save yourself future headaches.",
      },
      {
        number: 2,
        title: "Clean the USB port",
        description:
          "Shine a flashlight into the port and look for lint, dust, or debris. Use a wooden toothpick to gently scrape out any compacted lint from the bottom of the port. Then blow it out with compressed air. Pocket lint from your phone transfers to the cable connector and gets pushed deep into the car's USB port over time.",
      },
      {
        number: 3,
        title: "Check the fuse",
        description:
          "Your car's USB ports are typically on a shared fuse with other accessories. Check your owner's manual for the correct fuse location — it is often labeled ACC or USB. Pull the fuse and inspect it. Replace with the same amperage if blown.",
      },
      {
        number: 4,
        title: "Test with a different device",
        description:
          "Plug in a different phone or USB device. If the port charges the other device fine, the issue is with your phone's charging port, not the car. Clean your phone's port with the same toothpick technique.",
      },
      {
        number: 5,
        title: "Use an alternative charging solution",
        description:
          "If the built-in USB port only provides low power (many factory ports output just 0.5A — barely enough to keep up with navigation), plug a quality USB car charger into the 12V cigarette lighter outlet. These adapters provide much faster charging and are an inexpensive workaround for weak factory USB ports.",
      },
    ],
    alternativeCauses: [
      "USB port is data-only (some cars have separate charge and data ports)",
      "Phone requires more power than the port provides",
      "Infotainment system software glitch",
      "Internal USB module failure",
    ],
    whenToCallPro:
      "If the USB port is physically damaged (loose, pushed in, or visibly broken), it needs to be replaced. This usually involves removing dashboard trim and may require soldering on some vehicles. A dealer or auto electrician can handle this.",
    metaTitle:
      "Car USB Port Not Charging Phone — Quick Fix Guide | RepairItFree",
    metaDescription:
      "Fix a car USB port that won't charge your phone. Clean lint, check cables and fuses, and get charging again with this free guide.",
  },
  {
    id: "car-key-fob-battery-replacement",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "key-fob-battery-replacement",
    problemTitle: "Car Key Fob Battery Replacement",
    difficulty: "Easy",
    timeEstimate: "5-10 minutes",
    costEstimate: "$3–$10",
    toolsNeeded: [
      "Small flathead screwdriver or coin",
      "Tweezers (optional)",
    ],
    partsNeeded: [
      {
        name: "CR2032 battery (most common)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=CR2032+battery+car+key+fob&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=CR2032+battery+car+key+fob&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "CR2025 battery (alternate size)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=CR2025+battery+key+fob&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=CR2025+battery+key+fob&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Keep button batteries away from children and pets — they are extremely dangerous if swallowed.",
      "Dispose of old batteries properly at a recycling drop-off point.",
    ],
    quickDiagnosis:
      "If your key fob's range has decreased, you have to press buttons multiple times, or it has stopped working entirely, the battery is almost certainly dead. Most key fob batteries last 2-4 years. This is one of the simplest and cheapest fixes you can do.",
    steps: [
      {
        number: 1,
        title: "Identify your battery type",
        description:
          "Check your owner's manual or look for the battery type printed on the back of the key fob. The most common types are CR2032 and CR2025. If you cannot find the info, you can open the fob and read it right off the old battery. Buy a name-brand replacement — cheap off-brand batteries often die much sooner.",
      },
      {
        number: 2,
        title: "Open the key fob",
        description:
          "Most key fobs have a small seam around the edge. Insert a thin flathead screwdriver or a coin into the seam and gently twist to pop it open. Some fobs have a small release button or a sliding panel. Work slowly — the two halves are held together by small clips that can break if you force them.",
      },
      {
        number: 3,
        title: "Remove the old battery",
        description:
          "Note which side of the battery faces up (usually the + side). Use a fingernail, tweezers, or the screwdriver to gently lever the old battery out of its holder. Take a quick photo with your phone before removing it if you want to remember the exact orientation.",
      },
      {
        number: 4,
        title: "Insert the new battery",
        description:
          "Place the new battery in the same orientation as the old one, with the + symbol facing the same direction. Press it gently into the clip or holder until it sits flat and secure. Avoid touching the flat surfaces of the battery with your fingers — oils from your skin can reduce battery life.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Snap the two halves of the key fob back together. You should hear or feel the clips click into place. Test all buttons — lock, unlock, trunk, and panic. Stand at various distances from your car to verify the range has returned to normal. If the fob still does not work, you may need to re-pair it (check your owner's manual for the re-sync procedure).",
      },
    ],
    alternativeCauses: [
      "Key fob needs to be re-programmed to the vehicle",
      "Corroded battery contacts inside the fob",
      "Damaged circuit board from drops or water exposure",
      "Vehicle's receiver module failure (rare)",
    ],
    whenToCallPro:
      "If a fresh battery does not restore function and the re-sync procedure does not work, the key fob's circuit board may be damaged. A locksmith or dealer can test the fob and program a replacement if needed, though replacement fobs from a dealer can be expensive.",
    metaTitle:
      "Car Key Fob Battery Replacement — Easy DIY Guide | RepairItFree",
    metaDescription:
      "Replace your car key fob battery in 5 minutes. Step-by-step guide for CR2032 and CR2025 batteries. Free and easy fix.",
  },
  {
    id: "car-remote-start-not-working",
    category: "Car Electronics",
    categorySlug: "car-electronics",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "remote-start-not-working",
    problemTitle: "Car Remote Start Not Working",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: ["Vehicle owner's manual", "Small flathead screwdriver"],
    partsNeeded: [
      {
        name: "Key fob battery (CR2032 or CR2025)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=CR2032+battery+key+fob&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=CR2032+battery+key+fob&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never use remote start in a closed garage — exhaust fumes are deadly.",
      "Make sure no one is under or near the vehicle before using remote start.",
    ],
    quickDiagnosis:
      "Remote start systems will refuse to activate under several normal conditions that are not actually faults. Before assuming something is broken, rule out the common safety lockouts. A dead key fob battery is the most frequent real cause of remote start failure.",
    steps: [
      {
        number: 1,
        title: "Replace the key fob battery",
        description:
          "A weak battery may still lock and unlock your doors but lack enough power for the remote start signal, which requires more range. Replace the battery with a fresh CR2032 or CR2025 (check your manual). This is the most common fix and costs just a few dollars.",
      },
      {
        number: 2,
        title: "Check for safety lockout conditions",
        description:
          "Remote start will not work if the check engine light is on, the hood is open (or the hood sensor thinks it is), the car is not in Park (automatic) or Neutral (manual), or certain doors are not fully closed. Check all of these conditions. A stuck hood latch sensor is a surprisingly common culprit.",
      },
      {
        number: 3,
        title: "Try the correct button sequence",
        description:
          "Make sure you are pressing the right buttons. Most factory systems require pressing the lock button first, then pressing and holding the remote start button within a few seconds. Aftermarket systems vary — check your remote start manual for the exact sequence. Some require pressing the start button twice.",
      },
      {
        number: 4,
        title: "Move closer to the vehicle",
        description:
          "Remote start range is often shorter than the lock/unlock range. Try standing within 30 feet of the car with a clear line of sight. Radio interference from buildings, other vehicles, or nearby electronics can also reduce range.",
      },
      {
        number: 5,
        title: "Reset the system",
        description:
          "For factory systems, try disconnecting the negative battery terminal for 5 minutes, then reconnecting it. For aftermarket systems, check the manual for a reset procedure — some have a small reset button on the control module, usually installed under the dashboard. After a reset, test the remote start again.",
      },
    ],
    alternativeCauses: [
      "Low fuel level (some systems disable remote start below a quarter tank)",
      "Too many consecutive remote start attempts (system locks out temporarily)",
      "Aftermarket remote start antenna came loose",
      "Vehicle alarm triggered and locked out the system",
    ],
    whenToCallPro:
      "If none of the above steps fix the issue, the remote start control module or its wiring may have a fault. Aftermarket systems are especially prone to wiring issues over time. The shop that installed the system (if aftermarket) is the best place to start, as they know the wiring layout.",
    metaTitle:
      "Car Remote Start Not Working — Troubleshooting Guide | RepairItFree",
    metaDescription:
      "Fix a car remote start that won't work. Check key fob battery, safety lockouts, and system resets with this free step-by-step guide.",
  },

  // ============================================================
  // OUTDOOR POWER EQUIPMENT
  // ============================================================
  {
    id: "honda-lawn-mower-wont-start",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Honda",
    brandSlug: "honda",
    problemSlug: "lawn-mower-wont-start",
    problemTitle: "Lawn Mower Won't Start",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Socket set or spark plug wrench",
      "Flathead screwdriver",
      "Clean rag",
      "Fresh gasoline container",
    ],
    partsNeeded: [
      {
        name: "Spark plug (NGK or equivalent)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=honda+lawn+mower+spark+plug&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=honda+lawn+mower+spark+plug&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Air filter",
        costRange: "$5–$12",
        amazonUrl:
          "https://www.amazon.com/s?k=honda+lawn+mower+air+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=honda+lawn+mower+air+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the spark plug wire before working near the blade or engine.",
      "Work outdoors only — gasoline fumes are flammable and toxic.",
      "Let the engine cool completely before touching the exhaust or cylinder head.",
      "Never tip a mower with gas in the tank toward the carburetor side.",
    ],
    quickDiagnosis:
      "A Honda lawn mower needs three things to start: spark, fuel, and air. When it will not start, the problem is almost always one of those three. Stale gas left over from last season is by far the most common cause of a mower that cranks but will not fire.",
    steps: [
      {
        number: 1,
        title: "Check the basics first",
        description:
          "Make sure there is gas in the tank, the fuel valve is set to ON, the throttle lever is in the correct start position, and the bail lever (the bar you squeeze against the handle) is fully engaged. On Honda mowers, the fuel valve is a small knob on the side of the engine — it must be turned to the ON position. These simple oversights account for a surprising number of no-start calls.",
      },
      {
        number: 2,
        title: "Check for stale fuel",
        description:
          "Gas starts going bad after about 30 days and can clog the carburetor. If the fuel smells sour or looks dark and varnished, drain it into an approved container and refill with fresh gas. For gas that has been sitting for just a few months, adding a fuel stabilizer and running the engine may clear things up. Prevention tip: add fuel stabilizer every time you fill up.",
      },
      {
        number: 3,
        title: "Inspect and replace the spark plug",
        description:
          "Remove the spark plug using a socket wrench (usually 13/16 inch for Honda). Look at the tip — it should be light brown. If it is black and sooty, oily, or the electrode is worn down, replace it. Gap the new plug to your mower's specification (typically 0.028-0.031 inches for Honda). A fresh spark plug is cheap insurance and makes a big difference in starting reliability.",
      },
      {
        number: 4,
        title: "Check the air filter",
        description:
          "Open the air filter cover (usually a plastic housing on the side of the engine with a clip or wing nut). Pull out the foam or paper filter element. If it is caked with dirt or oil, it is choking the engine. Paper filters should be replaced. Foam filters can be washed with soapy water, rinsed, dried, and lightly re-oiled with clean engine oil.",
      },
      {
        number: 5,
        title: "Clean the carburetor bowl",
        description:
          "If fresh gas, a new spark plug, and a clean air filter do not solve the problem, the carburetor is likely gummed up. Locate the carburetor bowl at the bottom of the carb — it is usually held on by a single bolt. Remove the bolt, catch any fuel in a rag, and clean the bowl and the small jet hole in the bolt with carburetor cleaner. This often brings a stubborn mower back to life.",
      },
    ],
    alternativeCauses: [
      "Dead or missing engine oil (some Honda mowers have a low-oil shutoff)",
      "Faulty ignition coil",
      "Sheared flywheel key from hitting a hard object",
      "Clogged fuel line between tank and carburetor",
    ],
    whenToCallPro:
      "If the mower still will not start after fresh fuel, a new spark plug, a clean air filter, and a carburetor cleaning, the ignition coil or internal engine components may need attention. A small engine repair shop can diagnose these issues quickly and affordably.",
    metaTitle:
      "Honda Lawn Mower Won't Start — Step-by-Step Fix | RepairItFree",
    metaDescription:
      "Fix a Honda lawn mower that won't start. Check fuel, spark plug, air filter, and carburetor with this free step-by-step repair guide.",
  },
  {
    id: "stihl-string-trimmer-wont-start",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "STIHL",
    brandSlug: "stihl",
    problemSlug: "string-trimmer-wont-start",
    problemTitle: "String Trimmer Won't Start",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Spark plug wrench (usually included with STIHL)",
      "Flathead screwdriver",
      "Clean rag",
      "Carburetor cleaner spray",
    ],
    partsNeeded: [
      {
        name: "Spark plug (Bosch WSR 6 F or equivalent)",
        costRange: "$3–$7",
        amazonUrl:
          "https://www.amazon.com/s?k=stihl+trimmer+spark+plug&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=stihl+trimmer+spark+plug&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Air filter",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=stihl+string+trimmer+air+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=stihl+trimmer+air+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Work in a well-ventilated area when handling fuel.",
      "Keep hands and clothing away from the cutting head — it can spin unexpectedly.",
      "Use the correct 50:1 gas-to-oil mix. Straight gasoline will destroy a two-stroke engine.",
      "Let the engine cool before refueling.",
    ],
    quickDiagnosis:
      "STIHL trimmers are two-stroke engines that need proper fuel mix, spark, and air to run. The most common no-start cause is old or improperly mixed fuel. These engines are very sensitive to fuel quality. If it has been sitting for more than a month, start with fresh fuel.",
    steps: [
      {
        number: 1,
        title: "Follow the correct starting procedure",
        description:
          "Set the choke to the full-choke (cold start) position. Press the fuel primer bulb 5-7 times until you see fuel in the bulb. Pull the starter rope briskly until the engine fires briefly (you will hear a pop or partial start). Then move the choke to the half-choke or run position and pull again. Many no-start issues are simply incorrect starting technique.",
      },
      {
        number: 2,
        title: "Drain and replace the fuel",
        description:
          "Empty the old fuel into an approved container. Mix fresh premium unleaded gas with STIHL two-stroke oil at a 50:1 ratio (2.6 oz of oil per gallon of gas). Never use fuel with more than 10% ethanol (E10). Pour in the fresh mix, press the primer bulb again, and try starting. Fresh, properly mixed fuel solves more trimmer problems than any other fix.",
      },
      {
        number: 3,
        title: "Check the spark plug",
        description:
          "Remove the spark plug with the included wrench. If the tip is wet with fuel, the engine is flooded — dry it off with a clean rag and let the cylinder air out for a few minutes. If the plug is dry, fuel is not reaching the cylinder. If the electrode is damaged or heavily fouled, replace the plug. Reinstall and try again.",
      },
      {
        number: 4,
        title: "Clean or replace the air filter",
        description:
          "Pop off the air filter cover (usually a snap-on cover on the side of the engine). Remove the filter and tap it on a hard surface to knock loose debris out. If it is very dirty or damaged, replace it. A clogged air filter makes the fuel mixture too rich and the engine will not start or will bog down immediately.",
      },
      {
        number: 5,
        title: "Check the spark arrestor screen",
        description:
          "The spark arrestor is a tiny screen in the muffler that catches hot particles. Over time, carbon builds up and blocks exhaust flow, preventing the engine from starting or running. Remove the muffler cover, pull out the small mesh screen, and clean it with a wire brush or replace it. This is an often overlooked fix that takes two minutes.",
      },
    ],
    alternativeCauses: [
      "Flooded engine from too many choke pulls (wait 15 minutes and try with no choke)",
      "Cracked fuel lines (common on older trimmers — they harden with age)",
      "Faulty ignition coil",
      "Clogged carburetor jets from ethanol fuel residue",
    ],
    whenToCallPro:
      "If fresh fuel, a new spark plug, and a clean air filter do not get the trimmer running, the carburetor may need a professional rebuild or replacement. STIHL dealers have trained technicians who can diagnose the issue quickly.",
    metaTitle:
      "STIHL String Trimmer Won't Start — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a STIHL string trimmer that won't start. Check fuel mix, spark plug, air filter, and spark arrestor with this free repair guide.",
  },
  {
    id: "husqvarna-chainsaw-wont-start",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Husqvarna",
    brandSlug: "husqvarna",
    problemSlug: "chainsaw-wont-start",
    problemTitle: "Chainsaw Won't Start",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Spark plug wrench",
      "Flathead screwdriver",
      "T-27 Torx screwdriver (for some Husqvarna models)",
      "Clean rag",
    ],
    partsNeeded: [
      {
        name: "Spark plug (Champion RCJ7Y or equivalent)",
        costRange: "$3–$7",
        amazonUrl:
          "https://www.amazon.com/s?k=husqvarna+chainsaw+spark+plug&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=husqvarna+chainsaw+spark+plug&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Air filter",
        costRange: "$5–$12",
        amazonUrl:
          "https://www.amazon.com/s?k=husqvarna+chainsaw+air+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=husqvarna+chainsaw+air+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Always wear gloves when handling the chain — it is razor-sharp even when not spinning.",
      "Keep the chain brake engaged when starting the saw.",
      "Work outdoors only — chainsaws produce dangerous exhaust fumes.",
      "Use the proper 50:1 fuel mix. Running straight gas destroys the engine permanently.",
      "Never start a chainsaw while holding it in the air.",
    ],
    quickDiagnosis:
      "Husqvarna chainsaws are two-stroke engines with the same three requirements: spark, fuel, and air. Old fuel is the number one cause of a no-start. However, chainsaws are also commonly flooded by pulling too many times on full choke without switching to the run position after the first pop.",
    steps: [
      {
        number: 1,
        title: "Use the correct starting sequence",
        description:
          "Engage the chain brake. Set the choke to full (cold start). Turn on the ignition switch. Press the fuel primer (decompression valve on some models) if equipped. Pull the starter cord until you hear the engine try to fire (a brief pop). Immediately move the choke to the half-open position and pull again. It should start within 1-3 more pulls. Leaving the choke on full after the first pop floods the engine.",
      },
      {
        number: 2,
        title: "Clear a flooded engine",
        description:
          "If you smell strong fuel, the engine is flooded. Move the choke to the run (open) position, hold the throttle trigger wide open, and pull the starter cord 10-15 times. This pumps fresh air through the engine to clear excess fuel. Then try the normal starting procedure again. For severely flooded engines, remove the spark plug and pull the cord several times to blow out the excess fuel.",
      },
      {
        number: 3,
        title: "Drain and replace the fuel",
        description:
          "Pour out old fuel and replace with a fresh 50:1 mix of premium unleaded gas and quality two-stroke oil. Husqvarna recommends their own brand oil, but any good-quality two-stroke oil works fine. Press the primer bulb until you see fuel flowing through the return line. Old gas with ethanol is especially destructive in chainsaw carburetors.",
      },
      {
        number: 4,
        title: "Replace the spark plug",
        description:
          "Remove the top cover and unscrew the spark plug. Check the gap (typically 0.020 inches for Husqvarna) and replace it if the electrode is worn, fouled, or cracked. When you have the plug out, pull the starter cord while holding the plug against the metal engine body — you should see a strong blue spark. No spark means the ignition coil may be failing.",
      },
      {
        number: 5,
        title: "Clean the air filter",
        description:
          "Remove the top cover and pull out the air filter. Chainsaws suck in sawdust constantly, so the filter clogs quickly. Tap out loose debris, brush it clean, or wash with warm soapy water and let it dry completely. A clogged air filter makes the fuel mixture too rich and is a very common reason the saw bogs down or will not start.",
      },
    ],
    alternativeCauses: [
      "Clogged spark arrestor screen in the muffler",
      "Broken or cracked fuel lines (very common on older saws)",
      "Faulty ignition coil (no spark)",
      "Compression loss from worn piston rings",
    ],
    whenToCallPro:
      "If you have no spark with a new plug, if the starter rope does not have resistance (indicating a compression problem), or if the carburetor needs rebuilding, a Husqvarna dealer or small engine shop can handle these repairs. Chainsaws are powerful tools, and internal engine work is best left to experienced mechanics.",
    metaTitle:
      "Husqvarna Chainsaw Won't Start — Fix It Step by Step | RepairItFree",
    metaDescription:
      "Fix a Husqvarna chainsaw that won't start. Troubleshoot flooding, stale fuel, spark plugs, and air filters with this free repair guide.",
  },
  {
    id: "echo-leaf-blower-wont-start",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "ECHO",
    brandSlug: "echo",
    problemSlug: "leaf-blower-wont-start",
    problemTitle: "Leaf Blower Won't Start",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Spark plug wrench",
      "Phillips screwdriver",
      "Clean rag",
      "Carburetor cleaner spray",
    ],
    partsNeeded: [
      {
        name: "Spark plug (NGK BPM8Y or equivalent)",
        costRange: "$3–$7",
        amazonUrl:
          "https://www.amazon.com/s?k=echo+leaf+blower+spark+plug&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=echo+leaf+blower+spark+plug&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Fuel filter",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=echo+leaf+blower+fuel+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=echo+leaf+blower+fuel+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Work in a well-ventilated outdoor area when handling fuel.",
      "Use the correct 50:1 gas-to-oil mix. Straight gas will seize the engine.",
      "Keep fingers and loose clothing away from the fan intake.",
      "Let the engine cool before refueling.",
    ],
    quickDiagnosis:
      "ECHO leaf blowers are reliable two-stroke machines, but they suffer from the same fuel-related issues as all small engines. If yours sat unused with fuel in it for more than a month or two, old gas is almost certainly the problem. The fuel system on these blowers is straightforward and easy to service.",
    steps: [
      {
        number: 1,
        title: "Follow the proper starting procedure",
        description:
          "Set the ignition switch to ON. Move the choke lever to the START (full choke) position. Press the primer bulb 8-10 times until fuel is visible in the bulb. Pull the starter rope firmly until the engine pops or tries to fire. Then move the choke to the RUN (half or open) position and pull again. Many starting failures come from not priming enough or not switching off the choke at the right time.",
      },
      {
        number: 2,
        title: "Replace the fuel with fresh mix",
        description:
          "Dump old fuel out and mix fresh premium gas with two-stroke oil at a 50:1 ratio. ECHO Power Blend oil is formulated for their engines but any quality two-stroke oil works. Prime the system again with the fresh fuel and try starting. You should notice a difference right away if bad fuel was the problem.",
      },
      {
        number: 3,
        title: "Check and replace the spark plug",
        description:
          "Remove the spark plug and inspect it. A wet, fouled plug means the engine is getting fuel but not igniting it. A dry plug means fuel is not reaching the cylinder. Replace the plug with the correct type and gap it to 0.025 inches. A fresh plug only costs a few dollars and eliminates one variable immediately.",
      },
      {
        number: 4,
        title: "Replace the fuel filter",
        description:
          "The fuel filter sits inside the gas tank, attached to the end of the fuel line. You can fish it out through the tank opening using a piece of wire bent into a hook. If it looks dark or clogged, pull it off the fuel line and push on a new one. A blocked fuel filter starves the engine and is a common issue on machines that have used ethanol-blended fuel.",
      },
      {
        number: 5,
        title: "Clean the air filter and spark arrestor",
        description:
          "Remove the air filter cover and clean or replace the filter. Then check the spark arrestor — a small mesh screen in the muffler. Remove it and use a wire brush to scrape off carbon buildup. A blocked arrestor creates back-pressure that prevents the engine from running. Reinstall both and try starting again.",
      },
    ],
    alternativeCauses: [
      "Cracked or hardened fuel lines",
      "Carburetor diaphragm stiff or torn",
      "Ignition coil failure",
      "Flooded engine from over-priming",
    ],
    whenToCallPro:
      "If the carburetor needs a complete rebuild or the ignition coil has failed, these repairs are possible for handy owners but can be tricky on two-stroke engines. An ECHO dealer or small engine shop can do the job quickly and typically for a reasonable price.",
    metaTitle:
      "ECHO Leaf Blower Won't Start — Fix Guide | RepairItFree",
    metaDescription:
      "Fix an ECHO leaf blower that won't start. Troubleshoot fuel, spark plug, fuel filter, and air filter with this free step-by-step guide.",
  },
  {
    id: "karcher-pressure-washer-no-pressure",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Karcher",
    brandSlug: "karcher",
    problemSlug: "pressure-washer-no-pressure",
    problemTitle: "Pressure Washer Has No Pressure",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Adjustable wrench",
      "Needle or thin wire",
      "Bucket",
      "Garden hose",
    ],
    partsNeeded: [
      {
        name: "Replacement nozzle set",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=karcher+pressure+washer+nozzle+set&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=karcher+pressure+washer+nozzle+set&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "O-ring kit for hose connections",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=karcher+pressure+washer+o+ring+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=karcher+pressure+washer+o+ring+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never point the spray wand at people or animals — even low-pressure water can cause injury.",
      "Relieve pressure from the system before disconnecting hoses.",
      "Wear safety glasses when troubleshooting high-pressure connections.",
      "For gas models: work outdoors and let the engine cool before refueling.",
    ],
    quickDiagnosis:
      "When a Karcher pressure washer runs but produces little or no pressure, the issue is usually a clogged nozzle, an air leak in the water supply, or a worn pump component. Start with the simplest causes before assuming the pump has failed — most no-pressure situations have an easy fix.",
    steps: [
      {
        number: 1,
        title: "Check the water supply",
        description:
          "Make sure the garden hose is fully turned on and delivering a strong flow. Disconnect the hose from the pressure washer and let it run into a bucket — you need at least 2 gallons per minute. A kinked hose, partially closed valve, or clogged garden hose filter will starve the pump and result in no pressure. Also check the inlet screen filter on the pressure washer where the hose connects.",
      },
      {
        number: 2,
        title: "Purge air from the system",
        description:
          "Air trapped in the pump is a very common cause of no pressure. With the machine off, connect the water supply and squeeze the spray trigger with the nozzle removed. Let water flow through for 30 seconds to push out all the air. You will hear sputtering that changes to a steady stream when the air is out. Then reattach the nozzle and start the machine.",
      },
      {
        number: 3,
        title: "Clean or replace the nozzle",
        description:
          "Remove the nozzle from the wand and hold it up to the light — can you see through the tiny hole? Dirt and mineral deposits frequently clog this opening. Use a needle or thin wire to clear the hole, and rinse with water. If the nozzle is worn (the spray pattern is wide and weak instead of tight and focused), replace it. Worn nozzles gradually lose pressure.",
      },
      {
        number: 4,
        title: "Inspect hose connections and O-rings",
        description:
          "Check every connection point — the garden hose to the inlet, the high-pressure hose to the pump, and the wand connection. Look for leaks while the machine is running. Any leak means pressure loss. Remove the connections and inspect the O-rings (small rubber rings inside the fittings). Replace any that are cracked, flat, or missing.",
      },
      {
        number: 5,
        title: "Check the unloader valve",
        description:
          "The unloader valve recirculates water when the trigger is released and resets when you squeeze it again. If it gets stuck, the pump runs but pressure never builds. On most Karcher models, you can reset it by squeezing the trigger several times in quick succession. If it has an adjustment knob, turn it in (clockwise) slightly to increase pressure. Avoid turning it too far, which can damage the pump.",
      },
    ],
    alternativeCauses: [
      "Worn pump valves or pistons (high-hour machines)",
      "Thermal bypass activated from running too long without pulling trigger",
      "Detergent siphon tube clogging the system",
      "Cracked or kinked high-pressure hose",
    ],
    whenToCallPro:
      "If the pump makes a loud knocking noise, leaks oil, or still has no pressure after checking all external causes, the internal pump components are likely worn. Pump rebuild kits are available, but the repair requires some mechanical skill. A pressure washer repair shop can rebuild or replace the pump.",
    metaTitle:
      "Karcher Pressure Washer No Pressure — How to Fix | RepairItFree",
    metaDescription:
      "Fix a Karcher pressure washer with no pressure. Check nozzles, air locks, O-rings, and the unloader valve with this free step-by-step guide.",
  },
  {
    id: "john-deere-riding-mower-wont-start",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "John Deere",
    brandSlug: "john-deere",
    problemSlug: "riding-mower-wont-start",
    problemTitle: "Riding Mower Won't Start",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Socket set",
      "Spark plug wrench",
      "Multimeter",
      "Jumper cables or battery charger",
      "Clean rag",
    ],
    partsNeeded: [
      {
        name: "Riding mower battery (if dead)",
        costRange: "$25–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=john+deere+riding+mower+battery&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=john+deere+riding+mower+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Spark plug",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=john+deere+riding+mower+spark+plug&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=john+deere+riding+mower+spark+plug&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Always set the parking brake before troubleshooting.",
      "Disconnect the spark plug wire before working near the blade deck.",
      "Riding mower batteries contain acid — wear gloves and eye protection.",
      "Never bypass safety switches — they exist to prevent serious injuries.",
      "Work outdoors only — exhaust fumes are toxic.",
    ],
    quickDiagnosis:
      "John Deere riding mowers have multiple safety interlock switches that must all be satisfied before the engine will crank. If you turn the key and hear nothing at all, the most likely causes are a dead battery or a safety switch issue. If the engine cranks but will not fire, look at fuel and spark.",
    steps: [
      {
        number: 1,
        title: "Check the safety interlock positions",
        description:
          "John Deere riding mowers will not start unless the brake pedal is fully depressed, the blade engagement (PTO) is disengaged, and you are sitting in the seat. The seat switch detects your weight — try bouncing slightly in the seat while turning the key, as the switch can be finicky. Make sure the transmission is in Neutral (hydrostatic) or the clutch/brake pedal is fully depressed.",
      },
      {
        number: 2,
        title: "Test and charge the battery",
        description:
          "Set your multimeter to DC voltage and test across the battery terminals. A healthy battery reads 12.4-12.7 volts. Below 12.0 volts, the battery does not have enough power to turn the starter. Charge it with a battery charger or jump it from a car battery (engine off on the car). If the battery will not hold a charge, it needs to be replaced — riding mower batteries typically last 3-4 years.",
      },
      {
        number: 3,
        title: "Clean the battery terminals",
        description:
          "Corrosion on the battery posts is extremely common on outdoor equipment. Remove the cables (negative first, then positive) and scrub the posts and cable ends with a wire brush or a mixture of baking soda and water. Rinse, dry, and reconnect (positive first, then negative). Tight, clean connections make a dramatic difference in cranking power.",
      },
      {
        number: 4,
        title: "Check the fuel system",
        description:
          "If the engine cranks strongly but will not fire, check for fuel. Make sure the fuel shutoff valve (if equipped) is open. Look at the fuel filter — if it is dark or clogged, replace it. Drain any fuel that has been sitting for more than 30 days and refill with fresh gasoline. Riding mowers are especially susceptible to stale fuel issues because they often sit for weeks between uses.",
      },
      {
        number: 5,
        title: "Inspect the spark plug",
        description:
          "Remove the spark plug (or plugs — some V-twin engines have two). Check for fouling, wear, or damage. Replace if in doubt — they are inexpensive. While you have the plug out, crank the engine briefly to make sure you see a spark at the plug tip. No spark could indicate a faulty ignition coil or a safety switch problem interrupting the ignition circuit.",
      },
      {
        number: 6,
        title: "Check the starter solenoid",
        description:
          "If you hear a single click when you turn the key but the engine does not crank, the starter solenoid may be faulty. It is a small cylindrical or box-shaped component near the battery or starter. With a multimeter, check for 12V at the solenoid's input terminal when the key is turned. If power is present but the starter does not engage, the solenoid or starter motor has failed.",
      },
    ],
    alternativeCauses: [
      "Corroded or loose wiring at the ignition switch",
      "Failed seat safety switch",
      "Clogged air filter starving the engine",
      "Faulty starter motor (rare but possible on older mowers)",
    ],
    whenToCallPro:
      "If the starter motor or solenoid has failed, or if multiple safety switches seem to be malfunctioning, a John Deere dealer or lawn equipment shop has the diagnostic tools to pinpoint the problem quickly. Electrical issues in the safety interlock system can be difficult to trace without a wiring diagram.",
    metaTitle:
      "John Deere Riding Mower Won't Start — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a John Deere riding mower that won't start. Check battery, safety switches, fuel, and spark with this free step-by-step guide.",
  },
  {
    id: "toro-snow-blower-wont-start",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Toro",
    brandSlug: "toro",
    problemSlug: "snow-blower-wont-start",
    problemTitle: "Snow Blower Won't Start",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Spark plug wrench",
      "Socket set",
      "Clean rag",
      "Fresh gasoline container",
    ],
    partsNeeded: [
      {
        name: "Spark plug",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=toro+snow+blower+spark+plug&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=toro+snow+blower+spark+plug&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Fuel stabilizer",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=fuel+stabilizer+small+engine&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=fuel+stabilizer+small+engine&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never put your hands in the auger or chute — use a clean-out tool or stick.",
      "Work in a well-ventilated area, not inside the garage with the door closed.",
      "Let the engine cool before refueling — hot metal near gasoline is a fire hazard.",
      "Disconnect the spark plug wire before clearing jams or working on moving parts.",
    ],
    quickDiagnosis:
      "Snow blowers sit idle for months and then need to work on the coldest day of the year. Old gasoline left in the tank over spring and summer is the number one reason snow blowers will not start when winter arrives. The carburetor gets gummed up by stale fuel, and cold temperatures make starting even harder.",
    steps: [
      {
        number: 1,
        title: "Check and replace old fuel",
        description:
          "If the gas has been sitting since last winter, drain it out. Old gasoline turns into a varnish-like residue that clogs the tiny passages in the carburetor. Fill with fresh gas and add fuel stabilizer. If your Toro has a fuel shutoff valve, make sure it is in the ON position. Press the primer bulb 3-5 times to draw fresh fuel into the carburetor.",
      },
      {
        number: 2,
        title: "Use the choke and primer correctly",
        description:
          "Set the choke to FULL for a cold start. Set the throttle to FAST or the rabbit symbol. Press the primer bulb firmly 3-5 times (you might feel fuel resistance building). If your model has an electric start, hold the starter button for up to 10 seconds. For pull-start models, give firm, full-length pulls. After the first sputter, move the choke to half or off.",
      },
      {
        number: 3,
        title: "Check and replace the spark plug",
        description:
          "Remove the spark plug and look at the tip. A fouled or wet plug is very common in snow blowers that have been stored with old gas. Dry it off or replace it with a new one. Gap the new plug according to your Toro's manual (typically 0.030 inches). A fresh spark plug in cold weather can be the difference between starting and not starting.",
      },
      {
        number: 4,
        title: "Check the electric starter (if equipped)",
        description:
          "Many Toro snow blowers have an electric start button that connects to a wall outlet via an extension cord. Make sure the extension cord is plugged in and the outlet has power. If the electric starter does not spin the engine, check the extension cord with another appliance. The pull-start backup should still work even if the electric start fails.",
      },
      {
        number: 5,
        title: "Clean the carburetor bowl",
        description:
          "If fresh fuel, a new plug, and correct starting technique do not work, the carburetor is likely clogged with varnish. Remove the carburetor bowl bolt at the bottom of the carb, clean out any residue, and spray carburetor cleaner up into the main jet. Reassemble and try again. To prevent this next year, either run the carburetor dry before storage or add fuel stabilizer to the tank.",
      },
    ],
    alternativeCauses: [
      "Dead battery (on electric-start models with battery backup)",
      "Key switch not in the ON position",
      "Shear pins broken (engine runs but auger does not turn — different problem)",
      "Mice nesting in the air intake during summer storage",
    ],
    whenToCallPro:
      "If the carburetor cleaning does not resolve the issue, a full carburetor rebuild or replacement may be needed. A small engine shop can do this and also check compression and ignition. Consider having the snow blower serviced in early fall so it is ready when the first snow hits.",
    metaTitle:
      "Toro Snow Blower Won't Start — Step-by-Step Fix | RepairItFree",
    metaDescription:
      "Fix a Toro snow blower that won't start. Drain old fuel, check spark plug, and clean the carburetor with this free repair guide.",
  },
  {
    id: "briggs-stratton-lawn-mower-smoking",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Briggs & Stratton",
    brandSlug: "briggs-stratton",
    problemSlug: "lawn-mower-smoking",
    problemTitle: "Lawn Mower Smoking",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Socket set or wrench",
      "Clean rag",
      "Dipstick or oil level indicator",
    ],
    partsNeeded: [
      {
        name: "Air filter",
        costRange: "$5–$12",
        amazonUrl:
          "https://www.amazon.com/s?k=briggs+stratton+air+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=briggs+stratton+air+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "SAE 30 engine oil",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=briggs+stratton+SAE+30+oil&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=briggs+stratton+SAE+30+oil&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Do not breathe in the smoke — it may contain oil vapor. Work outdoors only.",
      "Let the engine cool before checking or changing oil — hot oil can burn you.",
      "Disconnect the spark plug wire before tipping the mower.",
      "Dispose of used oil at an authorized recycling center, not in the trash or down a drain.",
    ],
    quickDiagnosis:
      "A smoking Briggs & Stratton lawn mower is alarming but rarely means the engine is destroyed. White or blue smoke almost always means oil is burning in the combustion chamber. Black smoke means too much fuel. The most common cause is simply too much oil in the crankcase, which is easy to fix.",
    steps: [
      {
        number: 1,
        title: "Identify the smoke color",
        description:
          "White or blue smoke means oil is being burned — this is the most common type. Black smoke means the engine is running too rich (too much fuel). Each color points to a different set of causes. Thick white smoke on startup that clears after a minute is often normal, especially if the mower was tipped on its side recently.",
      },
      {
        number: 2,
        title: "Check the oil level",
        description:
          "With the mower on a flat surface and the engine off, remove the dipstick, wipe it clean, reinsert it fully, and pull it out again. The oil should be between the two marks. If it is above the FULL mark, the crankcase is overfilled and oil is being pushed into the combustion chamber. Drain excess oil through the oil fill or drain plug until the level is correct.",
      },
      {
        number: 3,
        title: "Check if the mower was tipped incorrectly",
        description:
          "If you recently tipped the mower to clean or sharpen the blade, oil may have run into the cylinder or air filter. Always tip a mower with the air filter side facing UP. If oil got into the filter, remove and replace it. The engine will smoke for a few minutes as it burns off the oil that leaked in — this is normal and should clear up on its own after a short run.",
      },
      {
        number: 4,
        title: "Inspect and replace the air filter",
        description:
          "An oil-soaked air filter restricts airflow and makes the engine run rich. Remove the air filter and look at it. If it is wet with oil, replace it. Paper filters cannot be cleaned — they must be replaced. Foam pre-filters can be washed with dish soap, rinsed, dried, and lightly re-oiled before reinstalling.",
      },
      {
        number: 5,
        title: "Check the crankcase breather",
        description:
          "The crankcase breather regulates internal pressure and can push oil into the air intake if it is clogged or the internal valve is stuck. It is usually a small assembly mounted to the side of the engine block. Remove it, clean out any sludge, and make sure the internal valve moves freely. A plugged breather is a common hidden cause of persistent smoking.",
      },
    ],
    alternativeCauses: [
      "Worn piston rings allowing oil past (high-hour engines)",
      "Blown head gasket (oil leaks into cylinder)",
      "Fuel mixture too rich from a stuck carburetor float",
      "Running the mower on a steep slope causing oil to migrate",
    ],
    whenToCallPro:
      "If the smoking persists after correcting the oil level, replacing the air filter, and checking the breather, the engine may have worn piston rings or a blown head gasket. These are internal engine repairs that require disassembly. A small engine shop can test compression to confirm the diagnosis.",
    metaTitle:
      "Briggs & Stratton Lawn Mower Smoking — Causes and Fix | RepairItFree",
    metaDescription:
      "Fix a smoking Briggs & Stratton lawn mower. Diagnose white, blue, or black smoke from oil, air filter, or breather issues with this free guide.",
  },
  {
    id: "husqvarna-chainsaw-chain-coming-off",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Husqvarna",
    brandSlug: "husqvarna",
    problemSlug: "chainsaw-chain-coming-off",
    problemTitle: "Chainsaw Chain Keeps Coming Off",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Scrench (combination screwdriver/wrench, usually included)",
      "Flat file or depth gauge tool",
      "Gloves (cut-resistant recommended)",
    ],
    partsNeeded: [
      {
        name: "Replacement chain (correct pitch and gauge)",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=husqvarna+chainsaw+chain&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=husqvarna+chainsaw+chain&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Replacement bar (if worn or bent)",
        costRange: "$15–$35",
        amazonUrl:
          "https://www.amazon.com/s?k=husqvarna+chainsaw+guide+bar&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=husqvarna+chainsaw+guide+bar&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Always wear cut-resistant gloves when handling a chainsaw chain.",
      "Make sure the engine is off and the spark plug wire is disconnected before adjusting the chain.",
      "A loose chain that comes off during cutting can cause serious injury — fix this before using the saw.",
      "Never over-tighten the chain — it should pull slightly away from the bar but snap back.",
    ],
    quickDiagnosis:
      "A chain that keeps coming off is usually too loose, mounted on a worn bar, or is the wrong size for the bar. This is a common issue that is almost always easy to fix. It is also important to fix it promptly — a chain that comes off during cutting is very dangerous.",
    steps: [
      {
        number: 1,
        title: "Check chain tension",
        description:
          "With the engine off and the chain brake engaged, pull the chain along the top of the bar. It should pull away from the bar about 1/8 inch (you should see daylight between the chain and bar) but snap back when released. If it sags visibly or hangs away from the bottom of the bar, it is too loose. Chains stretch during use and need regular re-tensioning.",
      },
      {
        number: 2,
        title: "Tighten the chain properly",
        description:
          "Loosen the two bar nuts on the side cover (do not remove them). Find the tensioning screw — on Husqvarna saws it is usually between the two bar nuts or on the side near the bar. Turn it clockwise to tighten the chain. While holding the nose of the bar up with one hand, tighten the bar nuts firmly with the other. Lifting the bar nose ensures the chain seats properly in the bar groove.",
      },
      {
        number: 3,
        title: "Inspect the bar groove",
        description:
          "Remove the side cover and chain. Look at the groove (rail) that runs around the edge of the bar. It should be even in depth all the way around. If it is worn wider in spots, pinched closed, or has burrs, the chain cannot ride properly and will keep jumping off. Use a flat file to clean up small burrs on the bar rails. A severely worn bar needs to be replaced.",
      },
      {
        number: 4,
        title: "Check the drive sprocket",
        description:
          "The drive sprocket (the toothed wheel behind the clutch) wears down over time and can become too worn to hold the chain properly. With the side cover off, look at the sprocket teeth. If they are visibly hooked, sharp on one side, or worn down, the sprocket needs replacement. A general rule: replace the sprocket every two chains.",
      },
      {
        number: 5,
        title: "Verify the chain matches the bar",
        description:
          "The chain must match the bar in three measurements: pitch (distance between drive links), gauge (thickness of the drive links), and number of drive links. These numbers are stamped on the bar and printed on the chain packaging. An incorrect chain will never stay on reliably. If you are unsure, bring the bar and old chain to a dealer and they will match it for you.",
      },
    ],
    alternativeCauses: [
      "Bar nose sprocket seized (not spinning freely)",
      "Damaged or missing chain tensioner pin",
      "Chain installed backward (cutting teeth face the wrong direction)",
      "Side cover not tightened properly after chain change",
    ],
    whenToCallPro:
      "If the drive sprocket needs replacement and you are not comfortable removing the clutch, or if the bar and chain are both worn and you want help selecting the right replacements, a Husqvarna dealer can set you up quickly. Most chain and bar replacements are done while you wait.",
    metaTitle:
      "Husqvarna Chainsaw Chain Keeps Coming Off — Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Husqvarna chainsaw chain that keeps coming off. Adjust tension, inspect the bar groove, and check the sprocket with this free guide.",
  },
  {
    id: "craftsman-mower-blade-wont-engage",
    category: "Outdoor Power Equipment",
    categorySlug: "outdoor-power",
    brand: "Craftsman",
    brandSlug: "craftsman",
    problemSlug: "lawn-mower-blade-wont-engage",
    problemTitle: "Lawn Mower Blade Won't Engage",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Socket set",
      "Multimeter",
      "Jack or ramps (to safely access underside)",
      "Work gloves",
    ],
    partsNeeded: [
      {
        name: "PTO clutch cable or switch (if faulty)",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=craftsman+mower+PTO+cable&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=craftsman+mower+PTO+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Mower deck belt",
        costRange: "$15–$35",
        amazonUrl:
          "https://www.amazon.com/s?k=craftsman+riding+mower+deck+belt&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=craftsman+riding+mower+deck+belt&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the spark plug wire before inspecting anything near the blades.",
      "Never reach under the mower deck while the engine is running.",
      "Use proper jack stands or ramps — never rely on a jack alone.",
      "Wear heavy gloves when handling mower blades — they are sharp.",
      "Set the parking brake before getting off the seat.",
    ],
    quickDiagnosis:
      "On a Craftsman riding mower, the blades are engaged by a PTO (Power Take-Off) switch or lever that activates a clutch and belt system underneath the deck. When you engage the PTO and nothing happens, the problem is usually a broken or slipped belt, a faulty PTO switch, or a seized blade spindle.",
    steps: [
      {
        number: 1,
        title: "Listen when you engage the PTO",
        description:
          "Start the engine and pull or flip the PTO switch. Listen carefully. Do you hear any clicking, humming, or a belt squealing? A click but no blade movement suggests the clutch is engaging but the belt is broken or loose. No click at all suggests an electrical issue with the switch or clutch. A squealing noise means the belt is slipping.",
      },
      {
        number: 2,
        title: "Inspect the deck belt",
        description:
          "Shut off the engine and disconnect the spark plug wire. Look under the mower deck (raise the deck to the highest setting for easier access, or safely lift the front of the mower). The deck belt connects the engine pulley to the blade spindle pulleys. Check if the belt is broken, cracked, glazed smooth, or has come off a pulley. A broken belt is the single most common cause of blades not engaging.",
      },
      {
        number: 3,
        title: "Check the PTO cable or switch",
        description:
          "On cable-operated systems, follow the cable from the engagement lever down to the deck. Make sure it is not broken, frayed, or disconnected at either end. On electric PTO systems, test the switch with a multimeter — it should show continuity when engaged. A failed electric PTO switch gives no signal to the clutch and costs about $15-25 to replace.",
      },
      {
        number: 4,
        title: "Test the electric PTO clutch",
        description:
          "If your Craftsman has an electric PTO clutch (most newer models do), locate it where the engine shaft meets the deck. With the PTO switch engaged and the engine running, use a multimeter to check for voltage at the clutch connector — you should see 12V. If voltage is present but the clutch does not engage, the clutch itself has failed. If no voltage, trace the wire back to the switch and safety interlock system.",
      },
      {
        number: 5,
        title: "Check blade spindles for seizure",
        description:
          "With the spark plug disconnected, try to spin each blade by hand (wear heavy gloves). Each blade should rotate freely. If a blade is stuck or very stiff, its spindle bearing has seized. A seized spindle can also cause the belt to burn through quickly. Replace the spindle assembly if the bearing is shot — trying to force a seized spindle will damage the deck.",
      },
      {
        number: 6,
        title: "Replace the belt if needed",
        description:
          "Route the new belt according to the belt routing diagram on the mower deck (there is usually a sticker showing the correct path). Make sure the belt sits in the grooves of all pulleys and is not twisted. Reinstall any belt guards or keepers. Start the engine and test the PTO — the blades should spin up smoothly within a second or two.",
      },
    ],
    alternativeCauses: [
      "Safety interlock preventing blade engagement (seat switch, brake switch)",
      "Idler pulley spring broken or disconnected",
      "Bent blade catching on the deck housing",
      "Corroded wiring connector at the PTO clutch",
    ],
    whenToCallPro:
      "If the electric PTO clutch has failed internally or the wiring through the safety interlock system has a fault you cannot trace, a Craftsman-authorized service center or lawn equipment shop can diagnose the problem with a wiring diagram and get you back to mowing.",
    metaTitle:
      "Craftsman Mower Blade Won't Engage — Troubleshooting | RepairItFree",
    metaDescription:
      "Fix Craftsman riding mower blades that won't engage. Check the PTO switch, deck belt, clutch, and spindles with this free step-by-step guide.",
  },
];
