import { Guide } from "@/lib/types";

export const redditGapGuides: Guide[] = [
  // ============================================================
  // WASHING MACHINES
  // ============================================================
  {
    id: "samsung-washer-wont-complete-spin",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "wont-complete-spin-cycle",
    problemTitle: "Won't Complete Spin Cycle",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$35",
    toolsNeeded: [
      "Phillips screwdriver",
      "Towels",
      "Multimeter (optional)",
    ],
    partsNeeded: [
      {
        name: "Lid Lock / Door Latch Assembly",
        costRange: "$15–$35",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+door+lock+assembly&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+washer+door+lock+assembly&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before any repair work.",
      "If the tub is full of water, bail it out or drain via the emergency hose before tilting the machine.",
    ],
    quickDiagnosis:
      "When a Samsung washer stops mid-cycle and refuses to spin, the usual culprits are an unbalanced load, a clogged drain filter, or a faulty door latch. Start with the simplest checks before replacing parts.",
    steps: [
      {
        number: 1,
        title: "Redistribute the load",
        description:
          "Open the washer and spread the clothes evenly around the drum. Heavy items like towels or jeans bunched on one side will trigger the off-balance sensor and stop the spin. Run the spin cycle again.",
      },
      {
        number: 2,
        title: "Clean the drain pump filter",
        description:
          "Open the small access panel at the bottom-front of the washer. Place towels underneath, then slowly twist the filter cap counter-clockwise. Remove any coins, hair ties, or debris. A clogged filter can prevent proper draining, which stops the spin.",
      },
      {
        number: 3,
        title: "Check the door latch",
        description:
          "Close the door and listen for a firm click. If the latch doesn't engage fully, the washer thinks the door is open and won't spin. Inspect the latch for cracks or debris blocking it.",
      },
      {
        number: 4,
        title: "Reset the washer",
        description:
          "Unplug the washer for 5 minutes, then plug it back in. This clears temporary software glitches. On some Samsung models, you can also hold the Start/Pause button for 5 seconds to reset.",
      },
      {
        number: 5,
        title: "Inspect the drive belt (front-load models)",
        description:
          "Unplug the machine and remove the back panel. Look at the rubber belt connecting the motor to the drum. If it's loose, cracked, or broken, the drum can't spin. Slide a new belt onto the pulleys if needed.",
      },
    ],
    alternativeCauses: [
      "A worn suspension rod or shock absorber can cause excessive vibration, triggering the off-balance sensor.",
      "A failing motor coupling on top-load models prevents the drum from spinning.",
      "The control board may have a fault — try a power reset first.",
    ],
    whenToCallPro:
      "If the motor hums but the drum doesn't move after checking the belt and motor coupling, the motor itself may be failing. Motor replacement runs $150–$300 with labor. Compare that to the age and value of your washer.",
    metaTitle:
      "Samsung Washer Won't Complete Spin Cycle — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix your Samsung washer that stops mid-cycle and won't spin. Step-by-step guide with parts, tools, and cost estimate. Save $200+.",
  },
  {
    id: "whirlpool-washer-stuck-sensing",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "stuck-on-sensing-cycle",
    problemTitle: "Stuck on Sensing Cycle / Lid Lock Blinks",
    difficulty: "Medium",
    timeEstimate: "15-40 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Putty knife or flathead screwdriver",
    ],
    partsNeeded: [
      {
        name: "Lid Lock Assembly",
        costRange: "$25–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+washer+lid+lock+assembly&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+washer+lid+lock+assembly&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Shift Actuator (if needed)",
        costRange: "$20–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+washer+shift+actuator&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+washer+shift+actuator&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before doing any work.",
      "Do not force the lid open when the lock indicator is blinking — you could break the latch mechanism.",
    ],
    quickDiagnosis:
      "If your Whirlpool top-load washer gets stuck on the sensing cycle and the lid lock light blinks, it usually means the lid lock switch is faulty, or the shift actuator under the machine has worn out. A quick reset fixes it sometimes, but if it keeps happening, a part likely needs replacing.",
    steps: [
      {
        number: 1,
        title: "Try a hard reset",
        description:
          "Unplug the washer from the wall. Wait a full 60 seconds. Plug it back in. Within 12 seconds, open and close the lid 6 times. This recalibrates the lid lock sensor on many Whirlpool models.",
      },
      {
        number: 2,
        title: "Run a diagnostic cycle",
        description:
          "With the washer plugged in and the dial in the starting position, turn the dial: 3 clicks right, 1 click left, 1 click right. Press Start. The washer enters diagnostic mode and will cycle through tests. Watch for error codes on the display.",
      },
      {
        number: 3,
        title: "Inspect the lid lock assembly",
        description:
          "Unplug the washer. Use a putty knife to release the clips holding the top panel (slide it between the top and front panels, about 3 inches from each corner). Lift the top panel. The lid lock is mounted under the top panel near the front. Check the wiring connector — unplug it and plug it back in firmly.",
      },
      {
        number: 4,
        title: "Replace the lid lock if needed",
        description:
          "If the reset didn't work and the lid lock connector is secure, the lid lock switch itself is likely bad. Remove the 2 screws holding it in place, disconnect the wire harness, and install the new one. Reverse the steps.",
      },
      {
        number: 5,
        title: "Check the shift actuator",
        description:
          "If the lid lock seems fine but the washer still won't advance past sensing, tilt the washer back and look underneath. The shift actuator is a small motor on the gearbox. If it's clicking repeatedly or making grinding sounds, it needs replacing. Remove the 2 bolts, swap it out, and reconnect the harness.",
      },
    ],
    alternativeCauses: [
      "A corroded or loose wire connection to the lid lock can cause intermittent failure.",
      "The main control board may need a reset or replacement if all mechanical parts check out.",
      "Water getting into the lid lock assembly from splashing can short it out.",
    ],
    whenToCallPro:
      "If you've replaced the lid lock and shift actuator but it still won't advance past sensing, the main control board is probably the issue. Board replacement costs $150–$250 with labor. Weigh that against the washer's age.",
    metaTitle:
      "Whirlpool Washer Stuck on Sensing / Lid Lock Blinks — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix your Whirlpool washer stuck on sensing with a blinking lid lock light. Step-by-step guide with parts list and diagnosis. Save $200+.",
  },
  {
    id: "samsung-washer-le-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "le-error-code",
    problemTitle: "LE Error Code (Water Leak Detected)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Towels",
      "Flashlight",
      "Adjustable pliers",
    ],
    partsNeeded: [
      {
        name: "Drain Hose or Inlet Hose (if leaking)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+drain+hose&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+washer+drain+hose&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Door Boot Seal (front-load, if torn)",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+door+boot+seal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+washer+door+boot+seal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer immediately when you see a leak error.",
      "Mop up any standing water to avoid slipping or electrical hazards.",
      "Do not run the washer again until you've found and fixed the leak source.",
    ],
    quickDiagnosis:
      "The Samsung LE error code means the washer detected a water leak — or at least thinks it did. Sometimes the leak sensor at the bottom of the machine just got splashed. Other times there's a real leak from a hose, the door seal, or the drain filter cap. Check the sensor first because a simple wipe-down fixes this about 40% of the time.",
    steps: [
      {
        number: 1,
        title: "Unplug and check for visible leaks",
        description:
          "Pull the plug. Slide the washer away from the wall and look underneath with a flashlight. Check the floor around and behind the machine for water. Identify where the water is coming from if you can see any.",
      },
      {
        number: 2,
        title: "Check the leak sensor",
        description:
          "The leak sensor is a small styrofoam float or moisture sensor inside the base pan of the washer. Tilt the washer back carefully. If the base pan has water in it, dry it out with towels. Sometimes a splash during a heavy load triggers the sensor when there's no real leak.",
      },
      {
        number: 3,
        title: "Inspect the door boot seal (front-load)",
        description:
          "Peel back the rubber gasket around the door opening. Look for tears, cracks, or holes. Check the bottom especially — small objects like underwire from bras can puncture it. If it's torn, it needs replacing.",
      },
      {
        number: 4,
        title: "Check all hose connections",
        description:
          "Examine the hot and cold water inlet hoses at the back. Tighten them if loose. Check the drain hose connection too. Look for cracks or bulges in the hoses. Replace any that are damaged.",
      },
      {
        number: 5,
        title: "Check the drain filter cap",
        description:
          "Open the small access panel at the bottom front. Make sure the drain filter cap is tight. If it wasn't seated properly after a previous cleaning, it can slowly drip water into the base pan and trigger the LE code.",
      },
      {
        number: 6,
        title: "Reset and test",
        description:
          "After drying the base pan and fixing any leaks, plug the washer back in. Run a short cycle and watch for leaks. Stay nearby for the entire cycle. If the LE code doesn't return, you're good.",
      },
    ],
    alternativeCauses: [
      "Overloading with too much detergent causes excessive suds that overflow internally.",
      "A cracked tub (rare) can leak water into the base pan.",
      "A faulty water inlet valve may not shut off fully, causing a slow drip.",
    ],
    whenToCallPro:
      "If you can't find the leak source, or if the tub itself is cracked, call a pro. A cracked tub on a front-loader is usually not worth repairing — the part alone is $200+ plus several hours of labor.",
    metaTitle:
      "Samsung Washer LE Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung washer LE error code (water leak detected). Step-by-step diagnosis and repair guide. Save on service calls.",
  },
  {
    id: "generic-washer-loud-grinding-noise",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "loud-grinding-noise-during-spin",
    problemTitle: "Loud Grinding Noise During Spin",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Socket wrench set",
      "Phillips screwdriver",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Tub Bearing Kit",
        costRange: "$20–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=washing+machine+tub+bearing+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=washing+machine+tub+bearing+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before inspecting anything.",
      "The drum is heavy — get help if you need to tilt or move the machine.",
    ],
    quickDiagnosis:
      "A loud grinding, rumbling, or metal-on-metal sound during the spin cycle usually means worn tub bearings, a foreign object caught between the drum and tub, or a failing drive motor coupling. Try spinning the drum by hand with the washer off — if it grinds or feels rough, it's the bearings.",
    steps: [
      {
        number: 1,
        title: "Check for objects between the drum and tub",
        description:
          "Open the door and spin the drum slowly by hand. Listen for scraping or clinking. Coins, bra wires, and buttons often slip between the inner drum and outer tub. On front-loaders, peel back the door seal and look in the gap. You may need to remove the drum paddles to fish items out.",
      },
      {
        number: 2,
        title: "Spin the drum by hand",
        description:
          "With the washer unplugged, grab the drum and spin it. It should spin freely and smoothly. If it feels gritty, rough, or makes a grinding noise, the tub bearings are worn.",
      },
      {
        number: 3,
        title: "Check the drive belt",
        description:
          "Remove the back panel. Look at the drive belt connecting the motor to the drum pulley. A frayed or slipping belt can make a squealing or grinding sound. Replace it if it's worn.",
      },
      {
        number: 4,
        title: "Inspect the motor coupling (top-load)",
        description:
          "On top-load washers without a belt, the motor coupling connects the motor to the transmission. If the rubber or plastic pieces are worn or broken, the washer will grind during spin. You'll need to remove the cabinet to access it.",
      },
      {
        number: 5,
        title: "Evaluate bearing replacement",
        description:
          "If the bearings are bad, replacement difficulty depends on your washer. On some models, the outer tub splits apart and bearings are accessible. On sealed-tub models, the entire outer tub must be replaced — a much bigger job. Look up your model number to determine which type you have before ordering parts.",
      },
    ],
    alternativeCauses: [
      "A worn spider arm (the bracket holding the inner drum) can cause wobble and grinding on front-loaders.",
      "Loose drum counterweights can bang and rattle during spin.",
      "The drain pump may be grinding if a small object is caught in it — it will sound like it's coming from the bottom.",
    ],
    whenToCallPro:
      "Tub bearing replacement on sealed-tub models is a major job — it can take 2-3 hours and costs $250–$400 with a pro. If your washer is over 8 years old, compare the repair cost to a replacement. Bearings on split-tub models are much more DIY-friendly.",
    metaTitle:
      "Washer Making Loud Grinding Noise During Spin — Free Fix Guide | RepairItFree",
    metaDescription:
      "Diagnose and fix a washing machine making loud grinding noises during the spin cycle. Step-by-step guide for all brands. Save $200+.",
  },
  {
    id: "generic-washer-object-jammed-pump",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "object-jammed-in-pump",
    problemTitle: "Sock or Object Jammed in Pump",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Flathead screwdriver",
      "Towels or shallow pan",
      "Pliers or long tweezers",
    ],
    partsNeeded: [
      {
        name: "Drain Pump (if pump is damaged)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=washing+machine+drain+pump&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=washing+machine+drain+pump&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before opening the drain filter.",
      "Have plenty of towels ready — water will pour out when you open the filter.",
      "Keep the floor dry to prevent slipping.",
    ],
    quickDiagnosis:
      "If your washer won't drain, makes a buzzing or humming sound at drain time, or you're getting drain error codes, there's a good chance a small item like a sock, coin, or hair tie got sucked into the drain pump. This is one of the most common washer problems and is almost always a free fix.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer",
        description:
          "Disconnect the power cord from the wall outlet. If the tub is full of water, you'll drain it through the filter in the next step.",
      },
      {
        number: 2,
        title: "Locate the drain filter access panel",
        description:
          "Look at the bottom front of your washer. Most front-loaders have a small rectangular access panel. Open it with a flathead screwdriver or by pressing the release tab. Behind it you'll find a round drain filter cap and sometimes a small emergency drain hose.",
      },
      {
        number: 3,
        title: "Drain the water slowly",
        description:
          "If there's an emergency drain hose, pull it out, remove its cap, and let water drain into a shallow pan. If there's no hose, place towels everywhere and slowly turn the filter cap counter-clockwise about a quarter turn. Let water trickle out. Repeat until drained.",
      },
      {
        number: 4,
        title: "Remove the filter and pull out the blockage",
        description:
          "Turn the filter cap all the way out and pull it free. You'll likely find socks, coins, hair ties, underwire, or a buildup of lint and debris. Pull everything out. Also reach into the pump housing behind the filter and feel for anything stuck in the impeller.",
      },
      {
        number: 5,
        title: "Clean the filter and reassemble",
        description:
          "Rinse the filter under running water. Scrub off any buildup. Put it back in the housing and turn clockwise until snug. Close the access panel.",
      },
      {
        number: 6,
        title: "Test with a short cycle",
        description:
          "Plug the washer back in and run a quick rinse-and-spin cycle. Listen for the drain pump — it should sound smooth, not buzzing or humming. If it drains properly, you're done. To prevent this from happening again, check pockets before washing and use a mesh laundry bag for small items.",
      },
    ],
    alternativeCauses: [
      "A kinked or clogged drain hose behind the machine can mimic a pump blockage.",
      "The house drain or standpipe where the hose connects could be clogged.",
      "If the pump impeller is broken (you can see broken plastic pieces), the pump motor needs replacing.",
    ],
    whenToCallPro:
      "If the pump motor is damaged or the impeller is broken, a new pump costs $15–$25 and is a straightforward swap on most models. If you're not comfortable pulling the washer apart to access the pump from the inside, a service call runs $100–$150.",
    metaTitle:
      "Sock or Object Jammed in Washing Machine Pump — Free Fix Guide | RepairItFree",
    metaDescription:
      "Remove a sock or object jammed in your washing machine drain pump. Easy step-by-step guide for all washer brands. Free fix in under 30 minutes.",
  },

  // ============================================================
  // REFRIGERATORS
  // ============================================================
  {
    id: "samsung-fridge-ice-maker-freezing-up",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "ice-maker-freezing-up",
    problemTitle: "Ice Maker Freezing Up / Not Making Ice",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Hair dryer or steamer",
      "Phillips screwdriver",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Water Inlet Valve",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+refrigerator+water+inlet+valve&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+refrigerator+water+inlet+valve&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before working on any electrical components.",
      "When using a hair dryer to melt ice, keep it away from standing water to avoid shock.",
      "Move perishable food to a cooler if the fridge will be off for more than 30 minutes.",
    ],
    quickDiagnosis:
      "Samsung refrigerator ice makers are notorious for freezing up. Ice builds up around the ice maker assembly and jams the mechanism. Samsung even issued a service bulletin for this. The fix involves defrosting the ice buildup, and in some cases adding better insulation to prevent it from happening again.",
    steps: [
      {
        number: 1,
        title: "Remove the ice bucket",
        description:
          "Open the freezer and pull out the ice bucket. On most Samsung models it slides straight out or you press a release tab. Empty the ice into the sink.",
      },
      {
        number: 2,
        title: "Inspect the ice maker for frost buildup",
        description:
          "Look at the ice maker assembly. If you see a thick layer of ice or frost covering it or packed behind it, that's your problem. Ice is jamming the mechanism so it can't cycle.",
      },
      {
        number: 3,
        title: "Force-defrost the ice maker",
        description:
          "On many Samsung fridges, you can enter a forced defrost mode: hold the Fridge and Energy Saver buttons (or Freezer and Lighting buttons, depending on model) simultaneously for about 8 seconds until the display goes blank, then press the Freezer button until 'Fd' appears. The fridge will start defrosting. Otherwise, unplug the fridge and use a hair dryer on low to carefully melt the ice.",
      },
      {
        number: 4,
        title: "Dry everything thoroughly",
        description:
          "After the ice melts, use towels to soak up all the water. Make sure the area around and behind the ice maker is completely dry. Any remaining moisture will freeze again and restart the problem.",
      },
      {
        number: 5,
        title: "Check the water inlet and fill tube",
        description:
          "Look at the small fill tube that squirts water into the ice maker tray. If it's frozen over, thaw it with the hair dryer. A frozen fill tube usually means the water inlet valve isn't shutting off fully or there's a drainage issue letting water drip and freeze.",
      },
      {
        number: 6,
        title: "Reassemble and monitor",
        description:
          "Put the ice bucket back in. Plug the fridge in (or exit defrost mode). Give it 24 hours to start making ice again. If the problem recurs within a few weeks, consider the Samsung-recommended fix of adding RTV silicone sealant around the ice maker housing to improve insulation. Search for your model number and 'ice maker kit' for the specific bulletin.",
      },
    ],
    alternativeCauses: [
      "A faulty water inlet valve that drips when it should be closed lets water freeze in the fill tube.",
      "A damaged door seal letting warm air into the freezer causes excess frost.",
      "The defrost system may be failing, causing ice buildup throughout the freezer.",
    ],
    whenToCallPro:
      "If the ice maker keeps freezing up after manual defrosting and sealing, the ice maker assembly itself may need replacing ($80–$150 with labor). Some Samsung models are covered under an extended warranty for this specific issue — contact Samsung support with your model and serial number to check.",
    metaTitle:
      "Samsung Fridge Ice Maker Freezing Up / Not Making Ice — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Samsung refrigerator ice maker that freezes up or stops making ice. Step-by-step defrost and repair guide. Save $150+.",
  },
  {
    id: "ge-fridge-water-dispenser-not-working",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "water-dispenser-not-working",
    problemTitle: "Water Dispenser Not Working",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Flashlight",
      "Turkey baster or funnel",
      "Warm water",
    ],
    partsNeeded: [
      {
        name: "Water Inlet Valve",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=ge+refrigerator+water+inlet+valve&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ge+refrigerator+water+inlet+valve&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the water supply to the fridge before disconnecting any water lines.",
      "Have towels ready when working with water connections.",
    ],
    quickDiagnosis:
      "When a GE fridge water dispenser stops working, the most common cause is a frozen water line inside the door or a clogged water filter. If the ice maker still works, the problem is between the water tank in the fridge door and the dispenser. If neither works, check the water supply and inlet valve.",
    steps: [
      {
        number: 1,
        title: "Check if the ice maker works",
        description:
          "If the ice maker is still making ice, water is getting to the fridge. The problem is isolated to the dispenser line. If the ice maker also stopped, the issue is the water supply, filter, or inlet valve.",
      },
      {
        number: 2,
        title: "Check the water filter",
        description:
          "Locate the water filter (usually inside the fridge in the upper right or in the base grille). If it hasn't been changed in over 6 months, replace it. A clogged filter reduces flow to a trickle. After replacing, run the dispenser for 3 minutes to flush the new filter.",
      },
      {
        number: 3,
        title: "Check for a frozen water line in the door",
        description:
          "This is the most common cause on GE fridges. The small water tube running through the freezer door can freeze. Turn the fridge temperature up a couple degrees. You can also use a turkey baster to flush warm (not hot) water into the dispenser line to melt the ice blockage.",
      },
      {
        number: 4,
        title: "Check the water supply valve",
        description:
          "Follow the water line from the back of the fridge to the wall. Make sure the shut-off valve is fully open. Sometimes it gets bumped partially closed when the fridge is pushed back.",
      },
      {
        number: 5,
        title: "Test the dispenser switch",
        description:
          "Press the dispenser paddle or button. You should hear a click or hum from the water valve at the back of the fridge. If you hear nothing, the dispenser switch or control board may be the issue. If you hear the valve buzzing but no water comes out, the valve is likely stuck or the line is frozen.",
      },
    ],
    alternativeCauses: [
      "The dispenser control board on the door can fail, preventing the valve from opening.",
      "Low household water pressure (below 20 psi) may not push water through the valve.",
      "A kinked water supply line behind the fridge restricts flow.",
    ],
    whenToCallPro:
      "If the water inlet valve is clicking but no water flows, and the supply line is clear, the valve itself needs replacing ($15–$30 for the part, $100–$150 with a service call). It's a straightforward DIY job if you're comfortable working with water connections.",
    metaTitle:
      "GE Refrigerator Water Dispenser Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a GE refrigerator water dispenser that stopped working. Step-by-step troubleshooting guide with common causes and parts. Save $150+.",
  },
  {
    id: "ge-fridge-no-water-after-filter-change",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "no-water-after-filter-change",
    problemTitle: "Not Dispensing Water After Filter Change",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Replacement water filter (correct model)",
      "Cup or container",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Water may spurt when removing or installing the filter — have a towel ready.",
    ],
    quickDiagnosis:
      "If your GE fridge stopped dispensing water right after a filter change, the filter is almost certainly the problem. Either it wasn't seated correctly, it's the wrong model, or the system has an air lock. This is very common and almost always a free fix.",
    steps: [
      {
        number: 1,
        title: "Re-seat the filter",
        description:
          "Remove the water filter you just installed. Check that you removed any protective caps or seals from the new filter — many filters come with a cap on the inlet that must be removed. Push the filter back in firmly until it clicks into place. On twist-in models, turn until it locks.",
      },
      {
        number: 2,
        title: "Verify it's the correct filter model",
        description:
          "Compare the new filter to the old one. They should be the same size and shape. Check your fridge model number and look inside the filter compartment — GE usually prints the compatible filter model there. Using the wrong filter can block water flow completely.",
      },
      {
        number: 3,
        title: "Flush the air out of the system",
        description:
          "After installing a new filter, you need to flush about 2-3 gallons of water through the system to remove air. Hold a cup against the dispenser lever and let it run. Expect sputtering, slow flow, and air bubbles at first. Keep going for a full 3-4 minutes. This is normal and required after every filter change.",
      },
      {
        number: 4,
        title: "Try bypassing the filter",
        description:
          "If water still doesn't flow, check if your GE fridge came with a filter bypass plug (looks like a short, round cap). Install the bypass plug in place of the filter. If water flows with the bypass in, the new filter is defective — get a replacement. If water doesn't flow even with the bypass, the issue is elsewhere.",
      },
      {
        number: 5,
        title: "Check for a frozen line",
        description:
          "If it's been a while since you changed the filter and water wasn't flowing before either, the water line inside the door may be frozen. Turn up the freezer temperature by a degree or two. Wait 24 hours and try again.",
      },
    ],
    alternativeCauses: [
      "Using a third-party filter that doesn't fit properly can restrict flow.",
      "The filter head assembly (the housing the filter plugs into) can crack or wear out.",
      "The water inlet valve may have failed coincidentally around the same time as the filter change.",
    ],
    whenToCallPro:
      "If water doesn't flow even with the filter bypass plug installed, and the water supply line is clear, you likely have a failed water inlet valve or a frozen line deep in the system. A service call for this runs about $100–$150.",
    metaTitle:
      "GE Refrigerator Not Dispensing Water After Filter Change — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix your GE fridge that won't dispense water after a filter change. Easy step-by-step troubleshooting. Usually a free fix in under 20 minutes.",
  },
  {
    id: "whirlpool-fridge-too-cold",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "over-cooling-too-cold",
    problemTitle: "Over-Cooling / Refrigerator Too Cold",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Refrigerator thermometer",
      "Phillips screwdriver (if accessing damper)",
    ],
    partsNeeded: [
      {
        name: "Air Damper Control Assembly",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+refrigerator+air+damper&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+refrigerator+air+damper&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the fridge before accessing internal components.",
      "Frozen food touching the back panel is a fire risk on some models — keep items away from vents.",
    ],
    quickDiagnosis:
      "If your Whirlpool fridge is freezing your lettuce and milk, the air damper between the freezer and fridge compartments is probably stuck open. The damper controls how much cold air flows from the freezer into the fridge. When it gets stuck in the open position, the fridge gets way too cold.",
    steps: [
      {
        number: 1,
        title: "Check and adjust the temperature setting",
        description:
          "Look at the temperature controls inside the fridge. The recommended setting is 37°F (3°C). If someone turned it to the coldest setting, turn it back to the middle or recommended position. Wait 24 hours and check with a thermometer.",
      },
      {
        number: 2,
        title: "Check for blocked vents",
        description:
          "Find the vent that brings cold air from the freezer into the fridge (usually at the top-back of the fridge compartment). Make sure food isn't pushed against it or blocking it. Blocked vents can cause uneven cooling — some spots freeze while others stay warm.",
      },
      {
        number: 3,
        title: "Inspect the air damper",
        description:
          "The air damper is a small door or flap near the vent between the freezer and fridge. On Whirlpool models, it's usually behind a small panel at the top of the fridge compartment. Unplug the fridge, remove the cover, and look at the damper. Try to move it by hand — it should open and close smoothly. If it's stuck open, that's your problem.",
      },
      {
        number: 4,
        title: "Free or replace the damper",
        description:
          "Sometimes the damper just needs to be freed — ice or debris can jam it. Clean it gently. If the foam seal around it is damaged, the damper won't close properly. If the damper motor doesn't respond when power is restored, the damper assembly needs replacing.",
      },
      {
        number: 5,
        title: "Check the thermistor",
        description:
          "The thermistor is a small sensor that reads the fridge temperature and tells the control board when to open or close the damper. If it's giving a wrong reading, the fridge runs too cold. You can test it with a multimeter — its resistance should change as the temperature changes. If it reads the same at all temperatures, it's bad.",
      },
    ],
    alternativeCauses: [
      "A faulty temperature control thermostat may not cycle the compressor off when the fridge is cold enough.",
      "The main control board can malfunction and keep the compressor running constantly.",
      "A door gasket that doesn't seal well causes the compressor to run more, over-cooling the fridge.",
    ],
    whenToCallPro:
      "If replacing the damper and checking the thermistor doesn't solve it, the main control board may be faulty ($100–$200 to replace). This is worth getting a diagnosis from a tech before spending money on a board.",
    metaTitle:
      "Whirlpool Refrigerator Too Cold / Over-Cooling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Whirlpool refrigerator that's too cold and freezing food. Step-by-step guide to check the damper, thermistor, and settings. Save $150+.",
  },
  {
    id: "generic-freezer-water-pooling-bottom",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "water-pooling-in-bottom-of-freezer",
    problemTitle: "Water Pooling or Freezing in Bottom of Freezer",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Turkey baster",
      "Warm water",
      "Towels",
      "Pipe cleaner or flexible wire",
    ],
    partsNeeded: [
      {
        name: "Drain Strap or Heater (if needed)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=refrigerator+defrost+drain+strap&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=refrigerator+defrost+drain+strap&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the fridge before removing any panels inside the freezer.",
      "Use warm water, not boiling — boiling water can crack plastic components.",
    ],
    quickDiagnosis:
      "Water pooling or a sheet of ice forming at the bottom of your freezer almost always means the defrost drain is clogged. During the automatic defrost cycle, ice melts and should flow down a drain into a pan at the bottom of the fridge. When that drain freezes over or gets clogged with food debris, the water has nowhere to go and pools in the freezer floor.",
    steps: [
      {
        number: 1,
        title: "Remove food and shelves from the freezer",
        description:
          "Take everything out of the freezer and store it in a cooler. Remove the bottom shelf or drawer to expose the floor of the freezer.",
      },
      {
        number: 2,
        title: "Find the defrost drain hole",
        description:
          "Look at the back wall at the bottom of the freezer. You should see a small hole or channel — that's the defrost drain. It may be hidden under a plastic panel held by a couple of screws. On some models you'll need to remove the back panel inside the freezer to access it.",
      },
      {
        number: 3,
        title: "Clear the clog",
        description:
          "Mix warm water (not boiling) and use a turkey baster to squirt it down the drain hole. This melts any ice blockage. Use a pipe cleaner or flexible wire to gently poke through the drain and dislodge any debris. Keep flushing with warm water until it flows freely.",
      },
      {
        number: 4,
        title: "Check the drain pan",
        description:
          "The water drains into a pan at the very bottom of the fridge (under the unit). Pull the fridge out and look underneath or behind the kick plate. The drain pan should be there. Empty it if it's full. Normally the water evaporates on its own from the compressor heat.",
      },
      {
        number: 5,
        title: "Prevent future clogs",
        description:
          "To keep the drain from freezing again, you can install a drain strap — a small copper clip that sits in the drain hole and conducts enough heat to prevent ice from forming. Some people also flush the drain with a tablespoon of baking soda dissolved in warm water every 6 months to keep it clear.",
      },
    ],
    alternativeCauses: [
      "A failing defrost heater can cause excessive ice buildup that overwhelms the drain.",
      "A damaged door gasket lets humid air in, which condenses and freezes.",
      "On frost-free models, a bad defrost timer or thermostat can lead to ice buildup.",
    ],
    whenToCallPro:
      "If the drain clogs repeatedly or the entire back wall of the freezer is a sheet of ice, the defrost system (heater, timer, or thermostat) may be failing. Defrost system repair costs $150–$250 with a pro.",
    metaTitle:
      "Water Pooling or Freezing in Bottom of Freezer — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix water pooling or ice forming at the bottom of your freezer. Usually a clogged defrost drain — easy 15-minute fix. Works for all fridge brands.",
  },

  // ============================================================
  // DRYERS
  // ============================================================
  {
    id: "ge-electric-dryer-hums-wont-spin",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "motor-hums-drum-wont-spin",
    problemTitle: "Motor Hums but Drum Won't Spin",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$10–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Nut driver (1/4 inch)",
      "Putty knife",
    ],
    partsNeeded: [
      {
        name: "Dryer Drum Belt",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=ge+dryer+drum+belt&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ge+dryer+drum+belt&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Drum Roller Kit (if worn)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=ge+dryer+drum+roller+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ge+dryer+drum+roller+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before doing any work.",
      "If it's a gas dryer, also turn off the gas supply valve.",
      "The drum is heavy — be careful when lifting or removing it.",
    ],
    quickDiagnosis:
      "When a GE dryer motor hums but the drum doesn't turn, the drive belt has almost certainly broken. The belt wraps around the drum and connects to the motor. When it snaps, the motor runs but has nothing to spin. This is a cheap, common repair.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer",
        description:
          "Disconnect the power cord. Pull the dryer away from the wall enough to work behind and beside it.",
      },
      {
        number: 2,
        title: "Open the top panel",
        description:
          "Use a putty knife to release the spring clips at the front seam — slide it in about 2 inches from each corner and push to release. Lift the top up and lean it against the wall.",
      },
      {
        number: 3,
        title: "Remove the front panel",
        description:
          "Disconnect the door switch wires. Remove the 2 screws at the top corners holding the front panel. Lift the panel slightly and pull it away. Now you can see the drum and the belt path.",
      },
      {
        number: 4,
        title: "Check the belt",
        description:
          "Look at the drum. If the belt is snapped, you'll see it lying loose or it may have fallen off entirely. If it's intact, check if it slipped off the pulleys. Note how it routes — it wraps around the drum, then loops under the idler pulley and around the motor pulley in a zigzag pattern.",
      },
      {
        number: 5,
        title: "Install the new belt",
        description:
          "Loop the new belt around the drum with the grooved side facing the drum. Reach underneath and route it around the idler pulley and motor pulley. The idler pulley is spring-loaded — push it toward the motor to create slack, loop the belt, and release. The tension should hold it in place.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the front panel back on, reconnect the door switch wires, and lower the top panel until the clips snap. Plug in the dryer and run a short cycle. The drum should spin smoothly. If you hear squeaking, the drum rollers may be worn — but the drum should at least turn now.",
      },
    ],
    alternativeCauses: [
      "Worn drum rollers can seize up and prevent the drum from turning even with a good belt.",
      "A seized idler pulley can cause the belt to break repeatedly.",
      "The motor itself can fail with a seized bearing — if the motor won't turn freely by hand, it needs replacing.",
    ],
    whenToCallPro:
      "If the motor itself is seized or the drum bearing is bad, those are bigger repairs. A motor replacement is $100–$200 with labor. If the dryer is over 10 years old, compare repair costs to a replacement.",
    metaTitle:
      "GE Dryer Motor Hums but Drum Won't Spin — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a GE electric dryer where the motor hums but the drum won't turn. Usually a broken belt — easy DIY fix for under $15. Save $150+.",
  },
  {
    id: "kenmore-dryer-clothes-still-damp",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Kenmore",
    brandSlug: "kenmore",
    problemSlug: "clothes-still-damp-after-cycle",
    problemTitle: "Clothes Still Damp After Full Cycle",
    difficulty: "Easy",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Vent brush or lint brush kit",
      "Vacuum with hose attachment",
      "Screwdriver",
    ],
    partsNeeded: [
      {
        name: "Dryer Vent Cleaning Kit",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=dryer+vent+cleaning+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dryer+vent+cleaning+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermal Fuse (if blown)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=kenmore+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=kenmore+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before cleaning vents or checking internal parts.",
      "A clogged dryer vent is a serious fire hazard — clean it at least once a year.",
      "If you smell burning during use, stop the dryer immediately and check the vent.",
    ],
    quickDiagnosis:
      "When a Kenmore dryer runs a full cycle but clothes are still damp, the number one cause is a clogged lint vent. The dryer is heating, but the hot moist air can't escape, so clothes never fully dry. Before you assume something is broken, clean the vent from end to end.",
    steps: [
      {
        number: 1,
        title: "Clean the lint trap",
        description:
          "Pull out the lint screen and remove all the lint. Then look into the lint trap housing with a flashlight — lint accumulates down inside too. Use a vent brush to clean it out. If you use dryer sheets, the screen may have an invisible film — wash it with soap and water and let it dry.",
      },
      {
        number: 2,
        title: "Clean the entire vent duct",
        description:
          "Pull the dryer away from the wall. Disconnect the vent hose from the back of the dryer. Use a dryer vent brush kit to clean inside the vent duct all the way to where it exits the house. Also clean the short vent duct on the back of the dryer itself. You'll be surprised how much lint comes out.",
      },
      {
        number: 3,
        title: "Check the outside vent hood",
        description:
          "Go outside and find where the dryer vent exits your house. Make sure the flap opens freely and isn't blocked by lint, debris, or a bird's nest. Run the dryer and hold your hand near the vent — you should feel strong, warm airflow.",
      },
      {
        number: 4,
        title: "Verify the dryer is heating",
        description:
          "Run the dryer on high heat for 5 minutes, then open the door and feel the inside of the drum. It should be hot. If it's only warm or room temperature, the heating element or thermal fuse may have failed. See our specific guide for dryer not heating.",
      },
      {
        number: 5,
        title: "Don't overload",
        description:
          "A single dryer load should fill the drum about halfway to two-thirds. An overstuffed dryer can't tumble clothes properly, so hot air doesn't reach everything. If you're cramming it full, try smaller loads and see if that solves the issue.",
      },
    ],
    alternativeCauses: [
      "A partially blown thermal fuse can reduce heating output without stopping it entirely.",
      "A worn felt drum seal lets cool air into the drum, reducing drying efficiency.",
      "The moisture sensor bars inside the drum may be coated with dryer sheet residue — clean them with rubbing alcohol.",
    ],
    whenToCallPro:
      "If the vent is clean and the dryer still doesn't fully heat, the heating element or gas valve solenoids may need replacing. These are $20–$50 parts. If you're not comfortable opening the dryer, a service call runs $100–$150.",
    metaTitle:
      "Kenmore Dryer Clothes Still Damp After Full Cycle — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Kenmore dryer that leaves clothes damp after a full cycle. Step-by-step vent cleaning and diagnosis. Free fix in most cases.",
  },
  {
    id: "maytag-dryer-wont-start-has-power",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Maytag",
    brandSlug: "maytag",
    problemSlug: "wont-start-but-has-power",
    problemTitle: "Won't Start but Has Power (LED On)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "Putty knife",
    ],
    partsNeeded: [
      {
        name: "Door Switch",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=maytag+dryer+door+switch&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=maytag+dryer+door+switch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermal Fuse",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=maytag+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=maytag+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before doing any work.",
      "If it's a gas dryer, turn off the gas supply.",
      "A blown thermal fuse often means the vent is clogged — always check the vent to prevent a fire.",
    ],
    quickDiagnosis:
      "When your Maytag dryer has power (lights, display working) but nothing happens when you press Start, the most common culprits are a faulty door switch, a blown thermal fuse, or a broken start switch. The door switch is the most frequent failure — it's cheap and easy to test.",
    steps: [
      {
        number: 1,
        title: "Check the door switch",
        description:
          "Close the dryer door. You should hear a definite click. If there's no click, or if the door feels loose, the door switch may be broken. On Maytag dryers, the switch is usually accessible by popping the top panel with a putty knife and looking near the door opening.",
      },
      {
        number: 2,
        title: "Test the door switch with a multimeter",
        description:
          "Unplug the dryer. Access the door switch and disconnect its wires. Set your multimeter to continuity. Touch the probes to the switch terminals — it should show continuity when pressed and none when released. If it fails this test, replace it.",
      },
      {
        number: 3,
        title: "Check the thermal fuse",
        description:
          "The thermal fuse is on the exhaust duct inside the dryer (you'll need to remove the back panel). Test it with your multimeter — it should have continuity. If it's blown (no continuity), replace it. Important: a blown thermal fuse means the dryer overheated, so always clean the vent before running the dryer again.",
      },
      {
        number: 4,
        title: "Test the start switch",
        description:
          "If the door switch and thermal fuse are good, the start switch (the button or knob you push/turn) may be faulty. You can test it with a multimeter — it should show continuity when pressed. If it doesn't, it needs replacing.",
      },
      {
        number: 5,
        title: "Check for a tripped breaker",
        description:
          "Electric dryers use two circuit breaker poles. Sometimes one trips and the other doesn't — giving the dryer enough power for the display and lights but not the motor. Check your breaker panel and flip the dryer breaker fully off, then back on.",
      },
    ],
    alternativeCauses: [
      "A failed drive motor won't respond to the start signal. If you hear a hum when pressing Start, the motor may be seized.",
      "The main control board can fail and not send the start signal to the motor.",
      "Child lock or control lock may be activated — check the display for a lock icon.",
    ],
    whenToCallPro:
      "If the door switch, thermal fuse, and start switch all test fine, the control board or motor relay may be the issue. Board replacement costs $100–$200 with labor. Motor replacement is $150–$250.",
    metaTitle:
      "Maytag Dryer Won't Start but Has Power — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Maytag dryer that has power and lights but won't start. Step-by-step guide to test the door switch, thermal fuse, and more. Save $150+.",
  },

  // ============================================================
  // DISHWASHERS
  // ============================================================
  {
    id: "generic-dishwasher-rotten-smell",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "rotten-smell-how-to-clean",
    problemTitle: "Awful Rotten Smell — How to Deep Clean",
    difficulty: "Easy",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$5",
    toolsNeeded: [
      "Old toothbrush",
      "White vinegar",
      "Baking soda",
      "Dish soap",
      "Towels",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Never mix vinegar and bleach — the combination creates toxic gas.",
      "Run the dishwasher empty during cleaning cycles (no dishes).",
    ],
    quickDiagnosis:
      "A smelly dishwasher is almost always caused by trapped food rotting in the filter, door gasket, or spray arms. Dishwashers need periodic cleaning just like any other appliance. A thorough deep clean fixes this in about 30 minutes and costs nothing.",
    steps: [
      {
        number: 1,
        title: "Clean the filter",
        description:
          "Pull out the bottom rack. Find the filter at the bottom of the dishwasher — it's usually a round mesh cylinder that twists out. Remove it and clean it under hot running water with dish soap and a toothbrush. Scrub off all the food gunk. This is almost always the main source of the smell.",
      },
      {
        number: 2,
        title: "Clean the door gasket",
        description:
          "Wipe down the rubber seal around the door with a cloth soaked in vinegar. Pull the gasket back gently and clean the groove behind it — food and black mold love to hide there. Use a toothbrush to scrub any stubborn buildup.",
      },
      {
        number: 3,
        title: "Clean the spray arms",
        description:
          "Remove the spray arms (they usually twist or unclip off). Check the small holes in each arm — they get clogged with food and mineral deposits. Use a toothpick to poke out any blockages. Rinse under running water.",
      },
      {
        number: 4,
        title: "Check the drain area",
        description:
          "With the filter removed, look into the sump area at the bottom. Remove any food debris, broken glass, or labels you see. Wipe it clean. If your dishwasher connects to a garbage disposal, run the disposal to make sure the drain line is clear.",
      },
      {
        number: 5,
        title: "Run a vinegar cleaning cycle",
        description:
          "Place a cup of white vinegar in a dishwasher-safe bowl on the top rack. Run the hottest cycle with the dishwasher empty. The vinegar breaks down grease, dissolves mineral buildup, and kills bacteria.",
      },
      {
        number: 6,
        title: "Follow up with baking soda",
        description:
          "After the vinegar cycle finishes, sprinkle a cup of baking soda across the bottom of the dishwasher. Run a short hot cycle. This deodorizes and removes any remaining stains. Your dishwasher should smell fresh now. Repeat this cleaning monthly to prevent odor from returning.",
      },
    ],
    alternativeCauses: [
      "Standing water in the bottom of the dishwasher (drain issue) breeds bacteria.",
      "A clogged air gap or drain hose can trap food and water.",
      "Running cycles at low temperatures doesn't kill bacteria — use hot water cycles periodically.",
    ],
    whenToCallPro:
      "If the smell persists after a thorough deep clean, there may be a clog in the drain line or a failing drain pump holding dirty water. A plumber or appliance tech can snake the drain line for about $100.",
    metaTitle:
      "Dishwasher Has Awful Rotten Smell — How to Deep Clean | RepairItFree",
    metaDescription:
      "Eliminate that rotten smell from your dishwasher with a step-by-step deep clean guide. Free fix using vinegar and baking soda. Works for all brands.",
  },
  {
    id: "generic-dishwasher-leaking-bottom-door",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "leaking-from-bottom-of-door",
    problemTitle: "Leaking from Bottom of Door",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Towels",
      "Flashlight",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Door Gasket Seal",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=dishwasher+door+gasket+seal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dishwasher+door+gasket+seal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and disconnect power before inspecting.",
      "Wipe up water immediately to prevent floor damage and slipping.",
      "If the leak is large and sudden, turn off the water supply valve under the sink.",
    ],
    quickDiagnosis:
      "Water leaking from the bottom of the dishwasher door is usually caused by a worn door gasket, too much detergent causing excess suds, or the dishwasher not being level. The door gasket is a rubber seal that runs around the inside edge of the door — if it's cracked, compressed, or dirty, water escapes.",
    steps: [
      {
        number: 1,
        title: "Check for excess suds",
        description:
          "Open the dishwasher mid-cycle and look inside. If you see a lot of suds, you're using too much detergent or the wrong kind. Use only dishwasher detergent (never dish soap). Reduce the amount you use. Excess suds push water out through the door seal.",
      },
      {
        number: 2,
        title: "Inspect the door gasket",
        description:
          "Open the door and look at the rubber seal around the perimeter. Feel it for cracks, tears, hard spots, or sections that have pulled away from the door. Wipe the gasket clean with a damp cloth — food debris or mineral buildup can prevent it from sealing properly.",
      },
      {
        number: 3,
        title: "Clean or replace the gasket",
        description:
          "If the gasket is just dirty, clean it with warm soapy water and a toothbrush. If it's cracked or hardened, it needs replacing. Most gaskets simply press into a channel around the door — pull the old one out and press the new one in. No tools needed.",
      },
      {
        number: 4,
        title: "Check if the dishwasher is level",
        description:
          "Place a level on the inside floor of the dishwasher (front to back and side to side). If it's tilted forward, water pools at the door and leaks out. Adjust the front legs by turning them clockwise (to raise) or counter-clockwise (to lower) until the dishwasher is level or tilted very slightly back.",
      },
      {
        number: 5,
        title: "Check the door latch",
        description:
          "Close the door and make sure it latches firmly. If the latch is worn or the door doesn't close tight, the gasket can't seal properly. A loose latch can usually be tightened by adjusting the strike plate or replacing the latch mechanism.",
      },
    ],
    alternativeCauses: [
      "A cracked or loose spray arm can spray water directly at the door seal gap.",
      "The float switch (overflow sensor) may be stuck, causing the dishwasher to overfill.",
      "The bottom of the dishwasher tub could have a crack (more common on older units).",
    ],
    whenToCallPro:
      "If the gasket is fine, the machine is level, and you're using the right detergent, the leak could be from a faulty water inlet valve or a cracked tub. These are harder to diagnose and repair. A service call runs $100–$175.",
    metaTitle:
      "Dishwasher Leaking from Bottom of Door — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a dishwasher leaking from the bottom of the door. Step-by-step guide covering gasket, leveling, and detergent issues. Works for all brands.",
  },

  // ============================================================
  // OVENS & RANGES
  // ============================================================
  {
    id: "lg-gas-range-burners-wont-ignite",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "gas-burners-wont-ignite",
    problemTitle: "Gas Range Burners Won't Ignite",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Old toothbrush",
      "Sewing needle or paperclip",
      "Dish soap",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Spark Igniter Module (if faulty)",
        costRange: "$10–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=lg+gas+range+spark+igniter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=lg+gas+range+spark+igniter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you smell gas when no burners are on, leave the house immediately and call your gas company. Do not flip light switches or use your phone inside.",
      "Never use matches or lighters as a permanent fix for a burner that won't spark — find and fix the real problem.",
      "Make sure all burner knobs are in the off position before cleaning.",
    ],
    quickDiagnosis:
      "When LG gas range burners click but won't light, or won't click at all, the most common cause is food or grease clogging the igniter or burner ports. A thorough cleaning fixes this about 80% of the time. It's free and takes 15 minutes.",
    steps: [
      {
        number: 1,
        title: "Make sure the burner parts are seated correctly",
        description:
          "Remove the burner grate, burner cap, and burner head. These come apart easily — just lift them off. Check that nothing is misaligned. When people clean the stove and put these parts back on crooked, the burner won't light. Reposition them properly.",
      },
      {
        number: 2,
        title: "Clean the igniter",
        description:
          "The igniter is a small white or gray ceramic nub near the burner. Use an old toothbrush to gently scrub food residue and grease off it. Be gentle — the ceramic is fragile. Wipe with a dry cloth. Even a thin film of grease on the igniter can prevent it from sparking.",
      },
      {
        number: 3,
        title: "Clear the burner ports",
        description:
          "Look at the small holes around the burner head where the flame comes out. Use a sewing needle or straightened paperclip to poke out any clogged ports. Don't use a toothpick — it can break off inside. Brush away any loosened debris.",
      },
      {
        number: 4,
        title: "Dry everything thoroughly",
        description:
          "If the burners got wet from cleaning or a boil-over, they won't ignite until dry. Wipe every component with a dry towel. You can speed up drying by turning on a working burner nearby (the heat helps), or use a hair dryer on a low setting. Wait until everything is completely dry before testing.",
      },
      {
        number: 5,
        title: "Test the igniter spark",
        description:
          "Turn the burner knob to the Lite position. You should see a small blue spark at the igniter. If you see a spark but the gas doesn't light, the burner ports are still clogged. If there's no spark at all on any burner, the spark module may be faulty. If only one burner has no spark, the igniter wire for that burner may be loose or damaged.",
      },
    ],
    alternativeCauses: [
      "A faulty spark module (the box that powers all the igniters) can stop all burners from sparking at once.",
      "A loose or damaged igniter wire connection can affect individual burners.",
      "The gas supply valve under the stove or at the wall may not be fully open.",
    ],
    whenToCallPro:
      "If you smell gas but the burner won't light even with a match, turn off the gas and call a professional. If the spark module has failed, replacement costs $50–$100 with labor. If you're not comfortable working around gas connections, always call a pro.",
    metaTitle:
      "LG Gas Range Burners Won't Ignite — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix LG gas range burners that won't ignite or click but don't light. Step-by-step cleaning guide. Free fix in 15 minutes. Save $100+.",
  },
  {
    id: "generic-oven-not-heating-stovetop-works",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "oven-not-heating-stovetop-works",
    problemTitle: "Oven Not Heating but Stovetop Works",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$10–$40",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "Nut driver set",
    ],
    partsNeeded: [
      {
        name: "Oven Bake Element (electric)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=oven+bake+element+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=oven+bake+element+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Oven Igniter (gas)",
        costRange: "$15–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=gas+oven+igniter+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=gas+oven+igniter+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the oven and unplug it (or flip the breaker) before any repair.",
      "For gas ovens, turn off the gas supply before working on the igniter.",
      "The oven bake element can hold residual charge — let it cool and discharge for 5 minutes after unplugging.",
    ],
    quickDiagnosis:
      "If the stovetop burners work but the oven won't heat, the problem is isolated to the oven. On electric ovens, the bake element (the coil at the bottom) has probably burned out. On gas ovens, the oven igniter has likely weakened. Both are common, affordable parts.",
    steps: [
      {
        number: 1,
        title: "Visually inspect the bake element (electric ovens)",
        description:
          "Open the oven and look at the bottom heating element. Turn the oven on and watch it. A working element glows red evenly. If you see bright spots, blistering, cracks, or holes — or if part of it doesn't glow — it's burned out and needs replacing.",
      },
      {
        number: 2,
        title: "Check the oven igniter (gas ovens)",
        description:
          "Open the oven, remove the bottom panel (usually held by 2 screws), and look at the igniter near the gas burner tube. Turn the oven on. The igniter should start glowing bright orange within 30-60 seconds, then gas should flow and ignite. If the igniter glows weakly or takes forever, it's too weak to open the gas valve.",
      },
      {
        number: 3,
        title: "Replace the bake element (electric)",
        description:
          "Unplug the oven. Remove the 2 screws or bolts holding the element to the back wall of the oven. Gently pull the element forward. Disconnect the two wire connectors. Connect the wires to the new element and push it into place. Secure with the screws.",
      },
      {
        number: 4,
        title: "Replace the oven igniter (gas)",
        description:
          "Turn off the gas supply. Remove the bottom oven panel. The igniter is mounted with 2 screws near the burner tube. Disconnect the wire connector (it's usually accessible from behind the oven or through the bottom). Install the new igniter — handle it gently as the element is fragile. Don't touch the glowing element with bare hands (oils from skin shorten its life).",
      },
      {
        number: 5,
        title: "Test the repair",
        description:
          "Restore power and gas. Set the oven to 350F and wait 15 minutes. Use an oven thermometer to confirm it's heating. The oven should reach temperature within 10-15 minutes.",
      },
    ],
    alternativeCauses: [
      "A faulty oven temperature sensor (thermistor) can prevent the oven from heating.",
      "The bake/broil relay on the control board can fail on electric ovens.",
      "A tripped thermal fuse inside the oven (behind the back panel) can cut power to the heating circuit.",
    ],
    whenToCallPro:
      "If replacing the element or igniter doesn't fix it, the control board or oven temperature sensor may be the issue. These repairs cost $100–$250 with labor. For gas oven work, if you're not comfortable around gas connections, always call a licensed technician.",
    metaTitle:
      "Oven Not Heating but Stovetop Works — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix an oven that won't heat while the stovetop still works. Covers both gas and electric ovens. Step-by-step guide with parts list. Save $200+.",
  },
  {
    id: "generic-oven-temperature-off-recalibrate",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "temperature-off-how-to-recalibrate",
    problemTitle: "Oven Temperature Way Off — How to Recalibrate",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Oven thermometer",
    ],
    partsNeeded: [
      {
        name: "Oven Thermometer",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=oven+thermometer&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=oven+thermometer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Use oven mitts when placing or reading the thermometer in a hot oven.",
      "The oven thermometer will be very hot — don't touch it with bare hands after testing.",
    ],
    quickDiagnosis:
      "If your food is burning or coming out undercooked, your oven temperature is probably off. This is extremely common — even new ovens can be 25-50 degrees off from what the display says. Most ovens have a built-in calibration setting that lets you adjust the temperature without any parts or tools. An inexpensive oven thermometer is all you need to diagnose and fix this.",
    steps: [
      {
        number: 1,
        title: "Test your oven temperature",
        description:
          "Place an oven thermometer in the center of the middle rack. Set the oven to 350F. Wait 20 minutes after it signals preheating is done. Read the thermometer. Note the difference between the set temperature and the actual temperature.",
      },
      {
        number: 2,
        title: "Test at multiple temperatures",
        description:
          "Repeat the test at 250F and 450F. This helps you understand if the offset is consistent. If it's always 25 degrees low, calibration will fix it. If it's wildly inconsistent (50 low at 250 but 30 high at 450), the temperature sensor may be failing.",
      },
      {
        number: 3,
        title: "Access the calibration setting",
        description:
          "Every oven brand does this differently. Common methods: (1) Hold the Bake button for 5 seconds. (2) Press and hold the Up and Down arrows together. (3) Go to Settings > Temperature Calibration in the menu. Check your owner's manual or search your model number + 'oven calibration' online.",
      },
      {
        number: 4,
        title: "Adjust the calibration",
        description:
          "Once in calibration mode, use the arrow buttons to increase or decrease the temperature offset. If your oven reads 25 degrees too low, increase the calibration by 25 degrees. Most ovens allow adjustments of up to 35 degrees in either direction.",
      },
      {
        number: 5,
        title: "Retest and fine-tune",
        description:
          "After setting the calibration, run the 350F test again with your oven thermometer. If it's still off, adjust the calibration again. Once the thermometer reads close to 350F (within 5-10 degrees is normal), you're set. Keep the oven thermometer in the oven permanently as an easy reference.",
      },
    ],
    alternativeCauses: [
      "A failing oven temperature sensor gives inaccurate readings to the control board, causing wild temperature swings.",
      "A worn heating element may heat unevenly, making some spots hotter than others.",
      "A damaged door gasket lets heat escape, making the oven temperature lower than it should be.",
    ],
    whenToCallPro:
      "If the oven temperature swings wildly (not just consistently off), the temperature sensor likely needs replacing. It's a $15–$30 part and usually an easy DIY job. If the calibration offset is more than 50 degrees, something else is wrong and a tech should diagnose it ($100–$150).",
    metaTitle:
      "Oven Temperature Way Off — How to Recalibrate | RepairItFree",
    metaDescription:
      "Recalibrate your oven when the temperature is inaccurate. Easy step-by-step guide that works for all oven brands. Free fix in under 20 minutes.",
  },

  // ============================================================
  // MICROWAVES
  // ============================================================
  {
    id: "frigidaire-microwave-runs-no-heat",
    category: "Microwaves",
    categorySlug: "microwaves",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "runs-but-doesnt-heat",
    problemTitle: "Runs but Doesn't Heat",
    difficulty: "Hard",
    timeEstimate: "30-60 minutes",
    costEstimate: "$15–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
      "Insulated gloves",
    ],
    partsNeeded: [
      {
        name: "Magnetron",
        costRange: "$30–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+microwave+magnetron&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+microwave+magnetron&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "High Voltage Diode",
        costRange: "$5–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+microwave+high+voltage+diode&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+microwave+high+voltage+diode&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: Microwaves contain a high-voltage capacitor that can store a lethal charge even when unplugged. If you are not experienced with electronics, do not open the microwave. This is the one appliance that can kill you even when it's unplugged.",
      "Always unplug the microwave and discharge the capacitor before touching any internal components.",
      "Never run a microwave empty — it can damage the magnetron.",
    ],
    quickDiagnosis:
      "When a Frigidaire microwave runs (turntable spins, light is on) but food stays cold, the magnetron, high-voltage diode, or capacitor has failed. The magnetron is the component that actually produces microwaves. This is rated Hard because of the dangerous high-voltage capacitor inside. If you're not experienced with electronics, consider replacing the microwave instead — it may cost the same as the repair.",
    steps: [
      {
        number: 1,
        title: "Try a simple reset first",
        description:
          "Unplug the microwave for 5 minutes, then plug it back in. Try heating a cup of water for 1 minute. If the water gets hot, it was a software glitch. If it stays cold, continue with diagnosis.",
      },
      {
        number: 2,
        title: "Check the door switches",
        description:
          "Microwaves have 3-4 door switches that must all be engaged for the magnetron to power on. Open and close the door firmly. If you hear the switches clicking, they're likely fine. A faulty door switch can make the microwave run without actually powering the magnetron.",
      },
      {
        number: 3,
        title: "Decide: repair or replace?",
        description:
          "A countertop microwave costs $60–$150 new. A magnetron costs $30–$50 for the part, plus the risk and difficulty of the repair. For countertop models, replacement often makes more sense. For built-in or over-the-range models that cost $300+, repair is more worthwhile.",
      },
      {
        number: 4,
        title: "Access the internal components (experienced DIYers only)",
        description:
          "Unplug the microwave. Remove the outer cover (screws on the back and sides). BEFORE touching anything, discharge the capacitor: use an insulated screwdriver to short across the capacitor terminals. The high-voltage diode, capacitor, and magnetron are all located near each other.",
      },
      {
        number: 5,
        title: "Test and replace the faulty component",
        description:
          "Use a multimeter to test the diode (it should show continuity in one direction only). Test the magnetron terminals for continuity (should read near zero ohms). A burned-out diode is the cheapest and easiest fix. A failed magnetron is the most common cause. Replace whichever component tests bad, reassemble, and test with a cup of water.",
      },
    ],
    alternativeCauses: [
      "A faulty high-voltage capacitor can prevent the magnetron from getting enough power.",
      "The high-voltage transformer can fail, though this is less common.",
      "A failed door switch may cut power to the magnetron while allowing everything else to run.",
    ],
    whenToCallPro:
      "Microwave internal repair involves lethal voltages. Unless you're experienced with electronics, take it to an appliance repair shop or replace the unit. Countertop microwaves are often cheaper to replace than repair. For over-the-range units, a service call runs $100–$200 plus parts.",
    metaTitle:
      "Frigidaire Microwave Runs but Doesn't Heat — Free Fix Guide | RepairItFree",
    metaDescription:
      "Diagnose a Frigidaire microwave that runs but doesn't heat. Covers magnetron, diode, and capacitor testing. Important safety warnings included.",
  },

  // ============================================================
  // PHONES
  // ============================================================
  {
    id: "samsung-galaxy-black-screen-still-works",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "black-screen-phone-still-works",
    problemTitle: "Screen Black but Phone Still Works / Rings",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "USB-C cable",
      "Another phone or computer (to test calls)",
    ],
    partsNeeded: [
      {
        name: "Screen Replacement Kit (if needed)",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+screen+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+screen+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If the screen is cracked with sharp edges, handle the phone carefully to avoid cuts.",
      "Do not try to pry the screen off without proper tools — you can damage the battery.",
    ],
    quickDiagnosis:
      "If your Samsung Galaxy screen is completely black but the phone still receives calls, plays sounds, or vibrates, the display has failed but the phone itself is fine. Before panicking, try a forced restart — this fixes a surprising number of black screen issues that are just software glitches rather than hardware failure.",
    steps: [
      {
        number: 1,
        title: "Force restart the phone",
        description:
          "Press and hold the Power button and Volume Down button together for 10-15 seconds. Wait for the phone to vibrate and release. This forces a hard reboot and fixes many black screen issues caused by software crashes. Wait 30 seconds for the screen to come back.",
      },
      {
        number: 2,
        title: "Check the brightness and screen settings",
        description:
          "If the forced restart brought the screen back, swipe down from the top to check brightness. Auto-brightness can sometimes go haywire. Also check if the screen timeout is set extremely short. If the screen came back but is very dim, the backlight may be partially failing.",
      },
      {
        number: 3,
        title: "Boot into Safe Mode",
        description:
          "If the screen comes on during boot (you see the Samsung logo) but goes black after, a third-party app may be crashing the display. To enter Safe Mode: press and hold Power until the Samsung logo appears, then immediately hold Volume Down until it finishes booting. If the screen works in Safe Mode, uninstall recently added apps.",
      },
      {
        number: 4,
        title: "Connect to a TV or monitor",
        description:
          "If the screen stays black, connect the phone to a TV using a USB-C to HDMI adapter (Samsung DeX). If the phone's display shows on the TV, the phone is fine but the screen hardware has failed. You can use this to back up your data before getting the screen repaired.",
      },
      {
        number: 5,
        title: "Evaluate screen replacement",
        description:
          "If none of the software fixes work, the screen (AMOLED panel) needs replacing. Samsung screen repair costs vary widely by model — $100–$300 at Samsung or an authorized shop. Third-party shops are often cheaper but may use non-original parts. Check if you have Samsung Care+ or phone insurance before paying out of pocket.",
      },
    ],
    alternativeCauses: [
      "Water damage can short out the display connector internally.",
      "A drop that didn't crack the glass can still damage the AMOLED panel underneath.",
      "A failing motherboard can cut power to the display while the rest of the phone works.",
    ],
    whenToCallPro:
      "Screen replacement on Samsung Galaxy phones requires specialized tools and experience with fragile ribbon cables. This is not a beginner repair. An authorized Samsung repair center is the safest option. Budget $100–$300 depending on the model. If the phone is over 3 years old, compare the repair cost to a new or refurbished phone.",
    metaTitle:
      "Samsung Galaxy Black Screen but Phone Still Works — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Samsung Galaxy with a black screen that still rings and receives calls. Try these software fixes before paying for screen replacement.",
  },
  {
    id: "iphone-boot-loop-stuck-apple-logo",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "boot-loop-stuck-on-apple-logo",
    problemTitle: "Boot Loop — Stuck on Apple Logo",
    difficulty: "Medium",
    timeEstimate: "15-60 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Lightning or USB-C cable",
      "Computer with iTunes/Finder",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Using DFU restore will erase all data on the phone if you don't have a backup.",
      "Make sure your computer has the latest version of iTunes (Windows) or macOS before attempting a restore.",
    ],
    quickDiagnosis:
      "An iPhone stuck in a boot loop — showing the Apple logo, going black, then showing the Apple logo again — is almost always a software issue caused by a failed update, a buggy app, or corrupted system files. In most cases, you can fix this yourself with a forced restart or a restore through your computer. No parts needed.",
    steps: [
      {
        number: 1,
        title: "Force restart the iPhone",
        description:
          "For iPhone 8 and newer: quickly press and release Volume Up, quickly press and release Volume Down, then press and hold the Side button until the Apple logo appears (keep holding for 10-15 seconds even if the screen goes black). For iPhone 7: hold Volume Down and Side button together for 10 seconds. This fixes minor software glitches.",
      },
      {
        number: 2,
        title: "Let the battery drain completely",
        description:
          "If the force restart didn't work, let the phone sit until the battery dies completely. Then charge it for at least 30 minutes and try turning it on. Sometimes a full power cycle clears the issue.",
      },
      {
        number: 3,
        title: "Try Recovery Mode restore",
        description:
          "Connect the phone to a computer with a USB cable. Open Finder (Mac) or iTunes (Windows). Force restart the phone using the button sequence from Step 1, but keep holding the Side button even after the Apple logo appears — hold until you see the Recovery Mode screen (cable and computer icon). Your computer will offer to Update or Restore. Try Update first — it reinstalls iOS without erasing data.",
      },
      {
        number: 4,
        title: "Try DFU Mode restore (if Recovery Mode failed)",
        description:
          "DFU (Device Firmware Update) mode is a deeper restore. Connect to your computer. For iPhone 8+: press Volume Up, Volume Down, then hold Side button for 10 seconds. While holding Side, also hold Volume Down for 5 seconds. Release Side but keep holding Volume Down for 10 more seconds. The phone screen should stay black but your computer will detect it. Click Restore.",
      },
      {
        number: 5,
        title: "Restore from backup",
        description:
          "After the DFU restore completes, your iPhone will be like new. Set it up and restore from an iCloud or computer backup. If the boot loop returns after restoring a backup, the backup itself may contain the corrupted data — set up as new instead and restore data manually.",
      },
    ],
    alternativeCauses: [
      "A failed iOS update is the most common cause — the update corrupted during installation.",
      "A jailbreak gone wrong can cause boot loops.",
      "In rare cases, failing NAND storage (the phone's internal memory chip) causes repeated boot failures. This is a hardware issue that requires professional repair.",
    ],
    whenToCallPro:
      "If DFU restore fails or the phone isn't detected by the computer at all, there may be a hardware issue with the logic board or storage chip. Apple charges $200–$600 for out-of-warranty repairs depending on the model. A third-party repair shop may be able to do board-level repair for less. If the phone is important, make sure you've exhausted all software options first.",
    metaTitle:
      "iPhone Boot Loop — Stuck on Apple Logo — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix an iPhone stuck in a boot loop on the Apple logo. Step-by-step guide covering force restart, Recovery Mode, and DFU restore. Free fix.",
  },
  {
    id: "iphone-ghost-touch-screen-tapping",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "ghost-touch-screen-tapping-itself",
    problemTitle: "Ghost Touch — Screen Tapping by Itself",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Microfiber cloth",
      "Screen protector removal tool (if applicable)",
    ],
    partsNeeded: [
      {
        name: "Replacement Screen Protector",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=iphone+tempered+glass+screen+protector&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=iphone+tempered+glass+screen+protector&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If the screen is cracked, be careful of glass splinters.",
      "Do not use the phone while charging if ghost touch is severe — it could make unintended purchases or send messages.",
    ],
    quickDiagnosis:
      "Ghost touch means the screen registers taps you didn't make — apps open randomly, text gets typed on its own, or the screen jumps around. This can be caused by a bad screen protector, a cracked screen, a software glitch, or a faulty digitizer. Start with the free fixes before assuming you need a new screen.",
    steps: [
      {
        number: 1,
        title: "Clean the screen thoroughly",
        description:
          "Turn off the phone. Use a microfiber cloth to wipe the screen clean. Moisture, oil, and debris can cause false touches. Make sure the screen is completely dry. Turn the phone back on and test.",
      },
      {
        number: 2,
        title: "Remove the screen protector",
        description:
          "A damaged, bubbling, or poorly applied screen protector is one of the most common causes of ghost touch. Remove it completely. Clean the screen underneath. Test the phone without any protector. If ghost touch stops, get a new, quality tempered glass protector and apply it carefully without bubbles.",
      },
      {
        number: 3,
        title: "Force restart the phone",
        description:
          "Quick press Volume Up, quick press Volume Down, then hold the Side button until the Apple logo appears. Software glitches can cause ghost touch, and a restart clears them. If it only happens with certain apps, those apps may be the issue — delete and reinstall them.",
      },
      {
        number: 4,
        title: "Update iOS",
        description:
          "Go to Settings > General > Software Update. Apple has released fixes for ghost touch issues on specific models (notably iPhone X and iPhone 11). Make sure you're running the latest iOS version.",
      },
      {
        number: 5,
        title: "Reset all settings",
        description:
          "Go to Settings > General > Transfer or Reset iPhone > Reset > Reset All Settings. This resets touch sensitivity and display settings without deleting your data. If ghost touch was caused by a corrupted setting, this fixes it.",
      },
      {
        number: 6,
        title: "Check for screen damage",
        description:
          "If none of the above worked, inspect the screen carefully for hairline cracks, especially around the edges. A cracked digitizer causes ghost touch even if the display looks fine. Also check if the phone was exposed to water recently. If the screen is damaged, it needs professional replacement.",
      },
    ],
    alternativeCauses: [
      "Using a cheap third-party charger can cause electrical interference that triggers ghost touch — try a different charger.",
      "The iPhone X had a known ghost touch issue due to a faulty display module — Apple offered a free repair program for this.",
      "Extreme heat or cold can temporarily cause touch sensitivity issues.",
    ],
    whenToCallPro:
      "If ghost touch persists after all software fixes and with the screen protector removed, the digitizer (touch layer of the screen) is faulty. Screen replacement costs $80–$200 at Apple or $50–$120 at a third-party shop. Check if your model is covered under any Apple repair programs — some iPhone X and iPhone 11 models qualify for free display replacement.",
    metaTitle:
      "iPhone Ghost Touch — Screen Tapping by Itself — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix iPhone ghost touch where the screen taps by itself. Step-by-step software fixes and diagnosis before paying for screen replacement.",
  },
  {
    id: "generic-phone-swollen-battery",
    category: "Android Phones",
    categorySlug: "android-phones",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "swollen-battery-safety",
    problemTitle: "Swollen Battery — Is It Safe / What to Do",
    difficulty: "Hard",
    timeEstimate: "Varies",
    costEstimate: "$0–$50",
    toolsNeeded: [],
    partsNeeded: [
      {
        name: "Replacement Battery (model-specific)",
        costRange: "$10–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=phone+replacement+battery&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=phone+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: A swollen battery can catch fire or explode. Do not puncture, bend, or crush it.",
      "Do not charge a phone with a swollen battery. Unplug it immediately if it's charging.",
      "Do not leave a swollen battery phone on flammable surfaces like a bed, couch, or in a car.",
      "Store the phone in a cool, dry place away from heat sources while you decide what to do.",
      "If the battery is leaking fluid, do not touch the fluid — it's corrosive. Wear gloves.",
    ],
    quickDiagnosis:
      "A swollen battery is a lithium-ion battery that has expanded due to gas buildup inside. You'll notice the back of the phone bulging, the screen lifting away from the frame, or the phone rocking on a flat surface. This is a serious safety issue. The phone should not be used or charged until the battery is replaced. Do not ignore this.",
    steps: [
      {
        number: 1,
        title: "Stop using the phone immediately",
        description:
          "Power off the phone. Do not plug it in to charge. Do not leave it in your pocket. A swollen battery is at risk of thermal runaway, which means it can overheat, catch fire, or in extreme cases, explode. Take this seriously.",
      },
      {
        number: 2,
        title: "Place it somewhere safe",
        description:
          "Put the phone on a non-flammable surface — a concrete floor, a metal tray, or a ceramic plate. Keep it away from paper, fabric, and other flammable materials. Don't put it in an enclosed space like a drawer or bag. If you have a fireproof bag or container, use it.",
      },
      {
        number: 3,
        title: "Decide: professional repair or replacement",
        description:
          "For most people, taking the phone to a repair shop is the safest option. They have the tools and experience to safely remove a swollen battery. Apple stores, Samsung service centers, and uBreakiFix all handle this. Battery replacement typically costs $30–$80. Compare that to the value of the phone.",
      },
      {
        number: 4,
        title: "DIY battery replacement (experienced only)",
        description:
          "If you're experienced with phone repair and have the right tools, you can replace the battery yourself. Order a replacement battery for your specific model. Use a heat gun to soften the adhesive holding the battery. Pry very carefully — do not puncture the swollen battery. Work in a well-ventilated area. Have a bucket of sand nearby in case of fire. This is genuinely risky.",
      },
      {
        number: 5,
        title: "Dispose of the old battery properly",
        description:
          "Do NOT throw a swollen battery in the regular trash. Take it to a battery recycling drop-off point. Best Buy, Home Depot, and Staples all accept lithium-ion batteries for recycling. Many municipal recycling centers do too. Place the battery in a non-flammable container for transport.",
      },
    ],
    alternativeCauses: [
      "Overcharging or using a cheap third-party charger is a common cause of battery swelling.",
      "Age — batteries degrade over time. After 2-3 years of heavy use, swelling becomes more likely.",
      "Manufacturing defect — some battery batches are prone to early swelling.",
      "Extreme heat exposure (leaving phone in a hot car) accelerates battery degradation.",
    ],
    whenToCallPro:
      "Always recommended for swollen battery removal. A repair shop has the tools to safely remove the battery without puncturing it. Apple charges $50–$100 for battery replacement. Third-party shops are often $30–$60. If the phone is very old, it may be more cost-effective to replace the phone entirely.",
    metaTitle:
      "Phone Battery Swollen — Is It Safe? What to Do | RepairItFree",
    metaDescription:
      "What to do when your phone battery is swollen. Critical safety steps, disposal guide, and repair options. Important safety information.",
  },

  // ============================================================
  // META / UTILITY
  // ============================================================
  {
    id: "generic-how-to-find-appliance-model-number",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "how-to-find-model-number",
    problemTitle: "How to Find Your Appliance Model Number",
    difficulty: "Easy",
    timeEstimate: "5-10 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Flashlight",
      "Phone (to take a photo of the label)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the appliance before reaching behind it or opening any panels.",
      "Be careful reaching into tight spaces — sharp metal edges are common inside appliances.",
    ],
    quickDiagnosis:
      "Your model number is the single most important piece of information for any repair. It tells you exactly which parts fit your appliance, which guides apply, and what error codes mean. Every appliance has a model number label — you just need to know where to look. This guide covers the most common locations for all major appliance types.",
    steps: [
      {
        number: 1,
        title: "Check the door or lid area",
        description:
          "For washing machines and dryers: open the door or lid and look around the frame. On front-load washers, the label is usually on the inner door frame or the front edge of the tub opening. On top-load washers, check under the lid. On dryers, check inside the door frame. For dishwashers, open the door and look along the top edge or inside the door panel.",
      },
      {
        number: 2,
        title: "Check the back of the appliance",
        description:
          "For refrigerators: look inside the fridge on the side wall, or behind the vegetable drawers. Some models have it on the back exterior. For ovens and ranges: pull the bottom drawer out and look on the frame. Some have the label inside the oven door. For microwaves: check inside the door or on the back.",
      },
      {
        number: 3,
        title: "Understand the label",
        description:
          "The label will show the Model Number (sometimes labeled MOD or M/N), the Serial Number (S/N), and sometimes a Type number. Write down the complete model number — every letter and number matters. Take a photo of the entire label so you always have it handy.",
      },
      {
        number: 4,
        title: "If the label is gone or unreadable",
        description:
          "Labels fall off or fade over time. If yours is gone, check your purchase receipt or email for the model number. You can also try logging into your account with the store you bought it from (Home Depot, Lowes, etc.) to see order details. Some manufacturers let you look up your appliance by serial number on their website.",
      },
      {
        number: 5,
        title: "Use the model number to find parts and guides",
        description:
          "Once you have the model number, search for it on sites like RepairClinic.com, PartSelect.com, or AppliancePartsPros.com to find compatible parts. On RepairItFree, knowing your model number helps you find the most accurate guide and order the exact right parts.",
      },
    ],
    alternativeCauses: [],
    whenToCallPro:
      "You don't need a professional for this — but if you can't find the model number and need repair help, a technician can usually identify the appliance model by its appearance and internal components.",
    metaTitle:
      "How to Find Your Appliance Model Number — Guide | RepairItFree",
    metaDescription:
      "Find the model number on any appliance — washer, dryer, fridge, dishwasher, oven. Covers all brands and appliance types. Takes under 5 minutes.",
  },
  {
    id: "generic-garbage-disposal-humming-not-spinning",
    category: "Garbage Disposals",
    categorySlug: "garbage-disposals",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "humming-but-not-spinning",
    problemTitle: "Humming but Not Spinning",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Allen wrench (1/4 inch hex key — usually included with the disposal)",
      "Flashlight",
      "Tongs or pliers",
    ],
    partsNeeded: [
      {
        name: "Garbage Disposal Allen Wrench / Jam-Buster Wrench",
        costRange: "$3–$5",
        amazonUrl:
          "https://www.amazon.com/s?k=garbage+disposal+wrench+allen+key&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=garbage+disposal+wrench&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "NEVER put your hand inside a garbage disposal — even when it's off.",
      "Turn off the wall switch AND unplug the disposal (or flip the circuit breaker) before doing anything.",
      "If the disposal smells like burning or is smoking, stop using it and unplug it immediately.",
    ],
    quickDiagnosis:
      "When a garbage disposal hums but the blades won't spin, something is jammed between the impeller plate and the grind ring. The motor is trying to turn but can't. This is the most common garbage disposal problem and it's almost always a free fix. You just need to free the jam and reset the unit.",
    steps: [
      {
        number: 1,
        title: "Turn off the disposal completely",
        description:
          "Flip the wall switch off. Then unplug the disposal from under the sink (or turn off the circuit breaker). Never work on a disposal that has power. Even with the switch off, it's safer to cut all power.",
      },
      {
        number: 2,
        title: "Use the wrench to free the jam from below",
        description:
          "Look at the very bottom of the disposal unit under the sink. You'll see a hex-shaped hole in the center. Insert a 1/4 inch Allen wrench (most disposals include one — check the side of the unit or your junk drawer). Turn the wrench back and forth. This manually rotates the impeller plate and usually dislodges whatever is stuck.",
      },
      {
        number: 3,
        title: "Remove the obstruction from above",
        description:
          "With the power still off, shine a flashlight down the drain into the disposal. Look for the object causing the jam — it's often a bone, fruit pit, piece of glass, or a small utensil. Use tongs or pliers (NEVER your fingers) to pull it out.",
      },
      {
        number: 4,
        title: "Press the reset button",
        description:
          "Find the small red reset button on the bottom of the disposal. If it has popped out, push it back in. This resets the built-in circuit breaker that tripped when the motor stalled. If the button won't stay in, wait 10 minutes for the motor to cool down and try again.",
      },
      {
        number: 5,
        title: "Test the disposal",
        description:
          "Restore power. Turn on the cold water. Flip the wall switch. The disposal should spin freely now. Run cold water for 30 seconds while it runs to flush out debris. If it hums but still won't spin, repeat the wrench step — the jam may not be fully cleared.",
      },
    ],
    alternativeCauses: [
      "If the disposal doesn't hum at all (completely silent), check the reset button and circuit breaker first, then the wall switch.",
      "A disposal that hums and trips the reset button repeatedly may have a burnt-out motor — common in units over 10 years old.",
      "Frequent jams can mean the impeller plate or grind ring is worn and isn't grinding effectively.",
    ],
    whenToCallPro:
      "If the motor is burned out (smells like burning, smokes, or won't spin even after clearing the jam), the disposal needs replacing. A new garbage disposal costs $75–$200 installed, or $50–$150 for the unit alone if you DIY the swap. For basic plumbing-savvy homeowners, replacement is a 1-hour project.",
    metaTitle:
      "Garbage Disposal Humming but Not Spinning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a garbage disposal that hums but won't spin. Easy 10-minute fix using an Allen wrench. Step-by-step guide for all brands. Free fix.",
  },
];
