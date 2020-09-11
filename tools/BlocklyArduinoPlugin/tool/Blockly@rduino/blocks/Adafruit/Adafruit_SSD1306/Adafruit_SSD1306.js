/**
 */
'use strict';

goog.provide('Blockly.Blocks.Adafruit_SSD1306');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Msg.SSD1306_WIDTH = "šířka v pixelech";
Blockly.Msg.SSD1306_HEIGHT = "výška v pixelech";
Blockly.Msg.SSD1306_OLED_RESET = "reset pin";
Blockly.Msg.SSD1306_I2C_ADDRESS = "I2C addresa";
Blockly.Msg.SSD1306_OLED_RESET_NOT_USED = "-1 (nepouzito)";

Blockly.Msg.SSD1306_INIT_WIDTH_DROPDOWN = [["128","128"],["64","64"]];
Blockly.Msg.SSD1306_INIT_HEIGHT_DROPDOWN = [["64","64"],["32","32"]];
Blockly.Msg.SSD1306_INIT_OLED_RESET_DROPDOWN = [[Blockly.Msg.SSD1306_OLED_RESET_NOT_USED,"-1"],["4","4"]];
//Blockly.Msg.SSD1306_INIT_TOOLTIP

Blockly.Msg.SSD1306_INIT_NAME = 'Inicializovat OLED';
Blockly.Msg.SSD1306_INIT_TOOLTIP = 'Initializace OLED';

Blockly.Blocks.SSD1306_HUE = "190";

Blockly.Blocks['SSD1306_init'] = {
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.SSD1306_HUE);
//    this.setHelpUrl(Blockly.Msg.SSD1306_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.SSD1306_INIT_NAME);
//        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Adafruit/Adafruit_SSD1306/SSD1306.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendDummyInput("")
	  	.setAlign(Blockly.ALIGN_RIGHT)
	  	.appendField(Blockly.Msg.SSD1306_WIDTH)
        	.appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_INIT_WIDTH_DROPDOWN), "WIDTH");
        this.appendDummyInput("")
	  	.setAlign(Blockly.ALIGN_RIGHT)
	  	.appendField(Blockly.Msg.SSD1306_HEIGHT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_INIT_HEIGHT_DROPDOWN), "HEIGHT");
	this.appendDummyInput("")
	  	.setAlign(Blockly.ALIGN_RIGHT)
	  	.appendField(Blockly.Msg.SSD1306_OLED_RESET)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_INIT_OLED_RESET_DROPDOWN), "OLED_RESET");
	this.appendDummyInput("")
	  	.setAlign(Blockly.ALIGN_RIGHT)
	  	.appendField(Blockly.Msg.SSD1306_I2C_ADDRESS)
                .appendField(new Blockly.FieldNumber(0x3C, Blockly.Blocks.math_number.validator), "I2C_ADDRESS");
	//  	.setConstraints(8,0x77,1);
	//this.setOutput(true, 'Number');
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
//	this.setTooltip(Blockly.Msg.SSD1306_INIT_TOOLTIP);
  }
};

Blockly.Msg.SSD1306_DISPLAY_NAME = 'Překreslit displej';

Blockly.Blocks['SSD1306_display'] = {
        init: function() {
	this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.SSD1306_DISPLAY_NAME);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	}
};

Blockly.Msg.SSD1306_CLEARDISPLAY_NAME = 'Vymazat displej';

Blockly.Blocks['SSD1306_clearDisplay'] = {
	init: function() {
	this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendDummyInput("")
               	.appendField(Blockly.Msg.SSD1306_CLEARDISPLAY_NAME)
       	this.setInputsInline(false);
       	this.setPreviousStatement(true, null);
       	this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_INVERTDISPLAY_NAME = 'Invertovat displej';
Blockly.Msg.SSD1306_INVERTDISPLAY_CHECKBOX_NAME = 'povolit';

Blockly.Blocks['SSD1306_invertDisplay'] = {
        init: function() {
	this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendDummyInput("")
		.appendField(Blockly.Msg.SSD1306_INVERTDISPLAY_NAME);
	this.appendValueInput("ENABLE")
        	.setCheck("Boolean")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SSD1306_INVERTDISPLAY_CHECKBOX_NAME);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_DRAWPIXEL_NAME = 'Nakreslit pixel';
Blockly.Msg.SSD1306_XPOS = "sloupec";
Blockly.Msg.SSD1306_YPOS = "řádek";
Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN = [["Bila", "SSD1306_WHITE"],["Cerna", "SSD1306_BLACK"], ["Inverzni", "SSD1306_INVERSE"]];
Blockly.Msg.SSD1306_COLOUR = 'barva';

Blockly.Blocks['SSD1306_drawPixel'] = {
	init: function() {
	this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_DRAWPIXEL_NAME);
	this.appendValueInput("XPOS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SSD1306_XPOS);
       	this.appendValueInput("YPOS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
       	        .appendField(Blockly.Msg.SSD1306_YPOS);
	this.appendDummyInput("")
       		.appendField(Blockly.Msg.SSD1306_COLOUR)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN), "COLOUR");
	this.setInputsInline(false);
       	this.setPreviousStatement(true, null);
       	this.setNextStatement(true, null);
	}
};

Blockly.Msg.SSD1306_DRAWLINE_NAME = 'Nakreslit čáru';
Blockly.Msg.SSD1306_START = 'z';
Blockly.Msg.SSD1306_END = 'do';

Blockly.Blocks['SSD1306_drawLine'] = {
        init: function() {
	this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_DRAWLINE_NAME);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_START);
	this.appendValueInput("XPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_END);
	this.appendValueInput("XPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
        this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_COLOUR)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN), "COLOUR");
	this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_DRAWRECT_NAME = 'Nakreslit obdélník';
Blockly.Msg.SSD1306_FILL = 'výplň';

Blockly.Blocks['SSD1306_drawRect'] = {
        init: function() {
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_DRAWRECT_NAME);
	this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_START);
	this.appendValueInput("XPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_END);
        this.appendValueInput("XPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
	this.appendValueInput("FILL")
                .setCheck("Boolean")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SSD1306_FILL);
        this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_COLOUR)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN), "COLOUR");
	this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};


Blockly.Msg.SSD1306_DRAWCIRCLE_NAME = 'Nakreslit kruh';
Blockly.Msg.SSD1306_RADIUS = 'poloměr';

Blockly.Blocks['SSD1306_drawCircle'] = {
        init: function() {
	this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_DRAWCIRCLE_NAME);
	this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendValueInput("XPOS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
        this.appendValueInput("RADIUS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_RADIUS);
        this.appendValueInput("FILL")
                .setCheck("Boolean")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_FILL);
        this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_COLOUR)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN), "COLOUR");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_DRAWROUNDRECT_NAME = 'Nakreslit zaoblený oblélník';

Blockly.Blocks['SSD1306_drawRoundRect'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_DRAWROUNDRECT_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendValueInput("XPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
        this.appendValueInput("XPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
	this.appendValueInput("RADIUS")
		.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SSD1306_RADIUS);
        this.appendValueInput("FILL")
                .setCheck("Boolean")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_FILL);
        this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_COLOUR)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN), "COLOUR");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_DRAWTRIANGLE_NAME = 'Nakreslit trojůhelník';

Blockly.Blocks['SSD1306_drawTriangle'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_DRAWTRIANGLE_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendValueInput("XPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_1")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
        this.appendValueInput("XPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_2")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
	this.appendValueInput("XPOS_3")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
        this.appendValueInput("YPOS_3")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
        this.appendValueInput("FILL")
                .setCheck("Boolean")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_FILL);
        this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_COLOUR)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_COLOUR_FIELDDROPDOWN), "COLOUR");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_SETTEXTSIZE_NAME = 'Nastavit velikost textu';
Blockly.Msg.SSD1306_SIZE_NAME = 'velikost textu';

Blockly.Blocks['SSD1306_setTextSize'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_SETTEXTSIZE_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendValueInput("SIZE")
        	.setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_SIZE_NAME);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_SETTEXTCOLOUR_NAME = 'Nastavit barvu textu';

Blockly.Blocks['SSD1306_setTextColour'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_SETTEXTCOLOUR_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendDummyInput("")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(new Blockly.FieldDropdown([["Bila", "SSD1306_WHITE"], ["Cerna", "SSD1306_BLACK"], ["Inverzni", "SSD1306_INVERSE"]]), "COLOUR");
	this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_SETCURSOR_NAME = 'Nastavit polohu kurzoru';

Blockly.Blocks['SSD1306_setCursor'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_SETCURSOR_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendValueInput("XPOS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_XPOS);
	this.appendValueInput("YPOS")
                .setCheck("Number")
		.setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_YPOS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_CP437_NAME = 'CP437 znaková sada';
Blockly.Msg.SSD1306_ENABLE = 'povolit';

Blockly.Blocks['SSD1306_cp437'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_CP437_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendValueInput("ENABLE")
                .setCheck("Boolean")
                .appendField(Blockly.Msg.SSD1306_ENABLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_CHARACTER = "znak";
Blockly.Msg.SSD1306_WRITE_NAME = "Napsat";

Blockly.Blocks['SSD1306_write'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_WRITE_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendValueInput("CHAR")
                .setCheck("String")
                .appendField(Blockly.Msg.SSD1306_CHARACTER);
	this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_PRINTLN_NAME = "Napsat řádek";
Blockly.Msg.SSD1306_STRING = "text [String]";

Blockly.Blocks['SSD1306_println'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_PRINTLN_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendValueInput("STRING")
                .setCheck("String")
                .appendField(Blockly.Msg.SSD1306_STRING);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_PRINT_NAME = "Napsat";
Blockly.Msg.SSD1306_STRING = "text [String]";

Blockly.Blocks['SSD1306_print'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_PRINT_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendValueInput("STRING")
                .setCheck("String")
                .appendField(Blockly.Msg.SSD1306_STRING);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        }
};

Blockly.Msg.SSD1306_WIDTH_NAME = "Šířka";

Blockly.Blocks['SSD1306_width'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_WIDTH_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.setOutput(true, 'Number');
	this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        }
};

Blockly.Msg.SSD1306_HEIGHT_NAME = "Výška";

Blockly.Blocks['SSD1306_height'] = {
        init: function() {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SSD1306_HEIGHT_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.setOutput(true, 'Number');
        this.setPreviousStatement(false, null);
        this.setNextStatement(false, null);
        }
};

Blockly.Msg.SSD1306_STARTSCROLL_NAME = "Posuv displeje";
Blockly.Msg.SSD1306_SCROLL_DIRECTION_FIELDDROPDOWN = [["Doprava", "SSD1306_RIGHT"], ["Doleva", "SSD1306_LEFT"], ["Diagonalne doprava", "SSD1306_DIAGRIGHT"], ["Diagonalne doleva", "SSD1306_DIAGLEFT"]];
Blockly.Msg.SSD1306_SCROLL_DIRECTION = "směr";
Blockly.Msg.SSD1306_SCROLL_START_ROW = "řádek začátku (0-7)";
Blockly.Msg.SSD1306_SCROLL_END_ROW = "řádek konce (0-7)";

Blockly.Blocks['SSD1306_startscroll'] = {
	init: function() {
	this.appendDummyInput()
		.appendField(Blockly.Msg.SSD1306_STARTSCROLL_NAME);
	this.setColour(Blockly.Blocks.SSD1306_HUE);
	this.appendValueInput("START_ROW")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_SCROLL_START_ROW);
	this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.appendValueInput("END_ROW")
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_SCROLL_END_ROW);
	this.appendDummyInput("")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.SSD1306_SCROLL_DIRECTION)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.SSD1306_SCROLL_DIRECTION_FIELDDROPDOWN), "SCROLL_DIRECTION");
        this.setInputsInline(false);
	this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	}
};


Blockly.Msg.SSD1306_STOPSCROLL_NAME = "Zastavit posuv";
Blockly.Blocks['SSD1306_stopscroll'] = {
        init: function() {
        this.appendDummyInput()
                .appendField(Blockly.Msg.SSD1306_STOPSCROLL_NAME);
        this.setColour(Blockly.Blocks.SSD1306_HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
	}
};




