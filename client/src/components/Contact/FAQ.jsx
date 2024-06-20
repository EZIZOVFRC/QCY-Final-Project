import { Accordion } from "rsuite";
import React, { useState } from "react";
import "rsuite/Accordion/styles/index.css";


const FAQ = () => {
  const [filter, setFilter] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFilterChange = (keyword) => {
    setFilter(keyword.toLowerCase());
  };

  const handleSearch = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const accordionData = [
    {
      header: "There is noise in the earbuds",
      content: (
        <p>
          Please first try to determine whether the earbuds noise changes with
          the volume, or gently shake the headset to confirm whether the
          internal parts have fallen off. If the noise is caused by the
          earbuds itself, it is recommended that you change the device to
          test, or try to reset and connect again.
        </p>
      ),
    },
    {
      header: "Earbuds sound intermittent",
      content: (
        <p>
          Note that this doesn't necessarily mean there's a problem with the
          headphones, but it could be related to the device and environment
          it's connected to. Bluetooth signals may be affected by obstacles
          such as walls, pillars, household appliances, Wi-Fi, etc. To ensure
          a stable connection, we recommend avoiding such obstructions. Please
          use other Bluetooth devices in different environments to check
          whether the headset (earbuds) is working properly, or reset the headset to
          test.
        </p>
      ),
    },
    {
      header: "The earbuds leak sound and people next to you can hear the sound from the earbuds",
      content: (
        <p>
          Due to the appearance design of different models of earbuds, there
          are gaps between the earbuds and the ear canal, making it impossible
          to be completely silent. You can try adjusting the way you wear your
          earbuds or lowering the volume.
        </p>
      ),
    },
    {
      header: "Earbud audio delayed/cut off?",
      content: (
        <p>
          1. Please make sure the earbuds have sufficient power and try them
          in other environments. 2. Replace the equipment for testing. 3. Some
          models of earbuds/mobile (earbuds) phones have a low-latency function, which
          can be turned on to confirm the status of the earbuds.
        </p>
      ),
    },
    {
      header: "Why can't my computer (xx mobile phone) be connected and used?",
      content: (
        <p>
          Please first confirm whether your device requires setting
          permissions. Reset the earphones, connect other devices to test
          whether the earbuds are working properly, and eliminate
          incompatibility.(earbuds)
        </p>
      ),
    },
    {
      header: "Put the earbuds into the charging case and still connect to the phone (continuously connected)",
      content: (
        <p>
          This may be because the earbuds or charging box are low on power.
          Please clean the charging pin with a dry cloth and alcohol-based
          disinfectant and charge it for 2 to 3 hours before testing.
        </p>
      ),
    },
    {
      header: "Wear issues",
      content: (
        <p>
          The watch band uses food-grade silica gel so users don’t suffer
          allergy when put it on. It’s recommended that user wear the band and
          leave one-finger  space between the band and wrist. Because human
          muscle will become bigger when temperature changes or after workouts
          and user might feel tight if there is no such space before.
        </p>
      ),
    },
    {
      header: "Can I change the smartwatch strap by myself?",
      content: (
        <p>
          Yes, you can, and very easy. Most smartwatches are free to change
          the strap, so you can keep your smartwatch clean and fresh for a
          long time. According to different occasions and clothes, you can watch
          choose different colors and styles of the strap, and very simple.
        </p>
      ),
    },
    {
      header: "How to charge watch",
      content: (
        <p>
          You can connect the cable included in the packaging to a phone
          charger to charge the watch.
        </p>
      ),
    },
    {
      header: "Charging issues or the watch won't turn on.",
      content: (
        <p>
          Clean the charging contacts of the watch and the charging contacts
          of the cable regularly. A small amount of isopropyl alcohol on a
          cotton bud or paper towel is a good option. Fully charge the smart
          watch, then restart it. If you have not used your watch before, or
          if it has not been used for a long time, it will not turn on because
          of over-discharge protection. The watch will need to be fully
          charged first.
        </p>
      ),
    },
    {
      header: "My watch's battery draining so fast?",
      content: (
        <p>
          When your watch has been fully charged, its battery life depends on
          how frequently you use the watch. If you check your watch very
          regularly or receive many notifications, the screen will be on more
          and the battery life will be shortened. Some other factors that
          affect battery life are: Features like continuous blood oxygen
          detection, sleep monitoring, and continuous heart rate detection.
          Sports tracking modes often use more battery than regular use.
        </p>
      ),
    },
    {
      header: "My APP is not work.",
      content: (
        <p>
          Check that Bluetooth is turned on on your phone and that the watch
          and phone are paired. In your phone's app store, check you have the
          latest version of your smart watch's app and update it if necessary.
          Restart the mobile phone. Re-pair your watch with your app. Your
          smart watch's app must be allowed to run in the background. Some
          smartphones automatically stop apps from running in the background
          to conserve battery, but this will stop the connection to your
          watch. Consult your smartphone's manual to prevent apps from
          automatically closing in the background.
        </p>
      ),
    },
  ];

  const filteredData = accordionData.filter(
    ({ header }) => !filter || header.toLowerCase().includes(filter)
  );

  return (
    <>
    <h2 className="faq__header">FAQ <i class="fa-solid fa-circle-question"></i></h2>
    <section className="contact_faq">
      <div className="contact_faq__filter">
        <div className={`contact_faq__filter__search ${isFocused ? 'focused' : ''}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <button className="faqFilter" onClick={() => handleFilterChange("earbuds")}>
          Headphones-earbuds <i className="fa-solid fa-angle-right"></i>
        </button>
        <button className="faqFilter" onClick={() => handleFilterChange("watch")}>
          Smart Watches <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <Accordion>
        {filteredData.map(({ header, content }) => (
          <Accordion.Panel key={header} header={header}>
            {content}
          </Accordion.Panel>
        ))}
      </Accordion>
    </section></>
  );
};

export default FAQ;
