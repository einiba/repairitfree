import { Guide } from "@/lib/types";

export const applianceGuides: Guide[] = [
  // ============================================================
  // WASHING MACHINES
  // ============================================================
  {
    id: "whirlpool-washer-f21-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "f21-error-code",
    problemTitle: "F21 Error Code (Long Drain)",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Flathead screwdriver",
      "Towels or shallow pan",
      "Pliers",
    ],
    partsNeeded: [
      {
        name: "Drain Pump (if pump is faulty)",
        costRange: "$15–$25",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+washer+drain+pump&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=whirlpool+washer+drain+pump&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washing machine before doing any work.",
      "Have towels ready — water will come out when you open the drain filter.",
      "Keep the area around the machine dry to avoid slipping.",
    ],
    quickDiagnosis:
      "The F21 code means your Whirlpool washer is taking too long to drain the water out. Most of the time, something is clogged in the drain filter — like a coin, hair tie, or sock. Cleaning the filter usually fixes this, and most people can do it in under 20 minutes.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer",
        description:
          "Pull the power cord out of the wall. Never work on a plugged-in appliance. If the tub is full of water, you will drain it in the next steps.",
      },
      {
        number: 2,
        title: "Find the drain filter access panel",
        description:
          "Look at the bottom-front of your washer. There is a small rectangular panel (about 6 inches wide). Use a flathead screwdriver to pop it open. Behind it you will see a round cap — that is the drain filter.",
      },
      {
        number: 3,
        title: "Prepare for water",
        description:
          "Place towels or a shallow baking pan under the filter area. When you open the filter, any water left in the tub will pour out. If the tub is full, you may need to let it drain slowly by turning the cap just a quarter turn at a time.",
      },
      {
        number: 4,
        title: "Remove and clean the drain filter",
        description:
          "Turn the round cap counter-clockwise and pull it out. You will probably find lint, coins, hair ties, or other small items. Clean everything off the filter and look inside the opening for anything else stuck in there. Use your fingers or pliers to pull out debris.",
      },
      {
        number: 5,
        title: "Check the drain hose",
        description:
          "While the filter is out, check the drain hose at the back of the machine. Make sure it is not kinked or clogged. You can blow into it gently to check for blockages.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the drain filter back in by turning it clockwise until snug. Close the access panel. Plug the washer back in and run a short rinse-and-spin cycle. The F21 code should be gone. If it comes back, the drain pump itself may need replacing.",
      },
    ],
    alternativeCauses: [
      "Kinked or clogged drain hose behind the machine",
      "Faulty drain pump motor",
      "Clogged standpipe or house drain where the hose connects",
    ],
    whenToCallPro:
      "If cleaning the filter and checking the hose does not fix it, the drain pump motor may be burned out. Replacing it is a Medium-difficulty job. If you are not comfortable pulling the machine out and removing panels, a repair tech can do it for $100–$200 including the part.",
    metaTitle:
      "Whirlpool Washer F21 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the Whirlpool washer F21 error code (long drain). Usually a clogged drain filter. Difficulty: Easy. Save $150+.",
  },
  {
    id: "samsung-washer-ue-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "ue-error-code",
    problemTitle: "UE Error Code (Unbalanced Load)",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: ["None (unless leveling legs need adjusting — then a wrench)"],
    partsNeeded: [
      {
        name: "Suspension Rod Kit (if rods are worn)",
        costRange: "$20–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+washer+suspension+rod+kit",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+washer+suspension+rod+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before reaching inside the drum.",
      "Be careful with heavy or wet laundry — it can be surprisingly heavy.",
    ],
    quickDiagnosis:
      "The UE error means your Samsung washer detected an unbalanced load during the spin cycle. The clothes bunched up on one side, so the machine stopped to protect itself. This is almost always fixed by rearranging the laundry — no parts needed.",
    steps: [
      {
        number: 1,
        title: "Pause and open the door",
        description:
          "Press the Pause button and wait for the door to unlock (this may take a minute or two if there is water inside). Open the door once it unlocks.",
      },
      {
        number: 2,
        title: "Rearrange the laundry",
        description:
          "Pull the clothes apart and spread them evenly around the drum. Heavy items like towels and jeans tend to clump together. Mix heavy items with lighter ones. Do not overload the drum — leave about a hand's width of space at the top.",
      },
      {
        number: 3,
        title: "Check for single heavy items",
        description:
          "If you are washing one heavy item by itself (like a comforter or a large blanket), add a few towels to balance it out. A single heavy item will almost always cause this error.",
      },
      {
        number: 4,
        title: "Make sure the washer is level",
        description:
          "Gently push on the corners of the washer. If it rocks or wobbles, the legs are not level. Turn the front legs by hand (or with a wrench) until the machine sits flat and does not rock at all.",
      },
      {
        number: 5,
        title: "Restart the cycle",
        description:
          "Close the door and press Start. The washer should continue without the UE error. If the error keeps coming back even with a balanced load on a level machine, the suspension rods inside the washer may be worn out and need replacing.",
      },
    ],
    alternativeCauses: [
      "Washer not sitting level on the floor",
      "Worn suspension rods or shock absorbers",
      "Damaged drum bearings (you would hear a loud rumbling noise)",
    ],
    whenToCallPro:
      "If rearranging the load and leveling the machine does not fix it, the suspension system may be worn. Replacing suspension rods is a Medium job that costs $100–$200 with a technician. If you hear loud grinding or rumbling during spin, the drum bearings may be failing — that is a job for a pro ($200–$400).",
    metaTitle:
      "Samsung Washer UE Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the Samsung washer UE error code (unbalanced load). Usually fixed by rearranging clothes. Difficulty: Easy. Save $100+.",
  },
  {
    id: "lg-washer-oe-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "oe-error-code",
    problemTitle: "OE Error Code (Drain Error)",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Flathead screwdriver",
      "Towels or shallow pan",
      "Pliers",
    ],
    partsNeeded: [
      {
        name: "Drain Pump (if pump is faulty)",
        costRange: "$18–$30",
        amazonUrl: "https://www.amazon.com/s?k=lg+washer+drain+pump&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=lg+washer+drain+pump&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washing machine before doing anything.",
      "Have plenty of towels ready — water will spill when you open the filter.",
      "Do not tip the machine while it is full of water.",
    ],
    quickDiagnosis:
      "The OE error on your LG washer means the water is not draining out properly. The most common cause is something stuck in the drain pump filter — coins, bobby pins, and small socks are the usual culprits. Cleaning the filter takes about 15 minutes and fixes this problem most of the time.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer",
        description:
          "Pull the power cord from the wall outlet. Safety first — never work on a machine that is plugged in.",
      },
      {
        number: 2,
        title: "Locate the drain pump filter",
        description:
          "On LG front-load washers, look at the bottom-left corner of the front panel. There is a small access door. Open it with a flathead screwdriver or by pressing the tab. You will see a small hose and a round filter cap.",
      },
      {
        number: 3,
        title: "Drain remaining water",
        description:
          "Pull out the small emergency drain hose (next to the filter cap). Place the end in a shallow pan or bowl and remove the plug. Let the water drain out slowly. This can take a few minutes if the tub is full.",
      },
      {
        number: 4,
        title: "Remove and clean the filter",
        description:
          "Once the water has drained, turn the round filter cap counter-clockwise and pull it out. Remove any debris — coins, hair, lint, or small clothing items. Rinse the filter under running water.",
      },
      {
        number: 5,
        title: "Check the drain hose",
        description:
          "Look at the drain hose at the back of the machine. Make sure it is not kinked, pinched, or clogged. Also check where it connects to your standpipe or sink — that connection can get clogged too.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the filter back in (turn clockwise until snug), plug the small drain hose back in, and close the access door. Plug the washer in and run a quick rinse-and-spin cycle. The OE error should be cleared.",
      },
    ],
    alternativeCauses: [
      "Kinked drain hose behind the washer",
      "Clogged standpipe or home plumbing issue",
      "Failed drain pump motor",
      "Faulty water level pressure switch",
    ],
    whenToCallPro:
      "If the filter is clean and the hose is not kinked, the drain pump motor itself may have failed. You can test it by listening — if you hear a humming noise but no water drains, the pump is likely stuck or burned out. Replacing the pump is a Medium job. A tech will charge $120–$200 including the part.",
    metaTitle: "LG Washer OE Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the LG washer OE error code (drain error). Usually a clogged filter. Difficulty: Easy. Save $150+.",
  },
  {
    id: "maytag-washer-not-spinning",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Maytag",
    brandSlug: "maytag",
    problemSlug: "not-spinning",
    problemTitle: "Washer Not Spinning",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$45",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Pliers",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Lid Switch Assembly",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=maytag+washer+lid+switch&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=maytag+washer+lid+switch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Drive Belt",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=maytag+washer+drive+belt&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=maytag+washer+drive+belt&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washing machine before starting any repair.",
      "Do not reach into the drum while the machine is plugged in.",
      "If the tub is full of water, drain it first using the drain hose.",
    ],
    quickDiagnosis:
      "When your Maytag washer fills with water and agitates but will not spin, the most common cause is a broken lid switch (on top-loaders) or a worn drive belt. The lid switch is a safety device that tells the washer the lid is closed — if it breaks, the washer will not spin. This is a fix most people can handle.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer and check the basics",
        description:
          "Pull the power cord from the wall. First, check if the load is unbalanced — open the lid and spread the clothes evenly. Also make sure you are not overloading the machine. An overloaded washer often will not spin.",
      },
      {
        number: 2,
        title: "Test the lid switch",
        description:
          "With the washer plugged back in, open the lid and look for the small plastic piece that sticks up near the lid hinge — that is the lid switch actuator. Press it down with your finger. If you hear a click and the washer starts trying to spin, the lid switch is probably fine. If nothing happens, the lid switch is likely broken.",
      },
      {
        number: 3,
        title: "Replace the lid switch (if faulty)",
        description:
          "Unplug the washer again. On most Maytag top-loaders, the lid switch is under the top panel. Use a flathead screwdriver to pop the clips at the front corners, then lift the top panel up. Disconnect the wire harness from the old lid switch, remove the screws holding it, and install the new one in reverse order.",
      },
      {
        number: 4,
        title: "Check the drive belt",
        description:
          "If the lid switch is good, tilt the washer back and look underneath (have someone help you hold it). You should see a rubber belt connecting the motor to the drum. If the belt is broken, frayed, or has slipped off, that is your problem.",
      },
      {
        number: 5,
        title: "Replace the drive belt (if worn or broken)",
        description:
          "Slide the old belt off the pulleys. Put the new belt around the drum pulley first, then stretch it onto the motor pulley. It should be snug but not overly tight. Set the washer back upright.",
      },
      {
        number: 6,
        title: "Test the repair",
        description:
          "Plug the washer back in and run a spin cycle with a small load. The drum should spin up to full speed. If it still does not spin, the motor coupler or transmission may be the problem — those are harder fixes.",
      },
    ],
    alternativeCauses: [
      "Broken motor coupler (direct-drive models)",
      "Worn clutch assembly",
      "Faulty motor",
      "Bad transmission (rare, expensive)",
    ],
    whenToCallPro:
      "If replacing the lid switch and belt does not fix the problem, the motor coupler or clutch assembly may be worn out. These are doable DIY jobs but require taking more of the machine apart. If you are not confident, a tech will charge $150–$300 depending on the part needed.",
    metaTitle:
      "Maytag Washer Not Spinning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Maytag washer that won't spin. Usually a lid switch or belt issue. Difficulty: Medium. Save $150+.",
  },
  {
    id: "ge-washer-not-draining",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "not-draining",
    problemTitle: "Washer Not Draining",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Flathead screwdriver",
      "Pliers",
      "Towels or shallow pan",
      "Bucket",
    ],
    partsNeeded: [
      {
        name: "Drain Pump",
        costRange: "$18–$30",
        amazonUrl: "https://www.amazon.com/s?k=ge+washer+drain+pump&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ge+washer+drain+pump&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washing machine before starting.",
      "Have a bucket and towels ready — there will be standing water.",
      "Be careful not to slip on wet floors.",
    ],
    quickDiagnosis:
      "When your GE washer will not drain, the most likely cause is a clog in the drain pump filter or drain hose. Small items like coins, buttons, and hair ties love to get stuck in there. Clearing the clog is quick and easy — no special skills needed.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer",
        description:
          "Pull the plug from the wall outlet. Do not skip this step. Water and electricity are a dangerous combination.",
      },
      {
        number: 2,
        title: "Manually drain the standing water",
        description:
          "Pull the drain hose out of the standpipe or laundry sink and lower it into a bucket on the floor. Gravity will drain most of the water. You may need to empty the bucket a few times.",
      },
      {
        number: 3,
        title: "Check the drain hose for kinks or clogs",
        description:
          "Inspect the entire length of the drain hose from the back of the machine to where it connects to the wall. Straighten any kinks. Disconnect the hose from the machine (use pliers to loosen the clamp) and look inside for clogs. Flush it with water in a sink if needed.",
      },
      {
        number: 4,
        title: "Clean the drain pump filter (if accessible)",
        description:
          "Some GE washers have an accessible pump filter at the front bottom. If yours does, open the access panel, place towels down, and unscrew the filter cap. Remove any debris. If your model does not have a front-access filter, the pump is accessed from underneath.",
      },
      {
        number: 5,
        title: "Listen to the pump",
        description:
          "Plug the washer back in and start a drain/spin cycle. Listen to the pump area (bottom of machine). If you hear humming but no water drains, the pump may be jammed or burned out. If you hear nothing, the pump motor may have failed.",
      },
      {
        number: 6,
        title: "Test and confirm",
        description:
          "After cleaning, run a full cycle with a small load. The water should drain completely at the end. If the washer still will not drain, the pump likely needs replacing.",
      },
    ],
    alternativeCauses: [
      "Clogged standpipe or home plumbing",
      "Failed drain pump motor",
      "Faulty lid switch preventing spin/drain cycle",
      "Bad control board (rare)",
    ],
    whenToCallPro:
      "If cleaning the hose and filter does not work and the pump sounds dead, you will need a new drain pump. The part is cheap ($18–$30) but accessing it requires tilting or removing the back panel. If that sounds like too much, a tech will do it for $120–$180 total.",
    metaTitle: "GE Washer Not Draining — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a GE washer that won't drain. Usually a clogged filter or hose. Difficulty: Easy. Save $150+.",
  },
  {
    id: "whirlpool-washer-not-agitating",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "not-agitating",
    problemTitle: "Washer Not Agitating",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$5–$50",
    toolsNeeded: [
      "Socket wrench set (7/16 inch)",
      "Flathead screwdriver",
      "Phillips screwdriver",
      "Pliers",
    ],
    partsNeeded: [
      {
        name: "Agitator Dogs (Cam Kit)",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+washer+agitator+dogs&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+washer+agitator+dogs&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Motor Coupler",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+washer+motor+coupler&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+washer+motor+coupler&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washer before doing any work inside it.",
      "The agitator can be heavy — lift carefully.",
      "Do not reach under the machine while it is running.",
    ],
    quickDiagnosis:
      "If your Whirlpool top-load washer fills with water but the agitator does not move back and forth, the most common cause is worn agitator dogs — small plastic pieces inside the top of the agitator. They cost about $5 and most people can replace them in under 30 minutes. It is one of the easiest washer repairs there is.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer",
        description:
          "Pull the plug from the wall. Make sure the tub is empty or mostly empty before you start.",
      },
      {
        number: 2,
        title: "Remove the agitator cap and bolt",
        description:
          "The top of the agitator usually has a cap you can pry off with a flathead screwdriver. Under the cap you will find a bolt or nut (usually 7/16 inch). Remove it with a socket wrench. Some models have a fabric softener dispenser on top — twist it off first.",
      },
      {
        number: 3,
        title: "Pull the agitator out",
        description:
          "Grab the agitator firmly and pull straight up. It may take some force. Wiggle it back and forth while pulling if it is stuck. On dual-action agitators, the top half may come off separately from the bottom.",
      },
      {
        number: 4,
        title: "Replace the agitator dogs",
        description:
          "Turn the top part of the agitator upside down. Inside you will see small cam pieces (the agitator dogs). They are about 1 inch long and have teeth on them. If the teeth are worn smooth, that is your problem. Pull out the old ones and snap the new ones in with the teeth facing the same direction.",
      },
      {
        number: 5,
        title: "Reassemble the agitator",
        description:
          "Put the agitator back together and push it down into the tub. Tighten the bolt and snap the cap back on. Make sure the agitator sits firmly on the drive shaft.",
      },
      {
        number: 6,
        title: "Test it",
        description:
          "Plug the washer in and run a small wash cycle. The agitator should move back and forth vigorously. If it still does not agitate, the motor coupler may be broken — that is the next thing to check.",
      },
    ],
    alternativeCauses: [
      "Broken motor coupler (connects motor to transmission)",
      "Worn drive belt (belt-drive models)",
      "Failed motor",
      "Stripped agitator splines (the teeth where agitator meets shaft)",
    ],
    whenToCallPro:
      "If new agitator dogs do not fix it, the motor coupler is the next likely cause. Replacing it requires removing the cabinet and motor — a bit more involved but still doable for handy people. If you are not comfortable with that level of disassembly, a tech will charge $130–$220 for the repair.",
    metaTitle:
      "Whirlpool Washer Not Agitating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Whirlpool washer that won't agitate. Usually worn agitator dogs ($5 fix). Difficulty: Medium. Save $150+.",
  },

  // ============================================================
  // DRYERS
  // ============================================================
  {
    id: "lg-dryer-not-heating",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "not-heating",
    problemTitle: "Dryer Not Heating",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$10–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
      "1/4-inch nut driver",
      "Towel",
    ],
    partsNeeded: [
      {
        name: "Thermal Fuse",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=lg+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=lg+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Heating Element",
        costRange: "$25–$50",
        amazonUrl: "https://www.amazon.com/s?k=lg+dryer+heating+element&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=lg+dryer+heating+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before doing any work.",
      "If it is a gas dryer, also turn off the gas supply valve.",
      "Electric dryers run on 240 volts — this can kill you. Make sure it is unplugged.",
      "Let the dryer cool down completely before touching internal parts.",
    ],
    quickDiagnosis:
      "When your LG dryer runs but does not heat up, the most common cause is a blown thermal fuse. The thermal fuse is a safety device that blows when the dryer overheats — usually because of a clogged lint vent. The fuse itself is cheap and easy to replace, but you also need to clean the vent to prevent it from happening again.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer",
        description:
          "Pull the power cord from the outlet. If you have a gas dryer, turn off the gas valve behind the dryer too. Wait 10 minutes for everything to cool down.",
      },
      {
        number: 2,
        title: "Check your lint vent first",
        description:
          "Before opening the dryer, disconnect the vent hose from the back and look inside. If it is packed with lint, that is likely what caused the overheating. Clean the entire vent line from the dryer to the outside of your house. A clogged vent is the number one reason thermal fuses blow.",
      },
      {
        number: 3,
        title: "Access the thermal fuse",
        description:
          "Remove the back panel of the dryer (usually 4–6 screws). The thermal fuse is a small white or silver piece about 1 inch long, usually located near the exhaust duct or heating element housing. It will have two wires connected to it.",
      },
      {
        number: 4,
        title: "Test the thermal fuse with a multimeter",
        description:
          "Set your multimeter to continuity mode (the setting that beeps). Disconnect the wires from the fuse and touch one multimeter probe to each terminal. If you get a beep, the fuse is fine. If you get nothing (no beep, no reading), the fuse is blown and needs replacing.",
      },
      {
        number: 5,
        title: "Replace the thermal fuse",
        description:
          "Remove the one or two screws holding the old fuse. Disconnect the wires (take a photo first). Attach the wires to the new fuse and screw it in place. This takes about 2 minutes.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the back panel on, reconnect the vent hose, and plug the dryer in (turn gas back on if applicable). Run a timed dry cycle for 10 minutes and check that the air coming out is hot. If the dryer still does not heat, the heating element itself may need replacing.",
      },
    ],
    alternativeCauses: [
      "Burned-out heating element",
      "Faulty high-limit thermostat",
      "Bad cycling thermostat",
      "Broken igniter (gas dryers)",
      "Defective gas valve solenoid (gas dryers)",
    ],
    whenToCallPro:
      "If you are not comfortable using a multimeter or working near 240-volt wiring, call a pro. Also call a pro if the thermal fuse keeps blowing — there may be a deeper airflow or wiring issue. Expect to pay $120–$250 for a tech visit depending on the part needed.",
    metaTitle: "LG Dryer Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an LG dryer that's not heating. Usually a blown thermal fuse. Difficulty: Medium. Save $150+.",
  },
  {
    id: "whirlpool-dryer-squeaking",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "squeaking",
    problemTitle: "Dryer Squeaking",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$10–$40",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Putty knife",
      "1/4-inch nut driver",
      "Work gloves",
    ],
    partsNeeded: [
      {
        name: "Drum Roller Kit",
        costRange: "$10–$25",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+dryer+drum+roller+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+dryer+drum+roller+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Dryer Belt",
        costRange: "$5–$15",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+dryer+belt&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=whirlpool+dryer+belt&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before opening any panels.",
      "Electric dryers use 240 volts — always unplug, never just turn off.",
      "Wear work gloves — sheet metal edges inside the dryer are sharp.",
    ],
    quickDiagnosis:
      "A squeaking Whirlpool dryer is annoying but usually an easy fix. The noise is almost always caused by worn drum rollers, a frayed belt, or worn drum glides. These are inexpensive parts and most people can replace them with basic tools. The dryer is safe to use while it squeaks — it just will not stop until you fix it.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer",
        description:
          "Pull the power cord from the wall. Move the dryer away from the wall so you can work around it.",
      },
      {
        number: 2,
        title: "Open the top panel",
        description:
          "Slide a putty knife under the top panel at the front corners (about 2 inches from each edge). Push in to release the spring clips, then lift the top up like a car hood. It will stay open on its own.",
      },
      {
        number: 3,
        title: "Remove the front panel",
        description:
          "Disconnect the door switch wire harness. Remove the screws at the top of the front panel (usually 2 screws). Lift the front panel off the bottom clips and set it aside. Now you can see the drum.",
      },
      {
        number: 4,
        title: "Inspect the drum rollers",
        description:
          "Look at the back wall of the dryer cabinet. You will see two small rubber rollers that the drum sits on. Spin them by hand — they should spin freely and silently. If they wobble, squeak, or feel stiff, they need replacing. Pull the drum out to access them. Remove the old rollers (held by a clip or screw) and install the new ones.",
      },
      {
        number: 5,
        title: "Check the belt and drum glides",
        description:
          "While the drum is out, check the belt. If it looks frayed, cracked, or glazed, replace it. Also check the drum glides (plastic or felt pieces at the front where the drum slides). If they are worn smooth, replace them — they cause squeaking too.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the drum back in, making sure the belt wraps around the drum, then around the idler pulley and motor pulley. Reattach the front panel and top panel. Plug the dryer in and run a timed cycle. The squeak should be gone.",
      },
    ],
    alternativeCauses: [
      "Worn drum glides or felt seal",
      "Loose or frayed drive belt",
      "Worn idler pulley",
      "Loose blower wheel",
    ],
    whenToCallPro:
      "This is a very doable DIY repair. The only tricky part is getting the belt routed correctly when reassembling. Look up your specific model number for a belt routing diagram before you start. If you are not comfortable taking the dryer apart, a tech will charge $120–$200 for this fix.",
    metaTitle:
      "Whirlpool Dryer Squeaking — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a squeaking Whirlpool dryer. Usually worn drum rollers or belt. Difficulty: Medium. Save $150+.",
  },
  {
    id: "ge-dryer-not-turning-on",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "not-turning-on",
    problemTitle: "Dryer Not Turning On",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Thermal Fuse",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=ge+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ge+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Door Switch",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=ge+dryer+door+switch&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ge+dryer+door+switch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before testing or replacing any parts.",
      "Check your circuit breaker first — dryers use two breakers and one may have tripped.",
      "Electric dryers use 240 volts. Always verify the machine is unplugged before touching wiring.",
    ],
    quickDiagnosis:
      "When your GE dryer does absolutely nothing when you press Start, the problem is usually something simple: a tripped breaker, a blown thermal fuse, or a faulty door switch. Start with the easy checks first — you may not even need to open the dryer.",
    steps: [
      {
        number: 1,
        title: "Check the circuit breaker",
        description:
          "Go to your electrical panel. Dryers use a double breaker (two switches linked together). Even if it looks fine, flip it OFF and then back ON. Sometimes one side trips without looking like it moved. If the breaker keeps tripping, you have a bigger electrical issue — call an electrician.",
      },
      {
        number: 2,
        title: "Check the outlet",
        description:
          "If you have a multimeter, test the dryer outlet. It should read 240 volts (or close to it). You can also try plugging in another large appliance to see if the outlet works. If the outlet is dead even with the breaker on, the outlet or wiring is the issue.",
      },
      {
        number: 3,
        title: "Test the door switch",
        description:
          "Close the dryer door and listen for a click. That click means the door switch is engaging. If there is no click, the switch may be broken. Unplug the dryer, then press the door switch button manually with the door open. If it does not click, replace the switch — it is usually one or two screws inside the door opening.",
      },
      {
        number: 4,
        title: "Test the thermal fuse",
        description:
          "Unplug the dryer and remove the back panel. Find the thermal fuse (a small white or silver piece near the exhaust duct). Test it with your multimeter on continuity. If it has no continuity, it is blown. Replace it. Also clean your vent — a clogged vent is what causes the fuse to blow.",
      },
      {
        number: 5,
        title: "Check the start switch",
        description:
          "If nothing else is the problem, the start switch itself may be faulty. On most GE dryers, you can test it with a multimeter. If it does not show continuity when pressed, replace it.",
      },
    ],
    alternativeCauses: [
      "Faulty start switch",
      "Broken drive motor",
      "Bad main control board",
      "Broken belt switch (some models won't start if belt is broken)",
    ],
    whenToCallPro:
      "If the breaker, door switch, and thermal fuse are all fine, the motor or control board may be the issue. Those are harder to diagnose without experience. A tech visit will cost $100–$200 depending on what needs replacing.",
    metaTitle: "GE Dryer Not Turning On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a GE dryer that won't turn on. Check breaker, thermal fuse, and door switch. Difficulty: Easy. Save $100+.",
  },
  {
    id: "maytag-dryer-not-drying",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Maytag",
    brandSlug: "maytag",
    problemSlug: "not-drying-clothes",
    problemTitle: "Dryer Not Drying Clothes",
    difficulty: "Easy",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Vent brush or leaf blower",
      "Phillips screwdriver",
      "Multimeter (optional)",
    ],
    partsNeeded: [
      {
        name: "Vent Cleaning Kit",
        costRange: "$10–$20",
        amazonUrl: "https://www.amazon.com/s?k=dryer+vent+cleaning+kit&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=dryer+vent+cleaning+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermal Fuse",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=maytag+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=maytag+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before doing any internal work.",
      "Clean your dryer vent at least once a year to prevent fires.",
      "A clogged vent is a fire hazard — this repair is important for safety, not just convenience.",
    ],
    quickDiagnosis:
      "If your Maytag dryer runs but clothes are still damp after a full cycle, the number one cause is a clogged dryer vent. Lint builds up in the vent hose and duct over time, blocking hot air from escaping. This is an easy fix — and an important one because clogged vents are a major fire hazard.",
    steps: [
      {
        number: 1,
        title: "Check the lint trap",
        description:
          "Pull out the lint screen and clean it completely. Then look down into the lint trap housing with a flashlight — lint can build up in there too. Use a long skinny brush or vacuum attachment to clean it out.",
      },
      {
        number: 2,
        title: "Unplug the dryer and pull it out from the wall",
        description:
          "You need access to the back of the machine. Carefully pull the dryer forward — be gentle with the vent hose and power cord.",
      },
      {
        number: 3,
        title: "Disconnect and clean the vent hose",
        description:
          "Loosen the clamp where the vent hose connects to the dryer and to the wall. Pull the hose off and shake out any lint. If the hose is a flexible foil type, consider replacing it with a rigid or semi-rigid metal hose — foil hoses trap more lint and are a fire risk.",
      },
      {
        number: 4,
        title: "Clean the full vent duct",
        description:
          "Use a dryer vent brush kit (a long flexible brush) or a leaf blower to clean the duct from the dryer to the outside vent. Go outside and check that the vent flap opens and closes freely. Remove any lint or debris blocking it.",
      },
      {
        number: 5,
        title: "Reconnect and test",
        description:
          "Reattach the vent hose with the clamps, push the dryer back, and plug it in. Run the dryer for 10 minutes on high heat. Go outside and check the vent — you should feel strong hot air coming out. If the airflow is weak, there may still be a blockage deeper in the duct.",
      },
      {
        number: 6,
        title: "If vent is clean but still not drying",
        description:
          "If the vent is clear and you still have weak heat, the thermal fuse or heating element may be failing. Check the thermal fuse with a multimeter — if it has no continuity, replace it. The heating element is the next thing to check.",
      },
    ],
    alternativeCauses: [
      "Blown thermal fuse (partial heat loss)",
      "Failing heating element",
      "Faulty cycling thermostat",
      "Overloading the dryer with too many clothes",
    ],
    whenToCallPro:
      "Most people can clean a dryer vent themselves. If the vent runs a long distance (over 25 feet) or has many bends, you may want a professional vent cleaning service ($80–$150). If the vent is clean and the dryer still does not heat, a repair tech will charge $120–$220 to diagnose and fix the heating issue.",
    metaTitle:
      "Maytag Dryer Not Drying Clothes — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Maytag dryer that's not drying clothes. Usually a clogged vent. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // DISHWASHERS
  // ============================================================
  {
    id: "samsung-dishwasher-not-draining",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-draining",
    problemTitle: "Dishwasher Not Draining",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Towels or sponge",
      "Phillips screwdriver",
      "Small cup or container",
    ],
    partsNeeded: [
      {
        name: "Drain Pump",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+dishwasher+drain+pump",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+dishwasher+drain+pump&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off power to the dishwasher at the circuit breaker.",
      "Mop up any standing water before working inside.",
      "Be careful of sharp edges inside the dishwasher sump area.",
    ],
    quickDiagnosis:
      "Standing water in the bottom of your Samsung dishwasher is usually caused by food debris clogging the filter or drain area. This is one of the most common dishwasher problems and one of the easiest to fix — it is basically just cleaning out gunk.",
    steps: [
      {
        number: 1,
        title: "Turn off power",
        description:
          "Turn off the dishwasher at the circuit breaker. Do not just press the power button — cut the power at the breaker for safety.",
      },
      {
        number: 2,
        title: "Remove the standing water",
        description:
          "Use a cup, sponge, or towels to soak up the standing water in the bottom of the dishwasher. You need to see what is going on down there.",
      },
      {
        number: 3,
        title: "Clean the filter",
        description:
          "In the bottom of the dishwasher, you will see a cylindrical filter. Twist it counter-clockwise and lift it out. Rinse it under running water and use an old toothbrush to scrub off any stuck-on food or grease. This is the most common cause of drainage problems.",
      },
      {
        number: 4,
        title: "Check the drain hose connection",
        description:
          "Look under the sink where the dishwasher drain hose connects. It usually connects to the garbage disposal or the sink drain. Make sure the hose is not kinked. If it connects to a new garbage disposal, make sure the knockout plug was removed during installation (a very common installation mistake).",
      },
      {
        number: 5,
        title: "Check the air gap (if you have one)",
        description:
          "Some setups have an air gap — a small chrome cylinder on the countertop near the faucet. Remove the cap and clean inside it. Food debris can clog this and prevent drainage.",
      },
      {
        number: 6,
        title: "Turn power back on and test",
        description:
          "Turn the breaker back on and run a short wash cycle. At the end, check for standing water. If water still pools in the bottom, the drain pump may be failing and need replacing.",
      },
    ],
    alternativeCauses: [
      "Clogged garbage disposal",
      "Knockout plug not removed from new garbage disposal",
      "Kinked drain hose",
      "Faulty drain pump",
      "Clogged air gap",
    ],
    whenToCallPro:
      "If cleaning the filter and checking the hose does not work, the drain pump may need replacing. This involves removing the dishwasher from under the counter. If you are not comfortable with that, a tech will charge $130–$200 for the repair.",
    metaTitle:
      "Samsung Dishwasher Not Draining — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Samsung dishwasher that won't drain. Usually a clogged filter. Difficulty: Easy. Save $150+.",
  },
  {
    id: "whirlpool-dishwasher-not-cleaning",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "not-cleaning",
    problemTitle: "Dishwasher Not Cleaning Dishes",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Toothpick or thin wire",
      "White vinegar",
      "Old toothbrush",
    ],
    partsNeeded: [
      {
        name: "Spray Arm (if cracked)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+dishwasher+spray+arm",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+dishwasher+spray+arm&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and wait for it to cool before working inside.",
      "Be careful of broken glass or sharp food debris in the bottom of the dishwasher.",
    ],
    quickDiagnosis:
      "When your Whirlpool dishwasher runs a full cycle but dishes come out dirty, the most common cause is clogged spray arm holes, a dirty filter, or using the wrong detergent. These are all easy things to check and fix — no special skills needed.",
    steps: [
      {
        number: 1,
        title: "Clean the filter",
        description:
          "Pull out the bottom rack. In the bottom of the dishwasher, find the cylindrical filter — twist it counter-clockwise and lift it out. Rinse it under hot running water and scrub it with an old toothbrush. A clogged filter reduces water pressure and cleaning power.",
      },
      {
        number: 2,
        title: "Unclog the spray arm holes",
        description:
          "Remove the lower spray arm (it usually pulls straight up or twists off). Look at the small holes — they often get clogged with food particles or mineral buildup. Use a toothpick or thin wire to poke through each hole and clear it. Rinse the spray arm under running water. Do the same for the upper spray arm if your model has one.",
      },
      {
        number: 3,
        title: "Check the spray arms spin freely",
        description:
          "Put the spray arms back in and spin them by hand. They should spin freely without catching on anything. If a spray arm is cracked or warped, replace it — they are cheap and easy to swap.",
      },
      {
        number: 4,
        title: "Run a vinegar cleaning cycle",
        description:
          "Place a cup of white vinegar in a dishwasher-safe cup on the top rack. Run a hot water cycle with nothing else in the dishwasher. This removes grease and mineral buildup from the inside of the machine.",
      },
      {
        number: 5,
        title: "Check your loading and detergent",
        description:
          "Make sure you are not blocking the spray arms with large pots or cutting boards. Dishes should face the center and not nest together. Use fresh dishwasher detergent (pods or powder) — liquid dish soap is not the same thing and will cause problems. Also make sure your hot water is at least 120 degrees F at the tap.",
      },
    ],
    alternativeCauses: [
      "Water inlet valve not supplying enough water",
      "Hot water heater set too low (should be 120°F)",
      "Faulty wash motor",
      "Worn detergent dispenser not opening",
    ],
    whenToCallPro:
      "If cleaning the filter and spray arms and running a vinegar cycle does not fix it, the wash motor or water inlet valve may be failing. These require removing the dishwasher to access. A tech will charge $150–$250 for diagnosis and repair.",
    metaTitle:
      "Whirlpool Dishwasher Not Cleaning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Whirlpool dishwasher not cleaning dishes. Clean the filter and spray arms. Difficulty: Easy. Save $150+.",
  },
  {
    id: "lg-dishwasher-le-error",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "le-error-code",
    problemTitle: "LE Error Code (Motor Error)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Phillips screwdriver",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Wash Motor Assembly",
        costRange: "$30–$40",
        amazonUrl: "https://www.amazon.com/s?k=lg+dishwasher+wash+motor&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=lg+dishwasher+wash+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher at the circuit breaker before any work.",
      "Disconnect the water supply line if you need to pull the dishwasher out.",
      "Water and electricity are present — always cut power first.",
    ],
    quickDiagnosis:
      "The LE error code on your LG dishwasher means the wash motor is having trouble. Before you worry about replacing the motor, try this: the LE error is often triggered by a simple overload. A hard reset fixes it about half the time. The other common cause is a stuck impeller — something got jammed in the pump.",
    steps: [
      {
        number: 1,
        title: "Try a hard reset first",
        description:
          "Turn off the dishwasher at the circuit breaker. Wait a full 15 minutes (this is important — do not rush it). Turn the breaker back on. This resets the motor controller and fixes the LE error in many cases.",
      },
      {
        number: 2,
        title: "Check for a jammed impeller",
        description:
          "Open the dishwasher and remove the bottom rack. Take out the filter assembly (twist counter-clockwise and lift). Look down into the sump area — you may see the impeller (a small fan-like piece). Check if anything is blocking it: glass shards, food debris, or a piece of plastic. Remove any debris you find.",
      },
      {
        number: 3,
        title: "Clean the sump area thoroughly",
        description:
          "While the filter is out, clean the entire sump area. Use a sponge or cloth to remove food residue, grease, and any small objects. This area gets surprisingly dirty and can cause the pump motor to strain.",
      },
      {
        number: 4,
        title: "Check the drain connection",
        description:
          "Sometimes a backed-up drain puts extra strain on the motor. Check under the sink — make sure the drain hose is not kinked and the connection is clear. Run the garbage disposal to clear it if the dishwasher drains into the disposal.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Put the filter back in, replace the rack, and run a normal wash cycle. If the LE error does not come back, you are good. If it returns immediately, the wash motor may need replacing.",
      },
      {
        number: 6,
        title: "Replace the wash motor (if needed)",
        description:
          "If the reset and cleaning did not work, the wash motor has likely failed. This requires pulling the dishwasher out from under the counter, flipping it on its back, and swapping the motor. Look up your model number for a specific video walkthrough — it is doable but takes patience.",
      },
    ],
    alternativeCauses: [
      "Wiring issue between control board and motor",
      "Failed control board",
      "Seized wash motor bearings",
    ],
    whenToCallPro:
      "If the hard reset and cleaning does not work, the motor likely needs replacing. This is a doable DIY project but requires pulling out and flipping the dishwasher. If that sounds like too much, a tech will charge $180–$300 for the motor replacement.",
    metaTitle:
      "LG Dishwasher LE Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the LG dishwasher LE error code (motor error). Try a hard reset first. Difficulty: Medium. Save $200+.",
  },
  {
    id: "ge-dishwasher-not-starting",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "not-starting",
    problemTitle: "Dishwasher Not Starting",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Multimeter (optional)",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Door Latch Assembly",
        costRange: "$15–$25",
        amazonUrl: "https://www.amazon.com/s?k=ge+dishwasher+door+latch&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ge+dishwasher+door+latch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher at the circuit breaker before inspecting wiring.",
      "Do not force the door latch — it can break.",
    ],
    quickDiagnosis:
      "When your GE dishwasher will not start at all — no lights, no beeps, nothing — it is usually a power issue, a door latch problem, or the control lock is accidentally turned on. Start with the easy checks. Most of the time you do not need any parts.",
    steps: [
      {
        number: 1,
        title: "Check if the control lock is on",
        description:
          "Many GE dishwashers have a child lock or control lock feature. If it is activated, the buttons will not respond. Look for a Lock icon on the control panel. To unlock it, press and hold the Lock button (or Heated Dry, depending on your model) for 3 seconds. Check your manual if you are not sure which button.",
      },
      {
        number: 2,
        title: "Check the power supply",
        description:
          "Make sure the dishwasher is actually getting power. Check the circuit breaker — flip it OFF and back ON. If your dishwasher plugs into an outlet under the sink, make sure the plug is firmly in. Some dishwashers share an outlet with the garbage disposal — make sure nothing is loose.",
      },
      {
        number: 3,
        title: "Test the door latch",
        description:
          "Close the dishwasher door firmly and listen for a solid click. The dishwasher will not start unless it detects the door is fully latched. Open and close it a few times — if the latch feels loose or does not click, it may need replacing.",
      },
      {
        number: 4,
        title: "Try a hard reset",
        description:
          "Turn off the breaker for 5 minutes, then turn it back on. This resets the control board and can clear glitches that prevent the dishwasher from starting.",
      },
      {
        number: 5,
        title: "Replace the door latch (if faulty)",
        description:
          "If the latch does not click or is visibly broken, unplug or turn off the breaker, open the door, and remove the inner door panel screws. The latch assembly is at the top of the door. Disconnect the wires (take a photo first), remove the old latch, and install the new one.",
      },
    ],
    alternativeCauses: [
      "Faulty control board",
      "Bad touchpad or control panel",
      "Tripped thermal fuse",
      "Water supply turned off (some models won't start without water)",
    ],
    whenToCallPro:
      "If the breaker, control lock, and door latch are all fine and the dishwasher still will not start, the control board or touchpad may have failed. These are harder to diagnose without experience. A tech visit will run $120–$250 depending on the part.",
    metaTitle:
      "GE Dishwasher Not Starting — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a GE dishwasher that won't start. Check control lock, power, and door latch. Difficulty: Easy. Save $100+.",
  },
  {
    id: "kitchenaid-dishwasher-not-drying",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "KitchenAid",
    brandSlug: "kitchenaid",
    problemSlug: "not-drying-dishes",
    problemTitle: "Dishwasher Not Drying Dishes",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Multimeter (optional)",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Heating Element",
        costRange: "$25–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=kitchenaid+dishwasher+heating+element",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=kitchenaid+dishwasher+heating+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Rinse Aid Dispenser",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=kitchenaid+dishwasher+rinse+aid+dispenser",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=kitchenaid+dishwasher+rinse+aid+dispenser&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off power at the circuit breaker before testing the heating element.",
      "The heating element gets very hot during a cycle — let the dishwasher cool completely before touching it.",
    ],
    quickDiagnosis:
      "If your KitchenAid dishwasher washes fine but leaves dishes wet at the end, the most common reason is that you are not using rinse aid. Rinse aid makes a huge difference in drying. If you already use it, the heating element or vent may not be working properly. Let us walk through the checks.",
    steps: [
      {
        number: 1,
        title: "Check and fill the rinse aid",
        description:
          "Open the dishwasher door and find the rinse aid dispenser (usually next to the detergent dispenser). If it is empty, fill it up with rinse aid (like Finish Jet-Dry). This is the most common reason for wet dishes — rinse aid helps water sheet off dishes instead of forming droplets. It makes a massive difference.",
      },
      {
        number: 2,
        title: "Use the right cycle settings",
        description:
          "Make sure you are using a cycle with a heated dry option. Some eco or quick cycles skip the heated dry to save energy. Press the Heated Dry button if your model has one. Also, try the ProDry or Extended Dry option if available.",
      },
      {
        number: 3,
        title: "Check your loading",
        description:
          "Plastic items do not hold heat well and often stay wet — this is normal, not a defect. Cups and bowls should be angled downward so water does not pool on them. Do not overload — air needs to circulate for drying.",
      },
      {
        number: 4,
        title: "Inspect the heating element",
        description:
          "Open the dishwasher when cool and look at the bottom. You should see a circular heating element (it looks like the element in an oven). If it looks damaged, broken, or has visible burn marks, it needs replacing. You can test it with a multimeter — it should read 15–30 ohms of resistance.",
      },
      {
        number: 5,
        title: "Check the vent and fan",
        description:
          "Some KitchenAid models have a vent on the door that opens during the dry cycle to let steam escape. Open the door right after a dry cycle and feel for warm, moist air near the vent. If the vent is stuck closed, it will trap moisture inside. Some models also have a small fan — make sure it spins freely.",
      },
    ],
    alternativeCauses: [
      "Burned-out heating element",
      "Stuck vent or broken vent fan",
      "Faulty high-limit thermostat",
      "Using eco cycles that skip heated dry",
    ],
    whenToCallPro:
      "Try rinse aid and heated dry first — that fixes it 80% of the time. If the heating element is burned out, replacing it requires disconnecting the dishwasher's electrical connections — doable but not for everyone. A tech will charge $130–$220 for the repair.",
    metaTitle:
      "KitchenAid Dishwasher Not Drying — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a KitchenAid dishwasher not drying dishes. Start with rinse aid. Difficulty: Easy. Save $150+.",
  },

  // ============================================================
  // REFRIGERATORS
  // ============================================================
  {
    id: "samsung-refrigerator-ice-maker-not-working",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "ice-maker-not-working",
    problemTitle: "Ice Maker Not Working",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: [
      "Hair dryer or steamer",
      "Phillips screwdriver",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Water Inlet Valve",
        costRange: "$20–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+refrigerator+water+inlet+valve",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+refrigerator+water+inlet+valve&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Ice Maker Assembly",
        costRange: "$50–$80",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+refrigerator+ice+maker+assembly",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+refrigerator+ice+maker+assembly&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before working on it.",
      "Be careful with water when the fridge is unplugged — melting ice can drip on electrical parts.",
      "Do not use sharp objects to chip ice — you could puncture a coolant line.",
    ],
    quickDiagnosis:
      "Samsung refrigerator ice makers are notoriously troublesome. The most common problem is ice buildup (freezing over) around the ice maker — Samsung even acknowledged this issue. A manual defrost often fixes it. If not, the water inlet valve or the ice maker unit itself may need replacing.",
    steps: [
      {
        number: 1,
        title: "Check the obvious stuff first",
        description:
          "Make sure the ice maker is turned on (check the switch or button on the ice maker). Make sure the water supply line to the fridge is turned on (check the valve under the sink or behind the fridge). Make sure the freezer is set to 0°F (-18°C) or colder.",
      },
      {
        number: 2,
        title: "Force a test cycle",
        description:
          "Press and hold the Test button on the ice maker for about 10 seconds until you hear a chime. This forces the ice maker to try making ice. If you hear the motor run and water fill in, the ice maker works — the issue may be the water supply. If nothing happens, the ice maker or its components may be faulty.",
      },
      {
        number: 3,
        title: "Check for ice buildup (the Samsung ice maker problem)",
        description:
          "Remove the ice bucket and look behind it. If you see a buildup of ice around the ice maker, that is the known Samsung icing issue. The ice blocks the mechanism from working. You need to defrost it.",
      },
      {
        number: 4,
        title: "Manually defrost the ice maker",
        description:
          "Unplug the refrigerator. Use a hair dryer on low heat (not high — you do not want to melt plastic) or pour warm (not boiling) water over the ice buildup. Place towels underneath to catch the water. Melt all the ice around the ice maker until it is completely clear. This can take 20–30 minutes.",
      },
      {
        number: 5,
        title: "Check the water inlet valve",
        description:
          "If the ice maker runs but no water fills in, the water inlet valve may be clogged or faulty. It is located at the back bottom of the fridge. Unplug the fridge and pull it out. Check the valve's filter screen for mineral buildup. If it is clogged, the valve may need replacing — the screens are usually not cleanable.",
      },
      {
        number: 6,
        title: "Plug back in and monitor",
        description:
          "After defrosting, plug the fridge back in and give the ice maker 24 hours to start producing ice. If the icing problem comes back repeatedly, Samsung has a service kit available for some models that adds better insulation. Ask Samsung support about your specific model.",
      },
    ],
    alternativeCauses: [
      "Frozen water supply line behind the fridge",
      "Faulty ice maker motor or module",
      "Defective water inlet valve",
      "Freezer temperature too warm (above 10°F)",
      "Water filter clogged (reduces water flow)",
    ],
    whenToCallPro:
      "If manual defrost does not work and the test cycle shows no response, the ice maker assembly itself may need replacing ($50–$80 for the part). If you are not comfortable pulling the fridge out and working with water lines, a tech will charge $150–$300 depending on the issue.",
    metaTitle:
      "Samsung Refrigerator Ice Maker Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Samsung refrigerator ice maker. Usually ice buildup or water valve. Difficulty: Medium. Save $200+.",
  },
  {
    id: "whirlpool-refrigerator-not-cooling-freezer-works",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "not-cooling-freezer-works",
    problemTitle: "Not Cooling but Freezer Works",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Hair dryer",
      "Phillips screwdriver",
      "Multimeter (optional)",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Evaporator Fan Motor",
        costRange: "$20–$50",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+refrigerator+evaporator+fan+motor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+refrigerator+evaporator+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Damper Control Assembly",
        costRange: "$25–$45",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+refrigerator+damper+control",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+refrigerator+damper+control&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before doing any repairs.",
      "Move food to a cooler with ice to keep it safe while you work.",
      "Be careful with water when defrosting — keep it away from electrical connections.",
    ],
    quickDiagnosis:
      "When the freezer is cold but the fridge section is warm, it usually means cold air is not getting from the freezer to the fridge. The most common causes are a frosted-over evaporator coil (blocking airflow), a broken evaporator fan, or a stuck air damper. Most people can diagnose and fix this themselves.",
    steps: [
      {
        number: 1,
        title: "Listen for the evaporator fan",
        description:
          "Open the freezer door and listen. You should hear a fan running. If you do not hear it (and the compressor is running), the evaporator fan may have failed. The evaporator fan is what blows cold air from the freezer into the fridge section.",
      },
      {
        number: 2,
        title: "Check for frost buildup",
        description:
          "Open the freezer and remove the food and shelves. Remove the back panel inside the freezer (usually held by a few screws). Behind it you will see the evaporator coils. If they are covered in thick frost or ice, that is your problem — the defrost system has failed and ice is blocking the airflow.",
      },
      {
        number: 3,
        title: "Manually defrost if frosted over",
        description:
          "Unplug the fridge and leave the doors open. Use a hair dryer to carefully melt the ice on the coils (keep it moving — do not hold it in one spot). Place towels underneath. This can take 30–60 minutes for a heavy frost buildup. Let it melt completely.",
      },
      {
        number: 4,
        title: "Check the evaporator fan motor",
        description:
          "With the back panel removed, try spinning the fan by hand. It should spin freely. If it is stiff or does not spin at all, the motor is bad. To replace it, disconnect the wire harness and remove the mounting screws or clips. Install the new fan in the same position.",
      },
      {
        number: 5,
        title: "Check the air damper",
        description:
          "Between the freezer and fridge section, there is a damper (a small door that controls how much cold air flows into the fridge). Find it — usually at the top of the fridge section or between the two compartments. It should open and close. If it is stuck closed, no cold air can reach the fridge. You may need to replace the damper assembly.",
      },
      {
        number: 6,
        title: "Plug back in and monitor",
        description:
          "After fixing the issue, plug the fridge back in. Give it 4–8 hours to reach the proper temperature. The fridge section should be around 37°F (3°C). If the ice buildup comes back within a few weeks, the defrost heater, defrost thermostat, or defrost timer/board needs attention.",
      },
    ],
    alternativeCauses: [
      "Failed defrost heater",
      "Bad defrost thermostat",
      "Faulty defrost timer or control board",
      "Stuck damper control",
      "Thermistor failure",
    ],
    whenToCallPro:
      "Manual defrost is easy but if the frost keeps coming back, the defrost system has a failed component. Diagnosing which defrost part failed (heater, thermostat, or timer) requires a multimeter. If that is beyond your comfort level, a tech will charge $150–$300 for this repair.",
    metaTitle:
      "Whirlpool Fridge Not Cooling but Freezer Works — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Whirlpool refrigerator not cooling when the freezer works. Usually a frost or fan issue. Difficulty: Medium. Save $200+.",
  },
  {
    id: "ge-refrigerator-making-noise",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "making-noise",
    problemTitle: "Refrigerator Making Noise",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Flashlight",
      "Level (or smartphone level app)",
      "Phillips screwdriver",
    ],
    partsNeeded: [
      {
        name: "Condenser Fan Motor",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=ge+refrigerator+condenser+fan+motor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ge+refrigerator+condenser+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Evaporator Fan Motor",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=ge+refrigerator+evaporator+fan+motor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ge+refrigerator+evaporator+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before accessing the condenser fan or any internal parts.",
      "Be careful of the condenser coils — they can be sharp.",
      "Pull the fridge out carefully to avoid scratching the floor.",
    ],
    quickDiagnosis:
      "A noisy GE refrigerator is usually one of a few things: the condenser fan is hitting something, the evaporator fan is going bad, or the fridge is not sitting level. Most of these are quick to identify and fix. Let us figure out where the noise is coming from.",
    steps: [
      {
        number: 1,
        title: "Identify where the noise is coming from",
        description:
          "Listen carefully. If the noise comes from the back bottom of the fridge, it is likely the condenser fan. If it comes from inside the freezer, it is the evaporator fan. If the whole fridge vibrates or buzzes, it may not be level. If you hear a clicking noise, the compressor might be struggling to start.",
      },
      {
        number: 2,
        title: "Check if the fridge is level",
        description:
          "Place a level on top of the fridge (or use the level app on your phone). If the fridge is not level, it can vibrate and make noise. Adjust the front legs by turning them — most GE fridges have adjustable leveling legs you can turn by hand or with a wrench.",
      },
      {
        number: 3,
        title: "Check the condenser fan (back bottom)",
        description:
          "Unplug the fridge and pull it out from the wall. Remove the back bottom panel (a few screws). You will see a fan near the compressor. Spin it by hand — it should spin freely. If something is caught in the blades (cardboard, dust bunny, wire tie), remove it. If the blade is cracked or the motor is stiff, replace the fan motor.",
      },
      {
        number: 4,
        title: "Clean the condenser coils while you are back there",
        description:
          "Dusty condenser coils make the fridge work harder and can cause extra noise. Use a vacuum with a brush attachment or a condenser coil brush to clean them. This also improves efficiency and can extend your fridge's life.",
      },
      {
        number: 5,
        title: "Check the evaporator fan (inside freezer)",
        description:
          "If the noise is from inside the freezer, remove the back panel inside the freezer (unplug first). The evaporator fan is behind this panel. If ice has built up around it, the fan blades may be hitting ice. Defrost the area with a hair dryer. If the motor is grinding or buzzing, it needs replacing.",
      },
    ],
    alternativeCauses: [
      "Compressor beginning to fail (loud humming or clicking)",
      "Ice buildup around evaporator fan",
      "Drain pan vibrating under the fridge",
      "Water inlet valve buzzing (during ice making)",
    ],
    whenToCallPro:
      "If the noise is a loud clicking from the compressor area, the compressor may be failing. Compressor replacement is expensive ($400–$800) and not a DIY job. For any other noise, the fixes are usually simple and cheap. Call a tech if you cannot pinpoint the source — diagnostic visits run $80–$120.",
    metaTitle:
      "GE Refrigerator Making Noise — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a noisy GE refrigerator. Check fans, level, and coils. Difficulty: Easy. Save $100+.",
  },
  {
    id: "frigidaire-refrigerator-not-cooling",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "not-cooling",
    problemTitle: "Refrigerator Not Cooling",
    difficulty: "Medium",
    timeEstimate: "20-60 minutes",
    costEstimate: "$0–$50",
    toolsNeeded: [
      "Vacuum with brush attachment",
      "Phillips screwdriver",
      "Hair dryer",
      "Towels",
    ],
    partsNeeded: [
      {
        name: "Condenser Fan Motor",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+refrigerator+condenser+fan+motor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+refrigerator+condenser+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Start Relay",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+refrigerator+start+relay",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+refrigerator+start+relay&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before doing any work.",
      "Move perishable food to a cooler with ice while working.",
      "Be careful pulling the fridge out — they are heavy and can scratch floors.",
    ],
    quickDiagnosis:
      "When your Frigidaire refrigerator stops cooling altogether (both fridge and freezer are warm), the most common causes are dirty condenser coils, a failed condenser fan, or a bad start relay. Dirty coils are the easiest fix — just vacuuming them can get your fridge cold again. Let us start there.",
    steps: [
      {
        number: 1,
        title: "Check the basics",
        description:
          "Make sure the temperature setting has not been accidentally changed. Make sure nothing is blocking the vents inside the fridge. Check that the door seals are closing properly — a warped seal lets warm air in constantly.",
      },
      {
        number: 2,
        title: "Listen to the compressor",
        description:
          "Put your ear near the back bottom of the fridge. Do you hear a low humming sound? That is the compressor running — good. If you hear clicking and then silence, the compressor is trying to start but cannot. If you hear absolutely nothing, the compressor is not getting power.",
      },
      {
        number: 3,
        title: "Clean the condenser coils",
        description:
          "Unplug the fridge and pull it away from the wall. Remove the back bottom panel. You will see the condenser coils — they may be covered in dust, pet hair, and lint. Vacuum them thoroughly with a brush attachment. Dirty coils prevent the fridge from releasing heat and can stop cooling entirely. This is the number one maintenance task people skip.",
      },
      {
        number: 4,
        title: "Check the condenser fan",
        description:
          "While the back panel is off, find the condenser fan near the coils. Spin it by hand — it should spin freely. If it is stiff, wobbly, or does not spin at all, replace the fan motor. The condenser fan pulls air across the coils to dissipate heat.",
      },
      {
        number: 5,
        title: "Check the start relay",
        description:
          "The start relay is a small device attached to the side of the compressor. Unplug the fridge and pull the relay off the compressor (it usually just pulls straight off). Shake it — if you hear a rattle, it is bad and needs replacing. A bad start relay means the compressor cannot start up.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "After cleaning the coils, checking the fan, and replacing the start relay if needed, put everything back together and plug the fridge in. Give it 4–8 hours to cool down. The fridge should be around 37°F and the freezer around 0°F.",
      },
    ],
    alternativeCauses: [
      "Failed compressor (expensive repair)",
      "Sealed system refrigerant leak",
      "Bad thermostat or temperature control board",
      "Frosted evaporator coils (defrost system failure)",
    ],
    whenToCallPro:
      "If the coils are clean, the fan works, and the start relay is good, but the compressor still will not run, the compressor itself may have failed. Compressor replacement costs $400–$800 and requires a licensed technician with refrigerant handling certification. At that point, consider whether the fridge is worth repairing or if a new one makes more sense.",
    metaTitle:
      "Frigidaire Refrigerator Not Cooling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Frigidaire refrigerator that's not cooling. Start with cleaning the condenser coils. Difficulty: Medium. Save $200+.",
  },
  {
    id: "lg-refrigerator-water-dispenser-not-working",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "water-dispenser-not-working",
    problemTitle: "Water Dispenser Not Working",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$40",
    toolsNeeded: [
      "Phillips screwdriver",
      "Towels",
      "Turkey baster or funnel (for flushing)",
    ],
    partsNeeded: [
      {
        name: "Water Filter",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=lg+refrigerator+water+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=lg+refrigerator+water+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Water Inlet Valve",
        costRange: "$20–$40",
        amazonUrl:
          "https://www.amazon.com/s?k=lg+refrigerator+water+inlet+valve",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=lg+refrigerator+water+inlet+valve&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the water supply before disconnecting any water lines.",
      "Have towels ready — water will drip when disconnecting lines.",
      "Unplug the refrigerator if working near electrical components.",
    ],
    quickDiagnosis:
      "When the water dispenser on your LG fridge stops working, the most common cause is a clogged or expired water filter, a frozen water line, or the water supply being turned off. These are all easy things to check. Most of the time, replacing the water filter fixes it right away.",
    steps: [
      {
        number: 1,
        title: "Check the water supply valve",
        description:
          "The water supply valve is usually under the sink or behind the fridge. Make sure it is fully open (turned counter-clockwise all the way). If someone recently worked under the sink, it may have been accidentally turned off.",
      },
      {
        number: 2,
        title: "Check if the control lock is on",
        description:
          "Many LG fridges have a control lock or child lock feature. When activated, the dispenser will not work. Look for a Lock icon on the display panel. Press and hold the Lock button for 3 seconds to toggle it off.",
      },
      {
        number: 3,
        title: "Replace the water filter",
        description:
          "LG recommends replacing the water filter every 6 months. A clogged filter drastically reduces water flow. Find the filter inside the fridge (usually in the top left corner or in the base). Twist the old one out and install a new one. Run 2–3 gallons of water through the dispenser after installing to flush the new filter.",
      },
      {
        number: 4,
        title: "Check for a frozen water line",
        description:
          "If the fridge is set too cold, the water line running to the dispenser can freeze. Turn the fridge temperature up slightly (from 33°F to 37°F). You can also use a hair dryer on the water line area behind the fridge to thaw it. Never use boiling water — it can crack plastic lines.",
      },
      {
        number: 5,
        title: "Test the water inlet valve",
        description:
          "Unplug the fridge and pull it out. The water inlet valve is at the back bottom where the water line connects. Check the filter screen on the valve for mineral buildup. If the screen is clogged, the valve may need replacing — the screens usually cannot be cleaned effectively.",
      },
    ],
    alternativeCauses: [
      "Faulty water inlet valve",
      "Broken dispenser switch or actuator",
      "Control board issue",
      "Low water pressure from the house (needs at least 20 PSI)",
    ],
    whenToCallPro:
      "If a new filter, open water supply, and unfrozen line do not fix it, the water inlet valve or dispenser switch may need replacing. These are straightforward repairs. A tech will charge $100–$200 for the fix. If you are handy, you can do the valve yourself — it is just a couple of screws and a plug.",
    metaTitle:
      "LG Refrigerator Water Dispenser Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an LG refrigerator water dispenser. Usually a filter or frozen line. Difficulty: Easy. Save $100+.",
  },

  // ============================================================
  // OVENS / RANGES
  // ============================================================
  {
    id: "ge-oven-not-heating",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "GE",
    brandSlug: "ge",
    problemSlug: "not-heating",
    problemTitle: "Oven Not Heating",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$15–$50",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "1/4-inch nut driver",
    ],
    partsNeeded: [
      {
        name: "Bake Element",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=ge+oven+bake+element&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ge+oven+bake+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Oven Igniter (gas models)",
        costRange: "$20–$50",
        amazonUrl: "https://www.amazon.com/s?k=ge+oven+igniter&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=ge+oven+igniter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the oven at the circuit breaker before working on an electric oven.",
      "For gas ovens, turn off the gas supply valve before starting.",
      "Electric ovens run on 240 volts — this is lethal. Always verify power is off with a multimeter before touching wiring.",
      "For gas ovens, if you smell gas at any point, leave the house and call your gas company.",
    ],
    quickDiagnosis:
      "When your GE oven does not heat up at all, the most common cause in electric ovens is a burned-out bake element (the coil at the bottom of the oven). In gas ovens, it is usually a weak or failed igniter. Both parts are replaceable by most people — the hardest part is being careful with the power.",
    steps: [
      {
        number: 1,
        title: "Identify if you have electric or gas",
        description:
          "This matters because the fix is different. If you see a glowing coil at the bottom of your oven when it is on, you have electric. If you see a flame, you have gas. Check what you have before proceeding.",
      },
      {
        number: 2,
        title: "Electric oven: Inspect the bake element",
        description:
          "Turn off the breaker. Open the oven and look at the bake element (the coil at the bottom). If you see any visible breaks, blistering, or burn spots on the element, it is bad. Sometimes you can see a hole where it burned through. Even if it looks okay, it may still be faulty.",
      },
      {
        number: 3,
        title: "Electric oven: Replace the bake element",
        description:
          "With the breaker off, remove the 2 screws holding the element to the back wall of the oven. Gently pull the element forward — there will be about 4 inches of wire behind it. Disconnect the two wires from the element terminals (pull the connectors straight off). Connect the wires to the new element and screw it back in.",
      },
      {
        number: 4,
        title: "Gas oven: Check the igniter",
        description:
          "Turn off the gas and the breaker. Open the oven and look at the bottom. Remove the oven floor panel (lift it up and out). The igniter is the small device near the gas burner tube. Turn the gas and power back on briefly and set the oven to bake. Watch the igniter — it should glow bright orange within 60 seconds. If it glows dimly or not at all, it is too weak to open the gas valve and needs replacing.",
      },
      {
        number: 5,
        title: "Gas oven: Replace the igniter",
        description:
          "Turn off the gas and breaker again. Disconnect the igniter wire harness (follow the wires to the connector). Remove the 2 screws holding the igniter to the burner bracket. Install the new one — do not touch the igniter element with your fingers (oils from skin can cause premature failure). Use the packaging or a cloth to handle it.",
      },
      {
        number: 6,
        title: "Test the repair",
        description:
          "Turn the gas back on (gas models), flip the breaker on, and set the oven to 350°F. An oven thermometer inside will help you verify it is heating properly. It should reach 350°F within 10–15 minutes.",
      },
    ],
    alternativeCauses: [
      "Faulty oven temperature sensor (thermistor)",
      "Bad oven control board",
      "Tripped thermal fuse",
      "Faulty gas safety valve (gas models)",
    ],
    whenToCallPro:
      "Replacing a bake element or igniter is a straightforward DIY job. If you are uncomfortable working near 240-volt wiring (electric) or gas lines, call a pro. A tech will charge $120–$250 depending on the part. If the element and igniter are fine but the oven still does not heat, the control board or temperature sensor may be the issue — those are trickier to diagnose.",
    metaTitle: "GE Oven Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a GE oven that's not heating. Replace the bake element or igniter. Difficulty: Medium. Save $150+.",
  },
  {
    id: "samsung-oven-f3-error",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "f3-error-code",
    problemTitle: "F-3 Error Code (Temperature Sensor)",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$10–$25",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "1/4-inch nut driver",
    ],
    partsNeeded: [
      {
        name: "Oven Temperature Sensor (Thermistor)",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+oven+temperature+sensor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+oven+temperature+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the oven at the circuit breaker before doing any work.",
      "Let the oven cool completely before reaching inside.",
      "Electric ovens use 240 volts. Always confirm power is off before touching any wires.",
    ],
    quickDiagnosis:
      "The F-3 error on your Samsung oven means the oven temperature sensor (also called a thermistor) is not reading correctly. The sensor is a thin metal probe inside the oven that tells the control board how hot it is. Replacing it is one of the easier oven repairs — it is just a probe with a plug.",
    steps: [
      {
        number: 1,
        title: "Turn off the breaker and let the oven cool",
        description:
          "Flip the oven's circuit breaker to OFF. If the oven has been running, wait until it is completely cool. The sensor is inside the oven cavity and you will need to reach in.",
      },
      {
        number: 2,
        title: "Locate the temperature sensor",
        description:
          "Open the oven door and look at the back wall of the oven, near the top. You will see a thin metal probe sticking out about 3–4 inches. That is the temperature sensor. It is held in by one or two screws from the outside back of the oven.",
      },
      {
        number: 3,
        title: "Test the sensor with a multimeter (optional)",
        description:
          "Set your multimeter to resistance (ohms). Disconnect the sensor wire harness at the back of the oven and touch the multimeter probes to the sensor's two terminals. At room temperature, it should read around 1080–1100 ohms. If you get no reading or a wildly different number, the sensor is bad.",
      },
      {
        number: 4,
        title: "Remove the old sensor",
        description:
          "From the back of the oven (you may need to pull the range out slightly), remove the one or two screws holding the sensor in place. Gently pull the sensor out through the back wall of the oven cavity. Disconnect the wire harness plug.",
      },
      {
        number: 5,
        title: "Install the new sensor",
        description:
          "Connect the wire harness to the new sensor. Slide the sensor probe through the hole into the oven cavity. Secure it with the same screws. Make sure the probe is not touching the oven wall — it should stick out freely into the oven space.",
      },
      {
        number: 6,
        title: "Test the oven",
        description:
          "Turn the breaker back on. Clear the error by pressing Cancel or Stop. Set the oven to 350°F and let it heat up. The F-3 error should not return. Use an oven thermometer to verify it is reaching the correct temperature.",
      },
    ],
    alternativeCauses: [
      "Wiring issue between sensor and control board",
      "Faulty oven control board",
      "Damaged wire harness connector",
    ],
    whenToCallPro:
      "If a new sensor does not fix the F-3 error, the control board or the wiring may be the problem. Control board replacement is more expensive ($100–$250 for the part) and requires careful wiring. A tech will charge $150–$300 for the full repair.",
    metaTitle:
      "Samsung Oven F-3 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the Samsung oven F-3 error code (temperature sensor). Easy sensor swap. Difficulty: Medium. Save $150+.",
  },
  {
    id: "whirlpool-oven-not-reaching-temperature",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Whirlpool",
    brandSlug: "whirlpool",
    problemSlug: "not-reaching-temperature",
    problemTitle: "Oven Not Reaching Set Temperature",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$10–$50",
    toolsNeeded: [
      "Oven thermometer",
      "Multimeter",
      "Phillips screwdriver",
      "1/4-inch nut driver",
    ],
    partsNeeded: [
      {
        name: "Oven Temperature Sensor",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=whirlpool+oven+temperature+sensor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+oven+temperature+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Bake Element",
        costRange: "$15–$30",
        amazonUrl: "https://www.amazon.com/s?k=whirlpool+oven+bake+element&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whirlpool+oven+bake+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the oven at the circuit breaker before doing any repair work.",
      "Let the oven cool completely before working inside it.",
      "Electric ovens use 240 volts — make sure the breaker is off and verify with a multimeter.",
      "For gas models, turn off the gas supply valve.",
    ],
    quickDiagnosis:
      "When your Whirlpool oven heats up but does not reach the temperature you set (food is undercooked, baking takes too long), the most common causes are a faulty temperature sensor, a weak bake element, or just needing a temperature calibration. An oven thermometer is the best $5 investment for diagnosing this problem.",
    steps: [
      {
        number: 1,
        title: "Test with an oven thermometer",
        description:
          "Place an oven thermometer in the center of the oven. Set the oven to 350°F and wait 20 minutes. Check the thermometer. If it reads 25°F or less off, you may be able to fix it with a calibration adjustment. If it is 50°F or more off, something needs replacing.",
      },
      {
        number: 2,
        title: "Try the calibration adjustment",
        description:
          "Many Whirlpool ovens let you adjust the temperature offset. Check your manual for the exact procedure — typically you press and hold the Bake button, then use the up/down arrows to adjust in 5-degree increments. This can compensate for minor temperature differences.",
      },
      {
        number: 3,
        title: "Inspect the bake element",
        description:
          "Turn off the breaker. Open the oven and look at the bake element (bottom coil). When working properly, it should glow red evenly across its entire length. If you noticed cold spots or sections that do not glow, the element is failing. Look for visible damage — cracks, blisters, or holes.",
      },
      {
        number: 4,
        title: "Test the temperature sensor",
        description:
          "The temperature sensor is a thin probe at the back of the oven cavity (near the top). Turn off the breaker, disconnect the sensor's wire harness at the back of the range, and test it with a multimeter. At room temperature, it should read around 1080–1100 ohms. A significantly different reading means it needs replacing.",
      },
      {
        number: 5,
        title: "Replace the faulty part",
        description:
          "If the bake element is bad: with the breaker off, remove the 2 screws, pull it forward, disconnect the wires, and swap in the new one. If the sensor is bad: remove the mounting screw from the back of the range, pull the old sensor out, and install the new one. Both are straightforward swaps.",
      },
      {
        number: 6,
        title: "Test with the oven thermometer again",
        description:
          "Turn the breaker back on. Set the oven to 350°F and wait 20 minutes. Check the thermometer. It should now be within 25°F of the set temperature. Run a few baking tests to confirm everything is working correctly.",
      },
    ],
    alternativeCauses: [
      "Oven door gasket not sealing (heat escaping)",
      "Faulty control board",
      "Damaged convection fan (convection models)",
      "Gas valve issue (gas models)",
    ],
    whenToCallPro:
      "If a new element and sensor do not fix the temperature issue, the control board may need replacing. Control boards are expensive ($100–$250) and can be tricky to diagnose without experience. Also check the door gasket — if it is torn or loose, heat escapes and the oven cannot maintain temperature. A tech visit for this issue typically costs $120–$250.",
    metaTitle:
      "Whirlpool Oven Not Reaching Temperature — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix a Whirlpool oven not reaching the set temperature. Check sensor and element. Difficulty: Medium. Save $150+.",
  },
  {
    id: "lg-oven-igniter-not-working",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "igniter-not-working",
    problemTitle: "Gas Oven Igniter Not Working",
    difficulty: "Medium",
    timeEstimate: "30-45 minutes",
    costEstimate: "$20–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "1/4-inch nut driver",
      "Multimeter (optional)",
    ],
    partsNeeded: [
      {
        name: "Oven Igniter",
        costRange: "$20–$50",
        amazonUrl: "https://www.amazon.com/s?k=lg+gas+oven+igniter&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=lg+gas+oven+igniter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the gas supply valve before starting any work.",
      "Turn off the oven at the circuit breaker as well.",
      "If you smell gas at any time, stop immediately, leave the house, and call your gas company.",
      "Do not touch the new igniter element with bare fingers — oils from your skin shorten its life. Handle it with a cloth.",
      "Make sure the gas is off before reconnecting any wires.",
    ],
    quickDiagnosis:
      "When your LG gas oven does not heat, the most common cause is a weak or dead igniter. The igniter needs to glow hot enough to open the gas safety valve — if it is worn out, it glows but never gets hot enough, so no gas flows and the oven does not heat. Replacing the igniter is one of the most common gas oven repairs, and most people can do it.",
    steps: [
      {
        number: 1,
        title: "Turn off gas and power",
        description:
          "Turn off the gas supply valve (usually behind or beside the range). Also turn off the circuit breaker for the oven. This is critical for safety — you are working near gas lines.",
      },
      {
        number: 2,
        title: "Remove the oven racks and floor panel",
        description:
          "Take out all the oven racks. The oven floor panel lifts up and slides out — some models have screws at the back holding it down. Remove the floor panel to expose the burner tube and igniter underneath.",
      },
      {
        number: 3,
        title: "Observe how the igniter behaves (diagnostic test)",
        description:
          "Before replacing anything, turn the gas and power back on briefly. Set the oven to Bake at 350°F. Watch the igniter. It should glow bright orange within 30 seconds and the gas should ignite within 60–90 seconds. If it glows weakly (dull orange) for more than 90 seconds without gas igniting, it is too weak. If it does not glow at all, it is dead. Turn gas and power back off.",
      },
      {
        number: 4,
        title: "Remove the old igniter",
        description:
          "With gas and power off, locate the igniter next to the burner tube. It is held by 2 screws. Remove the screws. Follow the igniter wire to where it plugs in (usually near the back of the oven behind the rear panel). Disconnect the wire harness plug. Gently remove the igniter.",
      },
      {
        number: 5,
        title: "Install the new igniter",
        description:
          "Handle the new igniter with a cloth — do not touch the glowing element with bare fingers. Connect the wire harness. Position the igniter next to the burner tube in the same spot as the old one. Secure it with the 2 screws. Do not overtighten — the igniter is fragile ceramic.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the oven floor panel back in and replace the racks. Turn the gas supply back on. Turn the breaker back on. Set the oven to Bake at 350°F. The new igniter should glow bright orange and the gas should ignite within 60 seconds. You should hear a soft 'whoomph' when the gas lights. Let it run for 10 minutes to confirm steady heating.",
      },
    ],
    alternativeCauses: [
      "Faulty gas safety valve",
      "Broken wire harness or loose connection",
      "Faulty oven control board",
      "Gas supply issue (low pressure or turned off)",
    ],
    whenToCallPro:
      "If the new igniter glows strong but gas still does not flow, the gas safety valve may be faulty. Replacing the safety valve involves working directly on gas connections — if you are not experienced with gas line work, absolutely call a pro. A tech will charge $150–$300 for igniter or safety valve replacement on a gas oven.",
    metaTitle:
      "LG Gas Oven Igniter Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix an LG gas oven igniter that's not working. Common repair with a $20-$50 part. Difficulty: Medium. Save $200+.",
  },
  {
    id: "frigidaire-oven-f10-error",
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "f10-error-code",
    problemTitle: "F10 Error Code (Runaway Temperature)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$10–$50",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "1/4-inch nut driver",
    ],
    partsNeeded: [
      {
        name: "Oven Temperature Sensor (RTD Probe)",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+oven+temperature+sensor",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+oven+temperature+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Oven Control Board (EOC)",
        costRange: "$80–$200",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+oven+control+board",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+oven+control+board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the oven at the circuit breaker immediately when you see the F10 error — the oven may be overheating.",
      "Do not use the oven until the problem is fixed — a runaway temperature is a fire risk.",
      "Let the oven cool completely before working on it.",
      "Electric ovens use 240 volts — always verify the breaker is off with a multimeter.",
    ],
    quickDiagnosis:
      "The F10 error on a Frigidaire oven means the control board detected a runaway oven temperature — the oven is either too hot or the sensor is giving a bad reading. This is a safety alert, so take it seriously. The good news is that 70% of the time it is just a bad temperature sensor (a cheap and easy fix). The other 30% of the time it is the control board.",
    steps: [
      {
        number: 1,
        title: "Turn off the breaker immediately",
        description:
          "Do not just press Cancel — turn off the circuit breaker for the oven. The F10 error means a potential overheat condition. Cutting power at the breaker ensures the heating elements cannot energize.",
      },
      {
        number: 2,
        title: "Let the oven cool and then reset",
        description:
          "Wait 30 minutes for the oven to cool down completely. Turn the breaker back on. If the F10 error comes back immediately (even with the oven at room temperature), the temperature sensor is probably giving a false reading. If the error only appears when the oven is heating, the sensor or control board may be failing under heat.",
      },
      {
        number: 3,
        title: "Test the temperature sensor",
        description:
          "Turn the breaker off. Find the temperature sensor — it is a thin metal probe sticking into the oven cavity from the back wall, near the top. Disconnect the wire harness at the back of the range. Set your multimeter to resistance (ohms) and measure across the two sensor terminals. At room temperature, it should read around 1080–1100 ohms. If you get an open circuit (no reading) or a wildly different number, the sensor is bad.",
      },
      {
        number: 4,
        title: "Replace the temperature sensor if faulty",
        description:
          "With the breaker off, remove the mounting screw from the back of the range. Gently pull the old sensor out through the back wall. Disconnect the plug. Connect the new sensor, slide it into the oven cavity, and secure the screw. This takes about 5 minutes.",
      },
      {
        number: 5,
        title: "Test after replacing the sensor",
        description:
          "Turn the breaker back on and set the oven to 350°F. Monitor it with an oven thermometer. If it heats normally and the F10 error does not return, you are done. Let it run for 15–20 minutes to be sure.",
      },
      {
        number: 6,
        title: "If the sensor was fine, check the control board",
        description:
          "If the sensor tested at the correct resistance but the F10 error persists, the oven control board (EOC — Electronic Oven Control) is likely faulty. The control board is behind the control panel at the top of the range. Replacing it involves disconnecting several wire harnesses and swapping the board. Take photos of every connection before disconnecting.",
      },
      {
        number: 7,
        title: "Replace the control board (if needed)",
        description:
          "Turn the breaker off. Remove the screws from the back cover of the control panel area. Carefully photograph all wire connections. Disconnect each harness from the old board. Remove the mounting screws. Install the new board, reconnect everything exactly as it was, and reassemble. Turn the breaker on and test.",
      },
    ],
    alternativeCauses: [
      "Wiring issue between sensor and control board",
      "Relay stuck closed on the control board (sending continuous power to element)",
      "Intermittent sensor connection",
    ],
    whenToCallPro:
      "If the temperature sensor tests good, the control board is likely the issue. The control board is expensive ($80–$200) and if you install a new one and it was not the problem, you are stuck with it. A tech can diagnose which part has failed with certainty. Expect to pay $150–$350 for a tech to diagnose and replace the right part. Given that the F10 is a safety issue, do not use the oven until it is fixed.",
    metaTitle:
      "Frigidaire Oven F10 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix the Frigidaire oven F10 error code (runaway temperature). Usually a bad sensor. Difficulty: Medium. Save $200+.",
  },
];
