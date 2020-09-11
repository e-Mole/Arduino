# 1 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino"
# 2 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino" 2
# 3 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino" 2
# 4 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino" 2
# 5 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino" 2
# 6 "C:\\Users\\MILAN~1.SPA\\AppData\\Local\\Temp\\arduino_modified_sketch_651329\\sketch_sep10a.ino" 2

uint8_t in_msg[6] = {0,0,0,0,0,0};

void msgReceived () {
  byte message[30];
  byte taille_message = 30;

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





Adafruit_SSD1306 display(128 /* OLED display width, in pixels*/, 64 /* OLED display height, in pixels*/, &Wire, -1 /* Reset pin # (or -1 if sharing Arduino reset pin)*/);

void setup() {
  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
  display.begin(0x02 /*|< Gen. display voltage from 3.3V*/, 60); // I2C address 60
  display.setTextSize(1); // Set default font size
  display.setTextColor(1 /*|< Draw 'on' pixels*/); // Set default font color
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
