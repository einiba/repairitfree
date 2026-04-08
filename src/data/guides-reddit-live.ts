import { Guide } from "@/lib/types";

export const redditLiveGuides: Guide[] = [
  {
    id: "siemens-dishwasher-completely-dead",
    category: "Dishwashers",
    categorySlug: "dishwashers",
    brand: "Siemens",
    brandSlug: "siemens",
    problemSlug: "completely-dead-no-power",
    problemTitle: "Completely Dead (No Power)",
    difficulty: "Medium",
    timeEstimate: "30-90 minutes",
    costEstimate: "$0–$80",
    toolsNeeded: [
      "Multimeter",
      "Phillips screwdriver",
      "Torx screwdriver set (T15/T20)",
      "Non-contact voltage tester",
      "Flashlight",
      "Needle-nose pliers",
    ],
    partsNeeded: [
      {
        name: "Door Latch / Door Switch Assembly",
        costRange: "$15–$30",
        amazonUrl:
          "https://www.amazon.com/s?k=siemens+bosch+dishwasher+door+latch+switch&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=siemens+bosch+dishwasher+door+latch+switch&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Thermal Fuse (Siemens/Bosch dishwasher)",
        costRange: "$5–$15",
        amazonUrl:
          "https://www.amazon.com/s?k=bosch+siemens+dishwasher+thermal+fuse&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=bosch+siemens+dishwasher+thermal+fuse&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Control Board (main PCB)",
        costRange: "$60–$180",
        amazonUrl:
          "https://www.amazon.com/s?k=siemens+IQ300+dishwasher+control+board&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=siemens+IQ300+dishwasher+control+board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "TURN OFF the circuit breaker for the dishwasher before doing any electrical work. Do not rely on just unplugging it — many dishwashers are hardwired.",
      "Use a non-contact voltage tester to confirm power is off before touching any wires.",
      "Water and electricity are a lethal combination. Make sure the area under and around the dishwasher is dry before working on electrical connections.",
      "If you are not comfortable working with mains wiring (120V/240V depending on your country), stop and call a qualified electrician.",
    ],
    quickDiagnosis:
      "A Siemens IQ300 dishwasher that is completely dead — no lights, no beeps, no response at all — is usually caused by something simple: a tripped breaker, a bad outlet, or a loose wire at the junction box. Less commonly, a faulty door switch, blown thermal fuse, or failed control board is the culprit. Siemens dishwashers share their platform with Bosch, so troubleshooting steps and parts are nearly identical between the two brands. Work through the steps in order — most people find the fix before step 5.",
    steps: [
      {
        number: 1,
        title: "Verify the power outlet is working",
        description:
          "Plug a small appliance (a lamp or phone charger) into the same outlet the dishwasher uses. If the test device doesn't work either, the problem is the outlet or the circuit — not the dishwasher. If your dishwasher is hardwired (no plug), skip to step 2. If the outlet is dead, check for a GFCI outlet nearby (it will have TEST/RESET buttons) and press RESET. Many kitchens daisy-chain outlets through a single GFCI.",
      },
      {
        number: 2,
        title: "Check the circuit breaker / fuse box",
        description:
          "Go to your home's electrical panel. Look for the breaker labeled \"Dishwasher\" or \"Kitchen.\" If it's tripped (sitting in the middle position or flipped to OFF), flip it fully OFF first, then back ON. If it trips again immediately, you have a short somewhere — stop and call an electrician. In older homes with a fuse box, check if the fuse for the kitchen circuit is blown and replace it if needed.",
      },
      {
        number: 3,
        title: "Inspect the door latch and door switch",
        description:
          "Siemens (and Bosch) dishwashers have a door switch that must be engaged before the machine will power on. If this switch fails, the dishwasher appears completely dead — no lights, nothing. Open and close the door firmly, listening for a solid click. If the latch feels loose, wobbly, or doesn't click, the latch assembly is likely broken. To test the switch itself: turn off the breaker, remove the inner door panel (Torx screws), locate the door switch (a small micro-switch near the latch), and test it with a multimeter for continuity. It should show continuity when pressed (door closed) and none when released (door open). Replace the switch or latch assembly if it fails this test.",
      },
      {
        number: 4,
        title: "Check the power cord connection at the junction box",
        description:
          "Turn off the circuit breaker. The junction box is located underneath the dishwasher, usually on the right side behind the kick plate (the lower front panel). Remove the kick plate — it's held by one or two screws or clips. Open the junction box cover (one screw). Inside you'll find wire nuts connecting the house wiring to the dishwasher. Check that all connections are tight and not corroded or burned. A loose wire nut is a surprisingly common cause of a completely dead dishwasher, especially if it was recently installed or moved. Reconnect any loose wires, making sure black-to-black (hot), white-to-white (neutral), and green/bare to ground are secure.",
      },
      {
        number: 5,
        title: "Test and replace the thermal fuse",
        description:
          "Siemens and Bosch dishwashers share a platform, and many models have a thermal fuse that blows if the unit overheats. When it blows, the dishwasher goes completely dead. With the breaker OFF, locate the thermal fuse — it's typically on the control board or near the heating element, a small cylindrical or rectangular component with two wires. Disconnect it and test with a multimeter set to continuity. If you get no reading (open circuit), it's blown. Replace it with an exact match (check your model number — it's on a sticker inside the door). Thermal fuses cost $5–$15 and are one of the easiest parts to swap. Important: a blown thermal fuse means the dishwasher overheated, so check that the vent and drain areas aren't clogged.",
      },
      {
        number: 6,
        title: "Inspect the control board for visible damage",
        description:
          "If everything above checks out, the main control board (PCB) may have failed. Turn off the breaker. Access the control board by removing the outer door panel (screws along the top edge or sides of the door). Look carefully at the board for burn marks, blackened areas, bulging or leaking capacitors, or melted connectors. If you see obvious damage, the board needs to be replaced. Replacement boards for Siemens IQ300 models range from $60–$180. Be honest with yourself here: if the dishwasher is more than 8–10 years old and the board costs $150+, you may be better off putting that money toward a new machine. A new board doesn't guarantee there isn't another underlying issue that caused the board to fail in the first place.",
      },
    ],
    alternativeCauses: [
      "A GFCI outlet upstream may have tripped — check all GFCI outlets in the kitchen and nearby bathrooms.",
      "On some Siemens models, holding the Start button for 3–5 seconds performs a reset. Try this if you restored power but the machine still seems unresponsive.",
      "A failed water inlet valve can sometimes cause the control board to shut down as a safety measure.",
      "Rodent or pest damage to wiring under or behind the dishwasher — check for chewed insulation if you see droppings nearby.",
    ],
    whenToCallPro:
      "If the circuit breaker keeps tripping, call an electrician — you may have a wiring fault or a short in the dishwasher's motor or heating element. If the control board is visibly damaged and the dishwasher is under 5 years old, a repair is worthwhile ($150–$250 with labor). For units older than 8–10 years, a new Siemens or Bosch dishwasher starts around $500–$700, and a control board replacement at $180+ in parts alone may not be the best investment.",
    metaTitle:
      "Siemens IQ300 Dishwasher Completely Dead — Free Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Siemens IQ300 dishwasher that has no power, no lights, and won't respond. Step-by-step guide covering outlet, breaker, door switch, junction box, thermal fuse, and control board. Difficulty: Medium.",
  },
];
