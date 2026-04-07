import { Guide } from "@/lib/types";
import { applianceGuides } from "./guides-appliances";
import { electronicsGuides } from "./guides-electronics";
import { phoneGuides } from "./guides-phones";
import { symptomGuides } from "./guides-symptoms";
import { miscGuides } from "./guides-misc";
import { errorCodeGuides } from "./guides-error-codes";
import { hvacGuides } from "./guides-hvac";
import { smartDeviceGuides } from "./guides-smartdevices";
import { batch001Guides } from "./guides-batch-001";
import { batch002Guides } from "./guides-batch-002";
import { batch003Guides } from "./guides-batch-003";
import { batch004Guides } from "./guides-batch-004";
import { batch005Guides } from "./guides-batch-005";
import { matrixGuides001 } from "./guides-matrix-001";
import { matrixGuides002 } from "./guides-matrix-002";
import { matrixGuides003 } from "./guides-matrix-003";
import { matrixGuides004 } from "./guides-matrix-004";
import { matrixGuides005 } from "./guides-matrix-005";
import { matrixGuides006 } from "./guides-matrix-006";
import { matrixElectronicsGuides001 } from "./guides-matrix-electronics-001";
import { matrixElectronicsGuides002 } from "./guides-matrix-electronics-002";
import { matrixElectronicsGuides003 } from "./guides-matrix-electronics-003";
import { matrixElectronicsGuides004 } from "./guides-matrix-electronics-004";
import { batch006Guides } from "./guides-batch-006";
import { batch007Guides } from "./guides-batch-007";
import { batch008Guides } from "./guides-batch-008";
import { batch009Guides } from "./guides-batch-009";

const coreGuides: Guide[] = [
  {
    id: "kenmore-washer-f5-error",
    category: "Washing Machines",
    categorySlug: "washing-machines",
    brand: "Kenmore",
    brandSlug: "kenmore",
    problemSlug: "f5-error-code",
    problemTitle: "F5 Error Code",
    difficulty: "Easy",
    timeEstimate: "20-30 minutes",
    costEstimate: "$8–$15",
    toolsNeeded: ["Phillips screwdriver", "Flathead screwdriver"],
    partsNeeded: [
      {
        name: "Door Latch Assembly",
        costRange: "$8–$15",
        amazonUrl: "https://www.amazon.com/s?k=kenmore+washer+door+latch&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=kenmore+washer+door+latch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the washing machine before starting any repair.",
      "Make sure the machine is not full of water before tipping or moving it.",
    ],
    quickDiagnosis:
      "The F5 error code on your Kenmore washer means the door latch isn't working properly. The machine thinks the door is open, so it won't start. This is usually caused by a broken door latch — a cheap and easy fix you can do yourself.",
    steps: [
      {
        number: 1,
        title: "Unplug the washer",
        description:
          "Pull the power cord out of the wall outlet. This is important for your safety — never work on a plugged-in appliance.",
      },
      {
        number: 2,
        title: "Open the door and inspect the latch",
        description:
          "Look at the door latch (the part that clicks when you close the door). Check if it's visibly broken, cracked, or if anything is stuck in it. Sometimes lint or small items block it.",
      },
      {
        number: 3,
        title: "Try cleaning the latch first",
        description:
          "Use a damp cloth to clean around the latch and the strike plate (the hole the latch goes into). Sometimes gunk buildup is the whole problem.",
      },
      {
        number: 4,
        title: "Remove the old latch if cleaning didn't work",
        description:
          "Using your Phillips screwdriver, remove the 2-3 screws holding the door latch assembly in place. Gently pull the latch out and disconnect the wire harness (the plug connecting it to the machine). Take a photo first so you remember how it connects.",
      },
      {
        number: 5,
        title: "Install the new latch",
        description:
          "Connect the wire harness to the new latch assembly. Place it in the same position and screw it back in with the same screws. Make sure it's snug but don't overtighten.",
      },
      {
        number: 6,
        title: "Test it",
        description:
          "Plug the washer back in. Close the door — you should hear a click. Try starting a short cycle. If the F5 error is gone, you're done!",
      },
    ],
    alternativeCauses: [
      "The door strike plate (the piece the latch hooks into) might be bent or damaged.",
      "The control board might have a glitch. Try unplugging the washer for 5 minutes, then plugging it back in (this resets it).",
      "The wiring between the latch and the control board could be damaged. Check for frayed or loose wires.",
    ],
    whenToCallPro:
      "If replacing the latch and checking the wiring doesn't fix it, the problem might be the main control board. Replacing a control board costs $150–$300 with parts and labor. At that price, get a quote and compare it to the cost of a new washer.",
    metaTitle:
      "Kenmore Washer F5 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Kenmore Washer F5 Error Code yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Easy. Save $150+.",
  },
  {
    id: "samsung-dryer-not-heating",
    category: "Dryers",
    categorySlug: "dryers",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "not-heating",
    problemTitle: "Not Heating",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$20–$50",
    toolsNeeded: [
      "Phillips screwdriver",
      "Multimeter (optional but helpful)",
      "Nut driver (1/4 inch)",
    ],
    partsNeeded: [
      {
        name: "Heating Element",
        costRange: "$20–$40",
        amazonUrl: "https://www.amazon.com/s?k=samsung+dryer+heating+element&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=samsung+dryer+heating+element&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermal Fuse",
        costRange: "$5–$10",
        amazonUrl: "https://www.amazon.com/s?k=samsung+dryer+thermal+fuse&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=samsung+dryer+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the dryer before working on it.",
      "If you have a gas dryer, turn off the gas supply line first. If you smell gas at any point, stop and call your gas company.",
      "The heating element area can retain heat — let the dryer cool for at least 30 minutes before working on it.",
    ],
    quickDiagnosis:
      "When a Samsung dryer runs but doesn't heat, the most common cause is a blown thermal fuse (a cheap safety part) or a burned-out heating element. Both are affordable and replaceable. The thermal fuse blows when the dryer overheats, usually from a clogged lint vent.",
    steps: [
      {
        number: 1,
        title: "Unplug the dryer and pull it away from the wall",
        description:
          "Disconnect the power cord. If it's a gas dryer, also turn off the gas valve behind the dryer. You'll need about 2 feet of space behind it to work.",
      },
      {
        number: 2,
        title: "Check the lint vent first",
        description:
          "Disconnect the vent hose from the back of the dryer. Look inside — if it's packed with lint, that's probably why your thermal fuse blew. Clean it out thoroughly. Check the vent all the way to where it exits your house.",
      },
      {
        number: 3,
        title: "Remove the back panel",
        description:
          "Using your nut driver or screwdriver, remove the screws holding the back panel on. Set them aside in a bowl so you don't lose them. Carefully remove the panel.",
      },
      {
        number: 4,
        title: "Locate the thermal fuse",
        description:
          "The thermal fuse is a small, usually white or silver piece about 1 inch long, typically mounted on the blower housing or near the heating element. It has two wires connected to it.",
      },
      {
        number: 5,
        title: "Test the thermal fuse (if you have a multimeter)",
        description:
          "Set your multimeter to continuity mode. Touch one probe to each terminal of the thermal fuse. If it beeps, the fuse is fine. If there's no beep, the fuse is blown and needs to be replaced.",
      },
      {
        number: 6,
        title: "Replace the thermal fuse or heating element",
        description:
          "If the fuse is blown: disconnect the two wires, unscrew the fuse, install the new one, reconnect wires. If the heating element is visibly damaged (broken coils), replace it the same way — disconnect wires, remove mounting screws, swap in the new one.",
      },
      {
        number: 7,
        title: "Reassemble and test",
        description:
          "Put the back panel back on. Reconnect the vent hose. Plug it back in (and turn gas back on if applicable). Run a short cycle with a damp towel to confirm it heats up.",
      },
    ],
    alternativeCauses: [
      "Clogged lint vent (clean it — this is the #1 cause of dryer problems and house fires).",
      "A faulty high-limit thermostat can prevent the dryer from heating.",
      "On gas dryers, the gas valve solenoids may need replacement.",
      "The cycling thermostat may be faulty.",
    ],
    whenToCallPro:
      "If you have a gas dryer and aren't comfortable working with gas connections, call a professional. Also call if you've replaced the fuse and element but it still doesn't heat — there may be an electrical issue with the control board ($100–$200 to repair).",
    metaTitle:
      "Samsung Dryer Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Samsung Dryer that's not heating. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $200+.",
  },
  {
    id: "bosch-dishwasher-e24-error",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Bosch",
    brandSlug: "bosch",
    problemSlug: "e24-error-code",
    problemTitle: "E24 Error Code",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: ["Towels", "Shallow pan or baking dish", "Old toothbrush"],
    partsNeeded: [
      {
        name: "Drain Hose (if damaged)",
        costRange: "$10–$15",
        amazonUrl: "https://www.amazon.com/s?k=bosch+dishwasher+drain+hose&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=bosch+dishwasher+drain+hose&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the dishwasher and unplug it (or flip the circuit breaker) before working on it.",
      "Have towels ready — there may be standing water inside.",
    ],
    quickDiagnosis:
      "The E24 error on a Bosch dishwasher means it can't drain the water. This is almost always caused by a clogged filter, a kinked drain hose, or food buildup in the drain pump. The good news: you probably don't need any parts — just a good cleaning.",
    steps: [
      {
        number: 1,
        title: "Remove standing water",
        description:
          "Open the dishwasher. If there's water at the bottom, use towels or a shallow pan to scoop it out. You need the bottom clear to access the filter.",
      },
      {
        number: 2,
        title: "Clean the filter",
        description:
          "At the bottom of the dishwasher, you'll see a round filter (it looks like a mesh cylinder). Twist it counterclockwise and pull it out. Rinse it under the sink and use an old toothbrush to scrub off food particles and grease. This fixes the problem about 70% of the time.",
      },
      {
        number: 3,
        title: "Check the drain pump area",
        description:
          "With the filter out, look down into the hole where it was. Check for any debris — broken glass, food chunks, labels from jars. Remove anything you find.",
      },
      {
        number: 4,
        title: "Check the drain hose",
        description:
          "Pull the dishwasher out slightly and look at the drain hose that goes from the dishwasher to the sink drain or garbage disposal. Make sure it's not kinked, pinched, or crushed. Straighten any kinks.",
      },
      {
        number: 5,
        title: "Check the garbage disposal connection",
        description:
          "If your dishwasher drains through a garbage disposal, make sure the disposal isn't clogged. Run the disposal with water to clear it. If you recently installed the disposal, make sure the knockout plug was removed from the dishwasher inlet.",
      },
      {
        number: 6,
        title: "Run a test cycle",
        description:
          "Put the filter back in (twist clockwise to lock). Close the door and run a short rinse cycle. If the E24 error is gone, you've fixed it!",
      },
    ],
    alternativeCauses: [
      "The drain pump itself could be faulty (rare, but possible if it makes a humming noise but water doesn't drain).",
      "The drain hose could be clogged internally. You can disconnect it and flush it with water.",
      "An air gap (a small device on your countertop near the sink) could be clogged if you have one.",
    ],
    whenToCallPro:
      "If you've cleaned everything and the error persists, the drain pump motor may be failing ($80–$150 to replace). If you're not comfortable pulling the dishwasher out to access the hose, a plumber can do this quickly.",
    metaTitle:
      "Bosch Dishwasher E24 Error Code — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your Bosch Dishwasher E24 Error Code yourself. Step-by-step guide with parts list and cost estimate. Difficulty: Easy. Save $150+.",
  },
  {
    id: "iphone-not-charging",
    category: "iPhones",
    categorySlug: "iphones",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "not-charging",
    problemTitle: "Not Charging",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0–$8",
    toolsNeeded: ["Toothpick or SIM eject tool", "Flashlight (phone flashlight works)"],
    partsNeeded: [
      {
        name: "Lightning/USB-C Cleaning Kit (optional)",
        costRange: "$5–$8",
        amazonUrl: "https://www.amazon.com/s?k=phone+port+cleaning+kit&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=phone+port+cleaning+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Be very gentle when cleaning the charging port — you don't want to damage the tiny pins inside.",
      "Never use a metal object to clean the port (use plastic or wood).",
    ],
    quickDiagnosis:
      "If your iPhone won't charge, the most common cause is lint and debris packed into the charging port. Before you spend money on anything, try cleaning the port. This fixes the problem about 80% of the time. It's not that the port is broken — it's just clogged.",
    steps: [
      {
        number: 1,
        title: "Power off your iPhone",
        description: "Hold the side button and volume button, then slide to power off. This is just a precaution.",
      },
      {
        number: 2,
        title: "Shine a light into the charging port",
        description:
          "Use a flashlight and look into the charging port at the bottom of your iPhone. You'll probably see compressed lint or pocket debris packed in there.",
      },
      {
        number: 3,
        title: "Gently clean the port",
        description:
          "Using a toothpick (wood, not metal!), gently scrape along the back wall of the port. Work the lint out. You'll be surprised how much comes out. Be patient and gentle — don't jab at it.",
      },
      {
        number: 4,
        title: "Try a different cable and charger",
        description:
          "Before assuming the phone is broken, try a different charging cable and a different power adapter. Cables wear out, especially near the connector. Borrow one from a friend if you need to.",
      },
      {
        number: 5,
        title: "Try a hard restart",
        description:
          "Quickly press and release Volume Up, then Volume Down, then hold the Side button until you see the Apple logo. This can fix software glitches that prevent charging.",
      },
      {
        number: 6,
        title: "Check for water damage",
        description:
          "If your phone got wet recently, it may show a \"Liquid Detected\" warning. Let it dry completely for 24-48 hours in a warm, dry place. Don't use rice (it doesn't help and can leave dust in the port).",
      },
    ],
    alternativeCauses: [
      "The battery may be completely dead — plug it in and wait 15 minutes before expecting it to turn on.",
      "A faulty charger block can cause intermittent charging. Try plugging into a computer USB port to test.",
      "If it charges wirelessly but not with a cable, the port is damaged and may need professional replacement ($50-80).",
    ],
    whenToCallPro:
      "If cleaning the port and trying different cables doesn't work, the charging port itself might be damaged. Apple charges $80-100 for this repair. Third-party repair shops typically charge $40-60. If your phone is older than 3 years, compare the repair cost to the price of a refurbished replacement.",
    metaTitle: "iPhone Not Charging — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your iPhone that's not charging. Step-by-step guide with parts list and cost estimate. Difficulty: Easy. Save $80+.",
  },
  {
    id: "lg-refrigerator-not-cooling",
    category: "Refrigerators",
    categorySlug: "refrigerators",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "not-cooling",
    problemTitle: "Not Cooling",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: ["Vacuum cleaner with hose attachment", "Coil brush ($8)", "Thermometer"],
    partsNeeded: [
      {
        name: "Condenser Fan Motor (if faulty)",
        costRange: "$20–$30",
        amazonUrl: "https://www.amazon.com/s?k=lg+refrigerator+condenser+fan+motor&tag=repairitfree-20",
        ebayUrl: "https://www.ebay.com/sch/i.html?_nkw=lg+refrigerator+condenser+fan+motor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the refrigerator before accessing the back panel.",
      "Move food to a cooler with ice to prevent spoilage while you work.",
    ],
    quickDiagnosis:
      "When an LG refrigerator stops cooling, the most common cause is dirty condenser coils. These coils release heat, and when they're coated in dust and pet hair, the fridge can't cool properly. A good cleaning fixes this about 60% of the time — and it's completely free.",
    steps: [
      {
        number: 1,
        title: "Check the basics first",
        description:
          "Make sure the temperature is set correctly (37°F for fridge, 0°F for freezer). Check that the vents inside aren't blocked by food. Make sure the door seals are clean and closing properly.",
      },
      {
        number: 2,
        title: "Listen to the fridge",
        description:
          "Stand next to the fridge and listen. If you hear the compressor running (a low humming from the back/bottom), the motor is working. If it's silent, the compressor may have failed (that's a professional job).",
      },
      {
        number: 3,
        title: "Clean the condenser coils",
        description:
          "Unplug the fridge. The coils are usually at the bottom behind a kick plate, or on the back. Remove the kick plate (it usually just snaps off). Use a coil brush and vacuum to remove all the dust and debris from the coils. This is the single most important maintenance you can do.",
      },
      {
        number: 4,
        title: "Check the condenser fan",
        description:
          "While you're down there, check if the condenser fan (next to the coils) spins freely. Try spinning it by hand. If it's stuck or making grinding noises, it needs to be replaced. If it doesn't run when the fridge is plugged in but the compressor runs, replace the fan motor.",
      },
      {
        number: 5,
        title: "Check the evaporator fan (inside the freezer)",
        description:
          "Open the freezer and listen for the fan. If it's not running, the freezer will still get cold (from the coils) but the fridge won't (because the fan blows cold air from the freezer to the fridge). A bad evaporator fan motor costs about $20-40.",
      },
      {
        number: 6,
        title: "Wait and monitor",
        description:
          "After cleaning the coils, plug the fridge back in and wait 24 hours. Put a thermometer inside to track the temperature. It should reach 37°F or lower. If it does, you've fixed it!",
      },
    ],
    alternativeCauses: [
      "Frost buildup on the evaporator coils (inside the freezer behind the back panel) blocks airflow. This means the defrost system has failed.",
      "A faulty thermostat may not be telling the compressor to run.",
      "The start relay on the compressor could be failing — you'll hear clicking sounds.",
    ],
    whenToCallPro:
      "If the compressor isn't running at all, or if the evaporator coils are iced over (defrost system failure), these are more complex repairs. Compressor replacement costs $300-600 — at that price, compare with a new fridge. Defrost system repair is $150-250.",
    metaTitle:
      "LG Refrigerator Not Cooling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Learn how to fix your LG Refrigerator that's not cooling. Step-by-step guide with parts list and cost estimate. Difficulty: Medium. Save $200+.",
  },
];

export const guides: Guide[] = [
  ...coreGuides,
  ...applianceGuides,
  ...electronicsGuides,
  ...phoneGuides,
  ...symptomGuides,
  ...miscGuides,
  ...errorCodeGuides,
  ...hvacGuides,
  ...smartDeviceGuides,
  ...batch001Guides,
  ...batch002Guides,
  ...batch003Guides,
  ...batch004Guides,
  ...batch005Guides,
  ...batch006Guides,
  ...batch007Guides,
  ...batch008Guides,
  ...batch009Guides,
  ...matrixGuides001,
  ...matrixGuides002,
  ...matrixGuides003,
  ...matrixGuides004,
  ...matrixGuides005,
  ...matrixGuides006,
  ...matrixElectronicsGuides001,
  ...matrixElectronicsGuides002,
  ...matrixElectronicsGuides003,
  ...matrixElectronicsGuides004,
];

export function getGuide(
  categorySlug: string,
  brandSlug: string,
  problemSlug: string
): Guide | undefined {
  return guides.find(
    (g) =>
      g.categorySlug === categorySlug &&
      g.brandSlug === brandSlug &&
      g.problemSlug === problemSlug
  );
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return guides.filter((g) => g.categorySlug === categorySlug);
}

export function getGuidesByBrand(
  categorySlug: string,
  brandSlug: string
): Guide[] {
  return guides.filter(
    (g) => g.categorySlug === categorySlug && g.brandSlug === brandSlug
  );
}

export function getBrandsForCategory(
  categorySlug: string
): { name: string; slug: string }[] {
  const brandMap = new Map<string, string>();
  guides
    .filter((g) => g.categorySlug === categorySlug)
    .forEach((g) => brandMap.set(g.brandSlug, g.brand));
  return Array.from(brandMap.entries()).map(([slug, name]) => ({
    slug,
    name,
  }));
}
