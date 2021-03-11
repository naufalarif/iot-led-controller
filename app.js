const five = require("johnny-five");

const board = new five.Board();

let ledRed, ledYellow, ledGreen;

board.on("ready", function() {
  ledRed = new five.Led(13);
  ledYellow = new five.Led(12);
  ledGreen = new five.Led(8);
  
  ledRed.off();
  ledYellow.off();
  ledGreen.off();

  this.repl.inject({
    redOn: function() {
      ledRed.on();    
    },
    yellowOn: function() {
      ledYellow.on();
    },
    greenOn: function() {
      ledGreen.on();
    },
    redBlink: function() {
      ledRed.blink(500);    
    },
    yellowBlink: function() {
      ledYellow.blink(500);
    },
    greenBlink: function() {
      ledGreen.blink(500);
    },
    redStrobe: function() {
      ledRed.blink();    
    },
    yellowStrobe: function() {
      ledYellow.strobe();
    },
    greenStrobe: function() {
      ledGreen.strobe();
    },
    // redPulse: function() {
    //   ledRed.pulse(1000);    
    // },
    // yellowPulse: function() {
    //   ledYellow.pulse(1000);
    // },
    // greenPulse: function() {
    //   ledGreen.pulse(1000);
    // },
    // redFade: function() {
    //   ledRed.fadeIn();

    //   board.wait(5000, () => {
    //     ledRed.fadeOut();    
    //   })
    // },
    // yellowFade: function() {
    //   ledYellow.fadeIn();

    //   board.wait(5000, () => {
    //     ledYellow.fadeOut();
    //   })
    // },
    // greenFade: function() {
    //   ledGreen.fadeIn();

    //   board.wait(5000, () => {
    //     ledGreen.fadeOut();
    //   })
    // },
    ledOn: function() {
      ledGreen.on();
      ledRed.on();
      ledYellow.on();
    },
    ledOff: function() {
      ledGreen.off();
      ledRed.off();
      ledYellow.off();
    },
    redOff: function() {
      ledRed.off();
    },
    yellowOff: function() {
      ledYellow.off();
    },
    greenOff: function() {
      ledGreen.off();
    }
  })

  board.on("exit", () => {
    ledGreen.off();
    ledRed.off();
    ledYellow.off();
  })
});