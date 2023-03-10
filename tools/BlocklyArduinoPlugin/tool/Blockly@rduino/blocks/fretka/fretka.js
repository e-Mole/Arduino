'use strict';

goog.provide('Blockly.Blocks.fretka');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['fretka_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Run Fretka")
        .appendField(new Blockly.FieldImage("https://img.icons8.com/material/48/000000/play-button-circled--v1.png", 32, 32, ""));
    this.appendValueInput("speed")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("speed");
    this.appendValueInput("drive")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("drive");
    this.appendValueInput("run_time")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("run time");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(45);
    this.setTooltip('Run Ferretbot with specified params');
    this.setHelpUrl('https://www.e-mole.cz/clanek/3d-tisk-arduino-nejen-robotika-zajimave-levne');
  }
};