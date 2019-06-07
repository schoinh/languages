var swiftTally = 0;
var pythonTally = 0;
var fsTally = 0;
var cppTally = 0;


$(function() {
  $(".swift, .python, .fs, .cpp").hide();
  // would like to figure out a way to not have to list out all the language classes in above line
  $("form").submit(function(event) {
    event.preventDefault();
    $(".swift, .python, .fs, .cpp").hide();
    var nameInput = $("input#name").val();
    var q1Answer = $("input:radio[name=q1]:checked").val();
    var q2Answer = $("input:radio[name=q2]:checked").val();
    var q3Answer = $("input:radio[name=q3]:checked").val();
    var q4Answer = $("input:radio[name=q4]:checked").val();
    var q5Answer = $("input:radio[name=q5]:checked").val();

    $(".name").empty().append(nameInput);

    var tally = function(answer) {
      if (answer === "a1") {
        swiftTally += 1;
      } else if (answer === "a2") {
        pythonTally += 1;
      } else if (answer === "a3") {
        fsTally += 1;
      } else if (answer === "a4") {
        cppTally += 1;
      }
    };

    tally(q1Answer);
    tally(q2Answer);
    tally(q3Answer);
    tally(q4Answer);
    tally(q5Answer);

    var highestTally = Math.max(swiftTally, pythonTally, fsTally, cppTally);

    if (highestTally === swiftTally) {
      $(".swift").show();
    } else if (highestTally === pythonTally) {
      $(".python").show();
    } else if (highestTally === fsTally) {
      $(".fs").show();
    } else if (highestTally === cppTally) {
      $(".cpp").show();
    };
  });
});
