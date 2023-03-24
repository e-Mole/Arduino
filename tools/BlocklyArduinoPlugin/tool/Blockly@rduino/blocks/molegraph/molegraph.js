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
 this.setTooltip(Blockly.Msg.MG_ARDUINO_COM_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.MG_ARDUINO_COM_HELP);
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
 this.setTooltip(Blockly.Msg.MG_ARDUINO_U01_COM_TOOLTIP);
 this.setHelpUrl(Blockly.Msg.MG_ARDUINO_COM_HELP);
  }
};

Blockly.Blocks['molegraph_u01_port'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01")
        .appendField(new Blockly.FieldDropdown([["port 1","1"], ["port 2","2"], ["port 3","3"], ["port 4","4"]]), "mg_u01_port")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MG_ARDUINO_U01_PORT_D,"D"], [Blockly.Msg.MG_ARDUINO_U01_PORT_A,"A"]]), "mg_u01_pin");
    this.setOutput(true, null);
    this.setColour(260);
 this.setOutput(true, null);
 this.setTooltip(Blockly.Msg.MG_ARDUINO_U01_PORT_TOOLTIP);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['molegraph_u01_pullup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01 pull-up")
        .appendField(new Blockly.FieldDropdown([["port 1","1"], ["port 2","2"], ["port 3","3"], ["port 4","4"]]), "mg_u01_port")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MG_ARDUINO_U01_PULLUP_STATE_OFF,"false"], [Blockly.Msg.MG_ARDUINO_U01_PULLUP_STATE_ON,"true"]]), "mg_u01_on_of");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  this.setTooltip(Blockly.Msg.MG_ARDUINO_U01_PULLUP_TOOLTIP);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['molegraph_u01_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MG U01")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MG_ARDUINO_U01_BUTTON_F1,"1"], [Blockly.Msg.MG_ARDUINO_U01_BUTTON_F2,"2"], [Blockly.Msg.MG_ARDUINO_U01_BUTTON_F3,"3"], [Blockly.Msg.MG_ARDUINO_U01_BUTTON_F4,"4"]]), "mg_u01_button")
        .appendField(Blockly.Msg.MG_ARDUINO_U01_BUTTON_PRESSED);
    this.setOutput(true, "Boolean");
    this.setColour(260);
 this.setTooltip(Blockly.Msg.MG_ARDUINO_U01_BUTTON_TOOLTIP);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['molegraph_u01_battery'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MG_ARDUINO_U01_BATTERY_BLOCK);
    this.setOutput(true, "Number");
    this.setColour(260);
 this.setTooltip(Blockly.Msg.MG_ARDUINO_U01_BATTERY_TOOLTIP);
 this.setHelpUrl("");
  }
};

// MG U01 servo blocks
Blockly.Blocks['molegraph_u01_servo_attach'] = {
  init: function() {
    this.setColour(230);
	this.setHelpUrl(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_HELPURL);
    this.appendDummyInput("").appendField(Blockly.Msg.MG_ARDUINO_SERVO_ATTACH1);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MG_ARDUINO_SERVO_ATTACH2).appendField(new Blockly.FieldInstance('Servo', Blockly.Msg.SERVO_DEFAULT_NAME, false, false, false), 'SERVO_NAME');
	this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown([["port 2","2"], ["port 3","3"]]), "mg_u01_port");
	//this.appendValueInput("PIN").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_INPUT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_TOOLTIP);
  }
};

Blockly.Blocks['molegraph_u01_servo_move'] = {
  init: function() {
    this.setColour(230);
	this.setHelpUrl(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_HELPURL);
    this.appendDummyInput("").appendField(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_INPUT1);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldInstance('Servo', Blockly.Msg.SERVO_DEFAULT_NAME, false, false, false), 'SERVO_NAME');
    this.appendValueInput("DEGREE").setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_DEGREE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MG_ARDUINO_SERVO_MOVE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['molegraph_u01_servo_read_degrees'] = {
  init: function() {
    this.setColour(230);
	this.setHelpUrl(Blockly.Msg.MG_ARDUINO_SERVO_READ_DEGREES_HELPURL);
    this.appendDummyInput("").appendField(Blockly.Msg.MG_ARDUINO_SERVO_READ_DEGREES_INPUT1);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldInstance('Servo', Blockly.Msg.SERVO_DEFAULT_NAME, false, false, false), 'SERVO_NAME');
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MG_ARDUINO_SERVO_READ_DEGREES_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['molegraph_u01_servo_detach'] = {
  init: function() {
    this.setColour(230);
	this.setHelpUrl('http://www.arduino.cc/playground/ComponentLib/servo');
	this.setInputsInline(false);
    this.appendDummyInput("").appendField(Blockly.Msg.MG_ARDUINO_SERVO_DETACH);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldInstance('Servo', Blockly.Msg.SERVO_DEFAULT_NAME, false, false, false), 'SERVO_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Release a pin from servo driving.');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};