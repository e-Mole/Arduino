## 🧩 Arduino IDE + Blockly@rduino Visual Programming & MoleGraph School Probeware

[![Website](https://img.shields.io/badge/website-molegraph.eu-blue)](https://www.molegraph.eu)
![License](https://img.shields.io/badge/education-STEM%20|%20IBL%20|%20Polytechnic-green)
![Platform](https://img.shields.io/badge/technologies-Arduino%20|%20DIY%20|%203D%20Print%20|%20Probeware-blue)
![Hardware](https://img.shields.io/badge/programming-Blockly%20|%20Wiring(C++)-orange)

[MoleGraph](https://github.com/e-Mole/MoleGraph) facilitates a smooth transition from basic measurements to advanced coding and robotics. We utilize **Blockly@rduino**, a visual programming environment where students build programs by assembling graphical blocks. The system automatically generates standard Arduino (C++) code, helping beginners understand syntax and logic.

<img src="https://www.e-mole.cz/sites/default/files/articles/photos/scr-26-en-mg-arduinoblockly-analog-nano-uno.png" alt="MoleGraph in Blockly@rduino" />

### 🚀 Ready-to-Use Portable Package
To minimize setup time in classrooms, we provide a **pre-configured portable package** based on the Czech fork by **[milikiller](https://github.com/milikiller/arduino)**.

*   **No Installation Required:** Based on **Arduino IDE 1.8.13 (Portable)**. Just unzip and run `arduino.exe`.
*   **Integrated Workflow:** The visual environment launches directly from the IDE menu: `Tools > Blockly@arduino`.
*   **Configure Blocks:** Enable MoleGraph blocks directly from the IDE left button: `Configure Blocks > m-BITBEAM`.   
*   **Customizable:** Includes support for "User Blocks" to inject custom C++ code if a specific block is missing.

### 📦 Included Libraries & Visual Programming Features
The package comes with a suite of tested libraries converted into visual blocks, covering a wide range of STEM and robotics applications:

*   **MoleGraph Integration:** Dedicated blocks for the `MoleGraphManual` library to send data directly to the [MoleGraph](https://github.com/e-Mole/MoleGraph) app.
*   **Core Hardware:** Full control over Inputs/Outputs, PWM, and SD card storage.
*   **Communication:**
    *   **I2C & SPI:** Support for both hardware and software implementations.
    *   **RF433:** Wireless communication via VirtualWire (strings and byte arrays).
    *   **IR Remote:** Receive commands and debug IR codes to the serial monitor.
*   **Sensors & Displays:**
    *   **Environment:** DHT11, DHT21, DHT22 (Temperature/Humidity).
    *   **Distance:** Sharp IR sensors (GP2Yxxxx).
    *   **Displays:** Adafruit SSD1306 (OLED 128x64, 128x32, etc.).
*   **Robotics & Actuators:**
    *   **Motor Shields:** PWM control for wheeled/tracked robots.
    *   **Lighting:** Neopixel WS2812B (addressable LED strips).

---

### 📢 Credits & Acknowledgments

This educational tool is built upon the work of several open-source contributors:

*   **[Arduino Team](https://www.arduino.cc/):** For the Arduino IDE, the foundation of our hardware programming.
*   **[technologiescollege](https://technologiescollege.github.io/Blockly-at-rduino/):** For the original *Blockly@rduino* plugin (based on Google Blockly).
*   **[milikiller](https://github.com/milikiller/arduino):** For the **Czech mutation and portable fork**, which integrates the vast library collection (RF433, OLED, Motors, etc.) and simplified the IDE integration.
*   **[e-Mole Team](https://www.e-mole.cz/):** For the **MoleGraph extension**, custom blocks for U01 unit, and educational materials.
