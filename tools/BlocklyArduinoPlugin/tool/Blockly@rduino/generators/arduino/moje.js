/*
 * Created for CapitiveSense Library
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */
 
'use strict';

goog.provide('Blockly.Arduino.moje');
goog.require('Blockly.Arduino');

Blockly.Arduino.ultrazvuk_dalkomer = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.includes_['define_ultrasonic'] = '#include <Ultrasonic.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
  var code;
  if(dropdown_unit==="cm"){
    code = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters()';
  } else {
    code = 'ultrasonic_'+dropdown_pin+'.MeasureInInches()';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};