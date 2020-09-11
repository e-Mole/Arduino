# 1 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino"
# 2 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino" 2
# 3 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino" 2
# 4 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino" 2
# 5 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino" 2
//Playing this requires the IR Remote Libraries to work
//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables
# 8 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_781437\\sketch_sep10a.ino" 2





Adafruit_SSD1306 display(128 /* OLED display width, in pixels*/, 64 /* OLED display height, in pixels*/, &Wire, -1 /* Reset pin # (or -1 if sharing Arduino reset pin)*/);
unsigned long IRCode = 0;
int IRpin = 3;
IRrecv irrecv(IRpin);
decode_results results;
unsigned long IRRequest ()
 {
  unsigned long IRResult = 0;
  if (irrecv.decode(&results))
     {
      IRResult = results.value;
      irrecv.resume(); // Receive the next value
     }
   return IRResult;
  }


unsigned long data;

void setup() {
  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
  display.begin(0x02 /*|< Gen. display voltage from 3.3V*/, 60); // I2C address 60
  display.setTextSize(1); // Set default font size
  display.setTextColor(1 /*|< Draw 'on' pixels*/); // Set default font color
  pinMode(IRpin, 0x0);
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
