var words = [];
var newWords = [];
var outstring = "";

$(document).ready(function(){
  $("#sentenceForm").submit(function(event){
    words = $("#sentence").val();
    words = words.split(" ");
    words.forEach(function(word){
      var wordLength = word.length;
      if(wordLength >= 3){
        newWords.push(word);
      }
    });
    newWords = newWords.reverse();
    newWords.forEach(function(word){
      outstring = outstring + " " + word;
    });
    alert(outstring);
    event.preventDefault();
  });
});
