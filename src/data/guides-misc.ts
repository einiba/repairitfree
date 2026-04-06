import { Guide } from "@/lib/types";

export const miscGuides: Guide[] = [
  // ==========================================
  // MICROWAVES
  // ==========================================
  {
    id: "samsung-microwave-not-heating",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-heating",
    problemTitle: "Samsung Microwave Not Heating",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$150",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Insulated gloves",
    ],
    partsNeeded: [
      {
        name: "Microwave Magnetron (Samsung-compatible)",
        costRange: "$50–$120",
        amazonUrl: "https://www.amazon.com/s?k=samsung+microwave+magnetron&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=samsung+microwave+magnetron&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Microwave Diode",
        costRange: "$5–$15",
        amazonUrl: "https://www.amazon.com/s?k=samsung+microwave+diode&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "DANGER: Microwaves contain a high-voltage capacitor that can hold a lethal charge even when unplugged. Always discharge the capacitor before touching internal components.",
      "Unplug the microwave and wait at least 5 minutes before opening the cabinet.",
      "Never run a microwave with the door open or with the cover removed.",
    ],
    quickDiagnosis:
      "A Samsung microwave that runs but doesn't heat is almost always caused by a failed magnetron, a burned-out diode, or a faulty door switch. Start with the simplest checks — a door switch issue is cheap and easy to fix.",
    steps: [
      {
        number: 1,
        title: "Check the basics first",
        description:
          "Make sure the microwave is plugged into a working outlet and hasn't tripped the circuit breaker. Test with a different appliance. Also check if you're accidentally running the timer instead of the cook function — it's a surprisingly common mistake on Samsung models.",
      },
      {
        number: 2,
        title: "Test with a cup of water",
        description:
          "Place a microwave-safe cup of water inside. Run on high for 1 minute. If the water is not warm at all, the magnetron or power components have failed. If it's slightly warm, the issue may be reduced power from a failing diode.",
      },
      {
        number: 3,
        title: "Inspect the door switches",
        description:
          "Unplug the microwave. Remove the outer cabinet (usually 2-3 screws on the back). Locate the door switches — Samsung models typically have 3. Use a multimeter to test continuity on each switch. A failed door switch can prevent heating while still allowing the turntable and light to work.",
      },
      {
        number: 4,
        title: "Test the high-voltage diode",
        description:
          "With the microwave unplugged and the capacitor safely discharged, locate the diode near the capacitor. Use your multimeter on the diode setting. It should show continuity in one direction and not the other. If it reads the same both ways or shows no continuity either way, replace it. This is a $5-$15 fix.",
      },
      {
        number: 5,
        title: "Check the magnetron",
        description:
          "If the diode is good, the magnetron is likely the problem. Test continuity between the magnetron terminals — you should get a reading of less than 1 ohm. Also test from each terminal to the magnetron housing — this should show no continuity (open). If either test fails, the magnetron needs replacing.",
      },
      {
        number: 6,
        title: "Replace the faulty component",
        description:
          "Order the exact replacement part using your Samsung model number (found on a sticker inside the door). Swap in the new diode or magnetron, making sure all connections are secure. Reassemble the cabinet, plug in, and test with a cup of water.",
      },
    ],
    alternativeCauses: [
      "Faulty high-voltage capacitor",
      "Blown thermal fuse or thermostat",
      "Defective control board",
    ],
    whenToCallPro:
      "If you're not comfortable working around high-voltage components, call a pro. Also call one if the magnetron needs replacing and you've never done appliance repair — the capacitor can hold a lethal charge.",
    metaTitle: "Samsung Microwave Not Heating — Fix It Free | RepairItFree",
    metaDescription:
      "Samsung microwave runs but won't heat? Step-by-step guide to diagnose and fix the magnetron, diode, or door switch yourself.",
  },
  {
    id: "ge-microwave-turntable-not-spinning",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "turntable-not-spinning",
    problemTitle: "GE Microwave Turntable Not Spinning",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: ["Phillips screwdriver", "Dish soap", "Soft cloth"],
    partsNeeded: [
      {
        name: "Microwave Turntable Motor (GE-compatible)",
        costRange: "$15–$35",
        amazonUrl: "https://www.amazon.com/s?k=GE+microwave+turntable+motor&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=GE+microwave+turntable+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Turntable Coupler / Drive Bushing",
        costRange: "$3–$10",
        amazonUrl: "https://www.amazon.com/s?k=GE+microwave+turntable+coupler&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the microwave before inspecting or replacing any parts.",
      "Do not attempt to access internal electronics for this repair — it's not needed.",
    ],
    quickDiagnosis:
      "A GE microwave turntable that won't spin is usually caused by a broken coupler, dirty roller ring, or a burned-out turntable motor. This is one of the easiest microwave repairs.",
    steps: [
      {
        number: 1,
        title: "Remove and inspect the turntable tray",
        description:
          "Take out the glass tray and the roller ring underneath it. Check if the glass tray is cracked or warped. Look at the roller ring — are any wheels broken or stuck? Clean the wheels and the track they sit in with warm soapy water. Food buildup is the most common cause.",
      },
      {
        number: 2,
        title: "Check the drive coupler",
        description:
          "The coupler is the small plastic piece in the center of the floor that connects the motor to the tray. Pull it off and inspect it. If the tabs are worn down, stripped, or broken, the tray won't turn even though the motor works. This is a $3-$10 part.",
      },
      {
        number: 3,
        title: "Test the turntable motor",
        description:
          "Put everything back, plug in the microwave, and start it. Look through the door at the coupler — is it trying to turn? If the coupler spins but the tray doesn't, the coupler needs replacing. If nothing moves at all, the motor is dead.",
      },
      {
        number: 4,
        title: "Replace the turntable motor if needed",
        description:
          "Unplug the microwave. Flip it on its side or back (carefully). Remove the bottom panel screws. The turntable motor is a small round motor attached to the floor of the cavity. Disconnect the wire harness, remove the mounting screws, and swap in the new motor. Reassemble and test.",
      },
    ],
    alternativeCauses: [
      "Overloaded tray — heavy dish preventing rotation",
      "Faulty control board not sending signal to motor",
      "Bent or misaligned turntable shaft",
    ],
    whenToCallPro:
      "This is a beginner-friendly repair. Only call a pro if the control board is the issue, as that's a more complex diagnosis.",
    metaTitle:
      "GE Microwave Turntable Not Spinning — Fix It Free | RepairItFree",
    metaDescription:
      "GE microwave turntable stopped spinning? Learn how to fix the coupler, roller ring, or motor with this easy step-by-step guide.",
  },
  {
    id: "whirlpool-microwave-sparking-inside",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "sparking-inside",
    problemTitle: "Whirlpool Microwave Sparking Inside",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: ["Phillips screwdriver", "Scissors or utility knife", "Damp cloth"],
    partsNeeded: [
      {
        name: "Microwave Waveguide Cover (Whirlpool-compatible)",
        costRange: "$5–$15",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+microwave+waveguide+cover&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Stop the microwave immediately if you see sparking — continued use can damage the magnetron.",
      "Unplug the microwave before inspecting or cleaning the interior.",
      "Never run the microwave empty — this can cause arcing and damage.",
    ],
    quickDiagnosis:
      "Sparking inside a Whirlpool microwave is most often caused by a damaged waveguide cover, metal accidentally left inside, or chipped paint on the interior walls exposing bare metal. The fix is usually quick and cheap.",
    steps: [
      {
        number: 1,
        title: "Stop the microwave and check for metal",
        description:
          "Stop the microwave right away. Open the door and remove everything inside. Look for any metal — foil, twist ties, utensils, or containers with metallic trim. Even a tiny piece of crumpled foil can cause dramatic sparking. Remove it and test again with a cup of water.",
      },
      {
        number: 2,
        title: "Inspect the waveguide cover",
        description:
          "Look for a small cardboard or mica panel on the inside wall of the microwave (usually on the right side or the top). This is the waveguide cover. If it's burned, scorched, cracked, or has food baked onto it, that's your problem. Food splatter on this cover is the number one cause of sparking.",
      },
      {
        number: 3,
        title: "Replace the waveguide cover",
        description:
          "Unplug the microwave. The waveguide cover usually pops out or is held by a small screw. Order a replacement that fits your Whirlpool model number, or buy a universal mica sheet and cut it to size with scissors. Pop or screw the new cover into place.",
      },
      {
        number: 4,
        title: "Check the interior walls for damage",
        description:
          "Look for chipped or peeling paint inside the microwave cavity. If bare metal is exposed, that spot will arc. You can patch small spots with microwave-safe paint (available at appliance parts stores). Clean the entire interior with a damp cloth to remove any food residue.",
      },
      {
        number: 5,
        title: "Test the repair",
        description:
          "Place a microwave-safe cup of water inside. Run on high for 2 minutes and watch for sparking. If there's no sparking, you're done. Going forward, cover food to prevent splatter on the waveguide cover.",
      },
    ],
    alternativeCauses: [
      "Failing magnetron arcing internally",
      "Damaged stirrer or stirrer cover",
      "Deteriorated door seal allowing microwave leakage",
    ],
    whenToCallPro:
      "If sparking continues after replacing the waveguide cover and confirming no metal or paint damage, the magnetron may be failing. That's a job for a pro.",
    metaTitle:
      "Whirlpool Microwave Sparking Inside — Fix It Free | RepairItFree",
    metaDescription:
      "Whirlpool microwave sparking? Usually a cheap waveguide cover fix. Step-by-step guide to stop sparking and prevent damage.",
  },
  {
    id: "lg-microwave-door-wont-open",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "door-wont-open",
    problemTitle: "LG Microwave Door Won't Open",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Plastic spudger or putty knife",
    ],
    partsNeeded: [
      {
        name: "Microwave Door Latch Assembly (LG-compatible)",
        costRange: "$10–$30",
        amazonUrl: "https://www.amazon.com/s?k=LG+microwave+door+latch+assembly&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=LG+microwave+door+latch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the microwave before attempting any repair.",
      "Do not force the door — you can break the hinges or latch mechanism.",
      "Do not use the microwave if the door doesn't latch properly after repair.",
    ],
    quickDiagnosis:
      "An LG microwave door that won't open is usually caused by a stuck or broken door latch, a failed door button/handle, or a jammed spring. This is a mechanical fix — no high-voltage work required.",
    steps: [
      {
        number: 1,
        title: "Try to release the door gently",
        description:
          "Press the door release button firmly several times while gently pulling the door. If the button feels mushy or doesn't click, the button spring or latch may be broken inside. Try pressing from slightly different angles. Do not yank the door.",
      },
      {
        number: 2,
        title: "Use a thin tool to release the latch",
        description:
          "If the button doesn't work, slide a thin flathead screwdriver or putty knife into the gap between the door and the frame, near the latch. Gently push the latch mechanism to release it. Work slowly to avoid scratching the finish.",
      },
      {
        number: 3,
        title: "Inspect the door button and spring",
        description:
          "Once the door is open, unplug the microwave. Examine the door button. On most LG models, you can pry off the inner door panel to access the latch mechanism. Check if the button spring is broken or if the plastic latch hook has snapped.",
      },
      {
        number: 4,
        title: "Replace the door latch assembly",
        description:
          "Order a replacement latch assembly for your exact LG model number (on the sticker inside the door). Remove the inner door panel screws, swap out the old latch for the new one, and reassemble. Test the door open/close action multiple times before using the microwave.",
      },
    ],
    alternativeCauses: [
      "Warped door from heat damage",
      "Misaligned door hinges",
      "Child lock feature accidentally enabled — check the control panel",
    ],
    whenToCallPro:
      "If the door hinges are bent or the door frame is warped, a replacement door assembly may be needed. A pro can source and install this.",
    metaTitle: "LG Microwave Door Won't Open — Fix It Free | RepairItFree",
    metaDescription:
      "LG microwave door stuck shut? Learn how to safely release and fix the door latch with this step-by-step repair guide.",
  },
  {
    id: "panasonic-microwave-display-not-working",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Panasonic",
    brandSlug: "panasonic",
    problemSlug: "display-not-working",
    problemTitle: "Panasonic Microwave Display Not Working",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$60",
    toolsNeeded: ["Phillips screwdriver", "Multimeter", "Insulated gloves"],
    partsNeeded: [
      {
        name: "Microwave Control Board (Panasonic-compatible)",
        costRange: "$30–$60",
        amazonUrl: "https://www.amazon.com/s?k=panasonic+microwave+control+board&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the microwave and wait at least 5 minutes before opening the cabinet.",
      "The high-voltage capacitor inside can hold a lethal charge. Discharge it before touching internal components.",
      "If the display is out but the microwave still heats, stop using it — you can't see the timer or power settings.",
    ],
    quickDiagnosis:
      "A blank Panasonic microwave display is usually caused by a power issue, a failed control board, or a loose ribbon cable. Check the simple things first before assuming the board is dead.",
    steps: [
      {
        number: 1,
        title: "Check the power supply",
        description:
          "Make sure the outlet works by testing another appliance. Check your circuit breaker. Try unplugging the microwave for 2 minutes and plugging it back in — this can reset the control board. Some Panasonic models have a reset sequence: look up your model.",
      },
      {
        number: 2,
        title: "Look for a demo or lock mode",
        description:
          "Some Panasonic microwaves have a demo mode that disables heating and can make the display act oddly. Press and hold the Stop/Cancel button for 3-5 seconds. Also check if the child lock is enabled — usually indicated by a small lock icon. Consult your model's manual for the exact reset steps.",
      },
      {
        number: 3,
        title: "Inspect the control panel ribbon cable",
        description:
          "Unplug the microwave. Remove the outer cabinet screws and the top or side panel. Locate the ribbon cable connecting the display/membrane panel to the control board. If it's loose or has corroded contacts, reseat it firmly. This is a common cause of partial or full display failure.",
      },
      {
        number: 4,
        title: "Test the thermal fuse",
        description:
          "Locate the thermal fuse (usually near the top of the cavity). Use a multimeter to test for continuity. If the thermal fuse is blown, the display and all functions will be dead. Replace it with an exact match — they cost $5-$10.",
      },
      {
        number: 5,
        title: "Replace the control board if needed",
        description:
          "If the ribbon cable is good and the thermal fuse has continuity, the control board itself has likely failed. Order the replacement using your Panasonic model number. Disconnect the old board's wire harnesses, swap boards, reconnect everything, and test.",
      },
    ],
    alternativeCauses: [
      "Failed power transformer",
      "Blown main fuse inside the microwave",
      "Damaged membrane keypad (partial display with some buttons not working)",
    ],
    whenToCallPro:
      "If you're not comfortable discharging a microwave capacitor or diagnosing control board issues, a pro can handle this safely. Also call a pro if the main fuse keeps blowing — that indicates a deeper electrical problem.",
    metaTitle:
      "Panasonic Microwave Display Not Working — Fix It Free | RepairItFree",
    metaDescription:
      "Panasonic microwave display blank or dead? Step-by-step guide to diagnose the control board, ribbon cable, and thermal fuse.",
  },
  {
    id: "generic-microwave-runs-but-doesnt-heat",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "runs-but-doesnt-heat",
    problemTitle: "Microwave Runs But Doesn't Heat",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$150",
    toolsNeeded: ["Multimeter", "Phillips screwdriver", "Insulated gloves"],
    partsNeeded: [
      {
        name: "Microwave Diode (universal)",
        costRange: "$5–$15",
        amazonUrl: "https://www.amazon.com/s?k=microwave+diode+replacement&tag=repairitfree-20",
      },
      {
        name: "Microwave Magnetron (model-specific)",
        costRange: "$50–$120",
        amazonUrl: "https://www.amazon.com/s?k=microwave+magnetron+replacement&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "DANGER: Microwave capacitors store lethal voltage even when unplugged. Discharge the capacitor before touching any internal parts.",
      "Unplug the microwave and wait at least 5 minutes before opening.",
      "Wear insulated gloves when working near the capacitor and magnetron.",
    ],
    quickDiagnosis:
      "When a microwave runs (light on, turntable spinning) but food stays cold, the heating circuit has failed. The most common culprits are the high-voltage diode, the magnetron, or a door switch. The diode is the cheapest and easiest to replace.",
    steps: [
      {
        number: 1,
        title: "Confirm the problem",
        description:
          "Place a microwave-safe cup of water inside. Run on high for 1 minute. If the water is completely cold, the heating circuit is not working. If the water is lukewarm, the microwave is producing some power but not full power — this points to a diode issue.",
      },
      {
        number: 2,
        title: "Check the door switches",
        description:
          "Unplug the microwave and remove the cabinet. Most microwaves have 3 door switches. Use a multimeter to check continuity on each one. A failed door switch can prevent heating while allowing other functions to work normally. Replace any switch that doesn't show proper continuity.",
      },
      {
        number: 3,
        title: "Test the high-voltage diode",
        description:
          "Discharge the capacitor first using an insulated screwdriver across its terminals. Locate the diode — it's near the capacitor. Test it with a multimeter on the diode setting. It should show continuity in one direction only. If it reads open both ways or shorted both ways, replace it.",
      },
      {
        number: 4,
        title: "Test the magnetron",
        description:
          "With the capacitor discharged, disconnect the magnetron leads. Check continuity between the two terminals — you should see less than 1 ohm. Then check from each terminal to the magnetron casing — you should see no continuity (infinite resistance). Failure on either test means the magnetron is dead.",
      },
      {
        number: 5,
        title: "Replace the failed component and test",
        description:
          "Order parts using your microwave's model number for exact fit. Install the new diode or magnetron, reconnect all wiring, and reassemble the cabinet. Test with a cup of water on high for 1 minute — the water should be noticeably hot.",
      },
    ],
    alternativeCauses: [
      "Failed high-voltage capacitor",
      "Blown high-voltage transformer",
      "Faulty control board not sending power to the magnetron circuit",
    ],
    whenToCallPro:
      "If you're uncomfortable discharging a capacitor or working around high-voltage components, this is a job for a technician. Also call a pro if the magnetron and diode both test fine — the capacitor or transformer may be at fault.",
    metaTitle:
      "Microwave Runs But Doesn't Heat — Fix It Free | RepairItFree",
    metaDescription:
      "Microwave running but not heating food? Diagnose the diode, magnetron, or door switch with this step-by-step repair guide.",
  },
  {
    id: "generic-microwave-making-buzzing-noise",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "making-buzzing-noise",
    problemTitle: "Microwave Making Buzzing Noise",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: ["Phillips screwdriver", "Damp cloth"],
    partsNeeded: [
      {
        name: "Microwave Turntable Motor",
        costRange: "$15–$35",
        amazonUrl: "https://www.amazon.com/s?k=microwave+turntable+motor+replacement&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the microwave before inspecting any internal parts.",
      "A loud buzzing combined with no heating may indicate a failing magnetron — do not continue using the microwave.",
    ],
    quickDiagnosis:
      "A buzzing microwave can be caused by a struggling turntable motor, a failing magnetron, a loose vibrating panel, or a worn diode. Identify when the buzzing happens — only while running, only with food, or constantly — to narrow it down.",
    steps: [
      {
        number: 1,
        title: "Identify when the buzzing occurs",
        description:
          "Run the microwave with a cup of water inside and listen carefully. Does it buzz only while heating? Only when the turntable moves? Constantly from the moment you press start? If it buzzes but still heats food, it's likely a turntable motor or vibration issue. If it buzzes and doesn't heat, see the 'Microwave Runs But Doesn't Heat' guide.",
      },
      {
        number: 2,
        title: "Check the turntable",
        description:
          "Remove the glass tray and roller ring. Clean the roller ring wheels and the track. Put everything back and test. A dirty or stuck roller ring makes the turntable motor strain and buzz. If the buzzing stops with the tray removed, the motor or coupler is the issue.",
      },
      {
        number: 3,
        title: "Tighten loose panels",
        description:
          "A buzzing or rattling noise can come from a loose outer panel vibrating during operation. Check all cabinet screws and tighten any that are loose. Also check if anything is sitting on top of or against the microwave that might vibrate.",
      },
      {
        number: 4,
        title: "Replace the turntable motor if needed",
        description:
          "If cleaning didn't fix the turntable buzz, the motor is wearing out. Unplug the microwave, access the motor from the bottom panel, disconnect the wiring harness, remove the mounting screws, and swap in a new motor. They're typically $15-$35.",
      },
    ],
    alternativeCauses: [
      "Failing magnetron producing abnormal sound",
      "Defective high-voltage diode",
      "Loose magnetron mounting bolts",
      "Worn cooling fan motor",
    ],
    whenToCallPro:
      "If the buzzing is loud and the microwave no longer heats, the magnetron is likely failing. A pro should handle magnetron replacement due to the high-voltage components involved.",
    metaTitle:
      "Microwave Making Buzzing Noise — Fix It Free | RepairItFree",
    metaDescription:
      "Microwave buzzing loudly? Learn whether it's a simple turntable fix or a sign of a bigger problem with this diagnostic guide.",
  },
  // ==========================================
  // PRINTERS
  // ==========================================
  {
    id: "hp-printer-not-printing-black",
    category: "Printers",
    categorySlug: "printers",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "not-printing-black",
    problemTitle: "HP Printer Not Printing Black",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: ["Lint-free cloth", "Warm water", "Paper towels", "Cotton swabs"],
    partsNeeded: [
      {
        name: "HP Black Ink Cartridge (model-specific)",
        costRange: "$15–$40",
        amazonUrl: "https://www.amazon.com/s?k=HP+black+ink+cartridge&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Ink stains are very difficult to remove from clothing and surfaces — wear old clothes and protect your work area.",
      "Only use cartridges compatible with your specific HP model.",
    ],
    quickDiagnosis:
      "An HP printer that won't print black usually has a clogged printhead, an empty or defective cartridge, or dried ink on the nozzles. Most of the time, a cleaning cycle or cartridge swap fixes it.",
    steps: [
      {
        number: 1,
        title: "Run the built-in printhead cleaning",
        description:
          "On your HP printer, go to Settings or Setup > Tools > Clean Printhead (exact menu varies by model). You can also do this from the HP Smart app on your computer. Run the cleaning cycle 2-3 times, printing a test page after each. This forces ink through clogged nozzles.",
      },
      {
        number: 2,
        title: "Check ink levels",
        description:
          "Open HP Smart or the printer's display to check ink levels. Even if the cartridge shows some ink remaining, it can be defective. If the black cartridge is low or empty, replace it. If it shows full but still won't print black, try the next step.",
      },
      {
        number: 3,
        title: "Remove and clean the cartridge contacts",
        description:
          "Open the cartridge door and remove the black cartridge. Look at the copper contacts on the cartridge and the matching contacts inside the printer. Clean both with a lint-free cloth dampened with warm water. Dry completely before reinstalling. Dirty contacts prevent proper communication.",
      },
      {
        number: 4,
        title: "Manually clean the printhead nozzles",
        description:
          "If your HP model has a removable printhead (not all do), remove it and soak the bottom in about 1cm of warm water for 5 minutes. Dab the nozzle area with a paper towel until you see black ink transferring. Let it dry completely, reinstall, and run another cleaning cycle.",
      },
      {
        number: 5,
        title: "Try a new cartridge",
        description:
          "If cleaning didn't work, the cartridge itself may be defective — this is common with third-party cartridges. Install a fresh genuine HP cartridge, run a cleaning cycle, and print a test page. If black now prints, the old cartridge was the problem.",
      },
    ],
    alternativeCauses: [
      "Incorrect print driver settings (printing in grayscale or draft mode)",
      "Outdated printer firmware",
      "Failed printhead (on models with permanent printheads)",
    ],
    whenToCallPro:
      "If a new cartridge and thorough cleaning don't fix it, the printhead itself may be permanently clogged or failed. On models where the printhead is built into the printer (not the cartridge), replacement can be costly — it may be cheaper to replace the printer.",
    metaTitle:
      "HP Printer Not Printing Black — Fix It Free | RepairItFree",
    metaDescription:
      "HP printer skipping black ink? Clean the printhead and fix clogged nozzles with this easy step-by-step guide.",
  },
  {
    id: "canon-printer-paper-jam",
    category: "Printers",
    categorySlug: "printers",
    brand: "Canon",
    brandSlug: "canon",
    problemSlug: "paper-jam",
    problemTitle: "Canon Printer Paper Jam",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Flashlight", "Tweezers (optional)"],
    partsNeeded: [],
    safetyWarnings: [
      "Turn off the printer before removing jammed paper.",
      "Pull paper slowly and evenly — yanking can tear it and leave pieces inside.",
      "Avoid touching the print rollers with your fingers — oils can cause future jams.",
    ],
    quickDiagnosis:
      "Canon paper jams are usually caused by misaligned paper in the tray, worn pickup rollers, or a small torn piece stuck inside. Even after clearing the jam, the error can persist if a scrap remains hidden.",
    steps: [
      {
        number: 1,
        title: "Turn off the printer and open all access panels",
        description:
          "Power off the printer. Open the front cover, the rear access panel (if your model has one), and lift the scanner bed. You want to see as much of the paper path as possible. Use a flashlight to look for jammed paper.",
      },
      {
        number: 2,
        title: "Remove the jammed paper slowly",
        description:
          "Grip the paper with both hands and pull slowly and evenly in the direction it would normally travel. Don't pull backwards against the rollers — this can tear it. If paper is stuck near the back, use the rear access panel to pull it out from that side.",
      },
      {
        number: 3,
        title: "Check for torn scraps",
        description:
          "Use a flashlight to check every part of the paper path for torn pieces. Even a small piece of paper left behind will cause the jam error to persist. Check under the cartridge area, behind the rollers, and in the output tray path. Use tweezers for tiny scraps.",
      },
      {
        number: 4,
        title: "Clean the feed rollers",
        description:
          "The rubber feed rollers can get dusty or slick over time, causing paper to misfeed. Dampen a lint-free cloth with water and gently wipe the rollers you can reach. Rotate them by hand to clean the full surface. Let them dry before closing up.",
      },
      {
        number: 5,
        title: "Reload paper and test",
        description:
          "Fan your paper stack to separate the sheets. Load the paper neatly, making sure the guides are snug but not too tight against the paper. Close all access panels, power on, and print a test page. If jams keep happening, the paper may be too thick, damp, or the wrong size for the tray settings.",
      },
    ],
    alternativeCauses: [
      "Using damp, wrinkled, or low-quality paper",
      "Paper tray guides set too loose or too tight",
      "Worn or cracked pickup rollers needing replacement",
      "Foreign objects inside the printer (paper clips, staples)",
    ],
    whenToCallPro:
      "If jams happen on every print despite clean rollers and good paper, the pickup rollers may need replacing. This is a cheap part but can be tricky to access on some Canon models.",
    metaTitle: "Canon Printer Paper Jam — Fix It Free | RepairItFree",
    metaDescription:
      "Canon printer paper jam won't clear? Step-by-step instructions to remove stuck paper and prevent future jams.",
  },
  {
    id: "epson-printer-ink-not-recognized",
    category: "Printers",
    categorySlug: "printers",
    brand: "Epson",
    brandSlug: "epson",
    problemSlug: "ink-not-recognized",
    problemTitle: "Epson Printer Ink Not Recognized",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: ["Lint-free cloth", "Isopropyl alcohol (90%+)"],
    partsNeeded: [
      {
        name: "Epson Ink Cartridge (model-specific)",
        costRange: "$12–$30",
        amazonUrl: "https://www.amazon.com/s?k=epson+ink+cartridge&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Avoid touching the green circuit chip on the cartridge — fingerprints can cause recognition issues.",
      "Ink stains permanently — protect your workspace.",
    ],
    quickDiagnosis:
      "Epson printers often refuse to recognize cartridges due to dirty chip contacts, a firmware update blocking third-party ink, or a defective cartridge chip. This is fixable without replacing the cartridge in most cases.",
    steps: [
      {
        number: 1,
        title: "Remove and reseat the cartridge",
        description:
          "Open the cartridge cover. Press the tab to release the unrecognized cartridge and remove it completely. Wait 30 seconds, then reinstall it firmly until it clicks. Close the cover. This simple reseat fixes the issue about 30% of the time.",
      },
      {
        number: 2,
        title: "Clean the cartridge chip and printer contacts",
        description:
          "Remove the cartridge again. Find the small green or gold chip on the cartridge. Gently wipe it with a lint-free cloth dampened with isopropyl alcohol. Also clean the matching contacts inside the printer's cartridge slot. Let both dry for 1 minute before reinstalling.",
      },
      {
        number: 3,
        title: "Power cycle the printer",
        description:
          "Turn off the printer. Unplug it from the wall for 2 minutes. Plug it back in and turn it on. This resets the printer's memory and forces it to re-read all cartridge chips. Check if the error clears.",
      },
      {
        number: 4,
        title: "Check for firmware updates (or roll back)",
        description:
          "Epson has released firmware updates that block third-party cartridges. If you recently updated the firmware and the cartridge worked before, the update may be the cause. Check Epson support forums for your model — some users have found ways to roll back firmware. If using third-party ink, consider switching to genuine Epson cartridges.",
      },
      {
        number: 5,
        title: "Try the cartridge in a different slot",
        description:
          "If your printer has multiple cartridges of the same type (like a photo printer), try the unrecognized cartridge in a different slot. If it works in another slot, the original slot's contacts may be damaged. If it fails everywhere, the cartridge itself is defective — return it for a replacement.",
      },
    ],
    alternativeCauses: [
      "Cartridge is from a different region (Epson region-locks some cartridges)",
      "Expired cartridge chip",
      "Defective third-party cartridge chip",
    ],
    whenToCallPro:
      "This is a user-serviceable issue. If nothing works, the printer's cartridge slot contacts may be physically damaged, which would require professional repair — but it's usually cheaper to replace the printer at that point.",
    metaTitle:
      "Epson Printer Ink Not Recognized — Fix It Free | RepairItFree",
    metaDescription:
      "Epson printer says ink cartridge not recognized? Fix the chip contacts and reset the printer with this quick guide.",
  },
  {
    id: "brother-printer-not-connecting-to-wifi",
    category: "Printers",
    categorySlug: "printers",
    brand: "Brother",
    brandSlug: "brother",
    problemSlug: "not-connecting-to-wifi",
    problemTitle: "Brother Printer Not Connecting to WiFi",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Computer or phone on the same WiFi network"],
    partsNeeded: [],
    safetyWarnings: [
      "Make sure you know your WiFi password before starting — you'll need to re-enter it.",
    ],
    quickDiagnosis:
      "Brother printers lose WiFi connection due to network changes, IP conflicts, or the printer's wireless module needing a reset. Most of the time, reconfiguring the wireless connection from scratch fixes it.",
    steps: [
      {
        number: 1,
        title: "Restart your printer and router",
        description:
          "Turn off your Brother printer. Unplug your WiFi router for 30 seconds, then plug it back in and wait for it to fully restart (all lights stable). Then turn on your printer. This clears IP conflicts and refreshes the network connection.",
      },
      {
        number: 2,
        title: "Print a network configuration page",
        description:
          "On the printer, go to Settings > Network > Print Network Config (the exact path varies by model). This page shows the printer's current IP address, connection status, and WiFi name. Check if it's connected to the correct WiFi network.",
      },
      {
        number: 3,
        title: "Reset the network settings on the printer",
        description:
          "Go to Settings > Network > Network Reset and confirm. This clears all saved WiFi information. After the reset, go to Settings > Network > WLAN > Setup Wizard. The printer will scan for nearby networks. Select yours and enter the password carefully.",
      },
      {
        number: 4,
        title: "Check your router settings",
        description:
          "Make sure your router isn't blocking new devices. Check that the WiFi band matches what your printer supports — many Brother printers only connect to 2.4GHz, not 5GHz. If your router combines both bands under one name, you may need to separate them or connect the printer using WPS.",
      },
      {
        number: 5,
        title: "Reinstall the printer on your computer",
        description:
          "After the printer connects to WiFi, you may need to re-add it on your computer. On Windows: Settings > Devices > Printers. On Mac: System Settings > Printers & Scanners. Remove the old printer entry and add it again. Your computer should find it on the network.",
      },
    ],
    alternativeCauses: [
      "Router firmware update changed security protocol",
      "Too many devices connected to router (device limit reached)",
      "Printer too far from router (weak signal)",
      "MAC address filtering enabled on router",
    ],
    whenToCallPro:
      "This is a fully DIY fix. If you've tried everything and the printer still won't connect, the WiFi module in the printer may be failing — at that point, using a USB cable is a free workaround.",
    metaTitle:
      "Brother Printer Not Connecting to WiFi — Fix It Free | RepairItFree",
    metaDescription:
      "Brother printer won't connect to WiFi? Reset the network settings and reconnect with this step-by-step guide.",
  },
  {
    id: "hp-printer-printing-blank-pages",
    category: "Printers",
    categorySlug: "printers",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "printing-blank-pages",
    problemTitle: "HP Printer Printing Blank Pages",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: ["Lint-free cloth", "Warm water", "Paper towels"],
    partsNeeded: [
      {
        name: "HP Ink Cartridge Set (model-specific)",
        costRange: "$20–$40",
        amazonUrl: "https://www.amazon.com/s?k=HP+ink+cartridge+replacement&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Protect your workspace from ink stains.",
      "Do not touch the printhead nozzles or electrical contacts with bare fingers.",
    ],
    quickDiagnosis:
      "An HP printer outputting blank pages usually means the cartridges have protective tape still on them, the printhead nozzles are completely clogged, or the ink has dried out. Check the simple things first.",
    steps: [
      {
        number: 1,
        title: "Check for protective tape on cartridges",
        description:
          "Open the cartridge door. Remove each cartridge and look for a strip of plastic tape covering the nozzle area or the copper contacts. New cartridges ship with this tape — if you forgot to remove it, the printer will feed paper but print nothing. Remove all tape and reinstall.",
      },
      {
        number: 2,
        title: "Run multiple cleaning cycles",
        description:
          "From the HP Smart app or the printer's menu, run the printhead cleaning utility. Print a test page after each cycle. Run it up to 3 times — each cycle pushes more ink through the nozzles. If you see faint lines starting to appear, the cleaning is working.",
      },
      {
        number: 3,
        title: "Check your print settings",
        description:
          "On your computer, open the document you're trying to print. Go to File > Print and check the settings. Make sure the correct paper size is selected and that the document isn't printing white text on white background. Also check that the right printer is selected if you have multiple.",
      },
      {
        number: 4,
        title: "Replace dried-out cartridges",
        description:
          "If the cartridges have been installed for months without use, the ink has likely dried in the nozzles permanently. Install fresh cartridges. Going forward, print at least one page per week to keep the ink flowing and prevent drying.",
      },
    ],
    alternativeCauses: [
      "Printing from an application with empty content",
      "Corrupted print driver — reinstall the HP driver",
      "Wrong paper type selected in print settings",
    ],
    whenToCallPro:
      "If new cartridges still produce blank pages, the printhead (on models with a built-in head) is likely permanently clogged. A pro can sometimes deep-clean it, but replacement may be more cost-effective.",
    metaTitle:
      "HP Printer Printing Blank Pages — Fix It Free | RepairItFree",
    metaDescription:
      "HP printer coming out blank? Check for tape, unclog the printhead, and get printing again with this guide.",
  },
  {
    id: "canon-printer-error-5100",
    category: "Printers",
    categorySlug: "printers",
    brand: "Canon",
    brandSlug: "canon",
    problemSlug: "error-5100",
    problemTitle: "Canon Printer Error 5100",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Flashlight", "Lint-free cloth", "Isopropyl alcohol"],
    partsNeeded: [],
    safetyWarnings: [
      "Turn off and unplug the printer before reaching inside.",
      "Do not force the printhead carriage — it can damage the encoder strip.",
    ],
    quickDiagnosis:
      "Canon error 5100 means the printhead carriage can't move properly. This is almost always caused by an obstruction in the carriage path, a jammed piece of paper, or a dirty encoder strip. It's a mechanical issue with a straightforward fix.",
    steps: [
      {
        number: 1,
        title: "Turn off the printer and open it up",
        description:
          "Turn off and unplug the printer. Open the top cover to access the printhead carriage area. Use a flashlight to look for any obvious obstructions — pieces of paper, a dislodged cartridge, or a foreign object blocking the carriage from moving.",
      },
      {
        number: 2,
        title: "Manually slide the carriage",
        description:
          "With the printer off and unplugged, gently push the printhead carriage left and right by hand. It should glide smoothly across the full width. If it's stuck or grinding, look for debris on the guide rail or under the carriage. Remove any obstruction carefully.",
      },
      {
        number: 3,
        title: "Clean the encoder strip",
        description:
          "Look for a thin, clear plastic strip running horizontally behind the carriage path — this is the encoder strip. If it's dirty or has ink on it, the printer can't track the carriage position correctly. Gently clean it with a lint-free cloth dampened with isopropyl alcohol. Be very careful not to bend or dislodge it.",
      },
      {
        number: 4,
        title: "Check the timing belt",
        description:
          "Look for the rubber timing belt connected to the carriage. Make sure it's not loose, broken, or slipped off the pulleys. If the belt is intact and the carriage moves freely, the encoder strip cleaning likely fixed the issue.",
      },
      {
        number: 5,
        title: "Power cycle and test",
        description:
          "Close the cover, plug in the printer, and turn it on. The carriage should initialize by moving to the far left and back. If error 5100 is gone, print a test page. If the error returns, repeat the encoder strip cleaning — sometimes it takes a thorough wipe.",
      },
    ],
    alternativeCauses: [
      "Incompatible or improperly seated cartridge blocking the carriage",
      "Damaged or bent encoder strip",
      "Failed carriage motor",
    ],
    whenToCallPro:
      "If the carriage moves freely, the encoder strip is clean, and the error persists, the encoder sensor or carriage motor may be failing. A technician can diagnose these internal components.",
    metaTitle: "Canon Printer Error 5100 — Fix It Free | RepairItFree",
    metaDescription:
      "Canon error 5100? This printhead carriage error is easy to fix. Clear obstructions and clean the encoder strip step by step.",
  },
  {
    id: "epson-printer-head-clogged",
    category: "Printers",
    categorySlug: "printers",
    brand: "Epson",
    brandSlug: "epson",
    problemSlug: "head-clogged",
    problemTitle: "Epson Printer Head Clogged",
    difficulty: "Easy",
    timeEstimate: "15-60 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Paper towels",
      "Lint-free cloth",
      "Warm distilled water",
      "Small syringe or eyedropper (optional)",
      "Shallow dish or tray",
    ],
    partsNeeded: [
      {
        name: "Printhead Cleaning Solution",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=printhead+cleaning+solution+epson&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Use only distilled water — tap water minerals can make clogs worse.",
      "Never use compressed air on a printhead — it can force debris deeper.",
      "Protect your work area from ink spills.",
    ],
    quickDiagnosis:
      "Clogged Epson printheads are incredibly common, especially if the printer sat unused for weeks. Ink dries in the microscopic nozzles. The built-in cleaning cycle often isn't enough for serious clogs — but a manual warm water soak usually does the trick.",
    steps: [
      {
        number: 1,
        title: "Run the nozzle check and cleaning cycle",
        description:
          "From the printer menu or Epson software on your computer, print a nozzle check pattern. You'll see a grid of lines — missing or broken lines indicate clogged nozzles. Run the head cleaning utility, then print another nozzle check. Repeat up to 3 times, waiting 5 minutes between each cycle.",
      },
      {
        number: 2,
        title: "Try the power cleaning option",
        description:
          "If the standard cleaning didn't fully clear the clogs, most Epson printers have a deeper 'Power Cleaning' option in the maintenance menu. This uses more ink but pushes harder through the nozzles. Run this once and print another nozzle check. Note: this uses significant ink.",
      },
      {
        number: 3,
        title: "Soak the printhead with warm water",
        description:
          "If automated cleaning failed, it's time for a manual soak. Turn off and unplug the printer. Move the printhead carriage to the center. Place a folded paper towel dampened with warm distilled water under the printhead, directly on the nozzle plate. Leave it for 15-30 minutes. The warm water dissolves dried ink.",
      },
      {
        number: 4,
        title: "Use cleaning solution for stubborn clogs",
        description:
          "For severe clogs, use printhead cleaning solution instead of water. Apply it to the nozzle plate using an eyedropper or syringe (no needle). Let it soak for 30 minutes to an hour. You can gently press a damp paper towel against the nozzles — when you see ink colors bleeding onto the towel, the clogs are clearing.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Blot the printhead dry with a lint-free cloth. Reinstall everything and close up the printer. Run 2-3 cleaning cycles, then print a nozzle check. The pattern should show solid, unbroken lines. Print a color test page to confirm all colors are flowing properly.",
      },
    ],
    alternativeCauses: [
      "Air bubbles in the ink line (especially after cartridge change)",
      "Expired or poor-quality third-party ink",
      "Worn-out printhead nearing end of life",
    ],
    whenToCallPro:
      "If the nozzle check still shows missing lines after thorough cleaning, the printhead may be permanently damaged. On most Epson inkjets, the printhead is not user-replaceable — a technician can order the part, but it often costs as much as a new printer.",
    metaTitle: "Epson Printer Head Clogged — Fix It Free | RepairItFree",
    metaDescription:
      "Epson printhead clogged? Clear dried ink with manual soaking and cleaning cycles. Step-by-step guide to restore print quality.",
  },
  // ==========================================
  // GAME CONSOLES
  // ==========================================
  {
    id: "sony-ps5-no-sound-through-tv",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "no-sound-through-tv",
    problemTitle: "PS5 No Sound Through TV",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: ["HDMI cable (for testing)"],
    partsNeeded: [
      {
        name: "High-Speed HDMI 2.1 Cable",
        costRange: "$10–$20",
        amazonUrl: "https://www.amazon.com/s?k=hdmi+2.1+cable+ps5&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Always turn off the PS5 before disconnecting or connecting cables.",
    ],
    quickDiagnosis:
      "PS5 no sound is almost always a settings issue — either the audio output is set wrong, the HDMI cable is flaky, or the TV audio settings need adjusting. This is rarely a hardware failure.",
    steps: [
      {
        number: 1,
        title: "Check the obvious stuff",
        description:
          "Make sure your TV isn't muted and the volume is up. Check if other inputs (streaming apps, other consoles) have sound on the same TV. If everything else has sound except the PS5, the issue is with the PS5 connection or settings.",
      },
      {
        number: 2,
        title: "Check PS5 audio output settings",
        description:
          "On the PS5, go to Settings > Sound > Audio Output. Make sure the output device is set to 'HDMI Device (TV)' and not a headset or other device. Set the audio format to 'Linear PCM' — this is the most compatible format. Bitstream formats can cause issues with some TVs.",
      },
      {
        number: 3,
        title: "Try a different HDMI cable and port",
        description:
          "Unplug the HDMI cable from both the PS5 and the TV. Try a different HDMI port on the TV. If you have another HDMI cable, try that too. Damaged or loose HDMI cables are a common cause of audio dropout — the video signal sometimes works fine while audio fails.",
      },
      {
        number: 4,
        title: "Check TV audio settings",
        description:
          "On your TV, go to audio settings and check if the audio output is set to 'TV Speakers' (not external speakers or ARC unless you have a soundbar connected). Some TVs have an 'HDMI Audio Format' setting that should be set to 'PCM' or 'Auto'. Also disable any virtual surround features temporarily.",
      },
      {
        number: 5,
        title: "Restart the PS5 and TV",
        description:
          "Turn off the PS5 completely (not rest mode). Turn off the TV and unplug it for 30 seconds. Plug the TV back in, turn it on, then turn on the PS5. This clears the HDMI handshake and often resolves audio sync issues.",
      },
    ],
    alternativeCauses: [
      "Game-specific audio bug (check game settings)",
      "Bluetooth headset paired and stealing audio output",
      "HDMI-CEC conflicts between devices",
      "Faulty PS5 HDMI port (rare)",
    ],
    whenToCallPro:
      "If no settings changes or cable swaps restore audio and the PS5 HDMI port looks physically damaged, the HDMI port may need resoldering — that's a specialized repair.",
    metaTitle: "PS5 No Sound Through TV — Fix It Free | RepairItFree",
    metaDescription:
      "PS5 has video but no audio? Fix audio output settings, HDMI connections, and TV settings with this quick guide.",
  },
  {
    id: "sony-ps5-controller-drift",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "controller-drift",
    problemTitle: "PS5 Controller Drift",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Phillips screwdriver (#00)",
      "Plastic spudger",
      "Compressed air",
      "Isopropyl alcohol (90%+)",
      "Cotton swabs",
    ],
    partsNeeded: [
      {
        name: "DualSense Thumbstick Module (pair)",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=ps5+dualsense+thumbstick+module+replacement&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Opening the controller voids the warranty if still active. Check warranty status first.",
      "Work on a clean, flat surface — the controller has very small screws and ribbon cables.",
      "Disconnect the battery before working on internal components.",
    ],
    quickDiagnosis:
      "DualSense stick drift means the analog stick registers movement when you're not touching it. This is caused by debris around the stick, worn potentiometers inside the module, or a software glitch. Try the free fixes before opening the controller.",
    steps: [
      {
        number: 1,
        title: "Reset the controller",
        description:
          "Turn off the PS5. Flip the controller over and find the small reset hole near the L2 button. Insert a pin or paperclip and hold for 5 seconds. Then connect the controller to the PS5 with a USB cable and press the PS button. This resets the Bluetooth pairing and can fix software-related drift.",
      },
      {
        number: 2,
        title: "Update the controller firmware",
        description:
          "On the PS5, go to Settings > Accessories > Controllers > Wireless Controller Device Software. Install any available updates. Sony has released firmware fixes for drift issues. Also go to Settings > Accessories > Controllers and increase the deadzone if available.",
      },
      {
        number: 3,
        title: "Clean around the stick with compressed air",
        description:
          "Push the affected stick to one side and blast compressed air around the base where the stick meets the controller. Rotate the stick while spraying. Also try gently lifting the stick and spraying underneath. Dust and debris under the stick cap can cause drift without requiring disassembly.",
      },
      {
        number: 4,
        title: "Apply isopropyl alcohol around the stick base",
        description:
          "Dip a cotton swab in 90%+ isopropyl alcohol. Apply it around the base of the affected stick while slowly rotating the stick in circles. The alcohol dissolves grime and evaporates without residue. Let it dry for 5 minutes, then test. Repeat 2-3 times.",
      },
      {
        number: 5,
        title: "Open the controller and replace the stick module (advanced)",
        description:
          "If cleaning didn't fix it, the potentiometer inside the stick module is worn out. Remove the 4 back screws, carefully pry apart the shell with a spudger, disconnect the battery ribbon cable, and access the stick module. Replacing the module requires desoldering — if you're comfortable with a soldering iron, swap it out. Otherwise, some replacement modules are designed as drop-in replacements for certain revisions.",
      },
    ],
    alternativeCauses: [
      "Game-specific deadzone settings are too sensitive",
      "Bluetooth interference from nearby devices",
      "Software bug in a specific game",
    ],
    whenToCallPro:
      "If cleaning doesn't fix the drift and you're not comfortable soldering, a game console repair shop can replace the stick module for $20-$40. This is much cheaper than buying a new controller.",
    metaTitle: "PS5 Controller Drift — Fix It Free | RepairItFree",
    metaDescription:
      "PS5 DualSense stick drifting? Fix it with cleaning, firmware updates, or a stick module replacement. Full guide here.",
  },
  {
    id: "microsoft-xbox-controller-not-connecting",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "controller-not-connecting",
    problemTitle: "Xbox Controller Not Connecting",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$5",
    toolsNeeded: ["USB-C cable", "AA batteries or rechargeable battery pack"],
    partsNeeded: [
      {
        name: "AA Batteries (pair)",
        costRange: "$2–$5",
        amazonUrl: "https://www.amazon.com/s?k=AA+batteries&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "If using rechargeable batteries, only use ones rated for the Xbox controller.",
    ],
    quickDiagnosis:
      "An Xbox controller that won't connect is usually a dead battery, a sync issue, or Bluetooth interference. The fix is almost always a re-pair or battery swap — hardware failure is rare.",
    steps: [
      {
        number: 1,
        title: "Replace or charge the batteries",
        description:
          "Remove the battery cover and replace the AA batteries with fresh ones (or charge your rechargeable pack). The most common reason an Xbox controller won't connect is simply a dead battery — even if the Xbox button flashes briefly before dying.",
      },
      {
        number: 2,
        title: "Re-pair the controller to the console",
        description:
          "Press and hold the Xbox button on the controller until it flashes. Then press the pair button on your Xbox console (small button on the front near the USB port). On the controller, press the small pair button on the top edge. The Xbox button should stop flashing and stay lit when connected.",
      },
      {
        number: 3,
        title: "Try a USB cable connection",
        description:
          "Connect the controller directly to the console with a USB-C cable (or micro-USB for older controllers). If it works wired but not wirelessly, the wireless module in the controller may have an issue. Try updating the controller firmware while wired.",
      },
      {
        number: 4,
        title: "Power cycle the console",
        description:
          "Press and hold the Xbox button on the console for 10 seconds until it shuts down completely. Unplug the power cable for 30 seconds. Plug it back in and turn on the console. This clears the wireless pairing cache and often resolves stubborn connection issues.",
      },
      {
        number: 5,
        title: "Update the controller firmware",
        description:
          "Connect the controller via USB. Go to Settings > Devices & connections > Accessories. Select the controller and check for firmware updates. Install any available updates. Microsoft regularly releases fixes for connectivity issues.",
      },
    ],
    alternativeCauses: [
      "Too many controllers already paired (Xbox supports up to 8)",
      "Controller paired to a different Xbox or PC",
      "WiFi router interference on the same frequency",
      "Damaged USB port on controller (for wired connections)",
    ],
    whenToCallPro:
      "If the controller won't connect wired or wirelessly with fresh batteries and a firmware update, the wireless module or USB port may be faulty. A new controller is usually cheaper than repairing it.",
    metaTitle:
      "Xbox Controller Not Connecting — Fix It Free | RepairItFree",
    metaDescription:
      "Xbox controller won't connect or pair? Fix it with fresh batteries, re-pairing, and a firmware update. Step-by-step guide.",
  },
  {
    id: "microsoft-xbox-series-x-disc-drive-noise",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "disc-drive-noise",
    problemTitle: "Xbox Series X Disc Drive Noise",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0",
    toolsNeeded: ["T8 Torx screwdriver (if opening console)"],
    partsNeeded: [],
    safetyWarnings: [
      "Opening the console voids the warranty. Check warranty status before proceeding.",
      "Unplug the console completely before opening it.",
      "Do not insert anything into the disc slot while the drive is spinning.",
    ],
    quickDiagnosis:
      "A loud Xbox Series X disc drive is common — some noise during disc reading is normal. However, grinding, clicking, or constant loud spinning usually means the disc is unbalanced, the drive needs recalibration, or the console's orientation is affecting the drive.",
    steps: [
      {
        number: 1,
        title: "Determine when the noise happens",
        description:
          "Does it only happen when you first insert a disc (during installation)? Only during gameplay from disc? Or constantly while a disc is inside? Noise only during initial installation is normal — the drive spins at max speed to install the game. Once installed, the disc should spin much less.",
      },
      {
        number: 2,
        title: "Try a different disc",
        description:
          "Eject the noisy disc and try a different game disc. If the noise happens with all discs, the issue is the drive. If only one disc is noisy, that disc may be slightly warped or have a label causing imbalance. Inspect the disc for scratches, warps, or residue.",
      },
      {
        number: 3,
        title: "Change the console orientation",
        description:
          "If your Xbox is vertical, try laying it horizontal (or vice versa). Disc drives in vertical orientation work harder against gravity, and some Xbox Series X units are noisier in one position. Horizontal is generally quieter for disc operations.",
      },
      {
        number: 4,
        title: "Clear the system cache",
        description:
          "Press and hold the Xbox button on the console for 10 seconds to shut it down completely. Unplug the power for 30 seconds. Hold the Xbox button on the console while it's unplugged for another 10 seconds (this drains residual power). Plug back in and start up. This can reset the disc drive behavior.",
      },
      {
        number: 5,
        title: "Check for console vibration",
        description:
          "Make sure the console is on a flat, stable surface. The rubber feet should all be making contact. If the console is on a wobbly surface or touching other objects, vibrations from the disc drive get amplified significantly. Place it on a solid shelf away from other electronics.",
      },
    ],
    alternativeCauses: [
      "Failing disc drive motor (grinding noise)",
      "Loose internal component vibrating against the disc drive",
      "Disc drive firmware issue (rare)",
    ],
    whenToCallPro:
      "If the disc drive makes grinding noises and won't read discs, the drive motor or laser assembly may be failing. Microsoft offers repair service, or a console repair shop can replace the drive. Note: Xbox disc drives are paired to the motherboard.",
    metaTitle:
      "Xbox Series X Disc Drive Noise — Fix It Free | RepairItFree",
    metaDescription:
      "Xbox Series X disc drive loud or grinding? Learn what's normal and how to reduce noise with these troubleshooting steps.",
  },
  {
    id: "nintendo-switch-screen-cracked",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo",
    brandSlug: "nintendo",
    problemSlug: "screen-cracked",
    problemTitle: "Nintendo Switch Screen Cracked",
    difficulty: "Hard",
    timeEstimate: "45-90 minutes",
    costEstimate: "$20–$60",
    toolsNeeded: [
      "Tri-wing Y00 screwdriver",
      "Phillips #00 screwdriver",
      "Plastic spudger",
      "Tweezers",
      "Suction cup",
      "Heat gun or hair dryer",
    ],
    partsNeeded: [
      {
        name: "Nintendo Switch LCD Screen Replacement",
        costRange: "$20–$45",
        amazonUrl: "https://www.amazon.com/s?k=nintendo+switch+screen+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=nintendo+switch+lcd+screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
        ifixitUrl: "https://www.ifixit.com/Search?query=nintendo+switch+screen",
      },
      {
        name: "Adhesive Strips for Screen",
        costRange: "$3–$8",
        amazonUrl: "https://www.amazon.com/s?k=nintendo+switch+screen+adhesive&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Disconnect the battery before removing the screen.",
      "Use a hair dryer on low, not high — excessive heat can damage the LCD underneath.",
      "The Switch has very small ribbon cables. Work slowly and never force a connection.",
      "If the battery looks swollen, stop and take it to a pro.",
    ],
    quickDiagnosis:
      "A cracked Switch screen might be just the outer digitizer (touch layer) or the LCD underneath. If you see colored lines, black spots, or liquid-looking patches, the LCD is damaged. If the crack is on the surface but the image looks fine, only the digitizer is broken.",
    steps: [
      {
        number: 1,
        title: "Assess the damage",
        description:
          "Turn on the Switch and look at the display. Can you see the image clearly behind the cracks? Is touch still working? If the image is perfect but touch is dead, you only need a new digitizer. If the image has lines, black areas, or discoloration, you need a full LCD+digitizer assembly.",
      },
      {
        number: 2,
        title: "Order the right replacement part",
        description:
          "Make sure you order for the correct model: original Switch (HAC-001), Switch V2 (HAC-001-01), or Switch OLED (HEG-001). The OLED model has a different screen entirely. Get a complete LCD+digitizer assembly — it's much easier than replacing just the digitizer.",
      },
      {
        number: 3,
        title: "Remove the back cover and disconnect the battery",
        description:
          "Remove the 4 tri-wing screws on the back, plus the Phillips screws. Carefully lift off the back cover. Immediately disconnect the battery ribbon cable using a plastic spudger. This prevents short circuits while you work. Remove the SD card and game cartridge first.",
      },
      {
        number: 4,
        title: "Remove internal components to access the screen",
        description:
          "Remove the heat shield, disconnect the ribbon cables for the Joy-Con rails, and remove the midframe screws. You need to take out the motherboard and other components to access the screen from behind. Take photos at each step so you can reassemble correctly. Keep screws organized.",
      },
      {
        number: 5,
        title: "Remove the cracked screen",
        description:
          "Apply gentle heat to the edges of the screen with a hair dryer on low for 1-2 minutes — this softens the adhesive. Use a suction cup to lift one corner, then slide a plastic spudger along the edges to separate the screen from the frame. Disconnect the screen's ribbon cable. Remove the old screen.",
      },
      {
        number: 6,
        title: "Install the new screen and reassemble",
        description:
          "Apply new adhesive strips to the frame. Connect the new screen's ribbon cable, then carefully press the screen into place. Reassemble everything in reverse order — motherboard, midframe, ribbon cables, heat shield, battery, back cover. Test the screen before snapping the back cover on fully.",
      },
    ],
    alternativeCauses: [
      "Screen protector cracked but screen is fine underneath",
      "Damage limited to outer glass only (digitizer replacement is easier)",
    ],
    whenToCallPro:
      "If you've never done a console teardown, a Switch screen replacement is a great candidate for a professional repair. Repair shops charge $60-$100 including parts. The small ribbon cables and adhesive make it challenging for first-timers.",
    metaTitle:
      "Nintendo Switch Screen Cracked — Fix It Free | RepairItFree",
    metaDescription:
      "Cracked Nintendo Switch screen? Full step-by-step guide to replace the LCD and digitizer yourself. Tools, parts, and tips included.",
  },
  {
    id: "nintendo-switch-hdmi-not-working-docked",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Nintendo",
    brandSlug: "nintendo",
    problemSlug: "hdmi-not-working-docked",
    problemTitle: "Nintendo Switch HDMI Not Working Docked",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: ["HDMI cable (for testing)", "Compressed air (optional)"],
    partsNeeded: [
      {
        name: "HDMI Cable",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=hdmi+cable+6+feet&tag=repairitfree-20",
      },
      {
        name: "Nintendo Switch AC Adapter (if needed)",
        costRange: "$20–$25",
        amazonUrl: "https://www.amazon.com/s?k=nintendo+switch+ac+adapter+original&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Only use the official Nintendo AC adapter with the dock — third-party chargers have been known to damage Switch consoles.",
      "Make sure the dock USB-C connector is clean and undamaged before inserting the Switch.",
    ],
    quickDiagnosis:
      "A Switch that won't display on TV when docked is usually a connection order issue, a bad HDMI cable, or a dock power problem. The dock requires power to output HDMI — no power means no video, even if the Switch is charging.",
    steps: [
      {
        number: 1,
        title: "Follow the correct connection order",
        description:
          "This is the most common fix. Undock the Switch. Unplug everything from the dock. Now plug in this exact order: (1) plug the AC adapter into the dock, (2) plug the AC adapter into the wall outlet, (3) plug the HDMI cable into the dock, then into the TV, (4) place the Switch into the dock. The green light on the dock should turn on.",
      },
      {
        number: 2,
        title: "Check the dock's green LED",
        description:
          "When the Switch is properly docked and powered, a small green LED on the bottom-left of the dock should light up. If it's not lit, the dock isn't getting power. Check the AC adapter connection. If the LED flashes and turns off, the dock may need a hard reset.",
      },
      {
        number: 3,
        title: "Try a different HDMI cable and TV input",
        description:
          "Swap the HDMI cable for a known-working one. Also try a different HDMI input on your TV. Make sure the TV is set to the correct input. Some TVs have HDMI ports that don't support certain resolutions — try each port.",
      },
      {
        number: 4,
        title: "Hard reset the dock",
        description:
          "Unplug the AC adapter from the dock and the wall. Unplug the HDMI cable. Leave everything unplugged for 30 seconds. Reconnect following the order from Step 1. This resets the dock's internal state and clears HDMI handshake issues.",
      },
      {
        number: 5,
        title: "Check the Switch's TV output settings",
        description:
          "With the Switch undocked, go to System Settings > TV Output. Set TV Resolution to 'Automatic.' Set RGB Range to 'Full Range' (or try 'Limited Range' if your TV is older). Make sure Match TV Power State is on. Then re-dock and test.",
      },
    ],
    alternativeCauses: [
      "Third-party AC adapter not providing enough power to the dock",
      "Dirty or bent USB-C connector inside the dock",
      "Damaged HDMI port on the dock (especially from rough HDMI cable insertion)",
      "Switch USB-C port issue (rare)",
    ],
    whenToCallPro:
      "If the dock green light works, the HDMI cable is good, and the TV shows nothing, the dock's HDMI port or the Switch's USB-C port may be damaged. Nintendo offers repair service, or a repair shop can fix it.",
    metaTitle:
      "Nintendo Switch HDMI Not Working Docked — Fix It Free | RepairItFree",
    metaDescription:
      "Nintendo Switch not displaying on TV when docked? Fix HDMI connection issues with the correct dock setup order and troubleshooting steps.",
  },
  {
    id: "sony-ps4-ejecting-disc-randomly",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Sony",
    brandSlug: "sony",
    problemSlug: "ejecting-disc-randomly",
    problemTitle: "PS4 Ejecting Disc Randomly",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: ["T8 Torx screwdriver", "Phillips screwdriver"],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the PS4 completely before working on it.",
      "Place the console on a flat, stable surface.",
    ],
    quickDiagnosis:
      "The PS4 randomly ejecting discs is a well-known issue caused by a faulty eject button sensor (on touch-button models), static electricity buildup, or a loose manual eject screw. Sony designed the eject button using a capacitive touch sensor that's prone to false triggers.",
    steps: [
      {
        number: 1,
        title: "Fully power off and unplug the PS4",
        description:
          "Hold the power button on the PS4 until it beeps twice and shuts down completely. Unplug the power cable from the back. Wait 30 seconds. This drains static charge that can trigger the capacitive eject button. Plug it back in and test.",
      },
      {
        number: 2,
        title: "Tighten the manual eject screw",
        description:
          "On the bottom of the PS4, remove the small plastic cover to access the manual eject screw. Using a Phillips or Torx screwdriver (model-dependent), turn this screw clockwise 2-3 turns to tighten it. A loose eject screw can cause the drive to randomly eject. Do not overtighten.",
      },
      {
        number: 3,
        title: "Disable the eject button (rubber foot method)",
        description:
          "On original PS4 models with the touch eject button, the rubber foot underneath the button can push against it. Remove the bottom rubber foot that's closest to the eject button. This prevents pressure on the capacitive sensor from the surface the PS4 sits on.",
      },
      {
        number: 4,
        title: "Clean around the eject button",
        description:
          "If your PS4 has a physical eject button, clean around it to remove any debris that might be pressing it. If it's a touch-sensitive button, wipe the area with a dry cloth. Moisture or grime on the capacitive sensor can trigger false ejects.",
      },
      {
        number: 5,
        title: "Rebuild the database",
        description:
          "Boot the PS4 into Safe Mode: hold the power button until you hear two beeps (about 7 seconds). Connect a controller via USB and select 'Rebuild Database.' This doesn't delete your games or saves but fixes software issues that can cause random disc ejection.",
      },
    ],
    alternativeCauses: [
      "Software bug (system update may fix it)",
      "Overheating causing components to expand and trigger the sensor",
      "Faulty disc drive ribbon cable",
    ],
    whenToCallPro:
      "If the PS4 keeps ejecting discs after all these steps, the eject button circuitry or the disc drive itself may be faulty. A repair shop can disable the touch sensor permanently and have you use only the software eject option.",
    metaTitle:
      "PS4 Ejecting Disc Randomly — Fix It Free | RepairItFree",
    metaDescription:
      "PS4 spitting out discs randomly? Fix the capacitive eject button and manual eject screw with this proven step-by-step guide.",
  },
  {
    id: "microsoft-xbox-one-power-supply-orange-light",
    category: "Game Consoles",
    categorySlug: "game-consoles",
    brand: "Microsoft",
    brandSlug: "microsoft",
    problemSlug: "power-supply-orange-light",
    problemTitle: "Xbox One Power Supply Orange Light",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: ["Compressed air (optional)"],
    partsNeeded: [
      {
        name: "Xbox One Power Supply Replacement",
        costRange: "$25–$40",
        amazonUrl: "https://www.amazon.com/s?k=xbox+one+power+supply+replacement&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Never open the power supply brick — it contains high-voltage capacitors.",
      "Make sure the power supply has ventilation and is not covered by anything.",
      "Only use a genuine or Microsoft-certified replacement power supply.",
    ],
    quickDiagnosis:
      "An orange or amber light on the Xbox One power supply means it's in standby mode or has a fault. A white light means it's working normally. If the light is orange and the Xbox won't turn on, the power supply is either overheated, has a surge protection fault, or is failing.",
    steps: [
      {
        number: 1,
        title: "Perform a full power reset",
        description:
          "Unplug the power cable from the Xbox, then unplug the power supply from the wall outlet. Wait 10 seconds. Plug the power supply back into the wall first — the light should turn orange (standby). Then plug it into the Xbox. Press the Xbox button. The light should turn white.",
      },
      {
        number: 2,
        title: "Try a different wall outlet",
        description:
          "Plug the power supply directly into a wall outlet — not a power strip or surge protector. Some surge protectors don't provide clean enough power for the Xbox power supply, causing it to go into protection mode. Try a completely different outlet, ideally in a different room.",
      },
      {
        number: 3,
        title: "Check for overheating",
        description:
          "Feel the power supply brick. If it's very hot, it has overheated and shut down to protect itself. Make sure it's in an open area with airflow on all sides — never in a cabinet, on carpet, or covered. Use compressed air to blow out dust from the vents. Let it cool for 30 minutes before trying again.",
      },
      {
        number: 4,
        title: "Inspect the cables and connections",
        description:
          "Check both ends of the power cable for bent pins, fraying, or damage. Also check the power port on the Xbox — if it's dusty, blow it out with compressed air. A loose or damaged connection can prevent the power supply from switching to full power mode.",
      },
      {
        number: 5,
        title: "Replace the power supply if needed",
        description:
          "If the light stays orange after all the steps above, the internal fuse or circuitry in the power supply has likely failed. Order a replacement that matches your exact Xbox One model (original, S, or X — note: S and X have internal power supplies). Install it and test.",
      },
    ],
    alternativeCauses: [
      "Power surge damaged the power supply",
      "Xbox One motherboard issue preventing power draw",
      "Faulty wall outlet not providing enough voltage",
    ],
    whenToCallPro:
      "If a new power supply also shows an orange light, the Xbox console itself may have a motherboard issue preventing it from drawing power. A console repair shop can diagnose the motherboard.",
    metaTitle:
      "Xbox One Power Supply Orange Light — Fix It Free | RepairItFree",
    metaDescription:
      "Xbox One power brick stuck on orange? Reset it, check for overheating, and get your console powered back on with this guide.",
  },
  // ==========================================
  // LAPTOPS
  // ==========================================
  {
    id: "hp-laptop-blue-screen-of-death",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "HP",
    brandSlug: "hp",
    problemSlug: "blue-screen-of-death",
    problemTitle: "HP Laptop Blue Screen of Death",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0",
    toolsNeeded: ["USB flash drive (8GB+ for recovery media, optional)"],
    partsNeeded: [],
    safetyWarnings: [
      "Save important files if possible before attempting fixes — some steps involve system changes.",
      "Note the error code shown on the blue screen — it helps diagnose the specific problem.",
    ],
    quickDiagnosis:
      "A blue screen (BSOD) on an HP laptop is caused by driver conflicts, RAM issues, overheating, or corrupted system files. The stop code on the screen (like IRQL_NOT_LESS_OR_EQUAL or CRITICAL_PROCESS_DIED) points to the cause. Most BSODs are software-fixable.",
    steps: [
      {
        number: 1,
        title: "Note the error code and restart",
        description:
          "When the blue screen appears, note the stop code at the bottom (e.g., DRIVER_IRQL_NOT_LESS_OR_EQUAL). If the laptop auto-restarts too fast to read it, go to Event Viewer (search in Start) > Windows Logs > System and look for critical errors at the time of the crash.",
      },
      {
        number: 2,
        title: "Boot into Safe Mode",
        description:
          "If the laptop keeps crashing, force Safe Mode: turn on the laptop and immediately hold the power button to force shut down. Repeat 3 times. On the 4th boot, Windows will enter Recovery Mode. Go to Troubleshoot > Advanced Options > Startup Settings > Restart, then press F5 for Safe Mode with Networking.",
      },
      {
        number: 3,
        title: "Update or roll back drivers",
        description:
          "In Safe Mode, open Device Manager (right-click Start button). Look for any devices with a yellow triangle. Right-click and select Update Driver. If the BSOD started after a recent driver update, right-click the device and select Properties > Driver > Roll Back Driver. Graphics and network drivers are the most common culprits.",
      },
      {
        number: 4,
        title: "Run system file checker and DISM",
        description:
          "Open Command Prompt as Administrator. Run 'sfc /scannow' and wait for it to complete. If it finds corrupt files it can't fix, run 'DISM /Online /Cleanup-Image /RestoreHealth' next, then run sfc /scannow again. These commands repair corrupted Windows system files that cause BSODs.",
      },
      {
        number: 5,
        title: "Check for RAM and disk issues",
        description:
          "Search for 'Windows Memory Diagnostic' in the Start menu and run it — this tests your RAM for errors (requires a restart). Also open Command Prompt as Administrator and run 'chkdsk C: /f /r' to scan for disk errors. Failing RAM or a dying hard drive causes frequent BSODs.",
      },
      {
        number: 6,
        title: "Check for overheating",
        description:
          "BSODs during heavy tasks (gaming, video editing) often indicate overheating. Download a temperature monitor like HWiNFO. If your CPU is hitting 90C+, the laptop needs thermal maintenance — clean the fans with compressed air and consider replacing thermal paste.",
      },
    ],
    alternativeCauses: [
      "Recent Windows update causing incompatibility",
      "Malware infection corrupting system files",
      "Failing SSD or hard drive",
      "Incompatible software (especially antivirus conflicts)",
    ],
    whenToCallPro:
      "If BSODs persist after all software fixes and the memory diagnostic shows errors, a RAM module or storage drive may need physical replacement. A pro can also diagnose motherboard-level issues.",
    metaTitle:
      "HP Laptop Blue Screen of Death — Fix It Free | RepairItFree",
    metaDescription:
      "HP laptop keeps getting blue screen errors? Diagnose the stop code and fix drivers, system files, and hardware issues step by step.",
  },
  {
    id: "dell-laptop-no-display-external-works",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Dell",
    brandSlug: "dell",
    problemSlug: "no-display-external-works",
    problemTitle: "Dell Laptop No Display But External Monitor Works",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: [
      "External monitor or TV",
      "HDMI or DisplayPort cable",
      "Phillips screwdriver",
      "Plastic spudger",
    ],
    partsNeeded: [
      {
        name: "Dell Laptop LCD Screen (model-specific)",
        costRange: "$40–$80",
        amazonUrl: "https://www.amazon.com/s?k=dell+laptop+replacement+screen&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=dell+laptop+lcd+screen&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Disconnect the battery (or unplug the internal battery cable) before working on the display.",
      "Handle the LCD panel by its edges — pressure on the screen surface can cause damage.",
    ],
    quickDiagnosis:
      "If a Dell laptop works fine on an external monitor but the built-in screen is black, the issue is the laptop's display panel, the display cable, or the backlight. The motherboard and GPU are fine since external output works.",
    steps: [
      {
        number: 1,
        title: "Confirm the external monitor works",
        description:
          "Connect an external monitor via HDMI or DisplayPort. If you see your desktop on the external monitor, the GPU and motherboard are fine. Press Windows+P and select 'Duplicate' or 'Second Screen Only' to make sure you're not just in the wrong display mode.",
      },
      {
        number: 2,
        title: "Check brightness and display settings",
        description:
          "The screen may just be turned off or at zero brightness. Press the brightness up key (usually Fn + F11 or F12 on Dell laptops). Also try pressing Fn + F8 (or the key with a monitor icon) to toggle between display modes. On some Dell models, the brightness can be set to zero which looks like a dead screen.",
      },
      {
        number: 3,
        title: "Shine a flashlight at the screen",
        description:
          "In a dark room, turn on the laptop and shine a flashlight at the screen at an angle. If you can faintly see your desktop, the backlight has failed but the LCD panel is fine. This means the backlight circuit, inverter board, or LED backlight strip needs replacement.",
      },
      {
        number: 4,
        title: "Reseat the display cable",
        description:
          "Power off and remove the battery. Open the bottom panel of the laptop. Locate the display cable — it connects from the motherboard to the screen through the hinge area. Disconnect and firmly reconnect both ends. A loose display cable is one of the most common causes of a black internal screen, especially if the laptop has been dropped or the hinge is stiff.",
      },
      {
        number: 5,
        title: "Replace the display panel if needed",
        description:
          "If the cable reseat didn't help, the LCD panel itself has likely failed. Look up your Dell model and order a compatible screen (match the resolution, size, and connector type). Removing the bezel, unscrewing the old panel, swapping the cable, and installing the new panel is straightforward on most Dell laptops. Search for a teardown video for your specific model.",
      },
    ],
    alternativeCauses: [
      "Display driver crash — try booting into Safe Mode",
      "Lid close sensor stuck — the laptop thinks the lid is closed",
      "Damaged display cable from repeated hinge movement",
    ],
    whenToCallPro:
      "If the backlight is the issue (you can see a faint image with a flashlight), the repair depends on your model — some are simple LED strip replacements and others require a full panel swap. A pro can identify the exact failure.",
    metaTitle:
      "Dell Laptop No Display External Works — Fix It Free | RepairItFree",
    metaDescription:
      "Dell laptop screen black but external monitor works? Diagnose the display cable, backlight, and LCD panel with this guide.",
  },
  {
    id: "apple-macbook-not-charging",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "not-charging",
    problemTitle: "MacBook Not Charging",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: ["Lint-free cloth", "Isopropyl alcohol", "Wooden toothpick"],
    partsNeeded: [
      {
        name: "MacBook USB-C Charging Cable",
        costRange: "$20–$40",
        amazonUrl: "https://www.amazon.com/s?k=macbook+usb-c+charging+cable&tag=repairitfree-20",
      },
      {
        name: "MacBook Power Adapter (model-specific)",
        costRange: "$40–$80",
        amazonUrl: "https://www.amazon.com/s?k=macbook+power+adapter&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Only use Apple-certified or MFi-certified chargers — cheap knockoffs can damage the battery or cause fire.",
      "If the MacBook or charger smells burnt or feels excessively hot, stop using it immediately.",
    ],
    quickDiagnosis:
      "A MacBook that won't charge is usually caused by a dirty charging port, a bad cable, an SMC issue, or a worn battery. Check the basics before assuming hardware failure — Apple's SMC reset fixes charging issues more often than you'd expect.",
    steps: [
      {
        number: 1,
        title: "Check the charger and cable",
        description:
          "Inspect the charging cable for fraying, kinks, or damage near the connectors. Try a different USB-C cable if you have one. Also try a different power adapter. If the MacBook charges with a different cable or adapter, you've found the problem.",
      },
      {
        number: 2,
        title: "Clean the charging port",
        description:
          "Shut down the MacBook. Use a flashlight to look inside the USB-C or MagSafe port for lint, dust, or debris. Gently clean it with a wooden toothpick — never use metal. Compressed air can also help. A packed port is a very common cause of intermittent or failed charging.",
      },
      {
        number: 3,
        title: "Reset the SMC (System Management Controller)",
        description:
          "For Intel MacBooks: shut down. Press and hold Shift+Control+Option on the left side + Power button for 10 seconds simultaneously. Release all keys, then press Power to start up. For Apple Silicon MacBooks (M1/M2/M3+): just shut down completely, wait 30 seconds, and start up — the SMC resets automatically on a full shutdown.",
      },
      {
        number: 4,
        title: "Reset the NVRAM/PRAM",
        description:
          "For Intel MacBooks: shut down. Turn on and immediately hold Option+Command+P+R for 20 seconds. The MacBook may restart during this. For Apple Silicon MacBooks, NVRAM resets automatically on every startup, so skip this step.",
      },
      {
        number: 5,
        title: "Check battery health",
        description:
          "Click the Apple menu > System Settings > Battery > Battery Health (or hold Option and click the battery icon in the menu bar on older macOS). If it says 'Service Recommended,' the battery is degraded and may not hold or accept a charge properly. A battery replacement may be needed.",
      },
    ],
    alternativeCauses: [
      "macOS 'Optimized Battery Charging' pausing charge at 80% (this is intentional)",
      "Running resource-heavy tasks that consume power faster than the charger provides",
      "Faulty USB-C port on the MacBook (try a different port if your model has two)",
      "Water damage to charging circuitry",
    ],
    whenToCallPro:
      "If the SMC reset and a known-good charger don't fix it, the charging circuit on the logic board or the battery may need replacement. Apple or an authorized service provider can run diagnostics.",
    metaTitle: "MacBook Not Charging — Fix It Free | RepairItFree",
    metaDescription:
      "MacBook won't charge? Clean the port, reset the SMC, and check the battery health with this step-by-step troubleshooting guide.",
  },
  {
    id: "lenovo-laptop-touchpad-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Lenovo",
    brandSlug: "lenovo",
    problemSlug: "touchpad-not-working",
    problemTitle: "Lenovo Laptop Touchpad Not Working",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0",
    toolsNeeded: ["USB mouse (for troubleshooting)"],
    partsNeeded: [],
    safetyWarnings: [
      "If the touchpad stopped working after a liquid spill, let the laptop dry completely before using it.",
    ],
    quickDiagnosis:
      "A Lenovo touchpad that stops working is almost always a software issue — the touchpad was accidentally disabled, a driver needs updating, or a Windows update broke it. Hardware failure is rare unless the laptop was dropped or had liquid spill.",
    steps: [
      {
        number: 1,
        title: "Check if the touchpad is disabled",
        description:
          "Most Lenovo laptops have a function key to toggle the touchpad. Press Fn + F6 (or the key with a touchpad icon — it varies by model). You might see a small on-screen indicator showing the touchpad turning on. This is the most common cause — it's easy to hit accidentally.",
      },
      {
        number: 2,
        title: "Check Windows touchpad settings",
        description:
          "Connect a USB mouse. Go to Settings > Bluetooth & devices > Touchpad. Make sure the touchpad toggle is turned on. Also check 'Leave touchpad on when a mouse is connected' — if this is off, plugging in a USB mouse disables the touchpad.",
      },
      {
        number: 3,
        title: "Update or reinstall the touchpad driver",
        description:
          "Open Device Manager (right-click Start > Device Manager). Expand 'Mice and other pointing devices.' Right-click your Synaptics or Elan touchpad and select 'Update driver.' If that doesn't work, select 'Uninstall device,' check 'Delete driver software,' then restart the laptop — Windows will reinstall a fresh driver.",
      },
      {
        number: 4,
        title: "Check the BIOS setting",
        description:
          "Restart the laptop and press F2 (or Fn+F2) during startup to enter BIOS. Navigate to the Input or Configuration tab and look for a Touchpad setting. Make sure it's set to Enabled. Save and exit. Some Lenovo models allow disabling the touchpad in BIOS, which overrides Windows settings.",
      },
      {
        number: 5,
        title: "Download the driver from Lenovo support",
        description:
          "Go to support.lenovo.com, enter your laptop's serial number, and download the latest touchpad driver directly from Lenovo. Install it and restart. Lenovo's own drivers often work better than the generic Windows drivers, especially for ThinkPad trackpoints and precision touchpads.",
      },
    ],
    alternativeCauses: [
      "Recent Windows update overriding the touchpad driver",
      "External mouse software (like Logitech Options) disabling the touchpad",
      "Loose internal ribbon cable (if laptop was recently serviced or dropped)",
      "Touchpad hardware failure (rare)",
    ],
    whenToCallPro:
      "If the touchpad doesn't work in BIOS (where drivers don't matter), the hardware itself is faulty — the touchpad cable or the touchpad unit may need replacement. A Lenovo service center can fix this.",
    metaTitle:
      "Lenovo Laptop Touchpad Not Working — Fix It Free | RepairItFree",
    metaDescription:
      "Lenovo touchpad stopped working? Re-enable it with function keys, update drivers, and check BIOS settings with this guide.",
  },
  {
    id: "acer-laptop-keyboard-some-keys-not-working",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Acer",
    brandSlug: "acer",
    problemSlug: "keyboard-some-keys-not-working",
    problemTitle: "Acer Laptop Keyboard Some Keys Not Working",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Compressed air",
      "Keycap puller or small flathead screwdriver",
      "Isopropyl alcohol",
      "Cotton swabs",
      "Phillips screwdriver (for keyboard replacement)",
    ],
    partsNeeded: [
      {
        name: "Acer Laptop Keyboard Replacement (model-specific)",
        costRange: "$15–$40",
        amazonUrl: "https://www.amazon.com/s?k=acer+laptop+keyboard+replacement&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=acer+laptop+keyboard+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off and unplug the laptop before cleaning the keyboard.",
      "Be gentle when removing keycaps — the scissor mechanisms underneath are fragile.",
      "If the keyboard stopped working after a spill, flip the laptop upside down immediately to drain.",
    ],
    quickDiagnosis:
      "When only some keys on an Acer laptop keyboard stop working, it's typically debris under the keys, a liquid spill residue, a driver issue, or a damaged keyboard ribbon cable. If an entire row or section is dead, the ribbon cable or keyboard circuit is likely the culprit.",
    steps: [
      {
        number: 1,
        title: "Identify the pattern of dead keys",
        description:
          "Open a text editor and test every key on the keyboard. Use the on-screen keyboard (search 'On-Screen Keyboard' in Windows) to compare. Note which keys don't work. Are they random, in a row, or in a section? Random dead keys suggest debris. A whole row or column suggests a circuit or cable issue.",
      },
      {
        number: 2,
        title: "Clean under the affected keys",
        description:
          "Turn off the laptop. Tilt it at a 45-degree angle and use compressed air to blow between and under the keys, moving across the keyboard. For stuck or dead individual keys, gently pry off the keycap with a keycap puller or thin flathead screwdriver. Clean underneath with a cotton swab and isopropyl alcohol. Snap the keycap back on.",
      },
      {
        number: 3,
        title: "Check for driver or software issues",
        description:
          "Open Device Manager > Keyboards. Right-click your keyboard entry and select 'Uninstall device.' Restart the laptop — Windows will reinstall the driver automatically. Also check if Filter Keys is accidentally turned on: Settings > Accessibility > Keyboard > Filter Keys should be off.",
      },
      {
        number: 4,
        title: "Test with an external keyboard",
        description:
          "Plug in a USB keyboard and test all the keys that aren't working on the built-in keyboard. If the same keys don't work on the external keyboard, it's a software issue. If the external keyboard works perfectly, the built-in keyboard hardware is the problem.",
      },
      {
        number: 5,
        title: "Replace the keyboard",
        description:
          "If cleaning and drivers didn't help and an entire section is dead, the keyboard needs replacing. On most Acer laptops, the keyboard is held in by screws from the bottom and clips from the top. Remove the back panel, disconnect the keyboard ribbon cable from the motherboard, unscrew the keyboard, and swap it. Order by exact Acer model number.",
      },
    ],
    alternativeCauses: [
      "Liquid spill damage corroding the key contacts",
      "Windows Sticky Keys or Filter Keys accidentally enabled",
      "Keyboard ribbon cable came loose from the motherboard connector",
      "Physical damage from heavy impact",
    ],
    whenToCallPro:
      "If the keyboard replacement doesn't fix it, the motherboard keyboard connector may be damaged. A technician can inspect and repair the connector.",
    metaTitle:
      "Acer Laptop Keyboard Some Keys Not Working — Fix It Free | RepairItFree",
    metaDescription:
      "Some keys on your Acer laptop not working? Clean debris, fix drivers, or replace the keyboard with this step-by-step guide.",
  },
  {
    id: "asus-laptop-wont-turn-on",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "ASUS",
    brandSlug: "asus",
    problemSlug: "wont-turn-on",
    problemTitle: "ASUS Laptop Won't Turn On",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Known-working charger (for testing)",
    ],
    partsNeeded: [
      {
        name: "ASUS Laptop Battery (model-specific)",
        costRange: "$25–$50",
        amazonUrl: "https://www.amazon.com/s?k=asus+laptop+battery+replacement&tag=repairitfree-20",
      },
      {
        name: "ASUS Laptop Charger (model-specific)",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=asus+laptop+charger&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "If the laptop smells burnt or you see swelling on the bottom, do not try to turn it on — the battery may be compromised.",
      "Disconnect the internal battery cable before working on components.",
    ],
    quickDiagnosis:
      "An ASUS laptop that won't turn on can be caused by a drained battery, a faulty charger, residual charge buildup, or a hardware failure. A static discharge reset fixes this surprisingly often.",
    steps: [
      {
        number: 1,
        title: "Check the charger and power LED",
        description:
          "Plug in the charger and look for any LED on the laptop — a charging indicator, power LED, or any sign of life. If no LED lights up at all, try a different outlet. If the charger LED lights up but the laptop doesn't, the charger may be outputting the wrong voltage. Make sure you're using the correct ASUS charger for your model.",
      },
      {
        number: 2,
        title: "Perform a static discharge reset",
        description:
          "Unplug the charger. If the battery is removable, remove it. If not, you'll need to open the back panel and disconnect the battery cable. Hold the power button for 30 seconds to drain all residual electricity. Reconnect the battery and charger, then try turning on. This fixes static charge buildup that can prevent booting.",
      },
      {
        number: 3,
        title: "Try booting with only the charger (no battery)",
        description:
          "Remove or disconnect the battery. Plug in the charger and try to power on. If the laptop starts without the battery, the battery is dead or faulty. You can order a replacement battery for your specific ASUS model. If it still doesn't start with only the charger, the charger or motherboard is the issue.",
      },
      {
        number: 4,
        title: "Reseat the RAM",
        description:
          "Open the back panel (usually a few Phillips screws). Locate the RAM modules. Push the clips on each side to release the RAM, then firmly reseat each module until it clicks. Loose RAM prevents the laptop from posting at all — no display, no fans, nothing. This is common after the laptop has been bumped or transported.",
      },
      {
        number: 5,
        title: "Listen and look for partial signs of life",
        description:
          "Press the power button and listen carefully. Do fans spin briefly? Does the power LED flash? Does the screen flicker? Any sign of life means power is getting to the motherboard. Fans spin but no display could be a RAM, GPU, or display issue. No fans, no lights, and no sound points to a dead motherboard or failed power circuit.",
      },
    ],
    alternativeCauses: [
      "Failed CMOS battery causing boot issues",
      "Corrupted BIOS needing recovery",
      "Liquid damage to the power circuit",
      "Broken power button or power button cable",
    ],
    whenToCallPro:
      "If the static discharge reset and RAM reseat don't bring any signs of life, the motherboard or power delivery circuit has likely failed. A repair technician can diagnose and potentially fix the power circuit.",
    metaTitle: "ASUS Laptop Won't Turn On — Fix It Free | RepairItFree",
    metaDescription:
      "ASUS laptop dead and won't power on? Try a static discharge reset, reseat RAM, and check the battery with this troubleshooting guide.",
  },
  {
    id: "generic-laptop-screen-flickering",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "screen-flickering",
    problemTitle: "Laptop Screen Flickering",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: ["Phillips screwdriver (if opening laptop)"],
    partsNeeded: [
      {
        name: "Laptop LCD Display Cable (model-specific)",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=laptop+lcd+display+cable&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Update your GPU drivers from the manufacturer's website, not from random download sites.",
      "If opening the laptop, disconnect the battery before touching internal cables.",
    ],
    quickDiagnosis:
      "Laptop screen flickering is caused by either software (driver issues, refresh rate settings, incompatible apps) or hardware (loose display cable, failing backlight, damaged panel). Test by connecting an external monitor — if the external monitor is fine, the issue is the laptop's screen or cable.",
    steps: [
      {
        number: 1,
        title: "Check if it's a software issue",
        description:
          "Open Task Manager (Ctrl+Shift+Esc). Watch the Task Manager window while the screen flickers. If Task Manager itself flickers, it's likely a driver issue. If Task Manager stays stable but everything else flickers, a specific app is causing the problem. Uninstall any recently installed apps.",
      },
      {
        number: 2,
        title: "Update or rollback the display driver",
        description:
          "Right-click the desktop > Display settings > Advanced display > Display adapter properties > Properties > Driver. Try 'Update Driver' first. If the flickering started after an update, click 'Roll Back Driver' instead. For the best results, download the latest driver directly from the GPU manufacturer (NVIDIA, AMD, or Intel).",
      },
      {
        number: 3,
        title: "Change the refresh rate",
        description:
          "Go to Settings > System > Display > Advanced display. Try changing the refresh rate — if it's at 60Hz, try 59Hz or another available option. Some laptop panels flicker at certain refresh rates due to panel compatibility issues. Also disable 'Variable refresh rate' if it's enabled.",
      },
      {
        number: 4,
        title: "Disable hardware acceleration in problem apps",
        description:
          "Some apps (Chrome, Discord, Slack) use hardware acceleration that can cause flickering. In Chrome: Settings > System > turn off 'Use hardware acceleration.' In Discord: Settings > Advanced > turn off Hardware Acceleration. Test if the flickering stops.",
      },
      {
        number: 5,
        title: "Check the display cable (if software fixes didn't work)",
        description:
          "If an external monitor shows no flickering, the laptop's display cable is likely loose or damaged. Open the back panel and locate the display cable connection on the motherboard. Disconnect and firmly reconnect it. If the flickering changes when you move the laptop lid, the cable is the problem — order a replacement cable for your specific model.",
      },
    ],
    alternativeCauses: [
      "Failing laptop backlight or inverter",
      "Overheating GPU causing display artifacts",
      "Damaged LCD panel",
      "Windows Night Light or third-party blue light filter conflicting",
    ],
    whenToCallPro:
      "If a new display cable doesn't fix the flicker and external monitors work fine, the LCD panel or backlight may be failing. A technician can test and replace the display.",
    metaTitle: "Laptop Screen Flickering — Fix It Free | RepairItFree",
    metaDescription:
      "Laptop screen flickering or flashing? Fix it by updating drivers, adjusting refresh rate, or checking the display cable. Full guide.",
  },
  {
    id: "generic-laptop-wont-connect-to-wifi",
    category: "Laptops",
    categorySlug: "laptops",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "wont-connect-to-wifi",
    problemTitle: "Laptop Won't Connect to WiFi",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: ["Phillips screwdriver (if reseating WiFi card)"],
    partsNeeded: [
      {
        name: "USB WiFi Adapter (backup solution)",
        costRange: "$10–$20",
        amazonUrl: "https://www.amazon.com/s?k=usb+wifi+adapter+laptop&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Make sure you know your WiFi password before resetting network settings.",
      "If you're resetting network settings, you'll lose all saved WiFi networks and VPN configurations.",
    ],
    quickDiagnosis:
      "A laptop that won't connect to WiFi is almost always a software problem — the WiFi was accidentally turned off, the driver crashed, or the network settings are corrupted. Check the airplane mode toggle first — it catches more people than you'd think.",
    steps: [
      {
        number: 1,
        title: "Check airplane mode and WiFi toggle",
        description:
          "Click the network icon in the system tray (bottom-right of screen). Make sure Airplane Mode is off and WiFi is turned on. Also check if your laptop has a physical WiFi switch or a function key (usually Fn + F2 or a key with an antenna icon). Toggle it on if it was off.",
      },
      {
        number: 2,
        title: "Restart the network adapter",
        description:
          "Go to Settings > Network & internet > Advanced network settings > More network adapter options. Right-click your WiFi adapter and select 'Disable.' Wait 10 seconds, then right-click and select 'Enable.' This restarts the WiFi hardware without rebooting the laptop.",
      },
      {
        number: 3,
        title: "Forget and reconnect to the network",
        description:
          "Go to Settings > Network & internet > WiFi > Manage known networks. Find your WiFi network and click 'Forget.' Then scan for networks, select yours, and enter the password fresh. Corrupted saved network profiles are a common cause of connection failures.",
      },
      {
        number: 4,
        title: "Run the network troubleshooter and reset",
        description:
          "Go to Settings > System > Troubleshoot > Other troubleshooters > Internet Connections. Run the troubleshooter. If that doesn't fix it, go to Settings > Network & internet > Advanced network settings > Network reset. This reinstalls all network adapters and resets all settings to defaults. You'll need to reconnect to WiFi afterward.",
      },
      {
        number: 5,
        title: "Update or reinstall the WiFi driver",
        description:
          "Open Device Manager > Network adapters. Right-click your WiFi adapter (usually Intel, Realtek, or Qualcomm) and select 'Update driver.' If that fails, select 'Uninstall device,' check 'Delete driver software,' and restart the laptop. Windows will reinstall a fresh driver. For the best driver, download it from your laptop manufacturer's support page.",
      },
      {
        number: 6,
        title: "Reseat the WiFi card (if all else fails)",
        description:
          "If no software fix works, open the laptop's back panel and locate the WiFi card (a small card with two antenna wires). Disconnect the antenna wires, unscrew the card, remove it, and reinstall it firmly. Reconnect the antenna wires (usually labeled 'Main' and 'Aux'). A loose WiFi card connection can cause intermittent or total WiFi failure.",
      },
    ],
    alternativeCauses: [
      "Router issue (restart the router and check other devices)",
      "IP address conflict on the network",
      "DNS server problem — try setting DNS to 8.8.8.8 manually",
      "VPN software blocking the WiFi connection",
    ],
    whenToCallPro:
      "If the WiFi card is properly seated, drivers are updated, and other devices connect to your WiFi fine, the WiFi card may be dead. A USB WiFi adapter is a cheap workaround ($10-$20), or a technician can replace the internal WiFi card.",
    metaTitle:
      "Laptop Won't Connect to WiFi — Fix It Free | RepairItFree",
    metaDescription:
      "Laptop can't connect to WiFi? Fix airplane mode, reset the adapter, update drivers, and more with this complete troubleshooting guide.",
  },
];
