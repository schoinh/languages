var result = "fsharp";

$(function() {
  $(".languages").hide();
  $("form").submit(function(event) {
    $(".languages").hide();
    event.preventDefault();
    if (result = "swift") {
      $(".languages .swift").show();
    } else if (result = "python") {
      $(".languages .python").show();
    } else if (result = "fsharp") {
      $(".languages .fsharp").show();
    } else if (result = "c++") {
      $(".languages .c++").show();
    } else {
      console.log("no result");
    }
  });
});
