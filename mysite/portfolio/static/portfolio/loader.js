document.addEventListener(
    "DOMContentLoaded",
    function() {
        setTimeout(function() {    
            document.getElementById("loadCont").className = "hidden";
        }, 5300);
        setTimeout(function() {
            document.getElementById("contWrap").style.display = "flex";
        }, 5250);
    },
    false
    );

document.addEventListener(
    "DOMContentLoaded",
    function() {
        setTimeout(function() {    document.getElementById("loaderLogo").className = "hidden";
        }, 5000);
    },
    false
    );