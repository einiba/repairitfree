import { Guide } from "@/lib/types";

export const smartDeviceGuides: Guide[] = [
  // ==========================================
  // TABLETS
  // ==========================================
  {
    id: "apple-ipad-wont-charge",
    category: "Tablets",
    categorySlug: "tablets",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "ipad-wont-charge",
    problemTitle: "iPad Won't Charge",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: ["Flashlight or phone light", "Toothpick or SIM eject tool", "Soft lint-free cloth"],
    partsNeeded: [
      {
        name: "Lightning / USB-C Charging Cable (Apple-certified)",
        costRange: "$10-$20",
        amazonUrl:
          "https://www.amazon.com/s?k=apple+ipad+charging+cable+mfi+certified&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=apple+ipad+charging+cable+mfi+certified&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Never use a metal object to clean the charging port — you could short-circuit the device.",
      "If your iPad feels hot or the battery is swollen, stop and take it to a professional.",
    ],
    quickDiagnosis:
      "An iPad that won't charge is usually caused by a dirty charging port, a bad cable, or a software glitch. Most of the time, you can fix this at home in a few minutes without spending any money.",
    steps: [
      {
        number: 1,
        title: "Try a different cable and power adapter",
        description:
          "The most common cause is a worn-out cable. Borrow a cable from a friend or try another one you have at home. Also try a different wall adapter or plug directly into a computer USB port. If it charges with a different cable, you just need a new one.",
      },
      {
        number: 2,
        title: "Clean out the charging port",
        description:
          "Shine a light into the charging port at the bottom of your iPad. You'll probably see lint and dust packed in there. Use a wooden toothpick or plastic SIM eject tool to gently scrape out any debris. Go slowly and be careful not to damage the metal contacts inside. This fix works more often than you'd think.",
      },
      {
        number: 3,
        title: "Force restart your iPad",
        description:
          "Sometimes a software freeze stops charging. For iPads with a Home button: hold the Home button and the Top button together for 10 seconds until you see the Apple logo. For iPads without a Home button: quickly press Volume Up, then Volume Down, then hold the Top button until the Apple logo appears. Plug it in after it restarts.",
      },
      {
        number: 4,
        title: "Let it charge for at least 30 minutes",
        description:
          "If the battery is completely dead, the screen may stay black for up to 15-30 minutes before showing the charging icon. Plug it into a wall adapter (not a computer — wall adapters are faster) and walk away. Come back in 30 minutes and check.",
      },
      {
        number: 5,
        title: "Check for water damage or port damage",
        description:
          "Look closely at the charging port with a flashlight. If you see green corrosion, bent pins, or the cable feels loose and wiggly, the port itself may be damaged. Unfortunately, this usually means a professional repair — but at least you've ruled out the easy fixes first.",
      },
    ],
    alternativeCauses: [
      "A failing battery that no longer holds a charge (common in iPads over 4-5 years old)",
      "Using a low-power adapter that charges too slowly to keep up with usage",
      "A third-party cable that isn't MFi certified and gets blocked by iOS",
    ],
    whenToCallPro:
      "If you've tried multiple cables, cleaned the port, and force restarted, but it still won't charge, the charging port or battery likely needs replacement. This is a soldered repair on most iPads and best left to a professional. Expect $50-$100 for a port repair.",
    metaTitle: "iPad Won't Charge? Here's How to Fix It Step by Step | RepairItFree",
    metaDescription:
      "Fix your iPad that won't charge with these easy steps. Learn how to clean the port, test cables, and get your iPad charging again without paying for a repair.",
  },
  {
    id: "apple-ipad-cracked-screen-replacement",
    category: "Tablets",
    categorySlug: "tablets",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "cracked-screen-replacement",
    problemTitle: "Cracked Screen Replacement",
    difficulty: "Hard",
    timeEstimate: "1-2 hours",
    costEstimate: "$40-$250",
    toolsNeeded: [
      "Heat gun or hair dryer",
      "Suction cup",
      "Plastic spudger / pry tool set",
      "Pentalobe screwdriver",
      "Tweezers",
      "Isopropyl alcohol",
    ],
    partsNeeded: [
      {
        name: "iPad Replacement Screen / Digitizer (model-specific)",
        costRange: "$40-$250",
        amazonUrl:
          "https://www.amazon.com/s?k=ipad+replacement+screen+digitizer&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ipad+replacement+screen+digitizer&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Adhesive strips for iPad screen",
        costRange: "$5-$10",
        amazonUrl:
          "https://www.amazon.com/s?k=ipad+screen+adhesive+strips&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ipad+screen+adhesive+strips&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Wear safety glasses — cracked glass can splinter during removal.",
      "The heat gun gets very hot. Keep it moving to avoid damaging the LCD underneath.",
      "Disconnect the battery before touching any internal cables.",
      "If you see a swollen or punctured battery, stop immediately. Do not continue.",
    ],
    quickDiagnosis:
      "A cracked iPad screen is one of the tougher DIY repairs because the glass is glued down with strong adhesive. It's definitely doable if you're patient, but be honest with yourself — if you rush this, you'll break the LCD underneath and double your cost. Watch a YouTube teardown of your exact model before starting.",
    steps: [
      {
        number: 1,
        title: "Identify your exact iPad model and order the right screen",
        description:
          "Go to Settings > General > About and note your Model Number. Search that model number when ordering your replacement screen. iPad screens are NOT interchangeable between models, even ones that look identical. Order the screen and adhesive strips before starting.",
      },
      {
        number: 2,
        title: "Heat the edges to soften the adhesive",
        description:
          "Use a hair dryer on high heat (or a heat gun on low) and slowly heat around all four edges of the screen. Keep the heat moving — don't hold it in one spot. You want the edges warm to the touch, not scorching hot. This softens the glue holding the glass down. Spend about 2-3 minutes per edge.",
      },
      {
        number: 3,
        title: "Carefully pry up the cracked screen",
        description:
          "Place the suction cup near a heated edge and gently pull up to create a small gap. Slide a thin plastic pry tool into the gap and slowly work your way around the edges. Go slow. If it feels stuck, apply more heat. Never use metal tools — they'll scratch the LCD. If glass shards break off, that's normal. Just keep going carefully.",
      },
      {
        number: 4,
        title: "Disconnect cables and remove the old screen",
        description:
          "Once the screen is loose, don't pull it away. There are ribbon cables connecting the digitizer to the logic board. Open the iPad like a book, find the cable connectors, and use a spudger to gently pop them off. Now you can fully remove the broken screen. Clean off any old adhesive from the frame using isopropyl alcohol.",
      },
      {
        number: 5,
        title: "Install the new screen and test before sealing",
        description:
          "Connect the new screen's ribbon cables to the logic board — don't apply adhesive yet. Power on the iPad and test that touch works everywhere and the display looks good. If everything checks out, power off, apply the new adhesive strips to the frame, carefully press the new screen into place, and apply even pressure around all edges for a few minutes.",
      },
    ],
    alternativeCauses: [
      "If touch doesn't work on the new screen, the ribbon cable may not be fully seated",
      "White spots on the display mean the LCD was damaged — you may need an LCD replacement too",
      "If the screen pops up after sealing, you may need stronger adhesive or applied too little",
    ],
    whenToCallPro:
      "This repair is doable but risky. If your iPad is newer or worth more than $400, consider paying a pro ($100-$250) to avoid accidentally damaging the LCD or other components. Also call a pro if you notice any damage to the LCD panel underneath the glass.",
    metaTitle: "How to Replace a Cracked iPad Screen Yourself | RepairItFree",
    metaDescription:
      "Step-by-step guide to replacing a cracked iPad screen at home. Learn what tools you need, how to remove the broken glass safely, and install a new digitizer.",
  },
  {
    id: "samsung-galaxy-tab-wont-turn-on",
    category: "Tablets",
    categorySlug: "tablets",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "galaxy-tab-wont-turn-on",
    problemTitle: "Galaxy Tab Won't Turn On",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: ["Flashlight", "Toothpick or SIM eject tool"],
    partsNeeded: [
      {
        name: "Samsung Galaxy Tab USB-C Charging Cable",
        costRange: "$8-$15",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+galaxy+tab+usb+c+charging+cable&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+galaxy+tab+usb+c+charging+cable&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If the tablet feels hot or the back is bulging, the battery may be swollen. Do not try to charge it — take it to a repair shop.",
      "Don't try to pry open the tablet unless you have proper tools and experience.",
    ],
    quickDiagnosis:
      "A Galaxy Tab that won't turn on has usually just run out of battery, or there's a software crash keeping it stuck. Nine times out of ten, you can get it working again without any tools or parts.",
    steps: [
      {
        number: 1,
        title: "Charge it with a known-good cable for 30 minutes",
        description:
          "Plug your tablet into a wall adapter (not a computer) using a cable you know works. If the battery is completely dead, it may take 15-30 minutes before anything appears on screen. Look for a small battery icon or a tiny red LED light. If nothing shows after 30 minutes, try a different cable and adapter.",
      },
      {
        number: 2,
        title: "Force restart the tablet",
        description:
          "While the tablet is plugged in, hold the Power button and Volume Down button at the same time for 15-20 seconds. Don't let go early — count to 20. You should feel a vibration or see the Samsung logo. If it vibrates but the screen stays black, the display may be the issue, not the power.",
      },
      {
        number: 3,
        title: "Clean the charging port",
        description:
          "Use a flashlight to look inside the USB-C port. If you see lint or debris packed in, gently clean it out with a wooden toothpick. Pocket lint is the #1 hidden cause of charging problems. After cleaning, try plugging in again and see if the charging indicator appears.",
      },
      {
        number: 4,
        title: "Try booting into recovery mode",
        description:
          "If the tablet vibrates during force restart but won't boot normally, try recovery mode. With the tablet off and plugged in, hold Power + Volume Up until you see the Samsung logo, then release only Power. Keep holding Volume Up. Use the volume buttons to navigate to 'Reboot system now' and press Power to select it.",
      },
    ],
    alternativeCauses: [
      "A dead battery that no longer holds any charge (common after 3-4 years)",
      "Water damage causing a short circuit",
      "A failed power button that isn't registering presses",
    ],
    whenToCallPro:
      "If the tablet doesn't respond to any button combination and won't show a charging indicator after trying multiple cables and cleaning the port, the battery or charging circuit may be dead. Battery replacement on Galaxy Tabs typically costs $50-$80 at a repair shop.",
    metaTitle: "Samsung Galaxy Tab Won't Turn On? Fix It in Minutes | RepairItFree",
    metaDescription:
      "Your Samsung Galaxy Tab won't turn on? Try these simple fixes before paying for a repair. Step-by-step guide to force restart, clean the port, and get it running again.",
  },
  {
    id: "apple-ipad-frozen-not-responding",
    category: "Tablets",
    categorySlug: "tablets",
    brand: "Apple",
    brandSlug: "apple",
    problemSlug: "frozen-not-responding",
    problemTitle: "iPad Frozen / Not Responding",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "A force restart won't delete your data — it's safe to do.",
      "If your iPad is extremely hot, let it cool down before trying anything.",
    ],
    quickDiagnosis:
      "A frozen iPad is almost always a software problem, not a hardware one. This is one of the easiest fixes you'll ever do. A force restart solves it about 90% of the time, and it won't erase anything on your device.",
    steps: [
      {
        number: 1,
        title: "Force restart your iPad",
        description:
          "For iPads with a Home button: press and hold both the Home button and the Top (power) button at the same time for about 10 seconds. Keep holding until you see the Apple logo, then let go. For iPads without a Home button (newer models): quickly press and release Volume Up, quickly press and release Volume Down, then press and hold the Top button until the Apple logo appears.",
      },
      {
        number: 2,
        title: "Wait for it to fully restart",
        description:
          "After the Apple logo appears, give your iPad a minute or two to boot up completely. Don't press anything during this time. Once you see your lock screen, try using it normally. If it's working fine now, you're done. A single freeze is usually nothing to worry about.",
      },
      {
        number: 3,
        title: "Update your software if it keeps freezing",
        description:
          "If your iPad freezes more than once, go to Settings > General > Software Update and install any available updates. Also check Settings > General > iPad Storage — if your storage is almost full (less than 1 GB free), that can cause freezing. Delete some apps, photos, or old messages to free up space.",
      },
      {
        number: 4,
        title: "Reset all settings as a last resort",
        description:
          "If freezing keeps happening, go to Settings > General > Transfer or Reset iPad > Reset > Reset All Settings. This resets your Wi-Fi passwords, wallpaper, and layout back to defaults, but it does NOT delete your apps, photos, or data. It clears out corrupted settings that could be causing the freezes.",
      },
    ],
    alternativeCauses: [
      "A specific app crashing and locking up the whole system",
      "Very low storage space causing the system to choke",
      "An aging battery that can't deliver enough power under heavy load",
    ],
    whenToCallPro:
      "If your iPad freezes constantly even after a software update and settings reset, it could be a hardware issue like a failing memory chip or battery. At that point, visit an Apple Store or authorized repair shop for diagnostics. If the iPad is more than 5 years old, it may be more cost-effective to replace it.",
    metaTitle: "iPad Frozen and Not Responding? Quick Fix Guide | RepairItFree",
    metaDescription:
      "Fix a frozen iPad that won't respond to touch. Learn how to force restart any iPad model and stop recurring freezes with these free, easy steps.",
  },
  {
    id: "amazon-fire-tablet-slow-wont-update",
    category: "Tablets",
    categorySlug: "tablets",
    brand: "Amazon",
    brandSlug: "amazon",
    problemSlug: "fire-tablet-slow-wont-update",
    problemTitle: "Fire Tablet Slow / Won't Update",
    difficulty: "Easy",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [],
    partsNeeded: [
      {
        name: "MicroSD Card (64GB or 128GB)",
        costRange: "$8-$15",
        amazonUrl:
          "https://www.amazon.com/s?k=microsd+card+128gb+fire+tablet&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=microsd+card+128gb+fire+tablet&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Back up any important files before doing a factory reset.",
      "Make sure your tablet is charged above 50% before starting a software update.",
    ],
    quickDiagnosis:
      "Amazon Fire tablets slow down over time because of limited storage and memory. The good news is you can usually speed it up for free by clearing out junk and adjusting a few settings. If it won't update, it's often a storage space issue.",
    steps: [
      {
        number: 1,
        title: "Free up storage space",
        description:
          "Go to Settings > Storage. If you have less than 2 GB free, that's your problem. Tap 'Internal Storage' to see what's taking up space. Delete apps you don't use, clear downloaded content from Amazon Video or Kindle, and move photos to the cloud or a computer. Fire tablets have very little storage, so this makes a huge difference.",
      },
      {
        number: 2,
        title: "Clear app caches",
        description:
          "Go to Settings > Apps & Notifications > Manage All Applications. Tap on the biggest apps (like Amazon Silk, Amazon Video, or games) and hit 'Clear Cache.' This removes temporary junk files that build up over time. Don't hit 'Clear Data' unless you want to lose your app settings and login info.",
      },
      {
        number: 3,
        title: "Restart and try the update again",
        description:
          "Hold the power button, tap Restart, and wait for it to fully boot up. Then go to Settings > Device Options > System Updates and tap 'Check Now.' If the update fails, make sure you're on a strong Wi-Fi connection and have at least 2-3 GB of free space. Updates need room to download and install.",
      },
      {
        number: 4,
        title: "Turn off background features that slow things down",
        description:
          "Go to Settings > Apps & Notifications > Amazon Appstore and tap 'Force Stop,' then disable auto-updates. Also turn off Special Offers (lockscreen ads) if possible. Disable Alexa if you don't use it: Settings > Alexa. These background processes eat up the tablet's limited memory.",
      },
      {
        number: 5,
        title: "Factory reset if nothing else works",
        description:
          "If your tablet is still painfully slow, a factory reset gives it a fresh start. Go to Settings > Device Options > Reset to Factory Defaults. You'll lose everything on the tablet, so back up anything important first. After the reset, only reinstall the apps you actually use — loading it up again will just slow it back down.",
      },
    ],
    alternativeCauses: [
      "An old Fire tablet model that can't handle newer software demands",
      "A microSD card that's gone bad and is slowing down read/write operations",
      "Too many apps running in the background at the same time",
    ],
    whenToCallPro:
      "Fire tablets are budget devices, so if it's still slow after a factory reset, it may have reached its limits. A new Fire tablet costs $50-$80, which is usually cheaper than any professional repair. Consider upgrading if yours is more than 3-4 years old.",
    metaTitle: "Amazon Fire Tablet Slow or Won't Update? Speed It Up Free | RepairItFree",
    metaDescription:
      "Fix a slow Amazon Fire tablet that won't update. Free steps to clear storage, speed up performance, and get your Fire tablet working like new again.",
  },

  // ==========================================
  // TVs
  // ==========================================
  {
    id: "samsung-tv-wont-turn-on-red-light",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "wont-turn-on-red-light-blinking",
    problemTitle: "Won't Turn On (Red Light Blinking)",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: ["Phillips screwdriver", "Flashlight", "Multimeter (optional)"],
    partsNeeded: [
      {
        name: "Samsung TV Power Supply Board (model-specific)",
        costRange: "$20-$60",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+tv+power+supply+board&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+tv+power+supply+board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the TV before opening the back panel. TVs contain capacitors that store dangerous electrical charge even when unplugged.",
      "Do not touch any large capacitors inside the TV — they can shock you even after being unplugged.",
      "If you're not comfortable working around electronics, skip to the 'when to call a pro' section.",
    ],
    quickDiagnosis:
      "A blinking red light on a Samsung TV usually means the TV is getting power but something is stopping it from fully turning on. This is commonly a power supply issue, a software glitch, or a bad capacitor. The good news is the first few fixes are free and easy to try.",
    steps: [
      {
        number: 1,
        title: "Do a full power reset",
        description:
          "Unplug the TV from the wall outlet. Wait a full 60 seconds — not 10, not 30, a full 60 seconds. While it's unplugged, press and hold the power button on the TV itself (not the remote) for 30 seconds. This drains any leftover power from the circuits. Plug it back in and try turning it on. This simple step fixes the problem more often than you'd expect.",
      },
      {
        number: 2,
        title: "Check your power outlet and cable",
        description:
          "Plug something else into the same outlet to make sure it works. Try a different outlet for the TV. Check that the power cable is firmly seated in the back of the TV — some Samsung models have a detachable power cord that can work loose. Also remove any surge protectors or power strips temporarily and plug directly into the wall.",
      },
      {
        number: 3,
        title: "Count the red light blinks",
        description:
          "When you try to turn on the TV, watch the red standby light carefully. Count how many times it blinks before pausing. Samsung TVs use blink codes: 2 blinks often means a power supply issue, 5 blinks can mean a mainboard problem. Search your TV model number plus the blink count for specific guidance.",
      },
      {
        number: 4,
        title: "Inspect the power board for bad capacitors",
        description:
          "If the power reset didn't work and you're comfortable opening electronics, unplug the TV and remove the back panel screws. Look at the power supply board — it's the board where the power cord connects. Look for capacitors (the small cylinder-shaped components) that are bulging on top, leaking, or look puffy. Swollen capacitors are a very common cause and the board can be replaced by swapping it out.",
      },
      {
        number: 5,
        title: "Replace the power supply board if needed",
        description:
          "If you spotted bad capacitors, order a replacement power supply board for your specific model number (check the sticker on the board itself). Replacement is straightforward: disconnect the ribbon cables from the old board, unscrew it, screw in the new one, and reconnect the cables. Take a photo of all cable positions before disconnecting anything.",
      },
    ],
    alternativeCauses: [
      "A firmware update that went wrong and corrupted the software",
      "A failed main logic board (more expensive to replace)",
      "A backlight failure that makes the screen look off even though the TV is on",
    ],
    whenToCallPro:
      "If the power reset doesn't fix it and you're not comfortable opening the TV, call a repair tech. Also call a pro if the blink code points to a mainboard failure. Expect $80-$200 for a power board repair, or $150-$350 for a mainboard replacement. If the TV is more than 7 years old, it may be cheaper to replace it.",
    metaTitle: "Samsung TV Won't Turn On Red Light Blinking? Fix Guide | RepairItFree",
    metaDescription:
      "Samsung TV won't turn on and the red light is blinking? Learn what the blink codes mean and how to fix common power issues step by step.",
  },
  {
    id: "lg-tv-no-picture-has-sound",
    category: "TVs",
    categorySlug: "tvs",
    brand: "LG",
    brandSlug: "lg",
    problemSlug: "no-picture-but-has-sound",
    problemTitle: "No Picture But Has Sound",
    difficulty: "Medium",
    timeEstimate: "15-45 minutes",
    costEstimate: "$0-$80",
    toolsNeeded: ["Flashlight", "Phillips screwdriver"],
    partsNeeded: [
      {
        name: "LG TV LED Backlight Strip Set (model-specific)",
        costRange: "$15-$80",
        amazonUrl:
          "https://www.amazon.com/s?k=lg+tv+led+backlight+strip+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=lg+tv+led+backlight+strip+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the TV and wait 10 minutes before opening the back panel.",
      "Do not touch large capacitors on the power board — they can hold a charge.",
      "Be very gentle with the LCD panel. Even light pressure can crack it from behind.",
    ],
    quickDiagnosis:
      "If your LG TV has sound but no picture, the TV is actually working — you just can't see it. This is almost always a backlight failure. There's one quick test to confirm: in a dark room, turn on the TV and shine a flashlight very close to the screen. If you can faintly see the picture, the backlight is dead but the screen itself is fine.",
    steps: [
      {
        number: 1,
        title: "Do the flashlight test",
        description:
          "Turn on the TV in a dark room. Hold a flashlight right up against the screen — almost touching it. Look carefully for a faint image. If you can see a dim picture, your backlights have failed but the LCD panel and electronics are working fine. This is good news because backlight strips are relatively cheap to replace.",
      },
      {
        number: 2,
        title: "Try a power reset first",
        description:
          "Before assuming the worst, unplug the TV for 60 seconds. Press and hold the power button on the TV for 30 seconds while unplugged. Plug it back in and turn it on. Also try pressing the Menu button on the TV itself — if the menu appears but dim, that confirms a backlight issue, not a board issue.",
      },
      {
        number: 3,
        title: "Check all HDMI connections",
        description:
          "If the flashlight test shows nothing at all, the issue might be simpler. Unplug all HDMI cables, then plug them back in firmly. Try a different HDMI port on the TV. Try a different HDMI cable. Change the input source using the remote or buttons on the TV. Sometimes the TV is just set to the wrong input.",
      },
      {
        number: 4,
        title: "Replace the LED backlight strips (for confirmed backlight failure)",
        description:
          "If the flashlight test confirmed a backlight issue: unplug the TV, remove the back panel screws, and carefully separate the layers — back cover, boards, metal frame, then the diffuser sheets and light guide. The LED strips are underneath. Note how they're connected. Swap in the new strips, making sure every connector is secure. This takes patience but is very doable.",
      },
      {
        number: 5,
        title: "Test before fully reassembling",
        description:
          "Before putting everything back together, reconnect the backlight strips to the driver board and carefully plug in the TV. Turn it on from a safe distance. If the backlights glow and the picture appears, great — unplug it again and reassemble everything. If some areas are brighter than others, double-check that all strip connectors are fully seated.",
      },
    ],
    alternativeCauses: [
      "A failed T-Con (timing controller) board can cause a black screen with sound",
      "A loose ribbon cable between the T-Con board and the LCD panel",
      "The power supply board not delivering enough voltage to the backlight driver",
    ],
    whenToCallPro:
      "If you're not comfortable taking apart the TV, a backlight repair from a professional typically runs $100-$200 including parts and labor. If the T-Con board or main board is the issue, expect $100-$250. For TVs under 50 inches or more than 5-6 years old, compare the repair cost to a new TV before spending.",
    metaTitle: "LG TV No Picture But Has Sound? Backlight Fix Guide | RepairItFree",
    metaDescription:
      "LG TV has sound but no picture? Learn the flashlight test to diagnose backlight failure and how to replace LED backlight strips yourself.",
  },
  {
    id: "vizio-tv-black-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Vizio",
    brandSlug: "vizio",
    problemSlug: "black-screen",
    problemTitle: "Black Screen",
    difficulty: "Medium",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$50",
    toolsNeeded: ["Flashlight", "Phillips screwdriver (if opening back panel)"],
    partsNeeded: [
      {
        name: "Vizio TV Power Supply Board (model-specific)",
        costRange: "$20-$50",
        amazonUrl:
          "https://www.amazon.com/s?k=vizio+tv+power+supply+board&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=vizio+tv+power+supply+board&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Always unplug the TV before removing the back panel.",
      "Capacitors on the power board can hold a charge. Avoid touching them directly.",
    ],
    quickDiagnosis:
      "A black screen on a Vizio TV could mean several things: the backlight is dead, the power board failed, or it could be as simple as the wrong input. Start with the easy checks before opening anything up. The flashlight test is your best friend here.",
    steps: [
      {
        number: 1,
        title: "Power cycle the TV properly",
        description:
          "Unplug the Vizio TV from the wall. Press and hold the power button on the back or side of the TV (not the remote) for 15 seconds. Wait a full 60 seconds. Plug it back in. This resets the internal power supply and fixes a surprising number of black screen issues on Vizio TVs.",
      },
      {
        number: 2,
        title: "Check if the TV is actually on",
        description:
          "Press the Menu button on the TV itself. If a menu pops up on a black background, the TV is on but not receiving a signal — check your input source and HDMI cables. If nothing appears at all, do the flashlight test: hold a flashlight against the screen in a dark room and look for a faint image. A faint picture means the backlight has failed.",
      },
      {
        number: 3,
        title: "Check HDMI cables and inputs",
        description:
          "Unplug all HDMI cables and plug them back in firmly. Try a different HDMI port. Press the Input button on the TV to cycle through all sources. Try connecting a different device (like a laptop) to rule out a problem with your streaming stick or cable box.",
      },
      {
        number: 4,
        title: "Look for swollen capacitors on the power board",
        description:
          "If the TV won't turn on at all, unplug it, remove the back panel screws, and look at the power supply board. Check for capacitors that look swollen, bulging, or are leaking brown fluid. Bad capacitors are an extremely common failure on Vizio TVs and are the most likely hardware cause.",
      },
      {
        number: 5,
        title: "Replace the power supply board",
        description:
          "Find your TV model number on the back label and order a matching power board. The swap is simple: take a photo of all cable connections, disconnect them, unscrew the old board, screw in the new one, and reconnect everything. Power boards for Vizio TVs are usually $20-$50, making this one of the most affordable TV repairs.",
      },
    ],
    alternativeCauses: [
      "Backlight LED strips failing (common on older Vizio models)",
      "Main board failure preventing the TV from outputting a picture",
      "A firmware glitch — some Vizio models have known update bugs",
    ],
    whenToCallPro:
      "If the power board swap doesn't fix it, the issue may be with the main board or LED backlights. A professional repair for backlights runs $100-$200. If the main board needs replacing, expect $100-$250. Vizio TVs are affordable, so weigh the repair cost against buying a new one.",
    metaTitle: "Vizio TV Black Screen? Step-by-Step Fix Guide | RepairItFree",
    metaDescription:
      "Fix a Vizio TV with a black screen. Learn how to power cycle, diagnose backlight failure, and check for bad capacitors with this free repair guide.",
  },
  {
    id: "samsung-tv-remote-not-working",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Samsung",
    brandSlug: "samsung",
    problemSlug: "remote-not-working",
    problemTitle: "Remote Not Working",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: ["Phone camera", "Small Phillips or flathead screwdriver (if cleaning contacts)"],
    partsNeeded: [
      {
        name: "AA or AAA Batteries (for remote)",
        costRange: "$3-$8",
        amazonUrl:
          "https://www.amazon.com/s?k=AA+batteries+for+remote&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=AA+batteries+for+remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
      {
        name: "Samsung TV Replacement Remote",
        costRange: "$8-$15",
        amazonUrl:
          "https://www.amazon.com/s?k=samsung+smart+tv+replacement+remote&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=samsung+smart+tv+replacement+remote&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If battery acid has leaked inside the remote, wear gloves and clean it carefully.",
    ],
    quickDiagnosis:
      "A Samsung TV remote that stops working is usually just dead batteries or a pairing issue. Before buying a new remote, try these quick tests — there's a good chance you can fix it in a couple of minutes for free.",
    steps: [
      {
        number: 1,
        title: "Test the remote with your phone camera",
        description:
          "Point the front of the remote at your phone's front camera (not the main camera — the front one works better for this). Press any button on the remote while watching through the phone screen. If you see a purple or white flash from the remote's IR emitter, the remote is sending signals and the problem is with the TV's sensor. If you see nothing, the remote isn't working.",
      },
      {
        number: 2,
        title: "Replace or reseat the batteries",
        description:
          "Pop out the batteries and look for any white corrosion or battery acid. If you see corrosion, clean the contacts with a cotton swab dipped in rubbing alcohol. Put in fresh batteries — make sure they're facing the right direction. Even if the old batteries 'seem fine,' try new ones. Weak batteries are the most common cause.",
      },
      {
        number: 3,
        title: "Re-pair a Samsung Smart Remote",
        description:
          "If you have a Samsung Smart Remote (the slim one with fewer buttons), it connects via Bluetooth, not just IR. Point the remote at the TV from about a foot away and hold the Return button and the Play/Pause button together for 5 seconds. The TV should display a pairing message. Some models use different button combos — check the label on the back of your remote for the model.",
      },
      {
        number: 4,
        title: "Reset the TV's remote sensor",
        description:
          "Unplug the TV for 60 seconds, then plug it back in. This resets the TV's Bluetooth and IR receiver. After it powers back on, try the remote again. Also make sure nothing is blocking the small sensor on the front of the TV — soundbars and decorations can block the signal.",
      },
    ],
    alternativeCauses: [
      "Other IR devices (like soundbar remotes) interfering with the signal",
      "The TV's IR sensor is blocked by a soundbar, sticker, or case",
      "Physical damage to the remote from being dropped",
    ],
    whenToCallPro:
      "You probably don't need a professional for this. If none of the above steps work, a replacement Samsung remote costs $8-$15 online and takes zero setup. If even a new remote doesn't work, the TV's IR sensor or Bluetooth module may need repair — but that's rare.",
    metaTitle: "Samsung TV Remote Not Working? Quick Fix Guide | RepairItFree",
    metaDescription:
      "Samsung TV remote stopped working? Test it with your phone camera and try these free fixes. Learn how to re-pair, clean, or replace your remote.",
  },
  {
    id: "generic-tv-screen-flickering",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "screen-flickering",
    problemTitle: "TV Screen Flickering",
    difficulty: "Easy",
    timeEstimate: "10-30 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: ["Phillips screwdriver (if checking cables behind TV)"],
    partsNeeded: [
      {
        name: "High-Speed HDMI Cable (4K rated)",
        costRange: "$8-$15",
        amazonUrl:
          "https://www.amazon.com/s?k=high+speed+hdmi+cable+4k+certified&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=high+speed+hdmi+cable+4k+certified&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the TV before touching any cables on the back panel.",
      "If the flickering is accompanied by a burning smell, unplug immediately and do not use the TV.",
    ],
    quickDiagnosis:
      "TV flickering can look scary but it's usually something simple — a loose HDMI cable, a settings issue, or a refresh rate mismatch. Most of the time you can fix this without opening the TV or spending any money.",
    steps: [
      {
        number: 1,
        title: "Check all cable connections",
        description:
          "Unplug every HDMI and video cable from the back of the TV, then plug them back in firmly. A loose HDMI cable is the #1 cause of TV flickering. Wiggle each cable gently — if the flickering starts or stops when you move a cable, you've found your problem. Try a different HDMI cable or port.",
      },
      {
        number: 2,
        title: "Turn off energy-saving features",
        description:
          "Many TVs have energy-saving or eco modes that dim the backlight dynamically. This can look like flickering. Go to Settings > Picture or Display > Energy Saving and turn it off. Also look for settings called 'Ambient Light Sensing' or 'Eco Sensor' and disable those too.",
      },
      {
        number: 3,
        title: "Adjust the refresh rate and motion settings",
        description:
          "Go to your TV's picture settings and look for motion smoothing, Auto Motion Plus, TruMotion, or similar features. Turn them off. Also check that the TV's refresh rate matches your content source. If you're using a streaming device or gaming console, try changing its output to 60Hz in its display settings.",
      },
      {
        number: 4,
        title: "Power cycle the TV",
        description:
          "Unplug the TV for 60 seconds. Press the power button on the TV (not the remote) for 15 seconds while unplugged. Plug it back in. This clears the TV's memory and resets display processing. If the flickering only happens with one app or channel, the issue is likely with that source, not the TV.",
      },
    ],
    alternativeCauses: [
      "A failing LED backlight (flickering will gradually get worse over time)",
      "Power supply issues in the TV delivering inconsistent voltage",
      "Interference from other electronics plugged into the same outlet",
    ],
    whenToCallPro:
      "If the flickering happens on all inputs, persists after a power cycle, and doesn't change with settings adjustments, it could be a backlight or power supply issue. A professional diagnosis typically costs $50-$80. Factor in the age and value of your TV before investing in a repair.",
    metaTitle: "TV Screen Flickering? Easy Fixes to Try First | RepairItFree",
    metaDescription:
      "Fix TV screen flickering with these simple steps. Check cables, adjust settings, and troubleshoot the most common causes of a flickering television.",
  },
  {
    id: "roku-tv-no-signal",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Roku",
    brandSlug: "roku",
    problemSlug: "no-signal",
    problemTitle: "No Signal",
    difficulty: "Easy",
    timeEstimate: "5-20 minutes",
    costEstimate: "$0-$15",
    toolsNeeded: [],
    partsNeeded: [
      {
        name: "HDMI Cable (High Speed)",
        costRange: "$8-$12",
        amazonUrl:
          "https://www.amazon.com/s?k=hdmi+cable+high+speed+6ft&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=hdmi+cable+high+speed+6ft&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Make sure connected devices are powered off before unplugging HDMI cables.",
    ],
    quickDiagnosis:
      "A 'No Signal' message on a Roku TV means the TV is working fine — it just can't find anything to display on the selected input. This is almost always a cable issue, a wrong input selection, or the connected device needs a restart. You can fix this in a few minutes.",
    steps: [
      {
        number: 1,
        title: "Make sure you're on the right input",
        description:
          "Press the Home button on your Roku remote to go back to the Roku home screen. If the home screen shows up, the TV is fine — you're just on the wrong input. Navigate to the correct input (HDMI 1, HDMI 2, etc.) that matches where your cable box, console, or streaming device is plugged in. Check the back of the TV to confirm which port you're using.",
      },
      {
        number: 2,
        title: "Reseat all HDMI cables",
        description:
          "Unplug the HDMI cable from both the TV and the connected device (cable box, game console, etc.). Wait 10 seconds, then plug both ends back in firmly. Make sure the cable clicks in and isn't loose. Try a different HDMI port on the TV if the first one doesn't work.",
      },
      {
        number: 3,
        title: "Restart the connected device",
        description:
          "Power off whatever device you're trying to watch (cable box, Roku stick, PlayStation, etc.). Unplug it from power for 30 seconds, then plug it back in. Many 'No Signal' issues are actually caused by the source device freezing up, not the TV itself. Wait for it to fully boot before checking again.",
      },
      {
        number: 4,
        title: "Restart the Roku TV itself",
        description:
          "Go to Settings > System > Power > System Restart on the Roku menu. If you can't access the menu, unplug the TV for 60 seconds and plug it back in. After it restarts, navigate to the correct input. If you're still seeing 'No Signal,' try a different HDMI cable — cheap cables fail more often than you'd think.",
      },
    ],
    alternativeCauses: [
      "A bad HDMI cable that looks fine but has a broken wire inside",
      "The connected device's HDMI output resolution is set higher than the TV supports",
      "A firmware bug — check for Roku system updates under Settings > System > System Update",
    ],
    whenToCallPro:
      "If you've tried multiple cables, ports, and devices, and the TV shows 'No Signal' on every HDMI input, the TV's HDMI board may be faulty. This is uncommon but can happen after a power surge. A professional repair would run $80-$150, so compare that to the cost of a new Roku TV.",
    metaTitle: "Roku TV No Signal? How to Fix It Fast | RepairItFree",
    metaDescription:
      "Roku TV showing 'No Signal'? Fix it in minutes by checking inputs, reseating HDMI cables, and restarting your devices. Free step-by-step troubleshooting guide.",
  },
  {
    id: "generic-tv-lines-on-screen",
    category: "TVs",
    categorySlug: "tvs",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "lines-on-screen",
    problemTitle: "Lines on Screen (Horizontal or Vertical)",
    difficulty: "Medium",
    timeEstimate: "10-45 minutes",
    costEstimate: "$0-$60",
    toolsNeeded: ["Phillips screwdriver", "Soft cloth", "Isopropyl alcohol"],
    partsNeeded: [
      {
        name: "T-Con Board (model-specific)",
        costRange: "$15-$60",
        amazonUrl:
          "https://www.amazon.com/s?k=tv+t-con+board+replacement&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=tv+t-con+board+replacement&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the TV and wait at least 10 minutes before removing the back panel.",
      "Be very gentle with ribbon cables connecting to the LCD panel — they tear easily and are expensive to replace.",
    ],
    quickDiagnosis:
      "Lines on a TV screen can be caused by a loose cable, a bad T-Con board, or a damaged panel. The key is figuring out which one. If the lines appear on all inputs including the TV menu, the issue is inside the TV. If they only show on one input, it's the connected device or cable.",
    steps: [
      {
        number: 1,
        title: "Figure out if it's the TV or the source",
        description:
          "Press the Menu button on your TV remote. Look at the on-screen menu itself — are the lines visible on the menu too? If yes, the problem is inside the TV. If the menu looks clean but the lines appear on your cable/streaming content, the issue is with the connected device, cable, or input. Try different HDMI inputs and cables to narrow it down.",
      },
      {
        number: 2,
        title: "Power cycle the TV",
        description:
          "Unplug the TV for 60 seconds. Press and hold the power button on the TV for 15 seconds while unplugged. Plug it back in. Sometimes lines are caused by a temporary processing glitch that a full power cycle can clear. If the lines disappear but keep coming back, the issue is progressing and will need a hardware fix.",
      },
      {
        number: 3,
        title: "Gently tap the back of the TV near the edges",
        description:
          "This sounds old-school, but it's actually a diagnostic trick. With the TV on, gently tap the back panel near the edges with your palm. If the lines change, appear, or disappear when you tap, it means a ribbon cable or connector is loose inside. This is good news because loose cables can usually be fixed.",
      },
      {
        number: 4,
        title: "Reseat the T-Con board ribbon cables",
        description:
          "Unplug the TV and remove the back panel. Find the T-Con board — it's usually a small board in the center or top with flat ribbon cables going to the LCD panel. Gently disconnect these ribbon cables and reconnect them, making sure they're fully seated. Clean the cable connectors with a soft cloth and a tiny bit of isopropyl alcohol. Reattach the back panel and test.",
      },
      {
        number: 5,
        title: "Replace the T-Con board if reseating didn't help",
        description:
          "If the lines persist, the T-Con board itself may be faulty. Note the board's part number (printed on the board) and order a replacement. The swap is easy — just disconnect the cables, unscrew the old board, install the new one, and reconnect. T-Con boards are one of the cheapest and easiest TV boards to replace.",
      },
    ],
    alternativeCauses: [
      "Physical damage to the LCD panel from impact or pressure (not repairable — the panel must be replaced)",
      "A failing main board sending corrupted signals to the display",
      "Temperature changes causing cable connectors to expand and contract",
    ],
    whenToCallPro:
      "If the lines remain after a T-Con board replacement, the LCD panel itself may be damaged. Panel replacement usually costs more than a new TV, so at that point it's typically not worth repairing. A professional can confirm whether it's the panel before you spend money. Diagnosis usually runs $50-$80.",
    metaTitle: "TV Has Lines on Screen? Diagnose and Fix It | RepairItFree",
    metaDescription:
      "Horizontal or vertical lines on your TV screen? Learn how to diagnose the cause and fix loose cables or a bad T-Con board with this step-by-step guide.",
  },
  {
    id: "tcl-tv-wont-connect-to-wifi",
    category: "TVs",
    categorySlug: "tvs",
    brand: "TCL",
    brandSlug: "tcl",
    problemSlug: "wont-connect-to-wifi",
    problemTitle: "Won't Connect to WiFi",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Make sure you know your WiFi password before starting — you may need to re-enter it.",
    ],
    quickDiagnosis:
      "WiFi connection problems on TCL TVs are very common and almost always fixable with a few settings changes. It's usually a router issue, a DNS setting, or a software glitch — not a hardware problem. You won't need any tools or parts for this fix.",
    steps: [
      {
        number: 1,
        title: "Restart both the TV and your router",
        description:
          "Unplug your TCL TV and your WiFi router. Wait 60 seconds. Plug the router back in first and wait for all the lights to come back on (about 2 minutes). Then plug the TV back in. This clears out network glitches on both ends and fixes WiFi issues more often than any other step.",
      },
      {
        number: 2,
        title: "Forget the network and reconnect",
        description:
          "On your TCL TV, go to Settings > Network & Internet > WiFi. Find your network name and select it. Choose 'Forget Network.' Now scan for networks again and reconnect from scratch. Enter your WiFi password carefully — one wrong character and it won't connect. Use the 'Show Password' option if available to double-check.",
      },
      {
        number: 3,
        title: "Change DNS settings manually",
        description:
          "If the TV connects to WiFi but apps won't load, try changing the DNS. Go to Settings > Network & Internet > WiFi, select your network, and choose 'Advanced' or 'IP Settings.' Change DNS to manual and enter 8.8.8.8 for primary DNS and 8.8.4.4 for secondary DNS. These are Google's public DNS servers and are more reliable than some ISP defaults.",
      },
      {
        number: 4,
        title: "Check for a software update via USB if needed",
        description:
          "If you can't connect to WiFi at all, you can still update the TV software via USB. Go to the TCL support website on your computer, find your TV model, and download the latest firmware to a USB drive. Plug the USB into your TV and go to Settings > System > About > System Update. Updating the firmware fixes many WiFi bugs that TCL has patched in newer versions.",
      },
      {
        number: 5,
        title: "Try the 2.4GHz network instead of 5GHz",
        description:
          "Many routers broadcast two networks — a 2.4GHz and a 5GHz one. The 5GHz network is faster but has shorter range and can struggle to reach a TV in another room. If your WiFi name has '5G' at the end, try the one without it. The 2.4GHz network is slower but more reliable through walls and at longer distances.",
      },
    ],
    alternativeCauses: [
      "Too many devices connected to the router at the same time",
      "The TV is too far from the router or there are thick walls blocking the signal",
      "Router firmware is outdated and causing compatibility issues",
    ],
    whenToCallPro:
      "If none of these steps work, try connecting the TV to your phone's hotspot to test the WiFi hardware. If the TV connects to the hotspot fine, the problem is with your router, not the TV — contact your internet provider. If the TV can't connect to anything, the WiFi module may be faulty. You can use an inexpensive USB WiFi adapter or Ethernet cable as a workaround.",
    metaTitle: "TCL TV Won't Connect to WiFi? Fix It Step by Step | RepairItFree",
    metaDescription:
      "TCL TV won't connect to WiFi? Try these free fixes including network reset, DNS changes, and firmware updates to get your TV back online fast.",
  },

  // ==========================================
  // SMART HOME
  // ==========================================
  {
    id: "ring-doorbell-not-connecting-wifi",
    category: "Smart Home",
    categorySlug: "smart-home",
    brand: "Ring",
    brandSlug: "ring",
    problemSlug: "not-connecting-to-wifi",
    problemTitle: "Ring Doorbell Not Connecting to WiFi",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$30",
    toolsNeeded: ["Phone with Ring app installed", "Screwdriver (if removing doorbell for reset)"],
    partsNeeded: [
      {
        name: "Ring Chime Pro WiFi Extender",
        costRange: "$25-$35",
        amazonUrl:
          "https://www.amazon.com/s?k=ring+chime+pro+wifi+extender&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=ring+chime+pro+wifi+extender&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "If your Ring is hardwired, turn off the breaker before removing it.",
      "Battery-powered Ring doorbells: make sure the battery is charged before troubleshooting WiFi.",
    ],
    quickDiagnosis:
      "Ring doorbells lose WiFi connection more often than most smart home devices because they're outside your house, far from the router. The fix is usually a simple network reset or moving your router closer. No special tools needed.",
    steps: [
      {
        number: 1,
        title: "Check the signal strength in the Ring app",
        description:
          "Open the Ring app, tap your doorbell, then tap Device Health. Look at the Signal Strength reading. If it says 'Poor' or the RSSI number is higher than -60, your WiFi signal is too weak at the doorbell. This is the most common cause. You may need a WiFi extender near the front door.",
      },
      {
        number: 2,
        title: "Restart your router and the Ring doorbell",
        description:
          "Unplug your WiFi router for 60 seconds, then plug it back in. Wait 2 minutes for it to fully restart. Then restart your Ring doorbell: for battery models, press and release the setup button on the back. For wired models, turn off the breaker for 30 seconds, then turn it back on. Give it 2-3 minutes to reconnect.",
      },
      {
        number: 3,
        title: "Reconnect through the Ring app",
        description:
          "If the doorbell didn't automatically reconnect, open the Ring app, tap your doorbell, tap Device Health, then tap 'Reconnect to WiFi' or 'Change WiFi Network.' Follow the prompts to put the doorbell in setup mode (you'll press the orange button on the back) and select your WiFi network. Make sure you're connecting to the 2.4GHz network, not 5GHz — most Ring doorbells don't support 5GHz.",
      },
      {
        number: 4,
        title: "Do a full factory reset if needed",
        description:
          "If reconnecting doesn't work, try a factory reset. Press and hold the orange setup button on the back of the Ring doorbell for 20 seconds. The light on the front will flash. Wait 2 minutes, then set it up again through the Ring app as if it were brand new. You won't lose your Ring subscription or account — just the WiFi settings.",
      },
    ],
    alternativeCauses: [
      "Your ISP changed your WiFi password or network name during a service update",
      "A neighbor's WiFi is on the same channel and causing interference",
      "The Ring doorbell battery is too low to maintain a WiFi connection",
    ],
    whenToCallPro:
      "If the Ring connects to WiFi but keeps dropping the connection daily, consider a WiFi extender or mesh network system to improve coverage at your front door. If the Ring won't enter setup mode at all and the factory reset doesn't work, it may have a hardware defect — contact Ring support for a potential warranty replacement.",
    metaTitle: "Ring Doorbell Not Connecting to WiFi? Easy Fix Guide | RepairItFree",
    metaDescription:
      "Fix your Ring doorbell WiFi connection issues. Learn how to check signal strength, reset the device, and reconnect step by step.",
  },
  {
    id: "nest-thermostat-not-turning-on",
    category: "Smart Home",
    categorySlug: "smart-home",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "nest-thermostat-not-turning-on",
    problemTitle: "Nest Thermostat Not Turning On",
    difficulty: "Medium",
    timeEstimate: "15-30 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: ["Phillips screwdriver", "Multimeter (optional)", "USB-C cable (for charging)"],
    partsNeeded: [
      {
        name: "C-Wire Adapter for Nest Thermostat",
        costRange: "$15-$25",
        amazonUrl:
          "https://www.amazon.com/s?k=nest+thermostat+c+wire+adapter&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=nest+thermostat+c+wire+adapter&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Turn off the HVAC breaker before removing or working on the thermostat.",
      "Do not short thermostat wires together — this can damage your HVAC system.",
      "Take a photo of the wire connections before disconnecting anything.",
    ],
    quickDiagnosis:
      "A Nest thermostat that won't turn on has almost always run out of battery power. Unlike old thermostats, Nest uses an internal rechargeable battery that gets charged by your HVAC system. If the battery drains, the thermostat goes dark. The most common cause is a missing 'C-wire' that would keep it charged.",
    steps: [
      {
        number: 1,
        title: "Charge the Nest manually with USB",
        description:
          "Pull the Nest display off its base (it pulls straight off). Look for the USB-C port on the back. Connect it to a phone charger using a USB-C cable and let it charge for at least 30 minutes. If the screen comes on and shows a battery icon, you've confirmed it was just dead. Put it back on the base and see if it stays charged over the next 24 hours.",
      },
      {
        number: 2,
        title: "Check that your HVAC system has power",
        description:
          "Make sure the HVAC breaker in your electrical panel is turned on. Then go to the thermostat, pull off the Nest display, and look at the base plate. You should see the wires connected. If you have a multimeter, check for 24V AC between the R wire and C wire (if you have one). No voltage means your furnace transformer or a fuse may be blown.",
      },
      {
        number: 3,
        title: "Check for a blown HVAC fuse",
        description:
          "Many furnaces and air handlers have a small 3-amp or 5-amp fuse on the control board. Turn off the breaker and open the furnace panel. Look for a small automotive-style fuse. If it's blown (you'll see a broken wire inside), replace it. Blown fuses are common when thermostat wires are accidentally shorted during installation.",
      },
      {
        number: 4,
        title: "Check if you have a C-wire",
        description:
          "Pull the Nest off the base and look at the connected wires. If there's no wire on the C terminal, your Nest doesn't have a common wire. Without a C-wire, the Nest tries to charge through the heating and cooling wires, which doesn't always provide enough power. Adding a C-wire adapter is the permanent fix and prevents this problem from happening again.",
      },
      {
        number: 5,
        title: "Restart the Nest thermostat",
        description:
          "If the Nest has charge but isn't responding properly, hold down the Nest ring (the entire front face) for 10 seconds until the screen goes black. Release and wait for it to boot up. If that doesn't work, go to Settings > Reset > Restart on the Nest itself. This clears software glitches without erasing your schedule or settings.",
      },
    ],
    alternativeCauses: [
      "The wiring connections are loose or corroded on the base plate",
      "A software update failed and corrupted the thermostat firmware",
      "Incompatible HVAC system wiring (some older systems aren't compatible with Nest)",
    ],
    whenToCallPro:
      "If you need to install a C-wire and aren't comfortable working with HVAC wiring, hire an HVAC technician. It typically costs $75-$150 and takes about 30 minutes. Also call a pro if the HVAC fuse keeps blowing after replacement — that indicates a wiring short somewhere in the system.",
    metaTitle: "Nest Thermostat Not Turning On? Fix It Step by Step | RepairItFree",
    metaDescription:
      "Nest thermostat screen blank and not turning on? Learn how to charge it, check wiring, and fix the most common power issues yourself.",
  },
  {
    id: "amazon-alexa-echo-not-responding",
    category: "Smart Home",
    categorySlug: "smart-home",
    brand: "Amazon",
    brandSlug: "amazon",
    problemSlug: "alexa-echo-not-responding",
    problemTitle: "Alexa Echo Not Responding",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Phone with Alexa app installed"],
    partsNeeded: [],
    safetyWarnings: [
      "Make sure the microphone isn't muted — check for a red light ring or red mic button.",
    ],
    quickDiagnosis:
      "If your Alexa Echo isn't responding to voice commands, it's usually a WiFi issue, a muted microphone, or a software glitch. The good news is this almost never requires any replacement parts. Most of the time you'll have it working again in under 5 minutes.",
    steps: [
      {
        number: 1,
        title: "Check if the microphone is muted",
        description:
          "Look at the top of your Echo device. If you see a solid red light ring (or the mic button has a red line through it), the microphone is muted. Press the microphone button once to unmute it. The red light should go away. Now try saying 'Alexa' again. This is the most common reason people think their Echo is broken.",
      },
      {
        number: 2,
        title: "Power cycle the Echo",
        description:
          "Unplug the Echo from power. Wait 30 seconds. Plug it back in and wait for the light ring to turn blue, then orange, and finally settle. This takes about a minute. Once it's ready, the light will turn off and Alexa should respond to your voice again. A simple restart fixes most Echo issues.",
      },
      {
        number: 3,
        title: "Check your WiFi connection",
        description:
          "Open the Alexa app on your phone. Go to Devices > Echo & Alexa and tap your Echo. Check if it shows as 'Online.' If it says 'Offline,' your Echo lost its WiFi connection. Restart your router, wait 2 minutes, then unplug and replug the Echo. If it still won't connect, use the Alexa app to reconnect it to your WiFi network.",
      },
      {
        number: 4,
        title: "Reset the Echo if nothing else works",
        description:
          "If the Echo is online but still not responding, try a factory reset. For most Echo models, press and hold the Action button (the one with a dot) for 20-25 seconds. The light ring will turn orange, then blue. The Echo will enter setup mode. Open the Alexa app and set it up again. You won't lose your Amazon account or skills — just the device's WiFi settings.",
      },
    ],
    alternativeCauses: [
      "Amazon's servers are down (check downdetector.com for Alexa outages)",
      "Background noise is confusing the wake word detection",
      "The wake word was accidentally changed from 'Alexa' to something else",
    ],
    whenToCallPro:
      "Echo devices rarely need professional repair. If yours still doesn't work after a factory reset and fresh WiFi setup, it's likely a hardware defect. Contact Amazon support — they often replace defective Echos, especially if it's under warranty. A new Echo Dot is $25-$50, so professional repair isn't cost-effective.",
    metaTitle: "Alexa Echo Not Responding? Fix It in Minutes | RepairItFree",
    metaDescription:
      "Alexa not responding to voice commands? Check for a muted mic, restart the device, and try these quick fixes to get your Echo working again.",
  },
  {
    id: "google-home-not-connecting",
    category: "Smart Home",
    categorySlug: "smart-home",
    brand: "Google",
    brandSlug: "google",
    problemSlug: "not-connecting",
    problemTitle: "Google Home Not Connecting",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0",
    toolsNeeded: ["Phone with Google Home app installed"],
    partsNeeded: [],
    safetyWarnings: [
      "Make sure you know your WiFi password before factory resetting — you'll need to re-enter it.",
    ],
    quickDiagnosis:
      "A Google Home (or Nest speaker) that won't connect is usually a WiFi issue or a setup glitch. These devices rely entirely on WiFi, so if your network hiccups, the speaker goes offline. The fix is almost always free and takes about 10 minutes.",
    steps: [
      {
        number: 1,
        title: "Restart the Google Home speaker",
        description:
          "Unplug the Google Home from power. Wait 60 seconds (not less — give it a full minute). Plug it back in. Wait for the startup sound and for the LEDs to settle. The device should automatically reconnect to your WiFi. Check the Google Home app on your phone to see if it shows as online.",
      },
      {
        number: 2,
        title: "Restart your WiFi router",
        description:
          "Unplug your WiFi router and modem for 60 seconds. Plug the modem in first, wait for it to fully connect (all lights stable), then plug in the router. Wait another 2 minutes for it to broadcast. Now check if your Google Home reconnects automatically. If you have a mesh WiFi system, restart all nodes.",
      },
      {
        number: 3,
        title: "Check that your phone and speaker are on the same network",
        description:
          "Open the Google Home app and look for your device. If it's not showing up, make sure your phone is on the same WiFi network. Google Home setup requires your phone and the speaker to be on the same network. If your router has separate 2.4GHz and 5GHz networks, try connecting your phone to the 2.4GHz one — Google Home speakers prefer 2.4GHz.",
      },
      {
        number: 4,
        title: "Factory reset and set up again",
        description:
          "If the speaker still won't connect, do a factory reset. For Google Home: press and hold the mic mute button on the back for about 15 seconds. For Nest Mini: turn the device over and hold the reset button near the power cable for 15 seconds. You'll hear a confirmation sound. Then open the Google Home app and set it up as a new device. Your Google account settings and routines are stored in the cloud, so you won't lose them.",
      },
    ],
    alternativeCauses: [
      "Your router changed channels or settings after a firmware update",
      "Too many devices connected to the WiFi, hitting the router's device limit",
      "A Bluetooth device interfering with the Google Home's WiFi signal",
    ],
    whenToCallPro:
      "You don't need a professional for this issue. If your Google Home still won't connect after a factory reset on a working WiFi network, it may be defective. Contact Google support for a potential warranty replacement. If it's out of warranty, a new Google Nest Mini is around $30-$50, making repair impractical.",
    metaTitle: "Google Home Not Connecting? Quick Fix Guide | RepairItFree",
    metaDescription:
      "Google Home or Nest speaker not connecting? Restart, reconnect, and reset your device with these easy steps. Free troubleshooting guide.",
  },

  // ==========================================
  // SMALL ELECTRONICS
  // ==========================================
  {
    id: "generic-bluetooth-speaker-wont-pair",
    category: "Small Electronics",
    categorySlug: "small-electronics",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "bluetooth-speaker-wont-pair",
    problemTitle: "Bluetooth Speaker Won't Pair",
    difficulty: "Easy",
    timeEstimate: "5-15 minutes",
    costEstimate: "$0",
    toolsNeeded: [],
    partsNeeded: [],
    safetyWarnings: [
      "Make sure the speaker is charged — low battery can prevent Bluetooth pairing.",
    ],
    quickDiagnosis:
      "A Bluetooth speaker that won't pair is almost never broken. It's usually still connected to a different device, not actually in pairing mode, or there's a software glitch. You can fix this in a few minutes without any tools.",
    steps: [
      {
        number: 1,
        title: "Make sure the speaker is in pairing mode",
        description:
          "Just turning on a Bluetooth speaker doesn't mean it's ready to pair. Most speakers need to be put into pairing mode manually. Hold the Bluetooth button (or power button on some models) for 3-5 seconds until you see a flashing blue light or hear a 'pairing' voice prompt. The flashing light means it's discoverable. A solid light means it already connected to something else.",
      },
      {
        number: 2,
        title: "Disconnect the speaker from other devices",
        description:
          "Most Bluetooth speakers can only connect to one device at a time. If someone else's phone connected to it first, your phone can't see it. Turn off Bluetooth on any other phones, tablets, or laptops that may have previously connected. Or go into their Bluetooth settings and manually disconnect or 'Forget' the speaker.",
      },
      {
        number: 3,
        title: "Remove the old pairing from your phone and start fresh",
        description:
          "On your phone, go to Bluetooth settings and look for the speaker in your list of saved devices. Tap the info or gear icon next to it and select 'Forget This Device' or 'Unpair.' Now put the speaker back into pairing mode and scan for new devices on your phone. Selecting it fresh eliminates corrupted pairing data.",
      },
      {
        number: 4,
        title: "Reset the speaker to factory defaults",
        description:
          "If the speaker still won't show up, do a full reset. Most speakers: hold the Power button and Bluetooth button together for 10 seconds, or hold the Power button for 15 seconds. Check your speaker's manual for the exact reset method — it varies by brand. After resetting, the speaker will enter pairing mode automatically and clear all old connections.",
      },
    ],
    alternativeCauses: [
      "Your phone's Bluetooth cache is corrupted (try restarting your phone)",
      "The speaker is too far from your phone — move within 3 feet for initial pairing",
      "Interference from other Bluetooth or WiFi devices nearby",
    ],
    whenToCallPro:
      "Bluetooth speakers rarely need professional repair for pairing issues. If the speaker won't pair with any device after a factory reset, the Bluetooth module may be faulty. Since most Bluetooth speakers cost $20-$80, repair isn't usually worth it. Check if it's still under warranty for a free replacement.",
    metaTitle: "Bluetooth Speaker Won't Pair? Fix It in Minutes | RepairItFree",
    metaDescription:
      "Bluetooth speaker not pairing with your phone? Learn how to enter pairing mode, clear old connections, and reset your speaker with this free guide.",
  },
  {
    id: "generic-wireless-earbuds-one-side-not-charging",
    category: "Small Electronics",
    categorySlug: "small-electronics",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "wireless-earbuds-one-side-not-charging",
    problemTitle: "Wireless Earbuds Not Charging (One Side)",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$5",
    toolsNeeded: ["Cotton swabs", "Isopropyl alcohol (70% or higher)", "Toothpick or SIM tool"],
    partsNeeded: [
      {
        name: "Replacement Ear Tips (multi-size pack)",
        costRange: "$5-$10",
        amazonUrl:
          "https://www.amazon.com/s?k=wireless+earbud+replacement+tips+silicone&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=wireless+earbud+replacement+tips+silicone&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Don't use water to clean the charging contacts — use isopropyl alcohol, which evaporates quickly.",
      "Don't force an earbud into the case if it doesn't seat properly.",
    ],
    quickDiagnosis:
      "When one earbud won't charge, it's almost always dirty charging contacts in the case or on the earbud. Earwax, sweat, and pocket lint build up on the tiny metal pins and block the connection. A quick cleaning fixes this about 80% of the time.",
    steps: [
      {
        number: 1,
        title: "Clean the charging contacts on the earbud",
        description:
          "Look at the bottom of the earbud that won't charge. You'll see small metal pins or circles — those are the charging contacts. Dip a cotton swab in isopropyl alcohol and gently rub the contacts. If you see gunk, earwax, or discoloration, that's your problem. Clean until the metal is shiny. Let it dry for a minute before putting it back in the case.",
      },
      {
        number: 2,
        title: "Clean the charging contacts inside the case",
        description:
          "Look inside the charging case where the earbud sits. You'll see matching metal pins or spring-loaded contacts. Use a cotton swab with isopropyl alcohol to clean these too. If lint or debris is wedged in, use a toothpick to gently clear it out. The earbud needs to make solid contact with these pins to charge.",
      },
      {
        number: 3,
        title: "Make sure the earbud is seating properly",
        description:
          "Place the earbud back in the case and make sure it sits flat and clicks into position. If it feels loose, the ear tip may be too large and is preventing a proper fit. Try removing the ear tip temporarily and placing the earbud in the case — if it charges without the tip, you need a smaller tip or a different style.",
      },
      {
        number: 4,
        title: "Reset the earbuds",
        description:
          "Put both earbuds in the case and close the lid. Wait 30 seconds. Most earbuds have a reset button on the back or bottom of the case — hold it for 10-15 seconds. If there's no button, leave the case open with both earbuds inside for 30 seconds, then close it. Check if the charging LED for the problem earbud now lights up.",
      },
    ],
    alternativeCauses: [
      "The battery in one earbud has died (common after 2-3 years of daily use)",
      "A damaged charging pin inside the case that's been bent or pushed in",
      "Moisture damage from sweat or rain getting into the charging contacts",
    ],
    whenToCallPro:
      "If cleaning and resetting doesn't fix it, the earbud's internal battery may be dead. Unfortunately, wireless earbuds aren't really designed for battery replacement. Check your warranty — many brands offer free replacements for the first year. If out of warranty, it's usually more cost-effective to buy new earbuds than to repair them.",
    metaTitle: "Wireless Earbuds Not Charging One Side? Easy Fix | RepairItFree",
    metaDescription:
      "One wireless earbud not charging? Clean the contacts and reset your earbuds with this quick fix guide. Works for AirPods, Galaxy Buds, and more.",
  },
  {
    id: "generic-robot-vacuum-not-charging",
    category: "Small Electronics",
    categorySlug: "small-electronics",
    brand: "Generic",
    brandSlug: "generic",
    problemSlug: "robot-vacuum-not-charging",
    problemTitle: "Robot Vacuum Not Charging",
    difficulty: "Easy",
    timeEstimate: "10-20 minutes",
    costEstimate: "$0-$20",
    toolsNeeded: ["Soft cloth", "Isopropyl alcohol", "Cotton swabs"],
    partsNeeded: [
      {
        name: "Robot Vacuum Replacement Charging Dock (brand-specific)",
        costRange: "$15-$30",
        amazonUrl:
          "https://www.amazon.com/s?k=robot+vacuum+replacement+charging+dock&tag=repairitfree-20",
        ebayUrl:
          "https://www.ebay.com/sch/i.html?_nkw=robot+vacuum+replacement+charging+dock&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339148106&toolid=10001&mkevt=1",
      },
    ],
    safetyWarnings: [
      "Unplug the charging dock before cleaning the contacts.",
      "If the robot vacuum's battery is swollen or leaking, don't charge it — remove the battery and recycle it safely.",
    ],
    quickDiagnosis:
      "A robot vacuum that won't charge usually has dirty charging contacts on the robot, the dock, or both. Dust, hair, and dirt build up on the metal charging plates after every cleaning run. A quick wipe is all it takes to get charging again.",
    steps: [
      {
        number: 1,
        title: "Clean the charging contacts on the robot",
        description:
          "Flip your robot vacuum over and find the metal charging contacts — they're usually two metal strips or circles on the underside, near the front. Wipe them with a cloth dampened with isopropyl alcohol. They should be shiny metal when clean. If they look dark, corroded, or covered in dust, that's why it's not charging.",
      },
      {
        number: 2,
        title: "Clean the charging contacts on the dock",
        description:
          "Unplug the charging dock. Look at the metal charging strips or pins on the dock where the robot sits. Clean them with isopropyl alcohol on a cotton swab or cloth. Also check for any dust, hair, or debris around the base of the dock that might be preventing the robot from sitting flat and making good contact.",
      },
      {
        number: 3,
        title: "Check the dock placement",
        description:
          "Robot vacuums need a clear path to the dock. Place the dock flat against a wall on a hard floor (not carpet). Make sure there's at least 3 feet of clear space on each side and 5 feet in front. Manually push the robot up against the dock and listen for a beep or look for a charging light. If it charges when manually docked, the robot just can't find the dock on its own.",
      },
      {
        number: 4,
        title: "Check that the dock is getting power",
        description:
          "Make sure the dock is plugged in and the outlet works. Look for an indicator light on the dock — most docks have a small LED that confirms power. Try a different outlet. Check the power adapter and cable for any damage. If the dock light is off even when plugged in, the adapter may be dead.",
      },
      {
        number: 5,
        title: "Reset the robot vacuum",
        description:
          "If cleaning didn't help, reset the robot. Most models: hold the Home and Spot Clean buttons (or Power button) simultaneously for 10-15 seconds. Check your model's manual for the exact reset method. After resetting, manually dock the robot and see if it starts charging. If the battery indicator doesn't respond at all, the battery may need replacement.",
      },
    ],
    alternativeCauses: [
      "The internal battery has reached end of life (common after 2-3 years)",
      "The charging dock power adapter has failed",
      "A software bug preventing the robot from entering charging mode",
    ],
    whenToCallPro:
      "Robot vacuums usually don't need professional repair. If the contacts are clean, the dock has power, and it still won't charge, the battery is likely dead. Replacement batteries cost $20-$40 and are easy to swap on most models — just open the bottom panel and unplug the old battery. If you're uncomfortable doing that, a replacement dock is $15-$30 and might fix the issue if the dock is faulty.",
    metaTitle: "Robot Vacuum Not Charging? How to Fix It Fast | RepairItFree",
    metaDescription:
      "Robot vacuum won't charge? Clean the contacts on the robot and dock, check placement, and get your vacuum charging again with this step-by-step guide.",
  },
];
