/*
 * Created for CapitiveSense Library
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */
 
'use strict';

goog.provide('Blockly.Arduino.DHT');
goog.require('Blockly.Arduino');

Blockly.Arduino.dht_inicializace = function(block) {
  //IMPORTANT: delete unneeded lines
  var math_dht_pin = block.getFieldValue('DHT_PIN');
  var dropdown_dht_type = block.getFieldValue('DHT_Type');
  Blockly.Arduino.includes_['DHT_lib'] = '#include "DHT.h";';
  Blockly.Arduino.variables_['DHT_var'] = '';
  Blockly.Arduino.definitions_['DHT_def'] = 'DHT myDHT(' + math_dht_pin + ', ' + dropdown_dht_type + ');';
  Blockly.Arduino.userFunctions_['DHT_fc'] = '';
  Blockly.Arduino.setups_['DHT_setup']='myDHT.begin();';
  var code = '';
  return code;
};

Blockly.Arduino.teplota = function(block) {
  //IMPORTANT: delete unneeded lines
  var code = 'myDHT.readTemperature()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.vlhkost = function(block) {
  //IMPORTANT: delete unneeded lines
  var code = 'myDHT.readHumidity()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};