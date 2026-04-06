#!/usr/bin/env node

/**
 * generate-matrix.js
 *
 * Generates repair guide pages for every brand x device x symptom combination.
 * Output: src/data/guides-matrix-NNN.ts files (100 guides per file)
 */

const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// AFFILIATE TAGS
// ---------------------------------------------------------------------------
const AMAZON_TAG = "repairitfree-20";
const EBAY_PARAMS =
  "mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1";

// ---------------------------------------------------------------------------
// MATRIX DATA
// ---------------------------------------------------------------------------

const DEVICES = [
  {
    category: "Washing Machines",
    categorySlug: "washing-machines",
    shortName: "washer",
    brands: [
      "Samsung", "LG", "Whirlpool", "GE", "Maytag",
      "Kenmore", "Bosch", "Electrolux", "Amana", "Speed Queen",
    ],
    symptoms: [
      "won't start",
      "won't drain",
      "won't spin",
      "leaking",
      "shaking violently",
      "won't fill with water",
      "door won't open",
      "smells bad",
      "making loud noise",
      "leaving clothes wet",
    ],
  },
  {
    category: "Dryers",
    categorySlug: "dryers",
    shortName: "dryer",
    brands: [
      "Samsung", "LG", "Whirlpool", "GE", "Maytag",
      "Kenmore", "Bosch", "Electrolux", "Amana", "Speed Queen",
    ],
    symptoms: [
      "not heating",
      "won't start",
      "squeaking",
      "not drying clothes",
      "takes too long",
      "shuts off early",
      "won't tumble",
      "burning smell",
      "making grinding noise",
      "lint trap clogged",
    ],
  },
  {
    category: "Dishwashers",
    categorySlug: "dishwashers",
    shortName: "dishwasher",
    brands: [
      "Samsung", "LG", "Whirlpool", "GE", "Bosch",
      "KitchenAid", "Maytag", "Frigidaire", "Kenmore", "Miele",
    ],
    symptoms: [
      "not draining",
      "not cleaning dishes",
      "leaking",
      "won't start",
      "not drying dishes",
      "making noise",
      "door won't latch",
      "water not hot enough",
      "soap dispenser not opening",
      "leaving white residue",
    ],
  },
  {
    category: "Refrigerators",
    categorySlug: "refrigerators",
    shortName: "refrigerator",
    brands: [
      "Samsung", "LG", "Whirlpool", "GE", "Frigidaire",
      "KitchenAid", "Maytag", "Kenmore", "Bosch", "Sub-Zero",
    ],
    symptoms: [
      "not cooling",
      "making noise",
      "leaking water",
      "ice maker not working",
      "freezer works but fridge warm",
      "runs constantly",
      "too cold",
      "light not working",
      "water dispenser not working",
      "frost buildup",
    ],
  },
  {
    category: "Microwaves",
    categorySlug: "microwaves",
    shortName: "microwave",
    brands: [
      "Samsung", "LG", "Whirlpool", "GE", "Panasonic",
      "Sharp", "Frigidaire", "KitchenAid", "Kenmore", "Toshiba",
    ],
    symptoms: [
      "not heating",
      "turntable not spinning",
      "sparking",
      "buttons not working",
      "runs but doesn't heat",
      "making buzzing noise",
      "door won't open",
      "display not working",
      "light not working",
      "plate broken",
    ],
  },
  {
    category: "Ovens & Ranges",
    categorySlug: "ovens-ranges",
    shortName: "oven",
    brands: [
      "Samsung", "LG", "Whirlpool", "GE", "Frigidaire",
      "KitchenAid", "Maytag", "Bosch", "Kenmore", "Viking",
    ],
    symptoms: [
      "not heating",
      "uneven heating",
      "won't turn on",
      "self-clean not working",
      "burner won't light",
      "temperature inaccurate",
      "door won't open",
      "broiler not working",
      "igniter clicking",
      "oven smoking",
    ],
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function titleCase(str) {
  return str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function amazonUrl(brand, device, part) {
  const q = encodeURIComponent(`${brand} ${device} ${part}`).replace(/%20/g, "+");
  return `https://www.amazon.com/s?k=${q}&tag=${AMAZON_TAG}`;
}

function ebayUrl(brand, device, part) {
  const q = encodeURIComponent(`${brand} ${device} ${part}`).replace(/%20/g, "+");
  return `https://www.ebay.com/sch/i.html?_nkw=${q}&${EBAY_PARAMS}`;
}

// ---------------------------------------------------------------------------
// SYMPTOM CATEGORY CLASSIFIER
// ---------------------------------------------------------------------------

function symptomCategory(symptom) {
  const s = symptom.toLowerCase();
  if (s.includes("not heating") || s.includes("doesn't heat") || s.includes("not drying")) return "heating";
  if (s.includes("won't start") || s.includes("won't turn on")) return "wont-start";
  if (s.includes("leaking") || s.includes("leaking water")) return "leaking";
  if (s.includes("noise") || s.includes("squeaking") || s.includes("grinding") || s.includes("buzzing")) return "noise";
  if (s.includes("won't drain") || s.includes("not draining")) return "drain";
  if (s.includes("won't spin") || s.includes("won't tumble")) return "spin";
  if (s.includes("shaking") || s.includes("vibrat")) return "vibration";
  if (s.includes("won't fill")) return "fill";
  if (s.includes("door won't")) return "door";
  if (s.includes("smell")) return "smell";
  if (s.includes("clothes wet") || s.includes("not cleaning") || s.includes("takes too long")) return "performance";
  if (s.includes("shuts off")) return "shuts-off";
  if (s.includes("burning")) return "burning";
  if (s.includes("lint trap")) return "lint";
  if (s.includes("latch")) return "latch";
  if (s.includes("hot enough")) return "temperature";
  if (s.includes("soap dispenser")) return "dispenser";
  if (s.includes("white residue")) return "residue";
  if (s.includes("ice maker")) return "ice-maker";
  if (s.includes("freezer works")) return "fridge-warm";
  if (s.includes("runs constantly")) return "runs-constantly";
  if (s.includes("too cold")) return "too-cold";
  if (s.includes("light not")) return "light";
  if (s.includes("water dispenser")) return "water-dispenser";
  if (s.includes("frost")) return "frost";
  if (s.includes("sparking")) return "sparking";
  if (s.includes("buttons")) return "buttons";
  if (s.includes("display")) return "display";
  if (s.includes("turntable")) return "turntable";
  if (s.includes("plate broken")) return "plate";
  if (s.includes("uneven")) return "uneven-heating";
  if (s.includes("self-clean")) return "self-clean";
  if (s.includes("burner")) return "burner";
  if (s.includes("temperature inaccurate")) return "temp-inaccurate";
  if (s.includes("broiler")) return "broiler";
  if (s.includes("igniter clicking")) return "igniter";
  if (s.includes("smoking")) return "smoking";
  if (s.includes("not cooling")) return "not-cooling";
  return "general";
}

// ---------------------------------------------------------------------------
// SAFETY WARNINGS
// ---------------------------------------------------------------------------

function safetyWarnings(categorySlug, symptom) {
  const base = ["Always unplug the appliance from the wall before starting any repair work."];
  const water = "Have towels ready and be prepared for water spills. Keep the floor dry to avoid slipping.";
  const gas = "If you have a gas model, turn off the gas supply valve before working. If you smell gas at any point, stop immediately, leave the area, and call your gas company.";
  const electrical = "Do not touch any internal wiring while the appliance is plugged in. If you are not comfortable with electrical components, call a professional.";
  const microwave = "Microwaves contain a high-voltage capacitor that can hold a lethal charge even when unplugged. Do not open the microwave cabinet unless you are experienced with appliance repair. The steps below focus on safe, external fixes.";
  const hot = "Let the appliance cool completely before touching internal components. Heating elements and surrounding metal can cause burns.";

  if (categorySlug === "washing-machines") return [...base, water];
  if (categorySlug === "dryers") {
    const warnings = [...base, hot];
    if (symptom.includes("burning")) warnings.push("If you smell burning while the dryer is running, turn it off immediately and unplug it. Check for lint buildup, which is a fire hazard.");
    warnings.push(gas);
    return warnings;
  }
  if (categorySlug === "dishwashers") return [...base, water, electrical];
  if (categorySlug === "refrigerators") return [...base, "Move perishable food to a cooler with ice while you work to prevent spoilage.", electrical];
  if (categorySlug === "microwaves") return [...base, microwave];
  if (categorySlug === "ovens-ranges") return [...base, gas, hot];
  return base;
}

// ---------------------------------------------------------------------------
// STEP TEMPLATES — broken out by symptom category
// ---------------------------------------------------------------------------

function stepsForHeating(brand, shortName, categorySlug) {
  const isGasDevice = categorySlug === "ovens-ranges" || categorySlug === "dryers";
  const steps = [
    {
      number: 1,
      title: `Unplug your ${brand} ${shortName}`,
      description: `Pull the power cord from the wall outlet. ${isGasDevice ? "If you have a gas model, also turn off the gas supply valve behind the unit." : ""} Safety first — never work on a plugged-in appliance.`,
    },
    {
      number: 2,
      title: "Check the power supply",
      description: `Make sure the outlet is working by plugging in something else (like a lamp). Check your home's circuit breaker panel — the breaker for your ${shortName} may have tripped. Flip it off, then back on.`,
    },
    {
      number: 3,
      title: "Inspect the heating element",
      description: `The heating element is the part that actually creates heat. On most ${brand} ${shortName}s, you can access it by removing the back or bottom panel. Look for visible breaks, burn marks, or blistering on the element coil. A broken coil means the element needs replacing.`,
    },
    {
      number: 4,
      title: "Test the thermal fuse",
      description: `The thermal fuse is a safety device that shuts off heat if the ${shortName} overheats. It is a small, flat piece usually near the heating element. If you have a multimeter, test it for continuity. No continuity means the fuse is blown and needs to be replaced (usually under $10).`,
    },
    {
      number: 5,
      title: "Reassemble and test",
      description: `Put the panels back on, plug the ${shortName} back in${isGasDevice ? " (and turn the gas back on if applicable)" : ""}, and run a short cycle to see if it heats. If it does, you have fixed it! If not, the control board or thermostat may be the issue — that is a good time to call a pro.`,
    },
  ];
  return steps;
}

function stepsForWontStart(brand, shortName, categorySlug) {
  return [
    {
      number: 1,
      title: "Check the power supply",
      description: `Confirm your ${brand} ${shortName} is properly plugged in. Try a different outlet or plug in a lamp to make sure the outlet works. Check your circuit breaker panel — flip the ${shortName}'s breaker off and back on.`,
    },
    {
      number: 2,
      title: "Inspect the door latch or switch",
      description: `Most ${shortName}s will not start if the door is not fully closed and latched. Open and close the door firmly. Look for anything blocking the latch. Listen for a click when the door closes — no click usually means the latch is worn out.`,
    },
    {
      number: 3,
      title: "Try a hard reset",
      description: `Unplug your ${brand} ${shortName} from the wall. Wait 60 seconds. Plug it back in. This resets the control board and clears temporary errors. Try starting it again.`,
    },
    {
      number: 4,
      title: "Check the control panel",
      description: `Make sure the ${shortName} is not in a lock mode (like child lock). On most ${brand} models, you can disable child lock by holding the lock button for 3-5 seconds. Also check if any error codes are showing on the display.`,
    },
    {
      number: 5,
      title: "Inspect the start switch",
      description: `If none of the above worked, the start switch or control board may be faulty. The start switch is the physical button mechanism — if it feels loose or does not click, it may need replacing. This is an inexpensive part (usually $10-$25) for most ${brand} ${shortName}s.`,
    },
  ];
}

function stepsForLeaking(brand, shortName, categorySlug) {
  const isWasherOrDishwasher = ["washing-machines", "dishwashers"].includes(categorySlug);
  return [
    {
      number: 1,
      title: `Unplug your ${brand} ${shortName} and locate the leak`,
      description: `Pull the power cord from the wall. Place towels around the base. Figure out where the water is coming from — front, back, or underneath. This tells you which part to inspect.`,
    },
    {
      number: 2,
      title: "Check the door seal or gasket",
      description: `${isWasherOrDishwasher ? `Run your hand along the rubber door gasket. Feel for tears, cracks, or hardened sections. Also check for debris stuck in the seal — small objects can prevent a tight seal and cause leaks. Clean the gasket with a damp cloth and mild soap.` : `Check the rubber seals and gaskets around any access panels. Look for cracks, tears, or worn areas.`}`,
    },
    {
      number: 3,
      title: "Inspect the water hoses",
      description: `Pull the ${shortName} out from the wall. Check the water supply hoses and the drain hose. Look for cracks, bulges, or loose connections. Tighten any loose fittings by hand. If a hose is cracked or brittle, replace it — ${brand} ${shortName} hoses are inexpensive (usually $10-$20).`,
    },
    {
      number: 4,
      title: "Check the pump and internal connections",
      description: `If the leak is coming from underneath, the water pump or an internal hose clamp may be loose or failing. You can usually access these by removing the bottom panel or tilting the ${shortName} back carefully. Look for drip marks or mineral buildup — that shows you where water has been leaking.`,
    },
    {
      number: 5,
      title: "Test your fix",
      description: `Reconnect everything and plug the ${shortName} back in. Run a short cycle while watching for leaks. Keep towels down just in case. If the leak has stopped, great — you have fixed it!`,
    },
  ];
}

function stepsForNoise(brand, shortName) {
  return [
    {
      number: 1,
      title: "Identify the type of noise",
      description: `Listen carefully to your ${brand} ${shortName}. Is the noise a squealing, grinding, rattling, or humming? Each type points to a different cause. A squeal usually means a belt or bearing. Grinding means something is rubbing. Rattling means something is loose.`,
    },
    {
      number: 2,
      title: "Check for loose items",
      description: `Unplug the ${shortName}. Check inside and around the unit for any loose items — coins, screws, utensils, or debris can cause rattling or banging noises. Remove anything you find.`,
    },
    {
      number: 3,
      title: "Level the appliance",
      description: `An unlevel ${shortName} can vibrate and make a lot of noise. Place a level on top of the unit. Adjust the leveling legs at the bottom by turning them clockwise to raise or counterclockwise to lower. All four feet should be touching the floor firmly.`,
    },
    {
      number: 4,
      title: "Inspect the motor and bearings",
      description: `If you hear a grinding or squealing that gets worse over time, the motor bearings or drum bearings may be wearing out. On your ${brand} ${shortName}, you can usually access these by removing the back or front panel. Worn bearings feel rough when you try to spin the drum by hand.`,
    },
    {
      number: 5,
      title: "Test after inspection",
      description: `Put the panels back on and plug the ${shortName} in. Run a short cycle and listen. If the noise is gone or reduced, you have found and fixed the issue. If it continues, the motor or bearings may need professional replacement.`,
    },
  ];
}

function stepsForDrain(brand, shortName) {
  return [
    {
      number: 1,
      title: `Unplug your ${brand} ${shortName}`,
      description: `Pull the power cord from the wall. Have towels and a shallow pan ready — you will likely encounter standing water when you access the drain components.`,
    },
    {
      number: 2,
      title: "Clean the drain filter",
      description: `Most ${brand} ${shortName}s have a drain filter behind a small access panel at the bottom front. Open the panel and slowly turn the filter cap counterclockwise. Water will come out — use your pan to catch it. Pull the filter out and remove any debris (lint, coins, food particles, hair ties).`,
    },
    {
      number: 3,
      title: "Check the drain hose",
      description: `Pull the ${shortName} away from the wall and check the drain hose. Make sure it is not kinked, pinched, or clogged. Disconnect it and look inside — you can flush it with water in the sink if needed.`,
    },
    {
      number: 4,
      title: "Inspect the drain pump",
      description: `With the filter out, look into the filter housing. Try to spin the pump impeller (the small fan-like piece) with your finger. It should spin freely. If it is stuck or broken, the drain pump needs to be replaced — a common part for ${brand} ${shortName}s costs about $15-$30.`,
    },
    {
      number: 5,
      title: "Reassemble and test",
      description: `Put the filter back in (turn clockwise until snug) and reconnect the drain hose. Plug the ${shortName} in and run a short cycle. The water should drain normally. If it still won't drain, the drain pump motor may be burned out and need replacing.`,
    },
  ];
}

function stepsForSpin(brand, shortName) {
  return [
    {
      number: 1,
      title: "Check the load balance",
      description: `Open your ${brand} ${shortName} and rearrange the items inside. An unbalanced load is the number one reason a ${shortName} won't spin. Spread clothes evenly around the drum. Avoid washing one heavy item alone — add a few towels to balance it out.`,
    },
    {
      number: 2,
      title: "Inspect the lid or door switch",
      description: `Your ${brand} ${shortName} has a safety switch that stops the drum from spinning if the door or lid is not properly closed. Close the door firmly and listen for a click. If the switch is broken, the ${shortName} will fill and wash but not spin. A replacement switch is usually $5-$15.`,
    },
    {
      number: 3,
      title: "Check the drive belt",
      description: `Unplug the ${shortName} and remove the back panel. Look at the drive belt that connects the motor to the drum. If it is loose, cracked, or has fallen off, the drum won't spin. A new belt for your ${brand} ${shortName} costs about $5-$15 and is easy to install.`,
    },
    {
      number: 4,
      title: "Test the motor coupling",
      description: `If the belt looks fine (or your model does not use a belt), the motor coupling may be worn. This plastic piece connects the motor to the transmission. When it breaks, the motor runs but the drum does not spin. Access it by removing the cabinet. A replacement coupling costs about $10-$20.`,
    },
    {
      number: 5,
      title: "Reassemble and test",
      description: `Put everything back together, plug the ${shortName} in, and run a spin cycle. If the drum spins normally, you are all set. If it still won't spin, the motor itself or the transmission may need professional attention.`,
    },
  ];
}

function stepsForVibration(brand, shortName) {
  return [
    {
      number: 1,
      title: "Level your machine",
      description: `Place a bubble level on top of your ${brand} ${shortName}. Adjust the front leveling legs by turning them — clockwise to raise, counterclockwise to lower. The ${shortName} must sit flat and firm on all four feet. This is the most common fix for shaking.`,
    },
    {
      number: 2,
      title: "Check for shipping bolts",
      description: `If your ${brand} ${shortName} is new or recently moved, check the back for shipping bolts or transit brackets. These metal bolts lock the drum during shipping and must be removed before use. Check your owner's manual for their location.`,
    },
    {
      number: 3,
      title: "Redistribute the load",
      description: `Open the door and spread the clothes more evenly in the drum. Heavy items like towels and jeans should be balanced with lighter items. Never overload the ${shortName} — leave about a hand's width of space at the top of the drum.`,
    },
    {
      number: 4,
      title: "Inspect the shock absorbers or suspension springs",
      description: `Unplug the ${shortName}. These parts dampen the movement of the drum during the spin cycle. You can access them from the bottom or back of most ${brand} models. If a shock absorber is leaking oil or a spring is broken, replace it. They usually cost $10-$25 each.`,
    },
    {
      number: 5,
      title: "Test on a spin cycle",
      description: `Plug the ${shortName} back in and run a spin-only cycle with a balanced load. The shaking should be significantly reduced. Some vibration during spin is normal, but the machine should not walk across the floor.`,
    },
  ];
}

function stepsForFill(brand, shortName) {
  return [
    {
      number: 1,
      title: "Check the water supply",
      description: `Make sure the water supply valves behind your ${brand} ${shortName} are fully open. Turn them counterclockwise to open. Sometimes they get bumped partially closed.`,
    },
    {
      number: 2,
      title: "Inspect the inlet hoses",
      description: `Check the hot and cold water hoses for kinks. Straighten any kinks you find. Also check that the hose screens (small mesh filters where the hoses connect to the ${shortName}) are not clogged with sediment. Unscrew the hoses and clean the screens with an old toothbrush.`,
    },
    {
      number: 3,
      title: "Test the water inlet valve",
      description: `The water inlet valve controls water flow into your ${brand} ${shortName}. If it is clogged or failed, no water gets in. You can usually hear it click when the cycle starts. If there is no click and the valve is getting power, it needs replacing (about $15-$30).`,
    },
    {
      number: 4,
      title: "Check the water level sensor",
      description: `The pressure switch or water level sensor tells the ${shortName} when enough water is in the tub. If it is faulty, the machine may think it is already full. The sensor is usually near the top of the machine, connected to a small air tube. Make sure the tube is not kinked or disconnected.`,
    },
    {
      number: 5,
      title: "Test your fix",
      description: `Reconnect the hoses, turn the water back on, and start a wash cycle. The ${shortName} should fill normally. If it still won't fill, the control board may be the issue — that is a job for a repair tech.`,
    },
  ];
}

function stepsForDoor(brand, shortName, categorySlug) {
  return [
    {
      number: 1,
      title: "Wait and try again",
      description: `Many ${brand} ${shortName}s have a safety delay on the door lock. Wait 2-3 minutes after the cycle ends before trying to open the door. If the ${shortName} is mid-cycle, it will not unlock until the cycle finishes or is canceled.`,
    },
    {
      number: 2,
      title: "Try a power reset",
      description: `Unplug the ${shortName} from the wall for 5 minutes. This resets the electronic door lock on most ${brand} models. Plug it back in and try opening the door. Many stuck-door situations are just a glitch in the lock mechanism.`,
    },
    {
      number: 3,
      title: "Use the emergency release",
      description: `Most ${brand} ${shortName}s have a manual door release. ${categorySlug === "washing-machines" ? "On front-loaders, there is usually a small pull tab or cord inside the bottom access panel or behind the toe panel. Pulling it releases the door lock manually." : "Check your owner's manual for the manual release location — it is usually behind the front panel or inside the door frame."}`,
    },
    {
      number: 4,
      title: "Inspect the door latch mechanism",
      description: `With the door open, look at the latch and strike plate. Check for broken plastic, bent metal, or debris blocking the mechanism. A worn latch assembly for your ${brand} ${shortName} costs about $15-$30 and can be replaced with a screwdriver.`,
    },
    {
      number: 5,
      title: "Replace the door lock if needed",
      description: `If the door lock motor or solenoid has failed, you will need to replace the door lock assembly. Unplug the ${shortName}, remove the screws holding the lock in place, disconnect the wire harness, and install the new lock. Plug it back in and test.`,
    },
  ];
}

function stepsForSmell(brand, shortName) {
  return [
    {
      number: 1,
      title: "Run a cleaning cycle",
      description: `Run your ${brand} ${shortName} on the hottest setting with no clothes inside. Add 2 cups of white vinegar or a washing machine cleaning tablet. This kills mold and bacteria that cause the smell.`,
    },
    {
      number: 2,
      title: "Clean the door seal",
      description: `Pull back the rubber gasket around the door and wipe the inside with a mix of equal parts water and white vinegar. You will probably find black mold or mildew in the folds. Use an old toothbrush to scrub stubborn spots. This is the main source of bad smells.`,
    },
    {
      number: 3,
      title: "Clean the detergent dispenser",
      description: `Remove the detergent drawer from your ${brand} ${shortName} and soak it in hot water with vinegar. Scrub away any soap buildup or mold. Also clean inside the dispenser housing with a bottle brush.`,
    },
    {
      number: 4,
      title: "Clean the drain filter",
      description: `The drain filter catches debris and can harbor bacteria. Open the access panel at the bottom front, place towels down, and slowly remove the filter. Clean it under running water and scrub off any slime or buildup.`,
    },
    {
      number: 5,
      title: "Prevent future smells",
      description: `After every wash, leave the door open for a few hours to let the drum dry out. Use HE (high-efficiency) detergent and don't use too much — excess soap creates residue that mold feeds on. Run a cleaning cycle once a month.`,
    },
  ];
}

function stepsForPerformance(brand, shortName, categorySlug) {
  if (categorySlug === "dishwashers") {
    return [
      {
        number: 1,
        title: "Clean the spray arms",
        description: `Remove the spray arms from your ${brand} dishwasher. Look for clogged holes — food particles and mineral deposits block the water jets. Use a toothpick to poke through each hole and rinse under running water.`,
      },
      {
        number: 2,
        title: "Clean the filter",
        description: `At the bottom of your ${brand} dishwasher, twist and remove the cylindrical filter. Rinse it under hot water and scrub with a brush. A dirty filter is the number one cause of dishes not coming out clean.`,
      },
      {
        number: 3,
        title: "Check the water temperature",
        description: `Run the hot water at your kitchen sink until it is hot before starting the dishwasher. The water should be at least 120°F. If your water heater is set too low, the dishwasher won't clean effectively.`,
      },
      {
        number: 4,
        title: "Load dishes properly",
        description: `Make sure dishes are not blocking the spray arms. Plates should face the center and not overlap. Bowls should face downward. Don't overcrowd — water needs to reach every surface.`,
      },
      {
        number: 5,
        title: "Use the right detergent",
        description: `Use fresh dishwasher detergent (pods or powder — liquid is less effective). Old detergent loses its cleaning power. Also make sure your rinse aid dispenser is filled — it helps water sheet off dishes so they dry spot-free.`,
      },
    ];
  }
  // Default performance steps for washers/dryers
  return [
    {
      number: 1,
      title: "Don't overload the machine",
      description: `Your ${brand} ${shortName} needs room to move items around. Fill it about three-quarters full. Overloading means clothes don't agitate or tumble properly, so they come out still dirty or wet.`,
    },
    {
      number: 2,
      title: "Check the settings",
      description: `Make sure you are using the right cycle for your load. Heavy items need a longer, more intense cycle. Delicates need a gentler one. Also check the spin speed — a higher spin extracts more water.`,
    },
    {
      number: 3,
      title: "Clean the machine",
      description: `Run an empty cleaning cycle with hot water and 2 cups of white vinegar. Built-up residue reduces your ${brand} ${shortName}'s performance over time. Do this once a month.`,
    },
    {
      number: 4,
      title: "Inspect the drain or vent",
      description: `${categorySlug === "dryers" ? "Check the lint trap and vent hose. A clogged vent dramatically increases drying time. Disconnect the vent from the back and check for lint buildup." : "Check the drain filter and drain hose for clogs. A partially blocked drain means water does not fully exit, leaving clothes wetter than they should be."}`,
    },
    {
      number: 5,
      title: "Test with a small load",
      description: `Run a small test load to see if performance has improved. If your ${brand} ${shortName} is still underperforming, the motor, belt, or heating element may be wearing out and need professional inspection.`,
    },
  ];
}

function stepsForShutsOff(brand, shortName) {
  return [
    {
      number: 1,
      title: "Clean the lint system",
      description: `The most common reason a ${brand} ${shortName} shuts off early is overheating from lint buildup. Clean the lint trap thoroughly. Then pull the ${shortName} away from the wall and disconnect the vent hose. Clean out all lint from the hose and the vent exit on the outside of your house.`,
    },
    {
      number: 2,
      title: "Check the moisture sensor",
      description: `Your ${brand} ${shortName} has moisture sensor bars inside the drum (usually two thin metal strips near the lint trap opening). If they are coated with dryer sheet residue, the ${shortName} thinks clothes are dry when they are not. Clean them with rubbing alcohol and a soft cloth.`,
    },
    {
      number: 3,
      title: "Test the thermal fuse",
      description: `Unplug the ${shortName} and remove the back panel. The thermal fuse is near the blower or heating element. If it is partially failing, the ${shortName} may run for a while then shut off. Use a multimeter to test it. A replacement costs about $5-$10.`,
    },
    {
      number: 4,
      title: "Check the cycling thermostat",
      description: `The cycling thermostat regulates temperature during the dry cycle. If it malfunctions, the ${shortName} may shut off prematurely thinking it has overheated. It is located near the blower housing on most ${brand} models.`,
    },
    {
      number: 5,
      title: "Reassemble and test",
      description: `Put the panels back on, reconnect the vent, and plug the ${shortName} in. Run a timed dry cycle (not auto-dry) to see if it completes the full cycle. If it still shuts off, the control board may need replacing.`,
    },
  ];
}

function stepsForBurning(brand, shortName) {
  return [
    {
      number: 1,
      title: "Stop the machine immediately",
      description: `If your ${brand} ${shortName} has a burning smell, turn it off and unplug it right away. A burning smell can mean lint buildup near the heating element, which is a fire hazard. Do not use the ${shortName} again until you find and fix the cause.`,
    },
    {
      number: 2,
      title: "Clean the lint trap and interior",
      description: `Remove the lint trap and vacuum any lint from the lint trap housing. Lint that gets past the filter can accumulate around the heating element and start smoldering. Use a long, flexible lint brush to reach deep into the lint trap slot.`,
    },
    {
      number: 3,
      title: "Clean the exhaust vent",
      description: `Disconnect the vent hose from the back of your ${brand} ${shortName}. Check inside — if it is packed with lint, that is your problem. Clean the entire vent path from the ${shortName} to the outside wall exit. Lint buildup in the vent is the leading cause of dryer fires.`,
    },
    {
      number: 4,
      title: "Inspect the drum rollers and belt",
      description: `Remove the front or top panel. Check the drum support rollers — worn rollers can create friction and a burning rubber smell. Also check the drive belt for fraying, cracking, or glazing. A worn belt slipping on the motor pulley smells like burning rubber.`,
    },
    {
      number: 5,
      title: "Test carefully",
      description: `After cleaning and inspecting, reassemble the ${shortName} and run a short cycle with a damp towel. Stay nearby and monitor for any smell. If the burning smell returns, stop immediately and call a professional — continuing to use it is a fire risk.`,
    },
  ];
}

function stepsForLint(brand, shortName) {
  return [
    {
      number: 1,
      title: "Remove and clean the lint trap",
      description: `Pull the lint screen out of your ${brand} ${shortName}. Peel off all visible lint. Then wash the screen with warm soapy water and a soft brush — dryer sheets leave an invisible film that reduces airflow. Let it dry completely before reinstalling.`,
    },
    {
      number: 2,
      title: "Clean the lint trap housing",
      description: `Use a long, narrow lint brush or vacuum attachment to clean inside the slot where the lint trap sits. Lint builds up in this area over time and can restrict airflow even when the trap looks clean.`,
    },
    {
      number: 3,
      title: "Check the exhaust vent",
      description: `Disconnect the vent hose from the back of the ${shortName}. Look inside — heavy lint buildup here drastically reduces drying performance and is a fire hazard. Clean it with a vent cleaning brush kit (available for about $10-$20).`,
    },
    {
      number: 4,
      title: "Clean the outside vent flap",
      description: `Go outside and find where the dryer vent exits your house. Make sure the flap opens and closes freely. Remove any lint, bird nests, or debris blocking it. The flap should open when the dryer runs and close when it stops.`,
    },
    {
      number: 5,
      title: "Set a cleaning schedule",
      description: `Clean the lint trap after every load. Deep clean the trap with soap and water monthly. Clean the vent hose and outside vent at least once a year. This keeps your ${brand} ${shortName} running efficiently and prevents house fires.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// Additional device-specific templates
// ---------------------------------------------------------------------------

function stepsForIceMaker(brand) {
  return [
    {
      number: 1,
      title: "Check if the ice maker is turned on",
      description: `This sounds obvious, but it is the most common issue. On your ${brand} refrigerator, look for a small switch or lever on the ice maker unit, or check the control panel. Make sure it is set to "on."`,
    },
    {
      number: 2,
      title: "Check the water supply line",
      description: `Pull the fridge away from the wall and look at the water supply line (a thin copper or plastic tube). Make sure the shut-off valve is open and the line is not kinked. A kinked line stops water from reaching the ice maker.`,
    },
    {
      number: 3,
      title: "Inspect the water inlet valve",
      description: `The water inlet valve fills the ice maker tray. If it is clogged with mineral deposits or has failed, no water gets to the ice maker. You can hear it buzz briefly when the ice maker calls for water. No buzz means the valve or its wiring may be faulty.`,
    },
    {
      number: 4,
      title: "Check the freezer temperature",
      description: `The freezer needs to be at 0°F or below for the ice maker to work properly. If the freezer is too warm (above 10°F), ice won't form. Use a thermometer to check. Adjust the temperature setting if needed.`,
    },
    {
      number: 5,
      title: "Clear any ice jams",
      description: `Sometimes ice cubes fuse together or a piece gets stuck in the ejector mechanism. Remove the ice bin and break up any clumps. Check the ejector arm for ice blockages. Reinstall and test. If it still won't make ice, the ice maker module itself may need replacing (about $40-$80 for ${brand} models).`,
    },
  ];
}

function stepsForFridgeWarm(brand) {
  return [
    {
      number: 1,
      title: "Check the evaporator fan",
      description: `Open the freezer on your ${brand} refrigerator and listen for the fan. This fan blows cold air from the freezer into the fridge. If it is not running, the freezer stays cold but the fridge gets warm. You can usually hear it when you open the freezer door — if it is silent, the fan motor may be bad ($20-$40 part).`,
    },
    {
      number: 2,
      title: "Check the air damper",
      description: `Between the freezer and fridge sections, there is an air damper (vent) that controls how much cold air flows into the fridge. On most ${brand} models, it is at the top of the fridge compartment. Make sure it is open and not blocked by food or frost.`,
    },
    {
      number: 3,
      title: "Check for frost on the evaporator coils",
      description: `Remove the back panel inside the freezer. If the evaporator coils are covered in frost or ice, the defrost system has failed. This blocks cold air from reaching the fridge. You can manually defrost by unplugging the fridge for 24 hours with the doors open.`,
    },
    {
      number: 4,
      title: "Clean the condenser coils",
      description: `Dirty condenser coils make the entire cooling system less efficient. They are usually at the bottom behind a kick plate or on the back. Vacuum them thoroughly — this should be done every 6-12 months anyway.`,
    },
    {
      number: 5,
      title: "Monitor the temperature",
      description: `After your fixes, put a thermometer in the fridge and check it after 24 hours. It should read 35-38°F. If it is still warm, the defrost thermostat, defrost heater, or defrost timer may need replacing — those are moderate-difficulty repairs.`,
    },
  ];
}

function stepsForRunsConstantly(brand) {
  return [
    {
      number: 1,
      title: "Check the door seals",
      description: `Close the door on your ${brand} refrigerator and look for gaps around the seal. Try the dollar bill test: close the door on a dollar bill. If you can pull it out easily, the seal is not tight enough. Clean the seals with warm soapy water, or replace them if they are cracked ($15-$30).`,
    },
    {
      number: 2,
      title: "Check the temperature setting",
      description: `If the temperature is set too cold (below 35°F for fridge or below -5°F for freezer), the compressor runs more than necessary. Adjust to recommended settings: 37°F for the fridge, 0°F for the freezer.`,
    },
    {
      number: 3,
      title: "Clean the condenser coils",
      description: `Dirty condenser coils are the most common reason a ${brand} refrigerator runs constantly. Unplug the fridge, remove the kick plate at the bottom, and vacuum the coils thoroughly. Do this every 6-12 months.`,
    },
    {
      number: 4,
      title: "Check for obstructed airflow",
      description: `Make sure nothing is blocking the vents inside the fridge and freezer. Overpacking with food restricts airflow and makes the compressor work harder. Leave space around vents for air to circulate.`,
    },
    {
      number: 5,
      title: "Listen to the compressor",
      description: `If the compressor sounds louder than usual or runs non-stop without cycling off, the start relay or compressor itself may be failing. The start relay is a small part on the side of the compressor ($10-$20). If the compressor is the issue, compare repair cost to a new fridge, as compressor replacement is $300-$600.`,
    },
  ];
}

function stepsForTooCold(brand) {
  return [
    {
      number: 1,
      title: "Check the temperature setting",
      description: `On your ${brand} refrigerator, check the temperature dial or digital display. The fridge should be set to 37°F and the freezer to 0°F. If the setting is too low (colder), turn it up a notch. Wait 24 hours to see the effect — changes are not instant.`,
    },
    {
      number: 2,
      title: "Check the air damper",
      description: `The damper control regulates cold air flow from the freezer to the fridge. If it is stuck open, too much cold air enters the fridge and everything freezes. On most ${brand} models, it is at the top of the fridge section. Check if it moves freely.`,
    },
    {
      number: 3,
      title: "Check the thermistor",
      description: `The thermistor (temperature sensor) tells the control board how cold the fridge is. If it is faulty, it may give a false reading, causing the fridge to over-cool. It is a small sensor with two wires, usually clipped to the inside wall of the fridge.`,
    },
    {
      number: 4,
      title: "Rearrange food placement",
      description: `Items near the vents or against the back wall get colder than items on the door. Move sensitive items (lettuce, milk) away from the vents. Don't block the vent openings with large containers.`,
    },
    {
      number: 5,
      title: "Monitor and adjust",
      description: `Place a thermometer in the middle of the fridge. Check it after 24 hours. Adjust the temperature setting by one degree at a time, waiting 24 hours between changes. If the fridge keeps over-cooling despite correct settings, the thermostat or thermistor likely needs replacing.`,
    },
  ];
}

function stepsForLight(brand, shortName) {
  return [
    {
      number: 1,
      title: "Replace the light bulb",
      description: `The simplest fix first. On your ${brand} ${shortName}, open the door and locate the light bulb cover. On most models, you twist or unclip the cover to remove it. Replace the bulb with the same type (check your manual for the correct wattage). Use an appliance-rated bulb, not a regular household bulb.`,
    },
    {
      number: 2,
      title: "Check the door switch",
      description: `The light is controlled by a small plunger switch in the door frame. Press it with your finger — the light should turn off. If it does not respond, the switch may be stuck or broken. Clean around it first, then try again.`,
    },
    {
      number: 3,
      title: "Inspect the wiring",
      description: `If the bulb and switch are fine, unplug the ${shortName} and check the wires running to the light socket. Look for loose connections or damaged wires. A loose connector is an easy fix — just push it back on firmly.`,
    },
    {
      number: 4,
      title: "Replace the light socket",
      description: `If a new bulb and working switch don't solve it, the socket itself may be corroded or broken. Unplug the ${shortName}, remove the socket (usually 1-2 screws), disconnect the wires, and install a new one. A replacement socket for your ${brand} ${shortName} costs about $5-$15.`,
    },
    {
      number: 5,
      title: "Test",
      description: `Plug the ${shortName} back in and open the door. The light should come on. If it still doesn't work, the issue may be on the control board side, which is more complex — but a non-working light does not affect the ${shortName}'s actual operation.`,
    },
  ];
}

function stepsForWaterDispenser(brand) {
  return [
    {
      number: 1,
      title: "Check the water supply",
      description: `Pull your ${brand} refrigerator away from the wall. Make sure the water supply valve is fully open. Check the supply line for kinks. If the fridge was recently installed, make sure the water line is connected.`,
    },
    {
      number: 2,
      title: "Replace the water filter",
      description: `A clogged water filter is the most common reason for slow or no water from the dispenser. ${brand} refrigerators typically need a new filter every 6 months. Remove the old filter (usually a twist-off cartridge), install a new one, and run 2-3 gallons of water through to flush it.`,
    },
    {
      number: 3,
      title: "Check for frozen water line",
      description: `The small tube that runs from the water valve to the dispenser can freeze. Turn off the water supply and use a hair dryer on low heat to gently thaw the line. Then turn the water back on and test.`,
    },
    {
      number: 4,
      title: "Test the water inlet valve",
      description: `The water inlet valve opens when you press the dispenser lever. If you can hear a humming but no water comes out, the valve may be stuck. If there is no sound at all, the valve solenoid may be burned out. A replacement valve costs about $20-$40 for ${brand} models.`,
    },
    {
      number: 5,
      title: "Check the dispenser switch",
      description: `The switch behind the dispenser lever activates the water valve. If it is worn or broken, pressing the lever does nothing. Test by listening for the valve humming. If nothing happens, the switch or its wiring may need replacing.`,
    },
  ];
}

function stepsForFrost(brand) {
  return [
    {
      number: 1,
      title: "Check the door seal",
      description: `Warm, humid air leaking in through a bad door seal is a common cause of frost buildup in your ${brand} refrigerator. Run your hand around the door seal to feel for cool air escaping. Clean the seal with warm soapy water and check for tears or gaps.`,
    },
    {
      number: 2,
      title: "Don't leave the door open",
      description: `Every time the door is open, warm moist air enters and turns to frost. Be mindful of how long the door stays open. Make sure the door closes firmly on its own — if it doesn't, the hinges may need adjusting.`,
    },
    {
      number: 3,
      title: "Check the defrost system",
      description: `Your ${brand} refrigerator has an automatic defrost system with three key parts: the defrost heater, defrost thermostat, and defrost timer (or control board). If frost builds up on the back wall inside the freezer, one of these has failed.`,
    },
    {
      number: 4,
      title: "Manual defrost",
      description: `If frost buildup is severe, unplug the refrigerator and open both doors. Place towels on the floor. Let it defrost completely — this can take 12-24 hours. Do not chip at ice with sharp objects as you can puncture the evaporator coils.`,
    },
    {
      number: 5,
      title: "Test the defrost components",
      description: `After defrosting, plug the fridge back in. Monitor for frost over the next few days. If it returns quickly, test the defrost heater and thermostat with a multimeter. These parts cost $15-$40 for ${brand} models. The defrost timer can also be tested — advance it manually and listen for the heater to click on.`,
    },
  ];
}

function stepsForSparking(brand, shortName) {
  return [
    {
      number: 1,
      title: "Stop the microwave immediately",
      description: `If your ${brand} microwave is sparking, press stop and open the door right away. Sparking can damage the interior and is a potential fire hazard. Don't panic — most causes are harmless and easy to fix.`,
    },
    {
      number: 2,
      title: "Check for metal inside",
      description: `Look inside for any metal objects — aluminum foil, twist ties, utensils, or containers with metallic trim. Even a tiny piece of foil can cause dramatic sparking. Remove any metal items.`,
    },
    {
      number: 3,
      title: "Inspect the waveguide cover",
      description: `Inside your ${brand} microwave, there is a small panel (usually on the right side wall or ceiling) called the waveguide cover. If it is burned, cracked, or has food splatter, it can cause sparking. Clean it gently with a damp cloth. If it is damaged, it needs replacing — this is an inexpensive part (about $5-$10).`,
    },
    {
      number: 4,
      title: "Check the interior for damage",
      description: `Look at the inside walls of the microwave. If the paint is peeling, chipped, or rusted, the exposed metal will cause sparking. You can touch up small spots with microwave-safe paint (available at hardware stores for about $10).`,
    },
    {
      number: 5,
      title: "Test carefully",
      description: `Place a microwave-safe cup of water inside and run for 30 seconds. Watch through the window (don't open the door while it's running). If there's no sparking, you're good. If it still sparks, the magnetron or diode may be failing — do not open the cabinet yourself; call a professional.`,
    },
  ];
}

function stepsForButtons(brand, shortName) {
  return [
    {
      number: 1,
      title: "Try a hard reset",
      description: `Unplug your ${brand} ${shortName} from the wall for 2 minutes. Plug it back in. This resets the control board and often fixes unresponsive buttons. It is the simplest and most effective first step.`,
    },
    {
      number: 2,
      title: "Check for child lock",
      description: `Your ${brand} ${shortName} may be in child lock mode, which disables all or most buttons. Look for a lock icon on the display. To disable it, hold the lock button (or a button combination listed in your manual) for 3-5 seconds.`,
    },
    {
      number: 3,
      title: "Clean the control panel",
      description: `Unplug the ${shortName}. Gently clean the button area with a slightly damp cloth. Built-up grease, food spills, or moisture can interfere with the membrane switches behind the buttons. Dry thoroughly.`,
    },
    {
      number: 4,
      title: "Check the membrane switch",
      description: `If individual buttons do not respond, the membrane switch (the flexible circuit behind the button panel) may be worn through. On some ${brand} models, you can replace just the membrane switch ($15-$40). On others, you need the entire control panel.`,
    },
    {
      number: 5,
      title: "Consider the control board",
      description: `If no buttons respond at all after a reset, the main control board may be faulty. This is a more expensive repair ($50-$150 for the part). At that cost, compare with the price of a new ${shortName} — especially if yours is older than 7-8 years.`,
    },
  ];
}

function stepsForDisplay(brand, shortName) {
  return [
    {
      number: 1,
      title: "Power cycle the unit",
      description: `Unplug your ${brand} ${shortName} for 5 minutes, then plug it back in. A blank or glitchy display is often a temporary electronic glitch that a power reset fixes.`,
    },
    {
      number: 2,
      title: "Check the brightness setting",
      description: `Some ${brand} ${shortName}s have a display brightness control. The display might be working but set to the lowest brightness. Check your owner's manual for how to adjust display brightness.`,
    },
    {
      number: 3,
      title: "Inspect the power supply",
      description: `Make sure the outlet is working (plug something else in to test). If other functions work (the ${shortName} heats, the light works) but the display is blank, the issue is specifically the display board or its connection.`,
    },
    {
      number: 4,
      title: "Check the display ribbon cable",
      description: `Unplug the ${shortName}. On many ${brand} models, the display connects to the main board with a ribbon cable. If you can access it (usually behind the control panel), check that the cable is firmly seated on both ends. A loose ribbon cable can cause a blank display.`,
    },
    {
      number: 5,
      title: "Replace the display board",
      description: `If the display is completely dead after checking power and connections, the display board likely needs replacing. For most ${brand} ${shortName}s, this part costs $30-$70. You may be able to find a replacement online and install it yourself by swapping the old board.`,
    },
  ];
}

function stepsForTurntable(brand) {
  return [
    {
      number: 1,
      title: "Check the turntable support",
      description: `Remove the glass turntable plate from your ${brand} microwave. Check the small roller ring guide underneath — it should roll smoothly. Clean it and the floor of the microwave. Food buildup can jam the rollers.`,
    },
    {
      number: 2,
      title: "Inspect the coupler",
      description: `The coupler is the three-pronged plastic piece that connects the turntable to the motor shaft. Check if it is cracked or worn. Also check that the glass plate sits properly on the coupler. A replacement coupler costs about $3-$8.`,
    },
    {
      number: 3,
      title: "Check the motor",
      description: `The turntable motor is underneath the microwave floor. Unplug the microwave. If the coupler spins but the plate doesn't, the coupler is stripped. If the coupler doesn't spin at all, the motor may be burned out. On many ${brand} models, the motor is accessible from the bottom panel.`,
    },
    {
      number: 4,
      title: "Test the motor",
      description: `If you have a multimeter, unplug the microwave and test the motor terminals for continuity. No continuity means the motor is dead and needs replacing. A turntable motor costs about $10-$25 for most ${brand} microwaves.`,
    },
    {
      number: 5,
      title: "Replace and test",
      description: `Install the new coupler or motor (usually 2-3 screws), reconnect the wires, put the plate back on, and plug the microwave in. Heat a cup of water for 30 seconds — the turntable should spin smoothly.`,
    },
  ];
}

function stepsForPlate(brand) {
  return [
    {
      number: 1,
      title: "Measure your turntable plate",
      description: `Remove the broken plate from your ${brand} microwave. Measure the diameter from edge to edge in inches. This is the most important measurement for finding a replacement. Common sizes are 10.5, 12.4, and 13.5 inches.`,
    },
    {
      number: 2,
      title: "Find the right replacement",
      description: `Look for your ${brand} model number (usually on a sticker inside the door or on the back). Search for "${brand} microwave turntable plate" with your model number. Universal plates work too — just match the diameter and the coupler type (three-pronged or flat bottom).`,
    },
    {
      number: 3,
      title: "Clean while the plate is out",
      description: `With the old plate removed, clean the roller ring guide and the floor of the microwave. Wipe up any food or liquid with a damp cloth. This is a great opportunity to deep clean since the plate is already out.`,
    },
    {
      number: 4,
      title: "Install the new plate",
      description: `Place the roller ring guide back in position. Set the new plate on the coupler, making sure it sits evenly and rotates freely when you push it gently. It should glide smoothly without catching.`,
    },
    {
      number: 5,
      title: "Test it",
      description: `Close the door and run the microwave for 30 seconds with a cup of water inside. The plate should rotate smoothly. Replacement plates for ${brand} microwaves typically cost $10-$25.`,
    },
  ];
}

function stepsForUnevenHeating(brand) {
  return [
    {
      number: 1,
      title: "Check the heating elements",
      description: `Your ${brand} oven has both a bake element (bottom) and a broil element (top). Turn the oven on to bake and watch both elements — the bottom one should glow red evenly. If only part of it glows, or it has dark spots, the element is failing and needs replacing.`,
    },
    {
      number: 2,
      title: "Test with an oven thermometer",
      description: `Place an oven thermometer in the center of the oven. Set the temperature to 350°F and wait 20 minutes. Then move the thermometer to different spots. If the temperature varies by more than 25°F between spots, there is a circulation problem.`,
    },
    {
      number: 3,
      title: "Check the convection fan (if applicable)",
      description: `If your ${brand} oven has convection, the fan on the back wall should spin when convection is enabled. If it is not spinning, the fan motor may be bad. Without the fan, hot air pools and doesn't distribute evenly.`,
    },
    {
      number: 4,
      title: "Calibrate the oven",
      description: `Most ${brand} ovens allow temperature calibration in the settings menu. If your oven thermometer shows it is consistently off by a specific amount, you can adjust the calibration to compensate. Check your owner's manual for instructions.`,
    },
    {
      number: 5,
      title: "Check rack placement",
      description: `Oven rack position matters a lot. For most baking, use the middle rack. Make sure racks are not warped and sit level. Also make sure baking sheets and pans are not too large — they need at least 1-2 inches of clearance on all sides for air to circulate.`,
    },
  ];
}

function stepsForSelfClean(brand) {
  return [
    {
      number: 1,
      title: "Check the door lock",
      description: `Your ${brand} oven won't start self-clean if the door lock mechanism is not working. Try manually starting the self-clean cycle and watch the door lock — it should engage automatically. If you hear clicking but the lock doesn't engage, the lock motor may need replacing ($20-$40).`,
    },
    {
      number: 2,
      title: "Check the oven temperature",
      description: `The oven must be below a certain temperature before self-clean will start. If you just finished cooking, wait at least 30 minutes for the oven to cool down, then try again.`,
    },
    {
      number: 3,
      title: "Try a power reset",
      description: `Turn off the circuit breaker for your ${brand} oven for 2 minutes, then turn it back on. This resets the control board. Try starting the self-clean cycle again.`,
    },
    {
      number: 4,
      title: "Check for error codes",
      description: `If your ${brand} oven shows an error code when you try to start self-clean, note the code and look it up. Common codes relate to the door lock, temperature sensor, or control board issues.`,
    },
    {
      number: 5,
      title: "Consider manual cleaning instead",
      description: `If the self-clean function won't work, you can clean the oven manually with baking soda paste (baking soda + water). Spread it inside, leave overnight, then wipe clean. Many repair pros actually recommend this over self-clean — the extreme heat of self-clean can burn out temperature sensors and door lock motors.`,
    },
  ];
}

function stepsForBurner(brand) {
  return [
    {
      number: 1,
      title: "Clean the burner and igniter",
      description: `Turn off your ${brand} range. Remove the burner grate and cap. Use a toothbrush to clean around the igniter (the small ceramic piece near the burner). Food spills and grease often coat the igniter and prevent it from sparking properly. Clean the burner ports (the small holes around the burner) with a pin or toothpick.`,
    },
    {
      number: 2,
      title: "Make sure the burner cap is aligned",
      description: `The burner cap must sit perfectly flat and centered on the burner base. If it is crooked or bumped out of position, the gas cannot ignite evenly. Lift it off, re-seat it, and make sure it sits flat.`,
    },
    {
      number: 3,
      title: "Check for moisture",
      description: `If you recently cleaned the stovetop or a pot boiled over, moisture around the igniter will prevent sparking. Dry the area thoroughly. You can use a hair dryer on low heat to speed up drying.`,
    },
    {
      number: 4,
      title: "Test the igniter",
      description: `Turn the burner knob to "light" and look for a spark at the igniter. If you see a spark but the burner won't light, the gas ports are clogged — clean them more thoroughly. If there is no spark, the igniter or spark module may need replacing ($10-$25).`,
    },
    {
      number: 5,
      title: "Check the gas supply",
      description: `Make sure the gas supply valve behind the range is fully open. If other burners work fine, the gas supply is not the issue — it is specific to that burner. If no burners light, check the gas supply line and valve.`,
    },
  ];
}

function stepsForTempInaccurate(brand) {
  return [
    {
      number: 1,
      title: "Verify with an oven thermometer",
      description: `Place an oven thermometer in the center of your ${brand} oven. Set it to 350°F and wait 20 minutes with the door closed. Compare the thermometer reading to the set temperature. If the difference is more than 25°F, calibration is needed.`,
    },
    {
      number: 2,
      title: "Calibrate the oven temperature",
      description: `Most ${brand} ovens have a temperature calibration setting in the menu. This lets you offset the temperature by up to 35°F. Check your owner's manual for the exact steps — it usually involves holding a button combination to enter calibration mode.`,
    },
    {
      number: 3,
      title: "Check the temperature sensor",
      description: `The oven temperature sensor is a thin metal rod, usually mounted on the back wall inside the oven. Make sure it is not touching the oven wall — it needs about a half-inch of clearance. If it is bent and touching metal, gently bend it back to center.`,
    },
    {
      number: 4,
      title: "Test the sensor with a multimeter",
      description: `Unplug the oven. Disconnect the sensor wires and test resistance with a multimeter. At room temperature (70°F), the sensor should read about 1080-1090 ohms. If the reading is way off, the sensor needs replacing ($15-$25 for most ${brand} models).`,
    },
    {
      number: 5,
      title: "Check the heating element",
      description: `A partially failing bake element can cause temperature issues — the oven takes forever to heat or can't maintain temperature. If only part of the element glows red, it needs replacing. A bake element for your ${brand} oven costs about $20-$40.`,
    },
  ];
}

function stepsForBroiler(brand) {
  return [
    {
      number: 1,
      title: "Make sure you're using broil mode correctly",
      description: `Set your ${brand} oven to "Broil" (not "Bake"). The broil element is at the top of the oven — it should glow bright red within 2-3 minutes. Some models have a "Hi" and "Lo" broil setting. Make sure the oven door is in the correct position (some models require it slightly ajar).`,
    },
    {
      number: 2,
      title: "Check the broil element",
      description: `Look at the top heating element inside the oven. Turn on broil and watch it. It should glow evenly bright red. If it doesn't glow, glows unevenly, or has visible breaks or burn spots, it needs replacing. Unplug the oven first before inspecting closely.`,
    },
    {
      number: 3,
      title: "Replace the broil element",
      description: `Turn off power at the circuit breaker. Remove the oven racks. The broil element is held by 2-4 screws at the back of the oven. Remove the screws, gently pull the element forward, and disconnect the wires. Connect the new element, screw it in, and restore power. A ${brand} broil element costs about $20-$40.`,
    },
    {
      number: 4,
      title: "Check the oven relay or control board",
      description: `If the element is good, the relay on the control board that sends power to the broil element may have failed. This is a more advanced repair — the control board is behind the control panel. If other oven functions work fine, the board is probably fine and the element is the issue.`,
    },
    {
      number: 5,
      title: "Test your repair",
      description: `Set the oven to broil and place a slice of bread on the top rack. It should start browning within 2-3 minutes. If the broil element glows and works, your repair is complete!`,
    },
  ];
}

function stepsForIgniter(brand) {
  return [
    {
      number: 1,
      title: "Turn off the gas and power",
      description: `Before doing anything, turn off the gas supply valve behind your ${brand} range. Also unplug it or flip the circuit breaker. The constant clicking means the igniter is trying to fire but can't light the gas.`,
    },
    {
      number: 2,
      title: "Clean around all igniters",
      description: `The clicking often happens when food or liquid gets into the igniter area. Remove the burner grates and caps. Use a toothbrush and a damp cloth to thoroughly clean around each igniter (the small ceramic nubs next to each burner). Dry everything completely.`,
    },
    {
      number: 3,
      title: "Dry the igniters completely",
      description: `Moisture is the most common cause of continuous clicking. Even after cleaning, moisture can remain. Use a hair dryer on low to dry each igniter area for 1-2 minutes. Make sure no water is pooled under the burner bases.`,
    },
    {
      number: 4,
      title: "Check the spark module",
      description: `If cleaning and drying doesn't stop the clicking, the spark module (the electronic part that controls all igniters) may be shorting. It is usually located under the cooktop. Unplug the range and check the wires going to the spark module for damage or corrosion.`,
    },
    {
      number: 5,
      title: "Replace the igniter or spark module",
      description: `If a specific burner's igniter is cracked or corroded, replace it ($10-$20). If all burners click constantly, the spark module itself may be faulty ($25-$50 for most ${brand} models). Reconnect everything, turn the gas and power back on, and test each burner.`,
    },
  ];
}

function stepsForSmoking(brand) {
  return [
    {
      number: 1,
      title: "Turn off the oven and open windows",
      description: `If your ${brand} oven is smoking, turn it off immediately. Open windows and turn on your range hood to ventilate. A little smoke is normal for a brand-new oven (manufacturing residue burns off) or after a self-clean cycle, but heavy or continued smoking needs attention.`,
    },
    {
      number: 2,
      title: "Clean spilled food and grease",
      description: `The most common cause of a smoking oven is food or grease buildup on the bottom, sides, or heating elements. Let the oven cool completely, then clean it. Use baking soda paste for the interior and a damp cloth for the heating elements (don't use chemical cleaners on elements).`,
    },
    {
      number: 3,
      title: "Check the heating elements",
      description: `Turn the oven on and watch the bake and broil elements. If either one sparks or has a glowing hot spot, it may be short-circuiting and burning nearby residue. A failing element should be replaced before using the oven again.`,
    },
    {
      number: 4,
      title: "Check the temperature",
      description: `An oven running too hot will char food and cause smoking. Use an oven thermometer to verify the actual temperature matches the set temperature. If it's significantly hotter, the temperature sensor or thermostat may be faulty.`,
    },
    {
      number: 5,
      title: "Season after cleaning",
      description: `After a thorough cleaning, preheat the oven to 350°F for 15-20 minutes with nothing inside. This burns off any remaining cleaning residue. If smoking continues after this, and the elements and temperature are fine, the insulation around the oven cavity may be degrading — that's a professional repair.`,
    },
  ];
}

function stepsForNotCooling(brand) {
  return [
    {
      number: 1,
      title: "Check the thermostat setting",
      description: `Make sure your ${brand} refrigerator temperature is set correctly — 37°F for the fridge and 0°F for the freezer. If someone accidentally bumped the dial or settings, the fridge might be set too warm.`,
    },
    {
      number: 2,
      title: "Clean the condenser coils",
      description: `Unplug the fridge. The condenser coils are usually at the bottom behind a kick plate or on the back. Use a vacuum and coil brush to remove dust and pet hair. Dirty coils are the #1 reason ${brand} refrigerators stop cooling properly.`,
    },
    {
      number: 3,
      title: "Check the condenser fan",
      description: `While you're at the bottom with the coils, check the condenser fan. It should spin freely. If it's stuck, makes grinding noises, or doesn't run when the fridge is on, the fan motor needs replacing ($15-$30).`,
    },
    {
      number: 4,
      title: "Check the evaporator fan inside the freezer",
      description: `Open the freezer and listen for the evaporator fan. If it's not running, cold air can't circulate. The fan is behind the back panel inside the freezer. A replacement fan motor costs about $20-$40 for ${brand} models.`,
    },
    {
      number: 5,
      title: "Wait 24 hours and monitor",
      description: `After cleaning the coils and checking the fans, plug the fridge back in and put a thermometer inside. Give it 24 hours to reach proper temperature. If it still won't cool, the compressor or sealed system may be the issue — that's a professional repair.`,
    },
  ];
}

function stepsForLatch(brand, shortName) {
  return [
    {
      number: 1,
      title: "Inspect the door latch",
      description: `Open your ${brand} ${shortName} and look at the door latch mechanism. Check for food debris, broken plastic parts, or anything preventing the latch from engaging. Clean the latch and strike plate with a damp cloth.`,
    },
    {
      number: 2,
      title: "Adjust the door strike",
      description: `Sometimes the door strike plate shifts out of alignment. Close the door slowly and watch how the latch meets the strike. If they don't line up, you may be able to adjust the strike plate by loosening its screws and repositioning it slightly.`,
    },
    {
      number: 3,
      title: "Check the door hinges",
      description: `Worn or loose hinges cause the door to sag, which misaligns the latch. Open the door and try lifting it slightly — if there is play in the hinges, tighten the hinge screws or replace worn hinges.`,
    },
    {
      number: 4,
      title: "Replace the latch assembly",
      description: `If the latch is cracked or the spring mechanism is broken, replace the latch assembly. On most ${brand} ${shortName}s, it is held in place by 2-3 screws and a wire connector. A replacement latch costs about $10-$25.`,
    },
    {
      number: 5,
      title: "Test",
      description: `Close the door and make sure the latch clicks firmly. Try starting a cycle — the ${shortName} should recognize the door is latched and begin normally. If it still won't latch, the door switch sensor may also need replacing.`,
    },
  ];
}

function stepsForTemperature(brand, shortName) {
  return [
    {
      number: 1,
      title: "Check your hot water heater",
      description: `Your ${brand} ${shortName} uses hot water from your home's water heater. Make sure the water heater is set to at least 120°F. Run hot water at the kitchen sink until it's hot before starting the ${shortName} — this ensures hot water reaches the machine right away.`,
    },
    {
      number: 2,
      title: "Check the heating element",
      description: `Your ${brand} ${shortName} has a built-in heating element that boosts water temperature during the wash cycle. If the water is only lukewarm, this element may have failed. It's located at the bottom of the tub.`,
    },
    {
      number: 3,
      title: "Test the heating element",
      description: `Turn off power to the ${shortName} at the breaker. Access the heating element terminals underneath the unit and test with a multimeter. A working element should show 15-30 ohms of resistance. Infinite resistance means it's burned out and needs replacing ($20-$40).`,
    },
    {
      number: 4,
      title: "Select the right cycle",
      description: `Make sure you're selecting a cycle that uses hot water. Eco or quick wash cycles often use cooler water to save energy. For heavily soiled dishes, use a normal or heavy cycle with a "high temp wash" option if available.`,
    },
    {
      number: 5,
      title: "Check the thermostat",
      description: `The high-limit thermostat prevents the water from getting too hot. If it fails, it can also prevent the heater from working at all. It's usually near the heating element. Test with a multimeter — it should show continuity at room temperature.`,
    },
  ];
}

function stepsForDispenser(brand, shortName) {
  return [
    {
      number: 1,
      title: "Check for detergent buildup",
      description: `The soap dispenser on your ${brand} ${shortName} can get clogged with dried detergent. Remove the dispenser tray if possible and soak it in hot water. Scrub with an old toothbrush to remove all buildup.`,
    },
    {
      number: 2,
      title: "Clean the dispenser door mechanism",
      description: `The dispenser door is released by a spring or solenoid during the wash cycle. Check that the spring mechanism moves freely. Clean any sticky residue that might be preventing the door from opening. A damp cloth with a little vinegar works well.`,
    },
    {
      number: 3,
      title: "Check the dispenser wax motor or solenoid",
      description: `The dispenser is opened by a small wax motor or solenoid. If this part fails, the door stays shut. You can test by starting a cycle and listening for a click when the dispenser should open. No click usually means the motor is bad ($10-$20 replacement for ${brand} models).`,
    },
    {
      number: 4,
      title: "Use the right detergent amount",
      description: `Too much detergent can cake up and jam the dispenser. Use the amount recommended on the detergent packaging — for most loads, this is less than you think. If using pods, place them directly in the bottom of the ${shortName} instead of the dispenser.`,
    },
    {
      number: 5,
      title: "Test the fix",
      description: `Put a small amount of detergent in the dispenser, close it, and run a short cycle. Check after the wash — the dispenser should be open and empty. If it still won't open, the timer or control board may not be sending the signal to the dispenser.`,
    },
  ];
}

function stepsForResidue(brand, shortName) {
  return [
    {
      number: 1,
      title: "Run a vinegar rinse cycle",
      description: `Place a cup of white vinegar on the top rack of your empty ${brand} ${shortName} and run a hot cycle. The vinegar breaks down mineral deposits that cause white residue. This is often a hard water issue.`,
    },
    {
      number: 2,
      title: "Adjust your detergent",
      description: `Too much detergent causes white residue on dishes and glasses. Cut the amount of detergent you're using in half and see if the problem improves. Also make sure you're using fresh detergent — old detergent doesn't dissolve as well.`,
    },
    {
      number: 3,
      title: "Fill the rinse aid dispenser",
      description: `Rinse aid helps water sheet off dishes instead of forming droplets that leave mineral spots. Open the rinse aid compartment (usually next to the detergent dispenser) and fill it up. Set the rinse aid level to the highest setting if hard water is severe in your area.`,
    },
    {
      number: 4,
      title: "Check your water hardness",
      description: `Hard water is the most common cause of white residue. You can buy test strips at a hardware store for about $5. If your water is hard (above 7 grains per gallon), use a dishwasher detergent that's designed for hard water, or add a water softener booster to each load.`,
    },
    {
      number: 5,
      title: "Clean the spray arms and filter",
      description: `If the spray arms are clogged with mineral deposits, they can't rinse dishes properly. Remove the spray arms and soak them in vinegar for an hour. Clean the filter at the bottom of the ${shortName} too. Maintaining these parts prevents residue from building up.`,
    },
  ];
}

// ---------------------------------------------------------------------------
// STEP DISPATCHER
// ---------------------------------------------------------------------------

function getSteps(brand, shortName, symptom, categorySlug) {
  const cat = symptomCategory(symptom);
  switch (cat) {
    case "heating": return stepsForHeating(brand, shortName, categorySlug);
    case "wont-start": return stepsForWontStart(brand, shortName, categorySlug);
    case "leaking": return stepsForLeaking(brand, shortName, categorySlug);
    case "noise": return stepsForNoise(brand, shortName);
    case "drain": return stepsForDrain(brand, shortName);
    case "spin": return stepsForSpin(brand, shortName);
    case "vibration": return stepsForVibration(brand, shortName);
    case "fill": return stepsForFill(brand, shortName);
    case "door": return stepsForDoor(brand, shortName, categorySlug);
    case "smell": return stepsForSmell(brand, shortName);
    case "performance": return stepsForPerformance(brand, shortName, categorySlug);
    case "shuts-off": return stepsForShutsOff(brand, shortName);
    case "burning": return stepsForBurning(brand, shortName);
    case "lint": return stepsForLint(brand, shortName);
    case "latch": return stepsForLatch(brand, shortName);
    case "temperature": return stepsForTemperature(brand, shortName);
    case "dispenser": return stepsForDispenser(brand, shortName);
    case "residue": return stepsForResidue(brand, shortName);
    case "ice-maker": return stepsForIceMaker(brand);
    case "fridge-warm": return stepsForFridgeWarm(brand);
    case "runs-constantly": return stepsForRunsConstantly(brand);
    case "too-cold": return stepsForTooCold(brand);
    case "light": return stepsForLight(brand, shortName);
    case "water-dispenser": return stepsForWaterDispenser(brand);
    case "frost": return stepsForFrost(brand);
    case "sparking": return stepsForSparking(brand, shortName);
    case "buttons": return stepsForButtons(brand, shortName);
    case "display": return stepsForDisplay(brand, shortName);
    case "turntable": return stepsForTurntable(brand);
    case "plate": return stepsForPlate(brand);
    case "uneven-heating": return stepsForUnevenHeating(brand);
    case "self-clean": return stepsForSelfClean(brand);
    case "burner": return stepsForBurner(brand);
    case "temp-inaccurate": return stepsForTempInaccurate(brand);
    case "broiler": return stepsForBroiler(brand);
    case "igniter": return stepsForIgniter(brand);
    case "smoking": return stepsForSmoking(brand);
    case "not-cooling": return stepsForNotCooling(brand);
    default: return stepsForWontStart(brand, shortName, categorySlug);
  }
}

// ---------------------------------------------------------------------------
// PARTS / TOOLS / DIFFICULTY / COST per symptom category
// ---------------------------------------------------------------------------

function getDifficulty(symptom) {
  const cat = symptomCategory(symptom);
  const hard = ["sparking"];
  const medium = ["heating", "spin", "shuts-off", "fridge-warm", "runs-constantly", "frost", "broiler", "not-cooling"];
  if (hard.includes(cat)) return "Medium";
  if (medium.includes(cat)) return "Medium";
  return "Easy";
}

function getTimeEstimate(symptom) {
  const cat = symptomCategory(symptom);
  const quick = ["lint", "smell", "residue", "performance", "light", "plate", "turntable", "buttons", "display", "temperature"];
  const slow = ["heating", "spin", "fridge-warm", "frost", "runs-constantly", "broiler", "not-cooling"];
  if (quick.includes(cat)) return "15-30 minutes";
  if (slow.includes(cat)) return "30-60 minutes";
  return "20-45 minutes";
}

function getCostEstimate(symptom) {
  const cat = symptomCategory(symptom);
  const free = ["smell", "lint", "residue", "performance", "vibration", "too-cold", "smoking"];
  const cheap = ["drain", "leaking", "wont-start", "door", "latch", "fill", "buttons", "display", "light", "temperature", "dispenser", "plate", "turntable", "sparking", "igniter", "burner", "self-clean"];
  const medium = ["heating", "spin", "shuts-off", "fridge-warm", "frost", "runs-constantly", "not-cooling", "ice-maker", "water-dispenser", "uneven-heating", "broiler", "temp-inaccurate", "noise", "burning"];
  if (free.includes(cat)) return "$0";
  if (cheap.includes(cat)) return "$0-$25";
  if (medium.includes(cat)) return "$10-$50";
  return "$0-$30";
}

function getToolsNeeded(symptom, categorySlug) {
  const cat = symptomCategory(symptom);
  const base = ["Phillips screwdriver"];
  const multimeter = "Multimeter (optional but very helpful)";
  const towels = "Towels or shallow pan";
  const vacuum = "Vacuum with hose attachment";
  const toothbrush = "Old toothbrush";

  if (cat === "heating") return [...base, "Nut driver (1/4 inch)", multimeter];
  if (cat === "drain") return [...base, "Flathead screwdriver", towels, "Pliers"];
  if (cat === "leaking") return [towels, ...base, "Adjustable pliers"];
  if (cat === "noise") return [...base, "Level"];
  if (cat === "spin") return [...base, "Nut driver (1/4 inch)"];
  if (cat === "vibration") return ["Level", "Adjustable wrench"];
  if (cat === "fill") return [...base, toothbrush];
  if (cat === "smell") return ["White vinegar", toothbrush, "Bottle brush"];
  if (cat === "lint") return ["Long lint brush", vacuum];
  if (cat === "burning") return [...base, "Long lint brush", vacuum];
  if (cat === "frost") return [towels, "Hair dryer (optional)", multimeter];
  if (cat === "not-cooling" || cat === "runs-constantly" || cat === "fridge-warm") return [vacuum, "Coil brush ($8)", "Thermometer"];
  if (["light", "plate", "turntable"].includes(cat)) return ["None needed"];
  if (cat === "residue") return ["White vinegar", toothbrush];
  if (cat === "burner" || cat === "igniter") return [toothbrush, "Toothpick", "Hair dryer"];
  if (["temp-inaccurate", "broiler", "uneven-heating"].includes(cat)) return [...base, "Oven thermometer ($5)", multimeter];
  return base;
}

function getPartsNeeded(brand, shortName, symptom, categorySlug) {
  const cat = symptomCategory(symptom);
  const searchTerm = (part) => `${brand} ${shortName} ${part}`;

  const makePart = (name, costRange, searchPart) => ({
    name,
    costRange,
    amazonUrl: amazonUrl(brand, shortName, searchPart || name.toLowerCase()),
    ebayUrl: ebayUrl(brand, shortName, searchPart || name.toLowerCase()),
  });

  switch (cat) {
    case "heating":
      return [
        makePart("Heating Element", "$20-$40", "heating element"),
        makePart("Thermal Fuse", "$5-$10", "thermal fuse"),
      ];
    case "wont-start":
      return [
        makePart("Door Switch", "$5-$15", "door switch"),
        makePart("Start Switch", "$10-$25", "start switch"),
      ];
    case "leaking":
      return [
        makePart("Door Gasket/Seal", "$15-$35", "door gasket seal"),
        makePart("Water Hose", "$10-$20", "water hose"),
      ];
    case "drain":
      return [
        makePart("Drain Pump", "$15-$30", "drain pump"),
      ];
    case "noise":
      return [
        makePart("Drum Bearings", "$15-$40", "drum bearings"),
      ];
    case "spin":
      return [
        makePart("Drive Belt", "$5-$15", "drive belt"),
        makePart("Motor Coupling", "$10-$20", "motor coupling"),
      ];
    case "vibration":
      return [
        makePart("Shock Absorbers (set of 2)", "$15-$30", "shock absorbers"),
      ];
    case "fill":
      return [
        makePart("Water Inlet Valve", "$15-$30", "water inlet valve"),
      ];
    case "door":
      return [
        makePart("Door Lock Assembly", "$15-$30", "door lock assembly"),
      ];
    case "smell":
      return [
        makePart("Washing Machine Cleaner", "$8-$12", "washing machine cleaner tablets"),
      ];
    case "shuts-off":
      return [
        makePart("Thermal Fuse", "$5-$10", "thermal fuse"),
        makePart("Cycling Thermostat", "$10-$20", "cycling thermostat"),
      ];
    case "burning":
      return [
        makePart("Drive Belt", "$5-$15", "drive belt"),
        makePart("Drum Rollers", "$10-$25", "drum rollers"),
      ];
    case "lint":
      return [
        makePart("Dryer Vent Cleaning Kit", "$10-$20", "dryer vent cleaning kit"),
      ];
    case "ice-maker":
      return [
        makePart("Water Inlet Valve", "$15-$30", "water inlet valve"),
        makePart("Ice Maker Assembly", "$40-$80", "ice maker assembly"),
      ];
    case "fridge-warm":
      return [
        makePart("Evaporator Fan Motor", "$20-$40", "evaporator fan motor"),
      ];
    case "runs-constantly":
      return [
        makePart("Door Seal Gasket", "$15-$30", "door seal gasket"),
        makePart("Start Relay", "$10-$20", "start relay"),
      ];
    case "too-cold":
      return [
        makePart("Air Damper Control", "$15-$30", "air damper control"),
      ];
    case "light":
      return [
        makePart("Appliance Light Bulb", "$3-$8", "appliance light bulb"),
      ];
    case "water-dispenser":
      return [
        makePart("Water Filter", "$15-$30", "water filter"),
        makePart("Water Inlet Valve", "$20-$40", "water inlet valve"),
      ];
    case "frost":
      return [
        makePart("Defrost Heater", "$20-$40", "defrost heater"),
        makePart("Defrost Thermostat", "$10-$20", "defrost thermostat"),
      ];
    case "sparking":
      return [
        makePart("Waveguide Cover", "$5-$10", "waveguide cover"),
      ];
    case "buttons":
      return [
        makePart("Membrane Switch/Touchpad", "$15-$40", "control panel touchpad"),
      ];
    case "display":
      return [
        makePart("Display Board", "$30-$70", "display board"),
      ];
    case "turntable":
      return [
        makePart("Turntable Motor", "$10-$25", "turntable motor"),
        makePart("Coupler", "$3-$8", "turntable coupler"),
      ];
    case "plate":
      return [
        makePart("Turntable Glass Plate", "$10-$25", "turntable glass plate"),
      ];
    case "burner":
    case "igniter":
      return [
        makePart("Igniter", "$10-$25", "stove igniter"),
      ];
    case "uneven-heating":
    case "temp-inaccurate":
      return [
        makePart("Oven Temperature Sensor", "$15-$25", "oven temperature sensor"),
        makePart("Bake Element", "$20-$40", "bake element"),
      ];
    case "self-clean":
      return [
        makePart("Door Lock Motor", "$20-$40", "oven door lock motor"),
      ];
    case "broiler":
      return [
        makePart("Broil Element", "$20-$40", "broil element"),
      ];
    case "smoking":
      return [
        makePart("Bake Element", "$20-$40", "bake element"),
      ];
    case "not-cooling":
      return [
        makePart("Condenser Fan Motor", "$15-$30", "condenser fan motor"),
      ];
    case "latch":
      return [
        makePart("Door Latch Assembly", "$10-$25", "door latch"),
      ];
    case "temperature":
      return [
        makePart("Heating Element", "$20-$40", "dishwasher heating element"),
      ];
    case "dispenser":
      return [
        makePart("Soap Dispenser Wax Motor", "$10-$20", "soap dispenser motor"),
      ];
    case "residue":
      return [
        makePart("Rinse Aid", "$5-$10", "dishwasher rinse aid"),
      ];
    default:
      return [
        makePart("Replacement Part", "$10-$30", "replacement parts"),
      ];
  }
}

function getQuickDiagnosis(brand, shortName, symptom, categorySlug) {
  const cat = symptomCategory(symptom);
  const deviceName = `${brand} ${shortName}`;
  const symptomLower = symptom.toLowerCase();

  const templates = {
    heating: `When your ${deviceName} runs but does not produce heat, the most common cause is a blown thermal fuse or a burned-out heating element. Both are affordable parts you can replace yourself. The thermal fuse often blows because of restricted airflow, so check your vents and filters first.`,
    "wont-start": `If your ${deviceName} won't start at all, don't worry — this is usually something simple. The most common causes are a tripped breaker, a faulty door switch, or a control board glitch. A power reset fixes the problem about half the time.`,
    leaking: `A leaking ${deviceName} is usually caused by a worn door gasket, a loose hose connection, or a failing pump seal. The good news: most leaks are inexpensive to fix once you find the source. Start by figuring out where the water is coming from.`,
    noise: `Strange noises from your ${deviceName} are usually caused by worn bearings, loose parts, or something stuck where it shouldn't be. The type of noise tells you a lot: squealing means a belt or bearing, grinding means metal-on-metal, and rattling means something is loose.`,
    drain: `When your ${deviceName} won't drain, the most common cause is a clogged drain filter or a blocked drain hose. Cleaning these out fixes the problem about 80% of the time. It's a free fix that takes about 15 minutes.`,
    spin: `If your ${deviceName} fills and washes but won't spin, the most likely causes are an unbalanced load, a broken drive belt, or a failed lid/door switch. Start with the simplest fixes first — most people solve this without needing any parts.`,
    vibration: `A ${deviceName} that shakes violently during the spin cycle is usually not level, has an unbalanced load, or has worn shock absorbers. Leveling the machine is free and fixes the problem most of the time.`,
    fill: `When your ${deviceName} won't fill with water, check the water supply valves first — they may be partially closed. Clogged inlet screens and a faulty water inlet valve are the other common causes. Most fixes are quick and inexpensive.`,
    door: `A ${deviceName} door that won't open is usually a stuck electronic lock. A simple power reset (unplugging for 5 minutes) fixes this about 60% of the time. If the lock mechanism is physically broken, it's an easy and cheap replacement.`,
    smell: `Bad smells from your ${deviceName} are caused by mold and bacteria growing in moisture that sits in the machine between washes. A thorough cleaning of the door seal, detergent dispenser, and drain filter eliminates the smell. This is a free fix.`,
    performance: `When your ${deviceName} runs but doesn't perform well, it's usually a maintenance issue rather than a broken part. Cleaning filters, checking vents, and using the right amount of detergent often solves the problem completely.`,
    "shuts-off": `A ${deviceName} that shuts off before the cycle finishes is usually overheating due to restricted airflow or has a faulty moisture sensor. Cleaning the vent system and sensor bars are free fixes that solve this problem most of the time.`,
    burning: `A burning smell from your ${deviceName} is something to take seriously — lint buildup near the heating element is a fire hazard. The fix is usually a thorough cleaning of the lint system, but you should also check the belt and drum rollers.`,
    lint: `A clogged lint system in your ${deviceName} reduces performance and is a serious fire hazard. Deep cleaning the lint trap, vent hose, and outside vent exit restores performance and keeps your home safe. This is a free fix.`,
    latch: `When the door on your ${deviceName} won't latch, the most common causes are debris in the latch, a misaligned strike plate, or a worn latch spring. Cleaning and adjusting usually fixes it. A replacement latch is inexpensive if needed.`,
    temperature: `If your ${deviceName} is not getting the water hot enough, the built-in heating element may have failed, or your home water heater may be set too low. Running hot water at the sink before starting a cycle is a quick fix that often helps.`,
    dispenser: `When the soap dispenser on your ${deviceName} won't open, dried detergent buildup is the most common cause. A good cleaning fixes it most of the time. If the dispenser wax motor has failed, it's a cheap and easy replacement.`,
    residue: `White residue on dishes from your ${deviceName} is almost always caused by hard water mineral deposits. Using rinse aid, adjusting detergent amounts, and running a vinegar cleaning cycle usually eliminates the problem.`,
    "ice-maker": `When the ice maker in your ${brand} refrigerator stops working, the most common cause is a frozen or kinked water supply line. Check the water supply first — it is a free fix. If the water inlet valve or ice maker module has failed, both are affordable to replace.`,
    "fridge-warm": `When the freezer works but the fridge is warm on your ${brand} refrigerator, the evaporator fan or air damper is usually the problem. The fan blows cold air from the freezer into the fridge — if it stops working, the fridge warms up while the freezer stays cold.`,
    "runs-constantly": `A ${brand} refrigerator that runs non-stop is usually working harder than it should because of dirty condenser coils, a poor door seal, or incorrect temperature settings. Cleaning the coils is a free fix and the most common solution.`,
    "too-cold": `If your ${brand} refrigerator is freezing everything, the temperature setting may be too low, or the air damper between the freezer and fridge compartments may be stuck open. Start by checking the temperature dial — sometimes it just gets bumped.`,
    light: `The light in your ${brand} ${shortName} not working is usually just a burned-out bulb. Before replacing the bulb, check the door switch too — it is the button that detects when the door opens. Both are very easy, inexpensive fixes.`,
    "water-dispenser": `When the water dispenser on your ${brand} refrigerator stops working, the most common cause is a clogged water filter. Replacing the filter is the first thing to try. A frozen water supply line inside the fridge is the second most common cause.`,
    frost: `Frost buildup inside your ${brand} refrigerator usually means the defrost system has failed. The automatic defrost cycle normally melts any frost, but if the defrost heater, thermostat, or timer fails, frost accumulates and blocks airflow.`,
    sparking: `Sparking inside your ${brand} microwave is alarming but usually has a simple cause — metal inside the cavity, a damaged waveguide cover, or chipped interior paint. Stop the microwave immediately and check for these issues before using it again.`,
    buttons: `When the buttons on your ${brand} ${shortName} stop responding, a power reset fixes it about half the time. Check for child lock mode too. If the membrane switch behind the buttons has worn through, it is a moderate repair.`,
    display: `A blank or glitchy display on your ${brand} ${shortName} is often just a temporary glitch. A power cycle (unplug for 5 minutes) is the first thing to try. A loose ribbon cable connection is the second most common cause.`,
    turntable: `When the turntable in your ${brand} microwave stops spinning, the cause is usually a broken coupler or a burned-out turntable motor. Both are inexpensive parts. Food still cooks without the turntable, but it won't heat evenly.`,
    plate: `A broken turntable plate in your ${brand} microwave is an easy fix — just measure the diameter of the old plate and order a replacement. Universal plates are available if you cannot find a brand-specific one.`,
    "uneven-heating": `Uneven heating in your ${brand} oven is usually caused by a failing heating element, a broken convection fan, or incorrect rack placement. An oven thermometer helps you diagnose exactly what is going on.`,
    "self-clean": `When the self-clean function on your ${brand} oven won't start, the door lock mechanism is usually the issue. The oven won't begin the high-temperature cleaning cycle unless the door is securely locked.`,
    burner: `A burner that won't light on your ${brand} range is almost always caused by a dirty igniter or clogged burner ports. Food spills and grease coating the igniter prevent it from sparking properly. A good cleaning usually fixes this.`,
    "temp-inaccurate": `When your ${brand} oven temperature doesn't match what you set, the temperature sensor or calibration may be off. An oven thermometer is the best way to check. Most ${brand} ovens allow you to calibrate the temperature in the settings.`,
    broiler: `If the broiler in your ${brand} oven is not working, the broil element has likely burned out. You can confirm by turning on broil and watching the top element — it should glow bright red within a few minutes. Replacing it is straightforward.`,
    igniter: `Constant clicking from your ${brand} range is usually caused by moisture or food debris around the igniters. After a cleaning or a boil-over, the igniters can get wet and click continuously. Drying them out usually stops it.`,
    smoking: `A smoking ${brand} oven is most commonly caused by food or grease buildup on the bottom or heating elements. A thorough cleaning usually solves the problem. If the oven is brand new, a small amount of smoke during the first few uses is normal.`,
    "not-cooling": `When your ${brand} refrigerator stops cooling, dirty condenser coils are the most common cause. These coils release heat, and when coated in dust, the fridge cannot cool properly. Cleaning them is free and fixes the problem about 60% of the time.`,
  };

  return templates[cat] || `Your ${deviceName} ${symptomLower} issue is likely caused by a worn or faulty component. The steps below will help you diagnose and fix the most common causes.`;
}

function getAlternativeCauses(brand, shortName, symptom) {
  const cat = symptomCategory(symptom);
  const base = [
    `A faulty control board on your ${brand} ${shortName} could be the root cause, though this is less common.`,
    `Wiring issues between components — loose or corroded connections — can cause intermittent problems.`,
  ];

  const specific = {
    heating: [
      "A faulty high-limit thermostat can prevent the heating system from working.",
      `On gas models, the gas valve solenoids may need replacing.`,
    ],
    drain: [
      "A clogged standpipe or house drain where the hose connects could be restricting flow.",
      "The drain pump motor may be failing if you hear humming but water does not move.",
    ],
    leaking: [
      "The water pump seal may be worn, causing leaks from underneath.",
      "Oversudsing from too much detergent can cause water to overflow from unexpected places.",
    ],
    noise: [
      "A worn drive belt can cause squealing or squeaking noises.",
      "Foreign objects (coins, buttons) caught between the drum and tub cause clicking or scraping.",
    ],
  };

  return specific[cat] || base;
}

function getWhenToCallPro(brand, shortName, symptom) {
  const cat = symptomCategory(symptom);
  const cost = getCostEstimate(symptom);

  const defaults = {
    heating: `If replacing the thermal fuse and heating element does not fix your ${brand} ${shortName}, the main control board may be failing. Board replacement costs $100-$250 with parts and labor. Compare that to the cost of a new unit if yours is older than 8 years.`,
    "wont-start": `If a power reset, door switch check, and start switch replacement don't fix your ${brand} ${shortName}, the main control board may need replacing ($100-$200 with labor). Get a quote and compare to the cost of a new unit.`,
    leaking: `If you cannot find the source of the leak, or if the pump is leaking internally, a repair technician can diagnose it quickly. Most leak repairs cost $100-$200 with labor. If the tub or tank itself is cracked, replacement is usually more cost-effective than repair.`,
    drain: `If cleaning the filter and hose doesn't fix the drainage on your ${brand} ${shortName}, the drain pump motor may be burned out. A technician can replace it for $100-$200. If the control board is not sending the drain signal, that's a more expensive repair.`,
    noise: `If the noise gets worse or you hear grinding metal on metal, stop using your ${brand} ${shortName} to prevent further damage. Bearing replacement can cost $150-$300 with labor. If the motor is failing, compare repair cost to a new unit.`,
    sparking: `If your ${brand} microwave continues sparking after checking for metal, replacing the waveguide cover, and touching up paint, the magnetron or diode may be failing. Do not open the microwave cabinet — the capacitor holds a lethal charge. Call a professional or consider replacing the unit, as repair costs can approach the price of a new microwave.`,
  };

  return defaults[cat] || `If the steps above don't fix your ${brand} ${shortName}, a professional repair technician can diagnose the issue quickly. Most repairs cost $100-$250 including parts and labor. If your ${shortName} is older than 8-10 years, compare the repair estimate to the cost of a new one.`;
}

// ---------------------------------------------------------------------------
// MAIN GUIDE BUILDER
// ---------------------------------------------------------------------------

function buildGuide(brand, device, symptom) {
  const brandSlug = slugify(brand);
  const categorySlug = device.categorySlug;
  const symptomSlug = slugify(symptom);
  const shortName = device.shortName;
  const id = `${brandSlug}-${categorySlug}-${symptomSlug}`;
  const problemTitle = titleCase(symptom);
  const difficulty = getDifficulty(symptom);

  return {
    id,
    category: device.category,
    categorySlug,
    brand,
    brandSlug,
    problemSlug: symptomSlug,
    problemTitle,
    difficulty,
    timeEstimate: getTimeEstimate(symptom),
    costEstimate: getCostEstimate(symptom),
    toolsNeeded: getToolsNeeded(symptom, categorySlug),
    partsNeeded: getPartsNeeded(brand, shortName, symptom, categorySlug),
    safetyWarnings: safetyWarnings(categorySlug, symptom),
    quickDiagnosis: getQuickDiagnosis(brand, shortName, symptom, categorySlug),
    steps: getSteps(brand, shortName, symptom, categorySlug),
    alternativeCauses: getAlternativeCauses(brand, shortName, symptom),
    whenToCallPro: getWhenToCallPro(brand, shortName, symptom),
    metaTitle: `${brand} ${device.category.replace(" & ", " and ")} ${problemTitle}: How to Fix | RepairItFree`,
    metaDescription: `Fix your ${brand} ${device.category.toLowerCase()} that's ${symptom.toLowerCase()}. Step-by-step guide with parts and tools list. Difficulty: ${difficulty}. Cost: ${getCostEstimate(symptom)}. Save $150+ on repair costs.`,
  };
}

// ---------------------------------------------------------------------------
// COLLECT EXISTING IDS
// ---------------------------------------------------------------------------

function getExistingIds() {
  const srcDir = path.join(__dirname, "..", "src", "data");
  const ids = new Set();

  const files = fs.readdirSync(srcDir).filter((f) => f.startsWith("guides") && f.endsWith(".ts"));
  for (const file of files) {
    const content = fs.readFileSync(path.join(srcDir, file), "utf-8");
    const regex = /id:\s*"([^"]+)"/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      ids.add(m[1]);
    }
  }
  return ids;
}

// ---------------------------------------------------------------------------
// FILE WRITER
// ---------------------------------------------------------------------------

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function guideToTS(guide) {
  const lines = [];
  lines.push("  {");
  lines.push(`    id: "${escapeString(guide.id)}",`);
  lines.push(`    category: "${escapeString(guide.category)}",`);
  lines.push(`    categorySlug: "${escapeString(guide.categorySlug)}",`);
  lines.push(`    brand: "${escapeString(guide.brand)}",`);
  lines.push(`    brandSlug: "${escapeString(guide.brandSlug)}",`);
  lines.push(`    problemSlug: "${escapeString(guide.problemSlug)}",`);
  lines.push(`    problemTitle: "${escapeString(guide.problemTitle)}",`);
  lines.push(`    difficulty: "${guide.difficulty}",`);
  lines.push(`    timeEstimate: "${escapeString(guide.timeEstimate)}",`);
  lines.push(`    costEstimate: "${escapeString(guide.costEstimate)}",`);

  // toolsNeeded
  lines.push(`    toolsNeeded: [`);
  for (const t of guide.toolsNeeded) {
    lines.push(`      "${escapeString(t)}",`);
  }
  lines.push(`    ],`);

  // partsNeeded
  lines.push(`    partsNeeded: [`);
  for (const p of guide.partsNeeded) {
    lines.push(`      {`);
    lines.push(`        name: "${escapeString(p.name)}",`);
    lines.push(`        costRange: "${escapeString(p.costRange)}",`);
    lines.push(`        amazonUrl: "${escapeString(p.amazonUrl)}",`);
    lines.push(`        ebayUrl: "${escapeString(p.ebayUrl)}",`);
    lines.push(`      },`);
  }
  lines.push(`    ],`);

  // safetyWarnings
  lines.push(`    safetyWarnings: [`);
  for (const w of guide.safetyWarnings) {
    lines.push(`      "${escapeString(w)}",`);
  }
  lines.push(`    ],`);

  lines.push(`    quickDiagnosis: "${escapeString(guide.quickDiagnosis)}",`);

  // steps
  lines.push(`    steps: [`);
  for (const s of guide.steps) {
    lines.push(`      {`);
    lines.push(`        number: ${s.number},`);
    lines.push(`        title: "${escapeString(s.title)}",`);
    lines.push(`        description: "${escapeString(s.description)}",`);
    lines.push(`      },`);
  }
  lines.push(`    ],`);

  // alternativeCauses
  lines.push(`    alternativeCauses: [`);
  for (const a of guide.alternativeCauses) {
    lines.push(`      "${escapeString(a)}",`);
  }
  lines.push(`    ],`);

  lines.push(`    whenToCallPro: "${escapeString(guide.whenToCallPro)}",`);
  lines.push(`    metaTitle: "${escapeString(guide.metaTitle)}",`);
  lines.push(`    metaDescription: "${escapeString(guide.metaDescription)}",`);
  lines.push("  }");

  return lines.join("\n");
}

function writeChunk(guides, chunkIndex, outDir) {
  const padded = String(chunkIndex).padStart(3, "0");
  const varName = `matrixGuides${padded}`;
  const fileName = `guides-matrix-${padded}.ts`;
  const filePath = path.join(outDir, fileName);

  const content = [
    `import { Guide } from "@/lib/types";`,
    ``,
    `export const ${varName}: Guide[] = [`,
    guides.map(guideToTS).join(",\n"),
    `];`,
    ``,
  ].join("\n");

  fs.writeFileSync(filePath, content, "utf-8");
  return { fileName, varName, count: guides.length };
}

// ---------------------------------------------------------------------------
// UPDATE guides.ts
// ---------------------------------------------------------------------------

function updateGuidesTs(chunkMeta, guidesPath) {
  let content = fs.readFileSync(guidesPath, "utf-8");

  // Add imports after the last existing import
  const importLines = chunkMeta.map(
    (c) => `import { ${c.varName} } from "./${c.fileName.replace(".ts", "")}";`
  );
  const lastImportIdx = content.lastIndexOf("import ");
  const endOfLastImport = content.indexOf("\n", lastImportIdx) + 1;
  content =
    content.slice(0, endOfLastImport) +
    importLines.join("\n") +
    "\n" +
    content.slice(endOfLastImport);

  // Add spreads to the guides array
  const spreadLines = chunkMeta.map((c) => `  ...${c.varName},`).join("\n");

  // Insert before the closing ];
  const guidesArrayEnd = content.lastIndexOf("];");
  // Find the line before that
  const beforeEnd = content.lastIndexOf("\n", guidesArrayEnd - 1);
  content =
    content.slice(0, beforeEnd + 1) +
    spreadLines +
    "\n" +
    content.slice(beforeEnd + 1);

  fs.writeFileSync(guidesPath, content, "utf-8");
}

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------

function main() {
  console.log("Generating matrix guides...\n");

  const existingIds = getExistingIds();
  console.log(`Found ${existingIds.size} existing guide IDs.\n`);

  const allGuides = [];
  let skipped = 0;

  for (const device of DEVICES) {
    for (const brand of device.brands) {
      for (const symptom of device.symptoms) {
        const guide = buildGuide(brand, device, symptom);
        if (existingIds.has(guide.id)) {
          skipped++;
          continue;
        }
        allGuides.push(guide);
      }
    }
  }

  console.log(`Generated: ${allGuides.length}`);
  console.log(`Skipped (duplicates): ${skipped}\n`);

  if (allGuides.length === 0) {
    console.log("No new guides to write.");
    return;
  }

  // Split into chunks of 100
  const CHUNK_SIZE = 100;
  const outDir = path.join(__dirname, "..", "src", "data");
  const chunkMeta = [];

  for (let i = 0; i < allGuides.length; i += CHUNK_SIZE) {
    const chunk = allGuides.slice(i, i + CHUNK_SIZE);
    const chunkIndex = Math.floor(i / CHUNK_SIZE) + 1;
    const meta = writeChunk(chunk, chunkIndex, outDir);
    chunkMeta.push(meta);
    console.log(`Wrote ${meta.fileName} (${meta.count} guides)`);
  }

  // Update guides.ts
  const guidesPath = path.join(outDir, "guides.ts");
  updateGuidesTs(chunkMeta, guidesPath);
  console.log(`\nUpdated guides.ts with ${chunkMeta.length} new imports.\n`);

  console.log("=== SUMMARY ===");
  console.log(`Total generated: ${allGuides.length}`);
  console.log(`Total skipped: ${skipped}`);
  console.log(`Files written: ${chunkMeta.length} chunk files + guides.ts updated`);
}

main();
