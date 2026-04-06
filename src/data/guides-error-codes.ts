import { Guide } from "@/lib/types";

export const errorCodeGuides: Guide[] = [
  // ============================================================
  // WASHING MACHINES
  // ============================================================
  {
    id: "samsung-washer-4c-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "4c-error-code",
    problemTitle: "4C Error Code (Water Supply Issue)",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: ["Pliers or adjustable wrench", "Bucket or towels"],
    partsNeeded: [
      {
        name: "Water Inlet Valve (if valve is faulty)",
        costRange: "$15–$35",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+water+inlet+valve&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+washer+water+inlet+valve&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washing machine before inspecting any parts.",
      "Turn off both hot and cold water supply valves before disconnecting hoses.",
      "Have towels ready to catch water when removing hoses.",
    ],
    quickDiagnosis:
      "The 4C code means your Samsung washer is not getting enough water. The most common reason is that the water supply valves behind the machine are not fully open, or the inlet hoses are kinked. This is one of the easiest codes to fix yourself.",
    steps: [
      {
        number: 1,
        title: "Check the water supply valves",
        description:
          "Look behind your washer and find the two water valves on the wall (hot and cold). Make sure both are turned all the way open — counter-clockwise until they stop. Sometimes they get bumped closed accidentally.",
      },
      {
        number: 2,
        title: "Inspect the inlet hoses",
        description:
          "Follow the hoses from the wall valves to the back of your washer. Make sure they are not kinked, pinched, or bent sharply. Straighten out any kinks you find. Also check that the connections are tight at both ends.",
      },
      {
        number: 3,
        title: "Clean the inlet filters",
        description:
          "Turn off both water valves. Unscrew the hoses from the back of the washer. Inside each connection on the washer, you will see a small mesh screen. Gently pull these screens out with pliers and rinse them under running water to remove any sediment or buildup. Put them back in.",
      },
      {
        number: 4,
        title: "Check your home water pressure",
        description:
          "Turn a faucet on near the washer. If the water pressure seems low throughout your house, the problem may not be the washer at all — it could be a municipal water issue or a problem with your main supply line.",
      },
      {
        number: 5,
        title: "Reconnect and test",
        description:
          "Reattach the hoses, hand-tighten them, then snug them a quarter turn with pliers. Open both valves fully. Plug the washer back in and start a new cycle. The 4C code should be gone. If it returns, the water inlet valve inside the machine may need replacing.",
      },
    ],
    alternativeCauses: [
      "Faulty water inlet valve inside the machine",
      "Low household water pressure",
      "Frozen pipes in cold weather",
    ],
    whenToCallPro:
      "If cleaning the filters and checking hoses does not fix it, the water inlet valve may need replacing. That is a Medium-difficulty repair that involves removing the back panel. A technician can do it for $120–$200 including parts.",
    metaTitle:
      "Samsung Washer 4C Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung washer 4C error code (no water supply). Usually caused by closed valves or clogged inlet filters. Difficulty: Easy. Save $150+.",
  },
  {
    id: "lg-washer-cl-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "cl-error-code",
    problemTitle: "CL Error Code (Child Lock Activated)",
    difficulty: "Easy",
    timeEstimate: "1-2 minutes",
    costEstimate: "$0",
    toolsNeeded: ["None"],
    partsNeeded: [],
    safetyWarnings: [
      "No safety risks — this is a settings adjustment, not a repair.",
    ],
    quickDiagnosis:
      "The CL code on your LG washer is not actually an error — it means the Child Lock feature is turned on. This locks out all the buttons so children cannot start a cycle or change settings. Turning it off takes about five seconds.",
    steps: [
      {
        number: 1,
        title: "Find the Child Lock button",
        description:
          "Look at your washer's control panel. On most LG models, the Child Lock function is labeled \"CL\" or has a padlock icon. It is usually tied to the Temp and Options buttons, or sometimes the Prewash and Extra Rinse buttons. Check the label printed below or above the buttons.",
      },
      {
        number: 2,
        title: "Press and hold to unlock",
        description:
          "Press and hold the designated Child Lock button combination for 3-5 seconds. On most LG front-loaders, hold the Temp and Options buttons together. On top-loaders, hold Prewash and Extra Rinse together. You will hear a beep and the CL display will disappear.",
      },
      {
        number: 3,
        title: "Check your owner's manual if needed",
        description:
          "If the buttons above do not work for your specific model, check the label on the control panel — LG usually prints small text near the buttons showing which ones to hold. You can also search your model number on the LG support website for a digital copy of the manual.",
      },
      {
        number: 4,
        title: "Test the washer",
        description:
          "Once the CL code is gone, try pressing buttons and starting a cycle to confirm everything is working normally again. If you want to re-enable the child lock later, just press and hold the same button combination again.",
      },
    ],
    alternativeCauses: [
      "Child accidentally pressing buttons during a cycle",
      "Power surge re-enabling the child lock setting",
      "Accidentally holding buttons when loading laundry",
    ],
    whenToCallPro:
      "You should not need a professional for this fix. If the CL code does not go away after trying the button combination, try unplugging the washer for 60 seconds and plugging it back in. If it still appears, the control board may have a glitch — a tech can diagnose that for $80–$150.",
    metaTitle: "LG Washer CL Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the LG washer CL error code (child lock activated). A simple button press to unlock. Difficulty: Easy. Takes under 2 minutes.",
  },
  {
    id: "whirlpool-washer-f8-e1-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "f8-e1-error-code",
    problemTitle: "F8 E1 Error Code (Water Supply Issue)",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$35",
    toolsNeeded: [
      "Pliers or adjustable wrench",
      "Bucket or towels",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Water Inlet Valve (if valve is faulty)",
        costRange: "$20–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+washer+water+inlet+valve&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+washer+water+inlet+valve&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before doing any work.",
      "Turn off both hot and cold water supply valves before disconnecting hoses.",
      "Keep towels handy to catch spills.",
    ],
    quickDiagnosis:
      "The F8 E1 code means your Whirlpool washer is not detecting water filling the tub. This usually happens because the water valves are not fully open, the hoses are kinked, or the inlet screens are clogged with sediment. Most people can fix this in under 30 minutes.",
    steps: [
      {
        number: 1,
        title: "Verify the water supply valves are open",
        description:
          "Go behind the washer and locate the hot and cold water valves on the wall. Turn both fully counter-clockwise to make sure they are completely open. It is easy for someone to accidentally bump a valve partially closed.",
      },
      {
        number: 2,
        title: "Straighten the inlet hoses",
        description:
          "Check both hoses running from the wall valves to the back of the washer. If either hose is kinked or bent sharply, straighten it out. A kink can block water flow just as much as a closed valve.",
      },
      {
        number: 3,
        title: "Clean the inlet screens",
        description:
          "Turn off both valves and unplug the washer. Unscrew the hoses from the back of the washer. You will see small mesh filter screens inside the washer connections. Pull them out carefully with pliers, rinse them under water to remove any debris, and push them back in.",
      },
      {
        number: 4,
        title: "Check the water flow",
        description:
          "Before reconnecting the hoses, briefly turn each valve on over a bucket to make sure water flows freely. If one side has low pressure, the problem may be upstream in your plumbing rather than in the washer.",
      },
      {
        number: 5,
        title: "Reconnect and test",
        description:
          "Reattach the hoses firmly, open both valves, and plug the washer in. Run a short cycle. The F8 E1 code should be gone. If it keeps coming back, the water inlet valve inside the machine may be stuck closed and will need replacing.",
      },
    ],
    alternativeCauses: [
      "Faulty water inlet valve",
      "Low home water pressure",
      "Defective flow meter sensor inside the washer",
    ],
    whenToCallPro:
      "If the hoses and screens are clear and water pressure is fine, the inlet valve or flow meter may be bad. Replacing the valve is a Medium-level job. A repair tech can handle it for $130–$220 including parts.",
    metaTitle:
      "Whirlpool Washer F8 E1 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Whirlpool washer F8 E1 error (no water detected). Usually caused by closed valves or clogged screens. Difficulty: Easy. Save $150+.",
  },
  {
    id: "samsung-washer-dc-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "dc-error-code",
    problemTitle: "DC Error Code (Unbalanced Load)",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Bubble level (optional)", "Adjustable wrench (if leveling)"],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the washer if you need to move it or adjust the leveling legs.",
      "Be careful lifting heavy wet items — they are heavier than you expect.",
    ],
    quickDiagnosis:
      "The DC code means your Samsung washer detected an unbalanced load during the spin cycle. The machine stops spinning to protect itself from damage. This is almost always caused by too many heavy items on one side of the drum, washing a single heavy item, or a washer that is not sitting level on the floor.",
    steps: [
      {
        number: 1,
        title: "Open the washer and redistribute the clothes",
        description:
          "Pause the cycle and open the door. If you see all the clothes bunched up on one side of the drum, spread them out evenly around the drum. Heavy items like towels, jeans, and blankets tend to clump together.",
      },
      {
        number: 2,
        title: "Remove some items if overloaded",
        description:
          "If the drum is stuffed full, take some items out. An overloaded washer cannot balance properly during the spin cycle. A good rule of thumb: you should be able to fit your hand between the clothes and the top of the drum.",
      },
      {
        number: 3,
        title: "Add items if washing a single heavy piece",
        description:
          "Washing one large item by itself — like a comforter or a heavy bath mat — can cause imbalance. Add a few towels to the load to help even out the weight distribution inside the drum.",
      },
      {
        number: 4,
        title: "Check that the washer is level",
        description:
          "Rock the washer gently. If it wobbles, the leveling legs need adjusting. Use a wrench to turn the legs at the bottom corners until the machine sits flat. You can place a bubble level on top to check. An unlevel washer will throw DC codes regularly.",
      },
      {
        number: 5,
        title: "Restart the cycle",
        description:
          "Close the door and press Start to resume. The washer should complete the spin cycle without throwing the DC code again. If the code keeps appearing no matter what you do, the suspension rods or shock absorbers inside the machine may be worn out.",
      },
    ],
    alternativeCauses: [
      "Worn suspension rods or shock absorbers",
      "Damaged drum bearings causing excessive vibration",
      "Broken balance ring inside the drum",
    ],
    whenToCallPro:
      "If redistributing the load and leveling the machine does not fix repeated DC codes, the suspension system may be worn. Replacing shock absorbers is a Medium-difficulty repair. A technician can do it for $150–$250 including parts.",
    metaTitle:
      "Samsung Washer DC Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung washer DC error code (unbalanced load). Redistribute clothes and level your machine. Difficulty: Easy. Takes under 15 minutes.",
  },

  // ============================================================
  // DISHWASHERS
  // ============================================================
  {
    id: "bosch-dishwasher-e15-error",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Bosch",
    brandSlug: "bosch",
    problemSlug: "e15-error-code",
    problemTitle: "E15 Error Code (Water in Base)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Towels or sponge",
      "Phillips screwdriver",
      "Shallow pan or baking sheet",
    ],
    partsNeeded: [
      {
        name: "Flood Switch / Leak Sensor (if sensor is faulty)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=bosch+dishwasher+flood+switch+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=bosch+dishwasher+flood+switch+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dishwasher or turn off its breaker before tilting or working underneath.",
      "Water may spill when you tilt the unit — have towels ready.",
      "Do not tilt the dishwasher more than 45 degrees.",
    ],
    quickDiagnosis:
      "The E15 code means the flood protection system detected water in the base pan underneath the dishwasher. Bosch dishwashers have a built-in safety feature — a small styrofoam float triggers the sensor when water collects in the base. The fix usually involves draining the base pan and finding what caused the leak.",
    steps: [
      {
        number: 1,
        title: "Turn off power and water",
        description:
          "Unplug the dishwasher or switch off its breaker at the electrical panel. Also turn off the water supply valve under the kitchen sink. This is important for your safety and to stop any additional water from entering.",
      },
      {
        number: 2,
        title: "Remove the dishwasher kickplate",
        description:
          "The kickplate is the narrow panel at the very bottom front of the dishwasher. It usually has one or two screws, or it may snap off. Remove it so you can see underneath. Look for standing water in the base pan.",
      },
      {
        number: 3,
        title: "Soak up the water in the base",
        description:
          "Use towels or a sponge to absorb all the water from the base pan. You can also carefully tilt the dishwasher forward about 30-45 degrees to let the water drain out into towels placed on the floor. This is the key step — the sensor will not reset until the water is gone.",
      },
      {
        number: 4,
        title: "Look for the source of the leak",
        description:
          "While the kickplate is off, shine a flashlight and look for dripping connections, cracked hoses, or loose clamps. Common leak sources include the door gasket, the water inlet connection, and the drain hose fittings. Tighten anything that looks loose.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Let the base dry completely, then reattach the kickplate. Restore power and water. Run a short cycle and watch for the E15 code. If it does not come back, you fixed it. If it returns quickly, there may be an active leak that needs closer inspection.",
      },
    ],
    alternativeCauses: [
      "Cracked or loose door gasket",
      "Leaking spray arm seal",
      "Faulty flood switch sensor giving false readings",
      "Cracked sump or pump housing",
    ],
    whenToCallPro:
      "If you cannot find the leak source or the E15 code keeps returning, there may be an internal leak in the pump housing or spray arm assembly. A Bosch-certified technician can diagnose and fix it for $150–$300 depending on the part needed.",
    metaTitle:
      "Bosch Dishwasher E15 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Bosch dishwasher E15 error code (water in base). Drain the base pan and find the leak. Difficulty: Medium. Save $200+.",
  },
  {
    id: "samsung-dishwasher-lc-error",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "lc-error-code",
    problemTitle: "LC Error Code (Leak Detected)",
    difficulty: "Medium",
    timeEstimate: "15-40 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: ["Towels", "Phillips screwdriver", "Flashlight"],
    partsNeeded: [
      {
        name: "Leak Sensor Assembly (if sensor is defective)",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+dishwasher+leak+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+dishwasher+leak+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and unplug it before inspecting.",
      "Shut off the water supply valve under the sink.",
      "Wipe up any standing water to prevent slipping.",
    ],
    quickDiagnosis:
      "The LC code means your Samsung dishwasher thinks it has detected a water leak. Sometimes there is an actual leak, but often the sensor in the base gets triggered by a small amount of condensation or a minor spill. Checking the base and drying the sensor usually clears this code.",
    steps: [
      {
        number: 1,
        title: "Turn off power and water supply",
        description:
          "Unplug the dishwasher or flip its breaker. Turn off the water supply valve under the sink. Wait two minutes — sometimes the code clears on its own after a power reset.",
      },
      {
        number: 2,
        title: "Remove the bottom front panel",
        description:
          "Locate the screws on the front bottom panel (kickplate) and remove them. Pull the panel off to expose the base area underneath. Check for pooled water or dripping.",
      },
      {
        number: 3,
        title: "Dry the base and sensor area",
        description:
          "Use towels to soak up any water in the base. Find the leak sensor — it is a small disc or float usually near the front-left of the base. Make sure it moves freely and is completely dry. Moisture on the sensor can trigger a false LC code.",
      },
      {
        number: 4,
        title: "Inspect hoses and connections",
        description:
          "While the panel is off, use a flashlight to check all the hose connections, the door gasket, and the area around the pump. Look for water stains, mineral deposits, or dripping. Tighten any hose clamps that seem loose.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Replace the bottom panel, restore power and water, and run a short cycle. If the LC code does not return, you are all set. If it comes back right away without any visible water, the sensor itself may be faulty and need replacing.",
      },
    ],
    alternativeCauses: [
      "Worn or damaged door gasket",
      "Loose hose connection at the pump or inlet",
      "Cracked tub or sump housing",
      "Faulty moisture sensor giving false alarms",
    ],
    whenToCallPro:
      "If there is an active leak you cannot pinpoint, or if the sensor keeps triggering with no water present, a technician can run diagnostics. Expect to pay $120–$250 depending on whether the fix is a gasket, hose clamp, or sensor replacement.",
    metaTitle:
      "Samsung Dishwasher LC Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung dishwasher LC error code (leak detected). Dry the base and check connections. Difficulty: Medium. Save $150+.",
  },
  {
    id: "ge-dishwasher-flashing-lights-reset",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "flashing-lights-reset",
    problemTitle: "Flashing Lights / Blinking Display (Needs Reset)",
    difficulty: "Easy",
    timeEstimate: "5-10 minutes",
    costEstimate: "$0",
    toolsNeeded: ["None"],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the dishwasher or turn off the breaker before performing a hard reset.",
      "Do not open the door mid-cycle if the lights are flashing — wait until it finishes or reset first.",
    ],
    quickDiagnosis:
      "When your GE dishwasher lights flash or blink rapidly, the control board is stuck in an error state. This happens after power surges, interrupted cycles, or a door being opened at the wrong time. A simple reset sequence clears it in most cases.",
    steps: [
      {
        number: 1,
        title: "Try a button reset first",
        description:
          "Press the Start/Reset button firmly and hold it for about 3 seconds. On some GE models, you need to press it twice. The dishwasher should beep and begin a drain cycle that lasts about two minutes. Wait for it to finish completely.",
      },
      {
        number: 2,
        title: "Perform a hard power reset",
        description:
          "If the button reset did not work, unplug the dishwasher from the wall outlet (usually under the sink) or flip its circuit breaker off. Leave it off for a full 60 seconds. This drains residual power from the control board and clears the error state.",
      },
      {
        number: 3,
        title: "Restore power",
        description:
          "Plug the dishwasher back in or flip the breaker on. Wait 15 seconds for the control board to initialize. The flashing lights should be gone and the display should return to normal.",
      },
      {
        number: 4,
        title: "Run a test cycle",
        description:
          "Select a short wash cycle and press Start. Watch for the first few minutes to make sure it fills with water and begins washing normally. If the lights start flashing again during the cycle, there may be an underlying issue like a failed sensor or stuck button.",
      },
    ],
    alternativeCauses: [
      "Stuck or shorted button on the control panel",
      "Faulty control board",
      "Door latch not engaging properly",
      "Power surge damage to electronics",
    ],
    whenToCallPro:
      "If the flashing lights keep returning after multiple resets, the control board or keypad may be failing. Board replacement runs $150–$300 with labor. It is worth calling a pro if resets only provide a temporary fix.",
    metaTitle:
      "GE Dishwasher Flashing Lights — Free Reset Guide | RepairItFree",
    metaDescription:
      "Fix a GE dishwasher with flashing or blinking lights. A simple reset usually clears it. Difficulty: Easy. Takes under 10 minutes.",
  },

  // ============================================================
  // DRYERS
  // ============================================================
  {
    id: "lg-dryer-d80-d90-d95-error",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "d80-d90-d95-error-code",
    problemTitle: "D80 / D90 / D95 Error Code (Airflow Restriction)",
    difficulty: "Easy",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Vacuum cleaner with hose attachment",
      "Dryer vent brush or lint brush kit",
      "Screwdriver",
    ],
    partsNeeded: [
      {
        name: "Dryer Vent Cleaning Kit (brush and rods)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=dryer+vent+cleaning+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=dryer+vent+cleaning+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before cleaning the vent system.",
      "If your dryer is gas-powered, turn off the gas supply valve as well.",
      "Clogged dryer vents are a fire hazard — this is an important maintenance task.",
    ],
    quickDiagnosis:
      "The D80, D90, and D95 codes all mean the same thing: your LG dryer is detecting restricted exhaust airflow. The number tells you how blocked it is — D80 means 80% blocked, D95 means 95% blocked. The cause is almost always a clogged dryer vent duct. Cleaning it out fixes the problem and also reduces your fire risk.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer and pull it away from the wall",
        description:
          "Disconnect the power cord. If it is a gas dryer, also turn off the gas valve. Carefully slide the dryer forward so you can access the back. You need about 2-3 feet of space to work.",
      },
      {
        number: 2,
        title: "Disconnect the vent duct",
        description:
          "Loosen the clamp or tape holding the flexible vent duct to the back of the dryer. Pull the duct off. You will likely see a buildup of lint right at the connection point. Remove all lint by hand and vacuum the opening on the dryer.",
      },
      {
        number: 3,
        title: "Clean the entire vent run",
        description:
          "Use a dryer vent brush kit to clean the duct all the way to where it exits your house. Feed the brush in from the dryer end and work it through. Then go outside and check the exterior vent hood — remove any lint or debris blocking it. Use a vacuum to get everything out.",
      },
      {
        number: 4,
        title: "Check for crushed or kinked duct sections",
        description:
          "While the duct is disconnected, inspect its full length. If any section is crushed flat or has a sharp bend, replace it. Flexible foil ducts kink easily — if yours is badly damaged, consider replacing it with rigid or semi-rigid metal duct for better airflow.",
      },
      {
        number: 5,
        title: "Reconnect and test",
        description:
          "Reattach the vent duct securely with a clamp. Push the dryer back into place without crushing the duct. Plug it in and run a timed dry cycle for 10 minutes. The D80/D90/D95 code should be gone and clothes should dry faster than before.",
      },
    ],
    alternativeCauses: [
      "Vent duct is too long or has too many bends",
      "Exterior vent flap is stuck closed or blocked by debris",
      "Lint filter housing inside the dryer is clogged",
    ],
    whenToCallPro:
      "If your vent run is very long, goes through tight spaces, or runs through the roof, a professional vent cleaning service can handle it for $100–$170. This is worth it for peace of mind on fire safety.",
    metaTitle:
      "LG Dryer D80 D90 D95 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the LG dryer D80, D90, or D95 error (restricted airflow). Clean the dryer vent to restore airflow. Difficulty: Easy. Save $150+.",
  },
  {
    id: "samsung-dryer-he-error",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "he-error-code",
    problemTitle: "HE Error Code (Heating Element Issue)",
    difficulty: "Hard",
    timeEstimate: "45-90 minutes",
    costEstimate: "$20–$60",
    toolsNeeded: [
      "Multimeter",
      "Phillips and flathead screwdrivers",
      "Nut driver set (1/4 inch and 5/16 inch)",
    ],
    partsNeeded: [
      {
        name: "Dryer Heating Element",
        costRange: "$20–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+dryer+heating+element&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+dryer+heating+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermal Fuse (if blown)",
        costRange: "$5–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before any disassembly — this repair involves electrical components.",
      "If it is a gas dryer, the HE code may indicate a gas valve issue — do not attempt gas repairs yourself.",
      "Do not bypass the thermal fuse — it is a critical safety device.",
    ],
    quickDiagnosis:
      "The HE code means your Samsung dryer is not reaching the right temperature. In electric dryers, this is usually a burned-out heating element or a blown thermal fuse. Both are common failure points. In gas dryers, the issue may be the gas valve solenoid or igniter — gas repairs are best left to professionals.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer and access the back panel",
        description:
          "Pull the power cord from the outlet. Remove the screws holding the back panel of the dryer in place. Set the panel aside. The heating element assembly is usually located at the bottom-right or bottom-left, inside a metal housing.",
      },
      {
        number: 2,
        title: "Test the thermal fuse first",
        description:
          "Find the thermal fuse — it is a small, flat component on the blower housing or exhaust duct. Set your multimeter to continuity mode. Touch the probes to each terminal. If you do not get a beep or zero reading, the fuse is blown. This is the cheapest and most common fix.",
      },
      {
        number: 3,
        title: "Test the heating element",
        description:
          "Locate the heating element housing (a metal can with wires running to it). Disconnect the wires and test for continuity across the two terminals. If there is no continuity, the element is broken and needs replacing. Also test each terminal to the housing — if you get continuity there, the element is grounded and must be replaced.",
      },
      {
        number: 4,
        title: "Replace the faulty part",
        description:
          "If the thermal fuse is blown, unscrew it and install the new one in its place — it takes about 2 minutes. If the heating element is bad, remove the screws holding the element housing, disconnect the wires (take a photo first so you remember where they go), and install the new element.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Reconnect all wires, put the back panel on, and plug the dryer in. Run a timed heat cycle for 10 minutes and check that the drum gets warm. If it heats up, you are done. Also clean your dryer vent — a clogged vent is often the reason the thermal fuse blew in the first place.",
      },
    ],
    alternativeCauses: [
      "Blown high-limit thermostat",
      "Defective cycling thermostat",
      "Faulty control board not sending power to the element",
      "Gas valve solenoid failure (gas dryers only)",
    ],
    whenToCallPro:
      "If you do not own a multimeter or are not comfortable working with electrical connections, call a pro. Heating element replacement runs $150–$300 with labor. Gas dryer heating issues should always be handled by a professional.",
    metaTitle:
      "Samsung Dryer HE Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung dryer HE error code (no heat). Usually a heating element or thermal fuse. Difficulty: Hard. Save $200+.",
  },
  {
    id: "whirlpool-dryer-f1-error",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "f1-error-code",
    problemTitle: "F1 Error Code (Control Board Failure)",
    difficulty: "Hard",
    timeEstimate: "30-60 minutes",
    costEstimate: "$80–$200",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flathead screwdriver or putty knife",
      "Phone or camera (to photograph wire connections)",
    ],
    partsNeeded: [
      {
        name: "Main Control Board",
        costRange: "$80–$180",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+dryer+main+control+board&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+dryer+main+control+board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before removing any panels or touching the control board.",
      "Handle the control board carefully — static electricity can damage electronic components.",
      "Take photos of all wire connections before disconnecting anything.",
    ],
    quickDiagnosis:
      "The F1 error on a Whirlpool dryer means the main electronic control board has detected an internal fault. Before replacing the board, it is worth trying a hard reset — sometimes a power glitch causes a false F1 code. If the code keeps coming back, the board likely needs to be replaced.",
    steps: [
      {
        number: 1,
        title: "Try a hard reset first",
        description:
          "Unplug the dryer from the wall outlet and wait a full 5 minutes. This is longer than a typical reset because the control board capacitors need time to fully discharge. Plug it back in and see if the F1 code returns. If it does not, you may have just had a power glitch.",
      },
      {
        number: 2,
        title: "Check the wire connections on the control board",
        description:
          "Unplug the dryer. Remove the top panel — on most Whirlpool dryers, insert a putty knife between the top and front panel to release the spring clips, then lift the top. The control board is usually behind the back panel of the console. Check that all wire harness connectors are firmly seated.",
      },
      {
        number: 3,
        title: "Inspect the board for visible damage",
        description:
          "Look closely at the control board. Check for burn marks, melted components, cracked solder joints, or any signs of overheating. If you see obvious damage, the board needs replacing. Take a photo of the board part number for ordering the correct replacement.",
      },
      {
        number: 4,
        title: "Replace the control board",
        description:
          "Take a photo of every wire connection before removing anything. Disconnect the wire harnesses one at a time. Remove the screws or clips holding the board in place. Install the new board and reconnect every wire exactly where it was. Your photo is your guide here — getting a wire in the wrong spot can damage the new board.",
      },
      {
        number: 5,
        title: "Test the dryer",
        description:
          "Reassemble the console and top panel. Plug the dryer in and run a timed cycle. The F1 code should be gone and the dryer should operate normally. If the F1 code appears again on the new board, there may be a wiring issue or a failed component elsewhere sending bad signals to the board.",
      },
    ],
    alternativeCauses: [
      "Loose wire harness connection on the control board",
      "Power surge damage",
      "Faulty thermistor or sensor sending bad data to the board",
    ],
    whenToCallPro:
      "Control board replacement is doable for a handy person, but at $80-$200 for the part alone, you want to be sure the board is the problem. A technician can run full diagnostics for $80-$120 to confirm. Total pro repair runs $200–$350.",
    metaTitle:
      "Whirlpool Dryer F1 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Whirlpool dryer F1 error code (control board fault). Try a reset first, then replace the board if needed. Difficulty: Hard. Save $200+.",
  },

  // ============================================================
  // REFRIGERATORS
  // ============================================================
  {
    id: "samsung-fridge-22e-error",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "22e-error-code",
    problemTitle: "22E Error Code (Fan Motor Issue)",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$20–$80",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
      "Hair dryer or steamer (if ice buildup present)",
    ],
    partsNeeded: [
      {
        name: "Evaporator Fan Motor",
        costRange: "$20–$70",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+refrigerator+evaporator+fan+motor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+refrigerator+evaporator+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before working inside it.",
      "Move perishable food to a cooler while you work.",
      "Be careful with the hair dryer around standing water or frost — keep it dry.",
    ],
    quickDiagnosis:
      "The 22E code means the evaporator fan in the freezer section is not running properly. This fan is what circulates cold air throughout the fridge and freezer. If it stops, the fridge will warm up. Common causes are ice buildup blocking the fan blades, or the fan motor itself has failed.",
    steps: [
      {
        number: 1,
        title: "Unplug the fridge and empty the freezer",
        description:
          "Pull the power cord from the wall. Take everything out of the freezer and set it in a cooler with ice packs. You need clear access to the back wall of the freezer compartment.",
      },
      {
        number: 2,
        title: "Remove the freezer back panel",
        description:
          "Inside the freezer, remove the screws holding the back panel or evaporator cover in place. There are usually 4-8 screws. Gently pull the panel forward — it may have a wire harness connected to it, so do not yank it out. Unplug the harness if present.",
      },
      {
        number: 3,
        title: "Check for ice buildup around the fan",
        description:
          "Look at the fan and the area around it. If there is a large buildup of frost or ice on or near the fan blades, that is likely what is blocking it. Use a hair dryer on low heat to melt the ice. Be patient and catch the water with towels. Do not use a sharp tool to chip ice — you could puncture a refrigerant line.",
      },
      {
        number: 4,
        title: "Test the fan motor",
        description:
          "Try spinning the fan blade by hand. It should spin freely. If it is stiff or does not move, the motor may be seized. If you have a multimeter, disconnect the motor wires and test for continuity. No continuity means the motor is burned out and needs replacing.",
      },
      {
        number: 5,
        title: "Replace the fan motor or reassemble",
        description:
          "If ice was the problem, let everything dry and reassemble. If the motor is bad, unscrew it from its bracket, disconnect the wire plug, and install the new motor. Then put the back panel on, restore the food, and plug the fridge in. It may take 24 hours to fully cool down again.",
      },
    ],
    alternativeCauses: [
      "Failed defrost heater causing recurring ice buildup",
      "Defective defrost thermostat or timer",
      "Wiring issue between the control board and the fan motor",
    ],
    whenToCallPro:
      "If ice keeps building up even after clearing it, there is a defrost system problem that needs diagnosing. A refrigerator technician can fix this for $150–$300. Fan motor replacement alone is about $100–$200 with labor.",
    metaTitle:
      "Samsung Fridge 22E Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Samsung refrigerator 22E error code (fan motor issue). Clear ice or replace the fan. Difficulty: Medium. Save $200+.",
  },
  {
    id: "lg-fridge-dh-error",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "dh-error-code",
    problemTitle: "DH Error Code (Defrost Heater Issue)",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$20–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
      "Hair dryer (for melting ice)",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Defrost Heater Assembly",
        costRange: "$20–$45",
        amazonUrl:
          "https://www.amazon.com/s?k=lg+refrigerator+defrost+heater&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=lg+refrigerator+defrost+heater&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before working inside the freezer.",
      "Transfer perishable food to a cooler with ice packs.",
      "The defrost heater operates at high temperatures — let it cool before handling.",
    ],
    quickDiagnosis:
      "The DH error on an LG fridge means the defrost cycle is not working correctly. Every fridge periodically heats up its evaporator coils to melt frost buildup. When the defrost heater fails, ice builds up on the coils, blocks airflow, and the fridge stops cooling properly. You may also notice frost or ice inside the freezer compartment.",
    steps: [
      {
        number: 1,
        title: "Unplug the fridge and clear out the freezer",
        description:
          "Disconnect the power cord. Remove all food from the freezer and store it in a cooler. Remove any shelves, drawers, or ice trays that are in the way of the back panel.",
      },
      {
        number: 2,
        title: "Remove the freezer back panel",
        description:
          "Unscrew the rear panel inside the freezer compartment. There are usually 6-10 screws. Gently pry it forward. Behind it you will see the evaporator coils and the defrost heater, which is a glass tube or metal rod running along the bottom of the coils.",
      },
      {
        number: 3,
        title: "Melt any ice buildup",
        description:
          "If the coils are covered in a thick sheet of ice, use a hair dryer on medium heat to carefully melt it. Lay towels at the bottom to catch the water. Do not use anything sharp to chip the ice — you could damage the coils or puncture a refrigerant line. This step can take 15-20 minutes.",
      },
      {
        number: 4,
        title: "Test the defrost heater",
        description:
          "Once the ice is cleared, disconnect the wires from the defrost heater. Set your multimeter to continuity mode and test across the heater terminals. If you get no reading (open circuit), the heater is burned out and needs replacing. If you do get continuity, the heater is fine and the problem may be the defrost thermostat or control board.",
      },
      {
        number: 5,
        title: "Replace and reassemble",
        description:
          "If the heater tested bad, unclip or unscrew it and install the replacement. Reconnect the wires, put the back panel on, and reinstall the shelves. Plug the fridge back in. It will take 12-24 hours to return to normal temperature. The DH code should clear automatically.",
      },
    ],
    alternativeCauses: [
      "Faulty defrost thermostat (bi-metal)",
      "Failed defrost timer or control board relay",
      "Wiring break between the control board and the heater",
    ],
    whenToCallPro:
      "If the heater tests fine, the issue is likely the defrost thermostat or control board — diagnosing those requires more advanced testing. A technician can run the full defrost diagnostic for $100–$200. Total repair with parts is typically $150–$300.",
    metaTitle:
      "LG Fridge DH Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the LG refrigerator DH error code (defrost heater failure). Test and replace the heater. Difficulty: Medium. Save $200+.",
  },
  {
    id: "frigidaire-fridge-h1-error",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "h1-error-code",
    problemTitle: "H1 Error Code (High Temperature Alarm)",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Vacuum cleaner with brush attachment",
      "Coil cleaning brush",
      "Thermometer (optional)",
    ],
    partsNeeded: [
      {
        name: "Condenser Fan Motor (if fan is faulty)",
        costRange: "$25–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+refrigerator+condenser+fan+motor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+refrigerator+condenser+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before cleaning the condenser coils.",
      "Move perishable food to a cooler if the fridge has been warm for more than 4 hours.",
      "The compressor area may be hot — let it cool before reaching in.",
    ],
    quickDiagnosis:
      "The H1 code means the temperature inside your Frigidaire freezer or fridge has risen above the safe range. This can happen if the door was left open, the condenser coils are clogged with dust, the condenser fan stopped working, or there is a more serious cooling system failure. Start with the simple causes first.",
    steps: [
      {
        number: 1,
        title: "Check the basics",
        description:
          "Make sure the fridge doors are fully closed and the gaskets are sealing properly. Check that the temperature setting has not been accidentally changed. If someone left the door open for a while, close it and wait 2-3 hours — the H1 alarm often clears on its own once the temperature drops back down.",
      },
      {
        number: 2,
        title: "Make sure air can circulate inside",
        description:
          "Look inside the freezer and fridge. If food is packed tightly against the vents, air cannot circulate properly. Rearrange items so there is space around the vents (usually on the back wall). Also make sure nothing is blocking the vents between the freezer and fridge compartments.",
      },
      {
        number: 3,
        title: "Clean the condenser coils",
        description:
          "Unplug the fridge. The condenser coils are usually on the back of the unit or behind a bottom front panel. Use a vacuum with a brush attachment and a coil cleaning brush to remove dust and pet hair. Dirty coils are one of the top reasons a fridge cannot keep up with cooling demand.",
      },
      {
        number: 4,
        title: "Check the condenser fan",
        description:
          "While the bottom panel is off, look for the condenser fan near the compressor. Try spinning it by hand — it should spin freely. If it is stiff or does not spin, the motor may be seized. Plug the fridge in briefly and listen — you should hear the fan running. If it does not spin when the compressor is on, the fan motor needs replacing.",
      },
      {
        number: 5,
        title: "Monitor the temperature",
        description:
          "Plug the fridge back in, close the doors, and wait 4-6 hours. The temperature should gradually come down and the H1 alarm should clear. If it does not improve after 6 hours, the compressor or sealed system may be failing, which is a job for a professional.",
      },
    ],
    alternativeCauses: [
      "Evaporator fan failure (inside the freezer)",
      "Defrost system failure causing ice-blocked coils",
      "Low refrigerant from a sealed system leak",
      "Compressor failure",
    ],
    whenToCallPro:
      "If cleaning the coils and checking the fans does not bring the temperature down, the sealed system (compressor, refrigerant) may be the issue. Sealed system repairs cost $300–$600. If your fridge is more than 10 years old, replacing it may make more sense financially.",
    metaTitle:
      "Frigidaire Fridge H1 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Frigidaire refrigerator H1 error (high temperature alarm). Clean coils and check fans. Difficulty: Medium. Save $200+.",
  },

  // ============================================================
  // OVENS & RANGES
  // ============================================================
  {
    id: "ge-oven-f2-error",
    category: "Ovens &amp; Ranges",
    categorySlug: "ovens-ranges",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "f2-error-code",
    problemTitle: "F2 Error Code (Over Temperature)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$15–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
      "Nut driver (1/4 inch)",
    ],
    partsNeeded: [
      {
        name: "Oven Temperature Sensor (RTD probe)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=ge+oven+temperature+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ge+oven+temperature+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the oven and let it cool completely before working on it.",
      "Turn off the oven's circuit breaker — ovens use 240V which is especially dangerous.",
      "Do not attempt this repair if your oven uses gas — the F2 code in gas ovens may involve gas valve issues.",
    ],
    quickDiagnosis:
      "The F2 code on a GE oven means the control board detected a temperature higher than normal. This usually happens because the oven temperature sensor has drifted or failed, telling the board the temperature is dangerously high when it may not actually be. The sensor is an inexpensive and easy part to replace.",
    steps: [
      {
        number: 1,
        title: "Turn off power and let the oven cool",
        description:
          "Cancel any running cycle and turn off the circuit breaker for the oven. If the oven was running and is actually very hot, let it cool for at least an hour before working inside. Safety first — ovens run on 240V which is dangerous.",
      },
      {
        number: 2,
        title: "Locate the temperature sensor",
        description:
          "Open the oven door and look at the top of the back wall inside the oven. You will see a thin metal rod or probe sticking out a few inches — that is the temperature sensor (also called an RTD probe). It is usually held in place by one or two screws.",
      },
      {
        number: 3,
        title: "Test the sensor with a multimeter",
        description:
          "Disconnect the wire plug from the sensor (you may need to pull the oven out slightly to reach it from the back). Set your multimeter to ohms. At room temperature, a working GE oven sensor should read approximately 1,080-1,100 ohms. If you get a very high reading, zero, or no reading at all, the sensor is bad.",
      },
      {
        number: 4,
        title: "Replace the sensor",
        description:
          "Remove the one or two screws holding the sensor bracket inside the oven. Pull the sensor out through the back wall. Feed the new sensor through the hole, screw it in, and reconnect the wire plug. Make sure the connection is snug.",
      },
      {
        number: 5,
        title: "Restore power and test",
        description:
          "Turn the circuit breaker back on. Set the oven to 350 degrees and let it preheat. Use a separate oven thermometer to verify it reaches the right temperature without the F2 code appearing. If the code comes back with a new sensor, the control board may be at fault.",
      },
    ],
    alternativeCauses: [
      "Faulty oven control board",
      "Shorted wiring between the sensor and the control board",
      "Runaway relay on the control board keeping the element on",
    ],
    whenToCallPro:
      "If the new sensor does not fix the F2 code, the control board may have a stuck relay that keeps the heating element on. Board replacement runs $150–$350 with labor. Since ovens use 240V, this is a good time to call a professional if you are not confident.",
    metaTitle:
      "GE Oven F2 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the GE oven F2 error code (over temperature). Test and replace the temperature sensor. Difficulty: Medium. Save $200+.",
  },
  {
    id: "whirlpool-oven-f5-e1-error",
    category: "Ovens &amp; Ranges",
    categorySlug: "ovens-ranges",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "f5-e1-error-code",
    problemTitle: "F5 E1 Error Code (Door Latch Failure)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$20–$60",
    toolsNeeded: [
      "Phillips screwdriver",
      "Torx T20 screwdriver",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Oven Door Latch Assembly",
        costRange: "$20–$55",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+oven+door+latch+assembly&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+oven+door+latch+assembly&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the circuit breaker for the oven before working on the latch.",
      "If the door is locked from a failed self-clean cycle, do not force it open — you could break the latch mechanism.",
      "Let the oven cool completely before attempting any work.",
    ],
    quickDiagnosis:
      "The F5 E1 code on a Whirlpool oven means the door latch is not working correctly. This usually shows up during or after a self-cleaning cycle when the door locks. The latch motor may be stuck, the latch switch may be misaligned, or the latch assembly may need replacing. Sometimes a simple reset fixes it.",
    steps: [
      {
        number: 1,
        title: "Try a power reset first",
        description:
          "Turn off the oven's circuit breaker and wait 5 full minutes. Turn it back on. Sometimes the latch motor just needs to reset. If the door was locked, it may unlock after the reset. Try opening the door gently — do not force it.",
      },
      {
        number: 2,
        title: "Run a short self-clean cycle",
        description:
          "If the door is stuck locked, set the oven to self-clean for the shortest time available, then cancel it after a minute or two. This can trigger the latch motor to cycle and unlock. Wait for the oven to cool before trying the door again.",
      },
      {
        number: 3,
        title: "Access the door latch assembly",
        description:
          "If resets do not help, turn off the breaker. Remove the screws on the back of the oven's top panel (control panel area) and tilt or lift it to access the latch mechanism. The latch assembly is at the top-center of the oven frame, right above the door opening.",
      },
      {
        number: 4,
        title: "Inspect and test the latch",
        description:
          "Look at the latch assembly. Check if the latch arm moves freely or if it is jammed. Look for broken plastic parts or a burned-out motor. If the arm is stuck, try gently moving it by hand (with the power OFF). If the motor or switch is obviously damaged, the assembly needs replacing.",
      },
      {
        number: 5,
        title: "Replace the latch assembly if needed",
        description:
          "Disconnect the wire harness from the old latch. Remove the mounting screws. Install the new latch assembly, reconnect the wires, and reassemble the top panel. Restore power and test the oven — start a self-clean cycle briefly to verify the latch engages and releases properly.",
      },
    ],
    alternativeCauses: [
      "Misaligned oven door not triggering the latch switch",
      "Faulty door lock motor",
      "Control board not sending the correct signal to the latch",
    ],
    whenToCallPro:
      "If you cannot get the door unlocked or the latch assembly is hard to access on your model, a technician can help. Latch replacement with labor runs $120–$250. If the control board is the root cause, expect $200–$400 for the repair.",
    metaTitle:
      "Whirlpool Oven F5 E1 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix the Whirlpool oven F5 E1 error (door latch failure). Reset or replace the latch assembly. Difficulty: Medium. Save $200+.",
  },
];
