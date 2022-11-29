let introStage = 0
let loadingClock = 0
var hasItfinishedLoading = false

const introTexts = [
  "Welcome to Midivle!",
  "This is a game all about building you kingdom and ending others, building alliances and ending alliances, hiring and firing, and saving lives and ending them too.",
  "Have fun and don't forget, only the best kingdom will rise!",
  "Thanks For Playing!"
]

function checkIntroStage() {
  if (!localStorage.inco) {
    let spaceMessage = ""
    if (introStage == 4) {
      localStorage.inco = true
       setTimeout(loading1, 0);
       setTimeout(loading2, 1000);
       setTimeout(loading3, 2000);
    } else {
      spaceMessage = " (Press Space)"
    }
    document.getElementById("introText").innerHTML = introTexts[introStage] + spaceMessage
  }
}

checkIntroStage()

let add = ""

function loading1() {
  document.getElementById("introText").innerHTML = "Loading." + add
  setTimeout(loading1, 3000)
}

function loading2() {
  document.getElementById("introText").innerHTML = "Loading.." + add
  setTimeout(loading2, 3000)
}

function loading3() {
  document.getElementById("introText").innerHTML = "Loading..." + add
  setTimeout(loading3, 3000)
  if (loadingClock == 3) {
    finishedLoading()
  } else {
    loadingClock++
    console.log(loadingClock)
  }
}

if (localStorage.inco) {
  setTimeout(loading1, 0);
  setTimeout(loading2, 1000);
  setTimeout(loading3, 2000);
}

if (!localStorage.inco) {
  $('body').keyup(function(evt) {
    if (evt.key === " " || evt.key === "Space" || evt.keyCode === 32) {
      introStage++
      checkIntroStage()
      console.log(localStorage.inco)
    }
  });
}

function resetIncoAlert() {
  if (confirm("Only use if page is not loading!") == true) {
    delete localStorage.inco
  } else {
    document.getElementById("cancelText").innerHTML = "Reset Was Canceled"
    return false
  }
}

function finishedLoading() {
  document.getElementById("introText").hidden = true
  document.getElementById("cancelText").hidden = true
  document.getElementById("resetLink").hidden = true
  hasItFinishedLoading = true
}

module.exports = {hasItFinishedLoading};
