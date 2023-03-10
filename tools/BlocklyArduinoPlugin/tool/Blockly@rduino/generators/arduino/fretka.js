/**
 * Fretka test BLOCK
 */
'use strict';

goog.provide('Blockly.Arduino.fretka');

goog.require('Blockly.Arduino');

Blockly.Arduino['fretka_run'] = function() {
 //IMPORTANT: delete unneeded lines
  var value_speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  var value_drive = Blockly.Arduino.valueToCode(this, 'drive', Blockly.Arduino.ORDER_ATOMIC);
  var value_run_time = Blockly.Arduino.valueToCode(this, 'run_time', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['fretka_incl'] = 'libraries code\n';
  Blockly.Arduino.variables_['fretka_var'] = 'variables\n';
  Blockly.Arduino.definitions_['fretka_def'] = 'instance\n';
  Blockly.Arduino.userFunctions_['fretka_func'] = 'functions\n';
  Blockly.Arduino.setups_['fretka_setup'] = 'arduino code for setup\n';
  
  var code = 'arduino code for loop\n';
  return code; 
};

