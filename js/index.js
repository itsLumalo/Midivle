let introStage = 0
// unused: var introComplete = localStorage.getItem("inco?")
// unused: var loadingClock = 0

const introTexts = [
  "Welcome to Midivle!",
  "This is a game all about building you kingdom and ending others, building alliances and ending alliances, hiring and firing, and saving lives and ending them too.",
  "Have fun and don't forget, only the best kingdom will rise!"
]

function checkIntroStage() {
  if (!localStorage.inco) {
    let spaceMessage = ""
    if (introStage === introTexts.length - 1) {
      localStorage.inco = true
    } else {
      spaceMessage = " (Press Space)"
    }
    document.getElementById("introText").innerHTML = introTexts[introStage] + spaceMessage
  }
}

checkIntroStage()

let add = ""

function loading1() {
  // if (localStorage.inco === true) {
  document.getElementById("introText").innerHTML = "Loading." + add
  // }
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
  // Future function to load all game UI will go here
}

if (!localStorage.inco) {
  $('body').keyup(function(evt) {
    if (evt.key === " " || evt.key === "Space" || evt.keyCode === 32) {
      // Why write this:
      // introStage = introStage + 1;
      // when you could use this:
      // introStage += 1
      // If the right side is 1, you can also use this:
      introStage++
      checkIntroStage()
      // console.log(introStage);
    }
  });
}

function resetIncoAlert() {
  if (confirm("Only use if page is not loading!") == true) {
    delete localStorage.inco
  } else {
    return document.getElementById("cancelText").innerHTML = "Reset Was Canceled" 
    }
}
