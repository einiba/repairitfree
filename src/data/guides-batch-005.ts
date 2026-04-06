import { Guide } from "@/lib/types";

export const batch005Guides: Guide[] = [
  // ============================================================
  // KITCHEN APPLIANCES
  // ============================================================
  {
    id: "keurig-wont-brew-no-water",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Keurig",
    brandSlug: "keurig",
    problemSlug: "wont-brew-no-water",
    problemTitle: "Won't Brew or No Water Coming Out",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Paper clip or safety pin",
      "White vinegar",
      "Clean water",
      "Cup or mug",
    ],
    partsNeeded: [
      {
        name: "Keurig Descaling Solution (optional)",
        costRange: "$7–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=keurig+descaling+solution&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=keurig+descaling+solution&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the Keurig and let it cool before cleaning the needle.",
      "Be careful handling the entrance needle — it is sharp.",
      "Never submerge the Keurig base in water.",
    ],
    quickDiagnosis:
      "When a Keurig won't brew or no water comes out, it is almost always a clogged needle or scale buildup inside the water lines. A quick cleaning with a paper clip and a vinegar rinse fixes this about 90% of the time. You can do this in under 20 minutes with things you already have at home.",
    steps: [
      {
        number: 1,
        title: "Unplug and remove the water reservoir",
        description:
          "Unplug the Keurig from the wall. Lift the water reservoir off the machine and dump out any old water. Wash the reservoir with warm soapy water, rinse it, and set it aside.",
      },
      {
        number: 2,
        title: "Clean the entrance needle",
        description:
          "Open the top handle like you are inserting a K-Cup. Look underneath the top piece — you will see a pointed needle with a small hole. Straighten a paper clip and gently push it into the hole to clear any coffee grounds or buildup. Do this a few times from different angles. This needle clogs often and is the most common reason for no water flow.",
      },
      {
        number: 3,
        title: "Clean the exit needle",
        description:
          "Remove the K-Cup holder by pushing it up from the bottom. Look inside and you will see a smaller needle at the bottom. Use the paper clip to clear this needle too. Rinse the K-Cup holder under warm water and snap it back in.",
      },
      {
        number: 4,
        title: "Run a vinegar descale cycle",
        description:
          "Fill the reservoir halfway with white vinegar and the rest with water. Place it back on the machine. Plug the Keurig in and run brew cycles with no K-Cup until the reservoir is empty. This breaks up mineral scale inside the water lines.",
      },
      {
        number: 5,
        title: "Flush with clean water",
        description:
          "Fill the reservoir with plain water and run at least three full brew cycles to rinse out all the vinegar. Your coffee will taste bad if you skip this step. Once the water runs clear and does not smell like vinegar, you are done.",
      },
    ],
    alternativeCauses: [
      "Water reservoir not seated properly on the machine",
      "Air bubble trapped in the water line — try shaking the machine gently",
      "Faulty water pump motor (rare but possible on older units)",
      "Magnet in the reservoir lid is missing or out of place",
    ],
    whenToCallPro:
      "Keurig machines are affordable enough that professional repair rarely makes sense. If cleaning the needles and descaling does not fix it, and your unit is over two years old, replacing it is usually the better value. Check your warranty first — Keurig offers a one-year warranty on most models.",
    metaTitle:
      "Keurig Won't Brew or No Water — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Keurig that won't brew or has no water flow. Usually a clogged needle or scale buildup. Difficulty: Easy. Takes about 15 minutes.",
  },
  {
    id: "instant-pot-not-sealing",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Instant Pot",
    brandSlug: "instant-pot",
    problemSlug: "not-sealing",
    problemTitle: "Not Sealing or Coming to Pressure",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: ["Clean cloth", "Warm soapy water"],
    partsNeeded: [
      {
        name: "Instant Pot Replacement Sealing Ring",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=instant+pot+sealing+ring+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=instant+pot+sealing+ring+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never try to force the lid open when the pot is under pressure.",
      "Always make sure the float valve drops before opening the lid.",
      "Let the pot cool completely before inspecting the sealing ring.",
    ],
    quickDiagnosis:
      "If your Instant Pot is not sealing or takes forever to come to pressure, the sealing ring is the culprit about 80% of the time. It may be loose, dirty, or worn out. This is the easiest Instant Pot fix there is — most people solve it in under 10 minutes.",
    steps: [
      {
        number: 1,
        title: "Check the sealing ring",
        description:
          "Remove the lid and look at the silicone ring that sits in the groove around the inside of the lid. Pull it out gently. Check for cracks, warping, or food buildup. If the ring looks stretched out or does not spring back when you squeeze it, it needs to be replaced.",
      },
      {
        number: 2,
        title: "Clean the sealing ring and lid",
        description:
          "Wash the sealing ring with warm soapy water. Clean the groove in the lid where the ring sits. Food residue in this groove is a very common reason for poor sealing. Make sure everything is completely clean before putting the ring back.",
      },
      {
        number: 3,
        title: "Check the steam release valve",
        description:
          "Make sure the steam release valve on top of the lid is set to Sealing, not Venting. Push it back and forth a few times to make sure it moves freely. Also check that nothing is stuck inside it.",
      },
      {
        number: 4,
        title: "Inspect the float valve",
        description:
          "The float valve is the small pin on the lid that pops up when the pot reaches pressure. Push it up and down with your finger — it should move freely. If it is stuck or has food buildup around it, clean it with a damp cloth. You can push a toothpick through the hole to clear debris.",
      },
      {
        number: 5,
        title: "Do a water test",
        description:
          "Put one cup of water in the pot. Close the lid, set the valve to Sealing, and run a 5-minute pressure cook cycle. The pot should come to pressure within 10 minutes. If the float valve pops up and no steam escapes from the sides, your seal is good. If it still leaks, replace the sealing ring — they are inexpensive and easy to swap in.",
      },
    ],
    alternativeCauses: [
      "Not enough liquid in the pot (minimum one cup required)",
      "Lid not aligned or locked properly",
      "Damaged or bent lid rim",
      "Food or thick sauce blocking the float valve from rising",
    ],
    whenToCallPro:
      "Instant Pot sealing problems almost never need professional help. A replacement sealing ring costs around $10 and takes 30 seconds to install. If your lid or the pot itself is cracked or warped, contact Instant Pot support — they sometimes replace defective units under warranty.",
    metaTitle:
      "Instant Pot Not Sealing — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix an Instant Pot that won't seal or come to pressure. Usually the sealing ring or float valve. Difficulty: Easy. Takes under 15 minutes.",
  },
  {
    id: "kitchenaid-mixer-not-turning-on",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "KitchenAid",
    brandSlug: "kitchenaid",
    problemSlug: "mixer-not-turning-on",
    problemTitle: "Stand Mixer Not Turning On",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Multimeter (optional but helpful)",
    ],
    partsNeeded: [
      {
        name: "KitchenAid Mixer Phase Board or Speed Control",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=kitchenaid+mixer+phase+board&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=kitchenaid+mixer+phase+board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "KitchenAid Mixer Worm Gear (if gear is stripped)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=kitchenaid+mixer+worm+gear&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=kitchenaid+mixer+worm+gear&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the mixer before doing any inspection or repair work.",
      "Do not stick your fingers near the beater shaft while testing.",
      "KitchenAid mixers are heavy — work on a stable, flat surface.",
    ],
    quickDiagnosis:
      "When a KitchenAid stand mixer will not turn on, the most common causes are a tripped internal reset, a faulty speed control plate, or a stripped worm gear. Start with the simplest checks first. These mixers are built to last decades, so most problems are fixable without replacing the whole unit.",
    steps: [
      {
        number: 1,
        title: "Check the basics",
        description:
          "Make sure the mixer is firmly plugged into a working outlet. Try a different outlet to rule out a dead circuit. Also check that the speed lever is not stuck between settings — push it firmly to the lowest speed setting and try again.",
      },
      {
        number: 2,
        title: "Let the mixer reset",
        description:
          "KitchenAid mixers have an internal thermal overload that trips if the motor gets too hot. If you were mixing something heavy like bread dough, unplug the mixer and let it sit for 30 minutes to cool down. Then plug it back in and try again. This fixes the problem more often than people expect.",
      },
      {
        number: 3,
        title: "Listen for the motor",
        description:
          "Turn the speed dial to the lowest setting. If you hear a humming sound but the beater does not turn, the worm gear inside may be stripped. If you hear nothing at all, the problem is electrical — likely the speed control plate or the power cord.",
      },
      {
        number: 4,
        title: "Inspect the speed control plate",
        description:
          "Unplug the mixer. Remove the single screw on the back cover plate and take it off. Inside, you will see the speed control board. Look for any burn marks, melted plastic, or loose wires. If the board is visibly damaged, it needs to be replaced. This is the most common electrical failure on these mixers.",
      },
      {
        number: 5,
        title: "Test and replace if needed",
        description:
          "If the speed control plate looks fine, use a multimeter to check for continuity through the power cord and the plate. If you find the faulty part, replacement boards and worm gears are widely available and affordable. Snap or screw the new part in, reattach the cover, and test.",
      },
    ],
    alternativeCauses: [
      "Faulty wall outlet or tripped circuit breaker",
      "Damaged power cord",
      "Burned-out motor (rare on KitchenAid — these motors are very durable)",
      "Speed lever internal contact worn out",
    ],
    whenToCallPro:
      "If you are not comfortable working with electrical components or using a multimeter, a small appliance repair shop can diagnose and fix a KitchenAid mixer for $50–$100 in labor. Given that these mixers cost $300+ new and last for decades, professional repair is almost always worth it.",
    metaTitle:
      "KitchenAid Mixer Not Turning On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a KitchenAid stand mixer that won't turn on. Could be a thermal reset, speed control plate, or worm gear. Difficulty: Medium. Save $100+.",
  },
  {
    id: "ninja-blender-not-spinning",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Ninja",
    brandSlug: "ninja",
    problemSlug: "blender-not-spinning",
    problemTitle: "Blender Not Spinning",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: ["Clean cloth", "Warm soapy water"],
    partsNeeded: [
      {
        name: "Ninja Blender Blade Assembly Replacement",
        costRange: "$12–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=ninja+blender+blade+assembly+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ninja+blender+blade+assembly+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the blender before inspecting anything.",
      "Blender blades are extremely sharp — handle the blade assembly carefully.",
      "Never put your hand inside the pitcher while it is on the base.",
    ],
    quickDiagnosis:
      "Ninja blenders have safety interlocks that prevent the motor from running if the pitcher, lid, or handle are not aligned correctly. Nine times out of ten, a Ninja blender that will not spin just needs to be taken apart and reassembled properly. This is a quick fix you can do in a few minutes.",
    steps: [
      {
        number: 1,
        title: "Unplug the blender",
        description:
          "Pull the power cord out of the wall. Remove the pitcher from the base and take the lid off.",
      },
      {
        number: 2,
        title: "Check the lid and handle alignment",
        description:
          "Ninja blenders have a safety interlock that requires the lid to be fully locked and the handle to be properly positioned. Look at the arrows or alignment marks on the pitcher and lid. Make sure the lid clicks into place. On many Ninja models, the handle must also line up with a sensor on the base.",
      },
      {
        number: 3,
        title: "Inspect the blade assembly",
        description:
          "Carefully remove the blade assembly from the pitcher. Check that the blades spin freely when you turn them by hand. If they are stuck or feel gritty, food may be jammed underneath. Wash the assembly thoroughly with warm soapy water. Also check that the rubber gasket on the blade assembly is intact — a missing gasket can prevent proper seating.",
      },
      {
        number: 4,
        title: "Clean the base connection",
        description:
          "Look at the top of the motor base where the pitcher sits. You will see a small coupling that the blade assembly connects to. Wipe it clean. If there is dried food or sticky residue, it can prevent the blade from engaging with the motor. Also check the white safety tabs — press them to make sure they are not stuck.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Put the blade assembly back in the pitcher, set the pitcher on the base with the handle aligned to the correct position, lock the lid, and plug in the blender. Try the lowest speed first. If the motor hums but the blades do not spin, the blade coupling may be stripped and needs replacing.",
      },
    ],
    alternativeCauses: [
      "Worn or stripped blade coupling between motor and blade assembly",
      "Faulty safety interlock switch",
      "Burned-out motor from blending ice or frozen food too often",
      "Cracked pitcher that no longer sits flush on the base",
    ],
    whenToCallPro:
      "Ninja blenders are not expensive enough to justify professional repair in most cases. If the motor itself is dead, replacement parts often cost more than a new blender. Check your warranty first — Ninja offers a one-year limited warranty.",
    metaTitle:
      "Ninja Blender Not Spinning — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Ninja blender that won't spin. Usually a lid alignment or interlock issue. Difficulty: Easy. Takes 5-15 minutes.",
  },
  {
    id: "ninja-air-fryer-not-heating",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Ninja",
    brandSlug: "ninja",
    problemSlug: "air-fryer-not-heating",
    problemTitle: "Air Fryer Not Heating",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Clean cloth", "Soft brush or toothbrush"],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the air fryer and let it cool completely before cleaning.",
      "Never use metal utensils to scrape the heating element.",
      "Do not spray water directly into the heating element area.",
    ],
    quickDiagnosis:
      "When an air fryer powers on but does not heat, the most common cause is grease buildup on the heating element or a basket that is not fully inserted. A good cleaning solves this problem most of the time. If the unit does not power on at all, it is likely a blown thermal fuse.",
    steps: [
      {
        number: 1,
        title: "Unplug and let the air fryer cool down",
        description:
          "Pull the plug from the wall and wait until the unit is completely cool to the touch. Air fryer heating elements get extremely hot and can cause burns.",
      },
      {
        number: 2,
        title: "Check the basket and drawer",
        description:
          "Remove the basket and drawer. Push the drawer back in firmly until it clicks. Many air fryers have a safety switch that prevents heating if the drawer is not fully seated. Pull it out and push it back in a couple of times to make sure the switch engages.",
      },
      {
        number: 3,
        title: "Clean the heating element",
        description:
          "Turn the air fryer upside down carefully. You will see the heating coil at the top of the cooking chamber. If it is covered with grease or food splatter, it will not heat properly. Use a soft brush or toothbrush to gently scrub the element. Wipe it with a damp cloth. Do not soak it.",
      },
      {
        number: 4,
        title: "Check the power connection",
        description:
          "Try a different wall outlet. Air fryers draw a lot of power (1500–1700 watts) and can trip a circuit breaker, especially if they share a circuit with other appliances. Check your breaker panel if the outlet seems dead.",
      },
      {
        number: 5,
        title: "Test the air fryer",
        description:
          "Plug it in, set it to 400 degrees, and let it run for 3-4 minutes with the basket in. Open it and carefully hold your hand a few inches above the basket. You should feel heat. If it is blowing air but not heating, the thermal fuse may be blown — this sometimes happens after a power surge.",
      },
    ],
    alternativeCauses: [
      "Blown thermal fuse from overheating or power surge",
      "Faulty temperature sensor",
      "Damaged heating element coil",
      "Loose internal wiring connection",
    ],
    whenToCallPro:
      "Air fryers are generally not worth professional repair because new units are affordable. If cleaning does not fix the heating issue and the unit is out of warranty, replacing it is usually the smarter move. Most Ninja air fryers come with a one-year warranty.",
    metaTitle:
      "Ninja Air Fryer Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Ninja air fryer that won't heat up. Usually grease buildup or a basket switch issue. Difficulty: Easy. Takes 10-20 minutes.",
  },
  {
    id: "breville-toaster-oven-not-heating",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Breville",
    brandSlug: "breville",
    problemSlug: "toaster-oven-not-heating",
    problemTitle: "Toaster Oven Not Heating",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter",
      "Clean cloth",
    ],
    partsNeeded: [
      {
        name: "Toaster Oven Heating Element",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=breville+toaster+oven+heating+element&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=breville+toaster+oven+heating+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the toaster oven and let it cool completely before touching anything inside.",
      "Do not touch the heating elements with bare hands — even when cool, skin oils can cause hot spots that shorten element life.",
      "Never operate the toaster oven with the door open or a crumb tray removed.",
    ],
    quickDiagnosis:
      "If your Breville toaster oven powers on but does not heat, the most likely causes are a dirty temperature sensor, a tripped thermal fuse, or a burned-out heating element. Start with a thorough cleaning — food buildup around the sensor can trick the oven into thinking it is already at temperature.",
    steps: [
      {
        number: 1,
        title: "Unplug and cool down completely",
        description:
          "Pull the plug from the wall outlet. Wait at least 20 minutes for everything inside to cool down. Remove the crumb tray and any racks.",
      },
      {
        number: 2,
        title: "Clean the interior thoroughly",
        description:
          "Wipe down the inside walls, ceiling, and floor of the oven with a damp cloth. Pay special attention to the area around the temperature sensor — it is a small metal probe usually located on the back wall. Grease and food residue on the sensor is a very common reason for heating problems in toaster ovens.",
      },
      {
        number: 3,
        title: "Inspect the heating elements visually",
        description:
          "Look at the top and bottom heating elements. They should be intact with no visible breaks, dark spots, or sagging. If an element has a break in it, it is burned out and needs to be replaced. On most Breville models, you can see all the elements just by looking inside.",
      },
      {
        number: 4,
        title: "Check the door switch",
        description:
          "Breville toaster ovens have a door switch that cuts power to the elements when the door is open. Open and close the door a few times and listen for a click. If you do not hear a click, the switch may be stuck or broken. Press the switch manually with your finger to see if the oven starts heating with the door closed.",
      },
      {
        number: 5,
        title: "Test with a multimeter (optional)",
        description:
          "If you have a multimeter, unplug the oven and remove the back panel with a Phillips screwdriver. Test the thermal fuse for continuity — if it reads open (no continuity), it is blown and needs replacing. Also test each heating element. A good element will show low resistance. An open reading means it is burned out.",
      },
    ],
    alternativeCauses: [
      "Blown thermal fuse from overheating",
      "Faulty thermostat or temperature control board",
      "Damaged door switch not engaging properly",
      "Loose wire connection inside the unit",
    ],
    whenToCallPro:
      "Breville toaster ovens are premium appliances worth repairing. If you cannot find the problem after cleaning and basic checks, contact Breville support. They have good customer service and may offer a replacement if the unit is within warranty. For out-of-warranty repairs, a small appliance repair shop can usually fix it for $40–$80.",
    metaTitle:
      "Breville Toaster Oven Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Breville toaster oven that won't heat. Could be a dirty sensor, thermal fuse, or heating element. Difficulty: Medium. Save $50+.",
  },
  {
    id: "cuisinart-food-processor-blade-stuck",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Cuisinart",
    brandSlug: "cuisinart",
    problemSlug: "food-processor-blade-stuck",
    problemTitle: "Food Processor Blade Stuck on Shaft",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Dish towel or rubber jar gripper",
      "Warm water",
      "Cooking spray or vegetable oil",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the food processor before attempting to remove the blade.",
      "Food processor blades are razor sharp — always grip the plastic hub, never the blades.",
      "Use a thick dish towel or rubber gripper for better grip and hand protection.",
    ],
    quickDiagnosis:
      "A Cuisinart food processor blade that is stuck on the shaft is almost always caused by dried food acting like glue between the blade hub and the shaft. Warm water and a little oil will loosen it up. This is a common problem and very easy to solve — you just need a bit of patience.",
    steps: [
      {
        number: 1,
        title: "Unplug and remove the bowl",
        description:
          "Unplug the food processor. Unlock and remove the work bowl from the base. Do not try to pull the blade off while the bowl is on the base — you will not have enough leverage.",
      },
      {
        number: 2,
        title: "Soak in warm water",
        description:
          "Fill the bowl with warm (not boiling) water until it covers the blade hub. Add a drop of dish soap. Let it soak for 15-20 minutes. The warm water softens dried food buildup that is locking the blade onto the shaft.",
      },
      {
        number: 3,
        title: "Apply oil to the shaft",
        description:
          "After soaking, pour out the water. Spray a small amount of cooking spray or put a few drops of vegetable oil around the base of the blade where it meets the shaft. Let it sit for a couple of minutes. The oil seeps into the gap and helps break the bond.",
      },
      {
        number: 4,
        title: "Twist and lift",
        description:
          "Grip the plastic center hub of the blade with a thick dish towel or rubber jar gripper. Do not grab the blades. Gently twist the blade back and forth while pulling up. Do not yank — a steady twist-and-pull motion works best. If it still won't budge, soak it for another 15 minutes and try again.",
      },
      {
        number: 5,
        title: "Prevent it from happening again",
        description:
          "Once the blade is free, wash both the blade and the shaft thoroughly. To prevent this from happening again, always remove the blade right after using the food processor and wash it immediately. A light coating of cooking spray on the shaft before storing also helps.",
      },
    ],
    alternativeCauses: [
      "Mineral deposits from hard water bonding the blade to the shaft",
      "Warped or corroded shaft from dishwasher use (hand washing is recommended)",
      "Cross-threaded blade hub from forcing it on incorrectly",
    ],
    whenToCallPro:
      "This problem does not require professional help. If the blade is truly fused and will not come off after multiple soak-and-oil attempts, contact Cuisinart customer service. They may send you a replacement blade and shaft. Do not use pliers on the blade — you will damage it.",
    metaTitle:
      "Cuisinart Food Processor Blade Stuck — Free Fix Guide | RepairItFree",
    metaDescription:
      "Get a stuck Cuisinart food processor blade off the shaft. Warm water and oil fix this. Difficulty: Easy. Takes 5-15 minutes.",
  },
  {
    id: "ice-maker-not-making-ice",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "standalone-ice-maker-not-making-ice",
    problemTitle: "Countertop Ice Maker Not Making Ice",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "White vinegar or citric acid",
      "Soft cloth",
      "Warm water",
    ],
    partsNeeded: [
      {
        name: "Ice Maker Cleaning Solution",
        costRange: "$6–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=countertop+ice+maker+cleaner&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=countertop+ice+maker+cleaner&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the ice maker before cleaning.",
      "Never use harsh chemicals or bleach to clean the water system.",
      "Make sure the unit is on a level, stable surface — vibration can affect ice production.",
    ],
    quickDiagnosis:
      "Countertop ice makers that stop producing ice usually have a simple problem: mineral buildup from hard water, a water level issue, or the unit needs time to cool down. A cleaning cycle with vinegar fixes the problem in most cases. These machines are straightforward to troubleshoot.",
    steps: [
      {
        number: 1,
        title: "Check the water supply",
        description:
          "Open the lid and check the water reservoir. If it is empty or below the minimum line, add water. If the Add Water light is on even though the reservoir has water, the water sensor may have mineral buildup on it. Wipe the inside of the reservoir with a damp cloth.",
      },
      {
        number: 2,
        title: "Empty the ice basket",
        description:
          "If the ice basket is full, the machine will stop making ice. Most countertop ice makers have a sensor that detects a full basket. Remove the ice and the machine should restart its cycle automatically.",
      },
      {
        number: 3,
        title: "Let the unit cool down",
        description:
          "If the room is warm or the ice maker has been running for a long time, the compressor may need a break. Unplug it for 10-15 minutes, then plug it back in. Also make sure the unit is not sitting in direct sunlight or next to a heat source like a stove or oven.",
      },
      {
        number: 4,
        title: "Run a vinegar cleaning cycle",
        description:
          "Drain all the water out using the drain plug on the bottom. Fill the reservoir with a solution of equal parts white vinegar and water. Run two or three ice-making cycles and discard the ice. This dissolves mineral scale that builds up on the evaporator fingers — the metal prongs that freeze the water into ice shapes.",
      },
      {
        number: 5,
        title: "Rinse and test",
        description:
          "Drain the vinegar solution and fill with fresh clean water. Run two more cycles and discard that ice to flush out any vinegar taste. Then run a normal cycle. You should get a full batch of ice in 7-15 minutes. If the machine still does not produce ice, the compressor or refrigerant may be failing.",
      },
    ],
    alternativeCauses: [
      "Room temperature too high for the compressor to work efficiently",
      "Faulty compressor or refrigerant leak",
      "Clogged water pump",
      "Dirty or blocked condenser coils on the back of the unit",
    ],
    whenToCallPro:
      "Countertop ice makers are inexpensive appliances (usually $80–$200). If a cleaning cycle does not fix the problem and the compressor is not running, replacing the unit is usually cheaper than professional repair. Check your warranty first.",
    metaTitle:
      "Countertop Ice Maker Not Making Ice — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a countertop ice maker that stopped making ice. Usually mineral buildup or a sensor issue. Difficulty: Easy. Takes 10-20 minutes.",
  },
  {
    id: "insinkerator-disposal-humming-not-working",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "InSinkErator",
    brandSlug: "insinkerator",
    problemSlug: "humming-but-not-working",
    problemTitle: "Garbage Disposal Humming but Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "1/4-inch Allen wrench (hex key) — usually included with the disposal",
      "Flashlight",
      "Tongs or pliers (for removing jammed objects)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "NEVER put your hand inside the garbage disposal — even when it is off.",
      "Always turn off the wall switch AND unplug the unit or flip the circuit breaker before working on it.",
      "Use tongs or pliers to remove objects — never your fingers.",
    ],
    quickDiagnosis:
      "A garbage disposal that hums but does not spin has something jammed between the grinding plate and the shredder ring. This is the single most common disposal problem and is almost always fixable in under 10 minutes using the Allen wrench that came with your unit. Do not keep running it while it hums — you will burn out the motor.",
    steps: [
      {
        number: 1,
        title: "Turn off the disposal immediately",
        description:
          "If the disposal is humming, turn off the wall switch right away. The motor is trying to spin but cannot, and running it in this state will burn it out. Flip the circuit breaker for the disposal as an extra precaution.",
      },
      {
        number: 2,
        title: "Use the Allen wrench from the bottom",
        description:
          "Look at the very bottom center of the disposal unit under the sink. You will see a hex-shaped hole. Insert a 1/4-inch Allen wrench (most InSinkErator disposals come with one). Turn it back and forth several times. This manually rotates the grinding plate and dislodges whatever is stuck. You should feel it break free.",
      },
      {
        number: 3,
        title: "Remove the jammed object from above",
        description:
          "With the power still off, shine a flashlight down into the disposal from the sink opening. Look for the object that was causing the jam — it is usually a bone fragment, fruit pit, piece of glass, or utensil. Use tongs or pliers to pull it out. Never use your hand.",
      },
      {
        number: 4,
        title: "Press the reset button",
        description:
          "On the bottom of the disposal unit, you will see a small red or black button. This is the thermal overload reset. If the motor overheated from the jam, this button will have popped out. Press it back in until it clicks. If it will not stay in, wait 10 minutes for the motor to cool and try again.",
      },
      {
        number: 5,
        title: "Test the disposal",
        description:
          "Turn the circuit breaker back on. Run cold water into the disposal. Flip the wall switch on. The disposal should spin freely and sound normal. Run water for 30 seconds to flush any remaining debris. If it still just hums, repeat the Allen wrench step — sometimes a jam needs a few attempts to fully clear.",
      },
    ],
    alternativeCauses: [
      "Broken flywheel or shredder plate",
      "Seized motor bearings (usually on older units)",
      "Faulty wall switch or wiring",
      "Burned-out motor from prolonged jamming",
    ],
    whenToCallPro:
      "If the Allen wrench trick does not free the jam, or if the motor makes no sound at all, the motor may be burned out. Replacing a garbage disposal is a straightforward plumbing job that costs $150–$300 for a plumber including a new unit. If you are handy, you can do it yourself for just the cost of the new disposal.",
    metaTitle:
      "Garbage Disposal Humming but Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a garbage disposal that hums but won't spin. Usually a jam you can clear in minutes with an Allen wrench. Difficulty: Easy.",
  },
  {
    id: "bosch-dishwasher-not-draining",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Bosch",
    brandSlug: "bosch",
    problemSlug: "dishwasher-not-draining",
    problemTitle: "Dishwasher Not Draining",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Torx T20 screwdriver",
      "Towels",
      "Shallow pan or bowl",
      "Pliers",
    ],
    partsNeeded: [
      {
        name: "Bosch Dishwasher Drain Pump",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=bosch+dishwasher+drain+pump&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=bosch+dishwasher+drain+pump&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and disconnect power at the breaker before working on it.",
      "Have towels ready — standing water will be in the bottom of the tub.",
      "Be careful with glass or sharp debris in the filter area.",
    ],
    quickDiagnosis:
      "Bosch dishwashers that will not drain usually have a clogged filter or a blocked drain pump. Bosch uses a triple-filter system at the bottom of the tub that catches food particles, and it needs to be cleaned regularly. A thorough filter cleaning fixes the majority of Bosch draining problems.",
    steps: [
      {
        number: 1,
        title: "Remove standing water",
        description:
          "Open the dishwasher door. Use a cup or sponge to remove as much standing water from the bottom as possible. Soak it up with towels. You need the bottom of the tub dry enough to work in.",
      },
      {
        number: 2,
        title: "Remove and clean the filter assembly",
        description:
          "Pull out the bottom rack. In the center-bottom of the tub, you will see a cylindrical filter with a handle. Turn it counter-clockwise and lift it out. Below it is a flat mesh filter — lift that out too. Wash both filters under running water, using a soft brush to remove any food or grease. This is the number one fix for Bosch drainage problems.",
      },
      {
        number: 3,
        title: "Check the drain pump cover",
        description:
          "With the filters removed, look to the side of the filter housing. You will see a white plastic cover for the drain pump. Unclip or unscrew it. Inside, check for glass, bones, labels, or other debris blocking the pump impeller. Carefully remove anything you find. Spin the impeller with your finger — it should rotate freely.",
      },
      {
        number: 4,
        title: "Inspect the drain hose",
        description:
          "Pull the dishwasher out slightly (or access from under the sink) and check the drain hose. Make sure it is not kinked or pinched. If the hose connects to a garbage disposal, make sure the knockout plug inside the disposal inlet was removed when the dishwasher was installed — this is a surprisingly common oversight.",
      },
      {
        number: 5,
        title: "Check the air gap or high loop",
        description:
          "Look on top of the sink for a small chrome cap — that is the air gap. If you have one, remove the cap and clean out any debris inside. If you do not have an air gap, make sure the drain hose has a high loop (goes up near the underside of the counter before going down to the disposal or drain). Without this, dirty water can siphon back into the dishwasher.",
      },
      {
        number: 6,
        title: "Reassemble and test",
        description:
          "Put the pump cover back on, reinstall the mesh filter and cylindrical filter (turn clockwise to lock). Replace the bottom rack. Run a short rinse cycle and check that the water drains completely. If it still does not drain, the drain pump motor itself may be faulty.",
      },
    ],
    alternativeCauses: [
      "Faulty drain pump motor",
      "Clogged garbage disposal or sink drain connection",
      "Blocked or kinked drain hose",
      "Control board not sending signal to drain pump",
    ],
    whenToCallPro:
      "If cleaning the filters and checking the pump and hose does not fix it, the drain pump may need replacing. A technician will charge $150–$250 for this repair. If your Bosch is still under the standard two-year warranty (or extended warranty), contact Bosch directly for free service.",
    metaTitle:
      "Bosch Dishwasher Not Draining — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Bosch dishwasher that won't drain. Usually a clogged filter or blocked drain pump. Difficulty: Medium. Save $150+.",
  },
  {
    id: "samsung-refrigerator-ice-dispenser-jammed",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "ice-dispenser-jammed",
    problemTitle: "Refrigerator Ice Dispenser Jammed",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Plastic spatula or wooden spoon",
      "Hair dryer",
      "Towels",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Do not use sharp metal tools to chip ice — you can damage the dispenser components.",
      "Unplug the refrigerator or turn off the ice maker before working inside the freezer.",
      "Be careful with the hair dryer near water — keep it dry and away from any pooling water.",
    ],
    quickDiagnosis:
      "Samsung refrigerator ice dispensers jam when ice clumps together in the bucket or when the auger mechanism gets frozen. This is extremely common with Samsung models and is usually caused by temperature fluctuations or the freezer door being opened frequently. The fix is simple — break up the ice clump and adjust your settings.",
    steps: [
      {
        number: 1,
        title: "Remove the ice bucket",
        description:
          "Open the freezer door. On most Samsung models, the ice bucket lifts out or pulls forward and then up. Some models have a release lever on the side. Pull the entire ice bucket out of the freezer.",
      },
      {
        number: 2,
        title: "Break up the ice clump",
        description:
          "Dump the ice into the sink. You will likely see a large solid chunk of ice that formed in the bucket. Break it apart with a wooden spoon or run warm water over it. Do not use a knife or metal tool — you can crack the plastic bucket. Wash the bucket with warm water to melt any remaining ice stuck to the walls.",
      },
      {
        number: 3,
        title: "Thaw the auger and dispenser chute",
        description:
          "Look inside the freezer where the bucket was. You may see ice built up around the auger motor housing or in the dispenser chute. Use a hair dryer on low heat to gently melt any ice buildup. Hold it about 6 inches away and keep it moving. Wipe away water with a towel as the ice melts.",
      },
      {
        number: 4,
        title: "Reinstall and test",
        description:
          "Dry the ice bucket thoroughly and slide it back into the freezer. Close the door and wait an hour for new ice to form. Then test the dispenser. It should work smoothly now.",
      },
      {
        number: 5,
        title: "Adjust settings to prevent future jams",
        description:
          "Set your freezer temperature to 0 degrees Fahrenheit (the recommended setting). If it is too cold or too warm, ice clumps faster. Also try to use ice regularly — if ice sits in the bucket for a long time without being used, it sublimates and refreezes into a solid block. If this keeps happening, consider turning off the ice maker when you go on vacation.",
      },
    ],
    alternativeCauses: [
      "Faulty auger motor that is not turning the ice forward",
      "Broken dispenser flap that lets warm air into the chute",
      "Defrost cycle problem causing excess moisture in the freezer",
      "Ice maker overproducing and overfilling the bucket",
    ],
    whenToCallPro:
      "If the ice dispenser keeps jamming every few days even after you clean it and adjust the temperature, the auger motor may be failing or there could be a defrost system issue. Samsung refrigerator repairs typically cost $150–$300 from an authorized technician. Check if your fridge is still under Samsung's standard one-year warranty.",
    metaTitle:
      "Samsung Refrigerator Ice Dispenser Jammed — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a jammed Samsung refrigerator ice dispenser. Usually clumped ice in the bucket. Difficulty: Easy. Takes 10-20 minutes.",
  },
  {
    id: "frigidaire-freezer-not-freezing",
    category: "Kitchen Appliances",
    categorySlug: "kitchen-appliances",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "freezer-not-freezing",
    problemTitle: "Freezer Not Freezing",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Vacuum with brush attachment",
      "Coil cleaning brush",
      "Thermometer",
      "Multimeter (optional)",
    ],
    partsNeeded: [
      {
        name: "Frigidaire Freezer Evaporator Fan Motor",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+freezer+evaporator+fan+motor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+freezer+evaporator+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the freezer before cleaning coils or accessing internal components.",
      "Be careful when pulling the freezer out from the wall — they are heavy.",
      "If you smell a chemical odor, the refrigerant may be leaking — do not try to fix this yourself.",
    ],
    quickDiagnosis:
      "A Frigidaire freezer that stops freezing is most often caused by dirty condenser coils, a failed evaporator fan, or frost buildup on the evaporator coils. Start with cleaning the condenser coils — this alone fixes the problem about 40% of the time and is something most people never think to do.",
    steps: [
      {
        number: 1,
        title: "Check the temperature setting",
        description:
          "Make sure the thermostat is set to 0 degrees Fahrenheit. On some Frigidaire models, the dial goes from 1-7 where 4 is the recommended setting. If someone accidentally bumped the dial, the freezer may just be on a warmer setting. Put a thermometer inside and check back in an hour.",
      },
      {
        number: 2,
        title: "Clean the condenser coils",
        description:
          "Unplug the freezer. The condenser coils are usually on the back of the unit or behind a kick plate at the bottom front. Use a coil cleaning brush (a long, thin brush designed for this) to remove dust and lint from the coils. Then vacuum everything up. Dirty coils are the leading cause of freezers that do not stay cold enough. They should be cleaned every 6-12 months.",
      },
      {
        number: 3,
        title: "Listen for the evaporator fan",
        description:
          "Plug the freezer back in. Open the freezer door and press the door switch (the button that makes the light go off). Listen for a fan running inside the freezer. If you do not hear a fan, the evaporator fan motor may be dead. This fan circulates cold air throughout the freezer — without it, the unit cannot cool properly even though the compressor is running.",
      },
      {
        number: 4,
        title: "Check for frost buildup on the evaporator",
        description:
          "Unplug the freezer again. Remove the back panel inside the freezer (it is usually held in with a few screws). If you see a thick layer of frost or ice on the evaporator coils behind the panel, the defrost system has failed. You can manually defrost by leaving the freezer unplugged with the door open for 24 hours. But if the defrost system is broken, the frost will come back.",
      },
      {
        number: 5,
        title: "Check the door seal",
        description:
          "Close the freezer door on a dollar bill. Try to pull the bill out. If it slides out easily, the door gasket is not sealing properly and warm air is getting in. Inspect the gasket for cracks, tears, or food residue. Clean it with warm soapy water. If the gasket is damaged, it can be replaced without tools on most Frigidaire models — the new gasket pushes into the same channel.",
      },
    ],
    alternativeCauses: [
      "Failed defrost timer, heater, or thermostat",
      "Low refrigerant from a system leak",
      "Faulty compressor (uncommon but possible on older units)",
      "Freezer is overstocked and blocking air circulation",
    ],
    whenToCallPro:
      "If cleaning the coils and checking the fan and defrost system does not solve it, you may have a refrigerant leak or compressor problem. These require a certified technician with specialized equipment. Expect to pay $200–$400 for major compressor or sealed-system repairs. If the freezer is more than 10 years old, replacing it may be more cost-effective.",
    metaTitle:
      "Frigidaire Freezer Not Freezing — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Frigidaire freezer that stopped freezing. Start with dirty condenser coils and evaporator fan. Difficulty: Medium. Save $200+.",
  },

  // ============================================================
  // HOME COMFORT
  // ============================================================
  {
    id: "space-heater-not-heating",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "space-heater-not-heating",
    problemTitle: "Space Heater Not Heating",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Vacuum with brush attachment",
      "Soft cloth",
      "Compressed air (optional)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the space heater and let it cool completely before touching any part of it.",
      "Never open the housing of a space heater — the heating elements carry high voltage.",
      "Keep the heater on a flat, hard surface away from curtains, furniture, and bedding.",
      "Never use an extension cord with a space heater — plug directly into a wall outlet.",
    ],
    quickDiagnosis:
      "A space heater that will not heat usually has a tripped safety feature, a dirty filter, or is plugged into an overloaded circuit. Most space heaters have built-in tip-over switches and overheat protection that shut the unit off. Resetting these and cleaning the heater fixes the problem in most cases.",
    steps: [
      {
        number: 1,
        title: "Check the outlet and power",
        description:
          "Make sure the outlet works by plugging in something else like a phone charger. Space heaters draw 1,500 watts and can trip a circuit breaker, especially if they share a circuit with other appliances. Check your breaker panel and reset any tripped breakers. Always plug a space heater directly into a wall outlet — never an extension cord or power strip.",
      },
      {
        number: 2,
        title: "Reset the tip-over switch",
        description:
          "Most space heaters have a tip-over safety switch on the bottom. If the heater was bumped, knocked, or is on an uneven surface, this switch may have tripped. Pick the heater up and set it down firmly on a flat, hard surface. The switch should reset automatically. Some models also have a manual reset button on the back or bottom.",
      },
      {
        number: 3,
        title: "Reset the overheat protection",
        description:
          "Unplug the heater and let it cool for 15-20 minutes. The internal overheat sensor may have tripped if the heater was running too long, was too close to a wall, or had its vents blocked. After cooling, plug it back in. Many models reset the overheat protection automatically once they cool down.",
      },
      {
        number: 4,
        title: "Clean the heater",
        description:
          "Unplug the heater. Use a vacuum with a brush attachment to clean the intake and exhaust vents. Dust buildup restricts airflow and causes overheating shutdowns. If your heater has a washable filter, remove it and rinse it under water. Let it dry completely before putting it back in.",
      },
      {
        number: 5,
        title: "Check the thermostat setting",
        description:
          "If the heater turns on but keeps shutting off quickly, the thermostat may be set too low — the heater thinks the room has already reached the target temperature. Turn the thermostat to the highest setting and see if it runs continuously. Also make sure the heater is not near a heat source or in direct sunlight, which can fool the thermostat.",
      },
    ],
    alternativeCauses: [
      "Burned-out heating element",
      "Faulty internal thermostat",
      "Damaged power cord or loose plug prongs",
      "Failed control board on digital models",
    ],
    whenToCallPro:
      "Do not try to open or repair a space heater yourself — the high-voltage heating elements are dangerous. If the basic resets and cleaning do not fix it, and the heater is out of warranty, replacing it is the safest choice. Space heaters are affordable and are not worth the risk of an improper repair.",
    metaTitle:
      "Space Heater Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a space heater that won't heat. Usually a tripped safety switch or dirty vents. Difficulty: Easy. Takes 5-15 minutes.",
  },
  {
    id: "humidifier-not-producing-mist",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "not-producing-mist",
    problemTitle: "Humidifier Not Producing Mist",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "White vinegar",
      "Soft brush or toothbrush",
      "Clean water",
    ],
    partsNeeded: [
      {
        name: "Humidifier Demineralization Cartridge",
        costRange: "$6–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=humidifier+demineralization+cartridge&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=humidifier+demineralization+cartridge&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the humidifier before cleaning or disassembling any parts.",
      "Do not run the humidifier without water in the tank — it can damage the transducer.",
      "Clean your humidifier weekly to prevent mold and bacteria growth.",
    ],
    quickDiagnosis:
      "An ultrasonic humidifier that stops producing mist almost always has mineral buildup on the transducer disc — the small ceramic plate at the bottom of the base. An evaporative humidifier that stops working usually has a dried-out or clogged wicking filter. Both are easy to clean and get running again.",
    steps: [
      {
        number: 1,
        title: "Check the water tank",
        description:
          "Remove the water tank and make sure it has water in it. Also check that water is flowing into the base. Flip the tank upside down over the sink — water should flow freely from the tank opening. If it does not, the tank valve may be stuck. Gently press the valve to release it.",
      },
      {
        number: 2,
        title: "Clean the transducer (ultrasonic models)",
        description:
          "If you have an ultrasonic humidifier (the kind that makes cool mist with no filter), unplug it and look in the base where the water sits. You will see a small round disc — that is the transducer. It vibrates at high frequency to create mist. Mineral deposits from hard water coat this disc and stop it from working. Soak a cloth in white vinegar and lay it on the disc for 20 minutes. Then gently scrub with a soft brush.",
      },
      {
        number: 3,
        title: "Replace or clean the wicking filter (evaporative models)",
        description:
          "If you have an evaporative humidifier (the kind with a fan and a filter), remove the wicking filter. If it is stiff, crusty, or discolored, soak it in a solution of one part white vinegar to one part water for 30 minutes. Rinse it thoroughly. If the filter is more than a couple months old and does not soften after soaking, replace it.",
      },
      {
        number: 4,
        title: "Clean the entire base",
        description:
          "Fill the base with a mixture of equal parts white vinegar and water. Let it soak for 30 minutes to dissolve mineral deposits. Scrub the inside with a soft brush, paying attention to any nozzle openings or float switches. Rinse thoroughly with clean water. Mineral buildup on the float switch can make the unit think there is no water.",
      },
      {
        number: 5,
        title: "Refill and test",
        description:
          "Fill the tank with fresh cool water (distilled water is best if you have hard water). Place the tank on the base and plug the unit in. Turn it to the highest mist setting. You should see mist within a minute or two. If an ultrasonic model still produces no mist after a thorough cleaning, the transducer itself may be cracked and needs replacing.",
      },
    ],
    alternativeCauses: [
      "Cracked or failed ultrasonic transducer",
      "Faulty float switch telling the unit the tank is empty",
      "Clogged mist nozzle outlet",
      "Fan motor failure (evaporative models)",
    ],
    whenToCallPro:
      "Humidifiers are inexpensive enough that professional repair rarely makes sense. If cleaning does not fix it, check the warranty — many humidifiers have a one- to two-year warranty. Otherwise, replacing the unit is usually the best option, especially since older humidifiers can harbor mold in hard-to-clean places.",
    metaTitle:
      "Humidifier Not Producing Mist — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a humidifier that stopped making mist. Usually mineral buildup on the transducer or filter. Difficulty: Easy. Takes 10-20 minutes.",
  },
  {
    id: "frigidaire-dehumidifier-not-collecting-water",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Frigidaire",
    brandSlug: "frigidaire",
    problemSlug: "dehumidifier-not-collecting-water",
    problemTitle: "Dehumidifier Not Collecting Water",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Vacuum with brush attachment",
      "Coil cleaning brush",
      "Soft cloth",
      "Thermometer (optional)",
    ],
    partsNeeded: [
      {
        name: "Frigidaire Dehumidifier Humidity Sensor",
        costRange: "$10–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=frigidaire+dehumidifier+humidity+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=frigidaire+dehumidifier+humidity+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dehumidifier before cleaning or inspecting internal parts.",
      "Do not operate the dehumidifier in temperatures below 60 degrees Fahrenheit — the coils will frost up.",
      "Empty the water bucket before moving the unit to avoid spills.",
    ],
    quickDiagnosis:
      "When a Frigidaire dehumidifier runs but does not collect water, the most common reasons are dirty coils, a room temperature that is too cold, or a full bucket sensor that is stuck. Cleaning the coils and filter restores performance in the majority of cases. Check the room temperature first — dehumidifiers struggle below 60 degrees.",
    steps: [
      {
        number: 1,
        title: "Check the room temperature",
        description:
          "Dehumidifiers work by cooling air until moisture condenses out of it. If the room is below 60 degrees Fahrenheit, the coils will frost over instead of collecting water. Check the room temperature. If it is cold, warm the room up before running the dehumidifier, or look for a model rated for low-temperature operation.",
      },
      {
        number: 2,
        title: "Clean or replace the air filter",
        description:
          "Pull out the air filter — it is usually behind or under a front grille panel. If it is clogged with dust, the unit cannot pull in enough air to dehumidify effectively. Wash the filter with warm soapy water, let it dry, and put it back. Clean this filter every two weeks for best performance.",
      },
      {
        number: 3,
        title: "Clean the condenser and evaporator coils",
        description:
          "Unplug the unit and remove the back panel if possible. You will see two sets of coils. Use a coil brush and vacuum to remove dust and debris from both sets. Dirty coils dramatically reduce the dehumidifier's ability to condense water. This is the most impactful maintenance you can do.",
      },
      {
        number: 4,
        title: "Check the bucket and float switch",
        description:
          "Remove the water bucket and look at the float switch — a small arm or float that rises with the water level. If it is stuck in the up position, the dehumidifier thinks the bucket is full and will not collect water even though the bucket is empty. Move the float up and down by hand a few times to free it. Clean any mineral deposits off the float mechanism.",
      },
      {
        number: 5,
        title: "Verify the humidity settings and test",
        description:
          "Set the desired humidity to the lowest setting (usually 35%). This forces the compressor to run continuously. Let the unit run for an hour. If it starts collecting water, the previous humidity setting may have been too close to the actual room humidity. If it still does not collect water and the compressor is running, there may be a refrigerant leak.",
      },
    ],
    alternativeCauses: [
      "Low refrigerant from a sealed system leak",
      "Faulty compressor",
      "Defective humidity sensor giving incorrect readings",
      "Room humidity already at or below the set target",
    ],
    whenToCallPro:
      "If cleaning does not restore water collection and the compressor is running, the sealed refrigerant system may be leaking. This repair requires a certified HVAC technician and costs $100–$250. If your dehumidifier is more than 5 years old, replacing it is usually more economical than a refrigerant repair.",
    metaTitle:
      "Frigidaire Dehumidifier Not Collecting Water — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Frigidaire dehumidifier that runs but collects no water. Usually dirty coils or a stuck float switch. Difficulty: Medium.",
  },
  {
    id: "hunter-ceiling-fan-remote-not-working",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Hunter",
    brandSlug: "hunter",
    problemSlug: "ceiling-fan-remote-not-working",
    problemTitle: "Ceiling Fan Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Step ladder",
      "Phillips screwdriver",
      "New batteries (usually 9V or AAA)",
    ],
    partsNeeded: [
      {
        name: "Universal Ceiling Fan Remote Control Kit",
        costRange: "$15–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=hunter+ceiling+fan+remote+control+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=hunter+ceiling+fan+remote+control+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off power to the ceiling fan at the circuit breaker — not just the wall switch.",
      "Use a sturdy step ladder and have someone hold it steady.",
      "Do not touch any wires inside the fan canopy until you have verified the power is off.",
    ],
    quickDiagnosis:
      "When a Hunter ceiling fan remote stops working, it is almost always dead batteries, a frequency mismatch between the remote and receiver, or a failed receiver inside the fan canopy. Start with fresh batteries — this is the fix about 60% of the time. If that does not work, checking the DIP switches takes care of most of the rest.",
    steps: [
      {
        number: 1,
        title: "Replace the batteries in the remote",
        description:
          "Open the battery compartment on the remote. Most Hunter remotes use a 9-volt battery or AAA batteries. Replace them with fresh ones even if the old ones seem fine — weak batteries are the most common cause of a non-responsive remote. Make sure the contacts are clean and the batteries are inserted in the correct direction.",
      },
      {
        number: 2,
        title: "Check the DIP switch settings",
        description:
          "Open the battery compartment of the remote. You will see a row of small DIP switches (usually 4 switches that flip up or down). These set the frequency that the remote uses to communicate with the receiver in the fan. Now turn off the breaker, remove the canopy cover on the fan, and find the receiver — a small box with its own set of DIP switches. The switches on the remote and receiver must match exactly. If they don't, set them to match and test again.",
      },
      {
        number: 3,
        title: "Reset the receiver",
        description:
          "Turn the power off at the breaker for 30 seconds, then turn it back on. Within 30 seconds of the power coming back on, press and hold any button on the remote for about 5 seconds. This re-pairs the remote with the receiver on some Hunter models. The fan may flash its light or click to confirm pairing.",
      },
      {
        number: 4,
        title: "Test the remote signal",
        description:
          "Point the remote at a smartphone camera and press any button. If you see a flash of light on the camera screen (it looks purple or white), the remote is sending an infrared or RF signal. If you see nothing, the remote itself may be faulty. Note: RF remotes (the most common type on Hunter fans) may not show a visible flash — this test works best with IR remotes.",
      },
      {
        number: 5,
        title: "Replace the receiver if needed",
        description:
          "If the remote is working but the fan does not respond, the receiver module inside the fan canopy is likely dead. Turn off the breaker. Remove the canopy. The receiver is a small box connected to the fan wires with wire nuts. Universal replacement receivers are affordable and come with instructions. Match the wire colors and swap it out.",
      },
    ],
    alternativeCauses: [
      "Interference from another fan remote on the same frequency (in homes with multiple fans)",
      "Faulty wall switch cutting power before it reaches the receiver",
      "Loose wire connection inside the fan canopy",
      "LED bulbs interfering with the remote signal (rare)",
    ],
    whenToCallPro:
      "If you are not comfortable working on a ladder or handling wiring in the fan canopy, an electrician can replace the receiver for $75–$150. This is a quick job for a professional. If the fan itself is old and the motor is failing, it may make more sense to replace the whole fan.",
    metaTitle:
      "Hunter Ceiling Fan Remote Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Hunter ceiling fan remote that stopped working. Usually dead batteries or DIP switch mismatch. Difficulty: Easy. Takes 10-20 minutes.",
  },
  {
    id: "dimplex-electric-fireplace-not-heating",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Dimplex",
    brandSlug: "dimplex",
    problemSlug: "electric-fireplace-not-heating",
    problemTitle: "Electric Fireplace Not Heating",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Vacuum with brush attachment",
      "Soft cloth",
      "Compressed air (optional)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the electric fireplace before cleaning or inspecting it.",
      "Do not spray water or cleaning products into the heater vents.",
      "Keep all objects at least three feet away from the heater outlet.",
    ],
    quickDiagnosis:
      "Dimplex electric fireplaces have a separate switch for the flame effect and the heater — many people do not realize the heater has its own control. If the flames are working but there is no heat, the heater may simply not be turned on, or the built-in overheat protection has tripped. This is a quick troubleshoot.",
    steps: [
      {
        number: 1,
        title: "Make sure the heater is actually turned on",
        description:
          "Dimplex fireplaces have separate controls for the flame visual effect and the actual heater. The flame display can run without the heater. Look for a heater button or switch — it is usually separate from the flame on/off. On remote-controlled models, there is a dedicated heat button. Press it and set the thermostat to the highest setting.",
      },
      {
        number: 2,
        title: "Check the power source",
        description:
          "Electric fireplaces draw 1,500 watts. Make sure the unit is plugged directly into a wall outlet — not a power strip or extension cord, which can overheat or not supply enough power. Try a different outlet to rule out a dead circuit. Check the breaker panel for tripped breakers.",
      },
      {
        number: 3,
        title: "Reset the overheat protection",
        description:
          "Unplug the fireplace and let it cool for 20-30 minutes. The built-in thermal cutoff trips if the unit overheats due to restricted airflow. After cooling, plug it back in and test the heater. If it works, the overheating was likely caused by blocked vents.",
      },
      {
        number: 4,
        title: "Clean the air vents and fan",
        description:
          "Unplug the unit. Use a vacuum with a brush attachment to clean the intake vents (usually at the bottom) and the exhaust vents (usually at the top or front). Dust buildup restricts airflow and triggers the overheat shutoff. If you can access the internal fan, vacuum it gently as well. Compressed air works great for getting dust out of tight spots.",
      },
      {
        number: 5,
        title: "Test the fan",
        description:
          "Plug the unit in and turn on the heater. Put your hand near the exhaust vent. You should feel warm air being pushed out by the internal fan. If you feel heat but no air movement, the fan motor may have failed. If you feel air but it is not warm, the heating element may be burned out.",
      },
    ],
    alternativeCauses: [
      "Burned-out heating element",
      "Failed blower fan motor",
      "Faulty thermostat not calling for heat",
      "Defective control board on smart or remote-controlled models",
    ],
    whenToCallPro:
      "If the heater element or fan motor is dead, Dimplex offers warranty support and replacement parts. Contact their customer service first — they are known for good support. For out-of-warranty units, a local appliance repair shop can replace a heating element or fan for $50–$100 in labor. Given that Dimplex fireplaces cost $200–$1,000+, repair is usually worth it.",
    metaTitle:
      "Dimplex Electric Fireplace Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Dimplex electric fireplace that won't heat. Check the heater switch, reset overheat protection, and clean vents. Difficulty: Easy.",
  },
  {
    id: "whole-house-fan-not-working",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "whole-house-fan-not-working",
    problemTitle: "Whole House Fan Not Working",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Step ladder",
      "Flashlight",
      "Screwdriver (Phillips and flathead)",
      "Multimeter (optional)",
    ],
    partsNeeded: [
      {
        name: "Whole House Fan Motor Capacitor",
        costRange: "$8–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=whole+house+fan+motor+capacitor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=whole+house+fan+motor+capacitor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the circuit breaker for the fan before doing any work — do not rely on the wall switch alone.",
      "Whole house fan blades are large and can cause serious injury — verify power is off before going near the blades.",
      "Use a sturdy ladder and have someone spot you when working in the attic.",
      "Attics can be extremely hot — work early in the morning or in the evening.",
    ],
    quickDiagnosis:
      "When a whole house fan will not turn on, the most common causes are a tripped breaker, a bad capacitor, or a seized motor from sitting idle over the winter. A bad capacitor is the single most common failure on these fans and costs under $20 to replace. If the fan hums but will not spin, the capacitor is almost certainly the problem.",
    steps: [
      {
        number: 1,
        title: "Check the breaker and wall switch",
        description:
          "Check your breaker panel — whole house fans are usually on a dedicated circuit. Reset the breaker by flipping it off and then on. Also check the wall switch or timer that controls the fan. Many whole house fans use a timer switch that may have simply timed out.",
      },
      {
        number: 2,
        title: "Check if the motor hums",
        description:
          "Turn the power on and flip the fan switch. Go up near the fan (staying clear of the blades) and listen. If you hear a humming sound but the blades do not spin, the motor is getting power but cannot start. This is the classic symptom of a bad run capacitor. If you hear nothing at all, the problem is electrical — the motor, switch, or wiring.",
      },
      {
        number: 3,
        title: "Try spinning the blades by hand",
        description:
          "Turn the breaker OFF. Go into the attic and try to spin the fan blades by hand. They should spin freely. If they are stiff or locked up, the motor bearings may be seized. On some motors, you can add a few drops of electric motor oil to the bearing ports on each end of the motor to free them up. Spin the blades back and forth until they loosen.",
      },
      {
        number: 4,
        title: "Inspect and replace the capacitor",
        description:
          "With the breaker still OFF, locate the capacitor — it is a small metal or plastic cylinder mounted on or near the motor housing. It will have two or three wire connections. Check for bulging, leaking, or burn marks — these all indicate a failed capacitor. Note the capacitor's microfarad (uF) and voltage rating printed on the side. Buy an exact replacement and swap the wires over. This is the most common fix for whole house fans.",
      },
      {
        number: 5,
        title: "Check wiring connections",
        description:
          "While you are in the attic, check all the wire connections between the switch, the junction box, and the motor. Look for loose wire nuts, corroded connections, or wires that have pulled free. Attic heat and vibration can loosen connections over time. Tighten any loose wire nuts and make sure all connections are secure.",
      },
    ],
    alternativeCauses: [
      "Failed fan motor (burned-out windings)",
      "Bad wall timer switch",
      "Loose or disconnected wiring in the attic junction box",
      "Belt broken or loose (on belt-drive models)",
    ],
    whenToCallPro:
      "If you are not comfortable working in the attic around electrical wiring, call an electrician. The repair is usually $100–$200 if it is just a capacitor or switch. If the motor itself is burned out, a new motor costs $50–$150 plus installation. For belt-drive fans, a new belt costs under $20 and is easy to replace yourself.",
    metaTitle:
      "Whole House Fan Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a whole house fan that won't turn on. Most often a bad capacitor or tripped breaker. Difficulty: Medium. Save $150+.",
  },
  {
    id: "attic-fan-not-working",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "attic-fan-not-working",
    problemTitle: "Attic Fan (Ventilator) Not Working",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Screwdriver (Phillips and flathead)",
      "Multimeter",
      "Flashlight",
      "Step ladder",
    ],
    partsNeeded: [
      {
        name: "Attic Fan Thermostat Replacement",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=attic+fan+thermostat+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=attic+fan+thermostat+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the circuit breaker before working on the fan or thermostat.",
      "Attics can reach 140 degrees or higher in summer — work early in the morning and stay hydrated.",
      "Walk only on joists or plywood in the attic — stepping between joists can put your foot through the ceiling.",
      "Watch for exposed nails, insulation, and low rafters in the attic.",
    ],
    quickDiagnosis:
      "Attic fans are controlled by a thermostat that turns the fan on when the attic gets hot. When the fan does not run, the thermostat is the problem more often than the motor. The thermostat is cheap and easy to test. If the fan hums but does not spin, it is a bad capacitor or seized bearings, just like any other fan motor.",
    steps: [
      {
        number: 1,
        title: "Check the thermostat setting",
        description:
          "Go into the attic and find the thermostat — it is usually a small round or square box mounted near the fan. It has a temperature dial. Turn it all the way down to its lowest setting. If the attic is hotter than that setting, the fan should kick on. If it does not, the thermostat may be faulty.",
      },
      {
        number: 2,
        title: "Test the thermostat",
        description:
          "Turn off the breaker. Disconnect the two wires from the thermostat. Touch them together briefly (this bypasses the thermostat). Turn the breaker back on. If the fan runs with the thermostat bypassed, the thermostat is bad and needs replacing. Turn the breaker off again before proceeding.",
      },
      {
        number: 3,
        title: "Check the motor",
        description:
          "With the breaker off, try spinning the fan blade by hand. It should spin freely. If it is locked up or very stiff, the motor bearings are seized. Some attic fan motors have oil ports — add a few drops of electric motor oil to each bearing and work the blade back and forth. If the motor is completely locked, it needs to be replaced.",
      },
      {
        number: 4,
        title: "Inspect wiring and connections",
        description:
          "Check the wiring from the breaker panel to the thermostat and from the thermostat to the motor. Attic heat degrades wire connections over time. Look for melted wire nuts, loose connections, or corroded terminals. Tighten or replace any suspect connections. Also check the breaker itself — a weak breaker may be tripping under load.",
      },
      {
        number: 5,
        title: "Replace the thermostat if needed",
        description:
          "Attic fan thermostats are inexpensive and universal. With the breaker off, remove the two wires from the old thermostat and connect them to the new one. Most attach with one or two screws. Set the new thermostat to turn on at about 100-110 degrees Fahrenheit. Turn the breaker back on and verify the fan runs when the attic is above the set temperature.",
      },
    ],
    alternativeCauses: [
      "Tripped circuit breaker",
      "Bad motor capacitor",
      "Burned-out fan motor",
      "Solar panel failure (on solar-powered attic fans)",
    ],
    whenToCallPro:
      "If you are uncomfortable working in a hot attic or dealing with electrical wiring, call an electrician. A thermostat replacement should cost $75–$150 including labor. A full motor replacement runs $150–$300. If the fan is more than 15 years old, replacing the entire fan unit ($50–$200 for the fan) may be more sensible.",
    metaTitle:
      "Attic Fan Not Working — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix an attic ventilator fan that won't run. Usually a bad thermostat or seized motor. Difficulty: Medium. Save $100+.",
  },
  {
    id: "window-fan-making-noise",
    category: "Home Comfort",
    categorySlug: "home-comfort",
    brand: "Various",
    brandSlug: "various",
    problemSlug: "making-noise",
    problemTitle: "Window Fan Making Noise",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [
      "Screwdriver (Phillips)",
      "Damp cloth",
      "Vacuum with brush attachment",
      "Lightweight machine oil (like 3-in-1 oil)",
    ],
    partsNeeded: [],
    safetyWarnings: [
      "Unplug the fan before doing any cleaning or maintenance.",
      "Do not stick your fingers through the grille while the fan is plugged in.",
      "Make sure the fan is securely mounted in the window before turning it on — a fan falling from a window can cause serious injury.",
    ],
    quickDiagnosis:
      "A noisy window fan is usually caused by loose mounting, dirty fan blades that are out of balance, or dry motor bearings. All of these are easy to fix with basic household tools. A clean, balanced, well-oiled fan should run quietly.",
    steps: [
      {
        number: 1,
        title: "Secure the fan in the window",
        description:
          "Many window fan noises are actually vibration from a loose fit in the window frame. Make sure the fan's extender panels are pulled out snugly against the sides of the window frame. If there is still a gap, fold up small pieces of cardboard or foam and wedge them between the fan and the window frame. The fan should sit firmly without rattling.",
      },
      {
        number: 2,
        title: "Clean the fan blades",
        description:
          "Unplug the fan. Remove the front grille if possible (most twist off or have clips). Wipe each blade with a damp cloth to remove dust buildup. Dust on the blades throws off the balance and causes a wobbling sound. Clean the grille too — dust on the grille can create a whistling noise as air passes through.",
      },
      {
        number: 3,
        title: "Check for loose parts",
        description:
          "With the grille off, gently try to wiggle each blade. They should be firmly attached to the hub. If a blade is loose, tighten the screw or nut at the center hub. Also check that the grille clips are not cracked or missing — a loose grille will buzz against the fan housing. Tighten all visible screws on the fan housing.",
      },
      {
        number: 4,
        title: "Lubricate the motor bearings",
        description:
          "Many window fan motors have small oil ports on the front and back of the motor housing. Look for small holes or caps labeled OIL. Add 2-3 drops of lightweight machine oil (3-in-1 oil works great) into each port. Spin the blade by hand a few times to work the oil into the bearings. Dry bearings create a grinding or squealing sound.",
      },
      {
        number: 5,
        title: "Test at each speed",
        description:
          "Reassemble the grille, plug the fan in, and test it at low, medium, and high speed. If the noise only happens at one speed, the speed switch may have a bad contact. If the fan clicks rhythmically, a blade may be slightly bent and hitting the grille — unplug and gently bend it back into alignment with the others.",
      },
    ],
    alternativeCauses: [
      "Bent fan blade hitting the grille or housing",
      "Worn motor bearings that need replacement",
      "Cracked blade vibrating at certain speeds",
      "Loose window sash amplifying fan vibration",
    ],
    whenToCallPro:
      "Window fans are inexpensive appliances and are not worth professional repair. If cleaning, tightening, and oiling does not quiet the fan, and the motor bearings are worn out, replacing the fan is the most practical option. A new quality window fan costs $30–$80.",
    metaTitle:
      "Window Fan Making Noise — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a noisy window fan. Usually loose mounting, dirty blades, or dry bearings. Difficulty: Easy. Takes 10-20 minutes.",
  },
];
