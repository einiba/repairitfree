/**
 * Automated Guide Generation Script
 *
 * Reads guide-topics.json, picks the next 20 topics that don't already have
 * guide files, generates guide data using template strings, writes a new
 * batch file, and updates guides.ts imports.
 *
 * Usage: node scripts/generate-guides.js
 */

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const TOPICS_FILE = path.join(__dirname, "guide-topics.json");
const GUIDES_INDEX = path.join(DATA_DIR, "guides.ts");
const BATCH_SIZE = 20;

// ---------------------------------------------------------------------------
// Template data keyed by category slug — provides realistic repair content
// ---------------------------------------------------------------------------

const CATEGORY_TEMPLATES = {
  "washing-machines": {
    singularName: "Washing Machine",
    defaultDifficulty: "Medium",
    defaultTime: "30-60 minutes",
    defaultCost: "$0-$30",
    defaultTools: ["Phillips screwdriver", "Flathead screwdriver", "Towels", "Pliers"],
    defaultSafety: [
      "Unplug the washing machine before starting any repair.",
      "Turn off the water supply valves behind the machine.",
      "Have towels ready to catch any residual water.",
    ],
    defaultAlternatives: [
      "The control board may have a glitch — try unplugging the washer for 5 minutes to reset it.",
      "Wiring between components could be loose or damaged.",
      "The main control board may need replacement if simpler fixes don't work.",
    ],
    defaultProAdvice: "If you've tried the basic troubleshooting steps and the problem persists, there may be an issue with the main control board or motor. Board replacement runs $150-$300 with parts and labor. At that price, compare the repair cost to a new machine, especially if your washer is over 8 years old.",
  },
  "dryers": {
    singularName: "Dryer",
    defaultDifficulty: "Medium",
    defaultTime: "30-60 minutes",
    defaultCost: "$0-$40",
    defaultTools: ["Phillips screwdriver", "Nut driver (1/4 inch)", "Multimeter (optional)", "Vacuum with hose attachment"],
    defaultSafety: [
      "Unplug the dryer before working on it.",
      "If you have a gas dryer, turn off the gas supply line first.",
      "Let the dryer cool for 30 minutes before working inside it.",
    ],
    defaultAlternatives: [
      "A clogged lint vent is the #1 cause of dryer problems — clean it first.",
      "The cycling thermostat may be faulty.",
      "On gas dryers, the gas valve solenoids may need replacement.",
    ],
    defaultProAdvice: "If you have a gas dryer and aren't comfortable working near gas connections, call a professional. If basic parts replacement doesn't fix it, the control board may be faulty ($100-$200 for parts and labor).",
  },
  "dishwashers": {
    singularName: "Dishwasher",
    defaultDifficulty: "Easy",
    defaultTime: "15-45 minutes",
    defaultCost: "$0-$20",
    defaultTools: ["Towels", "Shallow pan", "Old toothbrush", "Phillips screwdriver"],
    defaultSafety: [
      "Turn off the dishwasher and unplug it or flip the circuit breaker before working on it.",
      "Have towels ready — there may be standing water inside.",
    ],
    defaultAlternatives: [
      "The drain pump may be clogged or failing.",
      "The spray arms could be blocked — remove and clean them.",
      "The water inlet valve may need replacement if water supply is the issue.",
    ],
    defaultProAdvice: "If cleaning filters, spray arms, and checking the drain hose doesn't fix it, the issue may be a faulty pump motor or control board. Professional repair runs $100-$200. Compare that to the cost of a new unit if yours is over 7 years old.",
  },
  "refrigerators": {
    singularName: "Refrigerator",
    defaultDifficulty: "Medium",
    defaultTime: "30-60 minutes",
    defaultCost: "$0-$40",
    defaultTools: ["Vacuum with hose attachment", "Coil brush", "Thermometer", "Phillips screwdriver"],
    defaultSafety: [
      "Unplug the refrigerator before accessing any internal components.",
      "Move perishable food to a cooler with ice while you work.",
    ],
    defaultAlternatives: [
      "Dirty condenser coils are the most common cause of cooling problems — clean them first.",
      "The evaporator fan may not be circulating cold air properly.",
      "The start relay on the compressor could be failing (you'll hear clicking sounds).",
    ],
    defaultProAdvice: "If the compressor isn't running or the evaporator coils are iced over, these are more complex repairs. Compressor replacement costs $300-$600 — at that price, compare with a new fridge. Defrost system repair is $150-$250.",
  },
  "iphones": {
    singularName: "iPhone",
    defaultDifficulty: "Easy",
    defaultTime: "5-20 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Toothpick or SIM eject tool", "Flashlight", "Microfiber cloth"],
    defaultSafety: [
      "Power off your iPhone before attempting any physical repair.",
      "Be gentle with all connectors and ports — the internal components are delicate.",
    ],
    defaultAlternatives: [
      "Try a hard restart: quickly press Volume Up, Volume Down, then hold the Side button until you see the Apple logo.",
      "Check for a pending iOS software update that may fix the issue.",
      "Reset all settings (Settings > General > Transfer or Reset > Reset All Settings) without losing data.",
    ],
    defaultProAdvice: "If software troubleshooting doesn't fix it, you may need a hardware repair. Apple charges $80-$300 depending on the issue. Third-party repair shops typically charge 30-50% less. If your phone is over 3 years old, compare repair costs to a refurbished replacement.",
  },
  "android-phones": {
    singularName: "Android Phone",
    defaultDifficulty: "Easy",
    defaultTime: "5-20 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Toothpick or SIM eject tool", "Flashlight", "Microfiber cloth"],
    defaultSafety: [
      "Power off your phone before attempting any physical repair.",
      "Be gentle when cleaning ports — you don't want to damage the pins inside.",
    ],
    defaultAlternatives: [
      "Try a force restart by holding Power + Volume Down for 10-15 seconds.",
      "Boot into Safe Mode to check if a third-party app is causing the issue.",
      "Check for a pending software update in Settings > System > Software Update.",
    ],
    defaultProAdvice: "If software troubleshooting doesn't fix it, you may need a hardware repair. Manufacturer repairs run $80-$250. Third-party shops are usually cheaper. If your phone is over 2-3 years old, compare repair costs to a new budget model.",
  },
  "tvs": {
    singularName: "TV",
    defaultDifficulty: "Easy",
    defaultTime: "10-30 minutes",
    defaultCost: "$0-$20",
    defaultTools: ["Phillips screwdriver", "Microfiber cloth", "Flashlight"],
    defaultSafety: [
      "Unplug the TV from the wall outlet before doing any physical troubleshooting.",
      "TVs contain capacitors that can hold a charge — never open the back panel unless you know what you're doing.",
    ],
    defaultAlternatives: [
      "Try a power cycle: unplug the TV, hold the power button on the TV itself for 30 seconds, wait 2 minutes, then plug back in.",
      "Check all HDMI cables and try different ports.",
      "Update the TV firmware through the settings menu if available.",
    ],
    defaultProAdvice: "If basic troubleshooting doesn't work, the issue may be a faulty power supply board or T-con board. Board replacement costs $100-$300 in parts, and repair labor adds another $100-$200. Given that a new 55-inch TV costs $300-$500, it often makes more sense to replace than repair.",
  },
  "laptops": {
    singularName: "Laptop",
    defaultDifficulty: "Medium",
    defaultTime: "15-45 minutes",
    defaultCost: "$0-$30",
    defaultTools: ["Phillips screwdriver (small)", "Compressed air", "Microfiber cloth", "Anti-static wrist strap (optional)"],
    defaultSafety: [
      "Shut down the laptop completely and unplug the charger before opening any panels.",
      "If possible, remove the battery before working inside the laptop.",
      "Ground yourself by touching a metal object to discharge static electricity.",
    ],
    defaultAlternatives: [
      "Try a hard reset: unplug the charger, remove the battery if possible, hold the power button for 30 seconds.",
      "Boot into Safe Mode to check if the issue is software-related.",
      "Check if an external monitor works to rule out screen vs. GPU issues.",
    ],
    defaultProAdvice: "If the motherboard or GPU is the issue, repair costs can run $200-$500. At that point, compare with the cost of a refurbished or new laptop. If your laptop is over 4-5 years old, replacement is usually the better investment.",
  },
  "game-consoles": {
    singularName: "Game Console",
    defaultDifficulty: "Medium",
    defaultTime: "15-45 minutes",
    defaultCost: "$0-$25",
    defaultTools: ["Phillips screwdriver", "Compressed air", "Microfiber cloth", "Isopropyl alcohol (90%+)"],
    defaultSafety: [
      "Unplug the console from power and disconnect all cables before starting.",
      "Let the console cool completely if it was recently in use.",
      "Opening the console may void your warranty — check your warranty status first.",
    ],
    defaultAlternatives: [
      "Try a full power cycle: unplug for 2 minutes, then plug back in.",
      "Check for system software updates.",
      "Try rebuilding the database or clearing the cache through recovery mode.",
    ],
    defaultProAdvice: "If the issue is with the disc drive, HDMI port, or power supply, professional repair runs $80-$200. Compare that to the cost of a refurbished console. If it's still under warranty, contact the manufacturer first.",
  },
  "microwaves": {
    singularName: "Microwave",
    defaultDifficulty: "Easy",
    defaultTime: "10-30 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Phillips screwdriver", "Multimeter (optional)", "Microfiber cloth"],
    defaultSafety: [
      "DANGER: Microwaves contain high-voltage capacitors that can hold a lethal charge even when unplugged. Never remove the outer cover.",
      "Unplug the microwave before any troubleshooting.",
      "Only perform the external troubleshooting steps described — internal repairs should be done by a professional.",
    ],
    defaultAlternatives: [
      "Check if the door latch is closing properly — the microwave won't run if it doesn't detect a closed door.",
      "Try a different outlet to rule out a power issue.",
      "Check if the turntable motor is working by listening for a humming sound.",
    ],
    defaultProAdvice: "Microwave internal repairs involve dangerous high-voltage components. If external troubleshooting doesn't fix it, a new microwave costs $80-$200 and is usually cheaper and safer than repair. Never attempt to open the microwave cover yourself.",
  },
  "ovens": {
    singularName: "Oven",
    defaultDifficulty: "Medium",
    defaultTime: "30-60 minutes",
    defaultCost: "$0-$40",
    defaultTools: ["Phillips screwdriver", "Multimeter", "Nut driver"],
    defaultSafety: [
      "Turn off the oven and unplug it, or flip the circuit breaker.",
      "For gas ovens, turn off the gas supply valve before any repair.",
      "Let the oven cool completely before working on it.",
    ],
    defaultAlternatives: [
      "The bake or broil element may be visibly damaged — look for breaks or blistering.",
      "The temperature sensor (thermistor) may need recalibration or replacement.",
      "The oven control board may have a fault.",
    ],
    defaultProAdvice: "If replacing the heating element or sensor doesn't work, the control board may need replacement ($100-$250). For gas ovens, if you smell gas or suspect a gas valve issue, call a professional immediately.",
  },
  "blenders": {
    singularName: "Blender",
    defaultDifficulty: "Easy",
    defaultTime: "10-20 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Phillips screwdriver", "Wrench or pliers", "Clean towel"],
    defaultSafety: [
      "Always unplug the blender before troubleshooting or disassembling.",
      "Be extremely careful handling blender blades — they are very sharp.",
    ],
    defaultAlternatives: [
      "The drive coupling (the part that connects the motor to the blade assembly) may be worn out.",
      "The motor may have overheated — let it cool for 30 minutes and try again.",
      "Check the lid interlock switch — many blenders won't run without the lid properly seated.",
    ],
    defaultProAdvice: "Most blender issues involve the blade assembly, drive coupling, or gasket — all cheap parts. If the motor itself has burned out (you'll smell a burning electrical smell), replacement is usually not worth it. A new blender of similar quality costs $40-$100.",
  },
  "toasters": {
    singularName: "Toaster",
    defaultDifficulty: "Easy",
    defaultTime: "10-20 minutes",
    defaultCost: "$0",
    defaultTools: ["Phillips screwdriver", "Soft brush or compressed air"],
    defaultSafety: [
      "Always unplug the toaster before cleaning or working on it.",
      "Never insert metal objects into a plugged-in toaster.",
      "Let the toaster cool completely before troubleshooting.",
    ],
    defaultAlternatives: [
      "Crumb buildup is the #1 cause of toaster issues — empty the crumb tray and shake out loose debris.",
      "The bread thickness setting may be causing the lever not to stay down.",
      "The heating elements may have an uneven crumb coating causing hot spots.",
    ],
    defaultProAdvice: "Most toasters cost $20-$50 to replace. If basic cleaning doesn't fix the issue, it's usually more cost-effective to buy a new one than to repair it.",
  },
  "instant-pots": {
    singularName: "Instant Pot",
    defaultDifficulty: "Easy",
    defaultTime: "10-20 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Clean cloth", "Warm soapy water"],
    defaultSafety: [
      "Never attempt to force open a pressurized Instant Pot.",
      "Always ensure the steam has fully released before opening the lid.",
      "Check the sealing ring and float valve before each use.",
    ],
    defaultAlternatives: [
      "The sealing ring may need to be replaced — they wear out every 12-18 months ($8-$12 for a new one).",
      "The float valve may be stuck or have food debris preventing it from sealing.",
      "The anti-block shield above the float valve may be clogged.",
    ],
    defaultProAdvice: "Most Instant Pot issues are caused by worn gaskets or dirty valves — cheap and easy fixes. If the heating element or control board has failed, replacement parts can be hard to find. A new Instant Pot costs $60-$100, which is usually more practical than a major repair.",
  },
  "coffee-makers": {
    singularName: "Coffee Maker",
    defaultDifficulty: "Easy",
    defaultTime: "15-30 minutes",
    defaultCost: "$0-$10",
    defaultTools: ["White vinegar", "Clean water", "Paper clip or needle", "Microfiber cloth"],
    defaultSafety: [
      "Unplug the coffee maker before any troubleshooting.",
      "Let the machine cool completely if it was recently used.",
      "Be careful with descaling solutions — follow the manufacturer's instructions.",
    ],
    defaultAlternatives: [
      "Mineral buildup (scale) is the #1 cause of coffee maker problems — run a descaling cycle.",
      "The water reservoir may not be seated properly.",
      "The needle that punctures pods may be clogged (for single-serve machines).",
    ],
    defaultProAdvice: "Most coffee maker issues are solved by descaling. If the heating element or pump has failed, a new machine is usually cheaper than repair. Budget coffee makers cost $30-$60, single-serve machines $60-$150.",
  },
  "vacuum-cleaners": {
    singularName: "Vacuum Cleaner",
    defaultDifficulty: "Easy",
    defaultTime: "10-30 minutes",
    defaultCost: "$0-$25",
    defaultTools: ["Phillips screwdriver", "Scissors (for cutting tangled hair)", "Compressed air"],
    defaultSafety: [
      "Unplug the vacuum (or remove the battery for cordless models) before any maintenance.",
      "Wear gloves when removing debris from the brush roll.",
    ],
    defaultAlternatives: [
      "A clogged filter is the most common cause of vacuum problems — clean or replace it.",
      "The hose may have a blockage — detach it and check for obstructions.",
      "Hair and string wrapped around the brush roll reduces cleaning performance.",
    ],
    defaultProAdvice: "Most vacuum issues are maintenance-related (filters, clogs, brush rolls). If the motor makes a burning smell or has stopped working, motor replacement is usually not cost-effective. A new vacuum of similar quality costs $100-$300.",
  },
  "air-conditioners": {
    singularName: "Air Conditioner",
    defaultDifficulty: "Medium",
    defaultTime: "20-45 minutes",
    defaultCost: "$0-$25",
    defaultTools: ["Fin comb", "Vacuum with brush attachment", "Garden hose", "Phillips screwdriver"],
    defaultSafety: [
      "Turn off the air conditioner and unplug it before any maintenance.",
      "Be careful around the aluminum fins — they are sharp and bend easily.",
      "Never attempt to recharge refrigerant yourself — this requires a licensed technician.",
    ],
    defaultAlternatives: [
      "A dirty air filter is the #1 cause of AC problems — clean or replace it first.",
      "The condenser coils may be dirty — clean them with a garden hose.",
      "The thermostat may not be set correctly or the sensor may be displaced.",
    ],
    defaultProAdvice: "If the compressor isn't running or you suspect a refrigerant leak, you'll need a licensed HVAC technician. Refrigerant recharge costs $150-$400. Compressor replacement on a window unit usually isn't worth it — a new unit costs $150-$500.",
  },
  "space-heaters": {
    singularName: "Space Heater",
    defaultDifficulty: "Easy",
    defaultTime: "10-20 minutes",
    defaultCost: "$0",
    defaultTools: ["Compressed air", "Soft brush", "Microfiber cloth"],
    defaultSafety: [
      "Unplug the space heater and let it cool completely before troubleshooting.",
      "Never cover a space heater or place objects on top of it.",
      "Keep space heaters at least 3 feet from any flammable materials.",
    ],
    defaultAlternatives: [
      "The heater may be overheating due to dust buildup — clean the intake vents.",
      "The tip-over safety switch may be triggered — place the heater on a flat, stable surface.",
      "The thermal cutoff may have tripped — unplug for 30 minutes then try again.",
    ],
    defaultProAdvice: "Space heaters are inexpensive ($20-$80) and contain high-voltage components. If basic cleaning and resetting doesn't fix the issue, replacing the heater is almost always safer and cheaper than repairing it.",
  },
  "car-electronics": {
    singularName: "Car Electronic Device",
    defaultDifficulty: "Medium",
    defaultTime: "20-45 minutes",
    defaultCost: "$0-$30",
    defaultTools: ["Phillips screwdriver", "Trim removal tools", "Multimeter", "Electrical tape"],
    defaultSafety: [
      "Disconnect the negative battery terminal before working on car electronics.",
      "Be careful not to short any wiring — this can blow fuses or damage components.",
      "Work in a well-lit area so you can see the wiring clearly.",
    ],
    defaultAlternatives: [
      "Check all fuses related to the audio/accessory system in the fuse box.",
      "Wiring connections may have come loose — check and reseat all connectors.",
      "The ground wire may have corroded — clean and reattach it.",
    ],
    defaultProAdvice: "If fuse and wiring checks don't solve the problem, the unit itself may need replacement. Car stereo installation at a shop runs $50-$150 for labor. For backup cameras and dashcams, a shop can diagnose wiring issues more easily with the proper tools.",
  },
  "lawn-mowers": {
    singularName: "Lawn Mower",
    defaultDifficulty: "Medium",
    defaultTime: "20-45 minutes",
    defaultCost: "$0-$25",
    defaultTools: ["Socket wrench set", "Spark plug wrench", "Flat screwdriver", "Clean rag"],
    defaultSafety: [
      "Always disconnect the spark plug wire (gas mowers) or remove the battery (electric mowers) before any work.",
      "Never tip a gas mower with the carburetor side down — oil will flood the air filter.",
      "Wear gloves when handling mower blades.",
    ],
    defaultAlternatives: [
      "Old or bad fuel is the #1 cause of starting problems — drain old fuel and add fresh gas.",
      "A dirty or fouled spark plug prevents ignition — replace it ($3-$5).",
      "The air filter may be clogged — clean or replace it.",
    ],
    defaultProAdvice: "If replacing the spark plug, air filter, and fresh fuel doesn't fix starting issues, the carburetor may need cleaning or rebuilding ($50-$100 at a shop). If the engine has major issues (seized, blown gasket), compare repair costs to a new mower ($200-$500).",
  },
  "leaf-blowers": {
    singularName: "Leaf Blower",
    defaultDifficulty: "Medium",
    defaultTime: "15-35 minutes",
    defaultCost: "$0-$20",
    defaultTools: ["Phillips screwdriver", "Spark plug wrench", "Compressed air", "Clean rag"],
    defaultSafety: [
      "For gas models, disconnect the spark plug wire before any work.",
      "For battery models, remove the battery before troubleshooting.",
      "Let the engine cool completely before working on it.",
    ],
    defaultAlternatives: [
      "Old fuel (gas models) is the most common starting issue — drain and replace.",
      "The spark plug may be fouled or worn out.",
      "The air filter may be clogged with dust and debris.",
    ],
    defaultProAdvice: "If basic maintenance doesn't fix a gas blower, the carburetor may need cleaning or adjustment ($40-$80 at a shop). For battery models, if the motor or controller has failed, replacement is usually more cost-effective. A new leaf blower costs $100-$300.",
  },
  "chainsaws": {
    singularName: "Chainsaw",
    defaultDifficulty: "Medium",
    defaultTime: "20-40 minutes",
    defaultCost: "$0-$20",
    defaultTools: ["Scrench (combination screwdriver/wrench)", "Spark plug wrench", "Flat file", "Bar groove cleaner"],
    defaultSafety: [
      "Always disconnect the spark plug wire before working on a chainsaw.",
      "Wear cut-resistant gloves when handling the chain.",
      "Never work on a chainsaw while it is running.",
      "Make sure the chain brake is engaged before performing any maintenance.",
    ],
    defaultAlternatives: [
      "Old or stale fuel mix is the #1 cause of starting problems — drain and replace with fresh 50:1 mix.",
      "The spark plug may be fouled or incorrectly gapped.",
      "The bar oil reservoir may be empty, causing the chain to bind.",
    ],
    defaultProAdvice: "Chainsaws are safety-critical tools. If you're not comfortable with engine repair, take it to a certified dealer. Carburetor cleaning or adjustment runs $40-$80. If the engine has major issues, a new chainsaw costs $200-$500.",
  },
  "printers": {
    singularName: "Printer",
    defaultDifficulty: "Easy",
    defaultTime: "10-30 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Lint-free cloth", "Isopropyl alcohol", "Compressed air"],
    defaultSafety: [
      "Turn off and unplug the printer before clearing paper jams or cleaning inside.",
      "Be careful around the print head — it gets hot during operation.",
    ],
    defaultAlternatives: [
      "Outdated or corrupted printer drivers are a common cause — reinstall them from the manufacturer's website.",
      "The print heads may need cleaning — use the built-in cleaning utility in printer settings.",
      "Paper quality matters — use the correct paper type for your printer.",
    ],
    defaultProAdvice: "Most printer problems are solvable with driver updates, head cleaning, and proper paper handling. If the print head or internal mechanism has failed, a new printer usually costs less than repair ($50-$200 for most home printers).",
  },
  "tablets": {
    singularName: "Tablet",
    defaultDifficulty: "Easy",
    defaultTime: "5-20 minutes",
    defaultCost: "$0-$10",
    defaultTools: ["Microfiber cloth", "Toothpick or SIM eject tool", "Flashlight"],
    defaultSafety: [
      "Power off the tablet before any physical troubleshooting.",
      "Be gentle when cleaning ports — internal components are delicate.",
    ],
    defaultAlternatives: [
      "Try a force restart: hold Power + Volume Down for 10-15 seconds.",
      "Check for available software updates.",
      "Try booting in Safe Mode to isolate the problem.",
    ],
    defaultProAdvice: "If software fixes don't work, you may need hardware repair. Screen replacements run $80-$200 depending on the model. Battery replacements are $50-$100. Compare repair costs to a refurbished replacement, especially for older models.",
  },
  "smart-speakers": {
    singularName: "Smart Speaker",
    defaultDifficulty: "Easy",
    defaultTime: "5-15 minutes",
    defaultCost: "$0",
    defaultTools: ["Microfiber cloth"],
    defaultSafety: [
      "Unplug the speaker before cleaning or resetting.",
    ],
    defaultAlternatives: [
      "Try a factory reset — this fixes most connectivity and responsiveness issues.",
      "Check your WiFi router — reboot it and make sure the speaker is within range.",
      "Make sure the companion app is up to date.",
    ],
    defaultProAdvice: "Smart speakers have no user-serviceable parts. If a factory reset and network troubleshooting don't fix the issue, contact the manufacturer for warranty replacement. Most smart speakers cost $30-$100 to replace.",
  },
  "wireless-headphones": {
    singularName: "Wireless Headphones",
    defaultDifficulty: "Easy",
    defaultTime: "5-15 minutes",
    defaultCost: "$0",
    defaultTools: ["Microfiber cloth", "Toothpick or soft brush", "Isopropyl alcohol"],
    defaultSafety: [
      "Don't use liquid cleaners inside the charging ports or speaker grilles.",
      "Be gentle when cleaning — the speaker mesh is delicate.",
    ],
    defaultAlternatives: [
      "Put the headphones back in the charging case for 30 seconds, then take them out to re-pair.",
      "Forget the device in your phone's Bluetooth settings, then re-pair from scratch.",
      "Check for firmware updates through the manufacturer's app.",
    ],
    defaultProAdvice: "Wireless headphones have limited repairability due to their small size and sealed construction. If cleaning, resetting, and re-pairing don't fix the issue, check your warranty. Most wireless headphones cost $50-$200 to replace.",
  },
  "garage-door-openers": {
    singularName: "Garage Door Opener",
    defaultDifficulty: "Medium",
    defaultTime: "15-30 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Step ladder", "Phillips screwdriver", "Replacement battery (CR2032 or similar)"],
    defaultSafety: [
      "Never stand or walk under a moving garage door.",
      "Disconnect the opener from power before working on the motor unit.",
      "The springs are under extreme tension — never attempt to adjust or replace them yourself.",
    ],
    defaultAlternatives: [
      "The remote battery may be dead — replace it first ($3-$5).",
      "The photo-eye sensors may be misaligned or dirty — clean and realign them.",
      "The travel limit switches may need adjustment.",
    ],
    defaultProAdvice: "If the motor, gear assembly, or springs need replacement, call a professional. Garage door springs are under extreme tension and can cause serious injury. Spring replacement costs $150-$350 with professional installation. A new opener unit costs $200-$500 installed.",
  },
  "water-heaters": {
    singularName: "Water Heater",
    defaultDifficulty: "Medium",
    defaultTime: "30-60 minutes",
    defaultCost: "$0-$30",
    defaultTools: ["Garden hose", "Phillips screwdriver", "Multimeter", "Adjustable wrench"],
    defaultSafety: [
      "Turn off the power (electric) or gas supply (gas) before any work.",
      "The water inside is scalding hot — let it cool or use extreme caution.",
      "For gas water heaters, if you smell gas, leave the area and call your gas company immediately.",
    ],
    defaultAlternatives: [
      "The thermostat may be set too low — check and adjust it (120°F is recommended).",
      "Sediment buildup in the tank reduces efficiency — flush the tank annually.",
      "The dip tube may be broken, mixing cold water with hot.",
    ],
    defaultProAdvice: "If the tank itself is leaking, it cannot be repaired and must be replaced. A new water heater installed costs $800-$2,000. If the unit is over 10 years old and having issues, replacement is usually the best option.",
  },
  "garbage-disposals": {
    singularName: "Garbage Disposal",
    defaultDifficulty: "Easy",
    defaultTime: "5-15 minutes",
    defaultCost: "$0-$10",
    defaultTools: ["Allen wrench (1/4 inch)", "Flashlight", "Tongs or pliers"],
    defaultSafety: [
      "NEVER put your hand inside a garbage disposal, even if it appears to be off.",
      "Turn off the wall switch and unplug the unit before doing anything.",
    ],
    defaultAlternatives: [
      "Press the reset button on the bottom of the unit — this fixes most 'won't turn on' issues.",
      "Use the Allen wrench in the bottom hex hole to manually free a jam.",
      "Check the wall switch and circuit breaker.",
    ],
    defaultProAdvice: "If the motor has completely burned out, a new disposal costs $80-$200 installed. Many homeowners can do the replacement themselves — it's not as hard as it looks.",
  },
  "power-tools": {
    singularName: "Power Tool",
    defaultDifficulty: "Medium",
    defaultTime: "15-30 minutes",
    defaultCost: "$0-$25",
    defaultTools: ["Phillips screwdriver", "Torx screwdriver set", "Compressed air", "Contact cleaner spray"],
    defaultSafety: [
      "Remove the battery or unplug the tool before any troubleshooting.",
      "Wear safety glasses when using compressed air.",
    ],
    defaultAlternatives: [
      "The battery contacts may be dirty — clean them with contact cleaner.",
      "The trigger switch may be worn out — a common wear item ($10-$20 part).",
      "The motor brushes may be worn (on brushed motors) — replaceable for $5-$15.",
    ],
    defaultProAdvice: "Most power tool brands offer authorized service centers. If the motor or electronics have failed, compare repair cost to a new tool. Many manufacturers offer reconditioned tools at 30-40% off retail.",
  },
  "string-trimmers": {
    singularName: "String Trimmer",
    defaultDifficulty: "Easy",
    defaultTime: "10-25 minutes",
    defaultCost: "$0-$15",
    defaultTools: ["Phillips screwdriver", "Replacement trimmer line", "Clean rag"],
    defaultSafety: [
      "For gas models, disconnect the spark plug wire before any work.",
      "For battery models, remove the battery before troubleshooting.",
      "Wear gloves when handling trimmer line and the cutting head.",
    ],
    defaultAlternatives: [
      "The trimmer line may be improperly wound — rewind it following the arrows on the spool.",
      "The bump feed mechanism may be worn or stuck.",
      "The air filter may be clogged (gas models).",
    ],
    defaultProAdvice: "String trimmers are generally affordable ($80-$200). If the motor or engine has failed, replacement is usually more cost-effective than repair.",
  },
  "pressure-washers": {
    singularName: "Pressure Washer",
    defaultDifficulty: "Medium",
    defaultTime: "15-30 minutes",
    defaultCost: "$0-$20",
    defaultTools: ["Phillips screwdriver", "Needle-nose pliers", "Garden hose", "Nozzle cleaning pin"],
    defaultSafety: [
      "Never point the spray wand at people or animals.",
      "Disconnect the spark plug (gas) or unplug (electric) before any maintenance.",
      "Release all pressure from the system before disconnecting hoses.",
    ],
    defaultAlternatives: [
      "The nozzle tip may be clogged — clean it with the included cleaning pin.",
      "The water inlet filter may be blocked — check and clean it.",
      "Air may be trapped in the pump — run water through without the pump engaged first.",
    ],
    defaultProAdvice: "If the pump has failed, replacement pumps cost $60-$150. For electric models, if the motor has burned out, a new unit is usually cheaper than repair ($100-$300).",
  },
  "soundbars": {
    singularName: "Soundbar",
    defaultDifficulty: "Easy",
    defaultTime: "10-20 minutes",
    defaultCost: "$0",
    defaultTools: ["HDMI cable (for testing)", "Optical cable (for testing)", "Microfiber cloth"],
    defaultSafety: [
      "Unplug the soundbar before resetting or reconnecting cables.",
    ],
    defaultAlternatives: [
      "Check the TV audio output settings — make sure it's set to external speakers or HDMI ARC.",
      "Try a different audio cable (HDMI ARC, optical, or aux).",
      "Power cycle both the TV and soundbar — unplug both for 2 minutes.",
    ],
    defaultProAdvice: "Soundbars have no user-serviceable internal parts. If cable and settings troubleshooting doesn't work, check your warranty. Most soundbars cost $100-$300 to replace.",
  },
  "streaming-devices": {
    singularName: "Streaming Device",
    defaultDifficulty: "Easy",
    defaultTime: "5-15 minutes",
    defaultCost: "$0",
    defaultTools: ["Microfiber cloth", "HDMI extension cable (optional)"],
    defaultSafety: [
      "Unplug the device before cleaning or resetting.",
    ],
    defaultAlternatives: [
      "Try a different HDMI port on your TV.",
      "Use an HDMI extension cable — the device may be overheating from being too close to the TV.",
      "Factory reset the device through the settings menu.",
    ],
    defaultProAdvice: "Streaming devices are inexpensive ($30-$60) and have no user-serviceable parts. If a factory reset doesn't fix the issue, replacement is the most practical option.",
  },
};

// ---------------------------------------------------------------------------
// Problem-specific template overrides
// ---------------------------------------------------------------------------

function getStepsForProblem(topic, template) {
  const { problem, brand, category, problemSlug } = topic;
  const singular = template.singularName;
  const brandName = brand === "Generic" ? "" : `${brand} `;

  // Error code problems
  if (problemSlug.includes("error-code") || problemSlug.match(/^[a-z0-9]+-error/) || problemSlug.match(/^[a-z][0-9]+$/) || problemSlug.match(/-e\d+$/) || problemSlug.match(/-f\d+/)) {
    return {
      quickDiagnosis: `The ${problem} on your ${brandName}${singular} is a diagnostic alert indicating a specific malfunction. In most cases, this error can be resolved with some basic troubleshooting steps that don't require professional help or expensive parts.`,
      steps: [
        { number: 1, title: "Power cycle the unit", description: `Unplug your ${brandName}${singular} from the wall outlet. Wait 2-3 minutes. This resets the internal computer and clears temporary error codes. Plug it back in and see if the error returns.` },
        { number: 2, title: "Check for obvious issues", description: `Look for anything unusual — blocked vents, loose connections, water where it shouldn't be, or unusual sounds. Many error codes are triggered by simple physical problems that are easy to spot.` },
        { number: 3, title: "Clean filters and accessible parts", description: `If your ${singular.toLowerCase()} has user-accessible filters, remove and clean them thoroughly. Clogged filters trigger many error codes. Rinse under running water and let dry completely before reinstalling.` },
        { number: 4, title: "Inspect connections and hoses", description: `Check all hoses, cables, and connections you can safely access. Look for kinks, clogs, loose fittings, or visible damage. Reconnect anything that looks loose.` },
        { number: 5, title: "Run a test cycle", description: `After cleaning and checking connections, run a short test cycle. If the error code has cleared, you've fixed the problem. If it returns, try repeating the power cycle one more time.` },
        { number: 6, title: "Document the error for a technician", description: `If the error persists, note exactly when it appears (start of cycle, mid-cycle, etc.) and any sounds or behaviors. This information helps a technician diagnose the issue much faster, saving you money on diagnostic fees.` },
      ],
    };
  }

  // "Not charging" problems
  if (problemSlug.includes("not-charging") || problemSlug.includes("wont-charge")) {
    return {
      quickDiagnosis: `When your ${brandName}${singular} won't charge, the most common causes are a dirty or obstructed charging port, a faulty cable, or a software glitch. Before assuming the worst, some simple troubleshooting can save you a trip to the repair shop.`,
      steps: [
        { number: 1, title: "Check the charging cable and adapter", description: `Try a different charging cable and power adapter. Cables wear out over time, especially near the connectors. Borrow one from someone if you need to. Also try a different wall outlet.` },
        { number: 2, title: "Clean the charging port", description: `Use a toothpick (wood or plastic, never metal) and shine a flashlight into the port. Gently remove any lint, dust, or debris. You'll be surprised how much gunk accumulates in there. This fixes the problem about 70% of the time.` },
        { number: 3, title: "Perform a hard restart", description: `Force restart your device by holding the power button (and volume button if applicable) for 15-30 seconds. Software glitches can sometimes prevent charging, and a hard restart clears them.` },
        { number: 4, title: "Check for physical damage", description: `Look closely at the charging port with a flashlight. Check for bent pins, corrosion, or loose parts. If you see damage, the port may need professional repair.` },
        { number: 5, title: "Let it charge for 30 minutes", description: `If the battery is completely drained, plug it in and wait at least 30 minutes before expecting any response. A deeply discharged battery needs time before it has enough power to turn on.` },
        { number: 6, title: "Try wireless charging if available", description: `If your device supports wireless charging, try that. If it charges wirelessly but not with a cable, the charging port hardware needs repair.` },
      ],
    };
  }

  // "Won't turn on / won't start" problems
  if (problemSlug.includes("wont-turn-on") || problemSlug.includes("wont-start") || problemSlug.includes("not-turning-on") || problemSlug.includes("not-starting")) {
    return {
      quickDiagnosis: `When your ${brandName}${singular} won't turn on, it's usually something simple — a power issue, a tripped safety switch, or a connection problem. Before panicking, work through these steps. Most of the time, the fix is free.`,
      steps: [
        { number: 1, title: "Check the power source", description: `Make sure the outlet is working by plugging in something else (like a lamp). Check if the power cord is fully plugged in at both ends. For battery-powered devices, make sure the battery is charged and properly seated.` },
        { number: 2, title: "Look for a reset button", description: `Many devices have a small reset button (often red or recessed). Check the bottom, back, or side of your ${singular.toLowerCase()}. Press it firmly. If it clicks, that may have been the problem.` },
        { number: 3, title: "Check the circuit breaker or fuse", description: `Go to your electrical panel and check if any breakers have tripped (they'll be in a middle position). Flip any tripped breakers fully off, then back on. For plug-in fuses, check if they need replacement.` },
        { number: 4, title: "Try a full power cycle", description: `Unplug the device completely. Wait 2-3 minutes. While unplugged, press and hold the power button for 30 seconds (this drains residual power). Plug it back in and try again.` },
        { number: 5, title: "Inspect the power cord and connections", description: `Look for frayed wires, bent prongs, loose connections, or burn marks on the plug. A damaged power cord is a common and inexpensive fix ($10-$20 for most replacement cords).` },
        { number: 6, title: "Test with a different outlet or power source", description: `Plug the device into a completely different outlet, preferably on a different circuit in your home. If it works on a different outlet, the problem is with your home's electrical, not the device.` },
      ],
    };
  }

  // "Not heating" problems
  if (problemSlug.includes("not-heating") || problemSlug.includes("not-heating-up") || problemSlug.includes("not-heating-food")) {
    return {
      quickDiagnosis: `When your ${brandName}${singular} isn't heating properly, the cause is usually a worn-out heating element, a tripped thermal safety device, or a clogged vent restricting airflow. Many of these issues are inexpensive to fix yourself.`,
      steps: [
        { number: 1, title: "Check the settings", description: `Double-check that the temperature and mode are set correctly. It sounds obvious, but incorrect settings are a surprisingly common cause of \"not heating\" complaints.` },
        { number: 2, title: "Inspect the vents and airflow", description: `Make sure all vents, filters, and airways are clean and unobstructed. Restricted airflow causes overheating, which triggers safety cutoffs that prevent heating.` },
        { number: 3, title: "Check for a thermal fuse or safety cutoff", description: `Many heating devices have a thermal fuse — a one-time safety device that blows when the unit overheats. If blown, it must be replaced ($5-$15). It's usually a small white or silver component near the heating element.` },
        { number: 4, title: "Inspect the heating element", description: `If you can safely access the heating element, look for visible damage — broken coils, scorch marks, or separation. A broken element needs replacement.` },
        { number: 5, title: "Test with a multimeter (optional)", description: `If you have a multimeter, test the heating element for continuity. No continuity means the element is broken and needs replacement. Also test the thermal fuse.` },
        { number: 6, title: "Clean and reassemble", description: `After checking everything, clean all accessible parts, reassemble, and test. Run a short cycle to see if heating has been restored.` },
      ],
    };
  }

  // "Leaking" problems
  if (problemSlug.includes("leaking") || problemSlug.includes("water-leak")) {
    return {
      quickDiagnosis: `A leak from your ${brandName}${singular} is usually caused by a loose connection, a worn gasket or seal, or a clogged drain. Finding and fixing the source of the leak is usually straightforward and inexpensive.`,
      steps: [
        { number: 1, title: "Identify where the leak is coming from", description: `Dry up any standing water, then place paper towels or newspaper around the base of the unit. Run a short cycle and watch carefully to identify exactly where the water is coming from. This is the most important step.` },
        { number: 2, title: "Check all hose connections", description: `Inspect every hose connection — inlet, outlet, and drain. Tighten any loose fittings by hand. Look for cracked or worn hoses that need replacement (usually $10-$20).` },
        { number: 3, title: "Inspect seals and gaskets", description: `Check the door seal, gaskets, and O-rings. Look for cracks, tears, warping, or buildup. Clean seals with warm soapy water. Replace any that are visibly damaged.` },
        { number: 4, title: "Check the drain system", description: `Make sure the drain isn't clogged. Clean any accessible filters or drain traps. A backup in the drain can cause water to overflow from unexpected places.` },
        { number: 5, title: "Level the unit", description: `If the unit isn't level, water can pool and leak from places it shouldn't. Use a bubble level on top and adjust the feet until it's even.` },
        { number: 6, title: "Test and monitor", description: `After making repairs, run a full cycle and watch for leaks. Place a dry towel underneath to easily spot any remaining drips.` },
      ],
    };
  }

  // "Screen" problems (flickering, cracked, black screen)
  if (problemSlug.includes("screen") || problemSlug.includes("display") || problemSlug.includes("black-screen") || problemSlug.includes("no-picture")) {
    return {
      quickDiagnosis: `Screen problems on your ${brandName}${singular} can range from simple software glitches to hardware issues. The good news is that many screen issues can be fixed without replacing the screen itself.`,
      steps: [
        { number: 1, title: "Perform a hard restart", description: `Turn the device completely off. For electronics, hold the power button for 15-30 seconds. Wait a minute, then turn it back on. This clears many software-related display issues.` },
        { number: 2, title: "Check all cable connections", description: `If applicable, check HDMI, display, and power cables. Unplug and firmly replug each one. Try different cables and different ports if available.` },
        { number: 3, title: "Adjust brightness and display settings", description: `The screen may be working but with incorrect settings. Try adjusting brightness. If using a remote, try pressing the Input or Source button to cycle through input sources.` },
        { number: 4, title: "Test with an external display", description: `If possible, connect to an external monitor or TV. If the external display works fine, the issue is with the device's screen specifically, not the graphics processor.` },
        { number: 5, title: "Check for physical damage", description: `Look closely at the screen for cracks, pressure marks, discoloration, or dead spots. Shine a flashlight at the screen — if you can faintly see the image, the backlight may have failed.` },
        { number: 6, title: "Update software/firmware", description: `If the device powers on but the display is acting up, check for software updates. Display glitches are sometimes caused by buggy software and fixed with an update.` },
      ],
    };
  }

  // "Noise" problems (squeaking, grinding, buzzing, crackling)
  if (problemSlug.includes("noise") || problemSlug.includes("squeak") || problemSlug.includes("grinding") || problemSlug.includes("crackling") || problemSlug.includes("buzzing") || problemSlug.includes("loud") || problemSlug.includes("humming")) {
    return {
      quickDiagnosis: `Unusual noises from your ${brandName}${singular} usually mean something is loose, worn, or obstructed. Identifying the type and location of the noise will point you to the cause.`,
      steps: [
        { number: 1, title: "Identify the type and location of the noise", description: `Listen carefully. Is it a squeak, grind, rattle, hum, or buzz? Where is it coming from — top, bottom, back, or sides? This tells you which component is the likely culprit.` },
        { number: 2, title: "Check for loose parts or foreign objects", description: `Turn off and unplug the device. Look for anything loose — screws, panels, or foreign objects that may have fallen inside. Remove any debris you find.` },
        { number: 3, title: "Clean moving parts", description: `Dust and debris on moving parts (fans, motors, rollers, belts) cause most noises. Clean all accessible moving components with compressed air and a soft cloth.` },
        { number: 4, title: "Check for worn components", description: `Inspect belts, bearings, rollers, and fans for signs of wear. Worn parts often look shiny, cracked, or misshapen. These are usually inexpensive to replace.` },
        { number: 5, title: "Level and stabilize the unit", description: `An uneven surface can cause vibration and noise. Make sure the device is on a level, stable surface. Adjust the leveling feet if available.` },
        { number: 6, title: "Test after each adjustment", description: `After each fix, run the device briefly and listen. This helps you pinpoint which specific issue was causing the noise.` },
      ],
    };
  }

  // "Battery" problems
  if (problemSlug.includes("battery")) {
    return {
      quickDiagnosis: `Battery problems with your ${brandName}${singular} are usually caused by a worn-out battery, a faulty charger, or software draining power in the background. Many battery issues can be improved with the right settings and habits.`,
      steps: [
        { number: 1, title: "Check the charger and cable", description: `Use the original charger and cable if possible. Try a different cable and outlet. Damaged or third-party chargers often can't deliver enough power.` },
        { number: 2, title: "Clean the charging contacts", description: `Inspect and clean all charging contacts, ports, or terminals. Use a dry toothbrush or cotton swab with isopropyl alcohol for metal contacts. Remove lint from ports with a toothpick.` },
        { number: 3, title: "Check battery health", description: `Most devices have a battery health indicator in the settings. If the battery health is below 80%, the battery is degraded and may need replacement.` },
        { number: 4, title: "Calibrate the battery", description: `Let the device run until it completely dies. Then charge it to 100% without interruption. This recalibrates the battery meter and can fix inaccurate readings.` },
        { number: 5, title: "Reduce power consumption", description: `Lower screen brightness, disable unused features (Bluetooth, WiFi, GPS), and close background apps. Check which apps are using the most battery in your settings.` },
        { number: 6, title: "Consider battery replacement", description: `If the battery is old (2+ years of heavy use) and calibration doesn't help, replacement is likely needed. Many batteries can be replaced for $20-$60, which is much cheaper than a new device.` },
      ],
    };
  }

  // "WiFi / Bluetooth / Connectivity" problems
  if (problemSlug.includes("wifi") || problemSlug.includes("bluetooth") || problemSlug.includes("connecting") || problemSlug.includes("pairing") || problemSlug.includes("disconnecting")) {
    return {
      quickDiagnosis: `Connectivity issues with your ${brandName}${singular} are almost always caused by software glitches, interference, or outdated firmware. These problems are usually fixable without any tools or parts.`,
      steps: [
        { number: 1, title: "Restart everything", description: `Turn off your ${singular.toLowerCase()}, your router (or the device it connects to), and wait 30 seconds. Turn the router on first, wait for it to fully boot (about 2 minutes), then turn on your device.` },
        { number: 2, title: "Forget and re-pair", description: `Go to your device's connection settings. Remove/forget the connection, then set it up again from scratch. This clears corrupted pairing data.` },
        { number: 3, title: "Check for interference", description: `Move the device closer to the router or paired device. Remove potential sources of interference — other electronics, thick walls, metal objects, and microwave ovens can all disrupt wireless signals.` },
        { number: 4, title: "Update firmware and software", description: `Check for updates on both your device and router/paired device. Connectivity bugs are commonly fixed in firmware updates.` },
        { number: 5, title: "Reset network settings", description: `If available, reset the network settings on your device. This clears all saved networks and connections, giving you a fresh start. You'll need to reconnect to all your networks afterward.` },
        { number: 6, title: "Factory reset as last resort", description: `If nothing else works, a factory reset will restore the device to default settings. Back up any important data first. This fixes software corruption that simpler resets can't.` },
      ],
    };
  }

  // "Suction / Pressure" problems
  if (problemSlug.includes("suction") || problemSlug.includes("pressure") || problemSlug.includes("power") || problemSlug.includes("pulsing") || problemSlug.includes("pulsating")) {
    return {
      quickDiagnosis: `Reduced performance from your ${brandName}${singular} is usually caused by a blockage, clogged filter, or worn component restricting flow. Most of these issues can be fixed with basic cleaning.`,
      steps: [
        { number: 1, title: "Check and clean the filter", description: `Remove and clean all filters. Wash them with water if the manufacturer allows it, and let them dry completely before reinstalling. A clogged filter is the most common cause of performance loss.` },
        { number: 2, title: "Check for blockages", description: `Inspect all hoses, nozzles, and openings for obstructions. Remove any debris, clogs, or buildup you find.` },
        { number: 3, title: "Empty the collection container", description: `Make sure the dust bin, bag, or tank isn't full. Many devices reduce performance automatically when the container is near capacity.` },
        { number: 4, title: "Inspect seals and gaskets", description: `Check all connection points for air or water leaks. Loose or cracked seals reduce performance significantly. Reseat or replace damaged seals.` },
        { number: 5, title: "Clean the intake and exhaust paths", description: `Use compressed air or a brush to clean the intake vents and exhaust areas. Built-up debris in these areas restricts flow and reduces performance.` },
        { number: 6, title: "Check for wear", description: `Inspect the brush roll, nozzle, pump, or motor for signs of wear. Worn components reduce performance gradually and may need replacement.` },
      ],
    };
  }

  // Default / catch-all steps
  return {
    quickDiagnosis: `This is a common issue with ${brandName}${singular.toLowerCase()}s and can usually be resolved with some basic troubleshooting. Before spending money on a repair, work through these steps — most people can fix this problem themselves.`,
    steps: [
      { number: 1, title: "Power cycle the device", description: `Turn off your ${brandName}${singular} completely. Unplug it from the power source if applicable. Wait 2-3 minutes, then plug it back in and turn it on. This clears many temporary glitches.` },
      { number: 2, title: "Check the basics", description: `Verify all connections are secure — power cords, cables, hoses, and accessories. Make sure the device is on a stable, level surface and has adequate ventilation.` },
      { number: 3, title: "Clean accessible components", description: `Clean all user-accessible parts — filters, vents, ports, and surfaces. Built-up dirt and debris cause a surprising number of device problems.` },
      { number: 4, title: "Inspect for visible damage", description: `Look the device over carefully for cracks, frayed wires, bent pins, worn gaskets, or other visible damage. Take note of anything unusual.` },
      { number: 5, title: "Reset to factory defaults if applicable", description: `If your device has a reset option, try it. Check the manual or manufacturer's website for the specific reset procedure for your model.` },
      { number: 6, title: "Test again and document results", description: `After troubleshooting, test the device. If the problem persists, write down exactly what happens — this information helps a technician diagnose the issue faster.` },
    ],
  };
}

function getPartsForProblem(topic, template) {
  const { brand, problemSlug } = topic;
  const singular = template.singularName;
  const searchBrand = brand === "Generic" ? "" : `${brand}+`;
  const searchDevice = singular.toLowerCase().replace(/ /g, "+");

  // Determine the main part based on problem type
  let partName, costRange, searchTerm;

  if (problemSlug.includes("not-charging") || problemSlug.includes("wont-charge") || problemSlug.includes("battery")) {
    partName = "Replacement Charging Cable";
    costRange = "$8-$15";
    searchTerm = `${searchBrand}${searchDevice}+charging+cable`;
  } else if (problemSlug.includes("filter") || problemSlug.includes("suction") || problemSlug.includes("not-draining")) {
    partName = "Replacement Filter";
    costRange = "$8-$20";
    searchTerm = `${searchBrand}${searchDevice}+replacement+filter`;
  } else if (problemSlug.includes("seal") || problemSlug.includes("leaking") || problemSlug.includes("gasket")) {
    partName = "Replacement Seal/Gasket";
    costRange = "$8-$15";
    searchTerm = `${searchBrand}${searchDevice}+replacement+seal+gasket`;
  } else if (problemSlug.includes("heating") || problemSlug.includes("thermal")) {
    partName = "Thermal Fuse";
    costRange = "$5-$12";
    searchTerm = `${searchBrand}${searchDevice}+thermal+fuse`;
  } else if (problemSlug.includes("screen") || problemSlug.includes("display")) {
    partName = `${brand} Screen Replacement Kit`;
    costRange = "$30-$80";
    searchTerm = `${searchBrand}${searchDevice}+screen+replacement`;
  } else {
    partName = `${brand} ${singular} Replacement Parts`;
    costRange = "$10-$30";
    searchTerm = `${searchBrand}${searchDevice}+replacement+parts`;
  }

  return [
    {
      name: partName,
      costRange: costRange,
      amazonUrl: `https://www.amazon.com/s?k=${searchTerm.replace(/ /g, "+")}&tag=repairitfree-20`,
      ebayUrl: `https://www.ebay.com/sch/i.html?_nkw=${searchTerm.replace(/ /g, "+")}&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1`,
    },
  ];
}

function getDifficultyForProblem(problemSlug) {
  if (problemSlug.includes("screen-replacement") || problemSlug.includes("battery-replacement") || problemSlug.includes("motherboard")) {
    return "Hard";
  }
  if (problemSlug.includes("error-code") || problemSlug.includes("not-charging") || problemSlug.includes("not-connecting") || problemSlug.includes("not-responding") || problemSlug.includes("not-pairing") || problemSlug.includes("wifi") || problemSlug.includes("bluetooth") || problemSlug.includes("remote")) {
    return "Easy";
  }
  return "Medium";
}

// ---------------------------------------------------------------------------
// Main script
// ---------------------------------------------------------------------------

function generateGuideId(topic) {
  const catSingular = topic.categorySlug.replace(/s$/, "").replace(/-s$/, "");
  return `${topic.brandSlug}-${catSingular}-${topic.problemSlug}`;
}

function getExistingGuideIds() {
  const ids = new Set();
  const files = fs.readdirSync(DATA_DIR);
  for (const file of files) {
    if (!file.endsWith(".ts")) continue;
    const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    const matches = content.matchAll(/id:\s*"([^"]+)"/g);
    for (const m of matches) {
      ids.add(m[1]);
    }
  }
  return ids;
}

function getNextBatchNumber() {
  const files = fs.readdirSync(DATA_DIR);
  let max = 1;
  for (const file of files) {
    const match = file.match(/guides-batch-(\d+)\.ts$/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > max) max = num;
    }
  }
  return max + 1;
}

function generateGuide(topic) {
  const template = CATEGORY_TEMPLATES[topic.categorySlug] || CATEGORY_TEMPLATES["laptops"];
  const singular = template.singularName;
  const brandName = topic.brand === "Generic" ? "" : `${topic.brand} `;
  const { quickDiagnosis, steps } = getStepsForProblem(topic, template);
  const difficulty = getDifficultyForProblem(topic.problemSlug);
  const parts = getPartsForProblem(topic, template);

  return {
    id: generateGuideId(topic),
    category: topic.category,
    categorySlug: topic.categorySlug,
    brand: topic.brand,
    brandSlug: topic.brandSlug,
    problemSlug: topic.problemSlug,
    problemTitle: topic.problem,
    difficulty,
    timeEstimate: template.defaultTime,
    costEstimate: template.defaultCost,
    toolsNeeded: template.defaultTools,
    partsNeeded: parts,
    safetyWarnings: template.defaultSafety,
    quickDiagnosis,
    steps,
    alternativeCauses: template.defaultAlternatives,
    whenToCallPro: template.defaultProAdvice,
    metaTitle: `${brandName}${singular} ${topic.problem} — Free Fix Guide | RepairItFree`,
    metaDescription: `Learn how to fix your ${brandName}${singular} ${topic.problem} yourself. Step-by-step guide with parts list and cost estimate. Difficulty: ${difficulty}. Save $150+.`,
  };
}

function escapeForTS(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function guideToTS(guide, indent = "  ") {
  const i = indent;
  const i2 = indent + "  ";
  const i3 = indent + "    ";

  let ts = `${i}{\n`;
  ts += `${i2}id: "${guide.id}",\n`;
  ts += `${i2}category: "${escapeForTS(guide.category)}",\n`;
  ts += `${i2}categorySlug: "${guide.categorySlug}",\n`;
  ts += `${i2}brand: "${escapeForTS(guide.brand)}",\n`;
  ts += `${i2}brandSlug: "${guide.brandSlug}",\n`;
  ts += `${i2}problemSlug: "${guide.problemSlug}",\n`;
  ts += `${i2}problemTitle: "${escapeForTS(guide.problemTitle)}",\n`;
  ts += `${i2}difficulty: "${guide.difficulty}",\n`;
  ts += `${i2}timeEstimate: "${guide.timeEstimate}",\n`;
  ts += `${i2}costEstimate: "${guide.costEstimate}",\n`;

  // toolsNeeded
  ts += `${i2}toolsNeeded: [\n`;
  for (const tool of guide.toolsNeeded) {
    ts += `${i3}"${escapeForTS(tool)}",\n`;
  }
  ts += `${i2}],\n`;

  // partsNeeded
  ts += `${i2}partsNeeded: [\n`;
  for (const part of guide.partsNeeded) {
    ts += `${i3}{\n`;
    ts += `${i3}  name: "${escapeForTS(part.name)}",\n`;
    ts += `${i3}  costRange: "${part.costRange}",\n`;
    if (part.amazonUrl) ts += `${i3}  amazonUrl: "${escapeForTS(part.amazonUrl)}",\n`;
    if (part.ebayUrl) ts += `${i3}  ebayUrl: "${escapeForTS(part.ebayUrl)}",\n`;
    ts += `${i3}},\n`;
  }
  ts += `${i2}],\n`;

  // safetyWarnings
  ts += `${i2}safetyWarnings: [\n`;
  for (const w of guide.safetyWarnings) {
    ts += `${i3}"${escapeForTS(w)}",\n`;
  }
  ts += `${i2}],\n`;

  // quickDiagnosis
  ts += `${i2}quickDiagnosis:\n`;
  ts += `${i3}"${escapeForTS(guide.quickDiagnosis)}",\n`;

  // steps
  ts += `${i2}steps: [\n`;
  for (const step of guide.steps) {
    ts += `${i3}{\n`;
    ts += `${i3}  number: ${step.number},\n`;
    ts += `${i3}  title: "${escapeForTS(step.title)}",\n`;
    ts += `${i3}  description:\n`;
    ts += `${i3}    "${escapeForTS(step.description)}",\n`;
    ts += `${i3}},\n`;
  }
  ts += `${i2}],\n`;

  // alternativeCauses
  ts += `${i2}alternativeCauses: [\n`;
  for (const c of guide.alternativeCauses) {
    ts += `${i3}"${escapeForTS(c)}",\n`;
  }
  ts += `${i2}],\n`;

  // whenToCallPro
  ts += `${i2}whenToCallPro:\n`;
  ts += `${i3}"${escapeForTS(guide.whenToCallPro)}",\n`;

  // meta
  ts += `${i2}metaTitle:\n`;
  ts += `${i3}"${escapeForTS(guide.metaTitle)}",\n`;
  ts += `${i2}metaDescription:\n`;
  ts += `${i3}"${escapeForTS(guide.metaDescription)}",\n`;

  ts += `${i}}`;
  return ts;
}

function main() {
  // Load topics
  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, "utf-8"));
  console.log(`Loaded ${topics.length} topics from guide-topics.json`);

  // Find existing guide IDs
  const existingIds = getExistingGuideIds();
  console.log(`Found ${existingIds.size} existing guide IDs`);

  // Filter to topics that don't already have guides
  const pendingTopics = topics.filter((t) => !existingIds.has(generateGuideId(t)));
  console.log(`${pendingTopics.length} topics still need guides`);

  if (pendingTopics.length === 0) {
    console.log("All topics already have guides. Nothing to generate.");
    return;
  }

  // Take the next batch
  const batch = pendingTopics.slice(0, BATCH_SIZE);
  const batchNumber = getNextBatchNumber();
  const batchPadded = String(batchNumber).padStart(3, "0");
  const batchFileName = `guides-batch-${batchPadded}.ts`;
  const exportName = `batch${batchPadded}Guides`;

  console.log(`\nGenerating batch ${batchPadded} with ${batch.length} guides...`);

  // Generate guides
  const guides = batch.map((t) => generateGuide(t));

  // Write batch file
  let fileContent = `import { Guide } from "@/lib/types";\n\n`;
  fileContent += `export const ${exportName}: Guide[] = [\n`;
  for (let i = 0; i < guides.length; i++) {
    fileContent += guideToTS(guides[i]);
    fileContent += ",\n";
  }
  fileContent += `];\n`;

  const batchFilePath = path.join(DATA_DIR, batchFileName);
  fs.writeFileSync(batchFilePath, fileContent, "utf-8");
  console.log(`Wrote ${batchFilePath}`);

  // Update guides.ts to import and include the new batch
  let guidesTs = fs.readFileSync(GUIDES_INDEX, "utf-8");

  // Add import line after the last import
  const importLine = `import { ${exportName} } from "./${batchFileName.replace(".ts", "")}";`;
  const lastImportIdx = guidesTs.lastIndexOf("import ");
  const lastImportEnd = guidesTs.indexOf("\n", lastImportIdx);
  guidesTs = guidesTs.slice(0, lastImportEnd + 1) + importLine + "\n" + guidesTs.slice(lastImportEnd + 1);

  // Add spread into the guides array — find the last ...xxxGuides entry
  const spreadPattern = /(\.\.\.\w+Guides),?\n/g;
  let lastSpreadMatch;
  let m;
  while ((m = spreadPattern.exec(guidesTs)) !== null) {
    lastSpreadMatch = m;
  }

  if (lastSpreadMatch) {
    const insertPos = lastSpreadMatch.index + lastSpreadMatch[0].length;
    const spreadLine = `  ...${exportName},\n`;
    guidesTs = guidesTs.slice(0, insertPos) + spreadLine + guidesTs.slice(insertPos);
  }

  fs.writeFileSync(GUIDES_INDEX, guidesTs, "utf-8");
  console.log(`Updated ${GUIDES_INDEX}`);

  console.log(`\nDone! Generated ${guides.length} new guides in batch ${batchPadded}.`);
  console.log(`Remaining topics: ${pendingTopics.length - batch.length}`);
}

main();
