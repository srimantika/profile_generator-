const readline = require('readline');
let name = "";
let outputstring = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  name = `${answer}`;

  rl.question("What's an activity you like doing? ", (answer) => {
    outputstring += `${name} really enjoys ${answer}`;



    rl.question("What do you listen to while doing that?' ", (answer) => {
      outputstring += ` and likes listening to ${answer} music while doing that!`;


    
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        outputstring += ` ${name}'s favourite meal is ${answer}`;
  

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          outputstring += ` and loves eating ${answer} for her meal.`;
    
      
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            outputstring += ` ${name}'s favorite sport is ${answer}`;

        

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              outputstring += ` and her superpower is '${answer}''.`;
         
          

              rl.close();
              console.log(outputstring);
            });

          });

        });
 
      });

    });

  });

});