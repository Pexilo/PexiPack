let pexipackLogo = document.getElementById("pexipacklogo");
let fondHaut = document.getElementById("fondHaut");
let textTop = document.getElementById("textTop");
let containerSlideBig1 = document.getElementById("containerSlideBig1");
let containerSlideBig2 = document.getElementById("containerSlideBig2");
let wrap = document.getElementById("wrap");
let containerBox = document.getElementsByClassName("containerBox");
let textGreenContainer = document.getElementById("textGreenContainer");
let textWeaponsContainer = document.getElementById("textWeaponsContainer");
let textMobsContainer = document.getElementById("textMobsContainer");
let textBox = document.getElementsByClassName("textBox");
let buttonDL = document.getElementById("buttonDL");
let buttonVersions = document.getElementById("buttonVersions");
let divButton = document.getElementById("divButton");
let textBottom = document.getElementsByClassName("textBottom");
let pexiHead = document.getElementById("pexiHead");
let textFooter = document.getElementById("textFooter");
let twitterLogo = document.getElementById("twitter");
let footer = document.getElementById("footer");
let buttonDLs = document.getElementsByClassName("buttonDLs");

let slid1 = document.getElementById("slid1");
let slid2 = document.getElementById("slid2");
let slid3 = document.getElementById("slid3");
let containerSlide1 = document.getElementById("containerSlide1");

let slid10 = document.getElementById("slid10");
let slid11 = document.getElementById("slid11");
let slid12 = document.getElementById("slid12");
let containerSlide4 = document.getElementById("containerSlide4");

let delayInMilliseconds = 5;

setTimeout(function () {
  accueilResponsive();
}, delayInMilliseconds);

function accueilResponsive() {
  let w = document.documentElement.clientWidth;

  if (w <= 1100) {
    fondHaut.style.width = `${w}px`;

    document.getElementById("pexipacklogo").src = "../img/pexipacklogores.png";
    pexipackLogo.style.top = "100px";

    pexipackLogo.style.width = `${w - 10}px`;
    pexipackLogo.style.marginBottom = "30px";
    pexipackLogo.style.paddingBottom = "100px";

    containerSlideBig1.style.width = `${w - 10}px`;

    containerSlideBig2.style.width = `${w - 10}px`;

    textTop.style.width = `${w - 50}px`;
  }
  if (w <= 640) {
    wrap.style.visibility = "hidden";

    for (let i = 0; i < containerBox.length; i++) {
      containerBox[i].style.flexDirection = "column";
      containerBox[i].style.maxWidth = `${w}px`;
      containerBox[i].style.marginTop = "0";
      containerBox[i].style.display = "block";
      containerBox[i].style.height = "400px";
      containerBox[i].style.position = "relative";
    }

    for (let y = 0; y < textBox.length; y++) {
      textBox[y].style.marginRight = "40px";
      textBox[y].style.marginLeft = "40px";
      textBox[y].style.width = `${w - 50}px`;
      textBox[y].style.maxWidth = `${w}px`;
    }

    document.getElementById("textChanges").style.fontSize = "80%";
    pexipackLogo.style.paddingBottom = "100px";
    textTop.style.paddingTop = "50px";
    textTop.style.marginBottom = "50px";
    textTop.style.width = `${w - 50}px`;

    textGreenContainer.style.top = "520px";
    textGreenContainer.style.marginLeft = "30px";

    containerBox[1].style.top = "200px";
    textWeaponsContainer.style.top = "40px";
    textWeaponsContainer.style.right = "20px";

    containerBox[2].style.top = "200px";
    textMobsContainer.style.width = `${w - 50}px`;
    textMobsContainer.style.top = "550px";
    textMobsContainer.style.right = "20px";

    for (let k = 0; k < textBottom.length; k++) {
      textBottom[k].style.maxWidth = `${w}px`;
      textBottom[k].style.width = `${w - 50}px`;
    }

    containerSlideBig2.style.top = "450px";
    textBottom[0].style.top = "450px";

    divButton.style.position = "relative";
    divButton.style.top = "300px";
    buttonDL.style.maxWidth = `${w}px`;
    buttonDL.style.width = `${w - 50}px`;

    buttonVersions.style.maxWidth = `${w - 100}px`;
    buttonVersions.style.width = `${w - 50}px`;
    textBottom[1].style.top = "270px";

    for (let m = 0; m < buttonDLs.length; m++) {
      buttonDLs[m].style.fontSize = "100%";
    }

    footer.style.width = `${w}px`;
    footer.style.height = "150px";
    footer.style.position = "relative";
    footer.style.top = "50px";
    footer.style.borderBottom = "30px solid transparent";
    pexiHead.style.width = "50px";
    pexiHead.style.left = "-10px";
    pexiHead.style.marginLeft = "50px";
    textFooter.style.fontSize = "70%";
    twitterLogo.style.visibility = "hidden";

    containerSlideBig1.style.width = "400px";
    containerSlideBig1.style.height = "250px";
    slid1.style.width = "400px";
    slid2.style.width = "400px";
    slid3.style.width = "400px";
    slid1.style.height = "250px";
    slid2.style.height = "250px";
    slid3.style.height = "250px";
    slid2.style.left = "400px";
    slid3.style.left = "800px";
    containerSlide1.style.animationName = "anim_slideRes";

    containerSlideBig2.style.width = "400px";
    containerSlideBig2.style.height = "250px";
    slid10.style.width = "400px";
    slid11.style.width = "400px";
    slid12.style.width = "400px";
    slid10.style.height = "250px";
    slid11.style.height = "250px";
    slid12.style.height = "250px";
    slid11.style.left = "400px";
    slid12.style.left = "800px";
    containerSlide4.style.animationName = "anim_slideRes";

    document.getElementById("imgTop1").src = "../img/fond4Res.png";
    document.getElementById("imgTop2").src = "../img/fond5Res.png";
    document.getElementById("imgTop3").src = "../img/texturesRes.png";

    document.getElementById("imgBottom1").src = "../img/container1Res.png";
    document.getElementById("imgBottom2").src = "../img/container2Res.png";
    document.getElementById("imgBottom3").src = "../img/container3Res.png";
  }
}

window.addEventListener("resize", () => {
  accueilResponsive();
  let w = document.documentElement.clientWidth;
  fondHaut.style.width = `${w}px`;
  footer.style.width = `${w}px`;
});
