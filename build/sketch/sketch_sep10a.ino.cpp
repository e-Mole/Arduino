#include <Arduino.h>
#line 1 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino"
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <VirtualWire.h>

uint8_t in_msg[6] = {0,0,0,0,0,0};

#line 9 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino"
void msgReceived();
#line 30 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino"
void setup();
#line 42 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino"
void loop();
#line 9 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino"
void msgReceived () {
  byte message[VW_MAX_MESSAGE_LEN];
  byte taille_message = VW_MAX_MESSAGE_LEN;

  vw_wait_rx();
  if (vw_get_message(message, &taille_message)) {
  	in_msg[0] = message[0];
  	in_msg[1] = message[1];
  	in_msg[2] = message[2];
  	in_msg[3] = message[3];
  	in_msg[4] = message[4];
  	in_msg[5] = message[5];
  }
}


#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1 // Reset pin # (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
  display.begin(SSD1306_SWITCHCAPVCC, 60); // I2C address 60
  display.setTextSize(1); // Set default font size
  display.setTextColor(SSD1306_WHITE); // Set default font color
  vw_setup(2000);
  vw_set_rx_pin (2);
  vw_rx_start(); // Start the receiver PLL running


}

void loop() {
    if (vw_have_message()) {
      msgReceived();

    }
    display.clearDisplay();
    display.setCursor(0,0);
    display.println((String(in_msg[0])));
    display.display();

}
