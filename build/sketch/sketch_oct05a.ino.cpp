#include <Arduino.h>
#line 1 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_317797\\sketch_oct05a.ino"
//Playing this requires the IR Remote Libraries to work
//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables
#include <IRremote.h>


int IRpin = 2;
IRrecv irrecv(IRpin);
decode_results results;


#line 11 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_317797\\sketch_oct05a.ino"
void setup();
#line 18 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_317797\\sketch_oct05a.ino"
void loop();
#line 11 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_317797\\sketch_oct05a.ino"
void setup() {
  pinMode(IRpin, INPUT);
  Serial.begin(9600);
  irrecv.enableIRIn();

}

void loop() {
  if (irrecv.decode(&results))
    {
     Serial.println(results.value, DEC); // Print the Serial 'results.value'
     irrecv.resume();   // Receive the next value
    }

}
