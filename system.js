const body = document.querySelector("body");
const defaultMode = "edge";
let targetElement = document.getElementById("FC");
let linkElement = document.createElement("a");
linkElement.href = "https://www.instagram.com/";
linkElement.style.borderBottom = "0";
function fnBrowserDetect() {

    let userAgent = navigator.userAgent;

    if (userAgent.match(/edge|edg/i)) {
        browserName = "edge";
        document.querySelector("h1").innerText = "Hmmm… can't reach this page";
        document.querySelector(".icon-generic").style.display = "none";
        body.classList.remove("edge", "chrome", "firefox");
        body.classList.add("edge");

    } else if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "chrome";
        document.querySelector("h1").innerText = "This site can’t be reached";
        document.querySelector("h1").style.color = "--link-color";
        document.getElementById("FirstInfo").style.fontFamily = "Segoe UI,Tahoma,sans-serif";
        document.querySelector("h1").style.fontWeight = "500";
        document.querySelector("ul").innerText = "";
        document.querySelector("#FC").innerText = "If spelling is correct, ";
        document.getElementById("FC").style.marginTop = "15px";
        var linkText = document.createTextNode('go ask your friend again if it is correct or not.');
        linkElement.appendChild(linkText);
        targetElement.appendChild(linkElement);
        document.querySelector(".icon-thinking").style.display = "none";
        document.querySelector("#reload-button").style.backgroundColor = "--link-color";
        document.querySelector("#reload-button").innerHTML.style.fontFamily = "Roboto-Regular,Helvetica";
        document.querySelector("#reload-button").style.borderRadius = "4px";
        document.querySelector("#reload-button").style.width = "50px";
        document.querySelector("#reload-button").style.padding = "8px 16px";
        document.querySelector(".error-code").style.fontSize = ".8em";
        document.querySelector(".error-code").style.fontWeight = "initial";
        document.querySelector(".error-code").innerText = "ON_GOOGLE_CHROME_YOU_CAN_ALSO_REFRESH_THE_PAGE";
        body.classList.remove("edge", "chrome", "firefox");
        body.classList.add("chrome");

    } else {
        browserName = "No browser detection";
    }
}

fnBrowserDetect();