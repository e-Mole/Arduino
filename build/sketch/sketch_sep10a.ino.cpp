#include <Arduino.h>
#line 1 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino"
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
//Playing this requires the IR Remote Libraries to work
//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables
#include <IRremote.h>


#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels
#define OLED_RESET -1 // Reset pin # (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
unsigned long IRCode = 0;
int IRpin = 3;
IRrecv irrecv(IRpin);
decode_results results;
#line 18 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino"
unsigned long IRRequest();
#line 32 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino"
void setup();
#line 43 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino"
void loop();
#line 18 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino"
unsigned long IRRequest ()
 {
  unsigned long IRResult = 0;
  if (irrecv.decode(&results))
     {
      IRResult = results.value;
      irrecv.resume();   // Receive the next value
     }
   return IRResult;
  }


unsigned long data;

void setup() {
  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
  display.begin(SSD1306_SWITCHCAPVCC, 60); // I2C address 60
  display.setTextSize(1); // Set default font size
  display.setTextColor(SSD1306_WHITE); // Set default font color
  pinMode(IRpin, INPUT);
  irrecv.enableIRIn();


}

void loop() {
    data = IRRequest();
    if (data > 0) {
      display.clearDisplay();
      display.setCursor(0,0);
      display.println((String(data)));
      display.display();

    }

}
