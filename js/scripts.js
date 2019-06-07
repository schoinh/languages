var lang1Tally = 0;
var lang2Tally = 0;
var lang3Tally = 0;
var lang4Tally = 0;


$(function() {
  $(".resultBox, .lang1, .lang2, .lang3, .lang4").hide();
  // would like to figure out a way to not have to list out all the language classes in above line
  $("form").submit(function(event) {
    event.preventDefault();
    $(".resultBox, .lang1, .lang2, .lang3, .lang4").hide();

    var nameInput = $("input#name").val();
    var q1Answer = $("input:radio[name=q1]:checked").val();
    var q2Answer = $("input:radio[name=q2]:checked").val();
    var q3Answer = $("input:radio[name=q3]:checked").val();
    var q4Answer = $("input:radio[name=q4]:checked").val();
    var q5Answer = $("input:radio[name=q5]:checked").val();

    if (!nameInput || !q1Answer || !q2Answer || !q3Answer || !q4Answer || !q5Answer) {
      alert("Your submission is incomplete. Pleaes make sure you filled out your name and answered all the questions.");
    } else {
      $(".resultBox").show();
      $(".name").empty().append(nameInput);

      var tally = function(answer) {
        if (answer === "a1") {
          lang1Tally += 1;
        } else if (answer === "a2") {
          lang2Tally += 1;
        } else if (answer === "a3") {
          lang3Tally += 1;
        } else if (answer === "a4") {
          lang4Tally += 1;
        }
      };

      tally(q1Answer);
      tally(q2Answer);
      tally(q3Answer);
      tally(q4Answer);
      tally(q5Answer);

      var highestTally = Math.max(lang1Tally, lang2Tally, lang3Tally, lang4Tally);

      if (highestTally === lang1Tally) {
        $(".lang1").show();
      } else if (highestTally === lang2Tally) {
        $(".lang2").show();
      } else if (highestTally === lang3Tally) {
        $(".lang3").show();
      } else if (highestTally === lang4Tally) {
        $(".lang4").show();
      }
    }
  });
});
