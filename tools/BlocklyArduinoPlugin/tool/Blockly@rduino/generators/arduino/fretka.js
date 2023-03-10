/**
 * Fretka test BLOCK
 */
'use strict';

goog.provide('Blockly.Arduino.fretka');

goog.require('Blockly.Arduino');

Blockly.Arduino['fretka_run'] = function() {
  var value_speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  var value_drive = Blockly.Arduino.valueToCode(this, 'drive', Blockly.Arduino.ORDER_ATOMIC);
  var value_run_time = Blockly.Arduino.valueToCode(this, 'run_time', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['fretka_incl'] = ' \n';
  Blockly.Arduino.variables_['fretka_var'] = ' \n';
  Blockly.Arduino.definitions_['fretka_def'] = ' \n';
  Blockly.Arduino.userFunctions_['fretka_func'] = ' \n';
  Blockly.Arduino.setups_['fretka_setup'] = ' \n';
  
  var code = ' \n';
  return code; 
};

