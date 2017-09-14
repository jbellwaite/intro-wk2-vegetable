

$(document).ready(function() {
  $("form#vegetable").submit(function(event) {
    // var userScore = age + color + season ;
    var userScore = parseInt($("input:radio[name=age]:checked").val()) + parseInt($("input:radio[name=color]:checked").val()) + parseInt($("input:radio[name=season]:checked").val()) ;

    if (userScore === 3) {
      $("#answer").text("You are a vegetable");
    }
    else if (userScore === 4 || userScore === 5) {
      $("#answer").text("You are a vegetable2");
    }
    else {
      $("#answer").text("You are a vegetable3");
    }

    $("#vegetable").hide();
    event.preventDefault();
  });
});
