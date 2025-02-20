/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
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
 * @fileoverview Variable blocks for Arduino.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.variables');

goog.require('Blockly.Arduino');


Blockly.Arduino.variables_get = function(block) {
  var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'),Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['variables_set_type'] = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VARIABLE_SETTYPE_INPUT', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varType = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
  var code = '(' + varType + ')(' + argument0 + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.variables_set = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var code = varName + ' = ' + argument0 + ';\n';
  return code;
};

Blockly.Arduino.variables_const = function(block) {
  var argument0 = Blockly.Arduino.valueToCode(block, 'VAL_CONST', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types.getChildBlockType(block));
  
  var in_type = block.getFieldValue('VARIABLE_SETTYPE_TYPE');
  var c_type = "";
  
  switch (in_type) {
	case "VOLATIL_NUMBER":
      c_type = 'volatile int';
      break;
    case "SHORT_NUMBER":
      c_type = 'byte';
      break;
    case "NUMBER":
      c_type = 'int';
      break;
    case "UNS_NUMBER":
      c_type = 'unsigned int';
      break;
    case "LARGE_NUMBER":
      c_type = 'long';
      break;
    case "LARGE_UNS_NUMBER":
      c_type = 'unsigned long';
      break;
    case "DECIMAL":
      c_type = 'float';
      break;
    case "TEXT":
      c_type = 'String';
      break;
    case "CHARACTER":
      c_type = 'char';
      break;
    case "BOOLEAN":
      c_type = 'bool';
      break;
    case "NULL":
      c_type = 'void';
      break;
    case "ARRAY":
    	c_type = Blockly.Arduino.getArduinoType_(typeBlockly.arrayType);
        break;
    case "UNDEF":
      c_type = 'undefined';
      break;
    case "CHILD_BLOCK_MISSING":
      // If no block connected default to int, change for easier debugging
      //c_type = 'ChildBlockMissing';
      c_type = 'int';
      break;
    default:
      c_type = 'Invalid Blockly Type';
    } 
  
  Blockly.Arduino.variables_[varName] = 'const ' + c_type + ' ' + varName + ' = ' + argument0 + ';';
  return '';
};

Blockly.Arduino['variables_set_init'] = function(block){
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var varType = Blockly.Arduino.getArduinoType_(Blockly.Types.getChildBlockType(block));
  
  var in_type = block.getFieldValue('VARIABLE_SETTYPE_TYPE');
  var c_type = "";
  
  switch (in_type) {
	case "VOLATIL_NUMBER":
      c_type = 'volatile int';
      break;
    case "SHORT_NUMBER":
      c_type = 'byte';
      break;
    case "NUMBER":
      c_type = 'int';
      break;
    case "UNS_NUMBER":
      c_type = 'unsigned int';
      break;
    case "LARGE_NUMBER":
      c_type = 'long';
      break;
    case "LARGE_UNS_NUMBER":
      c_type = 'unsigned long';
      break;
    case "DECIMAL":
      c_type = 'float';
      break;
    case "TEXT":
      c_type = 'String';
      break;
    case "CHARACTER":
      c_type = 'char';
      break;
    case "BOOLEAN":
      c_type = 'bool';
      break;
    case "NULL":
      c_type = 'void';
      break;
    case "ARRAY":
    	c_type = Blockly.Arduino.getArduinoType_(typeBlockly.arrayType);
        break;
    case "UNDEF":
      c_type = 'undefined';
      break;
    case "CHILD_BLOCK_MISSING":
      // If no block connected default to int, change for easier debugging
      //c_type = 'ChildBlockMissing';
      c_type = 'int';
      break;
    default:
      c_type = 'Invalid Blockly Type';
    } 
    
  Blockly.Arduino.variables_[varName] = c_type + ' ' + varName + ' = ' + argument0 +';';
  return '';
};
