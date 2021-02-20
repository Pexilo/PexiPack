let pexipackLogo = document.getElementById("pexipacklogo");
let fondHaut = document.getElementById("fondHaut");
let textBox = document.getElementsByClassName("textBox");
let containerSlideBig1 = document.getElementById("containerSlideBig1");
let sign = document.getElementById("sign");

let pexiHead = document.getElementById("pexiHead");
let textFooter = document.getElementById("textFooter");
let twitterLogo = document.getElementById("twitter");
let footer = document.getElementById("footer");

let delayInMilliseconds = 5;

setTimeout(function () {
  informationResponsive();
}, delayInMilliseconds);

function informationResponsive() {
  let w = document.documentElement.clientWidth;

  if (w <= 1010) {
    fondHaut.style.width = `${w}px`;

    document.getElementById("pexipacklogo").src = "../img/pexipacklogores.png";
    pexipackLogo.style.top = "100px";

    pexipackLogo.style.width = `${w - 10}px`;
    pexipackLogo.style.paddingBottom = "100px";

    containerSlideBig1.style.width = `${w - 10}px`;
  }
  if (w <= 640) {
    wrap.style.visibility = "hidden";

    for (let y = 0; y < textBox.length; y++) {
      textBox[y].style.width = `${w - 50}px`;
      textBox[y].style.maxWidth = `${w}px`;
      textBox[y].style.fontSize = "90%";
    }

    footer.style.width = `${w}px`;
    footer.style.height = "150px";
    footer.style.position = "relative";

    footer.style.borderBottom = "30px solid transparent";
    pexiHead.style.width = "50px";
    pexiHead.style.left = "-10px";
    pexiHead.style.marginLeft = "50px";
    footer.style.marginTop = "0";
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

    document.getElementById("fondLarge1").src = "../img/fond3Res.png";
    document.getElementById("fondLarge2").src = "../img/fond1Res.png";
    document.getElementById("fondLarge3").src = "../img/fond2Res.png";

    sign.style.width = `${w - 400}px`;
    sign.style.fontSize = "0.9em";
    sign.style.right = "400px";
  }
}

window.addEventListener("resize", () => {
  informationResponsive();
  let w = document.documentElement.clientWidth;
  fondHaut.style.width = `${w}px`;
  footer.style.width = `${w}px`;
});
