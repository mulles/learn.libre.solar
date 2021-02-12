(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{549:function(e,t,r){"use strict";r.r(t);var o=r(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"firmware-development-frameworks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-development-frameworks"}},[e._v("#")]),e._v(" Firmware Development Frameworks")]),e._v(" "),r("p",[e._v("If you want to build your embedded application, you need a couple of tools to finish your task efficiently. One important aspect is the firmware framework, which provides you with everything you need to get started.")]),e._v(" "),r("p",[e._v("In order to not re-invent the wheel, a firmware framework usually contains libraries (e.g. drivers to access the hardware) and the necessary tools to build and flash the firmware.")]),e._v(" "),r("p",[e._v("A very popular framework is Arduino, which comes with an entire ecosystem of boards, firmware libraries and a simple editor.")]),e._v(" "),r("p",[e._v("This chapter gives an overview of the different aspects that need to be considered when selecting a firmware development framework.")]),e._v(" "),r("h2",{attrs:{id:"hardware-abstraction-and-drivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-abstraction-and-drivers"}},[e._v("#")]),e._v(" Hardware abstraction and drivers")]),e._v(" "),r("p",[e._v("If the same firmware should work on different microcontrollers, it makes sense to use a hardware abstraction layer (HAL) between the application code and the lower-level code directly accessing the registers of the MCU.")]),e._v(" "),r("p",[e._v("An example of such an abstraction is the "),r("code",[e._v("Serial.write()")]),e._v(" in Arduino firmware, which works the same way no matter if your board is based on an AVR 8-bit microcontroller or a 32-bit ESP8266.")]),e._v(" "),r("p",[e._v("There are different degrees of abstraction. Chip vendors usually provide libraries (vendor HALs) which allow to reuse the code if you switch between chip families.")]),e._v(" "),r("p",[e._v("Peripheral drivers with a common API across different vendors and chips can only provide the common denominator of functions. If some specific features of one chip need to be used, the driver may have to be bypassed and the lower-level functions of the chip have to be accessed directly.")]),e._v(" "),r("h2",{attrs:{id:"real-time-operating-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-time-operating-systems"}},[e._v("#")]),e._v(" Real-time operating systems")]),e._v(" "),r("p",[e._v("For more complex embedded projects with many different tasks that have to be handled in parallel, higher-level features like multithreading can be helpful.")]),e._v(" "),r("p",[e._v("These features are provided by a real-time operating system (RTOS), which might be independent of the drivers or come as an entire package with build system and drivers (as e.g. in the case of Zephyr RTOS). Frameworks that aim to work for chips of different vendors usually provide another unified driver API layer on top of the vendor HALs.")]),e._v(" "),r("p",[e._v("A typical firmware architecture with an RTOS kernel and supporting layers are shown in Figure 1.")]),e._v(" "),r("fig-caption",{attrs:{src:"development/rtos-architecture.svg",caption:"Firmware architecture with RTOS kernel",num:"1"}}),e._v(" "),r("p",[e._v("The features of an RTOS are further explained in "),r("a",{attrs:{href:"rtos_super_loop"}},[e._v("a dedicated chapter")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("For the Libre Solar project, we used "),r("a",{attrs:{href:"https://www.arduino.cc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arduino"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://os.mbed.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARM Mbed OS"),r("OutboundLink")],1),e._v(" in the past. However, the code for the charge controller and the battery management system was recently ported to "),r("a",{attrs:{href:"https://www.zephyrproject.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zephyr RTOS"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The main reasons for the selection of Zephyr RTOS:")]),e._v(" "),r("ul",[r("li",[e._v("Excellent build system and customization (based on Devicetree and Kconfig from Linux kernel) that allows a clear separation between board specification and the firmware itself.")]),e._v(" "),r("li",[e._v("Fast integration of new microcontroller support (e.g. the STM32G4 series, which is used in the new charge controllers).")]),e._v(" "),r("li",[e._v("Great community and open governance, so it’s a truly community-driven open source project.")]),e._v(" "),r("li",[e._v("Strong focus on code quality and safety (aiming towards ISO 26262 and IEC 61508 certification).")])]),e._v(" "),r("p",[e._v("The following table gives an overview of different frameworks including the aspects that were considered important for the Libre Solar project:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Criterion")]),e._v(" "),r("th",[r("a",{attrs:{href:"https://www.arduino.cc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arduino"),r("OutboundLink")],1)]),e._v(" "),r("th",[r("a",{attrs:{href:"https://os.mbed.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARM Mbed OS"),r("OutboundLink")],1)]),e._v(" "),r("th",[r("a",{attrs:{href:"https://www.zephyrproject.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zephyr RTOS"),r("OutboundLink")],1)]),e._v(" "),r("th",[r("a",{attrs:{href:"http://riot-os.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RIOT"),r("OutboundLink")],1)]),e._v(" "),r("th",[r("a",{attrs:{href:"https://freertos.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FreeRTOS"),r("OutboundLink")],1)])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("License")]),e._v(" "),r("td",[e._v("LGPL")]),e._v(" "),r("td",[e._v("Apache 2")]),e._v(" "),r("td",[e._v("Apache 2")]),e._v(" "),r("td",[e._v("LGPL")]),e._v(" "),r("td",[e._v("MIT")])]),e._v(" "),r("tr",[r("td",[e._v("Integrated HAL")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("no")])]),e._v(" "),r("tr",[r("td",[e._v("Integrated RTOS")]),e._v(" "),r("td",[e._v("no")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")]),e._v(" "),r("td",[e._v("yes")])]),e._v(" "),r("tr",[r("td",[e._v("Core language")]),e._v(" "),r("td",[e._v("C++")]),e._v(" "),r("td",[e._v("C++")]),e._v(" "),r("td",[e._v("C")]),e._v(" "),r("td",[e._v("C")]),e._v(" "),r("td",[e._v("C")])]),e._v(" "),r("tr",[r("td",[e._v("Supported platforms")]),e._v(" "),r("td",[e._v("many")]),e._v(" "),r("td",[e._v("only ARM")]),e._v(" "),r("td",[e._v("many")]),e._v(" "),r("td",[e._v("many")]),e._v(" "),r("td",[e._v("many")])]),e._v(" "),r("tr",[r("td",[e._v("Custom board support")]),e._v(" "),r("td",[e._v("medium")]),e._v(" "),r("td",[e._v("medium [1]")]),e._v(" "),r("td",[e._v("good")]),e._v(" "),r("td",[e._v("good")]),e._v(" "),r("td",[e._v("good")])]),e._v(" "),r("tr",[r("td",[e._v("Target users")]),e._v(" "),r("td",[e._v("makers")]),e._v(" "),r("td",[e._v("both [2]")]),e._v(" "),r("td",[e._v("both")]),e._v(" "),r("td",[e._v("both")]),e._v(" "),r("td",[e._v("industry")])]),e._v(" "),r("tr",[r("td",[e._v("Ease of use [3]")]),e._v(" "),r("td",[e._v("good")]),e._v(" "),r("td",[e._v("good")]),e._v(" "),r("td",[e._v("good")]),e._v(" "),r("td",[e._v("medium")]),e._v(" "),r("td",[e._v("medium")])])])]),e._v(" "),r("p",[e._v("The table was filled out to the best of our knowledge and might be subjective in some aspects. If you disagree or find errors, suggest improvements using the edit link below.")]),e._v(" "),r("p",[r("strong",[e._v("Remarks:")])]),e._v(" "),r("ol",[r("li",[e._v('Custom boards can be added, but you need to patch the targets.json file of the original repository. The entire framework does not differentiate between MCU definitions and board definitions. Instead, everything is gathered in one "targets" folder. So you can\'t simply define different pin settings for an already supported MCU.')]),e._v(" "),r("li",[e._v("Based on how custom boards are supported, one could argue that the main focus is makers only.")]),e._v(" "),r("li",[e._v("Judged good if PlatformIO available.")])]),e._v(" "),r("p",[e._v("There are some popular frameworks not taken into consideration for the following reasons:")]),e._v(" "),r("ul",[r("li",[e._v("ChibiOS supports only STM32 microcontrollers. In addition to that, it is developed in the "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar",target:"_blank",rel:"noopener noreferrer"}},[e._v("cathedral style"),r("OutboundLink")],1),e._v(", which is not considered ideal for a community-driven open source project.")]),e._v(" "),r("li",[e._v("LibOpenCM3 is only a HAL library and does not provide RTOS features.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);