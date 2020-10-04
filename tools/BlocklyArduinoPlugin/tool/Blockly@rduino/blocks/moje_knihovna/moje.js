/*
 * Created for CapitiveSense Library
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */
 
 'use strict';

goog.provide('Blockly.Blocks.moje');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['ultrazvuk_dalkomer'] = {
	init: function() {
    //this.setColour(Blockly.Blocks.grove.HUE);
    this.setColour("#007be3");
	this.setHelpUrl(Blockly.Msg.GROVE_INOUT_ULTRASONIC_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TEXT)
        .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_INPUT)
        .appendField(new Blockly.FieldTextInput('',  Blockly.Arduino.pinDigitalValidator), 'PIN')
        .appendField(Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT)
        .appendField(new Blockly.FieldDropdown(Blockly.Msg.GROVE_INOUT_ULTRASONIC_UNIT_CHOICE), "UNIT");
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GROVE_INOUT_ULTRASONIC_TOOLTIP);
  }
};