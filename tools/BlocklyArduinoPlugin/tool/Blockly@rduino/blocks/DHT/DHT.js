/*
 * Created for CapitiveSense Library
 * Uses a high value resistor e.g. 10M between send pin and receive pin
 * Resistor effects sensitivity, experiment with values, 50K - 50M. Larger resistor values yield larger sensor values.
 * Receive pin is the sensor pin - try different amounts of foil/metal on this pin
 */
 
 'use strict';

goog.provide('Blockly.Blocks.DHT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['dht_inicializace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicializace snímače teploty a vhkosti");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("typ")
        .appendField(new Blockly.FieldDropdown([["DHT11", "DHT11"], ["DHT21", "DHT21"], ["DHT22 (AM2302)", "DHT22"]]), "DHT_Type");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("na pinu")
        .appendField(new Blockly.FieldNumber("0"), "DHT_PIN");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('this blocks helps to...');
    this.setHelpUrl('https://www.arduino.cc/reference/en/');
  }
};

Blockly.Blocks['teplota'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Teplota");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('this blocks helps to...');
    this.setHelpUrl('https://www.arduino.cc/reference/en/');
  }
};

Blockly.Blocks['vlhkost'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vlhkost");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip('this blocks helps to...');
    this.setHelpUrl('https://www.arduino.cc/reference/en/');
  }
};