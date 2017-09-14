

$(document).ready(function() {
  $("form#vegetable").submit(function(event) {
    // var userScore = age + color + season ;
    var userScore = parseInt($("input:radio[name=age]:checked").val()) + parseInt($("input:radio[name=color]:checked").val()) + parseInt($("input:radio[name=season]:checked").val()) ;

    if (userScore === 3 || userScore === 4) {
      $("#answer").text("You are a beet!");
      $("#beet").removeClass();
      $("#description").text("You are dark and sweet. You stain everything you touch.");
    }
    else if (userScore === 5 || userScore === 6) {
      $("#answer").text("You are a bellpepper!");
      $("#bellpepper").removeClass();
      $("#description").text("You are bright and cheery. You are empty inside.");
    }
    else if (userScore === 7) {
      $("#answer").text("You are a broccoli!");
      $("#broccoli").removeClass();
      $("#description").text("You are healthy. People pretend to like you, but secretly no one does.");
    }
    else if (userScore === 8) {
      $("#answer").text("You are brussel sprouts!");
      $("#brussels").removeClass();
      $("#description").text("Misunderstood for much of your long life. Recently, you are en vogue.")
    }
    else if (userScore === 9 || userScore === 10) {
      $("#answer").text("You are a tomato (its actually vegetable)!");
      $("#tomato").removeClass();
      $("#description").text("You are plump and juicy. You are only really good two months out of the year");
    }
    else {
      $("#answer").text("You are a carrot!");
      $("#carrot").removeClass();
      $("#description").text("You spend most of your life underground. You are worth more the uglier you are.");
    }

    $("#vegetable").hide();
    event.preventDefault();
  });
});
