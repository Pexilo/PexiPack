let pexipackLogo = document.getElementById("pexipacklogo");
let fondHaut = document.getElementById("fondHaut");
let textTop = document.getElementsByClassName("textTop");
let titleContainer = document.getElementById("titleContainer");
let tabContainter = document.getElementById("tabContainer");
let size = document.getElementById("size");
let pSize = document.getElementsByClassName("pSize");
let date = document.getElementById("date");
let pDate = document.getElementsByClassName("pDate");
let pName = document.getElementsByClassName("pName");
let pVersion = document.getElementsByClassName("pVersion");
let download = document.getElementById("download");
let tooltip = document.getElementsByClassName("tooltip");

let pexiHead = document.getElementById("pexiHead");
let textFooter = document.getElementById("textFooter");
let twitterLogo = document.getElementById("twitter");
let footer = document.getElementById("footer");

let delayInMilliseconds = 5;

setTimeout(function () {
  downloadResponsive();
}, delayInMilliseconds);

function downloadResponsive() {
  let w = document.documentElement.clientWidth;

  if (w <= 1100) {
    fondHaut.style.width = `${w}px`;

    document.getElementById("pexipacklogo").src = "../img/pexipacklogores.png";
    pexipackLogo.style.top = "100px";

    pexipackLogo.style.width = `${w - 10}px`;
    pexipackLogo.style.paddingBottom = "100px";

    tabContainter.style.width = `${w - 50}px`;
    titleContainer.style.width = `${w - 50}px`;

    for (let y = 0; y < textTop.length; y++) {
      textTop[y].style.width = `${w - 50}px`;
      textTop[y].style.maxWidth = `${w}px`;
    }
  }
  if (w <= 640) {
    wrap.style.visibility = "hidden";

    for (let n = 0; n < textTop.length; n++) {
      textTop[n].style.fontSize = "80%";
    }

    titleContainer.removeChild(date);
    titleContainer.removeChild(size);

    titleContainer.style.top = "35%";

    tabContainter.style.top = "35%";

    for (let m = 0; m < pDate.length; m++) {
      pDate[m].style.visibility = "hidden";
    }

    for (let l = 0; l < pSize.length; l++) {
      pSize[l].style.visibility = "hidden";
    }

    for (let o = 0; o < pName.length; o++) {
      pName[o].style.fontSize = "80%";
    }

    for (let p = 0; p < pVersion.length; p++) {
      pVersion[p].style.fontSize = "110%";
    }

    download.style.width = "50%";
    download.style.fontSize = "90%";

    for (let k = 0; k < tooltip.length; k++) {
      tooltip[k].style.visibility = "hidden";
    }

    footer.style.width = `${w}px`;
    footer.style.height = "150px";
    footer.style.position = "relative";
    footer.style.top = "1350px";
    footer.style.borderBottom = "30px solid transparent";
    pexiHead.style.width = "50px";
    pexiHead.style.left = "-10px";
    pexiHead.style.marginLeft = "50px";
    textFooter.style.fontSize = "70%";
    twitterLogo.style.visibility = "hidden";
  }
}

window.addEventListener("resize", () => {
  downloadResponsive();
  let w = document.documentElement.clientWidth;
  fondHaut.style.width = `${w}px`;
});
