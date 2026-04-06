import { Guide } from "@/lib/types";

export const hvacGuides: Guide[] = [
  // ============================================================
  // AC / FURNACE
  // ============================================================
  {
    id: "window-ac-not-cooling",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "window-ac-not-cooling",
    problemTitle: "Window AC Not Cooling",
    difficulty: "Easy",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Screwdriver (Phillips)",
      "Soft brush or vacuum with brush attachment",
      "Spray bottle with water",
      "Fin comb (optional)",
    ],
    partsNeeded: [
      {
        name: "Reusable AC Filter (if filter is damaged)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=window+ac+unit+filter+reusable&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=window+ac+unit+filter+reusable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the window AC unit before cleaning or doing any work on it.",
      "Be careful around the sharp metal fins on the coils — they can cut you.",
      "Never spray water directly onto electrical components.",
    ],
    quickDiagnosis:
      "A window AC that runs but does not cool is almost always a dirty filter or dirty coils. When the filter gets clogged with dust, airflow drops and the unit cannot cool your room. A quick cleaning usually brings it back to life.",
    steps: [
      {
        number: 1,
        title: "Unplug the unit",
        description:
          "Pull the power cord from the wall outlet. Wait about 5 minutes before starting work. This gives the system time to equalize pressure, which protects the compressor when you turn it back on later.",
      },
      {
        number: 2,
        title: "Remove and clean the air filter",
        description:
          "Pop open the front panel and slide out the filter. Most window AC filters are reusable mesh screens. Rinse the filter under warm running water and gently scrub off dust with your fingers or a soft brush. Let it air dry completely before putting it back. If the filter is torn or falling apart, replace it.",
      },
      {
        number: 3,
        title: "Clean the front evaporator coils",
        description:
          "With the filter out, look at the metal fins behind it — these are the evaporator coils. If they are coated in dust or grime, gently vacuum them with a brush attachment or spray them lightly with water. Do not bend the fins. If any fins are bent, a fin comb can straighten them out.",
      },
      {
        number: 4,
        title: "Check the rear condenser coils",
        description:
          "The back of the unit (the part that sticks outside) has another set of coils. If you can safely access it, brush off leaves, dirt, and debris. Good airflow on the back coils is just as important as the front. Make sure nothing is blocking the rear of the unit.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Put the dry filter back in and snap the front panel closed. Plug the unit in, set it to the coldest setting, and let it run for 15 minutes. You should feel noticeably colder air coming out. If the air is still warm, the unit may be low on refrigerant or the compressor may be failing.",
      },
    ],
    alternativeCauses: [
      "Room is too large for the BTU rating of the unit",
      "Refrigerant leak (unit will need professional recharge or replacement)",
      "Compressor is failing (you may hear clicking but no cold air)",
      "Thermostat sensor is bent away from the coils",
    ],
    whenToCallPro:
      "If cleaning the filter and coils does not help, the unit may be low on refrigerant. Window AC units are sealed systems and cannot be easily recharged. In most cases it is cheaper to replace the unit than to pay for a refrigerant recharge. If the compressor clicks but never starts, the unit is likely at end of life.",
    metaTitle:
      "Window AC Not Cooling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a window AC that is not cooling. Usually a dirty filter or coils. Step-by-step guide. Difficulty: Easy. Takes about 20 minutes.",
  },
  {
    id: "window-ac-leaking-water-inside",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "window-ac-leaking-water-inside",
    problemTitle: "Window AC Leaking Water Inside",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Level (or smartphone level app)",
      "Towels",
      "Small brush or pipe cleaner",
    ],
    partsNeeded: [
      {
        name: "Foam window seal kit (if seal is damaged)",
        costRange: "$6–$10",
        amazonUrl:
          "https://www.amazon.com/s?k=window+ac+foam+seal+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=window+ac+foam+seal+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the unit before doing any work.",
      "Wipe up pooled water immediately to avoid floor damage or slipping.",
      "Use caution when adjusting the unit in the window — have someone help if it is heavy.",
    ],
    quickDiagnosis:
      "When a window AC drips water inside your room, the most common cause is that the unit is tilted forward instead of slightly backward. AC units are designed to drain condensation out the back. A simple tilt adjustment usually stops the leak right away.",
    steps: [
      {
        number: 1,
        title: "Unplug the unit and mop up water",
        description:
          "Pull the plug from the wall. Use towels to soak up any water on the floor or windowsill. This prevents water damage and keeps the area safe while you work.",
      },
      {
        number: 2,
        title: "Check the tilt of the unit",
        description:
          "Place a level on top of the unit from front to back. The back of the unit (the side facing outside) should be slightly lower than the front — about half an inch. This lets condensation drain out the rear. If the unit is level or tilted forward, that is your problem.",
      },
      {
        number: 3,
        title: "Adjust the tilt",
        description:
          "Most window AC brackets have adjustable legs or support arms. Raise the front or lower the back until you get a slight backward tilt. If there are no adjustable legs, you can place a small shim (a piece of wood or a folded cardboard strip) under the front edge of the unit inside the window frame.",
      },
      {
        number: 4,
        title: "Clear the drain hole",
        description:
          "Look at the bottom-rear of the unit for a small drain hole or channel. Over time, dust and algae can clog it. Use a pipe cleaner or small brush to clear it out. Some units have a drain plug — if yours does, make sure it is not fully sealed when you want water to drain freely.",
      },
      {
        number: 5,
        title: "Check the window seal",
        description:
          "If hot humid air is leaking in around the unit, it creates extra condensation that overwhelms the drain system. Make sure the foam side panels and top seal are snug against the window frame with no gaps. Replace the foam if it is compressed or torn.",
      },
      {
        number: 6,
        title: "Plug in and monitor",
        description:
          "Plug the unit back in and run it for an hour. Check for dripping every 15 minutes. The leak should be gone. If water still drips inside, the drain pan inside the unit may be cracked, which is a harder fix.",
      },
    ],
    alternativeCauses: [
      "Clogged drain hole or drain channel at the rear of the unit",
      "Cracked or rusted internal drain pan",
      "Very high humidity causing excessive condensation",
      "Air gaps around the window seal letting humid air inside",
    ],
    whenToCallPro:
      "If adjusting the tilt and clearing the drain does not stop the leak, the internal drain pan may be cracked. Replacing it is not easy on most window units. At that point, a new unit is often more cost-effective than a repair.",
    metaTitle:
      "Window AC Leaking Water Inside — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a window AC that leaks water inside. Usually a tilt or drain problem. Step-by-step guide. Difficulty: Easy. Takes 15-30 minutes.",
  },
  {
    id: "central-ac-not-turning-on",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "central-ac-not-turning-on",
    problemTitle: "Central AC Not Turning On",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "Multimeter (optional but helpful)",
      "Screwdriver (Phillips and flathead)",
    ],
    partsNeeded: [
      {
        name: "AC Capacitor (if capacitor is blown)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=ac+run+capacitor+35%2F5+370+440+vac&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ac+run+capacitor+35+5+370+440+vac&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Contactor (if contactor is pitted)",
        costRange: "$10–$18",
        amazonUrl:
          "https://www.amazon.com/s?k=ac+contactor+2+pole+30+amp&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ac+contactor+2+pole+30+amp&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the breaker for the AC system before opening any panels on the outdoor unit.",
      "AC capacitors store a lethal electrical charge even after power is off. Do not touch capacitor terminals with bare hands or metal tools. Discharge it with an insulated screwdriver across the terminals before handling.",
      "If you are not comfortable working around high-voltage electrical parts, call a pro. This is one repair where safety comes first.",
      "Never bypass safety switches or fuses.",
    ],
    quickDiagnosis:
      "When your central AC will not turn on at all, start with the simple stuff: the thermostat, the breaker, and the disconnect switch. About half the time it is one of these easy fixes. If those check out, a blown capacitor in the outdoor unit is the next most likely cause.",
    steps: [
      {
        number: 1,
        title: "Check the thermostat",
        description:
          "Make sure the thermostat is set to Cool mode, the temperature is set below the current room temperature, and the fan is set to Auto. Try turning it off, waiting 30 seconds, and turning it back on. If the screen is blank, replace the batteries. If you have a smart thermostat, check that it has not lost Wi-Fi or entered a setup mode.",
      },
      {
        number: 2,
        title: "Check the breakers",
        description:
          "Go to your electrical panel. Central AC systems usually have two breakers — one for the indoor air handler or furnace and one for the outdoor condensing unit. Make sure both are fully in the ON position. If a breaker is tripped (in the middle position), flip it all the way off, then back on. If it trips again immediately, do not keep resetting it — call an electrician.",
      },
      {
        number: 3,
        title: "Check the outdoor disconnect switch",
        description:
          "Near your outdoor AC unit, there is a small metal or plastic box on the wall — the disconnect switch. Open it and make sure the handle or fuse block is in the ON position. Sometimes these get bumped off accidentally. If it uses fuses, check that they are not blown.",
      },
      {
        number: 4,
        title: "Check the condensate drain safety switch",
        description:
          "Many systems have a safety float switch on the condensate drain line. If the drain line is clogged and the drain pan fills up, this switch shuts the system down to prevent water damage. Look for a small switch near the indoor unit's drain pan. If the pan has water in it, clear the clog in the drain line (you can use a wet/dry vacuum on the outdoor end of the line).",
      },
      {
        number: 5,
        title: "Inspect the capacitor (advanced)",
        description:
          "If everything above checks out, the run capacitor in the outdoor unit may be blown. Turn off the breaker, then remove the side panel on the outdoor unit. The capacitor is a small silver or black cylinder. If it is swollen on top, leaking oil, or has a crack, it is bad and needs to be replaced. Match the exact microfarad (uF) and voltage rating printed on the old one. This is a common and affordable fix, but handle capacitors with great care.",
      },
    ],
    alternativeCauses: [
      "Bad contactor in the outdoor unit (contacts are pitted or stuck open)",
      "Blown fuse in the disconnect box",
      "Faulty thermostat wiring or a bad thermostat",
      "Compressor overload tripped due to overheating (may reset after cooling)",
    ],
    whenToCallPro:
      "If the breaker trips repeatedly, do not keep resetting it — you may have a short in the wiring or a grounded compressor. If the compressor hums but does not start, or if you are not comfortable working around capacitors and high-voltage wiring, call an HVAC technician. Expect to pay $100–$300 for a service call depending on the issue.",
    metaTitle:
      "Central AC Not Turning On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a central AC that will not turn on. Check the thermostat, breakers, disconnect, and capacitor. Step-by-step guide. Difficulty: Medium.",
  },
  {
    id: "central-ac-blowing-warm-air",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "central-ac-blowing-warm-air",
    problemTitle: "Central AC Blowing Warm Air",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Garden hose with spray nozzle",
      "Screwdriver (Phillips)",
      "New air filter (correct size for your system)",
    ],
    partsNeeded: [
      {
        name: "HVAC Air Filter (your system's size)",
        costRange: "$5–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=hvac+air+filter+merv+8&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=hvac+air+filter+merv+8&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the system at the thermostat before cleaning the outdoor unit.",
      "Turn off the breaker to the outdoor unit before removing any panels.",
      "Do not use a pressure washer on the outdoor coils — it will damage the fins.",
    ],
    quickDiagnosis:
      "If your central AC is running but only blowing room-temperature or warm air, the most common causes are a dirty air filter, a dirty outdoor unit, or a refrigerant issue. Start with the filter and outdoor unit cleaning — these are free fixes that solve the problem more often than you might think.",
    steps: [
      {
        number: 1,
        title: "Check and replace the air filter",
        description:
          "Find the air filter in the return air vent or at the air handler. Slide it out and hold it up to a light. If you cannot see light through it, it is too dirty. Replace it with a new filter of the same size. A clogged filter starves the system of airflow and can cause it to blow warm air.",
      },
      {
        number: 2,
        title: "Make sure the thermostat is set correctly",
        description:
          "Double-check that the thermostat is in Cool mode (not Heat or Fan Only). Also check that the fan is set to Auto, not On. When the fan is set to On, it blows air continuously — even when the compressor is not running — which feels like warm air between cooling cycles.",
      },
      {
        number: 3,
        title: "Inspect the outdoor unit",
        description:
          "Go outside and look at your AC condenser. Clear away any leaves, grass clippings, or debris within 2 feet of the unit. Make sure the fan on top is spinning when the system is running. If the fan is not spinning, the capacitor or fan motor may be bad.",
      },
      {
        number: 4,
        title: "Clean the outdoor coils",
        description:
          "Turn off the system at the thermostat and the breaker. Use a garden hose to spray the condenser coils from the inside out (spray outward through the fins). Work your way around the unit. This removes built-up dirt and pollen that blocks heat transfer. Let it dry for 10 minutes before turning the system back on.",
      },
      {
        number: 5,
        title: "Check the refrigerant lines",
        description:
          "Look at the two copper lines that run from the outdoor unit to the indoor unit. The larger line (suction line) should be cold and sweating with condensation when the system is running. If it is warm or dry, the system may be low on refrigerant. Only a licensed HVAC tech can add refrigerant.",
      },
    ],
    alternativeCauses: [
      "Low refrigerant from a leak in the system",
      "Failed compressor (outdoor unit hums but no cold air)",
      "Stuck or failed reversing valve (heat pump systems)",
      "Ductwork leak in the attic or crawlspace losing cold air",
    ],
    whenToCallPro:
      "If cleaning the filter and outdoor unit does not bring back cold air, the system is likely low on refrigerant or the compressor is struggling. Refrigerant work requires EPA certification and special tools. An HVAC tech can diagnose and recharge the system for $150–$400 depending on the refrigerant type and leak severity.",
    metaTitle:
      "Central AC Blowing Warm Air — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a central AC blowing warm air instead of cold. Check the filter, outdoor unit, and refrigerant lines. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "ac-freezing-up-ice-on-coils",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "ac-freezing-up-ice-on-coils",
    problemTitle: "AC Freezing Up / Ice on Coils",
    difficulty: "Medium",
    timeEstimate: "2-4 hours (including thaw time)",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "New air filter (correct size)",
      "Towels",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "HVAC Air Filter",
        costRange: "$5–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=hvac+air+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=hvac+air+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the AC immediately when you see ice forming. Running it while frozen can damage the compressor.",
      "Place towels around the indoor unit — a lot of water will drip as the ice melts.",
      "Do not try to chip ice off the coils. Let it melt naturally or use fan-only mode to speed it up.",
    ],
    quickDiagnosis:
      "Ice on your AC coils means airflow is restricted or refrigerant is low. The evaporator coil gets too cold, and moisture in the air freezes onto it. The number one cause is a dirty air filter. You need to thaw the system first, then fix the root cause.",
    steps: [
      {
        number: 1,
        title: "Turn off the cooling immediately",
        description:
          "Switch the thermostat to Off or Fan Only. Running the AC while the coils are frozen can cause serious compressor damage. Set the fan to On (not Auto) so it blows room-temperature air over the coils and helps them thaw faster.",
      },
      {
        number: 2,
        title: "Let the ice thaw completely",
        description:
          "Place towels around the indoor unit to catch water. Depending on how much ice has built up, this can take 1 to 4 hours. Do not skip this step. The coils need to be completely ice-free before you turn the system back on.",
      },
      {
        number: 3,
        title: "Check and replace the air filter",
        description:
          "While the ice is melting, check the air filter. A clogged filter is the cause of frozen coils about 70% of the time. If it is dirty, replace it. Going forward, check your filter once a month during heavy-use seasons.",
      },
      {
        number: 4,
        title: "Inspect the return vents and ductwork",
        description:
          "Make sure all return air vents in your home are open and not blocked by furniture, curtains, or rugs. Closed or blocked vents reduce airflow just like a dirty filter. Also check that any dampers in the ductwork are open.",
      },
      {
        number: 5,
        title: "Restart and monitor",
        description:
          "Once the ice is fully melted and you have a clean filter, switch the thermostat back to Cool. Run the system for 30 minutes and then check the coils again. If ice starts forming again, the problem is likely low refrigerant and you will need a professional.",
      },
    ],
    alternativeCauses: [
      "Low refrigerant from a leak",
      "Blower motor running too slow or failing",
      "Collapsed or kinked ductwork restricting airflow",
      "Running the AC when outdoor temperature is below 60°F",
      "Dirty evaporator coils",
    ],
    whenToCallPro:
      "If the ice comes back after you replace the filter and confirm good airflow, the system is most likely low on refrigerant due to a leak. A technician will need to find and repair the leak, then recharge the system. Expect $200–$500 depending on the severity of the leak.",
    metaTitle:
      "AC Freezing Up / Ice on Coils — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix an AC that is freezing up with ice on the coils. Thaw the system and address the root cause. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "furnace-not-turning-on",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "furnace-not-turning-on",
    problemTitle: "Furnace Not Turning On",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Flashlight",
      "Screwdriver (Phillips and flathead)",
      "New air filter (your system's size)",
    ],
    partsNeeded: [
      {
        name: "Furnace Ignitor (if ignitor is cracked)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=universal+furnace+ignitor+hot+surface&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=universal+furnace+ignitor+hot+surface&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you smell gas, do not flip any switches or light any flames. Leave the house immediately and call your gas company from outside.",
      "Turn off the power switch on or near the furnace before opening any panels.",
      "If your furnace has a standing pilot light, be very careful around the open flame.",
      "Never bypass the furnace door safety switch. The switch is there to protect you.",
    ],
    quickDiagnosis:
      "A furnace that will not turn on is often caused by something simple: a tripped breaker, a switched-off power switch, a dirty filter, or a failed ignitor. Before assuming the worst, walk through the basics. Many homeowners pay for a service call only to find out the power switch was off.",
    steps: [
      {
        number: 1,
        title: "Check the thermostat",
        description:
          "Make sure the thermostat is set to Heat, the temperature is set above the current room temperature, and the fan is set to Auto. If the screen is blank, replace the batteries. Try turning the heat up 5 degrees above room temperature to trigger the system.",
      },
      {
        number: 2,
        title: "Check the power switch and breaker",
        description:
          "Most furnaces have a power switch that looks like a regular light switch, located on or near the unit. Make sure it is in the ON position. Also check your electrical panel for the furnace breaker — reset it if it is tripped. For gas furnaces, also make sure the gas valve (usually a yellow handle on the gas line near the furnace) is open (handle parallel to the pipe).",
      },
      {
        number: 3,
        title: "Check the air filter",
        description:
          "A completely clogged filter can cause some furnaces to shut down as a safety measure. Pull out the filter and inspect it. If it is packed with dust, replace it. This one simple fix solves more furnace problems than people realize.",
      },
      {
        number: 4,
        title: "Look at the furnace error codes",
        description:
          "Most modern furnaces have a small LED light visible through a peephole on the front panel. The light blinks in a pattern that tells you what is wrong. Check the code chart on the inside of the panel door. Common codes indicate ignition failure, pressure switch errors, or limit switch lockouts.",
      },
      {
        number: 5,
        title: "Inspect the ignitor",
        description:
          "If the furnace tries to start but never fires up, the hot surface ignitor may be cracked. Turn off the power, remove the front panel, and locate the ignitor near the burner assembly. It is a small ceramic piece with a tip that glows orange when working. If it is visibly cracked or broken, it needs to be replaced. Ignitors are fragile — do not touch the element with bare fingers (oils from your skin can cause it to crack when heated).",
      },
    ],
    alternativeCauses: [
      "Clogged condensate drain (high-efficiency furnaces)",
      "Faulty flame sensor (furnace lights briefly then shuts off)",
      "Bad pressure switch or blocked inducer motor",
      "Control board failure",
    ],
    whenToCallPro:
      "If you smell gas and cannot find the source, leave the house and call the gas company immediately. For issues beyond the basics — like control board problems, pressure switch failures, or anything involving gas line work — call a licensed HVAC technician. Expect $100–$300 for a typical service call.",
    metaTitle:
      "Furnace Not Turning On — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a furnace that will not turn on. Check the thermostat, power, filter, and ignitor. Step-by-step guide. Difficulty: Medium.",
  },
  {
    id: "furnace-blowing-cold-air",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "furnace-blowing-cold-air",
    problemTitle: "Furnace Blowing Cold Air",
    difficulty: "Medium",
    timeEstimate: "20-40 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Screwdriver (Phillips)",
      "Flashlight",
      "Fine-grit sandpaper or emery cloth",
    ],
    partsNeeded: [
      {
        name: "Flame Sensor Rod (if cleaning does not fix it)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=universal+furnace+flame+sensor&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=universal+furnace+flame+sensor&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you smell gas at any point, stop what you are doing, leave the house, and call the gas company.",
      "Turn off the furnace power switch before opening panels or working on any components.",
      "Let the furnace cool down before touching internal parts — the heat exchanger and other parts can burn you.",
    ],
    quickDiagnosis:
      "When your furnace blows air but it is not warm, the burners are either not lighting or they light briefly then shut off. The most common fix is cleaning the flame sensor — a small metal rod that tells the control board the burners are lit. When it gets dirty, the furnace lights for a few seconds and then shuts down, leaving only the blower running.",
    steps: [
      {
        number: 1,
        title: "Check the thermostat settings",
        description:
          "Make sure the thermostat is set to Heat and the fan is set to Auto (not On). When the fan is set to On, it runs continuously even when the burners are off. This blows unheated air and feels cold. Switching to Auto so the fan only runs during heating cycles may fix the problem immediately.",
      },
      {
        number: 2,
        title: "Check the air filter",
        description:
          "A very dirty filter can cause the furnace to overheat. When the furnace overheats, the high-limit switch shuts off the burners but the blower keeps running to cool things down. Pull out the filter and replace it if it is dirty. This is a common overlooked cause.",
      },
      {
        number: 3,
        title: "Watch the burner ignition sequence",
        description:
          "Turn the furnace back on and watch through the viewing window. You should see the ignitor glow, then the burners light. If the burners light for a few seconds and then go out while the blower keeps running, the flame sensor is almost certainly dirty.",
      },
      {
        number: 4,
        title: "Clean the flame sensor",
        description:
          "Turn off the furnace power switch. Remove the front panel. The flame sensor is a thin metal rod (usually with a single wire attached) positioned near the burner flames. Remove the single screw holding it, pull it out, and gently sand the metal rod with fine-grit sandpaper or emery cloth until it is shiny. Do not use regular sandpaper that leaves grit behind. Put it back and tighten the screw.",
      },
      {
        number: 5,
        title: "Reassemble and test",
        description:
          "Put the panel back on, turn on the power switch, and set the thermostat to call for heat. Watch the ignition cycle again. The burners should light and stay lit this time. Give it a few minutes and you should feel warm air coming from the vents. If the burners still cut out, the flame sensor itself may need to be replaced.",
      },
    ],
    alternativeCauses: [
      "Dirty or cracked ignitor that is not lighting the gas",
      "Gas valve not fully open",
      "Cracked heat exchanger (dangerous — produces cold spots and can leak carbon monoxide)",
      "Control board malfunction",
    ],
    whenToCallPro:
      "If cleaning the flame sensor does not solve it, or if you see any cracks in the heat exchanger, call a technician right away. A cracked heat exchanger can leak carbon monoxide into your home — this is a serious safety issue. Also call a pro if the gas valve seems to be the problem, as gas work should only be done by licensed professionals. Expect $100–$250 for a service call.",
    metaTitle:
      "Furnace Blowing Cold Air — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a furnace that blows cold air. Usually a dirty flame sensor or thermostat setting. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "furnace-short-cycling",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "furnace-short-cycling",
    problemTitle: "Furnace Short Cycling (Turns On and Off Repeatedly)",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$20",
    toolsNeeded: [
      "New air filter (correct size)",
      "Flashlight",
      "Screwdriver (Phillips)",
    ],
    partsNeeded: [
      {
        name: "HVAC Air Filter",
        costRange: "$5–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=hvac+air+filter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=hvac+air+filter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you smell gas at any time, leave the house and call the gas company.",
      "Turn off the furnace power switch before inspecting any internal parts.",
      "Short cycling can indicate a cracked heat exchanger, which is a carbon monoxide risk. Make sure your CO detectors are working.",
    ],
    quickDiagnosis:
      "Short cycling means your furnace turns on, runs for just a few minutes, shuts off, and then repeats. The most common cause is a clogged air filter that makes the furnace overheat. The safety switch shuts it down, it cools off, then it tries again. Replacing the filter often stops the cycle.",
    steps: [
      {
        number: 1,
        title: "Replace the air filter immediately",
        description:
          "This is the cause of short cycling more often than anything else. Pull the filter out. If it is dirty, put in a new one. Even if it does not look terrible, try a fresh filter. A partially clogged filter can still restrict enough air to trigger the high-limit switch. Run the furnace for 20 minutes after replacing it to see if the cycling stops.",
      },
      {
        number: 2,
        title: "Check all supply and return vents",
        description:
          "Walk through your house and make sure every supply vent and return vent is open and unblocked. Closed vents restrict airflow and can overheat the furnace just like a dirty filter. Do not close more than 20% of your vents, even in unused rooms.",
      },
      {
        number: 3,
        title: "Check the exhaust vent (flue pipe)",
        description:
          "For high-efficiency furnaces, check the PVC exhaust pipes that vent outside your house. Make sure they are not blocked by snow, ice, leaves, or bird nests. A blocked exhaust will cause the pressure switch to shut the furnace down.",
      },
      {
        number: 4,
        title: "Look at the flame sensor",
        description:
          "If the furnace lights and then shuts down within 5–10 seconds, the flame sensor is likely dirty. See the flame sensor cleaning steps in our 'Furnace Blowing Cold Air' guide. A dirty flame sensor is one of the most common causes of short cycling after dirty filters.",
      },
      {
        number: 5,
        title: "Check the thermostat location",
        description:
          "If the thermostat is near a heat source (a sunny window, a lamp, a kitchen) it may be reading the room as warmer than it really is, causing the furnace to shut off too soon. Also check that the thermostat is firmly mounted to the wall — a loose thermostat can give bad readings.",
      },
    ],
    alternativeCauses: [
      "Oversized furnace for the home (too much BTU capacity)",
      "Cracked heat exchanger triggering the high-limit switch",
      "Faulty high-limit switch that trips too early",
      "Bad inducer motor or pressure switch",
      "Thermostat wiring issue",
    ],
    whenToCallPro:
      "If a new filter and open vents do not stop the short cycling, you may have a cracked heat exchanger or a faulty safety switch. A cracked heat exchanger is a serious carbon monoxide hazard — do not ignore this. Call an HVAC tech for a full inspection. Expect $100–$300 for diagnosis and repair.",
    metaTitle:
      "Furnace Short Cycling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a furnace that turns on and off repeatedly (short cycling). Usually a dirty filter or airflow problem. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "thermostat-not-working-blank-screen",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "thermostat-not-working-blank-screen",
    problemTitle: "Thermostat Not Working / Blank Screen",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Small level",
      "Screwdriver (Phillips)",
      "AA or AAA batteries (depending on model)",
    ],
    partsNeeded: [
      {
        name: "Thermostat Batteries (AA or AAA)",
        costRange: "$3–$8",
        amazonUrl:
          "https://www.amazon.com/s?k=AA+batteries+thermostat&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=AA+batteries+thermostat&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Basic Programmable Thermostat (if replacement needed)",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=programmable+thermostat&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=programmable+thermostat&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the breaker to the HVAC system before removing the thermostat from the wall.",
      "Low-voltage thermostat wires (24V) are not usually dangerous, but turning off the breaker prevents accidental shorts that could blow the control board fuse.",
      "Do not let bare thermostat wires touch each other when the system is powered on.",
    ],
    quickDiagnosis:
      "A blank thermostat screen is almost always dead batteries. If your thermostat uses batteries, swap them first — this fixes it about 80% of the time. If it does not have batteries (powered by the HVAC system), check the breaker and the tiny fuse on the furnace control board.",
    steps: [
      {
        number: 1,
        title: "Replace the batteries",
        description:
          "Pull the thermostat straight off the wall plate. Most models have a battery compartment on the back or inside the unit. Replace the batteries with fresh ones. Put the thermostat back on the wall plate and wait 30 seconds. The screen should come on. If your thermostat does not use batteries, skip to the next step.",
      },
      {
        number: 2,
        title: "Check the HVAC breaker",
        description:
          "If the thermostat is powered by the HVAC system (no batteries), go to your electrical panel and make sure the furnace or air handler breaker is on. Also check the power switch on or near the furnace itself. No power to the furnace means no power to the thermostat.",
      },
      {
        number: 3,
        title: "Check the fuse on the control board",
        description:
          "Open the front panel of the furnace and locate the control board. There is usually a small glass fuse (3 amp or 5 amp) on the board. If the fuse is blown (the tiny wire inside is broken or the glass is blackened), replace it with the same type. Fuses are available at any hardware store for under a dollar. If it blows again immediately, there is a wiring short that needs professional diagnosis.",
      },
      {
        number: 4,
        title: "Inspect the thermostat wiring",
        description:
          "Turn off the breaker. Gently pull the thermostat off the wall plate. Check that all wires are firmly connected to their terminals and none have come loose. Common wires: R (red, power), W (white, heat), Y (yellow, cooling), G (green, fan), C (blue, common). Reconnect any loose wires and make sure no bare copper is touching another wire.",
      },
      {
        number: 5,
        title: "Test and reset",
        description:
          "Put the thermostat back on, turn on the breaker, and check the screen. If it is still blank after new batteries, a good fuse, and solid wiring, the thermostat itself may be dead. Replacing a basic thermostat is straightforward — just match the wires to the labeled terminals on the new one.",
      },
    ],
    alternativeCauses: [
      "Blown fuse on the furnace control board",
      "Loose or corroded thermostat wiring",
      "Tripped furnace breaker or power switch",
      "Faulty thermostat (internal failure)",
      "Missing C-wire causing intermittent power issues with smart thermostats",
    ],
    whenToCallPro:
      "If the fuse on the control board keeps blowing, there is a short circuit in the thermostat wiring or the HVAC system. Do not keep replacing fuses — call an HVAC tech to trace the wiring and find the short. Expect $75–$200 for a diagnostic visit.",
    metaTitle:
      "Thermostat Not Working / Blank Screen — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a thermostat with a blank screen. Usually dead batteries or a blown fuse. Difficulty: Easy. Step-by-step guide. Takes about 10 minutes.",
  },
  {
    id: "mini-split-not-heating",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "mini-split-not-heating",
    problemTitle: "Mini Split Not Heating",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Soft cloth or microfiber towel",
      "Garden hose (for outdoor unit)",
      "Flashlight",
    ],
    partsNeeded: [
      {
        name: "Mini Split Remote Control (if remote is the issue)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=universal+mini+split+remote+control&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=universal+mini+split+remote+control&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the mini split at the breaker before cleaning the indoor or outdoor unit.",
      "Never poke anything sharp into the indoor unit while it is running.",
      "If the outdoor unit is covered in a thick layer of ice in winter, do not try to chip it off — let the defrost cycle handle it or pour lukewarm (not hot) water on it.",
    ],
    quickDiagnosis:
      "Mini splits are heat pumps, which means they pull heat from the outdoor air and bring it inside. When it is very cold outside, they have to work harder and periodically run a defrost cycle. If your mini split is not heating, it may be in defrost mode, have dirty filters, or be set to the wrong mode on the remote.",
    steps: [
      {
        number: 1,
        title: "Check the remote control settings",
        description:
          "Make sure the remote is set to Heat mode (sun icon), not Cool (snowflake) or Fan. Set the temperature above the current room temperature. Point the remote directly at the indoor unit and press the buttons firmly — weak batteries can cause the signal to not reach the unit. Replace the remote batteries if the display is dim.",
      },
      {
        number: 2,
        title: "Wait for the defrost cycle",
        description:
          "Mini splits run a defrost cycle when ice builds up on the outdoor unit. During defrost, the indoor unit stops blowing warm air for 5–15 minutes. This is normal. If the outdoor unit has ice on the coils and you hear it running, just wait for the cycle to complete. The heating should resume on its own.",
      },
      {
        number: 3,
        title: "Clean the indoor filters",
        description:
          "Lift the front panel of the indoor unit and slide out the mesh filters. Wash them under warm water and let them dry. Dirty filters block airflow and reduce heating performance significantly. Clean these filters every 2–4 weeks during heavy use.",
      },
      {
        number: 4,
        title: "Check the outdoor unit",
        description:
          "Go outside and make sure the outdoor unit is not buried in snow, covered in leaves, or blocked by anything within 2 feet. Clear away any debris. If the coils are dirty, gently rinse them with a garden hose (when temperatures are above freezing). Good airflow on the outdoor unit is critical for heating performance.",
      },
      {
        number: 5,
        title: "Reset the system",
        description:
          "Turn off the mini split at the breaker. Wait 5 minutes. Turn it back on. This resets the control board and can clear minor electronic glitches. After it restarts, set it to Heat mode and give it 10–15 minutes to start producing warm air.",
      },
    ],
    alternativeCauses: [
      "Outdoor temperature is below the unit's rated heating range (check the manual)",
      "Refrigerant leak reducing heating capacity",
      "Failed reversing valve (stuck in cooling mode)",
      "Dirty outdoor coils reducing heat absorption",
      "Control board or sensor failure",
    ],
    whenToCallPro:
      "If the mini split runs but never produces warm air after trying these steps, the reversing valve may be stuck or there may be a refrigerant leak. Both require a licensed HVAC tech with the right tools and refrigerant certifications. Expect $150–$400 for diagnosis and repair.",
    metaTitle:
      "Mini Split Not Heating — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a mini split that is not heating. Check remote settings, defrost cycle, and filters. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "portable-ac-not-cooling",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "portable-ac-not-cooling",
    problemTitle: "Portable AC Not Cooling",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Vacuum with brush attachment",
      "Shallow pan or bucket",
      "Soft cloth",
    ],
    partsNeeded: [
      {
        name: "Portable AC Exhaust Hose (if hose is damaged)",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=portable+ac+exhaust+hose+5+inch&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=portable+ac+exhaust+hose+5+inch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the unit before cleaning or doing any maintenance.",
      "When draining the internal water tank, have a shallow pan ready to catch the water.",
      "Do not block the exhaust hose or disconnect it while the unit is running.",
    ],
    quickDiagnosis:
      "Portable AC units struggle more than other types because they are less efficient by design. If yours is running but not cooling, the most common issues are a full water tank, a dirty filter, a kinked exhaust hose, or the room is just too big for the unit's BTU rating. The good news is most of these are easy to fix.",
    steps: [
      {
        number: 1,
        title: "Drain the water tank",
        description:
          "Most portable ACs collect condensation in an internal tank. When the tank is full, many units stop cooling or shut down entirely. Check for a drain plug on the back or bottom of the unit. Place a shallow pan underneath, remove the plug, and let the water drain out. Some units have a continuous drain option where you can attach a hose.",
      },
      {
        number: 2,
        title: "Clean the air filters",
        description:
          "Find the filter behind the rear or side intake grille. Slide it out and vacuum off the dust, or rinse it under warm water and let it dry. A clogged filter drastically reduces cooling power. Clean the filter every 2 weeks when using the unit regularly.",
      },
      {
        number: 3,
        title: "Check the exhaust hose",
        description:
          "The hot air exhaust hose must be properly connected to the window kit and venting outside. Make sure the hose is as short and straight as possible — every bend and extra foot of hose reduces efficiency. If the hose is kinked, cracked, or disconnected, fix or replace it. Hot air leaking back into the room cancels out the cooling.",
      },
      {
        number: 4,
        title: "Seal the window opening",
        description:
          "Check the window adapter panel where the exhaust hose vents outside. Make sure there are no gaps around the panel where hot air can sneak back in. Use foam tape or cardboard to seal any openings. Even a small gap makes a big difference with portable units.",
      },
      {
        number: 5,
        title: "Check the room size vs BTU rating",
        description:
          "Portable ACs are rated in BTUs. A 8,000 BTU unit handles about 200 square feet. If your room is bigger than what the unit is rated for, it will run constantly and never cool the room down. Also close doors and windows to keep hot air from coming in. If the room gets direct afternoon sun, close the blinds — that makes a surprisingly big difference.",
      },
    ],
    alternativeCauses: [
      "Compressor is failing (unit runs but no cold air at all)",
      "Refrigerant leak (unit was dropped or damaged)",
      "Thermostat sensor malfunction",
      "Unit placed too close to a wall, blocking intake airflow",
    ],
    whenToCallPro:
      "Portable AC units are generally not worth repairing if the compressor fails or there is a refrigerant leak. The cost of professional repair often exceeds the cost of a new unit. If basic cleaning and hose fixes do not work, it may be time for a replacement.",
    metaTitle:
      "Portable AC Not Cooling — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a portable AC that is not cooling. Check the water tank, filter, and exhaust hose. Difficulty: Easy. Step-by-step guide.",
  },
  {
    id: "ac-making-loud-noise",
    category: "HVAC",
    categorySlug: "hvac",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "ac-making-loud-noise",
    problemTitle: "AC Making Loud Noise",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Screwdriver (Phillips and flathead)",
      "Flashlight",
      "Work gloves",
      "Socket wrench set (for fan blade bolts)",
    ],
    partsNeeded: [
      {
        name: "AC Condenser Fan Motor (if motor is failing)",
        costRange: "$40–$80",
        amazonUrl:
          "https://www.amazon.com/s?k=ac+condenser+fan+motor+universal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ac+condenser+fan+motor+universal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Compressor Sound Blanket (to reduce noise)",
        costRange: "$15–$25",
        amazonUrl:
          "https://www.amazon.com/s?k=ac+compressor+sound+blanket&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ac+compressor+sound+blanket&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the breaker to the AC system before inspecting the outdoor unit.",
      "Never stick your hand inside the outdoor unit while the fan is spinning.",
      "Wear work gloves — fan blades and metal edges inside the unit are sharp.",
      "A screaming or hissing noise from the compressor may mean high refrigerant pressure. Turn the unit off and call a pro.",
    ],
    quickDiagnosis:
      "AC noises usually tell you exactly what is wrong. A rattling sound often means loose hardware or debris. A buzzing sound points to electrical issues or a failing contactor. A screeching or squealing sound usually means a bad fan motor bearing. Identifying the type of noise helps you find the fix fast.",
    steps: [
      {
        number: 1,
        title: "Identify the noise type and location",
        description:
          "Stand near the AC and listen carefully. Is the noise coming from the outdoor unit or the indoor unit? Is it a rattle, buzz, screech, hum, or banging? A rattle usually means something loose. A screech means a motor bearing. A buzz often means an electrical component. A banging sound can mean a loose or broken part inside the compressor.",
      },
      {
        number: 2,
        title: "Check for debris in the outdoor unit",
        description:
          "Turn off the breaker. Remove the top grille or fan guard on the outdoor condenser. Look inside for sticks, leaves, or small objects that may have fallen in and are hitting the fan blade. Remove any debris. While you are in there, check that the fan blade is not cracked, chipped, or loose on its shaft.",
      },
      {
        number: 3,
        title: "Tighten loose screws and panels",
        description:
          "Vibration can loosen screws on the unit panels, fan guard, and mounting hardware over time. Go around the outdoor unit and tighten any loose screws. Check the mounting bolts on rubber isolation pads under the unit. Also check the indoor unit's blower compartment for loose screws or panels.",
      },
      {
        number: 4,
        title: "Inspect the fan motor and blower",
        description:
          "If the noise is a screech or grinding sound, the fan motor bearings are likely worn out. You can sometimes confirm this by gently spinning the fan blade by hand (with the power OFF). If it wobbles, catches, or makes noise, the motor needs to be replaced. On the indoor side, a noisy blower motor is the same issue.",
      },
      {
        number: 5,
        title: "Check for refrigerant line vibration",
        description:
          "The copper refrigerant lines running between the indoor and outdoor units can vibrate against the house, wall, or other pipes. If you hear a buzzing or vibrating sound when the compressor runs, check where the lines pass through walls or near other objects. You can add foam pipe insulation or rubber pads at contact points to stop the vibration.",
      },
    ],
    alternativeCauses: [
      "Failing compressor (knocking or banging from inside the sealed unit)",
      "Buzzing contactor that is pitted or failing",
      "Loose ductwork in the attic or walls (rattling when the blower runs)",
      "Expansion and contraction of ductwork (popping sounds)",
    ],
    whenToCallPro:
      "If the noise is a loud banging or clanking coming from the compressor itself, internal parts are likely broken. Compressor replacement is an expensive job ($800–$2,000+) and may warrant replacing the entire outdoor unit. A screeching sound that suddenly stops and the unit shuts off could mean high pressure — do not restart it. Call a technician.",
    metaTitle:
      "AC Making Loud Noise — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a noisy AC unit. Identify rattling, buzzing, or screeching sounds and their causes. Difficulty: Medium. Step-by-step guide.",
  },

  // ============================================================
  // WATER HEATERS
  // ============================================================
  {
    id: "electric-water-heater-no-hot-water",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "electric-water-heater-no-hot-water",
    problemTitle: "Electric Water Heater Not Producing Hot Water",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Flathead screwdriver",
      "Phillips screwdriver",
      "Multimeter",
      "Non-contact voltage tester",
    ],
    partsNeeded: [
      {
        name: "Water Heater Heating Element (if element is burned out)",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=electric+water+heater+heating+element+universal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=electric+water+heater+heating+element+universal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermostat (upper or lower)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=electric+water+heater+thermostat&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=electric+water+heater+thermostat&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: Electric water heaters operate on 240 volts, which can kill you. Turn off the breaker before doing ANY work.",
      "Use a non-contact voltage tester to verify the power is off before touching any wires.",
      "Water and electricity are a deadly combination. Dry your hands and the area before working on electrical components.",
      "If you are not experienced with electrical work, please call a professional. This is not a beginner-level repair.",
    ],
    quickDiagnosis:
      "Electric water heaters have two heating elements and two thermostats (upper and lower). When you have zero hot water, the most common fix is pressing the reset button on the upper thermostat. If that does not work, one of the heating elements or thermostats may have failed.",
    steps: [
      {
        number: 1,
        title: "Turn off the breaker",
        description:
          "Go to your electrical panel and turn off the breaker labeled for the water heater. It will be a double-pole breaker (takes up two slots). Use a non-contact voltage tester at the water heater to confirm the power is truly off. Do not skip this step.",
      },
      {
        number: 2,
        title: "Press the reset button",
        description:
          "Remove the upper access panel on the water heater (usually held by two screws). Pull back the insulation to reveal the thermostat. Look for a red button on the upper thermostat — this is the high-temperature reset button. Press it firmly. You should hear or feel a click. Replace the insulation and panel, turn the breaker back on, and wait 30–60 minutes. If you get hot water, you are done. If the reset trips again, keep reading.",
      },
      {
        number: 3,
        title: "Test the heating elements with a multimeter",
        description:
          "Turn the breaker off again. Remove both access panels. Disconnect one wire from each heating element. Set your multimeter to the ohms setting and touch the probes to the two screws on the element. A good element should read between 10 and 30 ohms. If it reads infinity (OL) or zero, the element is bad and needs to be replaced.",
      },
      {
        number: 4,
        title: "Test the thermostats",
        description:
          "With the power still off, set your multimeter to continuity. Test across the thermostat terminals as described in your water heater's wiring diagram (usually on a sticker on the tank). If a thermostat does not pass the continuity test, it needs to be replaced. Thermostats are inexpensive and clip onto the tank — no draining required.",
      },
      {
        number: 5,
        title: "Replace the faulty part and test",
        description:
          "If you found a bad element, you will need to drain the tank partially (below the element level), unscrew the old element, and screw in the new one. Refill the tank completely before turning the power back on — running a dry element will burn it out instantly. If you replaced a thermostat, just reconnect the wires, set the temperature to 120°F, and turn the breaker on. Wait an hour and check for hot water.",
      },
    ],
    alternativeCauses: [
      "Both elements failed (rare, but possible in older units)",
      "Tripped breaker that will not stay on (wiring issue or element short)",
      "Dip tube broken (hot water mixes with cold in the tank)",
      "Tank is undersized for household demand",
    ],
    whenToCallPro:
      "If you are not comfortable working with 240-volt wiring, call a plumber or electrician. This is a high-voltage appliance and mistakes can be fatal. Also call a pro if the breaker keeps tripping — this could mean a short in the element or wiring. A typical service call runs $100–$250 plus parts.",
    metaTitle:
      "Electric Water Heater No Hot Water — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix an electric water heater with no hot water. Check the reset button, elements, and thermostats. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "gas-water-heater-no-hot-water",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "gas-water-heater-no-hot-water",
    problemTitle: "Gas Water Heater Not Producing Hot Water",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$25",
    toolsNeeded: [
      "Long-reach lighter or fireplace matches",
      "Flashlight",
      "Screwdriver (Phillips)",
    ],
    partsNeeded: [
      {
        name: "Thermocouple (if pilot light won't stay lit)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=water+heater+thermocouple+universal&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=water+heater+thermocouple+universal&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you smell a strong gas odor (rotten egg smell), do NOT try to light anything. Leave your home immediately and call the gas company from outside.",
      "A small whiff of gas near the pilot area when relighting is normal. A strong smell throughout the room is NOT normal.",
      "Make sure the area is well-ventilated when working on a gas water heater.",
      "Never use a regular lighter to relight a pilot — use a long-reach lighter to keep your hand away from the burner.",
    ],
    quickDiagnosis:
      "The most common reason a gas water heater stops making hot water is that the pilot light has gone out. Relighting it is usually quick and easy. If the pilot will not stay lit, the thermocouple is probably worn out — this is a cheap and common repair.",
    steps: [
      {
        number: 1,
        title: "Check the pilot light",
        description:
          "Look at the gas control valve on the front of the water heater (near the bottom). The knob should be set to the Pilot position. Look through the viewing window or access panel at the bottom of the tank. If you do not see a small blue flame, the pilot is out.",
      },
      {
        number: 2,
        title: "Relight the pilot light",
        description:
          "Turn the gas control knob to Off and wait 5 full minutes for any gas to clear. Then turn the knob to Pilot. Press and hold the knob down (or the separate pilot button). While holding it, use a long-reach lighter to light the pilot through the access opening. Keep holding the knob for 60 seconds after the pilot lights. Then release it. If the pilot stays lit, turn the knob to On and set the temperature to your desired setting.",
      },
      {
        number: 3,
        title: "If the pilot won't stay lit, check the thermocouple",
        description:
          "The thermocouple is a copper tube or wire that sits in the pilot flame. It senses the flame and tells the gas valve to stay open. If the pilot goes out as soon as you release the knob, the thermocouple is likely worn out. You can try gently cleaning the tip with fine sandpaper, but usually it needs to be replaced. Thermocouples are universal and inexpensive.",
      },
      {
        number: 4,
        title: "Replace the thermocouple",
        description:
          "Turn the gas to Off. Disconnect the thermocouple from the gas control valve (it screws off by hand or with a small wrench). Remove the old thermocouple from its bracket near the pilot assembly. Install the new one by reversing the steps — make sure the tip sits directly in the pilot flame. Reconnect it to the gas valve finger-tight plus a quarter turn with a wrench.",
      },
      {
        number: 5,
        title: "Relight and test",
        description:
          "Relight the pilot following the steps above. The pilot should now stay lit after you release the knob. Turn the gas control to On, set the temperature to 120°F, and listen for the main burner to fire up. You should have hot water within 30–45 minutes.",
      },
    ],
    alternativeCauses: [
      "Gas supply is off (check the gas shut-off valve on the line to the heater)",
      "Dirty or clogged pilot tube",
      "Faulty gas control valve (gas valve does not open)",
      "Sediment buildup in the tank reducing heating efficiency",
    ],
    whenToCallPro:
      "If you smell a strong gas odor at any point, leave the house and call the gas company. If the pilot lights but the main burner does not fire, the gas control valve may be bad — this is a job for a licensed plumber. If the unit is over 10–12 years old and having recurring issues, replacement is often more cost-effective than repair.",
    metaTitle:
      "Gas Water Heater No Hot Water — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a gas water heater with no hot water. Relight the pilot and check the thermocouple. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "water-heater-leaking-from-bottom",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "water-heater-leaking-from-bottom",
    problemTitle: "Water Heater Leaking From Bottom",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Flashlight",
      "Garden hose (for draining)",
      "Towels",
      "Wrench or pliers",
    ],
    partsNeeded: [
      {
        name: "Drain Valve (if drain valve is leaking)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=water+heater+drain+valve+brass&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=water+heater+drain+valve+brass&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the power (breaker for electric, gas valve for gas) before working on the water heater.",
      "The water inside the tank is very hot. Let it cool down or be extremely careful when draining.",
      "Turn off the cold water supply valve at the top of the heater before draining.",
      "If the leak is from the tank itself (not a fitting), the tank is corroded and must be replaced. A corroded tank can burst without warning.",
    ],
    quickDiagnosis:
      "Water pooling under your water heater is alarming, but it does not always mean you need a new one. The leak may be coming from the drain valve, the temperature and pressure (T&P) relief valve overflow pipe, or a fitting — all of which are fixable. However, if the tank itself is leaking from internal corrosion, replacement is the only option.",
    steps: [
      {
        number: 1,
        title: "Find the exact source of the leak",
        description:
          "Dry up all the water on the floor with towels. Then use a flashlight to carefully inspect the water heater from top to bottom. Check: the cold water inlet and hot water outlet fittings at the top, the T&P relief valve and its discharge pipe on the side, the drain valve at the bottom, and the bottom of the tank itself. Lay dry paper towels around the base and check back in 15 minutes to see where the water appears first.",
      },
      {
        number: 2,
        title: "Check the drain valve",
        description:
          "The drain valve is the spigot-like fitting at the bottom of the tank. If water is dripping from here, try tightening it gently with a wrench (turn clockwise). If it still leaks, you can cap it with a brass hose cap. If the valve is plastic and cracked, you will need to drain the tank and replace it with a brass drain valve.",
      },
      {
        number: 3,
        title: "Check the T&P relief valve discharge pipe",
        description:
          "The T&P valve is a safety device on the side or top of the tank with a pipe running down toward the floor. If water is dripping from the end of this pipe, the valve may be doing its job (releasing pressure) or it may be faulty. Do not cap or plug this pipe — it is a critical safety feature. If it is leaking continuously, the valve may need to be replaced, or there may be a pressure issue in your plumbing.",
      },
      {
        number: 4,
        title: "Check the fittings at the top",
        description:
          "Inspect where the cold water inlet and hot water outlet connect to the top of the tank. If water is dripping from these connections, try tightening them. If the fittings use dielectric unions or flex connectors, they may need new seals. Water running down the outside of the tank from a top leak can make it look like the bottom is leaking.",
      },
      {
        number: 5,
        title: "Inspect the bottom of the tank",
        description:
          "If you cannot find a leak from the valve, pipe, or fittings, and water is seeping from the base of the tank itself, the inner tank has corroded through. Unfortunately, this cannot be repaired. You need to replace the water heater. Turn off the gas or power, turn off the water supply, and start shopping for a replacement. Do not delay — a corroded tank can burst and cause serious water damage.",
      },
    ],
    alternativeCauses: [
      "Condensation on the tank (common in humid basements — not actually a leak)",
      "Nearby plumbing leak that drips onto the water heater",
      "Faulty T&P relief valve releasing water unnecessarily",
      "High water pressure in the home causing the T&P valve to release",
    ],
    whenToCallPro:
      "If the tank itself is leaking, you need a plumber to install a new water heater. If the T&P valve is releasing frequently, there may be excessive pressure in your water system that needs professional diagnosis. For a simple drain valve or fitting replacement, most handy homeowners can handle it. A new water heater installation typically costs $800–$1,500 including the unit.",
    metaTitle:
      "Water Heater Leaking From Bottom — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a water heater leaking from the bottom. Find the source: drain valve, T&P valve, or tank. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "water-heater-pilot-light-wont-stay-lit",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "water-heater-pilot-light-wont-stay-lit",
    problemTitle: "Water Heater Pilot Light Won't Stay Lit",
    difficulty: "Medium",
    timeEstimate: "20-45 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Long-reach lighter",
      "Fine-grit sandpaper or emery cloth",
      "Wrench (small adjustable)",
      "Compressed air can (optional)",
    ],
    partsNeeded: [
      {
        name: "Universal Thermocouple",
        costRange: "$8–$12",
        amazonUrl:
          "https://www.amazon.com/s?k=universal+water+heater+thermocouple+24+inch&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=universal+water+heater+thermocouple+24+inch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If you smell a strong gas odor (like rotten eggs), do not try to light anything. Leave the house and call the gas company from outside.",
      "Wait a full 5 minutes after turning gas to Off before attempting to relight the pilot.",
      "Work in a well-ventilated area. Open a window or door near the water heater.",
      "Never force the gas control knob — if it does not turn, it may be in a lockout state.",
    ],
    quickDiagnosis:
      "A pilot light that lights but goes out as soon as you release the button is almost always a bad thermocouple. The thermocouple is a safety sensor that sits in the pilot flame. When it wears out, it cannot tell the gas valve that the pilot is lit, so the valve shuts off the gas. Replacing a thermocouple is one of the most common and affordable water heater repairs.",
    steps: [
      {
        number: 1,
        title: "Try relighting the pilot properly",
        description:
          "Turn the gas knob to Off and wait 5 minutes. Turn it to Pilot, press and hold it down firmly, and light the pilot with a long-reach lighter. Hold the knob down for a full 60 seconds — many people let go too soon. Count it out. Then slowly release. If the pilot stays lit, turn the knob to On. If it goes out, the thermocouple needs attention.",
      },
      {
        number: 2,
        title: "Clean the thermocouple tip",
        description:
          "Turn the gas to Off. Locate the thermocouple — it is the thin copper tube running from the gas valve to the pilot assembly. The tip sits right in the pilot flame. Gently sand the tip with fine-grit sandpaper or emery cloth to remove any soot or oxidation. Also make sure the tip is positioned so the pilot flame directly hits it. If it has been bent away, gently bend it back into the flame.",
      },
      {
        number: 3,
        title: "Clean the pilot tube",
        description:
          "While you are in there, check the pilot tube opening. If the pilot flame is weak or yellow instead of a crisp blue, the pilot tube may be partially clogged with dust or spider webs. Use compressed air to gently blow out the tube. A stronger pilot flame means a hotter thermocouple, which helps it work better.",
      },
      {
        number: 4,
        title: "Replace the thermocouple if cleaning did not work",
        description:
          "Disconnect the thermocouple from the gas control valve — it threads off with a small wrench (usually 7/16 inch). Remove the tip from its bracket near the pilot. Install the new thermocouple with the tip positioned in the pilot flame. Reconnect it to the gas valve hand-tight plus a quarter turn with the wrench. Do not overtighten.",
      },
      {
        number: 5,
        title: "Relight and confirm",
        description:
          "Follow the relighting procedure: Off, wait 5 minutes, Pilot, hold, light, hold 60 seconds, release. The pilot should now stay lit. Turn the knob to On and listen for the main burner to fire. Check back in an hour to make sure the pilot is still going strong.",
      },
    ],
    alternativeCauses: [
      "Strong drafts near the water heater blowing the pilot out",
      "Faulty gas control valve (will not hold open even with a good thermocouple)",
      "Partially closed gas supply valve reducing gas flow",
      "Dirty or clogged main burner orifice",
    ],
    whenToCallPro:
      "If a new thermocouple does not fix the problem, the gas control valve itself may be faulty. Replacing a gas valve involves working with gas lines and should be done by a licensed plumber. If the water heater is more than 10 years old, consider replacing the entire unit rather than investing in expensive repairs.",
    metaTitle:
      "Water Heater Pilot Light Won't Stay Lit — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a water heater pilot light that keeps going out. Usually a bad thermocouple. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "water-heater-popping-rumbling-noise",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "water-heater-popping-rumbling-noise",
    problemTitle: "Water Heater Making Popping or Rumbling Noise",
    difficulty: "Easy",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$10",
    toolsNeeded: [
      "Garden hose",
      "Bucket",
      "Flathead screwdriver (to open drain valve)",
    ],
    partsNeeded: [
      {
        name: "Water Heater Flush Kit (optional for easier draining)",
        costRange: "$10–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=water+heater+flush+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=water+heater+flush+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "The water draining from the tank is very hot. Do not let it spray on your skin.",
      "Run the hose to a floor drain, outside, or into a large bucket. Hot water can damage plants and grass.",
      "Turn off the gas or electric power to the heater before draining.",
      "If the drain valve is stuck, do not force it with too much pressure — old plastic valves can break and cause a flood.",
    ],
    quickDiagnosis:
      "Popping, rumbling, or crackling sounds from your water heater are caused by sediment buildup on the bottom of the tank. Minerals in the water settle out over time and form a layer on the bottom. When the burner heats the water under this layer, steam bubbles pop through the sediment — that is the noise you hear. Flushing the tank removes the sediment and fixes the noise.",
    steps: [
      {
        number: 1,
        title: "Turn off the heat source",
        description:
          "For gas water heaters, turn the gas control knob to the Pilot position (this keeps the pilot lit but stops the main burner). For electric water heaters, turn off the breaker. You do not want the heating element or burner running while the tank is partially empty.",
      },
      {
        number: 2,
        title: "Connect a garden hose to the drain valve",
        description:
          "The drain valve is at the bottom of the tank. It looks like an outdoor faucet spigot. Attach a garden hose and run it to a floor drain, outside, or to a bucket. Make sure the hose end is lower than the drain valve so gravity can do the work.",
      },
      {
        number: 3,
        title: "Open the drain valve and flush",
        description:
          "Open a hot water faucet somewhere in the house (this lets air into the system so it drains faster). Then open the drain valve. The water will be murky at first — that is the sediment. Let it run until it comes out clear. If the water is very dirty, close the drain valve, let the tank refill, and drain again.",
      },
      {
        number: 4,
        title: "Stir up remaining sediment",
        description:
          "For heavy sediment buildup, close the drain valve and turn the cold water supply back on briefly with the drain still connected. The incoming cold water will stir up sediment on the bottom. Then open the drain valve again and let it flush out. Repeat this a few times until the water runs clear.",
      },
      {
        number: 5,
        title: "Close up and restart",
        description:
          "Close the drain valve, disconnect the hose, and turn the cold water supply fully on. Open a hot water faucet in the house and let it run until water flows steadily with no air sputtering — this means the tank is full. Then turn the gas back to On or flip the electric breaker back on. The popping noise should be gone or greatly reduced.",
      },
    ],
    alternativeCauses: [
      "Expansion and contraction of the tank walls (less common, usually harmless)",
      "High water pressure causing the T&P valve to release (hissing sound)",
      "Water hammer in the pipes (banging when faucets shut off, not from the heater itself)",
    ],
    whenToCallPro:
      "If flushing does not reduce the noise, the sediment layer may be too thick and hardened to flush out normally. A plumber can do a more aggressive cleaning or recommend replacement. If the tank is over 10 years old and heavily sediment-clogged, replacement is usually the better investment. Flushing annually prevents this buildup.",
    metaTitle:
      "Water Heater Making Popping Rumbling Noise — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a water heater that pops, rumbles, or crackles. Caused by sediment buildup. Flush the tank to fix it. Difficulty: Easy. Step-by-step guide.",
  },
  {
    id: "tankless-water-heater-no-hot-water",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "tankless-water-heater-no-hot-water",
    problemTitle: "Tankless Water Heater No Hot Water",
    difficulty: "Medium",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Bucket (2 needed for flushing)",
      "Submersible pump or tankless flush kit",
      "White vinegar (4-5 gallons)",
      "Screwdriver",
    ],
    partsNeeded: [
      {
        name: "Tankless Water Heater Flush Kit",
        costRange: "$20–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=tankless+water+heater+flush+kit&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=tankless+water+heater+flush+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the gas or electricity to the unit before performing any maintenance.",
      "Close the isolation valves on both the hot and cold water lines before opening service ports.",
      "Vinegar is safe for descaling — never use harsh chemical drain cleaners in a tankless unit.",
      "If your unit displays an error code, look it up in the manual before attempting any repair.",
    ],
    quickDiagnosis:
      "Tankless water heaters heat water on demand, but they need a minimum flow rate to activate. If you are getting cold water, the problem may be as simple as a clogged inlet filter, scale buildup inside the unit, or the flow rate being too low. Tankless units also display error codes that tell you exactly what is wrong.",
    steps: [
      {
        number: 1,
        title: "Check for error codes",
        description:
          "Look at the display panel on your tankless unit. Most models show an error code when something is wrong. Common codes include ignition failure, flame loss, and flow sensor errors. Look up the code in your owner's manual or on the manufacturer's website. The code may point you directly to the fix.",
      },
      {
        number: 2,
        title: "Clean the inlet water filter",
        description:
          "Tankless water heaters have a small mesh filter on the cold water inlet. Turn off the water supply, place a small bucket under the filter, and unscrew it. Rinse the filter under water to remove any sediment or debris. A clogged filter reduces flow and can prevent the unit from firing. Reinstall and turn the water back on.",
      },
      {
        number: 3,
        title: "Check the gas supply or electrical connection",
        description:
          "For gas units, make sure the gas valve is fully open and other gas appliances are working. For electric units, check the breaker. Tankless electric heaters draw a lot of power — some require multiple dedicated breakers. Make sure none are tripped.",
      },
      {
        number: 4,
        title: "Descale the unit with vinegar",
        description:
          "Scale buildup from hard water is the number one enemy of tankless water heaters. Close the isolation valves on the hot and cold lines. Connect a flush kit (a small pump that circulates vinegar through the unit). Fill a bucket with 4–5 gallons of white vinegar, connect the hoses, and run the pump for 45–60 minutes. This dissolves mineral scale inside the heat exchanger. Flush with clean water afterward.",
      },
      {
        number: 5,
        title: "Check the flow rate",
        description:
          "Tankless heaters need a minimum flow rate (usually 0.5 GPM) to activate. If you have low-flow faucets or showerheads, or if you are only cracking the hot water open slightly, the unit may not fire. Try opening the hot water faucet fully. If the unit fires at full flow but not at a trickle, that is normal behavior. Also make sure the crossover valve in single-handle faucets is not letting cold water mix into the hot line.",
      },
    ],
    alternativeCauses: [
      "Frozen pipes in the water line during winter",
      "Gas line too small to supply the unit at full load",
      "Failed igniter or flame rod (gas units)",
      "Tripped flow sensor or faulty control board",
      "Venting issue (gas units — blocked or undersized vent)",
    ],
    whenToCallPro:
      "If descaling and cleaning the filter do not fix it, or if the unit shows an ignition or flame error code, call a licensed plumber or the manufacturer's service line. Tankless units are more complex than tank heaters and have specialized components. Expect $150–$350 for a professional service call.",
    metaTitle:
      "Tankless Water Heater No Hot Water — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a tankless water heater with no hot water. Descale the unit and check the filter and flow rate. Difficulty: Medium. Step-by-step guide.",
  },
  {
    id: "water-heater-temperature-too-hot",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "water-heater-temperature-too-hot",
    problemTitle: "Water Heater Temperature Too Hot",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0–$15",
    toolsNeeded: [
      "Flathead screwdriver",
      "Kitchen thermometer",
    ],
    partsNeeded: [
      {
        name: "Thermostat (if thermostat is stuck, electric units)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=electric+water+heater+thermostat&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=electric+water+heater+thermostat&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Scalding hot water can cause serious burns in seconds. Use extreme caution when testing water temperature.",
      "Water above 140°F is a scalding hazard, especially for children and elderly people.",
      "Turn off the breaker before adjusting thermostats on electric water heaters.",
      "The recommended safe temperature is 120°F. This prevents scalding and saves energy.",
    ],
    quickDiagnosis:
      "If your hot water is dangerously hot, the thermostat is set too high or is malfunctioning. This is a safety issue — water above 140°F can scald skin in under 5 seconds. The fix is usually just turning down the thermostat, which takes about 2 minutes.",
    steps: [
      {
        number: 1,
        title: "Test the current water temperature",
        description:
          "Turn on the hot water at a faucet closest to the water heater. Let it run for 2 minutes to get the hottest water. Hold a kitchen thermometer under the stream. If it reads above 120°F, the thermostat needs to be turned down. Water above 140°F is a serious burn risk.",
      },
      {
        number: 2,
        title: "Adjust a gas water heater thermostat",
        description:
          "On a gas water heater, the temperature dial is on the gas control valve at the front of the unit. Turn the dial toward the lower or warm settings. Most dials do not show exact temperatures — start at the lowest setting and test the water after an hour. Adjust up slightly if needed until you hit 120°F.",
      },
      {
        number: 3,
        title: "Adjust an electric water heater thermostat",
        description:
          "Turn off the breaker. Remove the upper and lower access panels and insulation. You will see a thermostat with a temperature adjustment dial — use a flathead screwdriver to turn it to 120°F. Adjust both the upper and lower thermostats to the same temperature. Replace the insulation and panels, then turn the breaker back on.",
      },
      {
        number: 4,
        title: "Wait and retest",
        description:
          "Give the water heater about 2 hours to adjust to the new setting. Then test the hot water temperature at the faucet again. It should now be around 120°F. If the water is still scalding hot even after turning the thermostat all the way down, the thermostat may be stuck in the on position and needs to be replaced.",
      },
    ],
    alternativeCauses: [
      "Stuck thermostat that does not shut off the heating element (electric)",
      "Failed gas control valve that does not modulate properly",
      "Someone else in the household turned the temperature up",
      "Recirculation pump keeping water super-heated in the lines",
    ],
    whenToCallPro:
      "If adjusting the thermostat does not lower the temperature, the thermostat or gas valve may be stuck in the on position. This is a safety hazard — the water can overheat and the T&P relief valve may start releasing. Turn off the heater and call a plumber. A thermostat replacement on an electric heater costs $100–$200 installed.",
    metaTitle:
      "Water Heater Temperature Too Hot — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a water heater that produces dangerously hot water. Adjust the thermostat to 120°F. Difficulty: Easy. Step-by-step safety guide.",
  },
  {
    id: "water-heater-tripping-breaker",
    category: "Water Heaters",
    categorySlug: "water-heaters",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "water-heater-tripping-breaker",
    problemTitle: "Water Heater Tripping Breaker",
    difficulty: "Hard",
    timeEstimate: "30-60 minutes",
    costEstimate: "$0–$30",
    toolsNeeded: [
      "Multimeter",
      "Non-contact voltage tester",
      "Phillips screwdriver",
      "Flathead screwdriver",
      "Water heater element wrench (1-1/2 inch socket)",
    ],
    partsNeeded: [
      {
        name: "Water Heater Heating Element",
        costRange: "$10–$20",
        amazonUrl:
          "https://www.amazon.com/s?k=water+heater+heating+element+240v&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=water+heater+heating+element+240v&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Water Heater Thermostat (upper or lower)",
        costRange: "$8–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=water+heater+thermostat+upper+lower&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=water+heater+thermostat+upper+lower&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "DANGER: This repair involves 240-volt wiring. Electrocution can be fatal. Turn off the breaker and verify power is off with a non-contact voltage tester before touching anything.",
      "If the breaker keeps tripping, do not keep resetting it. Repeated tripping with a short circuit can start a fire.",
      "Water and electricity are a deadly combination. Make sure the area around the water heater is dry before working on electrical components.",
      "If you are not experienced with electrical testing and repair, call a licensed electrician or plumber. This is rated Hard for a reason.",
    ],
    quickDiagnosis:
      "A water heater that trips its breaker usually has a short circuit in one of the heating elements or a bad thermostat. When a heating element cracks, water gets inside and creates a short to ground, which trips the breaker. This is a common failure on older electric water heaters and is fixable if you are comfortable with electrical work.",
    steps: [
      {
        number: 1,
        title: "Turn off the breaker and verify it is off",
        description:
          "Flip the water heater breaker to the Off position. Go to the water heater, remove the upper access panel, and use a non-contact voltage tester on the wire terminals to confirm there is no power. Do not skip this verification step. 240 volts is extremely dangerous.",
      },
      {
        number: 2,
        title: "Check the heating elements for a short to ground",
        description:
          "Disconnect one wire from each heating element. Set your multimeter to the highest ohms setting. Touch one probe to a heating element terminal screw and the other probe to the metal tank (or the element's mounting bracket — bare metal). If you get any reading other than infinity (OL), the element has a short to ground and needs to be replaced. Test both elements.",
      },
      {
        number: 3,
        title: "Check the thermostats",
        description:
          "With the wires still disconnected, visually inspect the thermostats for signs of burning, melting, or discoloration. A thermostat that has shorted can also trip the breaker. If you see damage, replace it. You can also test thermostat continuity with your multimeter according to the wiring diagram on the tank.",
      },
      {
        number: 4,
        title: "Inspect the wiring for damage",
        description:
          "Look at all the wires inside the access panels. Check for burned insulation, melted wire connectors, or bare wire touching the tank. Also check where the main power wires enter the water heater at the top — look for signs of heat damage or loose connections. Loose wire connections are a common cause of overheating and breaker trips.",
      },
      {
        number: 5,
        title: "Replace the faulty element or thermostat",
        description:
          "If an element tested bad, turn off the cold water supply, drain the tank below the element level, and unscrew the old element with an element wrench. Install the new element with a new gasket. Refill the tank completely before turning on the power — a dry element will burn out instantly. If the thermostat was bad, unclip it and clip the new one in place, reconnecting the wires exactly as they were.",
      },
      {
        number: 6,
        title: "Restore power and monitor",
        description:
          "Make sure the tank is completely full (run a hot faucet until water flows steadily with no air). Turn the breaker on. If it holds, you found the problem. Monitor it for a few days. If the breaker trips again, there may be a wiring issue in the house circuit itself — call an electrician.",
      },
    ],
    alternativeCauses: [
      "Faulty breaker that trips under normal load (breakers wear out over time)",
      "Water leak dripping onto electrical connections inside the water heater",
      "Wiring issue in the home's electrical circuit (undersized wire or loose connection)",
      "Both elements energized at the same time due to a thermostat failure (overdraw trips breaker)",
    ],
    whenToCallPro:
      "If you are not experienced with 240-volt electrical work, call a licensed electrician or plumber. If you replaced the element and thermostat and the breaker still trips, the problem may be in the house wiring or the breaker itself. An electrician can diagnose this safely. Expect $150–$300 for a professional diagnosis and repair.",
    metaTitle:
      "Water Heater Tripping Breaker — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a water heater that keeps tripping the breaker. Usually a shorted heating element. Difficulty: Hard. Step-by-step electrical guide.",
  },
];
