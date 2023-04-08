### Blockly arduino

Česká mutace projektu Blockly@rduino

Programování Arduino desek v uživatelsky příjemném prostředí Google Blockly se spoustou knihoven.
- Základ tvoří portable Arduino 1.8.13
- Prostředí se pouští přímo z Arduino IDE - Menu Nástroje - Blockly@arduino
- Není nutná instalace žádných dalších komponent
- Obsajuje uživatelské bloky do kterých se dají dopsat chybějícíc příkazy

Seznam vyzkoušených a počeštěných knihoven
- Arduino - Nejběžnější funkce pro obsluhu HW, čtení vstupů, výstupů, obsluhu PWM až po ukládání dat na SD kartu
- I2C - Komunikace po sběrnici I2C, je implementována jak HW tak SW varianta
- SPI - Podpora pro HW SPI v různých režimech
- DHT - DHT11, DHT21, DHT22
- RF433 - Komunikace promocí knihovny VirtualWire možnost přenášet string i pole bajtů
- Adafruit SSD1306 - I2C Oled display 128x64, 128x32, 64x64 a 64x32
- IR - Čtení povelů z IR dálkového ovladače, obsahuje debug funkci na vypisování IR kódů na seriový port
- Sharp IR - Podpora pro měření vzdálenosti pomocí snímačů Sharp GP2Yxxxx
- Motor Shieldy - Obsluha různých budičů pro ovládání kolových/pásových robotů pomocí PWM
- Neopixel WS2812B - Ovládání adresovatelných LED pásků
- MoleGraphManual - odesílání dat do aplikace MoelGraph