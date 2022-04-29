function saturdayFun(wantTo = 'roller-skate') {
// should return a String like "This Saturday, I want to ....!"
// Fill in the ... with the activity that's passed in as the first parameter.
// If nothing is passed in, default to "roller-skate".
    const prefix = 'This Saturday, I want to ';
    const postfix = '!';

    return prefix + wantTo + postfix;
}

const mondayWork = function (activity = 'go to the office') {
/*
Implement a function expression that
returns a String like "This Monday, I will ... ."
Fill in the ... with the activity that's passed in
as the first parameter. If nothing is passed in,
default to "go to the office". 
*/
    const prefix = "This Monday, I will ";
    const postfix = '.';

    return prefix + activity + postfix;
}

function wrapAdjective(flairString){
/*
should return a function
This "inner" function should:
Take a single parameter that should default to "special".
Name it however you wish.
Return a String of the form "You are ..." where ... should be
the adjective this function received wrapped in visual flair.
It should take as parameter a String that will be used to create visual flair
You may call the parameter whatever you like, but its default value should be "*"
Call example: const encouragingPromptFunction = wrapAdjective("!!!")
Thus a total call should be:

Example:
wrapAdjective("%")("a dedicated programmer");
    //=> "You are %a dedicated programmer%!"

   
    it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective('*')
      let emphatic = result("a hard worker")
      expect(emphatic).to.equal("You are *a hard worker*!")
    });

    it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective("||")
      let emphatic = result("a dedicated programmer")
      expect(emphatic).to.equal("You are ||a dedicated programmer||!")
    });
*/
    return function (emphatic = 'special') {
        const prefix = 'You are ';
        const adjectiveFlaired = flairString + emphatic + flairString;
        const postfix = '!';
        return prefix + adjectiveFlaired + postfix;
    }
}

console.log( wrapAdjective("%")("a dedicated programmer") );