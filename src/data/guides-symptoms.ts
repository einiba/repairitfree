import { Guide } from "@/lib/types";

export const symptomGuides: Guide[] = [
  // ============================================================
  // WASHING MACHINES
  // ============================================================
  {
    id: "samsung-washer-leaking-from-bottom",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "leaking-from-bottom",
    problemTitle: "Leaking from Bottom",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Towels",
      "Flashlight",
      "Adjustable pliers",
    ],
    partsNeeded: [
      {
        name: "Tub-to-pump hose (if cracked)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+tub+to+pump+hose",
      },
      {
        name: "Door boot seal (if torn)",
        costRange: "$20–$30",
        amazonUrl: "https://www.amazon.com/s?k=samsung+washer+door+boot+seal&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before any inspection.",
      "Mop up standing water to prevent slipping.",
      "Keep towels handy — more water may release when you tilt the machine.",
    ],
    quickDiagnosis:
      "A Samsung washer leaking from the bottom is usually caused by a loose or cracked tub-to-pump hose, a torn door boot seal, or a clogged drain filter forcing water out the wrong way. Identifying where the water pools tells you which part to check first.",
    steps: [
      {
        number: 1,
        title: "Unplug and pull the washer out",
        description:
          "Disconnect the power cord and carefully slide the washer away from the wall so you can see behind and underneath it. Lay towels around the base.",
      },
      {
        number: 2,
        title: "Identify the leak location",
        description:
          "Run a short wash cycle and watch where the water appears. Leak at the front usually means the door boot seal. Leak underneath toward the back usually means a hose connection. Leak from the drain filter area means a clogged filter.",
      },
      {
        number: 3,
        title: "Check the door boot seal",
        description:
          "Open the door and inspect the rubber gasket all the way around. Look for tears, holes, or foreign objects wedged in the folds. A small tear can be temporarily patched with silicone sealant, but a badly damaged seal needs replacing.",
      },
      {
        number: 4,
        title: "Inspect hose connections underneath",
        description:
          "Tilt the washer back safely and use a flashlight to look at the hoses connected to the pump and tub. Squeeze each connection and look for drips. Tighten any loose clamps with pliers. Replace any hose that is cracked or brittle.",
      },
      {
        number: 5,
        title: "Clean the drain filter",
        description:
          "Open the small access panel at the bottom-front of the machine. Place a shallow pan underneath, then slowly twist the filter cap counter-clockwise. Remove debris and rinse the filter under running water before reinstalling.",
      },
      {
        number: 6,
        title: "Test the repair",
        description:
          "Push the washer back, plug it in, and run a full wash cycle. Watch for leaks during the wash, rinse, and spin phases. If the leak is gone, you are all set.",
      },
    ],
    alternativeCauses: [
      "Detergent dispenser housing cracked",
      "Water inlet valve leaking internally",
      "Tub seal bearing worn out (water mixed with grease under the tub)",
    ],
    whenToCallPro:
      "If water is leaking from the center bottom of the tub (often brownish or greasy), the main tub seal and bearing are failing. That repair involves disassembling the entire drum and usually costs $250–$400 from a technician.",
    metaTitle:
      "Samsung Washer Leaking from Bottom — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung washer leaking from the bottom. Step-by-step guide covering door seals, hoses, and drain filters. Difficulty: Medium. Save $200+.",
  },
  {
    id: "lg-washer-vibrating-violently",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "vibrating-violently",
    problemTitle: "Vibrating Violently During Spin",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: ["Bubble level", "Adjustable wrench", "Towels"],
    partsNeeded: [
      {
        name: "Shipping bolts removal tool (included with washer)",
        costRange: "$0",
      },
      {
        name: "Anti-vibration pads (4-pack)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=washing+machine+anti+vibration+pads",
      },
    ],
    safetyWarnings: [
      "Stop the washer immediately if it is walking across the floor.",
      "Do not overload the drum — check your model's capacity.",
      "Keep children away while the machine is shaking.",
    ],
    quickDiagnosis:
      "Violent shaking in an LG washer is almost always caused by the machine not being level, shipping bolts still installed (on new machines), or an unbalanced load. These are all quick fixes you can handle in minutes.",
    steps: [
      {
        number: 1,
        title: "Check for shipping bolts",
        description:
          "If this is a new or recently moved washer, look at the back panel for large metal bolts with plastic spacers. There are usually 3–4 of them. Remove them with a wrench. The washer cannot spin properly with these installed.",
      },
      {
        number: 2,
        title: "Level the machine",
        description:
          "Place a bubble level on top of the washer from side to side and front to back. Adjust the feet by turning them clockwise to lower and counter-clockwise to raise. All four feet must touch the floor firmly.",
      },
      {
        number: 3,
        title: "Lock the adjustable feet",
        description:
          "Once level, tighten the lock nuts on each foot by turning them up against the base of the washer with a wrench. This prevents the feet from slowly vibrating loose over time.",
      },
      {
        number: 4,
        title: "Redistribute the load",
        description:
          "Open the door and rearrange the clothes so they are spread evenly around the drum. A single heavy item like a comforter or towel bunch on one side causes massive imbalance. Mix heavy and light items together.",
      },
      {
        number: 5,
        title: "Add anti-vibration pads",
        description:
          "If the washer is on a hard floor or upstairs, place rubber anti-vibration pads under each foot. These absorb shock and reduce noise significantly. Lift one corner at a time and slide them underneath.",
      },
    ],
    alternativeCauses: [
      "Worn shock absorbers inside the machine",
      "Broken suspension spring",
      "Damaged counterweight or mounting bolts",
    ],
    whenToCallPro:
      "If the machine is level, bolts are removed, and loads are balanced but it still shakes violently, the internal shock absorbers or suspension springs may be worn out. A technician can replace them for $150–$250.",
    metaTitle:
      "LG Washer Vibrating Violently — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix an LG washer vibrating or shaking violently during spin. Covers leveling, shipping bolts, and load balance. Difficulty: Easy. Save $150+.",
  },
  {
    id: "whirlpool-washer-wont-start",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "wont-start",
    problemTitle: "Won't Start",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Door latch assembly (if faulty)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+washer+door+latch+assembly",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before testing any electrical components.",
      "Never bypass the door lock mechanism.",
    ],
    quickDiagnosis:
      "A Whirlpool washer that will not start usually has a simple cause: the door is not latched, the outlet has no power, or the control board needs a reset. Work through these quick checks before assuming a part is broken.",
    steps: [
      {
        number: 1,
        title: "Check the power supply",
        description:
          "Make sure the outlet works by plugging in a lamp or phone charger. Check your circuit breaker panel for a tripped breaker. Reset it by flipping it fully off, then back on.",
      },
      {
        number: 2,
        title: "Confirm the door is latched",
        description:
          "Open and firmly close the door. You should hear a click. If the door does not click, inspect the latch for debris or a broken hook. The washer will not start unless the door lock engages.",
      },
      {
        number: 3,
        title: "Reset the control board",
        description:
          "Unplug the washer for 60 seconds, then plug it back in. This clears any temporary glitch in the control board. Try starting a cycle again.",
      },
      {
        number: 4,
        title: "Test the door lock switch",
        description:
          "If the door latches but the washer still will not start, unplug the machine, remove the top panel, and locate the door lock assembly. Use a multimeter set to continuity to test the switch. No continuity means the lock is faulty and needs replacing.",
      },
      {
        number: 5,
        title: "Check the start button and timer",
        description:
          "On older Whirlpool models with a dial timer, pull the knob out and try starting again. A worn timer knob may not engage the start switch. Wiggle it gently while pulling to see if the machine starts.",
      },
    ],
    alternativeCauses: [
      "Faulty lid switch (top-load models)",
      "Defective main control board",
      "Broken thermal fuse",
    ],
    whenToCallPro:
      "If the outlet works, the door latches, and a reset did not help, the main control board may be dead. Board replacement runs $150–$300 including labor and is best handled by a technician.",
    metaTitle:
      "Whirlpool Washer Won't Start — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Whirlpool washer that won't start. Covers power, door latch, and control board reset. Difficulty: Easy. Save $150+.",
  },
  {
    id: "ge-washer-making-grinding-noise",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "making-grinding-noise",
    problemTitle: "Making Grinding Noise",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Socket wrench set",
      "Phillips screwdriver",
      "Flashlight",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Drive coupler (if worn)",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=ge+washer+drive+coupler&tag=repairitfree-20",
      },
      {
        name: "Tub bearing kit (if needed)",
        costRange: "$25–$40",
        amazonUrl: "https://www.amazon.com/s?k=ge+washer+tub+bearing+kit&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before removing any panels.",
      "The drum is heavy — get help if you need to tilt the machine.",
    ],
    quickDiagnosis:
      "Grinding noises in a GE washer often come from a worn drive coupler, foreign objects caught between the drum and tub, or failing tub bearings. Spin the drum by hand with the machine off — if you hear grinding, something is mechanically worn.",
    steps: [
      {
        number: 1,
        title: "Unplug and empty the washer",
        description:
          "Pull the power cord and remove all clothes. Reach into the drum and spin it by hand. Listen for grinding or scraping. If you hear it only during spin cycle but not by hand, the issue is likely the drive coupler or motor.",
      },
      {
        number: 2,
        title: "Check for foreign objects",
        description:
          "Look between the door seal and drum for coins, underwire, or small items. On top-load models, use a flashlight to look between the inner basket and outer tub. Remove anything you find.",
      },
      {
        number: 3,
        title: "Inspect the drive coupler (top-load models)",
        description:
          "Remove the cabinet by unscrewing the clips at the back. Locate the drive coupler between the motor and transmission — it is a small plastic and rubber piece. If the rubber is shredded or the plastic forks are broken, replace it.",
      },
      {
        number: 4,
        title: "Check the pump and belt",
        description:
          "With the cabinet off, inspect the drain pump for debris caught in the impeller. On belt-drive models, check the belt for cracks or glazing. A slipping belt makes a squealing or grinding sound during agitation.",
      },
      {
        number: 5,
        title: "Test the tub bearings",
        description:
          "Grab the inner drum and try to rock it side to side. If there is significant play or you hear a rumbling sound, the tub bearings are worn. You can confirm by removing the agitator and looking for rust-colored water or grease around the center shaft.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Replace the worn part, reinstall the cabinet panels, and plug the washer back in. Run a small load and listen. The grinding noise should be gone.",
      },
    ],
    alternativeCauses: [
      "Worn clutch assembly (top-load models)",
      "Failing motor bearings",
      "Loose agitator dogs",
    ],
    whenToCallPro:
      "Tub bearing replacement requires splitting the outer tub and is a major repair. A technician typically charges $250–$450 for this job. If your washer is over 8 years old, replacement may be more cost-effective.",
    metaTitle:
      "GE Washer Making Grinding Noise — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a GE washer making grinding noise. Step-by-step guide covering drive couplers, foreign objects, and bearings. Difficulty: Medium. Save $200+.",
  },
  {
    id: "kenmore-washer-smells-bad",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Kenmore",
    brandSlug: "kenmore",
    problemSlug: "smells-bad",
    problemTitle: "Smells Bad (Musty or Mildew)",
    difficulty: "Easy",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Spray bottle",
      "Old toothbrush or soft brush",
      "Towels",
      "Measuring cup",
    ],
    partsNeeded: [
      {
        name: "Washing machine cleaner tablets (optional)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=washing+machine+cleaner+tablets",
      },
    ],
    safetyWarnings: [
      "Do not mix bleach with vinegar — the combination creates toxic fumes.",
      "Use either bleach or vinegar, never both in the same cleaning cycle.",
      "Ventilate the laundry area while cleaning.",
    ],
    quickDiagnosis:
      "A smelly Kenmore washer is caused by mold and mildew growing in trapped moisture — usually in the door seal, detergent dispenser, or drain filter. A deep clean cycle plus changing a few habits will eliminate the odor completely.",
    steps: [
      {
        number: 1,
        title: "Clean the door seal",
        description:
          "Pull back the rubber door gasket and wipe inside all the folds with a cloth soaked in a 50/50 mix of white vinegar and water. You will likely find dark mildew buildup and sometimes small items trapped in there. Scrub stubborn spots with an old toothbrush.",
      },
      {
        number: 2,
        title: "Clean the detergent dispenser",
        description:
          "Pull the dispenser drawer completely out (press the release tab if your model has one). Soak it in hot soapy water for 10 minutes, then scrub all compartments. Wipe the cavity it sits in with a vinegar-soaked cloth.",
      },
      {
        number: 3,
        title: "Run a hot cleaning cycle",
        description:
          "With the washer empty, add 2 cups of white vinegar directly into the drum. Select the hottest and longest cycle available (or the dedicated tub clean cycle if your model has one). Let it run completely.",
      },
      {
        number: 4,
        title: "Clean the drain filter",
        description:
          "Open the small panel at the bottom-front of the washer. Place towels under it, unscrew the filter cap, and remove any trapped debris. Rinse the filter under running water. Reinstall it and close the panel.",
      },
      {
        number: 5,
        title: "Prevent future odor",
        description:
          "After every wash, leave the door slightly open to let the drum dry out. Switch to HE detergent if you are not already using it — regular detergent creates excess suds that leave residue. Run a monthly cleaning cycle with vinegar or a washing machine cleaner tablet.",
      },
    ],
    alternativeCauses: [
      "Clogged standpipe causing sewer gas to back up",
      "Drain hose pushed too far into the standpipe",
      "Old rubber door seal that has permanently absorbed odor",
    ],
    whenToCallPro:
      "If the smell persists after a deep clean, the door boot seal may be permanently moldy inside the rubber and need replacing ($80–$150 installed). If you smell sewage rather than mildew, a plumber should check your standpipe connection.",
    metaTitle:
      "Kenmore Washer Smells Bad — Free Fix Guide | FixItFree",
    metaDescription:
      "Eliminate bad smells from your Kenmore washer. Step-by-step cleaning guide for mold, mildew, and odor. Difficulty: Easy. Save $100+.",
  },
  {
    id: "samsung-washer-door-locked-wont-open",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "door-locked-wont-open",
    problemTitle: "Door Locked and Won't Open",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Flathead screwdriver",
      "Towels",
      "Thin string or fishing line (emergency release)",
    ],
    partsNeeded: [
      {
        name: "Door lock assembly (if faulty)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+door+lock+assembly",
      },
    ],
    safetyWarnings: [
      "Never force the door open — you can crack the handle or break the latch.",
      "If the tub is full of water, drain it first through the filter.",
      "Unplug the washer before attempting the manual release.",
    ],
    quickDiagnosis:
      "Samsung front-load washers lock the door during cycles and for a few minutes after. If the door stays locked, it is usually a stuck lock solenoid, water still in the tub, or a power glitch keeping the lock engaged. Most cases resolve without replacing any parts.",
    steps: [
      {
        number: 1,
        title: "Wait a few minutes",
        description:
          "Samsung washers keep the door locked for 1–3 minutes after the cycle ends. If the cycle just finished, wait and try again. If the display shows a time remaining or error code, the cycle may not have completed.",
      },
      {
        number: 2,
        title: "Power cycle the washer",
        description:
          "Unplug the washer from the wall for 5 minutes, then plug it back in. This resets the door lock solenoid. After power returns, wait 30 seconds and try opening the door. This fixes the majority of stuck-door cases.",
      },
      {
        number: 3,
        title: "Drain remaining water",
        description:
          "If there is still water in the tub, the washer will not unlock. Open the drain filter access panel at the bottom front. Place a pan under it and slowly unscrew the filter to let water drain. Once the tub is empty, try the door again.",
      },
      {
        number: 4,
        title: "Use the emergency release",
        description:
          "Samsung front-load washers have an emergency door release inside the drain filter access panel. Look for a small orange or red pull tab near the filter. Pull it toward you and the door will pop open.",
      },
      {
        number: 5,
        title: "Test the lock going forward",
        description:
          "Close the door and run a quick cycle. After the cycle finishes and the lock disengages, open the door normally. If the door locks and will not release again, the door lock assembly is failing and needs replacing.",
      },
    ],
    alternativeCauses: [
      "Child lock feature accidentally activated",
      "Faulty door lock actuator",
      "Broken door handle mechanism",
    ],
    whenToCallPro:
      "If the emergency release does not work and the door is physically jammed, do not force it. A technician can disassemble the front panel to release and replace the lock for $100–$180.",
    metaTitle:
      "Samsung Washer Door Locked Won't Open — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung washer with a locked door that won't open. Emergency release, power reset, and drain steps. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // DRYERS
  // ============================================================
  {
    id: "samsung-dryer-not-spinning",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-spinning",
    problemTitle: "Not Spinning",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Putty knife",
      "Multimeter",
      "Work gloves",
    ],
    partsNeeded: [
      {
        name: "Dryer belt",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=samsung+dryer+belt&tag=repairitfree-20",
      },
      {
        name: "Drum roller kit (if worn)",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=samsung+dryer+drum+roller+kit&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before any repair work.",
      "If gas dryer, turn off the gas supply valve first.",
      "The drum is heavy — support it when removing the front panel.",
    ],
    quickDiagnosis:
      "A Samsung dryer that heats but does not spin usually has a broken drive belt. If the drum turns freely by hand and you do not feel any resistance, the belt has snapped. This is a common wear item and a straightforward replacement.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer",
        description:
          "Pull the power cord from the wall outlet. For gas dryers, also turn off the gas supply valve behind the machine.",
      },
      {
        number: 2,
        title: "Open the drum by hand",
        description:
          "Open the dryer door and try spinning the drum by hand. If it spins very freely with no resistance, the belt is broken. If it does not spin at all, something may be jamming the drum.",
      },
      {
        number: 3,
        title: "Remove the top and front panels",
        description:
          "Use a putty knife to release the spring clips under the top panel at the front edge. Lift the top. Disconnect the door switch wires, remove the screws holding the front panel, and lift it off. You can now see the drum and belt path.",
      },
      {
        number: 4,
        title: "Replace the belt",
        description:
          "Lift the drum slightly and slide the new belt around it with the grooved side facing the drum. Route the belt under the idler pulley and around the motor shaft in a zigzag pattern. Refer to the diagram on the belt packaging or look for the routing diagram inside the dryer cabinet.",
      },
      {
        number: 5,
        title: "Inspect the drum rollers",
        description:
          "While the drum is accessible, spin each drum roller by hand. They should spin freely and quietly. If they wobble, squeak, or resist, replace the roller kit. Worn rollers put extra strain on the new belt.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Set the drum back in place, reattach the front panel and top panel, reconnect the door switch wires, and plug the dryer back in. Run a timed dry cycle for 10 minutes and confirm the drum is spinning smoothly.",
      },
    ],
    alternativeCauses: [
      "Faulty idler pulley",
      "Seized drum roller bearings",
      "Defective drive motor",
    ],
    whenToCallPro:
      "If the motor itself is humming but will not turn, the motor may be burned out. Motor replacement costs $150–$250 with labor and requires handling the electrical connections properly.",
    metaTitle:
      "Samsung Dryer Not Spinning — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung dryer that won't spin. Step-by-step belt replacement and drum roller guide. Difficulty: Medium. Save $200+.",
  },
  {
    id: "lg-dryer-making-loud-noise",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "making-loud-noise",
    problemTitle: "Making Loud Noise",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$35",
    toolsNeeded: [
      "Phillips screwdriver",
      "Socket wrench set",
      "Flashlight",
      "Work gloves",
    ],
    partsNeeded: [
      {
        name: "Drum roller kit",
        costRange: "$15–$25",
        amazonUrl: "https://www.amazon.com/s?k=lg+dryer+drum+roller+kit&tag=repairitfree-20",
      },
      {
        name: "Idler pulley",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=lg+dryer+idler+pulley&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer and turn off gas (if applicable) before starting.",
      "Wear gloves — sheet metal edges inside the cabinet are sharp.",
      "Support the drum when removing panels to avoid dropping it.",
    ],
    quickDiagnosis:
      "Loud thumping, squealing, or rumbling in an LG dryer usually points to worn drum rollers, a bad idler pulley, or worn drum glides. The type of noise tells you which part: thumping means rollers, squealing means pulley or belt, scraping means drum glides.",
    steps: [
      {
        number: 1,
        title: "Identify the noise type",
        description:
          "Run the dryer empty for 2 minutes and listen. Rhythmic thumping that speeds up = drum rollers. High-pitched squealing = idler pulley or belt. Scraping or grinding = drum glides or a foreign object in the drum seam.",
      },
      {
        number: 2,
        title: "Unplug and open the cabinet",
        description:
          "Disconnect power. Remove the lint screen and the screws beneath it. Remove the screws at the top back of the dryer. Slide the top panel forward and lift it off, then remove the front panel screws and carefully lower the front panel.",
      },
      {
        number: 3,
        title: "Inspect drum rollers",
        description:
          "With the drum exposed, spin each roller by hand. They should turn freely and smoothly. If any roller is flat-spotted, wobbles, or resists turning, replace all rollers as a set — they wear at similar rates.",
      },
      {
        number: 4,
        title: "Check the idler pulley",
        description:
          "Locate the spring-loaded idler pulley that tensions the belt near the motor. Spin it by hand. If it squeals, wobbles, or does not spin freely, replace it. This is a common source of squealing noise.",
      },
      {
        number: 5,
        title: "Inspect drum glides and felt seal",
        description:
          "Look at the front edges where the drum rides on plastic glides or a felt seal. If the glides are worn flat or the felt is torn, the drum scrapes against the housing. Replace worn glides or felt seals.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Route the belt back around the drum, idler pulley, and motor shaft. Reattach the front and top panels. Plug in and run a timed cycle. The noise should be gone.",
      },
    ],
    alternativeCauses: [
      "Foreign object (coin, button) trapped between drum and housing",
      "Loose blower wheel",
      "Worn drum bearing at rear",
    ],
    whenToCallPro:
      "If the rear drum bearing is worn (loud rumbling from the back), replacing it requires significant disassembly. A technician charges $200–$350 for this repair.",
    metaTitle:
      "LG Dryer Making Loud Noise — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix an LG dryer making loud thumping, squealing, or scraping noise. Covers drum rollers, pulleys, and glides. Difficulty: Medium. Save $200+.",
  },
  {
    id: "whirlpool-dryer-wont-start",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "wont-start",
    problemTitle: "Won't Start",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Door switch (if faulty)",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+dryer+door+switch&tag=repairitfree-20",
      },
      {
        name: "Thermal fuse",
        costRange: "$5–$12",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+dryer+thermal+fuse&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before testing any components.",
      "A blown thermal fuse often indicates a clogged vent — always check the vent too.",
    ],
    quickDiagnosis:
      "A Whirlpool dryer that does nothing when you press start is usually caused by a blown thermal fuse, a broken door switch, or no power to the outlet. The thermal fuse is the most common culprit, especially if the vent has not been cleaned recently.",
    steps: [
      {
        number: 1,
        title: "Check the power supply",
        description:
          "Dryers need a 240V outlet (or gas dryers need 120V plus gas). Make sure both breakers for the dryer are on — it uses a double breaker. Reset them by switching fully off then on. Test the outlet with another appliance if possible.",
      },
      {
        number: 2,
        title: "Test the door switch",
        description:
          "Open and close the door — you should hear a click. Press the door switch manually while pressing start. If the dryer starts with the switch held in, the switch is faulty and needs replacing.",
      },
      {
        number: 3,
        title: "Test the thermal fuse",
        description:
          "Unplug the dryer and remove the back panel. Locate the thermal fuse on the blower housing or exhaust duct — it is a small white plastic piece with two wires. Test it with a multimeter for continuity. No continuity means it is blown.",
      },
      {
        number: 4,
        title: "Replace the thermal fuse and clean the vent",
        description:
          "Install the new thermal fuse by disconnecting the wires and swapping it out. Before reassembling, clean the entire vent duct from the dryer to the outside wall. A clogged vent is what caused the fuse to blow, and it will blow again if you do not clear it.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Reattach the back panel, plug the dryer in, and press start. The dryer should run normally. Verify that air is flowing from the outside vent hood when the dryer is running.",
      },
    ],
    alternativeCauses: [
      "Defective start switch",
      "Broken drive belt (some models will not start if the belt is broken)",
      "Failed main control board",
    ],
    whenToCallPro:
      "If the thermal fuse keeps blowing after cleaning the vent, the high-limit thermostat or heating element may be shorting. A technician can diagnose the root cause for $80–$150.",
    metaTitle:
      "Whirlpool Dryer Won't Start — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Whirlpool dryer that won't start. Covers thermal fuse, door switch, and power troubleshooting. Difficulty: Easy. Save $150+.",
  },
  {
    id: "ge-dryer-takes-too-long-to-dry",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "takes-too-long-to-dry",
    problemTitle: "Takes Too Long to Dry",
    difficulty: "Easy",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Vent brush kit or leaf blower",
      "Flathead screwdriver",
      "Vacuum with hose attachment",
    ],
    partsNeeded: [
      {
        name: "4-inch dryer vent duct (if crushed)",
        costRange: "$10–$15",
        amazonUrl: "https://www.amazon.com/s?k=rigid+dryer+vent+duct+4+inch&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before disconnecting the vent.",
      "A clogged dryer vent is a fire hazard — this repair is important for safety.",
      "Do not use vinyl or foil accordion-style duct — use rigid or semi-rigid metal.",
    ],
    quickDiagnosis:
      "A GE dryer that runs but takes two or three cycles to dry clothes almost always has a venting problem. Lint buildup in the vent duct restricts airflow, trapping moisture inside the drum. Cleaning the vent system fixes this in most cases.",
    steps: [
      {
        number: 1,
        title: "Check the lint screen",
        description:
          "Pull out the lint screen and clean it thoroughly. If it has a waxy film from dryer sheets, scrub it with hot water and a brush. Hold it under running water — if water pools instead of flowing through, the screen is coated and needs cleaning.",
      },
      {
        number: 2,
        title: "Disconnect and inspect the vent duct",
        description:
          "Unplug the dryer and pull it away from the wall. Disconnect the vent duct from the back of the dryer. Look inside the duct — if you see packed lint, that is your problem.",
      },
      {
        number: 3,
        title: "Clean the entire vent run",
        description:
          "Use a dryer vent brush kit to clean lint from the duct all the way to the outside vent hood. Alternatively, use a leaf blower to blast lint out from the dryer end. Go outside and make sure lint comes out the exterior vent hood.",
      },
      {
        number: 4,
        title: "Clean inside the dryer",
        description:
          "Use a vacuum with a hose attachment to clean lint from inside the dryer where the vent connects. Also vacuum around the lint trap housing — lint accumulates down there over time.",
      },
      {
        number: 5,
        title: "Reconnect and test",
        description:
          "Reattach the vent duct with a clamp (no screws — screws catch lint). Push the dryer back and plug it in. Run a normal load and check drying time. It should dry in one cycle. Go outside and confirm strong airflow from the vent hood.",
      },
    ],
    alternativeCauses: [
      "Faulty moisture sensor inside the drum",
      "Weak heating element (heats but not fully)",
      "Gas valve coils failing intermittently (gas dryers)",
    ],
    whenToCallPro:
      "If the vent is clean and the dryer still takes too long, the heating element or gas valve coils may be partially failing. A technician can measure heat output and airflow for $80–$150 to pinpoint the issue.",
    metaTitle:
      "GE Dryer Takes Too Long to Dry — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a GE dryer that takes too long to dry clothes. Vent cleaning and airflow guide. Difficulty: Easy. Save $100+.",
  },
  {
    id: "maytag-dryer-burning-smell",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Maytag",
    brandSlug: "maytag",
    problemSlug: "burning-smell",
    problemTitle: "Burning Smell",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Vent brush kit",
      "Vacuum with hose attachment",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Dryer belt (if glazed or cracked)",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=maytag+dryer+belt&tag=repairitfree-20",
      },
      {
        name: "Felt drum seal (if worn)",
        costRange: "$10–$20",
        amazonUrl: "https://www.amazon.com/s?k=maytag+dryer+felt+seal&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Stop the dryer immediately if you smell burning — this can indicate a fire hazard.",
      "Unplug the dryer and turn off gas before inspecting.",
      "Do not restart the dryer until you have identified and fixed the cause.",
    ],
    quickDiagnosis:
      "A burning smell from a Maytag dryer is a serious warning sign. The most common causes are lint buildup near the heating element, a slipping or fraying belt, or clothes trapped between the drum and housing. Address this promptly — lint fires are a real risk.",
    steps: [
      {
        number: 1,
        title: "Stop the dryer and unplug it",
        description:
          "Turn off the dryer immediately and unplug it. If it is a gas dryer, close the gas shutoff valve. Do not restart until the cause is identified.",
      },
      {
        number: 2,
        title: "Clean lint from around the heating element",
        description:
          "Remove the back panel. Locate the heating element — it is a coiled wire in a metal housing. Use a vacuum to carefully remove all lint from around and inside the element housing. Lint touching the element literally catches fire.",
      },
      {
        number: 3,
        title: "Inspect the drive belt",
        description:
          "Open the front of the dryer to access the belt. A slipping belt produces a hot rubber smell. Look for glazing (shiny smooth surface), fraying, or cracks. If the belt is worn, replace it.",
      },
      {
        number: 4,
        title: "Check for trapped items",
        description:
          "Look in the gap between the drum and the front and rear housings. Small items like socks or dryer sheets sometimes get pulled through and rub against the drum or heat up. Remove anything you find.",
      },
      {
        number: 5,
        title: "Clean the full vent system",
        description:
          "Disconnect the vent from the back and clean the entire run to the exterior vent hood. A blocked vent causes the dryer to overheat, which can scorch lint and produce a burning smell even without visible flames.",
      },
      {
        number: 6,
        title: "Reassemble and test carefully",
        description:
          "Reattach all panels and the vent duct. Plug in and run the dryer empty on low heat for 10 minutes. Stay nearby and check for any smell. If the burning smell is gone, run a small load to confirm.",
      },
    ],
    alternativeCauses: [
      "Failing motor overheating",
      "Thermostat stuck allowing overheating",
      "New dryer break-in smell (first few uses only)",
    ],
    whenToCallPro:
      "If you cannot find the source of the burning smell or if you see scorch marks inside the dryer, call a technician immediately. An overheating dryer is a fire risk. Expect $100–$200 for diagnosis and repair.",
    metaTitle:
      "Maytag Dryer Burning Smell — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Maytag dryer with a burning smell. Covers lint removal, belt inspection, and vent cleaning. Difficulty: Medium. Save $150+.",
  },
  {
    id: "kenmore-dryer-no-heat",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Kenmore",
    brandSlug: "kenmore",
    problemSlug: "no-heat",
    problemTitle: "No Heat",
    difficulty: "Medium",
    timeEstimate: "30-45 minutes",
    costEstimate: "$0–$35",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "Nut driver (1/4 inch)",
    ],
    partsNeeded: [
      {
        name: "Heating element",
        costRange: "$20–$35",
        amazonUrl: "https://www.amazon.com/s?k=kenmore+dryer+heating+element&tag=repairitfree-20",
      },
      {
        name: "Thermal fuse",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=kenmore+dryer+thermal+fuse&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before testing any electrical components.",
      "If gas dryer, shut off the gas valve before working.",
      "A blown thermal fuse means the vent is likely clogged — always clean it.",
    ],
    quickDiagnosis:
      "A Kenmore dryer that tumbles but produces no heat most commonly has a blown thermal fuse or a burned-out heating element. The thermal fuse is the number one cause and costs under $10 to replace. Always clean the vent at the same time.",
    steps: [
      {
        number: 1,
        title: "Confirm the dryer tumbles but has no heat",
        description:
          "Run the dryer for 5 minutes on high heat, then feel the inside of the drum. If the air is room temperature, you have confirmed a no-heat issue. If it is warm but not hot, the element may be partially working.",
      },
      {
        number: 2,
        title: "Check the 240V power supply (electric dryers)",
        description:
          "Electric dryers need both legs of a 240V circuit. If one breaker leg trips, the drum spins but the element gets no power. Check both breakers for the dryer and reset them. Test the outlet with a multimeter if possible.",
      },
      {
        number: 3,
        title: "Test the thermal fuse",
        description:
          "Unplug the dryer and remove the back panel. Find the thermal fuse on the blower housing — it is a small white piece about an inch long with two wires. Test it with a multimeter set to continuity. If there is no continuity, it is blown and must be replaced.",
      },
      {
        number: 4,
        title: "Test the heating element",
        description:
          "Locate the heating element housing (usually at the back or bottom). Disconnect the wires and test across the two terminals with a multimeter. You should read 10–50 ohms of resistance. Infinite resistance (OL) means the element is burned out.",
      },
      {
        number: 5,
        title: "Replace the faulty part",
        description:
          "Swap in the new thermal fuse or heating element. The thermal fuse just snaps in with two wire connectors. The heating element slides out of its housing after removing a few screws. Install the new one in reverse order.",
      },
      {
        number: 6,
        title: "Clean the vent and test",
        description:
          "Before reassembling, clean the entire dryer vent from the machine to the outside. A clogged vent caused the thermal fuse to blow and will cause the new one to blow again. Reassemble, plug in, and test on high heat.",
      },
    ],
    alternativeCauses: [
      "Bad high-limit thermostat",
      "Defective cycling thermostat",
      "Failed gas valve coils (gas dryers)",
    ],
    whenToCallPro:
      "If you replaced the thermal fuse and element but still have no heat, the control board or gas valve assembly may be at fault. A technician can diagnose this for $80–$150.",
    metaTitle:
      "Kenmore Dryer No Heat — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Kenmore dryer with no heat. Covers thermal fuse, heating element, and vent cleaning. Difficulty: Medium. Save $200+.",
  },

  // ============================================================
  // DISHWASHERS
  // ============================================================
  {
    id: "samsung-dishwasher-leaking",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "leaking",
    problemTitle: "Leaking Water",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Towels",
      "Flashlight",
      "Adjustable pliers",
    ],
    partsNeeded: [
      {
        name: "Door gasket seal",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+dishwasher+door+gasket",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and disconnect power at the breaker.",
      "Turn off the water supply valve under the sink.",
      "Mop up water before working — wet floors are slippery.",
    ],
    quickDiagnosis:
      "A leaking Samsung dishwasher is usually caused by a worn door gasket, a loose hose connection underneath, or overfilling from a stuck float switch. The location of the leak tells you where to look first — front means door seal, underneath means hose or pump.",
    steps: [
      {
        number: 1,
        title: "Identify the leak location",
        description:
          "Run a short cycle and watch carefully. Water at the front of the door means the door gasket. Water pooling underneath the unit points to a hose or pump connection. Water near the front-bottom may be the door latch not sealing properly.",
      },
      {
        number: 2,
        title: "Inspect the door gasket",
        description:
          "Open the door and examine the rubber gasket that runs along the bottom and sides of the tub opening. Look for cracks, tears, food buildup, or sections that have come loose from the channel. Clean the gasket with a damp cloth.",
      },
      {
        number: 3,
        title: "Check the hose connections",
        description:
          "Turn off power and water supply. Remove the kick plate at the bottom front. Use a flashlight to inspect the drain hose and supply line connections. Tighten any loose clamps. Look for drips from the water inlet valve.",
      },
      {
        number: 4,
        title: "Test the float switch",
        description:
          "Open the dishwasher and locate the float assembly on the tub floor — it is a small plastic dome. Lift it up and down. It should move freely. If it is stuck in the down position, the tub can overfill and leak. Clean any debris around the float.",
      },
      {
        number: 5,
        title: "Check the spray arms",
        description:
          "A cracked spray arm can direct water at the door seal instead of the dishes, causing leaks. Remove the spray arms by unscrewing them and inspect for cracks. Also check that the dishwasher is level — an unlevel machine can leak from the door.",
      },
      {
        number: 6,
        title: "Test the repair",
        description:
          "Restore power and water. Run a full cycle and monitor for leaks during the wash and drain phases. Place a paper towel under the front of the machine to catch any drips you might not notice.",
      },
    ],
    alternativeCauses: [
      "Cracked tub (rare but possible with older units)",
      "Faulty water inlet valve not shutting off",
      "Using regular dish soap instead of dishwasher detergent (creates excessive suds)",
    ],
    whenToCallPro:
      "If the tub itself is cracked or the pump seal is leaking, the repair cost may approach the price of a new dishwasher. A technician can assess this for $80–$120.",
    metaTitle:
      "Samsung Dishwasher Leaking — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung dishwasher that is leaking water. Covers door gasket, hose connections, and float switch. Difficulty: Medium. Save $150+.",
  },
  {
    id: "bosch-dishwasher-wont-start",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Bosch",
    brandSlug: "bosch",
    problemSlug: "wont-start",
    problemTitle: "Won't Start",
    difficulty: "Easy",
    timeEstimate: "10-25 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Door latch (if faulty)",
        costRange: "$12–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=bosch+dishwasher+door+latch",
      },
    ],
    safetyWarnings: [
      "Turn off the breaker for the dishwasher before testing electrical parts.",
      "Never bypass the door latch safety switch.",
    ],
    quickDiagnosis:
      "A Bosch dishwasher that will not start when you press the button is usually caused by the door not latching fully, the control panel needing a reset, or the child lock being activated. These are quick fixes that do not require any parts.",
    steps: [
      {
        number: 1,
        title: "Check the door latch",
        description:
          "Close the dishwasher door firmly until you hear it click. If it does not click or feels loose, the latch may be out of alignment. Inspect the latch hook and the catch on the tub for any food debris or damage that prevents full engagement.",
      },
      {
        number: 2,
        title: "Check for child lock",
        description:
          "Bosch dishwashers have a child lock feature that disables the start button. Press and hold the child lock button (or the button combination shown in your manual — usually the rightmost two buttons) for 3 seconds to toggle it off. A key icon on the display means it is active.",
      },
      {
        number: 3,
        title: "Reset the control board",
        description:
          "Turn off the dishwasher breaker for 60 seconds, then turn it back on. Open and close the door, select a cycle, and press start. A power glitch can freeze the control board and a reset clears it.",
      },
      {
        number: 4,
        title: "Verify the water supply",
        description:
          "Some Bosch models will not start if they detect no water supply. Check that the water valve under the sink is fully open. Turn it off and on again to clear any air locks.",
      },
      {
        number: 5,
        title: "Test the door switch",
        description:
          "If the above steps do not work, the door switch may be faulty. Turn off the breaker, remove the inner door panel, and locate the door switch. Test it with a multimeter for continuity when pressed. No continuity means it needs replacing.",
      },
    ],
    alternativeCauses: [
      "Blown thermal fuse on the control board",
      "Faulty control panel touchpad",
      "Tripped GFCI outlet (if hardwired through GFCI)",
    ],
    whenToCallPro:
      "If the control board is dead (no lights, no response at all after a breaker reset), the board itself may have failed. Bosch control board replacement runs $150–$300 with labor.",
    metaTitle:
      "Bosch Dishwasher Won't Start — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Bosch dishwasher that won't start. Covers door latch, child lock, and control board reset. Difficulty: Easy. Save $150+.",
  },
  {
    id: "whirlpool-dishwasher-not-filling-with-water",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "not-filling-with-water",
    problemTitle: "Not Filling with Water",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Multimeter",
      "Adjustable pliers",
      "Phillips screwdriver",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Water inlet valve",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+dishwasher+water+inlet+valve",
      },
    ],
    safetyWarnings: [
      "Turn off the water supply and disconnect power before working.",
      "Have towels ready — water may drain from the supply line when disconnected.",
    ],
    quickDiagnosis:
      "A Whirlpool dishwasher that starts but does not fill with water usually has a closed water supply valve, a clogged inlet screen, or a failed water inlet valve. Check the simplest things first before replacing any parts.",
    steps: [
      {
        number: 1,
        title: "Check the water supply valve",
        description:
          "Look under the sink for the dishwasher water supply valve. Make sure it is fully open (turned counter-clockwise all the way). Sometimes a valve gets bumped or closed accidentally. Turn it off and on a few times to clear any sediment.",
      },
      {
        number: 2,
        title: "Inspect the inlet screen",
        description:
          "Turn off the water and disconnect power. Remove the kick plate and locate where the water supply line connects to the dishwasher inlet valve. Disconnect the supply line and check the small mesh screen inside the valve inlet for debris. Clean it with an old toothbrush.",
      },
      {
        number: 3,
        title: "Test the water inlet valve",
        description:
          "With the supply line disconnected, turn the water back on briefly into a bucket to confirm water pressure is adequate. Then use a multimeter to test the inlet valve solenoid for continuity. No continuity means the valve is bad.",
      },
      {
        number: 4,
        title: "Check the float switch",
        description:
          "Open the dishwasher and find the float — a small dome on the tub floor. Lift it up and down. If it is stuck in the up position, the dishwasher thinks it is full and will not fill. Clean around the float to free it.",
      },
      {
        number: 5,
        title: "Replace the inlet valve if needed",
        description:
          "If the valve fails the electrical test, unscrew it from the bracket, disconnect the wires and hose, and install the new valve. Reconnect the supply line, restore water and power, and run a test cycle.",
      },
    ],
    alternativeCauses: [
      "Low household water pressure (below 20 psi)",
      "Kinked supply line under the sink",
      "Faulty control board not sending fill signal",
    ],
    whenToCallPro:
      "If you have confirmed good water pressure and the inlet valve tests fine electrically, the control board may not be signaling the valve to open. Control board diagnosis and replacement runs $150–$300 with a technician.",
    metaTitle:
      "Whirlpool Dishwasher Not Filling with Water — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Whirlpool dishwasher not filling with water. Covers supply valve, inlet screen, and float switch. Difficulty: Medium. Save $150+.",
  },
  {
    id: "lg-dishwasher-not-drying-dishes",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "not-drying-dishes",
    problemTitle: "Not Drying Dishes",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Towel",
    ],
    partsNeeded: [
      {
        name: "Rinse aid (Finish or Jet-Dry)",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=dishwasher+rinse+aid&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Let the dishwasher cool before opening it immediately after a cycle.",
      "Do not block the vent opening on the door interior.",
    ],
    quickDiagnosis:
      "LG dishwashers primarily use condensation drying, not a heated element like older machines. This means drying performance depends heavily on rinse aid, proper loading, and using the right cycle. A few adjustments usually fix the issue without replacing anything.",
    steps: [
      {
        number: 1,
        title: "Fill the rinse aid dispenser",
        description:
          "Open the rinse aid compartment on the inside of the door (next to the detergent dispenser). Fill it to the full line. Rinse aid is essential for condensation drying — it helps water sheet off dishes instead of forming droplets. Set the dispenser to the highest level.",
      },
      {
        number: 2,
        title: "Use the Extra Dry or Heated Dry option",
        description:
          "Select the Extra Dry or Heated Dry option on your cycle (if your model has it). This extends the drying phase and uses the built-in heater to boost drying performance. Avoid the Quick Wash cycle if drying is important.",
      },
      {
        number: 3,
        title: "Load dishes properly",
        description:
          "Angle bowls and cups so water does not pool on their tops. Place plastics on the top rack only — plastic does not retain heat well enough for condensation drying. Avoid nesting items together where water gets trapped between them.",
      },
      {
        number: 4,
        title: "Crack the door after the cycle",
        description:
          "When the cycle finishes, crack the door open an inch or two and wait 15 minutes. This lets steam escape and dramatically improves drying results. Some newer LG models do this automatically.",
      },
      {
        number: 5,
        title: "Check the vent",
        description:
          "Some LG models have a vent on the inside of the door that releases steam during drying. Make sure it is not blocked by a tall item on the top rack. If the vent fan is not running (you should hear it during dry), the fan motor may need replacement.",
      },
    ],
    alternativeCauses: [
      "Faulty vent fan motor",
      "Defective heating element",
      "Thermostat not activating the heated dry phase",
    ],
    whenToCallPro:
      "If you have tried all the above and dishes are still soaking wet, the vent fan motor or heating element may be faulty. A technician can test and replace these for $100–$200.",
    metaTitle:
      "LG Dishwasher Not Drying Dishes — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix an LG dishwasher not drying dishes. Covers rinse aid, loading tips, and dry cycle settings. Difficulty: Easy. Save $100+.",
  },
  {
    id: "ge-dishwasher-leaving-white-residue",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "leaving-white-residue",
    problemTitle: "Leaving White Residue on Dishes",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Measuring cup",
      "White vinegar",
    ],
    partsNeeded: [
      {
        name: "Dishwasher rinse aid",
        costRange: "$5–$8",
        amazonUrl: "https://www.amazon.com/s?k=dishwasher+rinse+aid&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Do not mix vinegar with bleach-based detergents.",
      "Run the kitchen faucet hot before starting the dishwasher to ensure hot water reaches it first.",
    ],
    quickDiagnosis:
      "White film or spots on dishes from a GE dishwasher are almost always caused by hard water mineral deposits, low rinse aid, or too much (or too little) detergent. This is a water chemistry issue, not a machine failure, and is easy to fix.",
    steps: [
      {
        number: 1,
        title: "Fill the rinse aid dispenser",
        description:
          "Open the rinse aid compartment and fill it completely. Set the dispenser level to the maximum setting. Rinse aid prevents mineral deposits from drying onto dishes. This single step fixes the problem for most people.",
      },
      {
        number: 2,
        title: "Run a vinegar cleaning cycle",
        description:
          "Place a cup of white vinegar in a dishwasher-safe bowl on the top rack. Run a hot cycle with no dishes and no detergent. The vinegar dissolves mineral buildup inside the tub, spray arms, and lines.",
      },
      {
        number: 3,
        title: "Adjust detergent amount",
        description:
          "If you have soft water, use less detergent — excess detergent causes white film. If you have hard water, use a detergent designed for hard water or add a booster like Lemi Shine. Check the detergent packaging for hard water guidelines.",
      },
      {
        number: 4,
        title: "Clean the spray arms",
        description:
          "Remove the upper and lower spray arms. Rinse them under water and use a toothpick to clear any clogged spray holes. Mineral deposits can block the holes and reduce cleaning and rinsing effectiveness.",
      },
      {
        number: 5,
        title: "Check water temperature",
        description:
          "Run the kitchen faucet closest to the dishwasher until the water is hot before starting a cycle. The water entering the dishwasher should be at least 120 degrees F. Hotter water dissolves detergent better and reduces residue.",
      },
    ],
    alternativeCauses: [
      "Failing water softener in homes with a whole-house system",
      "Etching from too-hot water or too much detergent (permanent glass damage, not residue)",
      "Old or clumped detergent that is not dissolving properly",
    ],
    whenToCallPro:
      "If residue persists after all these steps, your home may have very hard water and benefit from a water softener. A plumber can test your water hardness and install a softener for $800–$2,000.",
    metaTitle:
      "GE Dishwasher Leaving White Residue — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a GE dishwasher leaving white residue on dishes. Covers rinse aid, hard water, and detergent tips. Difficulty: Easy. Save $100+.",
  },
  {
    id: "kitchenaid-dishwasher-making-noise",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "KitchenAid",
    brandSlug: "kitchenaid",
    problemSlug: "making-noise",
    problemTitle: "Making Unusual Noise",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Spray arm bearing ring (if worn)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=kitchenaid+dishwasher+spray+arm+bearing",
      },
      {
        name: "Chopper blade assembly (if cracked)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=kitchenaid+dishwasher+chopper+blade",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and disconnect power before inspecting internals.",
      "Be careful around the chopper blade — it has sharp edges.",
    ],
    quickDiagnosis:
      "Grinding, humming, or rattling noises in a KitchenAid dishwasher are usually caused by something caught in the chopper blade area, a loose spray arm, or dishes vibrating against each other. A quick check inside usually reveals the cause.",
    steps: [
      {
        number: 1,
        title: "Identify when the noise happens",
        description:
          "Listen during different phases. Noise during fill = water inlet valve. Noise during wash = spray arm, pump, or foreign object. Noise during drain = drain pump issue. Rattling throughout = dishes bumping or a loose rack.",
      },
      {
        number: 2,
        title: "Check for foreign objects",
        description:
          "Remove the bottom rack and inspect the tub floor. Look for broken glass, bones, fruit pits, or other debris around the drain area and under the spray arm. Remove anything that does not belong.",
      },
      {
        number: 3,
        title: "Inspect the spray arms",
        description:
          "Spin each spray arm by hand. They should rotate freely without wobbling or clicking. If a spray arm is loose, tighten the retaining nut or replace the bearing ring. A cracked spray arm will also flap and make noise.",
      },
      {
        number: 4,
        title: "Check the chopper blade area",
        description:
          "Remove the lower spray arm and the filter assembly. Under the filter you will find the chopper blade that grinds food particles. Check for cracked blades or debris stuck around them. Clean the area and replace the blade if damaged.",
      },
      {
        number: 5,
        title: "Rearrange the dishes",
        description:
          "Ensure nothing is sticking out of the racks and hitting the spray arms. Make sure tall items on the bottom rack are not blocking the spray arm rotation. Load glasses securely so they do not rattle. Run a test cycle.",
      },
    ],
    alternativeCauses: [
      "Worn wash pump motor bearings",
      "Failing drain pump",
      "Water hammer from household plumbing",
    ],
    whenToCallPro:
      "If the noise is a loud buzzing or grinding from the pump area and cleaning did not help, the wash pump motor may be failing. Pump replacement runs $150–$250 with labor.",
    metaTitle:
      "KitchenAid Dishwasher Making Noise — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a KitchenAid dishwasher making unusual noise. Covers spray arms, chopper blade, and loading tips. Difficulty: Easy. Save $150+.",
  },

  // ============================================================
  // REFRIGERATORS
  // ============================================================
  {
    id: "samsung-fridge-making-noise",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "making-noise",
    problemTitle: "Making Unusual Noise",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Hair dryer or steamer",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Evaporator fan motor (if faulty)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+refrigerator+evaporator+fan+motor",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before removing any panels.",
      "Move food to a cooler if the repair will take more than 30 minutes.",
    ],
    quickDiagnosis:
      "Samsung fridges are known for making buzzing, humming, or clicking noises. The most common cause is ice buildup around the evaporator fan in the freezer, making the fan blade hit ice. Defrosting the fan area usually fixes it. This is especially common in Samsung French door models.",
    steps: [
      {
        number: 1,
        title: "Identify the noise source",
        description:
          "Open the fridge and freezer doors and listen. If the noise stops when you open the freezer door (the fan shuts off), the evaporator fan is the source. If the noise comes from the bottom back, it is the compressor or condenser fan.",
      },
      {
        number: 2,
        title: "Remove the freezer back panel",
        description:
          "Unplug the fridge. Remove the freezer shelves and bins. Unscrew the rear panel inside the freezer. Behind it you will find the evaporator coils and fan. Look for ice buildup around the fan blades.",
      },
      {
        number: 3,
        title: "Defrost the ice buildup",
        description:
          "Use a hair dryer on low heat to carefully melt ice around the fan and coils. Hold the dryer 6 inches away and work slowly. Catch the water with towels. Do not use a knife or sharp tool to chip ice — you could puncture the coil.",
      },
      {
        number: 4,
        title: "Check the fan motor",
        description:
          "Once the ice is cleared, try spinning the fan by hand. It should turn freely and quietly. If it is stiff or makes grinding noises, the fan motor is worn and needs replacing. The motor usually has 2–3 screws and a wire connector.",
      },
      {
        number: 5,
        title: "Reassemble and monitor",
        description:
          "Replace the back panel, put the shelves back, and plug the fridge in. The noise should be gone. If ice keeps building up and the noise returns within a few weeks, the defrost system (heater, thermostat, or timer) is failing and needs attention.",
      },
    ],
    alternativeCauses: [
      "Condenser fan obstructed by dust (bottom rear of fridge)",
      "Compressor starting to fail (loud clicking or buzzing)",
      "Water line vibrating against the wall",
    ],
    whenToCallPro:
      "If the noise is coming from the compressor and it is loud buzzing or clicking followed by the fridge not cooling, the compressor may be failing. Compressor replacement costs $300–$600 and is typically only worth it on newer units.",
    metaTitle:
      "Samsung Fridge Making Noise — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a noisy Samsung refrigerator. Covers evaporator fan ice buildup, defrosting, and fan motor check. Difficulty: Easy. Save $150+.",
  },
  {
    id: "lg-fridge-leaking-water-on-floor",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "leaking-water-on-floor",
    problemTitle: "Leaking Water on Floor",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Turkey baster or small funnel",
      "Pipe cleaner or thin wire",
      "Towels",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Drain clip (if missing)",
        costRange: "$3–$5",
        amazonUrl:
          "https://www.amazon.com/s?k=lg+refrigerator+drain+clip",
      },
    ],
    safetyWarnings: [
      "Clean up standing water immediately to prevent floor damage.",
      "Unplug the fridge if you need to access components behind it.",
    ],
    quickDiagnosis:
      "An LG fridge leaking water on the floor is most commonly caused by a clogged defrost drain. When the drain clogs with ice or debris, defrost water overflows from the freezer and pools under or in front of the fridge. Clearing the drain takes about 15 minutes.",
    steps: [
      {
        number: 1,
        title: "Locate the source of the leak",
        description:
          "Check where the water is coming from. Water under the front usually means a clogged defrost drain. Water at the back means a drip pan overflow or water line leak. Water inside the fridge on shelves usually means a clogged drain inside the fresh food section.",
      },
      {
        number: 2,
        title: "Clear the defrost drain",
        description:
          "Remove the freezer back panel (unscrew it). Find the drain hole at the bottom of the evaporator compartment. It is often clogged with ice. Pour warm water into the drain using a turkey baster to melt the ice clog. Use a pipe cleaner to clear any remaining debris.",
      },
      {
        number: 3,
        title: "Check the drain tube below",
        description:
          "Pull the fridge out and locate the drain tube at the back bottom. It should lead to a drip pan. Make sure the tube is not kinked or disconnected. Flush water through it from above to confirm it flows freely into the pan.",
      },
      {
        number: 4,
        title: "Inspect the drip pan",
        description:
          "The drip pan sits underneath the fridge near the compressor. Slide it out and empty it if it is full. Normally the water evaporates from the heat of the compressor, but if the pan is cracked or overflowing, water ends up on the floor. Clean the pan while it is out.",
      },
      {
        number: 5,
        title: "Check the water supply line",
        description:
          "If you have an ice maker or water dispenser, inspect the water supply line at the back of the fridge. Look for drips at the connection points. Tighten any loose fittings. A leaking supply line is a common and often overlooked cause.",
      },
    ],
    alternativeCauses: [
      "Cracked water filter housing",
      "Ice maker overflow from stuck fill valve",
      "Condensation from a faulty door seal",
    ],
    whenToCallPro:
      "If the defrost drain keeps re-freezing within days, the defrost heater or thermostat may be failing. A technician can diagnose and fix the defrost system for $150–$250.",
    metaTitle:
      "LG Fridge Leaking Water on Floor — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix an LG refrigerator leaking water on the floor. Covers defrost drain, drip pan, and water line. Difficulty: Easy. Save $150+.",
  },
  {
    id: "whirlpool-fridge-ice-buildup-in-freezer",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "ice-buildup-in-freezer",
    problemTitle: "Ice Buildup in Freezer",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Hair dryer",
      "Multimeter",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Defrost heater",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+freezer+defrost+heater",
      },
      {
        name: "Defrost thermostat",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+freezer+defrost+thermostat",
      },
    ],
    safetyWarnings: [
      "Unplug the fridge before removing panels or testing parts.",
      "Do not use a knife or sharp object to chip ice off the evaporator coils.",
      "Move frozen food to a cooler during the repair.",
    ],
    quickDiagnosis:
      "Ice buildup in a Whirlpool freezer means the automatic defrost system has failed. The fridge runs defrost cycles every 8–12 hours to melt frost off the evaporator coils. When the defrost heater, thermostat, or timer fails, frost accumulates until airflow is blocked.",
    steps: [
      {
        number: 1,
        title: "Unplug and empty the freezer",
        description:
          "Move all frozen food to a cooler with ice packs. Remove all shelves, bins, and the ice maker bucket. This gives you access to the back panel where the evaporator coils are.",
      },
      {
        number: 2,
        title: "Remove the freezer back panel",
        description:
          "Unscrew the panel at the back wall of the freezer. You will see the evaporator coils covered in frost or a solid sheet of ice. The defrost heater is a glass or metal tube running along the bottom of the coils.",
      },
      {
        number: 3,
        title: "Defrost the coils manually",
        description:
          "Use a hair dryer on medium heat to melt all the ice. Hold it 6 inches away and work slowly across the coils. Catch the water with towels. This may take 15–20 minutes if the buildup is heavy.",
      },
      {
        number: 4,
        title: "Test the defrost heater",
        description:
          "Once the ice is melted, disconnect the defrost heater wires and test with a multimeter for continuity. If there is no continuity, the heater is burned out and needs replacing. Swap it out — it usually unclips from the coils.",
      },
      {
        number: 5,
        title: "Test the defrost thermostat",
        description:
          "The defrost thermostat is a small round sensor clipped to the evaporator tubing. Test it for continuity when cold (it should have continuity below 37 degrees F). No continuity when cold means it is bad and is preventing the heater from turning on.",
      },
      {
        number: 6,
        title: "Reassemble and monitor",
        description:
          "Install the new part, reattach the back panel, replace shelves and food, and plug the fridge back in. Monitor for ice buildup over the next week. If frost returns, the defrost timer or control board may also be faulty.",
      },
    ],
    alternativeCauses: [
      "Failed defrost timer or adaptive defrost control board",
      "Freezer door seal not sealing properly (warm air entering)",
      "Door left ajar frequently",
    ],
    whenToCallPro:
      "If you replaced the heater and thermostat but frost returns quickly, the defrost control board is likely the issue. A technician can diagnose and replace it for $150–$250.",
    metaTitle:
      "Whirlpool Fridge Ice Buildup in Freezer — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix ice buildup in a Whirlpool freezer. Covers defrost heater, thermostat, and manual defrosting. Difficulty: Medium. Save $200+.",
  },
  {
    id: "ge-fridge-water-dispenser-slow",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "water-dispenser-slow",
    problemTitle: "Water Dispenser Slow or Weak Flow",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Adjustable wrench",
      "Measuring cup",
    ],
    partsNeeded: [
      {
        name: "Replacement water filter",
        costRange: "$15–$25",
        amazonUrl: "https://www.amazon.com/s?k=ge+refrigerator+water+filter&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Turn off the water supply before changing the filter or disconnecting any lines.",
      "Have towels ready for minor spills when swapping the filter.",
    ],
    quickDiagnosis:
      "A slow water dispenser on a GE fridge is almost always caused by a clogged water filter that is overdue for replacement or a frozen water line inside the door. Replacing the filter or thawing the line fixes it in minutes.",
    steps: [
      {
        number: 1,
        title: "Check the water filter",
        description:
          "If the filter has not been changed in 6 months or more, it is likely clogged. Locate the filter (usually inside the fridge in the upper right corner or in the base grille). Remove it and dispense water without the filter. If flow is strong without it, the filter is the problem.",
      },
      {
        number: 2,
        title: "Replace the water filter",
        description:
          "Install a new filter by sliding or twisting it into place (depends on model). Run 2–3 gallons of water through the dispenser to flush air and carbon particles from the new filter. The water may look gray at first — this is normal.",
      },
      {
        number: 3,
        title: "Check for a frozen water line",
        description:
          "If replacing the filter does not help, the water line inside the freezer door may be frozen. Turn the freezer temperature up slightly (from 0 to 5 degrees F) and wait 12 hours. If flow returns, the line was frozen. Keep the freezer at 0 degrees F and check the door seal.",
      },
      {
        number: 4,
        title: "Inspect the supply line behind the fridge",
        description:
          "Pull the fridge out and check the copper or braided supply line. Make sure the shutoff valve is fully open. Look for kinks in the line that could restrict flow. Straighten any kinks gently.",
      },
      {
        number: 5,
        title: "Check household water pressure",
        description:
          "The fridge needs at least 20 psi of water pressure to dispense properly. If other faucets in your home also have weak flow, the issue is your home water pressure, not the fridge. A plumber can check and adjust your pressure regulator.",
      },
    ],
    alternativeCauses: [
      "Faulty water inlet valve not opening fully",
      "Air trapped in the water line after filter change",
      "Sediment buildup in the water inlet screen",
    ],
    whenToCallPro:
      "If the water inlet valve is not opening fully (you can hear it buzz but little water flows), it needs replacing. A technician charges $100–$180 for valve replacement.",
    metaTitle:
      "GE Fridge Water Dispenser Slow — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a slow GE refrigerator water dispenser. Covers filter replacement, frozen lines, and water pressure. Difficulty: Easy. Save $100+.",
  },
  {
    id: "frigidaire-fridge-freezing-food",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "freezing-food",
    problemTitle: "Freezing Food in Fresh Food Section",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Refrigerator thermometer",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Thermistor / temperature sensor (if faulty)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+refrigerator+thermistor",
      },
    ],
    safetyWarnings: [
      "Unplug the fridge before testing or replacing any sensors.",
      "Move perishable items to a cooler if the repair takes time.",
    ],
    quickDiagnosis:
      "A Frigidaire fridge freezing food in the fresh food section usually has the temperature set too low, a faulty thermistor, or a stuck damper that is letting too much cold air from the freezer into the fridge. Check the simplest causes first.",
    steps: [
      {
        number: 1,
        title: "Check the temperature setting",
        description:
          "The fresh food section should be set between 37 and 40 degrees F. If the control is set too cold, adjust it warmer. On models with a numbered dial (1–9), try setting it to 4 or 5. Place a thermometer inside and check after 12 hours.",
      },
      {
        number: 2,
        title: "Check for blocked air vents",
        description:
          "Cold air enters the fridge through vents (usually at the top back). If food items are pushed directly against these vents, the cold air blows straight onto that food and freezes it. Rearrange items to leave space around the vents.",
      },
      {
        number: 3,
        title: "Inspect the damper control",
        description:
          "The damper is a small door between the freezer and fridge that opens and closes to regulate cold air flow. Find it at the top of the fridge compartment (usually behind a plastic cover). If it is stuck open, too much cold air enters. Try moving it by hand — it should swing freely.",
      },
      {
        number: 4,
        title: "Test the thermistor",
        description:
          "If the temperature setting and damper seem fine, the thermistor (temperature sensor) may be giving the control board a wrong reading. Unplug the fridge, locate the thermistor (a small sensor clipped to the evaporator or wall), and test its resistance with a multimeter. It should change resistance as temperature changes.",
      },
      {
        number: 5,
        title: "Check the door seal",
        description:
          "A weak door seal lets warm air in, which makes the compressor run longer and overcool the fridge. Close the door on a dollar bill — if you can pull it out easily, the seal is weak. Clean the seal with warm soapy water to restore its grip, or replace it if it is cracked.",
      },
    ],
    alternativeCauses: [
      "Defective control board sending wrong signals",
      "Leaking refrigerant causing the compressor to run constantly",
      "Faulty damper motor",
    ],
    whenToCallPro:
      "If the damper motor is stuck or the control board is faulty, a technician can diagnose and fix it for $100–$200. Refrigerant leaks require a certified technician and cost $200–$400.",
    metaTitle:
      "Frigidaire Fridge Freezing Food — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Frigidaire fridge that freezes food. Covers temperature settings, damper control, and thermistor. Difficulty: Easy. Save $100+.",
  },
  {
    id: "samsung-fridge-not-making-ice",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-making-ice",
    problemTitle: "Not Making Ice",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Hair dryer",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Water inlet valve (if faulty)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+refrigerator+water+inlet+valve",
      },
    ],
    safetyWarnings: [
      "Unplug the fridge before working on the ice maker.",
      "Turn off the water supply before replacing the inlet valve.",
    ],
    quickDiagnosis:
      "A Samsung fridge not making ice is one of the most common Samsung complaints. The usual causes are: the ice maker is turned off, the freezer is not cold enough, the water line is frozen, or the water inlet valve has failed. Most fixes take under 30 minutes.",
    steps: [
      {
        number: 1,
        title: "Confirm the ice maker is on",
        description:
          "Check that the ice maker is not turned off. On Samsung models, press and hold the Ice Maker button on the display for 3 seconds. Some models have a physical switch inside the freezer on the ice maker itself. Make sure it is in the ON position.",
      },
      {
        number: 2,
        title: "Check the freezer temperature",
        description:
          "The freezer must be at 0 degrees F or below for the ice maker to work. If it is warmer, ice will not freeze properly. Adjust the temperature and wait 24 hours. If the freezer is not cold enough, that is a separate cooling issue.",
      },
      {
        number: 3,
        title: "Force a test cycle",
        description:
          "Samsung ice makers have a test button. Press and hold the test button on the ice maker for about 10 seconds until you hear a chime. The ice maker will run a test cycle that takes about 6 minutes. If it dumps ice, the maker works — the issue is water supply.",
      },
      {
        number: 4,
        title: "Check for a frozen water line",
        description:
          "The water line feeding the ice maker often freezes inside Samsung fridges. Unplug the fridge, remove the ice maker, and use a hair dryer to gently warm the water fill tube behind it. If you hear water dripping, the line was frozen.",
      },
      {
        number: 5,
        title: "Test the water supply",
        description:
          "Check that the water supply valve under the sink is fully open. Dispense water from the door — if water flows, the supply is reaching the fridge. If the dispenser works but ice maker does not fill, the ice maker water inlet valve at the back of the fridge may be stuck closed.",
      },
    ],
    alternativeCauses: [
      "Faulty ice maker assembly (motor or mold heater)",
      "Ice bucket not seated properly",
      "Water filter needs replacing (restricting flow to ice maker)",
    ],
    whenToCallPro:
      "If the ice maker assembly itself is dead (no response to test button, no humming), it likely needs replacing. A technician charges $150–$250 for ice maker replacement on Samsung fridges.",
    metaTitle:
      "Samsung Fridge Not Making Ice — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung refrigerator not making ice. Covers frozen lines, water supply, and ice maker reset. Difficulty: Easy. Save $150+.",
  },

  // ============================================================
  // OVENS & RANGES
  // ============================================================
  {
    id: "samsung-oven-not-heating-evenly",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-heating-evenly",
    problemTitle: "Not Heating Evenly",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Oven thermometer",
      "Multimeter",
    ],
    partsNeeded: [
      {
        name: "Oven temperature sensor",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+oven+temperature+sensor",
      },
    ],
    safetyWarnings: [
      "Turn off the oven and let it cool completely before inspecting.",
      "Disconnect power at the breaker before testing electrical components.",
      "Do not touch heating elements — they can retain heat for a long time.",
    ],
    quickDiagnosis:
      "A Samsung oven that heats unevenly — hot spots, undercooked centers, or one side hotter than the other — is usually caused by a failing temperature sensor, a burned-out bake or broil element, or improper rack placement. An oven thermometer helps pinpoint the issue.",
    steps: [
      {
        number: 1,
        title: "Test with an oven thermometer",
        description:
          "Place an oven thermometer in the center of the middle rack. Set the oven to 350 degrees F and let it preheat for 20 minutes. Check the thermometer. If the reading is off by more than 25 degrees, the temperature sensor may be inaccurate.",
      },
      {
        number: 2,
        title: "Check the bake element",
        description:
          "Turn the oven on to bake and look at the bottom element. It should glow evenly orange-red across its entire length. If there are dark spots or sections that do not glow, the element is partially burned out and needs replacing.",
      },
      {
        number: 3,
        title: "Check the broil element",
        description:
          "Turn on the broil setting and look at the top element. Same check — it should glow evenly. A partially failed broil element can cause uneven top browning. Some ovens use the broil element during bake mode for more even heating.",
      },
      {
        number: 4,
        title: "Test the temperature sensor",
        description:
          "The oven temperature sensor is a thin metal probe usually located at the top back wall of the oven interior. Disconnect power, unscrew the sensor, and test it with a multimeter. At room temperature, it should read approximately 1,080 ohms. Significantly different readings mean it is faulty.",
      },
      {
        number: 5,
        title: "Calibrate the oven temperature",
        description:
          "If the sensor tests fine but the temperature is slightly off, you can calibrate it. Check your Samsung manual for the temperature offset procedure — most models let you adjust the temperature up or down by 5-degree increments through the settings menu.",
      },
    ],
    alternativeCauses: [
      "Convection fan not working (on convection models)",
      "Oven door seal damaged, letting heat escape",
      "Control board sending incorrect temperature signals",
    ],
    whenToCallPro:
      "If the bake or broil element needs replacing and you are not comfortable working with 240V wiring, a technician can swap it for $100–$180. If the control board is at fault, expect $200–$350 for replacement.",
    metaTitle:
      "Samsung Oven Not Heating Evenly — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung oven not heating evenly. Covers temperature sensor, elements, and calibration. Difficulty: Easy. Save $150+.",
  },
  {
    id: "ge-oven-door-wont-close",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "door-wont-close",
    problemTitle: "Oven Door Won't Close Properly",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Work gloves",
    ],
    partsNeeded: [
      {
        name: "Oven door hinge (pair)",
        costRange: "$15–$25",
        amazonUrl: "https://www.amazon.com/s?k=ge+oven+door+hinge&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "Let the oven cool completely before working on the door.",
      "The door is heavy — have someone help you lift it off.",
      "Wear gloves when handling hinges — springs are under tension.",
    ],
    quickDiagnosis:
      "A GE oven door that will not close fully or sits crooked is usually caused by worn or broken door hinges, a misaligned door, or debris in the hinge slots. A door that does not seal wastes energy and causes uneven baking.",
    steps: [
      {
        number: 1,
        title: "Inspect the door alignment",
        description:
          "Open the door slightly and look at both hinges. They should be even and fully seated in their slots. If one hinge is higher than the other, the door will sit crooked. Check for any visible bending or broken parts on the hinges.",
      },
      {
        number: 2,
        title: "Remove the door",
        description:
          "Open the door to the broil-stop position (partially open). Flip up the hinge locks on both sides (small metal tabs on the hinges). Close the door to the broil-stop position and lift it straight up and off the hinges. Set it on a towel face-down.",
      },
      {
        number: 3,
        title: "Clean the hinge slots",
        description:
          "With the door off, look into the hinge slots in the oven frame. Clean out any grease, food, or debris with a damp cloth. Make sure the slots are clear so the hinges can seat fully.",
      },
      {
        number: 4,
        title: "Inspect and replace hinges if needed",
        description:
          "Examine both hinges. If a hinge spring is broken or the hinge arm is bent, replace the pair (they should always be replaced as a set). Slide the new hinges into the slots and press them down until they click.",
      },
      {
        number: 5,
        title: "Reinstall the door",
        description:
          "Line up the hinge arms with the slots on the door and lower the door onto them. Open the door fully and flip the hinge locks back down. Close the door and check that it sits flush against the oven frame all the way around.",
      },
    ],
    alternativeCauses: [
      "Warped door from overheating during self-clean cycle",
      "Worn door gasket preventing full closure",
      "Self-clean latch partially engaged preventing door movement",
    ],
    whenToCallPro:
      "If the oven door is warped (curved or bowed), the entire door assembly may need replacing. A technician can source and install it for $150–$300 depending on the model.",
    metaTitle:
      "GE Oven Door Won't Close — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a GE oven door that won't close properly. Covers hinge inspection, cleaning, and replacement. Difficulty: Easy. Save $150+.",
  },
  {
    id: "whirlpool-oven-self-clean-wont-unlock",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "self-clean-wont-unlock",
    problemTitle: "Self-Clean Lock Won't Unlock",
    difficulty: "Easy",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
    ],
    partsNeeded: [
      {
        name: "Door lock motor assembly (if faulty)",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+oven+door+lock+motor",
      },
    ],
    safetyWarnings: [
      "Never force the door open — the latch can break.",
      "Make sure the oven has fully cooled before attempting any fix.",
      "Disconnect power at the breaker before working on the lock mechanism.",
    ],
    quickDiagnosis:
      "A Whirlpool oven stuck in self-clean lock mode is a common issue. The door locks during self-clean because temperatures reach 800+ degrees F. If the lock does not release after the cycle, it is usually a stuck motor, a power glitch, or the oven has not cooled enough yet.",
    steps: [
      {
        number: 1,
        title: "Wait for the oven to cool completely",
        description:
          "The door will not unlock until the oven temperature drops below 550 degrees F. Even after the self-clean cycle ends, this can take an hour or more. Wait until the oven is cool to the touch before trying anything else.",
      },
      {
        number: 2,
        title: "Power cycle the oven",
        description:
          "Turn off the oven breaker for 5 minutes, then turn it back on. This resets the door lock control and often releases a stuck lock motor. Wait a minute after power returns and try opening the door.",
      },
      {
        number: 3,
        title: "Run a short self-clean cycle",
        description:
          "If the power cycle did not work, start a new self-clean cycle and cancel it after 1 minute. This triggers the lock mechanism to cycle, and canceling the clean cycle should trigger the unlock sequence. Wait 15 minutes for the lock to disengage.",
      },
      {
        number: 4,
        title: "Manually release the lock",
        description:
          "If electronic methods fail, disconnect power. Remove the back panel or top access panel of the range (depending on model). Locate the lock motor and manually slide the lock bar to the unlocked position using a screwdriver. Be gentle to avoid bending anything.",
      },
      {
        number: 5,
        title: "Test or replace the lock motor",
        description:
          "With the panel off, test the lock motor with a multimeter for continuity. If it has no continuity, replace the motor assembly. Reconnect power and test the self-clean cycle to confirm the new motor locks and unlocks properly.",
      },
    ],
    alternativeCauses: [
      "Faulty oven control board not sending unlock signal",
      "Broken self-clean latch arm",
      "Wiring harness damaged from heat exposure",
    ],
    whenToCallPro:
      "If you cannot access the lock mechanism or the control board is at fault, a technician can resolve the issue for $100–$200. Do not continue forcing the door.",
    metaTitle:
      "Whirlpool Oven Self-Clean Won't Unlock — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Whirlpool oven stuck in self-clean lock. Covers power reset, manual release, and lock motor. Difficulty: Easy. Save $150+.",
  },
  {
    id: "lg-oven-burner-wont-light",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "burner-wont-light",
    problemTitle: "Gas Burner Won't Light",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Toothbrush or small brush",
      "Sewing needle or straight pin",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Igniter switch (if faulty)",
        costRange: "$10–$15",
        amazonUrl: "https://www.amazon.com/s?k=lg+range+burner+igniter+switch&tag=repairitfree-20",
      },
    ],
    safetyWarnings: [
      "If you smell gas and the burner will not light, turn off the gas and ventilate the room immediately.",
      "Do not use a lighter to ignite a burner that is clicking but not lighting — fix the root cause.",
      "Never spray cleaners directly onto the igniter.",
    ],
    quickDiagnosis:
      "An LG gas burner that clicks but does not light is almost always caused by a clogged igniter port or a wet igniter. Spilled food or moisture from cleaning blocks the spark from reaching the gas. A quick cleaning fixes it in most cases.",
    steps: [
      {
        number: 1,
        title: "Check if gas is reaching the burner",
        description:
          "Turn the burner knob and listen. You should hear the clicking of the igniter and smell a faint gas odor. If there is no gas smell, the gas supply may be off. Check the gas shutoff valve behind the range and make sure it is open.",
      },
      {
        number: 2,
        title: "Remove the burner cap and grate",
        description:
          "Lift off the grate and the burner cap (the round disc on top of the burner base). The cap just sits on top and lifts straight off. Set them aside.",
      },
      {
        number: 3,
        title: "Clean the igniter electrode",
        description:
          "Locate the small white ceramic igniter next to the burner. Use a dry toothbrush to gently clean around the igniter tip. Remove any food debris or grease. Use a sewing needle to clear the tiny port holes in the burner base where gas comes out.",
      },
      {
        number: 4,
        title: "Dry everything thoroughly",
        description:
          "If the burner was recently cleaned or a spill occurred, moisture on the igniter prevents sparking. Wipe the igniter and burner base with a dry cloth. You can use a hair dryer on low to speed up drying. Make sure no water remains in the burner ports.",
      },
      {
        number: 5,
        title: "Realign the burner cap and test",
        description:
          "Place the burner cap back on the base. It must sit flat and aligned properly — a tilted cap directs gas away from the igniter. Replace the grate, turn the knob, and the burner should light. If it clicks but still does not light, the igniter switch itself may need replacing.",
      },
    ],
    alternativeCauses: [
      "Faulty spark module (all burners not clicking)",
      "Damaged igniter wire connection",
      "Gas regulator issue (weak flame on all burners)",
    ],
    whenToCallPro:
      "If none of the burners will click or light, the spark module may be dead. If you smell gas but no burners light after cleaning, call a technician or gas company immediately for safety. Spark module replacement costs $80–$150.",
    metaTitle:
      "LG Oven Burner Won't Light — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix an LG gas burner that won't light. Covers igniter cleaning, drying, and alignment. Difficulty: Easy. Save $100+.",
  },
  {
    id: "frigidaire-oven-keeps-beeping",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "keeps-beeping",
    problemTitle: "Keeps Beeping",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Touchpad overlay (if buttons are sticking)",
        costRange: "$10–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+oven+touchpad+overlay",
      },
    ],
    safetyWarnings: [
      "If the oven is beeping and heating unexpectedly, turn off the breaker immediately.",
      "Never ignore a continuous beep if the oven display shows an error code — note the code.",
    ],
    quickDiagnosis:
      "A Frigidaire oven that keeps beeping is usually caused by a stuck touchpad button, an error code the oven is trying to alert you to, or the end-of-cycle timer repeating. Check the display for an error code first — that tells you exactly what is wrong.",
    steps: [
      {
        number: 1,
        title: "Check the display for error codes",
        description:
          "Look at the oven display. If a code like F10, F11, or F30 is shown, the oven is beeping to alert you to a specific problem. Write down the code and look it up in your manual or search for it online. Press Cancel or Stop to silence the beep temporarily.",
      },
      {
        number: 2,
        title: "Press Cancel or Clear",
        description:
          "Press the Cancel or Clear/Off button firmly. If the beeping stops, it was just an end-of-cycle alert or preheat notification. On some models, you need to press Cancel twice — once for the timer and once for the oven.",
      },
      {
        number: 3,
        title: "Power cycle the oven",
        description:
          "Turn off the oven breaker for 2 minutes, then turn it back on. This resets the control board. If the beeping does not return, a temporary glitch caused it. If it starts beeping again immediately, the control board or touchpad has an issue.",
      },
      {
        number: 4,
        title: "Check for a stuck button",
        description:
          "Moisture, grease, or wear can cause touchpad buttons to stick and continuously send signals, triggering beeps. Clean the touchpad with a damp cloth. Press each button firmly and release — see if any feel sticky or do not spring back. A stuck button often triggers an F11 error.",
      },
      {
        number: 5,
        title: "Disconnect the touchpad ribbon",
        description:
          "If cleaning does not help and a button appears stuck, turn off the breaker and remove the back cover of the control panel. Disconnect the ribbon cable between the touchpad and control board. Restore power — if the beeping stops, the touchpad is faulty and needs replacing.",
      },
    ],
    alternativeCauses: [
      "Faulty oven control board",
      "Temperature sensor triggering a runaway heat error",
      "Door switch sending intermittent signals",
    ],
    whenToCallPro:
      "If the oven displays F10 (runaway temperature), this is a safety issue — the oven may heat uncontrollably. Turn off the breaker and call a technician. Control board replacement runs $150–$300.",
    metaTitle:
      "Frigidaire Oven Keeps Beeping — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Frigidaire oven that keeps beeping. Covers error codes, stuck buttons, and control board reset. Difficulty: Easy. Save $100+.",
  },
  {
    id: "samsung-range-burner-clicking-wont-ignite",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "burner-clicking-wont-ignite",
    problemTitle: "Range Burner Clicking but Won't Ignite",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Toothbrush",
      "Sewing needle or paper clip",
      "Dry cloth",
    ],
    partsNeeded: [
      {
        name: "Igniter electrode (if cracked)",
        costRange: "$10–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+range+igniter+electrode",
      },
    ],
    safetyWarnings: [
      "If you smell strong gas odor and the burner will not ignite, turn off the gas and open windows.",
      "Do not attempt to light the burner with a match while gas is flowing freely.",
      "Make sure burner knobs are in the off position before cleaning.",
    ],
    quickDiagnosis:
      "A Samsung range burner that clicks rapidly but does not ignite is usually caused by moisture on the igniter, food debris blocking the burner ports, or a misaligned burner cap. This is one of the most common stove issues and almost always fixed with a simple cleaning.",
    steps: [
      {
        number: 1,
        title: "Turn off all burners",
        description:
          "Make sure all knobs are in the off position. If one burner is clicking continuously even when off, moisture is likely causing it. Unplug the range to stop the clicking while you work.",
      },
      {
        number: 2,
        title: "Remove the burner cap and clean it",
        description:
          "Lift off the grate and burner cap. Wash the cap with warm soapy water and dry it completely. Look at the underside of the cap for any caked-on food or grease that could direct gas away from the igniter. Dry everything thoroughly.",
      },
      {
        number: 3,
        title: "Clean the igniter and burner ports",
        description:
          "Use a dry toothbrush to clean the small ceramic igniter electrode. Be gentle — the ceramic is fragile. Use a sewing needle or straightened paper clip to poke out each gas port hole around the burner head. Food and grease clog these ports over time.",
      },
      {
        number: 4,
        title: "Dry the igniter completely",
        description:
          "If the range was recently cleaned or a pot boiled over, the igniter is wet. Dry it with a cloth and let it air dry for at least 30 minutes. You can speed this up with a hair dryer on low. Even a tiny amount of moisture prevents the spark from jumping to the gas.",
      },
      {
        number: 5,
        title: "Align the cap and test",
        description:
          "Place the burner cap back so it sits perfectly flat and centered on the base. The notch on the cap must line up with the electrode. Replace the grate, plug the range back in, and turn the knob. The burner should light within a few clicks.",
      },
    ],
    alternativeCauses: [
      "Cracked igniter ceramic (visible crack on the white electrode)",
      "Faulty spark module not generating enough voltage",
      "Loose wire connection to the igniter",
    ],
    whenToCallPro:
      "If all burners click but none ignite after thorough cleaning and drying, the spark module is likely dead. This controls all igniters and costs $80–$150 to replace with a technician.",
    metaTitle:
      "Samsung Range Burner Clicking Won't Ignite — Free Fix Guide | FixItFree",
    metaDescription:
      "Fix a Samsung range burner that clicks but won't ignite. Covers cleaning, drying, and cap alignment. Difficulty: Easy. Save $100+.",
  },
];
