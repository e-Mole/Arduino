# 1 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_787366\\sketch_oct11a.ino"
# 2 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_787366\\sketch_oct11a.ino" 2
# 3 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_787366\\sketch_oct11a.ino" 2
# 4 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_787366\\sketch_oct11a.ino" 2
# 5 "C:\\Users\\user\\AppData\\Local\\Temp\\arduino_modified_sketch_787366\\sketch_oct11a.ino" 2




Adafruit_SSD1306 display(128 /* OLED display width, in pixels*/, 64 /* OLED display height, in pixels*/, &Wire, -1 /* Reset pin # (or -1 if sharing Arduino reset pin)*/);

float poz_x = 64;
float poz_y = 32;
float smer_x = 1.5;
float smer_y = 2;
int score;
int palka_pozice;

// Popsat tuto funkci ...
void napsat_score() {
  display.setTextSize(1);
  display.setCursor(60,0);
  display.print(score);
}


// Popsat tuto funkci ...
void vychozi_poloha() {
  poz_x = 64;
  poz_y = 32;
  smer_x = 1.5;
  smer_y = 2;
  score = 0;
}


// Popsat tuto funkci ...
void nakresli_palku() {
  palka_pozice = map(analogRead(0), 0, 1023, 8, 55);
  display.fillRoundRect(0,(palka_pozice - 8),4,16,2,1 /*|< Draw 'on' pixels*/);
}


// Popsat tuto funkci ...
void micek() {
  if (poz_x >= 126) {
    smer_x = smer_x * -1;
    score = score + 1;

  }
  if (poz_y >= 62) {
    smer_y = smer_y * -1;
    score = score + 1;

  }
  if (poz_x <= 6) {
    if (((poz_y - palka_pozice)>0?(poz_y - palka_pozice):-(poz_y - palka_pozice)) < 9) {
      smer_x = smer_x * -1.2;
      score = score + 10;

    }

  }
  if (poz_y <= 2) {
    smer_y = smer_y * -1;
    score = score + 1;

  }
  poz_x = poz_x + smer_x;
  poz_y = poz_y + smer_y;
  display.fillCircle(poz_x,poz_y,2,2 /*|< Invert pixels*/);
}



void setup() {
  Serial.begin(19200);
  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
  display.begin(0x02 /*|< Gen. display voltage from 3.3V*/, 60); // I2C address 60
  display.setTextSize(1); // Set default font size
  display.setTextColor(1 /*|< Draw 'on' pixels*/); // Set default font color

}

void loop() {
    display.clearDisplay();
    nakresli_palku();
    micek();
    if (poz_x <= 1) {
      display.clearDisplay();
      display.setTextSize(2);
      display.setCursor(35,26);
      display.println("Ooops");
      display.display();
      vychozi_poloha();
      delay(5000);

    }
    napsat_score();
    display.display();

}
