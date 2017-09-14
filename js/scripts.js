

$(document).ready(function() {
  $("form#vegetable").submit(function(event) {
    // var userScore = age + color + season ;
    var userScore = parseInt($("input:radio[name=age]:checked").val()) + parseInt($("input:radio[name=color]:checked").val()) + parseInt($("input:radio[name=season]:checked").val()) ;

    if (userScore === 3 || userScore === 4) {
      $("#answer").text("You are a beet!");
      $("#beet").removeClass();
    }
    else if (userScore === 5 || userScore === 6) {
      $("#answer").text("You are a bellpepper!");
      $("#bellpepper").removeClass();
    }
    else if (userScore === 7) {
      $("#answer").text("You are a broccoli!");
      $("#broccoli").removeClass();
    }
    else if (userScore === 8) {
      $("#answer").text("You are brussel sprouts!");
      $("#brussels").removeClass();
    }
    else if (userScore === 9 || userScore === 10) {
      $("#answer").text("You are a tomato (its actually vegetable)!");
      $("#tomato").removeClass();
    }
    else {
      $("#answer").text("You are a carrot!");
      $("#carrot").removeClass();
    }

    $("#vegetable").hide();
    event.preventDefault();
  });
});
