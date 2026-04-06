import { Guide } from "@/lib/types";

export const batch001Guides: Guide[] = [
  // ============================================================
  // GARBAGE DISPOSALS
  // ============================================================
  {
    id: "insinkerator-garbage-disposal-not-turning-on",
    category: "Garbage Disposals",
    categorySlug: "garbage-disposals",
    brand: "InSinkErator",
    brandSlug: "insinkerator",
    problemSlug: "not-turning-on",
    problemTitle: "Not Turning On",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Allen wrench (1/4 inch, usually included with unit)", "Flashlight"],
    partsNeeded: [
      {
        name: "InSinkErator Jam-Buster Wrench (if missing)",
        costRange: "$3–$6",
        amazonUrl:
          "https://www.amazon.com/s?k=insinkerator+wrenchette+allen+wrench&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=insinkerator+wrenchette+allen+wrench&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "NEVER put your hand inside a garbage disposal, even if it appears to be off.",
      "Turn off the wall switch and unplug the unit (or flip the breaker) before doing anything.",
    ],
    quickDiagnosis:
      "When an InSinkErator garbage disposal won't turn on, it has almost always tripped its internal overload protector. This happens when the motor overheats — usually because something jammed the blades. The fix takes about 2 minutes and costs nothing.",
    steps: [
      {
        number: 1,
        title: "Turn off the wall switch",
        description:
          "Make sure the disposal switch is in the OFF position. Do not skip this step.",
      },
      {
        number: 2,
        title: "Press the reset button",
        description:
          "Look at the bottom of the disposal unit under the sink. You'll see a small red or black button. Press it in firmly. This is the overload reset. If it clicks, that was your problem.",
      },
      {
        number: 3,
        title: "Clear the jam with the Allen wrench",
        description:
          "Insert a 1/4-inch Allen wrench into the hex hole on the bottom center of the disposal. Crank it back and forth to free the grinding plate. You'll feel resistance at first, then it should spin freely.",
      },
      {
        number: 4,
        title: "Remove the obstruction",
        description:
          "Use a flashlight to look inside from the top. With the power OFF, use tongs or pliers (never your fingers) to pull out whatever jammed it — a bone, fruit pit, utensil, etc.",
      },
      {
        number: 5,
        title: "Test it",
        description:
          "Turn on the cold water, flip the switch, and run the disposal. If it hums but doesn't spin, it's still jammed — repeat step 3. If it does nothing at all, check the breaker in your electrical panel.",
      },
    ],
    alternativeCauses: [
      "The wall switch itself may be faulty — test by plugging a lamp into the disposal outlet.",
      "The circuit breaker for the disposal may have tripped. Check your electrical panel.",
      "If the motor hums but won't spin even after clearing the jam, the motor bearings may be seized.",
    ],
    whenToCallPro:
      "If the motor is completely dead after resetting and checking the breaker, the disposal likely needs replacement. A new InSinkErator costs $80-200 and a plumber charges $100-200 to install it. Many handy homeowners can do the swap themselves.",
    metaTitle:
      "InSinkErator Garbage Disposal Not Turning On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your InSinkErator garbage disposal that won't turn on. Step-by-step guide with reset instructions. Difficulty: Easy. Save $150+.",
  },
  {
    id: "insinkerator-garbage-disposal-humming-not-spinning",
    category: "Garbage Disposals",
    categorySlug: "garbage-disposals",
    brand: "InSinkErator",
    brandSlug: "insinkerator",
    problemSlug: "humming-not-spinning",
    problemTitle: "Humming But Not Spinning",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$6",
    toolsNeeded: [
      "Allen wrench (1/4 inch)",
      "Tongs or pliers",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Garbage Disposal Wrench",
        costRange: "$3–$6",
        amazonUrl:
          "https://www.amazon.com/s?k=garbage+disposal+wrench+tool&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=garbage+disposal+wrench+tool&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "NEVER reach into a garbage disposal with your hand.",
      "Turn off the wall switch AND unplug or flip the breaker before attempting to clear a jam.",
    ],
    quickDiagnosis:
      "A garbage disposal that hums but doesn't spin is jammed. The motor is trying to run but something is blocking the impeller plate from turning. This is one of the most common disposal problems and is almost always fixable in minutes with an Allen wrench.",
    steps: [
      {
        number: 1,
        title: "Turn off the switch immediately",
        description:
          "If the disposal is humming, turn it off right away. Leaving it running while jammed will overheat the motor and trip the overload protector — or worse, burn out the motor.",
      },
      {
        number: 2,
        title: "Unplug or cut power",
        description:
          "Unplug the disposal from the outlet under the sink, or flip the circuit breaker. Verify it's dead by trying the switch.",
      },
      {
        number: 3,
        title: "Use the Allen wrench from below",
        description:
          "Insert a 1/4-inch Allen wrench into the hex socket at the bottom center of the disposal. Work it back and forth. You're manually rotating the grinding plate to dislodge whatever is stuck.",
      },
      {
        number: 4,
        title: "Remove the jammed object from above",
        description:
          "Shine a flashlight into the disposal from the sink drain. Use tongs or needle-nose pliers to pull out the obstruction. Common culprits: bones, peach pits, broken glass, small utensils, or a bottle cap.",
      },
      {
        number: 5,
        title: "Press the reset button and test",
        description:
          "Press the red reset button on the bottom of the unit. Restore power, run cold water, and flip the switch. It should spin freely now.",
      },
    ],
    alternativeCauses: [
      "Glass shards can wedge in the impeller. Shine a light and check carefully.",
      "Rust buildup can seize the flywheel if the disposal hasn't been used in a long time.",
      "The flywheel bearing may be failing if it jams repeatedly with no obstruction found.",
    ],
    whenToCallPro:
      "If the disposal jams repeatedly even after clearing it, the internal components may be worn out. Replacement units cost $80-200 and installation runs $100-200. If your unit is over 10 years old, replacement is usually smarter than repair.",
    metaTitle:
      "Garbage Disposal Humming But Not Spinning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a garbage disposal that hums but won't spin. Step-by-step unjamming guide. Difficulty: Easy. Save $150+.",
  },

  // ============================================================
  // CEILING FANS
  // ============================================================
  {
    id: "hampton-bay-ceiling-fan-not-working",
    category: "Ceiling Fans",
    categorySlug: "ceiling-fans",
    brand: "Hampton Bay",
    brandSlug: "hampton-bay",
    problemSlug: "not-working",
    problemTitle: "Not Working (No Spin, No Light)",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Ladder",
      "Voltage tester",
      "Screwdriver set",
    ],
    partsNeeded: [
      {
        name: "Ceiling Fan Capacitor (if needed)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=hampton+bay+ceiling+fan+capacitor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=hampton+bay+ceiling+fan+capacitor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the circuit breaker for the fan — do NOT just use the wall switch.",
      "Use a voltage tester to confirm power is off before touching any wires.",
      "Make sure your ladder is on a stable, flat surface.",
    ],
    quickDiagnosis:
      "When a Hampton Bay ceiling fan stops working completely, the most common causes are a tripped breaker, a bad wall switch, or a faulty pull chain switch inside the fan. If the light works but the fan doesn't spin, the capacitor is likely blown.",
    steps: [
      {
        number: 1,
        title: "Check the breaker and wall switch",
        description:
          "Make sure the circuit breaker is on. Try toggling the wall switch off and on. If you have a remote-controlled fan, replace the remote batteries first — this is the fix about 30% of the time.",
      },
      {
        number: 2,
        title: "Check the pull chains",
        description:
          "Most Hampton Bay fans have two pull chains — one for the fan speed and one for the light. Make sure the fan chain is set to a speed (not off). Try pulling it through all positions.",
      },
      {
        number: 3,
        title: "Turn off the breaker and remove the fan canopy",
        description:
          "Flip the breaker off. Climb up and loosen the screws holding the decorative canopy cover against the ceiling. Slide it down to expose the wiring connections.",
      },
      {
        number: 4,
        title: "Check wire connections",
        description:
          "Look for any loose wire nuts or disconnected wires. Push all connections firmly together and retighten wire nuts. A loose wire connection is the second most common cause.",
      },
      {
        number: 5,
        title: "Test the capacitor (if fan hums but won't spin)",
        description:
          "If the fan hums but the blades won't turn, the capacitor has likely failed. It's a small black or silver component inside the fan housing. Note its capacitance values (printed on it), order a matching replacement, and swap it — it just has wire connectors.",
      },
      {
        number: 6,
        title: "Restore power and test",
        description:
          "Slide the canopy back up, tighten the screws, flip the breaker back on, and test all fan speeds and the light.",
      },
    ],
    alternativeCauses: [
      "The receiver module (on remote-controlled models) may have failed. Try re-syncing the remote using the dip switches inside the fan and remote.",
      "A faulty wall switch can cut power to the fan. Try bypassing the switch temporarily by wiring the fan hot wire directly to the supply wire.",
      "The fan motor can burn out, though this is less common. You'll usually smell a burning odor if this happens.",
    ],
    whenToCallPro:
      "If you're not comfortable working with electrical wiring above your head, hire an electrician. Ceiling fan repair typically costs $100-200 for a service call. If the motor is burned out, it's cheaper to replace the whole fan ($50-150) than to rewind a motor.",
    metaTitle:
      "Hampton Bay Ceiling Fan Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Hampton Bay ceiling fan that won't spin or light up. Step-by-step guide with parts list. Difficulty: Medium. Save $150+.",
  },
  {
    id: "hunter-ceiling-fan-wobbling",
    category: "Ceiling Fans",
    categorySlug: "ceiling-fans",
    brand: "Hunter",
    brandSlug: "hunter",
    problemSlug: "wobbling",
    problemTitle: "Wobbling and Shaking",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$8",
    toolsNeeded: [
      "Ladder",
      "Screwdriver",
      "Ruler or yardstick",
    ],
    partsNeeded: [
      {
        name: "Ceiling Fan Balancing Kit",
        costRange: "$5–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=ceiling+fan+balancing+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ceiling+fan+balancing+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the fan before climbing a ladder near it.",
      "Use a stable ladder — wobbling fan blades can be startling at close range.",
    ],
    quickDiagnosis:
      "A wobbling Hunter ceiling fan is almost always caused by blade imbalance or loose screws. This is not dangerous in the short term, but it wears out the motor bearings faster and creates annoying noise. The fix is simple and usually free.",
    steps: [
      {
        number: 1,
        title: "Tighten all blade screws",
        description:
          "Turn the fan off. Climb up and tighten every screw where the blades attach to the blade brackets, and where the brackets attach to the motor. Loose screws are the cause about 50% of the time.",
      },
      {
        number: 2,
        title: "Check that all blades are straight",
        description:
          "Hold a yardstick vertically so it just touches the tip of one blade. Slowly rotate the fan by hand and see if each blade tip is the same distance from the ceiling. If one blade is higher or lower, gently bend its bracket to match the others.",
      },
      {
        number: 3,
        title: "Check for warped blades",
        description:
          "Lay each blade flat on a table. If one doesn't sit flat and rocks back and forth, it's warped. Swap it to the opposite side of the fan to see if balance improves. Heavily warped blades should be replaced.",
      },
      {
        number: 4,
        title: "Use a balancing kit",
        description:
          "Attach the balancing clip to one blade at a time and run the fan to see which blade reduces wobble the most. Once you find the problem blade, slide the clip along it to find the sweet spot. Stick the adhesive weight from the kit at that spot on the top of the blade.",
      },
      {
        number: 5,
        title: "Check the mounting bracket",
        description:
          "If the whole fan moves (not just the blades), the ceiling mounting bracket may be loose. Turn off the breaker, remove the canopy, and tighten the bracket screws into the ceiling joist or fan-rated electrical box.",
      },
    ],
    alternativeCauses: [
      "Dust buildup on blades can cause imbalance — clean all blades evenly with a damp cloth.",
      "A fan mounted to a standard electrical box (instead of a fan-rated box) can wobble because the box can't support the weight.",
      "Worn motor bearings cause wobble that gets worse over time. If oiling the motor doesn't help, the fan may need replacement.",
    ],
    whenToCallPro:
      "If the mounting bracket is loose and you can see the electrical box moving in the ceiling, you need a fan-rated box installed — that's an electrician job ($75-150). If the motor bearings are shot, it's cheaper to replace the fan than the motor.",
    metaTitle:
      "Hunter Ceiling Fan Wobbling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a wobbling Hunter ceiling fan. Step-by-step balancing guide. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // VACUUM CLEANERS
  // ============================================================
  {
    id: "dyson-v15-vacuum-not-spinning",
    category: "Vacuum Cleaners",
    categorySlug: "vacuum-cleaners",
    brand: "Dyson",
    brandSlug: "dyson",
    problemSlug: "brush-bar-not-spinning",
    problemTitle: "Brush Bar Not Spinning",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: ["Scissors", "Coin (for lock mechanism)"],
    partsNeeded: [
      {
        name: "Dyson Brush Bar Replacement",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=dyson+v15+brush+bar+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dyson+v15+brush+bar+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Remove the battery or ensure the vacuum is powered off before working on the brush bar.",
      "Be careful when cutting away tangled hair — cut away from yourself.",
    ],
    quickDiagnosis:
      "When a Dyson V15 brush bar stops spinning, it's usually because hair and fibers have wrapped around it so tightly that the motor can't turn it. Dyson vacuums have an automatic shutoff that stops the brush bar when it detects a blockage. A good cleaning almost always fixes this.",
    steps: [
      {
        number: 1,
        title: "Lay the vacuum flat and remove the cleaner head",
        description:
          "Turn off the vacuum and detach the cleaner head from the wand. Lay it upside down so you can see the brush bar.",
      },
      {
        number: 2,
        title: "Remove the brush bar",
        description:
          "Use a coin to turn the lock on the side of the cleaner head. The brush bar slides right out. On the V15, there's a red tab — turn it to the unlock position.",
      },
      {
        number: 3,
        title: "Cut away all wrapped hair and fibers",
        description:
          "Use scissors to carefully cut along the length of the brush bar to slice through tangled hair. Pull it all off. Clean both ends where the bar sits in the housing — hair buildup here prevents spinning.",
      },
      {
        number: 4,
        title: "Check for blockages in the cleaner head",
        description:
          "Look into the cleaner head housing. Remove any debris caught in there. Check that the small drive belt (if your model has one) isn't broken or stretched.",
      },
      {
        number: 5,
        title: "Reinstall and test",
        description:
          "Slide the brush bar back in and lock it with the coin. Reattach the head to the wand, turn the vacuum on, and confirm the bar spins. The green light on the display means it's working.",
      },
    ],
    alternativeCauses: [
      "A blockage in the wand or bin inlet can trigger the auto-shutoff. Check for clogs by looking through the wand like a telescope.",
      "A weak or dying battery may not provide enough power for the brush motor. If battery life is under 5 minutes, replace the battery.",
      "The brush bar motor itself can fail, though this is rare under 3 years of use.",
    ],
    whenToCallPro:
      "Dyson offers free repairs under their 2-year warranty. If the brush bar motor has failed out of warranty, a replacement cleaner head costs $60-100 from Dyson. Third-party repair shops may charge $40-60 for motor repair.",
    metaTitle:
      "Dyson V15 Brush Bar Not Spinning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Dyson V15 vacuum brush bar that won't spin. Step-by-step cleaning guide. Difficulty: Easy. Save $100+.",
  },
  {
    id: "dyson-vacuum-loss-of-suction",
    category: "Vacuum Cleaners",
    categorySlug: "vacuum-cleaners",
    brand: "Dyson",
    brandSlug: "dyson",
    problemSlug: "loss-of-suction",
    problemTitle: "Loss of Suction",
    difficulty: "Easy",
    timeEstimate: "15-25 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: ["None required"],
    partsNeeded: [
      {
        name: "Dyson Replacement Filter",
        costRange: "$15–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=dyson+cordless+vacuum+filter+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dyson+cordless+vacuum+filter+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Wash filters over a sink — they release a lot of fine dust.",
      "Let filters dry completely (24 hours minimum) before reinstalling to avoid damaging the motor.",
    ],
    quickDiagnosis:
      "Loss of suction on a Dyson vacuum is almost always caused by a dirty filter, a full bin, or a blockage somewhere in the airpath. Dyson filters need to be washed monthly, but most people never wash them. A quick filter wash restores full suction about 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Empty the dust bin completely",
        description:
          "Even if it doesn't look full, empty the bin. The max-fill line is lower than you think. Press the red bin release and dump it into a trash bag. Wipe the inside with a dry cloth.",
      },
      {
        number: 2,
        title: "Wash the filter",
        description:
          "Remove the filter (usually at the top of the unit by twisting it counterclockwise). Run it under cold water only — no soap. Squeeze it gently until the water runs clear. This takes a few minutes. Let it dry for a full 24 hours.",
      },
      {
        number: 3,
        title: "Check for blockages",
        description:
          "Detach the wand from the machine and the cleaner head. Look through each piece for clogs. Drop a coin through the wand — it should fall straight through. Check the bin inlet and the cyclone entry point.",
      },
      {
        number: 4,
        title: "Check the seals",
        description:
          "Make sure the bin clicks firmly into place. Check that the rubber seals around the bin and filter aren't cracked or missing. Air leaks kill suction.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Once the filter is fully dry, reinstall everything. Test on max power. You should feel strong suction at the end of the wand. If suction is restored, make a note to wash the filter monthly.",
      },
    ],
    alternativeCauses: [
      "A cracked or damaged bin won't seal properly and lets air bypass the cyclone.",
      "On corded models, the hose may have a split or hole — run your hand along it while the vacuum is on to feel for air leaks.",
      "The cyclone assembly can get clogged with fine dust over time. Tap it firmly over a bin to dislodge packed dust.",
    ],
    whenToCallPro:
      "If suction is still weak after a clean filter, empty bin, and no blockages, the motor may be failing. A Dyson motor replacement is $80-150 and isn't a DIY job. Check your warranty first — Dyson covers motor defects for 2 years (5 years on some models).",
    metaTitle:
      "Dyson Vacuum Loss of Suction — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to restore suction on your Dyson vacuum. Step-by-step filter cleaning and blockage guide. Difficulty: Easy. Save $100+.",
  },
  {
    id: "shark-vacuum-brush-roll-not-spinning",
    category: "Vacuum Cleaners",
    categorySlug: "vacuum-cleaners",
    brand: "Shark",
    brandSlug: "shark",
    problemSlug: "brush-roll-not-spinning",
    problemTitle: "Brush Roll Not Spinning",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: ["Scissors", "Screwdriver (Phillips)"],
    partsNeeded: [
      {
        name: "Shark Brush Roll Replacement",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=shark+vacuum+brush+roll+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=shark+vacuum+brush+roll+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the vacuum before working on the brush roll.",
      "Be careful with scissors near the rubber belt.",
    ],
    quickDiagnosis:
      "A Shark vacuum brush roll that won't spin is almost always caused by tangled hair wrapping around the roll or a worn-out belt. Shark's brush roll indicator light turns red when there's a problem. Clearing hair is free, and a new belt costs under $10.",
    steps: [
      {
        number: 1,
        title: "Unplug the vacuum and lay it flat",
        description:
          "For cordless models, remove the battery. Lay the vacuum down so you can see the bottom of the floor nozzle.",
      },
      {
        number: 2,
        title: "Remove the brush roll cover",
        description:
          "Many Shark models have a removable cover plate held by screws or clips. Remove it to access the brush roll. On Shark Rotator models, press the two release tabs and lift the roll out.",
      },
      {
        number: 3,
        title: "Pull out the brush roll and clean it",
        description:
          "Slide the brush roll out. Use scissors to cut through all hair wound around it. Pull off every strand. Clean the end caps — hair packed in the bearings is the number one cause of failure.",
      },
      {
        number: 4,
        title: "Check the belt",
        description:
          "Inspect the rubber drive belt. If it's stretched, cracked, or broken, replace it. Belts should be taut when installed — if you can stretch it easily by hand, it's worn out. Replacement belts are model-specific, so check your model number.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Reinstall the belt, brush roll, and cover plate. Plug in and turn on. The brush roll indicator light should turn green. If the roll spins freely, you're done.",
      },
    ],
    alternativeCauses: [
      "The floor nozzle switch may be set to 'hard floor' mode, which disables the brush roll on some models.",
      "A blockage in the suction path causes some Shark models to shut off the brush roll as a safety feature.",
      "The brush roll motor on cordless models can fail — if the roll is clean and the belt is fine, the motor may need replacement.",
    ],
    whenToCallPro:
      "Shark offers a 5-year warranty on most vacuums. Contact them first for free replacement parts. If the brush roll motor has died out of warranty, replacement nozzle assemblies cost $30-50 online and are easy to swap.",
    metaTitle:
      "Shark Vacuum Brush Roll Not Spinning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Shark vacuum brush roll that won't spin. Step-by-step guide with belt check. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // AIR PURIFIERS
  // ============================================================
  {
    id: "honeywell-air-purifier-not-blowing-air",
    category: "Air Purifiers",
    categorySlug: "air-purifiers",
    brand: "Honeywell",
    brandSlug: "honeywell",
    problemSlug: "not-blowing-air",
    problemTitle: "Not Blowing Air",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: ["Vacuum with brush attachment"],
    partsNeeded: [
      {
        name: "Honeywell HEPA Filter Replacement",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=honeywell+hepa+filter+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=honeywell+hepa+filter+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the purifier before opening it.",
      "Wear a dust mask when handling a very dirty filter — it's full of whatever it's been filtering out of your air.",
    ],
    quickDiagnosis:
      "A Honeywell air purifier that won't blow air usually has a clogged pre-filter or HEPA filter. When the filter gets too dirty, it restricts airflow so much the unit seems like it's not working. Cleaning the pre-filter and replacing the HEPA filter fixes this almost every time.",
    steps: [
      {
        number: 1,
        title: "Unplug and open the unit",
        description:
          "Unplug the air purifier. Remove the front panel or back grille (depending on model) to access the filters.",
      },
      {
        number: 2,
        title: "Remove and clean the pre-filter",
        description:
          "The pre-filter is the first layer — usually a black foam or mesh sheet. Remove it and vacuum it with a brush attachment. If it's really dirty, rinse it under water and let it dry completely before reinstalling.",
      },
      {
        number: 3,
        title: "Check the HEPA filter",
        description:
          "Pull out the HEPA filter (the thick white pleated one). If it's gray or black, it needs replacement — HEPA filters cannot be washed or cleaned. They should be replaced every 12 months, but pet owners may need to replace every 6 months.",
      },
      {
        number: 4,
        title: "Vacuum the interior",
        description:
          "While the filters are out, use your vacuum to clean dust off the fan blades and inside the housing. Heavy dust on the fan blades reduces airflow significantly.",
      },
      {
        number: 5,
        title: "Reassemble and reset",
        description:
          "Install the new HEPA filter (or the cleaned old one if it's still white), put the pre-filter back, close the panel. Plug in and reset the filter replacement indicator if your model has one (usually a button on the control panel).",
      },
    ],
    alternativeCauses: [
      "The fan motor can fail on older units — you'll hear nothing at all when it's turned on.",
      "Some models have a safety switch that prevents operation if the filter panel isn't fully closed.",
      "A burned-out speed control knob or circuit board can prevent fan operation.",
    ],
    whenToCallPro:
      "Air purifiers are generally not worth professional repair. If cleaning the filters doesn't fix it and the motor has failed, a new Honeywell purifier costs $60-150 — less than a repair bill would be.",
    metaTitle:
      "Honeywell Air Purifier Not Blowing Air — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Honeywell air purifier that's not blowing air. Step-by-step filter cleaning guide. Difficulty: Easy. Save $80+.",
  },

  // ============================================================
  // DEHUMIDIFIERS
  // ============================================================
  {
    id: "frigidaire-dehumidifier-not-collecting-water",
    category: "Dehumidifiers",
    categorySlug: "dehumidifiers",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "not-collecting-water",
    problemTitle: "Not Collecting Water",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: ["Vacuum with brush attachment", "Soft brush or cloth"],
    partsNeeded: [
      {
        name: "Dehumidifier Humidity Sensor (if faulty)",
        costRange: "$8–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+dehumidifier+humidity+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+dehumidifier+humidity+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dehumidifier before cleaning or working on it.",
      "If you see ice on the coils, unplug it and let it thaw completely before diagnosing further.",
    ],
    quickDiagnosis:
      "When a Frigidaire dehumidifier runs but doesn't collect water, the most common cause is iced-up coils from running the unit in a room that's too cold (below 65 degrees F). A dirty filter that blocks airflow can also cause freezing. The fix is usually just cleaning and letting it defrost.",
    steps: [
      {
        number: 1,
        title: "Check the room temperature",
        description:
          "Most dehumidifiers don't work well below 65 degrees F. The coils freeze over and the unit can't collect moisture. If your room is cold, you need a dehumidifier rated for low temperatures.",
      },
      {
        number: 2,
        title: "Check for ice on the coils",
        description:
          "Unplug the unit and remove the rear filter to see the coils. If they're covered in ice, that's your problem. Leave it unplugged until all ice melts (2-4 hours). Place towels underneath to catch dripping water.",
      },
      {
        number: 3,
        title: "Clean the filter",
        description:
          "Remove the air filter (usually behind the front or back grille). Vacuum it or rinse it under water. A dirty filter restricts airflow, which causes ice buildup and poor performance. Clean it every 2 weeks during heavy use.",
      },
      {
        number: 4,
        title: "Clean the coils",
        description:
          "While the filter is out, use a soft brush to gently clean dust off the evaporator coils. Dirty coils can't transfer heat efficiently, reducing moisture collection.",
      },
      {
        number: 5,
        title: "Check the water bucket and float switch",
        description:
          "Make sure the bucket is seated properly. There's a float switch that tells the unit when the bucket is full — if it's stuck in the up position, the unit won't run the compressor. Jiggle the float to make sure it moves freely.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Reinstall the filter, plug in the unit, and set humidity to a low target (like 40%). Give it a few hours and check if water is collecting in the bucket. The unit should cycle on and off as humidity drops.",
      },
    ],
    alternativeCauses: [
      "The compressor may have failed — the unit runs the fan but no cold air comes through the coils.",
      "The humidity sensor may be reading incorrectly, making the unit think the room is already dry.",
      "Low refrigerant (due to a leak) prevents the coils from getting cold enough to condense moisture.",
    ],
    whenToCallPro:
      "If the compressor has failed, the unit is not worth repairing — a new Frigidaire dehumidifier costs $150-250, which is less than a compressor repair. If you suspect a refrigerant leak, disposal and replacement is the way to go.",
    metaTitle:
      "Frigidaire Dehumidifier Not Collecting Water — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Frigidaire dehumidifier that's not collecting water. Step-by-step defrost and filter guide. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // POWER TOOLS
  // ============================================================
  {
    id: "dewalt-cordless-drill-not-charging",
    category: "Power Tools",
    categorySlug: "power-tools",
    brand: "DeWalt",
    brandSlug: "dewalt",
    problemSlug: "battery-not-charging",
    problemTitle: "Battery Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: ["Clean cloth", "Compressed air (optional)"],
    partsNeeded: [
      {
        name: "DeWalt 20V Max Battery Replacement",
        costRange: "$35–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=dewalt+20v+max+battery+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dewalt+20v+max+battery+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never attempt to open or repair a lithium-ion battery pack — they can catch fire.",
      "Don't charge batteries in extreme heat or cold (below 40 degrees F or above 105 degrees F).",
    ],
    quickDiagnosis:
      "When a DeWalt cordless drill battery won't charge, the most common causes are dirty contacts, a battery that's too hot or cold, or a battery that has entered sleep mode from sitting too long. Cleaning the contacts and doing a wake-up cycle fixes this about 70% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the battery contacts",
        description:
          "Look at the metal contacts on the battery and charger. If they're dirty, corroded, or have dust on them, clean them with a dry cloth or a pencil eraser. Blow out dust with compressed air. Dirty contacts are the number one cause.",
      },
      {
        number: 2,
        title: "Check the temperature",
        description:
          "If the battery is hot (just used) or ice cold (stored in a garage in winter), let it come to room temperature before charging. DeWalt chargers have a thermal protection that won't charge batteries that are too hot or cold. The LED will blink to indicate this.",
      },
      {
        number: 3,
        title: "Try the charger with another battery",
        description:
          "If you have a second DeWalt battery, try it in the charger. If the second battery charges fine, the first battery is the problem. If neither charges, the charger may be faulty.",
      },
      {
        number: 4,
        title: "Wake up a sleeping battery",
        description:
          "Batteries stored fully discharged for months can enter a deep sleep state. Try putting the battery on the charger for 30 seconds, removing it, waiting 10 seconds, and placing it back. Repeat this 5-10 times. Some chargers will eventually detect the battery and begin a recovery charge.",
      },
      {
        number: 5,
        title: "Check the charger LED indicators",
        description:
          "A solid red light means charging normally. Blinking red means hot/cold delay. Alternating red/green means the battery is reaching end of life. No lights at all means the charger isn't getting power — check the outlet.",
      },
    ],
    alternativeCauses: [
      "The charger's internal fuse may have blown — try a different charger if available.",
      "The battery's internal protection circuit may have tripped permanently. This happens after a deep discharge.",
      "Power outlet issues — try a different outlet to rule out a tripped GFCI or dead outlet.",
    ],
    whenToCallPro:
      "There's no practical way to repair a dead lithium-ion battery pack at home. A replacement DeWalt 20V battery costs $35-80 depending on amp-hours. DeWalt batteries have a 3-year warranty — contact DeWalt customer service for a potential free replacement.",
    metaTitle:
      "DeWalt Cordless Drill Battery Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a DeWalt cordless drill battery that won't charge. Step-by-step troubleshooting guide. Difficulty: Easy. Save $50+.",
  },
  {
    id: "milwaukee-circular-saw-blade-wont-spin",
    category: "Power Tools",
    categorySlug: "power-tools",
    brand: "Milwaukee",
    brandSlug: "milwaukee",
    problemSlug: "blade-wont-spin",
    problemTitle: "Blade Won't Spin",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Wrench (included with saw)",
      "Compressed air",
      "Clean cloth",
    ],
    partsNeeded: [
      {
        name: "Circular Saw Carbon Brushes",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=milwaukee+circular+saw+carbon+brushes&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=milwaukee+circular+saw+carbon+brushes&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the saw or remove the battery before any inspection or repair.",
      "Never force the blade to spin — there's a reason it's stuck.",
      "Wear safety glasses when using compressed air to clean the saw.",
    ],
    quickDiagnosis:
      "When a Milwaukee circular saw blade won't spin, the most common causes are a locked blade guard, sawdust buildup in the motor, or worn carbon brushes. On cordless models, a drained battery or overheated motor will also prevent spinning. Most of these are quick fixes.",
    steps: [
      {
        number: 1,
        title: "Check the blade guard",
        description:
          "Make sure the lower blade guard isn't stuck. Retract it by hand — it should move freely and spring back. Sawdust or resin can gum it up. Clean it with a dry cloth.",
      },
      {
        number: 2,
        title: "Check for battery/power issues",
        description:
          "For cordless: remove and reseat the battery. Try a fully charged battery. For corded: make sure the power cord isn't damaged and the outlet works.",
      },
      {
        number: 3,
        title: "Clean out sawdust",
        description:
          "Use compressed air to blow out sawdust from all vents and the motor area. Heavy dust buildup can prevent the motor from spinning. Pay attention to the area around the blade arbor where sawdust packs in.",
      },
      {
        number: 4,
        title: "Check the carbon brushes (corded models)",
        description:
          "On corded Milwaukee saws, the carbon brushes wear down over time. They're located in two small caps on opposite sides of the motor housing. Unscrew the caps and pull out the brushes. If they're shorter than 1/4 inch, they need replacement. New brushes slide right in.",
      },
      {
        number: 5,
        title: "Check that the blade isn't binding",
        description:
          "Remove the battery/unplug, then remove the blade. Check that the arbor shaft spins freely by hand. If it's seized, the motor bearings may be shot. Check the blade itself for warping — a warped blade will bind against the guard.",
      },
    ],
    alternativeCauses: [
      "The blade bolt may be over-tightened. Use the spindle lock and wrench to loosen it (remember: reverse thread — turn clockwise to loosen).",
      "Overheating triggers a thermal cutoff on cordless models. Let the saw cool for 10-15 minutes.",
      "A damaged trigger switch can prevent the motor from engaging.",
    ],
    whenToCallPro:
      "If the motor bearings are seized or the armature is damaged, the repair cost often exceeds half the price of a new saw. Milwaukee offers a 5-year warranty on most tools — check with their service center before paying for repairs.",
    metaTitle:
      "Milwaukee Circular Saw Blade Won't Spin — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Milwaukee circular saw blade that won't spin. Step-by-step troubleshooting. Difficulty: Medium. Save $100+.",
  },

  // ============================================================
  // SEWING MACHINES
  // ============================================================
  {
    id: "singer-sewing-machine-thread-bunching",
    category: "Sewing Machines",
    categorySlug: "sewing-machines",
    brand: "Singer",
    brandSlug: "singer",
    problemSlug: "thread-bunching-underneath",
    problemTitle: "Thread Bunching Underneath Fabric",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: ["Small screwdriver", "Lint brush or compressed air"],
    partsNeeded: [
      {
        name: "Universal Sewing Machine Bobbins",
        costRange: "$5–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=singer+sewing+machine+bobbins&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=singer+sewing+machine+bobbins&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Sewing Machine Needles",
        costRange: "$3–$6",
        amazonUrl:
          "https://www.amazon.com/s?k=singer+sewing+machine+needles+universal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=singer+sewing+machine+needles+universal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the sewing machine and unplug it before working on the bobbin area.",
      "Be careful around the needle — it's sharp even when the machine is off.",
    ],
    quickDiagnosis:
      "Thread bunching (bird nesting) on the underside of fabric is one of the most common sewing machine problems. Despite what you'd think, it's almost never a bobbin problem — it's usually caused by incorrect upper thread tension or the machine not being threaded properly. Re-threading the top thread fixes this about 90% of the time.",
    steps: [
      {
        number: 1,
        title: "Re-thread the upper thread completely",
        description:
          "Remove the thread from the machine entirely. Raise the presser foot (this opens the tension discs). Re-thread from the spool, following your machine's threading diagram exactly. Make sure the thread is seated between the tension discs. This single step fixes the problem most of the time.",
      },
      {
        number: 2,
        title: "Check that the presser foot was down",
        description:
          "If you start sewing with the presser foot up, the tension discs are open and there's no tension on the upper thread. This causes immediate bunching. Always lower the presser foot before sewing.",
      },
      {
        number: 3,
        title: "Check the bobbin",
        description:
          "Remove the bobbin and make sure it's wound evenly (not lumpy or loose). Reinsert it and make sure the thread pulls off in the correct direction for your machine. Check the bobbin case for lint buildup.",
      },
      {
        number: 4,
        title: "Clean the bobbin area",
        description:
          "Remove the bobbin case and use a lint brush or compressed air to clean out all thread fibers and lint. Even a small amount of lint can affect tension and cause bird nesting.",
      },
      {
        number: 5,
        title: "Change the needle",
        description:
          "A bent, dull, or wrong-size needle can cause thread bunching. Replace it with a new needle appropriate for your fabric. Make sure the flat side faces the back and it's pushed all the way up into the clamp.",
      },
      {
        number: 6,
        title: "Test on scrap fabric",
        description:
          "Thread the machine, lower the presser foot, and sew a test line on scrap fabric. If the stitches look even on both sides, you've fixed it. If it still bunches, try adjusting the upper tension dial one number at a time.",
      },
    ],
    alternativeCauses: [
      "Using the wrong bobbin type for your machine can cause tension problems.",
      "A damaged or bent bobbin case spring can't maintain proper tension.",
      "Very old or cheap thread can be uneven and cause tension issues. Try quality thread.",
    ],
    whenToCallPro:
      "If you've re-threaded, cleaned, and replaced the needle but still get bird nesting, the tension assembly may need service. A sewing machine tune-up costs $50-80 at a sewing shop and includes cleaning, oiling, and tension adjustment.",
    metaTitle:
      "Singer Sewing Machine Thread Bunching — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix thread bunching on a Singer sewing machine. Step-by-step re-threading and tension guide. Difficulty: Easy. Save $80+.",
  },

  // ============================================================
  // GARAGE DOOR OPENERS
  // ============================================================
  {
    id: "chamberlain-garage-door-opener-not-closing",
    category: "Garage Door Openers",
    categorySlug: "garage-door-openers",
    brand: "Chamberlain",
    brandSlug: "chamberlain",
    problemSlug: "not-closing",
    problemTitle: "Won't Close (Reverses Immediately)",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$5",
    toolsNeeded: ["Ladder", "Clean cloth", "Screwdriver"],
    partsNeeded: [
      {
        name: "Garage Door Safety Sensor (if broken)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=chamberlain+garage+door+safety+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=chamberlain+garage+door+safety+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never attempt to adjust or repair the large springs on the garage door — they're under extreme tension and can cause serious injury.",
      "Keep hands and fingers away from door tracks and hinges while the door is moving.",
    ],
    quickDiagnosis:
      "When a Chamberlain garage door opener reverses immediately after hitting close, it's almost always a safety sensor issue. The two infrared sensors at the bottom of the door tracks need a clear line of sight to each other. If anything blocks them, is misaligned, or the lens is dirty, the door won't close.",
    steps: [
      {
        number: 1,
        title: "Check the safety sensor lights",
        description:
          "Look at the two sensors mounted near the floor on each side of the garage door tracks. One should have a steady green light (receiver) and one a steady amber/orange light (sender). If either is blinking or off, that's your problem.",
      },
      {
        number: 2,
        title: "Clean the sensor lenses",
        description:
          "Wipe the lens on each sensor with a clean, dry cloth. Spider webs, dust, and dirt on the lens are the most common cause. This alone fixes it about 40% of the time.",
      },
      {
        number: 3,
        title: "Check for obstructions",
        description:
          "Make sure nothing is blocking the invisible beam between the two sensors — a broom, box, bike tire, or even a cobweb hanging in the path.",
      },
      {
        number: 4,
        title: "Realign the sensors",
        description:
          "If the lights are blinking, the sensors are misaligned. Loosen the wing nut or bracket screw on one sensor. Slowly tilt it until the green light becomes steady. Tighten it in that position. Both lights should now be solid.",
      },
      {
        number: 5,
        title: "Check the sensor wires",
        description:
          "Follow the thin wires from each sensor to the motor unit on the ceiling. Look for any wire that's been pinched, cut, or disconnected — especially near where the door tracks meet the floor. Reconnect or repair any damaged wire.",
      },
      {
        number: 6,
        title: "Test the door",
        description:
          "Press the wall button or remote to close the door. If it closes smoothly, you're done. If it still reverses, hold the wall button continuously — this overrides the sensors. If the door closes fine when held, the sensor issue isn't fully resolved.",
      },
    ],
    alternativeCauses: [
      "The close-limit switch may need adjustment if the door closes partway then reverses.",
      "Sun glare hitting the sensor receiver directly can interfere with operation — a small shade or cardboard tube around the sensor helps.",
      "Damaged or corroded sensor wires can cause intermittent failures.",
    ],
    whenToCallPro:
      "If sensors are aligned, clean, and wired correctly but the door still won't close, there may be an issue with the logic board in the motor unit ($30-50 part). If the door is physically hard to move by hand (heavy, sticking), the springs or tracks need professional attention ($100-300).",
    metaTitle:
      "Chamberlain Garage Door Opener Won't Close — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Chamberlain garage door opener that won't close. Step-by-step sensor alignment guide. Difficulty: Easy. Save $150+.",
  },
  {
    id: "liftmaster-garage-door-opener-remote-not-working",
    category: "Garage Door Openers",
    categorySlug: "garage-door-openers",
    brand: "LiftMaster",
    brandSlug: "liftmaster",
    problemSlug: "remote-not-working",
    problemTitle: "Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$8",
    toolsNeeded: ["Small flathead screwdriver (for battery cover)", "Ladder"],
    partsNeeded: [
      {
        name: "CR2032 Battery (most remotes)",
        costRange: "$3–$5",
        amazonUrl:
          "https://www.amazon.com/s?k=CR2032+battery+garage+remote&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=CR2032+battery+garage+remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Use a stable ladder when accessing the motor unit on the ceiling.",
    ],
    quickDiagnosis:
      "When a LiftMaster remote stops working but the wall button still operates the door, the problem is almost always the remote — not the opener. A dead battery is the cause about 60% of the time. If it's not the battery, the remote may have lost its programming and needs to be re-paired.",
    steps: [
      {
        number: 1,
        title: "Replace the battery",
        description:
          "Open the remote's battery compartment (usually a small screw or sliding cover on the back). Replace the battery — most LiftMaster remotes use a CR2032 coin cell. Try the remote immediately after replacing.",
      },
      {
        number: 2,
        title: "Check the wall button",
        description:
          "Press the wall button inside the garage. If the door opens, the motor unit is fine and the issue is isolated to the remote.",
      },
      {
        number: 3,
        title: "Re-program the remote",
        description:
          "On the motor unit (on the ceiling), find the LEARN button — it's a colored button (purple, orange, yellow, or green depending on model). Press and release it. Within 30 seconds, press and hold the button on the remote you want to program. The garage door light will blink, confirming the remote is paired.",
      },
      {
        number: 4,
        title: "Check for signal interference",
        description:
          "LED light bulbs in the garage opener can cause radio interference. Try removing LED bulbs and using incandescent ones temporarily. Also check if a neighbor recently installed a new device on a similar frequency.",
      },
      {
        number: 5,
        title: "Test range",
        description:
          "Try using the remote from very close to the opener (within 5 feet). If it works up close but not from the car, the remote's antenna wire on the motor unit may have come loose. It should hang down — reattach it if it's disconnected.",
      },
    ],
    alternativeCauses: [
      "The antenna wire hanging from the motor unit may have been bumped or disconnected — make sure it hangs straight down.",
      "Power surges can wipe the opener's memory, requiring all remotes to be reprogrammed.",
      "The remote itself may be damaged — dropping it can crack the circuit board inside.",
    ],
    whenToCallPro:
      "If multiple remotes and the wall button all fail, the opener's logic board may be faulty ($30-60 part). If you can't reach the motor unit safely or are uncomfortable with electrical connections, a garage door service call costs $75-125.",
    metaTitle:
      "LiftMaster Garage Door Remote Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a LiftMaster garage door remote that's not working. Step-by-step reprogramming guide. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // SMOKE DETECTORS
  // ============================================================
  {
    id: "kidde-smoke-detector-beeping-chirping",
    category: "Smoke Detectors",
    categorySlug: "smoke-detectors",
    brand: "Kidde",
    brandSlug: "kidde",
    problemSlug: "beeping-chirping",
    problemTitle: "Beeping or Chirping Every 30-60 Seconds",
    difficulty: "Easy",
    timeEstimate: "5-10 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: ["Step stool or ladder"],
    partsNeeded: [
      {
        name: "9V Battery or AA Batteries (model dependent)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=9v+battery+smoke+detector&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=9v+battery+smoke+detector&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never remove a smoke detector permanently — it's there to save your life.",
      "If the alarm is sounding continuously (not chirping), check for actual smoke or fire first.",
    ],
    quickDiagnosis:
      "A Kidde smoke detector that chirps every 30-60 seconds is telling you the battery is low. It's not a fire alarm — it's a low-battery warning. Replacing the battery stops it immediately. If it still chirps after a new battery, the unit itself has reached end of life (they expire after 10 years).",
    steps: [
      {
        number: 1,
        title: "Identify which detector is chirping",
        description:
          "If you have multiple detectors, stand under each one and wait for the chirp. The sound can echo and seem like it's coming from a different location. The chirping one will be obvious when you're directly under it.",
      },
      {
        number: 2,
        title: "Replace the battery",
        description:
          "Twist the detector counterclockwise to remove it from the mounting plate. Open the battery compartment and replace the old battery with a fresh one. Use a quality name-brand battery — cheap batteries die faster.",
      },
      {
        number: 3,
        title: "Reset the detector",
        description:
          "After inserting the new battery, press and hold the TEST button for 15-20 seconds. The alarm will sound briefly, then stop. This clears the low-battery memory. Without this step, some units continue chirping even with a new battery.",
      },
      {
        number: 4,
        title: "Check the manufacture date",
        description:
          "Look on the back of the detector for a date. Smoke detectors expire after 10 years. If yours is older than that, the chirping may be an end-of-life signal (some Kidde models chirp a different pattern). Replace the entire unit — they cost $10-25.",
      },
      {
        number: 5,
        title: "Remount and test",
        description:
          "Put the detector back on the mounting plate (twist clockwise). Press the test button briefly — you should hear a loud alarm, confirming it's working. If it chirps again within a day, the unit is defective and should be replaced.",
      },
    ],
    alternativeCauses: [
      "For hardwired detectors, the backup battery still needs periodic replacement. The detector runs on house power but uses the battery during outages.",
      "Temperature extremes (garage, attic, unheated space) can cause false low-battery chirps.",
      "Dust inside the sensing chamber can cause intermittent chirping — blow it out with compressed air.",
    ],
    whenToCallPro:
      "If you have hardwired, interconnected smoke detectors and they all go off when there's no smoke, there may be a wiring issue. An electrician can diagnose interconnected detector problems for $75-150. Always replace expired detectors promptly.",
    metaTitle:
      "Kidde Smoke Detector Beeping — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to stop a Kidde smoke detector from beeping. Step-by-step battery replacement and reset guide. Difficulty: Easy. Save $50+.",
  },

  // ============================================================
  // DOORBELLS
  // ============================================================
  {
    id: "ring-doorbell-not-charging",
    category: "Doorbells",
    categorySlug: "doorbells",
    brand: "Ring",
    brandSlug: "ring",
    problemSlug: "not-charging",
    problemTitle: "Not Charging (Battery Drains Fast)",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: ["Screwdriver", "Multimeter (optional)"],
    partsNeeded: [
      {
        name: "Ring Rechargeable Battery Pack",
        costRange: "$25–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=ring+doorbell+battery+pack+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ring+doorbell+battery+pack+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If your Ring is hardwired, turn off the breaker to the doorbell transformer before removing it.",
      "Don't charge the battery in extreme cold — bring it inside to room temperature first.",
    ],
    quickDiagnosis:
      "A Ring doorbell that drains quickly or won't hold a charge usually has too many motion events triggering recording, a weak Wi-Fi signal forcing the processor to work harder, or cold weather reducing battery capacity. Adjusting settings fixes this about 70% of the time without any cost.",
    steps: [
      {
        number: 1,
        title: "Check your motion settings",
        description:
          "Open the Ring app, go to your doorbell's settings, and tap Motion Settings. Reduce the motion sensitivity and narrow the motion zones. Every motion event triggers recording, which is the biggest battery drain. If you're getting 50+ events per day, your battery will die quickly.",
      },
      {
        number: 2,
        title: "Check your Wi-Fi signal",
        description:
          "In the Ring app, go to Device Health. Check the RSSI (signal strength). If it's worse than -60, your Wi-Fi is too weak and the doorbell uses extra power trying to maintain connection. Move your router closer or add a Wi-Fi extender.",
      },
      {
        number: 3,
        title: "Fully charge the battery",
        description:
          "Remove the battery from the Ring doorbell. Bring it inside and charge it using the micro-USB or USB-C cable until the light turns solid green. This takes 4-8 hours. A partial charge from cold temperatures can show as 'charged' but not hold.",
      },
      {
        number: 4,
        title: "Disable unnecessary features",
        description:
          "Turn off Snapshot Capture, reduce video recording length, disable People Only Mode if your model supports it poorly, and consider setting a motion schedule to disable detection during hours you don't need it.",
      },
      {
        number: 5,
        title: "Check hardwire trickle charge (if applicable)",
        description:
          "If your Ring is connected to doorbell wiring, it should trickle charge. In the Ring app under Device Health, check if it says 'Hardwired.' If it shows 'Battery,' the wiring isn't providing power. Check that your doorbell transformer is at least 16V AC — Ring requires 16-24V AC to charge.",
      },
    ],
    alternativeCauses: [
      "Extreme cold (below 36 degrees F) significantly reduces lithium battery performance. This is normal and temporary.",
      "The battery itself may have degraded after 2-3 years of use and needs replacement.",
      "A firmware bug can sometimes cause excessive battery drain. Check for updates in the Ring app.",
    ],
    whenToCallPro:
      "If you want to hardwire your Ring for continuous power but don't have existing doorbell wiring, an electrician can install a low-voltage transformer for $50-100. A replacement Ring battery costs $25-30 and is the simplest fix for aging batteries.",
    metaTitle:
      "Ring Doorbell Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Ring doorbell that won't charge or drains fast. Step-by-step battery and settings guide. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // ADDITIONAL HIGH-VALUE GUIDES
  // ============================================================
  {
    id: "keurig-coffee-maker-not-brewing",
    category: "Coffee Makers",
    categorySlug: "coffee-makers",
    brand: "Keurig",
    brandSlug: "keurig",
    problemSlug: "not-brewing",
    problemTitle: "Not Brewing (Won't Dispense Water)",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: ["Paper clip or needle", "White vinegar"],
    partsNeeded: [
      {
        name: "Keurig Descaling Solution (or white vinegar)",
        costRange: "$5–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=keurig+descaling+solution&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=keurig+descaling+solution&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "The water inside a Keurig gets very hot — don't open the K-Cup holder immediately after a failed brew attempt.",
      "Unplug the machine before cleaning the needle.",
    ],
    quickDiagnosis:
      "A Keurig that won't brew is almost always clogged. Calcium buildup from hard water blocks the internal water lines, and coffee grounds clog the entrance and exit needles. A thorough descale and needle cleaning fixes this about 90% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the exit needle",
        description:
          "Open the K-Cup holder and look at the bottom of the lid — you'll see a sharp needle with two small holes. This is where water enters the K-Cup. Use a paper clip to poke out any grounds clogging those holes. This is the most common fix.",
      },
      {
        number: 2,
        title: "Clean the entrance needle",
        description:
          "Remove the K-Cup holder assembly (it pulls straight out). On the bottom, there's another needle. Clear it with a paper clip as well. Rinse the entire holder assembly under warm water.",
      },
      {
        number: 3,
        title: "Descale the machine",
        description:
          "Fill the reservoir with equal parts white vinegar and water (or use Keurig descaling solution). Run brew cycles with no K-Cup until the reservoir is empty. This flushes calcium deposits from the internal water lines.",
      },
      {
        number: 4,
        title: "Rinse with clean water",
        description:
          "Refill the reservoir with fresh water and run at least 3-4 brew cycles to flush out all the vinegar. Nobody wants vinegar-flavored coffee.",
      },
      {
        number: 5,
        title: "Burp the machine (if still not working)",
        description:
          "If it still won't brew, there may be an air lock. Turn the machine upside down over the sink and pat the bottom a few times. This sounds ridiculous but it dislodges air bubbles trapped in the water line. Flip it back over, fill the reservoir, and try again.",
      },
    ],
    alternativeCauses: [
      "The water reservoir may not be seated properly — remove it and snap it back firmly.",
      "The internal water pump can fail on older machines (you'll hear nothing when it tries to brew).",
      "The magnet on the reservoir that tells the machine it has water may be displaced. Check that the reservoir seats flush.",
    ],
    whenToCallPro:
      "Keurig machines are generally not worth professional repair. If descaling and needle cleaning don't fix it, a new Keurig costs $60-150. Keurig offers a 1-year warranty — contact them for a potential replacement. Descale every 3 months to prevent future clogs.",
    metaTitle:
      "Keurig Not Brewing — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Keurig that won't brew or dispense water. Step-by-step descaling and needle cleaning guide. Difficulty: Easy. Save $80+.",
  },
  {
    id: "roomba-vacuum-error-charging-contacts",
    category: "Robot Vacuums",
    categorySlug: "robot-vacuums",
    brand: "iRobot",
    brandSlug: "irobot",
    problemSlug: "not-charging-error",
    problemTitle: "Not Charging (Error Light on Base)",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: ["Clean cloth", "Rubbing alcohol", "Melamine sponge (Magic Eraser)"],
    partsNeeded: [
      {
        name: "iRobot Roomba Replacement Battery",
        costRange: "$25–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=irobot+roomba+replacement+battery&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=irobot+roomba+replacement+battery&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the charging base before cleaning the contacts.",
      "Don't submerge any electronic components in water.",
    ],
    quickDiagnosis:
      "A Roomba that won't charge when placed on its base usually has dirty charging contacts. The metal strips on the bottom of the Roomba and on the charging base accumulate oxidation and dirt over time, preventing a good electrical connection. A quick cleaning with rubbing alcohol fixes this about 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the charging contacts on the Roomba",
        description:
          "Flip the Roomba over. You'll see two metal strips near the front. Dampen a cloth with rubbing alcohol and firmly rub both contacts until they're shiny. A melamine sponge (Magic Eraser) works even better for removing oxidation.",
      },
      {
        number: 2,
        title: "Clean the charging base contacts",
        description:
          "Unplug the charging base. Clean the two metal strips on the base the same way. These are the contacts that touch the Roomba. Make sure they're shiny and free of any dark buildup.",
      },
      {
        number: 3,
        title: "Check the power connection to the base",
        description:
          "Make sure the charging base is plugged in firmly and the outlet works. Try a different outlet. The small LED on the base should be lit when it's receiving power.",
      },
      {
        number: 4,
        title: "Reboot the Roomba",
        description:
          "Press and hold the CLEAN button for 10 seconds until the light turns off. Release and press CLEAN again. This performs a soft reset that can clear charging errors.",
      },
      {
        number: 5,
        title: "Place on base and verify",
        description:
          "Set the Roomba on the base with the contacts aligned. You should see the charging indicator (pulsing light or battery icon). If it charges, clean the contacts monthly to prevent recurrence.",
      },
    ],
    alternativeCauses: [
      "The battery may have reached end of life after 2-3 years and can no longer hold a charge.",
      "The charging base's internal circuit board can fail. Try charging with the included power cord directly plugged into the Roomba (if your model supports this).",
      "The caster wheel being too dirty or stuck can prevent the Roomba from sitting flat on the base.",
    ],
    whenToCallPro:
      "Roombas are consumer electronics with limited repairability. A replacement battery costs $25-40 and is a DIY swap (4 screws). If the main board has failed, iRobot sometimes offers refurbished replacements at a discount. A new Roomba is typically more cost-effective than board-level repair.",
    metaTitle:
      "Roomba Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Roomba that won't charge on its base. Step-by-step contact cleaning guide. Difficulty: Easy. Save $80+.",
  },
  {
    id: "ge-garbage-disposal-leaking-from-bottom",
    category: "Garbage Disposals",
    categorySlug: "garbage-disposals",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "leaking-from-bottom",
    problemTitle: "Leaking from Bottom",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Adjustable wrench",
      "Plumber's putty",
      "Bucket and towels",
    ],
    partsNeeded: [
      {
        name: "Plumber's Putty",
        costRange: "$3–$5",
        amazonUrl:
          "https://www.amazon.com/s?k=plumbers+putty+garbage+disposal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=plumbers+putty+garbage+disposal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Garbage Disposal Discharge Pipe Gasket",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=garbage+disposal+discharge+pipe+gasket&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=garbage+disposal+discharge+pipe+gasket&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the disposal and unplug it before working underneath it.",
      "Place a bucket under the disposal before loosening any connections.",
    ],
    quickDiagnosis:
      "A garbage disposal leaking from the bottom can come from three places: the sink flange at the top, the discharge pipe on the side, or the actual body of the unit. If it's leaking from the very bottom shell, the internal seal has failed and the unit needs replacement. Flange and pipe leaks are cheap fixes.",
    steps: [
      {
        number: 1,
        title: "Identify where the leak is actually coming from",
        description:
          "Plug the sink drain, fill the sink with a few inches of water mixed with food coloring. Remove the plug and watch where the colored water appears. Top = flange. Side = discharge pipe or dishwasher connection. Very bottom = internal seal.",
      },
      {
        number: 2,
        title: "Fix a flange leak (top)",
        description:
          "Tighten the mounting ring that holds the disposal to the flange. If still leaking, you'll need to remove the disposal, scrape off old putty from the sink flange, apply fresh plumber's putty, and remount. This is the most common leak location.",
      },
      {
        number: 3,
        title: "Fix a discharge pipe leak (side)",
        description:
          "The discharge pipe connects on the side with two bolts and a rubber gasket. Tighten the bolts. If still leaking, remove the bolts, replace the rubber gasket, and reassemble. Gaskets cost a few dollars.",
      },
      {
        number: 4,
        title: "Check the dishwasher connection",
        description:
          "If your dishwasher drains through the disposal, check the hose clamp on the dishwasher inlet. Tighten it with a screwdriver. If the hose is cracked, replace it.",
      },
      {
        number: 5,
        title: "Assess a bottom shell leak",
        description:
          "If water is dripping from the very bottom of the disposal body (not from any connection), the internal flywheel seal has failed. This is not repairable — the unit needs to be replaced. This typically happens on units over 8 years old.",
      },
    ],
    alternativeCauses: [
      "Vibration from normal use can loosen connections over time. Retighten all connections annually.",
      "A cracked discharge elbow can mimic a bottom leak. Dry everything, run water, and check carefully.",
      "Over-tightening the flange can actually crack the putty seal and cause leaks.",
    ],
    whenToCallPro:
      "If the internal seal has failed, you need a new disposal. A plumber charges $100-200 for installation. If you're comfortable with basic plumbing, you can swap it yourself — new disposals come with installation instructions. Budget $80-200 for the unit depending on power.",
    metaTitle:
      "GE Garbage Disposal Leaking from Bottom — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a GE garbage disposal leaking from the bottom. Step-by-step leak diagnosis guide. Difficulty: Medium. Save $150+.",
  },
];
