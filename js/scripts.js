var swiftTally = 0
var pythonTally = 0
var fsTally = 0
var cppTally = 0

var tally = function(q1Answer, q2Answer, q3Answer, q4Answer, q5Answer) {
  if (q1Answer === "a1") {
    swiftTally +=
  }
  if (q1Answer === "a2") {
    pythonTally +=
  }
  if (q1Answer === "a3") {
    fsTally +=
  }
  if (q1Answer === "a4") {
    cppTally +=
  }
  if (q2Answer === "a1") {
    swiftTally +=
  }
  if (q2Answer === "a2") {
    pythonTally +=
  }
  if (q2Answer === "a3") {
    fsTally +=
  }
  if (q2Answer === "a4") {
    cppTally +=
  }
  if (q3Answer === "a1") {
    swiftTally +=
  }
  if (q3Answer === "a2") {
    pythonTally +=
  }
  if (q3Answer === "a3") {
    fsTally +=
  }
  if (q3Answer === "a4") {
    cppTally +=
  }
  if (q4Answer === "a1") {
    swiftTally +=
  }
  if (q4Answer === "a2") {
    pythonTally +=
  }
  if (q4Answer === "a3") {
    fsTally +=
  }
  if (q4Answer === "a4") {
    cppTally +=
  }
  if (q5Answer === "a1") {
    swiftTally +=
  }
  if (q5Answer === "a2") {
    pythonTally +=
  }
  if (q5Answer === "a3") {
    fsTally +=
  }
  if (q5Answer === "a4") {
    cppTally +=
  }
}



$(function() {
  $(".swift, .python, .fs, .cpp").hide();
  // would like to figure out a way to not have to list out all the language classes in above line
  $("form").submit(function(event) {
    event.preventDefault();
    $(".swift, .python, .fs, .cpp").hide();

    var q1Answer = $("input:radio[name=q1]:checked").val();
    var q2Answer = $("input:radio[name=q2]:checked").val();
    var q3Answer = $("input:radio[name=q3]:checked").val();
    var q4Answer = $("input:radio[name=q4]:checked").val();
    var q5Answer = $("input:radio[name=q5]:checked").val();

    if (result === "swift") {
      $(".swift").show();
    } else if (result === "python") {
      $(".python").show();
    } else if (result === "fs") {
      $(".fs").show();
    } else if (result === "cpp") {
      $(".cpp").show();
    }
  });
});
