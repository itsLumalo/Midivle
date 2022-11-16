var introStage = 1
// unused: var introComplete = localStorage.getItem("inco?")
// unused: var loadingClock = 0

function checkIntroStage() {
    if (!localStorage.inco) {
      if (introStage == 1) {
        document.addEventListener("DOMContentLoaded", e => {
          document.getElementById("introText").innerHTML = "Welcome to Midivle!";
        })
      } else {
        if (introStage == 2) {
          document.getElementById("introText").innerHTML = "This is a game all about building you kingdom and ending others, building alliances and ending alliances, hiring and firing, and saving lives and ending them too.  ";
        } else {
          if (introStage == 3) {
            document.getElementById("introText").innerHTML = "Have fun and dont forget, only the best kingdom will rise!"
            localStorage.inco = true;
          }
        }
      }
    }
}

checkIntroStage()

let add = ""

function loading1() {
  if (localStorage.inco === true) {
    document.getElementById("introText").innerHTML = "Loading." + add
  }
  setTimeout(loading1, 3000)
}

function loading2() {
  document.getElementById("introText").innerHTML = "Loading.." + add
  setTimeout(loading2, 3000)
}

function loading3() {
  document.getElementById("introText").innerHTML = "Loading..." + add
  setTimeout(loading3, 3000)
}

if (localStorage.inco) {
  setTimeout(loading1, 0);
  setTimeout(loading2, 1000);
  setTimeout(loading3, 2000);
  setTimeout(() => add = "<br>If you see this for a while, please try refreshing the page."), 10000)
}

if (!localStorage.inco) {
  $('body').keyup(function(spacePressed) {
    if (spacePressed.keyCode == 32) {
      introStage = introStage + 1;
      checkIntroStage()
      console.log(introStage);
    }
  });
}
