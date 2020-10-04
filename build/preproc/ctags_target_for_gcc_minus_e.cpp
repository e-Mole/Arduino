# 1 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_317797\\sketch_oct05a.ino"
//Playing this requires the IR Remote Libraries to work
//Credit to Ken Shirriff, Enjoying Electronics, dablondeemu and Instructables
# 4 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_317797\\sketch_oct05a.ino" 2


int IRpin = 2;
IRrecv irrecv(IRpin);
decode_results results;


void setup() {
  pinMode(IRpin, 0x0);
  Serial.begin(9600);
  irrecv.enableIRIn();

}

void loop() {
  if (irrecv.decode(&results))
    {
     Serial.println(results.value, 10); // Print the Serial 'results.value'
     irrecv.resume(); // Receive the next value
    }

}
