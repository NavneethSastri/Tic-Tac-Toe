let turn = 1
let win = 0;
let guess = 0;

player_symbols = ["far fa-circle"]
$(document).ready(() => {


  // add click callback to each button in page
  $("button").click(function() {
		console.log("test 1")
		console.log("win:", win)
    if ($(this).hasClass("fa fa-times") || $(this).hasClass("fa fa-check")) {
			console.log("test 2")
			if(win == 0){
				console.log("test a")
      	$(this).css(("background-color", "red"), 1000)
			setTimeout(()=>{
        $(this).css("background-color", "white")
      }, 1000)
    }
		}
    else {
      if (turn == 1){
				if (win == 0){
					console.log("hi")
        	$("#screen").text("PLAYER 2 TURN FOLLOWS")
        	// Add check sign font (from font-awesome) to the button we clicked
        	$(this).addClass("fa fa-check")
					guess += 1;
					console.log("win:", win)
					console.log("guess:", guess)
        	turn = 2
					
					if(guess==9){
						win = 1
						turn = 1
						console.log("win", win)
						$("#screen").text("TIE")
						}
        	if (check("fa fa-check")) {
          	$("#screen").text("PLAYER 1 WON")
						console.log("win:", win)
        	}
				}
      }
      else {
				if (win == 0){
        	$("#screen").text("PLAYER 1 TURN FOLLOWS")
          
        	// Add check sign font (from font-awesome) to the button we clicked
        	$(this).addClass("fa fa-times") 
					guess += 1;
					console.log("win:", win)
					console.log("guess:", guess)
        	turn = 1

        	if(guess==9){
						win = 1
						turn = 1
						console.log("win", win)
						$("#screen").css("color", "black")
						$("#screen").text("TIE")
						}
					if(check("fa fa-times")) {
          	$("#screen").text("PLAYER 2 WON")
						console.log("win:", win)
					}
        }
				}
      }
    

    // Function to check the win case
    function check(symbol) {
      // one if statement for all horizontal
      for (let i = 1; i <= 9; i += 3) {
        if (
          $(`.sq${i}`).hasClass(symbol) &&
          $(`.sq${i+1}`).hasClass(symbol) &&
          $(`.sq${i+2}`).hasClass(symbol)
        ) {
          $(`.sq${i}`).css("color", "green")
          $(`.sq${i+1}`).css("color", "green")
          $(`.sq${i+2}`).css("color", "green")
					win = 1
          return true
        }
      }

      // one if statement for all vertical
      for (let i = 1; i <= 3; i++) {
        if (
          $(`.sq${i}`).hasClass(symbol) &&
          $(`.sq${i+3}`).hasClass(symbol) &&
          $(`.sq${i+6}`).hasClass(symbol)
        ) {
          $(`.sq${i}`).css("color", "green")
          $(`.sq${i+3}`).css("color", "green")
          $(`.sq${i+6}`).css("color", "green")
					win = 1
          return true
				
        }
      }

      // two ifs for diagonal 
			if (
          $(".sq1").hasClass(symbol) &&
          $(".sq5").hasClass(symbol) &&
          $(".sq9").hasClass(symbol)
        ) {
          $(".sq1").css("color", "green")
          $(".sq5").css("color", "green")
          $(".sq9").css("color", "green")
					win = 1
          return true
        }

				if (
          $(".sq3").hasClass(symbol) &&
          $(".sq5").hasClass(symbol) &&
          $(".sq7").hasClass(symbol)
        ) {
          $(".sq3").css("color", "green")
          $(".sq5").css("color", "green")
          $(".sq7").css("color", "green")
					win = 1
          return true
        }
      
      
    }
	

    
  })
})

function reset(){

	win = 0
	guess = 0
	turn = 1
	console.log("win", win)
	$("#screen").text("PLAYER 1 TURN FOLLOWS")
	$(".r").removeClass("fa fa-check")
	$(".r").removeClass("fa fa-times")
	$(".r").css("color", "black")
	}