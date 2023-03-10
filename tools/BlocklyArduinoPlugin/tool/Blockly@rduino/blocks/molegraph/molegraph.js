'use strict';

goog.provide('Blockly.Blocks.molegraph');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['molegraph_com'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG ")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/molegraph/molegraph.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("CH1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH1");
    this.appendValueInput("CH2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH2");
    this.appendValueInput("CH3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH3");
    this.appendValueInput("CH4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH4");
    this.appendValueInput("CH5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH5");
    this.appendValueInput("CH6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH6");
    this.appendValueInput("CH7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH7");
    this.appendValueInput("CH8")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(230);
 this.setTooltip("Block for sending sensor data to MoleGraph App. This version is for Arduino NANO/UNO. For more info visit MoleGraph webpage www.e-mole.cz/diy/molegraph");
 this.setHelpUrl("https://www.e-mole.cz/diy/molegraph");
  }
};

Blockly.Blocks['molegraph_u01_com'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01")
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/molegraph/molegraph.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
    this.appendValueInput("CH1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH1");
    this.appendValueInput("CH2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH2");
    this.appendValueInput("CH3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH3");
    this.appendValueInput("CH4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH4");
    this.appendValueInput("CH5")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH5");
    this.appendValueInput("CH6")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH6");
    this.appendValueInput("CH7")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH7");
    this.appendValueInput("CH8")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("CH8");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(230);
 this.setTooltip("Block for sending sensor data to MoleGraph App. This version is for MoleGraph U01 unit based on Arduino NANO. For more info visit MoleGraph webpage www.e-mole.cz/diy/molegraph");
 this.setHelpUrl("https://www.e-mole.cz/diy/molegraph");
  }
};

Blockly.Blocks['molegraph_u01_port'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01")
        .appendField(new Blockly.FieldDropdown([["port 1","1"], ["port 2","2"], ["port 3","3"], ["port 4","4"]]), "mg_u01_port")
        .appendField(new Blockly.FieldDropdown([["pin digital (GPIO 01)","D"], ["pin analog (GPIO 02)","A"]]), "mg_u01_pin");
    this.setOutput(true, null);
    this.setColour(260);
 this.setOutput(true, null);
 this.setTooltip("MG U01 safe pin selection: select PORT and GPIO -> available pins are accessible via predefined constants");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['molegraph_u01_pullup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01 pull-up")
        .appendField(new Blockly.FieldDropdown([["port 1","1"], ["port 2","2"], ["port 3","3"], ["port 4","4"]]), "mg_u01_port")
        .appendField(new Blockly.FieldDropdown([["state off","false"], ["state on","true"]]), "mg_u01_on_of");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  this.setTooltip("Set MG U01 10K pull-up for selected port [1-4] [on/off] for GPIO 02 (analog) (this is not internal Arduino pull-up!).");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['molegraph_u01_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01")
        .appendField(new Blockly.FieldDropdown([["button F1","1"], ["button F2","2"], ["button F3","3"], ["button F4","4"]]), "mg_u01_button")
        .appendField("pressed");
    this.setOutput(true, "Boolean");
    this.setColour(260);
 this.setTooltip("Get MG U01 F button state for selected port [1-4], if pressed return 'true'.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['molegraph_u01_battery'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01 battery status");
    this.setOutput(true, "Number");
    this.setColour(260);
 this.setTooltip("Get MG U01 battery status: 0 - no battery, 1 - battery ok, 2 - battery low.");
 this.setHelpUrl("");
  }
};