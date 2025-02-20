﻿/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Thanks to Fred Lin for building BlockyDuino!
 * @author greich@ac-versailles.fr Guillaume Reich
 */

'use strict';

goog.provide('Blockly.Arduino.RF433');

goog.require('Blockly.Arduino');

Blockly.Arduino.rf433_rxready = function() {
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_RF433rxready'] = 
  '#include <VirtualWire.h>\n';

  Blockly.Arduino.setups_['setup_RF433rxready'] = 
  'vw_set_rx_pin (' + pin + ');\n' + 
  '  vw_setup(2000);\n' +
  '  vw_rx_start(); // Start the receiver PLL running\n';  

  var code = 'vw_have_message()';
      
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.rf433_rx = function() {
  
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_RF433rxready'] = 
  '#include <VirtualWire.h>\n\n' +
  'char *msgReceived () {\n' +
  '  byte message[VW_MAX_MESSAGE_LEN];\n' + 
  '  byte taille_message = VW_MAX_MESSAGE_LEN;\n\n' + 
  '  vw_wait_rx();\n' +      
  '  if (vw_get_message(message, &taille_message)) {\n' + 
  '     return message;\n' + 
  '  }\n' + 
  '}\n';

  Blockly.Arduino.setups_['setup_RF433rxready'] = 
  'vw_setup(2000);\n' +
  '  vw_set_rx_pin (' + pin + ');\n' +
  '  vw_rx_start(); // Start the receiver PLL running\n';  
  
  var code = 'msgReceived()';
      
  return [code, Blockly.Arduino.ORDER_NONE];
};



Blockly.Arduino.rf433_rx_bytes = function() {
  
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_RF433rxready'] = 
  '#include <VirtualWire.h>\n\n' +
  'uint8_t in_msg[6] = {0,0,0,0,0,0};\n\n' +
  'void msgReceived () {\n' +
  '  byte message[VW_MAX_MESSAGE_LEN];\n' + 
  '  byte taille_message = VW_MAX_MESSAGE_LEN;\n\n' + 
  '  vw_wait_rx();\n' +      
  '  if (vw_get_message(message, &taille_message)) {\n' + 
  '  	in_msg[0] = message[0];\n' +
  '  	in_msg[1] = message[1];\n' + 
  '  	in_msg[2] = message[2];\n' + 
  '  	in_msg[3] = message[3];\n' + 
  '  	in_msg[4] = message[4];\n' + 
  '  	in_msg[5] = message[5];\n' +   
  '  }\n' + 
  '}\n';

  Blockly.Arduino.setups_['setup_RF433rxready'] = 
  'vw_setup(2000);\n' +
  '  vw_set_rx_pin (' + pin + ');\n' +
  '  vw_rx_start(); // Start the receiver PLL running\n';  
  
  var code = 'msgReceived();\n';  
  return code;
};



Blockly.Arduino.rf433_rx_b0 = function(block) {
  var code = 'in_msg[0]'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.rf433_rx_b1 = function(block) {
  var code = 'in_msg[1]'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.rf433_rx_b2 = function(block) {
  var code = 'in_msg[2]'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.rf433_rx_b3 = function(block) {
  var code = 'in_msg[3]'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.rf433_rx_b4 = function(block) {
  var code = 'in_msg[4]'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.rf433_rx_b5 = function(block) {
  var code = 'in_msg[5]'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Arduino.rf433_tx = function() {
  
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var msg = Blockly.Arduino.valueToCode(this, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);  

  Blockly.Arduino.includes_['define_RF433rxready'] = 
  '#include <VirtualWire.h>\n';

  Blockly.Arduino.setups_['setup_RF433rxready'] = 
  'vw_set_tx_pin (' + pin + ');\n' + 
  '  vw_setup(2000);\n'; 

  var code = 
  '  char* message = '+msg+';\n' +
  '  vw_send((uint8_t *)message,strlen(message));\n' +
  '  vw_wait_tx(); // Wait until the whole message is gone';

  return code + '\n';
};



Blockly.Arduino.rf433_tx_bytes = function() {
  
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var in_b0 = Blockly.Arduino.valueToCode(this, 'MESSAGE_B0', Blockly.Arduino.ORDER_ATOMIC);
  var in_b1 = Blockly.Arduino.valueToCode(this, 'MESSAGE_B1', Blockly.Arduino.ORDER_ATOMIC);
  var in_b2 = Blockly.Arduino.valueToCode(this, 'MESSAGE_B2', Blockly.Arduino.ORDER_ATOMIC);
  var in_b3 = Blockly.Arduino.valueToCode(this, 'MESSAGE_B3', Blockly.Arduino.ORDER_ATOMIC);
  var in_b4 = Blockly.Arduino.valueToCode(this, 'MESSAGE_B4', Blockly.Arduino.ORDER_ATOMIC);
  var in_b5 = Blockly.Arduino.valueToCode(this, 'MESSAGE_B5', Blockly.Arduino.ORDER_ATOMIC);  

  Blockly.Arduino.includes_['define_RF433rxready'] = 
  '#include <VirtualWire.h>\n';

  Blockly.Arduino.setups_['setup_RF433rxready'] = 
  'vw_set_tx_pin (' + pin + ');\n' + 
  '  vw_setup(2000);\n'; 

  var code = 
  '  uint8_t message[6] = {0,0,0,0,0,0};\n' +
  '  message[0] = '+ in_b0 + ';\n' + 
  '  message[1] = '+ in_b1 + ';\n' + 
  '  message[2] = '+ in_b2 + ';\n' + 
  '  message[3] = '+ in_b3 + ';\n' + 
  '  message[4] = '+ in_b4 + ';\n' + 
  '  message[5] = '+ in_b5 + ';\n' +   
  '  vw_send((uint8_t *)message,6);\n' +
  '  vw_wait_tx(); // Wait until the whole message is gone';

  return code + '\n';
};




Blockly.Arduino.rf433_init_receiver = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['includes_IR'] = 
  '#include <VirtualWire.h>\n';
  
  Blockly.Arduino.setups_['setup_IR_init'] = 
  "vw_setup(2000);   // Bits per sec\n" +
  "  vw_set_rx_pin(" + value_pin + ");\n" +
  "  vw_rx_start();       // Start the receiver PLL running\n";

  var code = '';
  return code;
};

Blockly.Arduino.rf433_init_transmitter = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['includes_IR'] = 
  '#include <VirtualWire.h>\n';
  
  Blockly.Arduino.setups_['setup_IR_init'] = 
  "vw_setup(2000);   // Bits per sec\n" +
  "  vw_set_tx_pin(" + value_pin + ");\n";

  var code = '';
  return code;
};

Blockly.Arduino.rf433_define_message = function() {
  var msg = Blockly.Arduino.valueToCode(this, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);

  var code = '  char* message = '+msg+';\n';
  return code;
};

Blockly.Arduino.rf433_send_message_full = function() {
  var msg = Blockly.Arduino.valueToCode(this, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);

  var code =
  '  char* message = '+msg+';\n' +
  '  vw_send((uint8_t *)message,strlen(message));\n' +
  '  vw_wait_tx(); // Wait until the whole message is gone';
  return code;
};

Blockly.Arduino.rf433_show_message = function() {
  var code =
  '  byte message[VW_MAX_MESSAGE_LEN];\n' + 
  '  byte taille_message = VW_MAX_MESSAGE_LEN;\n\n' + 
  '  vw_wait_rx();\n' +      
  '  if (vw_get_message(message, &taille_message)) {\n' + 
  '     digitalWrite(13, HIGH); // Flash a light to show transmitting\n' + 
  '     Serial.print("Message reçu : ");\n' + 
  '     Serial.println((char*) message);\n' + 
  '     digitalWrite(13, LOW);\n' + 
  '  }\n';
  return code;
};

Blockly.Arduino.rf433_send_message = function() {
  var code = '  vw_send((uint8_t *)message,strlen(message));\n';
  return code;
};

Blockly.Arduino.rf433_wait_rx = function() {
  var code =
  '  byte message[VW_MAX_MESSAGE_LEN];\n' + 
  '  byte taille_message = VW_MAX_MESSAGE_LEN;\n\n' +
  '  vw_wait_rx(); // On attend de recevoir un message\n';
  return code;
};

Blockly.Arduino.rf433_wait_tx = function() {
  var code = '  vw_wait_tx(); // Wait until the whole message is gone\n';
  return code;
};

Blockly.Arduino.rf433_reception_message = function() {

  var code = 'vw_get_message(message, &taille_message)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.rf433_receive_message = function() {
  var code = '(char*) message';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};