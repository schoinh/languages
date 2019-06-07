var result = "fsharp";

$(function() {
  $(".swift, .python, .fsharp, .cplusplus").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    $(".swift, .python, .fsharp, .cplusplus").hide();
    if (result === "swift") {
      $(".swift").show();
    } else if (result === "python") {
      $(".python").show();
    } else if (result === "fsharp") {
      $(".fsharp").show();
    } else if (result === "cplusplus") {
      $(".cplusplus").show();
    } else {
      console.log("no result");
    }
  });
});
