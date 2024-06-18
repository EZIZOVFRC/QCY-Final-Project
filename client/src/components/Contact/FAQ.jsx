import { Accordion } from "rsuite";
import React from "react";
import "rsuite/Accordion/styles/index.css";
const FAQ = () => {
  return (
    <>
      <Accordion>
        <Accordion.Panel header="There is noise in the earbuds" defaultExpanded>
          <p>
            Please first try to determine whether the earbuds noise changes with
            the volume, or gently shake the headset to confirm whether the
            internal parts have fallen off. If the noise is caused by the
            earbuds itself, it is recommended that you change the device to
            test, or try to reset and connect again.
          </p>
        </Accordion.Panel>
        <Accordion.Panel header="earbuds sound intermittent">
          <p>
            Note that this doesn't necessarily mean there's a problem with the
            headphones, but it could be related to the device and environment
            it's connected to. Bluetooth signals may be affected by obstacles
            such as walls, pillars, household appliances, Wi-Fi, etc. To ensure
            a stable connection, we recommend avoiding such obstructions. Please
            use other Bluetooth devices in different environments to check
            whether the headset is working properly, or reset the headset to
            test.
          </p>
        </Accordion.Panel>
        <Accordion.Panel header="The earbuds leak sound and people next to you can hear the sound from the earbuds">
            <p>Due to the appearance design of different models of earbuds, there are gaps between the earbuds and the ear canal, making it impossible to be completely silent.

You can try adjusting the way you wear your earbuds or lowering the volume.</p>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default FAQ;
