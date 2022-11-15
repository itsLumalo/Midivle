var introStage = 1
var introComplete = localStorage.getItem("inco?")
var loadingClock = 0
checkIntroStage()
loading1()

function checkIntroStage() {
  if (localStorage.getItem("inco?") == null || "false") {
      if (introStage == 1) {
        localStorage.setItem("inco?", "false")
        console.log(introComplete)
        document.getElementById("introText").innerHTML = "Welcome to Midivle!";
      } else {
        if (introStage == 2) {
          document.getElementById("introText").innerHTML = "This is a game all about building you kingdom and ending others, building alliances and ending alliances, hiring and firing, and saving lives and ending them too.  ";
        } else {
          if (introStage == 3) {
            document.getElementById("introText").innerHTML = "Have fun and dont forget, only the best kingdom will rise!"
            localStorage.setItem("inco?", "true");
          }
        }
      }
    }
  }

  $(document).ready(function() {
    $("introText").fadeIn();
  });

  function loading1() {
    if (localStorage.getItem("inco?") == "true") {
      document.getElementById("introText").innerHTML = "Loading."
    }
  }

  function loading2() {
    document.getElementById("introText").innerHTML = "Loading.."
  }

  function loading3() {
    document.getElementById("introText").innerHTML = "Loading..."
  }

  if (localStorage.getItem("inco?") == "true") {
    setTimeout(loading1, 0);
    setTimeout(loading2, 1000);
    setTimeout(loading3, 2000);
    setTimeout(loading1, 3000);
    setTimeout(loading2, 4000);
    setTimeout(loading3, 5000);
  }

  if (localStorage.getItem("inco?") == null) {
    $('body').keyup(function(spacePressed) {
      if (spacePressed.keyCode == 32) {
        introStage = introStage + 1;
        checkIntroStage()
        console.log(introStage);
      }
    });
  }
