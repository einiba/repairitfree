import { ErrorCode } from "@/lib/types";

export const errorCodes: ErrorCode[] = [
  {
    id: "dishwasher-e24",
    deviceType: "Dishwasher",
    deviceTypeSlug: "dishwasher",
    code: "E24",
    codeSlug: "e24",
    meaning:
      "Drainage error — the dishwasher cannot pump out water. Usually caused by a clogged filter, kinked drain hose, or blocked garbage disposal connection.",
    guideId: "bosch-dishwasher-e24-error",
  },
  {
    id: "washer-f5",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "F5",
    codeSlug: "f5",
    meaning:
      "Door latch error — the washer thinks the door is open. Caused by a faulty door latch, wiring issue, or control board glitch.",
    guideId: "kenmore-washer-f5-error",
  },
  {
    id: "washer-f21",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "F21",
    codeSlug: "f21",
    meaning:
      "Long drain error — the washer is taking too long to drain water. Usually caused by a clogged drain pump filter, kinked drain hose, or faulty drain pump.",
  },
  {
    id: "dishwasher-e15",
    deviceType: "Dishwasher",
    deviceTypeSlug: "dishwasher",
    code: "E15",
    codeSlug: "e15",
    meaning:
      "Water in the base pan — the leak protection system has detected water where it shouldn't be. Could be a leaky hose, faulty door seal, or cracked tub.",
  },
  {
    id: "dryer-he",
    deviceType: "Dryer",
    deviceTypeSlug: "dryer",
    code: "HE",
    codeSlug: "he",
    meaning:
      "Heating error — the dryer's heating element or gas igniter isn't working. Check the thermal fuse, heating element, or gas valve solenoids.",
  },
  {
    id: "fridge-er-ff",
    deviceType: "Refrigerator",
    deviceTypeSlug: "refrigerator",
    code: "Er FF",
    codeSlug: "er-ff",
    meaning:
      "Freezer fan error — the evaporator fan motor in the freezer has failed or is blocked by ice buildup. The fridge section will stop cooling.",
  },
  // Washing Machine Error Codes
  {
    id: "washer-ue",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "UE",
    codeSlug: "ue",
    meaning: "Unbalanced load — the washer detects an uneven load and stops spinning. Redistribute clothes evenly and try again. If it persists, check the suspension rods or shock absorbers.",
    guideId: "samsung-washer-ue-error",
  },
  {
    id: "washer-oe",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "OE",
    codeSlug: "oe",
    meaning: "Drain error — the washer cannot drain water within the expected time. Usually caused by a clogged drain filter, kinked hose, or faulty drain pump.",
    guideId: "lg-washer-oe-error",
  },
  {
    id: "washer-le",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "LE",
    codeSlug: "le",
    meaning: "Locked motor error — the wash motor is overloaded or stuck. Often caused by too many clothes, a foreign object jamming the drum, or a faulty motor hall sensor.",
  },
  {
    id: "washer-e1",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "E1",
    codeSlug: "e1",
    meaning: "Water supply error — the washer is not filling with water. Check that the water supply valves are open, the inlet hoses are not kinked, and the inlet valve screens are not clogged.",
  },
  {
    id: "washer-f2e1",
    deviceType: "Washing Machine",
    deviceTypeSlug: "washing-machine",
    code: "F2 E1",
    codeSlug: "f2-e1",
    meaning: "Stuck key error — a button on the control panel is stuck or the control board has a fault. Try unplugging for 5 minutes to reset. If it persists, the control board may need replacement.",
  },
  // Dishwasher Error Codes
  {
    id: "dishwasher-e22",
    deviceType: "Dishwasher",
    deviceTypeSlug: "dishwasher",
    code: "E22",
    codeSlug: "e22",
    meaning: "Filter clogged — the dishwasher's filter is blocked with food debris. Remove and clean the filter under running water with a soft brush.",
  },
  {
    id: "dishwasher-le",
    deviceType: "Dishwasher",
    deviceTypeSlug: "dishwasher",
    code: "LE",
    codeSlug: "le",
    meaning: "Leak error — water has been detected in the base of the dishwasher. Check door seals, hose connections, and the tub for cracks.",
    guideId: "lg-dishwasher-le-error",
  },
  {
    id: "dishwasher-e4",
    deviceType: "Dishwasher",
    deviceTypeSlug: "dishwasher",
    code: "E4",
    codeSlug: "e4",
    meaning: "Overflow error — too much water in the dishwasher. The water inlet valve may be stuck open, or the float switch is faulty.",
  },
  // Dryer Error Codes
  {
    id: "dryer-af",
    deviceType: "Dryer",
    deviceTypeSlug: "dryer",
    code: "AF",
    codeSlug: "af",
    meaning: "Airflow restricted — the dryer exhaust vent is clogged with lint. Clean the entire vent from dryer to outside wall. This is a fire hazard if ignored.",
  },
  {
    id: "dryer-e1",
    deviceType: "Dryer",
    deviceTypeSlug: "dryer",
    code: "E1",
    codeSlug: "e1",
    meaning: "Thermistor error — the temperature sensor has failed or is reading incorrectly. The dryer may not heat or may overheat. Replace the thermistor (usually $10-20).",
  },
  {
    id: "dryer-f01",
    deviceType: "Dryer",
    deviceTypeSlug: "dryer",
    code: "F01",
    codeSlug: "f01",
    meaning: "Main control board failure — the electronic control board has a fault. Try unplugging for 5 minutes to reset. If the error returns, the board needs replacement ($100-200).",
  },
  // Refrigerator Error Codes
  {
    id: "fridge-e1",
    deviceType: "Refrigerator",
    deviceTypeSlug: "refrigerator",
    code: "E1",
    codeSlug: "e1",
    meaning: "Fridge sensor error — the temperature sensor in the fresh food section has failed. The fridge may not cool properly. Replace the thermistor ($15-30).",
  },
  {
    id: "fridge-88",
    deviceType: "Refrigerator",
    deviceTypeSlug: "refrigerator",
    code: "88",
    codeSlug: "88",
    meaning: "Communication error — the display panel cannot communicate with the main control board. Try unplugging for 5 minutes. Check wiring harness connections between boards.",
  },
  {
    id: "fridge-if",
    deviceType: "Refrigerator",
    deviceTypeSlug: "refrigerator",
    code: "IF",
    codeSlug: "if",
    meaning: "Ice fan error — the ice maker fan motor has failed. The ice maker will stop producing ice but the fridge will still cool normally. Replace the fan motor ($30-50).",
  },
  // Oven Error Codes
  {
    id: "oven-f3",
    deviceType: "Oven",
    deviceTypeSlug: "oven",
    code: "F3",
    codeSlug: "f3",
    meaning: "Oven temperature sensor open — the oven temperature sensor (thermistor) has failed or its wiring is broken. The oven won't heat properly. Replace the sensor ($15-25).",
    guideId: "samsung-oven-f3-error",
  },
  {
    id: "oven-f10",
    deviceType: "Oven",
    deviceTypeSlug: "oven",
    code: "F10",
    codeSlug: "f10",
    meaning: "Runaway temperature — the oven detected a temperature above safe limits. Could be a faulty temperature sensor, relay stuck closed on the control board, or a wiring issue. This is a safety concern.",
    guideId: "frigidaire-oven-f10-error",
  },
  {
    id: "oven-f1",
    deviceType: "Oven",
    deviceTypeSlug: "oven",
    code: "F1",
    codeSlug: "f1",
    meaning: "Control board error — the oven's electronic control board has detected an internal fault. Try disconnecting power for 5 minutes. If the error returns, the control board needs replacement.",
  },
  {
    id: "oven-f9",
    deviceType: "Oven",
    deviceTypeSlug: "oven",
    code: "F9",
    codeSlug: "f9",
    meaning: "Door lock error — the oven door lock mechanism is stuck or the door latch switch is faulty. The oven may think it's in self-clean mode. Check the door latch assembly.",
  },
];

export function getErrorCode(
  deviceTypeSlug: string,
  codeSlug: string
): ErrorCode | undefined {
  return errorCodes.find(
    (e) => e.deviceTypeSlug === deviceTypeSlug && e.codeSlug === codeSlug
  );
}

export function getErrorCodesByDevice(deviceTypeSlug: string): ErrorCode[] {
  return errorCodes.filter((e) => e.deviceTypeSlug === deviceTypeSlug);
}

export function getDeviceTypes(): { name: string; slug: string }[] {
  const deviceMap = new Map<string, string>();
  errorCodes.forEach((e) => deviceMap.set(e.deviceTypeSlug, e.deviceType));
  return Array.from(deviceMap.entries()).map(([slug, name]) => ({
    slug,
    name,
  }));
}
