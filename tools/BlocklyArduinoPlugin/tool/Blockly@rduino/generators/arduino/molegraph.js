/**
 * MoleGraph test BLOCK
 */
'use strict';

goog.provide('Blockly.Arduino.molegraph');

goog.require('Blockly.Arduino');

/** OLD MoleGraph Block
Blockly.Arduino['molegraph_com'] = function() {
  var value_ch1 = Blockly.Arduino.valueToCode(this, 'CH1', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch2 = Blockly.Arduino.valueToCode(this, 'CH2', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch3 = Blockly.Arduino.valueToCode(this, 'CH3', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch4 = Blockly.Arduino.valueToCode(this, 'CH4', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch5 = Blockly.Arduino.valueToCode(this, 'CH5', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch6 = Blockly.Arduino.valueToCode(this, 'CH6', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch7 = Blockly.Arduino.valueToCode(this, 'CH7', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch8 = Blockly.Arduino.valueToCode(this, 'CH8', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_ch1 == '') { value_ch1 = ''; } else { value_ch1 = '  moleGraph.SetChannelValue(1, ' + value_ch1 + ');\n'; }
  if (value_ch2 == '') { value_ch2 = ''; } else { value_ch2 = '  moleGraph.SetChannelValue(2, ' + value_ch2 + ');\n'; }
  if (value_ch3 == '') { value_ch3 = ''; } else { value_ch3 = '  moleGraph.SetChannelValue(3, ' + value_ch3 + ');\n'; }
  if (value_ch4 == '') { value_ch4 = ''; } else { value_ch4 = '  moleGraph.SetChannelValue(4, ' + value_ch4 + ');\n'; }
  if (value_ch5 == '') { value_ch5 = ''; } else { value_ch5 = '  moleGraph.SetChannelValue(5, ' + value_ch5 + ');\n'; }
  if (value_ch6 == '') { value_ch6 = ''; } else { value_ch6 = '  moleGraph.SetChannelValue(6, ' + value_ch6 + ');\n'; }
  if (value_ch7 == '') { value_ch7 = ''; } else { value_ch7 = '  moleGraph.SetChannelValue(7, ' + value_ch7 + ');\n'; }
  if (value_ch8 == '') { value_ch8 = ''; } else { value_ch8 = '  moleGraph.SetChannelValue(8, ' + value_ch8 + ');\n'; }
  
  Blockly.Arduino.includes_['molegraph_incl'] = '#include <MoleGraph.h> // Link MoleGraph library (www.e-mole.cz/diy/molegraph)';
  
  Blockly.Arduino.definitions_['molegraph_def1'] = 'MoleGraph moleGraph;  // Create MoleGraph instance\n';
  
  Blockly.Arduino.userFunctions_['molegraph_fn1'] = 
  'void MeasurementStartedCallback(void) {\n'
  + '  digitalWrite(13, HIGH);\n'
  + '}\n'
  + 'void MeasurementStoppedCallback(void) {\n'
  + '  digitalWrite(13, LOW);\n'
  + '}\n'
  + 'void MeasurementPausedCallback(void) {\n'
  + '  digitalWrite(13, LOW);\n'
  + '}\n'
  + 'void MeasurementContinuedCallback(void) {\n'
  + '  digitalWrite(13, HIGH);\n'
  + '}\n'
  + 'void UpdateGraphChannels(void) {\n'
  + value_ch1
  + value_ch2
  + value_ch3
  + value_ch4
  + value_ch5
  + value_ch6
  + value_ch7
  + value_ch8
  + '}';
  
  Blockly.Arduino.setups_['molegraph_stp'] =
  '\n  moleGraph.Setup();\n'
  + '  moleGraph.SetSendingCallback(&UpdateGraphChannels);\n'
  + '  moleGraph.SetMeasurementStartedCallback(&MeasurementStartedCallback);\n'
  + '  moleGraph.SetMeasurementStoppedCallback(&MeasurementStoppedCallback);\n'
  + '  moleGraph.SetMeasurementPausedCallback(&MeasurementPausedCallback);\n'
  + '  moleGraph.SetMeasurementContinuedCallback(&MeasurementContinuedCallback);\n'
  + '  pinMode(13, OUTPUT);\n'; 
  
  // TODO: Assemble into code variable.
  var code = 'moleGraph.CheckInput();\n';
  //return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};
*/

Blockly.Arduino['molegraph_u01_com_init'] = function(block) {
  var dropdown_mg_u01_type = block.getFieldValue('mg_u01_type');
  if (dropdown_mg_u01_type == '1') { 
	Blockly.Arduino.includes_['molegraph_u01_incl'] = '//********** MoleGraphManual ***************\n//       MoleGraph Probeware code       \n//    (www.e-mole.cz/diy/molegraph) \n//******************************************//\n//Enable MoleGraph U01 shield function\n#define SYSTEM\n//Link MoleGraphManual library (www.e-mole.cz/diy/molegraph)\n#include <molegraphmanual.h>';
	} else { 
	Blockly.Arduino.includes_['molegraph_u01_incl'] = '//********** MoleGraphManual ***************\n//       MoleGraph Probeware code       \n//    (www.e-mole.cz/diy/molegraph) \n//******************************************//\n\n//Link MoleGraphManual library (www.e-mole.cz/diy/molegraph)\n#include <molegraphmanual.h>';
  }
  //Blockly.Arduino.includes_['molegraph_u01_incl'] = '//********** MoleGraphManual ***************\n//       MoleGraph Probeware code       \n//    (www.e-mole.cz/diy/molegraph) \n//******************************************//\n//Enable MoleGraph U01 shield function\n#define SYSTEM\n//Link MoleGraphManual library (www.e-mole.cz/diy/molegraph)\n#include <molegraphmanual.h>';
  Blockly.Arduino.definitions_['molegraph_u01_def1'] = 'MoleGraphManual moleGraph; // Create MoleGraph instance\n';
  Blockly.Arduino.setups_['molegraph_u01_stp'] =
  '\n  moleGraph.init();\n'
  + '  moleGraph.setSendingCallback(&updateGraphChannels);\n'; 
    // TODO: Assemble into code variable.
  var code = '';
  return code;
};

Blockly.Arduino['molegraph_u01_com'] = function() {
  var value_ch1 = Blockly.Arduino.valueToCode(this, 'CH1', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch2 = Blockly.Arduino.valueToCode(this, 'CH2', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch3 = Blockly.Arduino.valueToCode(this, 'CH3', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch4 = Blockly.Arduino.valueToCode(this, 'CH4', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch5 = Blockly.Arduino.valueToCode(this, 'CH5', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch6 = Blockly.Arduino.valueToCode(this, 'CH6', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch7 = Blockly.Arduino.valueToCode(this, 'CH7', Blockly.Arduino.ORDER_ATOMIC);
  var value_ch8 = Blockly.Arduino.valueToCode(this, 'CH8', Blockly.Arduino.ORDER_ATOMIC);
  
  if (value_ch1 == '') { value_ch1 = ''; } else { value_ch1 = '  moleGraph.setChannelValue(1, ' + value_ch1 + ');\n'; }
  if (value_ch2 == '') { value_ch2 = ''; } else { value_ch2 = '  moleGraph.setChannelValue(2, ' + value_ch2 + ');\n'; }
  if (value_ch3 == '') { value_ch3 = ''; } else { value_ch3 = '  moleGraph.setChannelValue(3, ' + value_ch3 + ');\n'; }
  if (value_ch4 == '') { value_ch4 = ''; } else { value_ch4 = '  moleGraph.setChannelValue(4, ' + value_ch4 + ');\n'; }
  if (value_ch5 == '') { value_ch5 = ''; } else { value_ch5 = '  moleGraph.setChannelValue(5, ' + value_ch5 + ');\n'; }
  if (value_ch6 == '') { value_ch6 = ''; } else { value_ch6 = '  moleGraph.setChannelValue(6, ' + value_ch6 + ');\n'; }
  if (value_ch7 == '') { value_ch7 = ''; } else { value_ch7 = '  moleGraph.setChannelValue(7, ' + value_ch7 + ');\n'; }
  if (value_ch8 == '') { value_ch8 = ''; } else { value_ch8 = '  moleGraph.setChannelValue(8, ' + value_ch8 + ');\n'; }
  
  //Blockly.Arduino.includes_['molegraph_u01_incl'] = '#include <molegraphmanual.h> // Link MoleGraph library (www.e-mole.cz/diy/molegraph)';
  
  //Blockly.Arduino.definitions_['molegraph_u01_def1'] = 'MoleGraphManual moleGraph; // Create MoleGraph instance\n';
  
  Blockly.Arduino.userFunctions_['molegraph_u01_fn1'] = 
  'void updateGraphChannels(void) {\n'
  + value_ch1
  + value_ch2
  + value_ch3
  + value_ch4
  + value_ch5
  + value_ch6
  + value_ch7
  + value_ch8
  + '}';
  
  /*
  Blockly.Arduino.setups_['molegraph_u01_stp'] =
  '\n  moleGraph.init();\n'
  + '  moleGraph.setSendingCallback(&updateGraphChannels);\n'; 
  */
  
  // TODO: Assemble into code variable.
  var code = 'moleGraph.process();\n';
  //return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  //return [code, Blockly.Arduino.ORDER_ATOMIC];
  return code;
};

Blockly.Arduino['molegraph_u01_measuring'] = function(block) {
    var code = 'moleGraph.isMeasurementInProgress()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['molegraph_u01_measuring_stop'] = function() {
    var code = 'moleGraph.stopMeasurement();';
  
  return code;
};

Blockly.Arduino['molegraph_u01_measuring_start'] = function() {
    var code = 'moleGraph.startMeasurement();';
  
  return code;
};

Blockly.Arduino['molegraph_u01_port'] = function(block) {
  var dropdown_mg_u01_port = block.getFieldValue('mg_u01_port');
  var dropdown_mg_u01_pin = block.getFieldValue('mg_u01_pin');
  if (dropdown_mg_u01_pin == '') { dropdown_mg_u01_pin = ''; } else { dropdown_mg_u01_pin = '_' + dropdown_mg_u01_port + dropdown_mg_u01_pin; }
  var code = 'PORT' + dropdown_mg_u01_pin;
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['molegraph_u01_pullup'] = function(block) {
  var dropdown_mg_u01_port = block.getFieldValue('mg_u01_port');
  var dropdown_mg_u01_on_of = block.getFieldValue('mg_u01_on_of');
  var code = 'moleGraph.setPullup(' + dropdown_mg_u01_port + ', ' + dropdown_mg_u01_on_of + ');\n';
 
  return code;
};

Blockly.Arduino['molegraph_u01_button'] = function(block) {
  var dropdown_mg_u01_button = block.getFieldValue('mg_u01_button');
  var code = 'moleGraph.getButton(' + dropdown_mg_u01_button + ')';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['molegraph_u01_battery'] = function(block) {
  var code = 'moleGraph.getBattery()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//MG U01 Servo blocks
Blockly.Arduino['molegraph_u01_servo_attach'] = function() {
  var value_port = this.getFieldValue('mg_u01_port');
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  Blockly.Arduino.definitions_['var_servo' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_name] = dropdown_name + '.attach(' + value_port + ');';
  return '';
};

Blockly.Arduino['molegraph_u01_servo_move'] = function() {
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino['molegraph_u01_servo_read_degrees'] = function() {
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['molegraph_u01_servo_detach'] = function() {
  var dropdown_name = this.getFieldValue('SERVO_NAME');
  
  var code = dropdown_name+'.detach();';
  return code;
};