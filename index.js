// JavaScript Document for suryasjsthree.html part of module4 harder assignemnt
//note: in this more work to do to produce same output as easier version.god bless!
// the call to this will code will be if name is other than j(helloSpeake.speak(names[i] the call will bring to this code below:
var helloSpeaker ={
    speak :  function(names){
     console.log('Hello '+names);
     }
     };
//if name starts with j then the call to byeSpeaker.speak(names[i]) call will come here and work with following code.
 var byeSpeaker ={
   speak : function(names){
   console.log('Goodbye '+names);
   }
};

(function () {

/* fill in parts of the 'for' loop to loop over names array
  the var names ["Yakov".........]; is in the html file head section*/
for (var i = 0; i < names.length; i++) {
var firstLetter = names[i].charAt(0).toLowerCase();  // takes each name in the variable names and converts the first character to lower case e.g. Yokov to yokov.
//STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
 if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
