document.getElementById("ran").addEventListener("submit", function(event) {
    event.preventDefault();

    let ran1 = document.getElementById("heightInput").value;
    let ran2 = document.getElementById("widthInput").value;
    let ran3 = document.getElementById("bgColorInput").value;
    let ran4 = document.getElementById("borderRadiusInput").value;

    let netice1 = document.getElementById("netice1");

    netice1.innerHTML = "<div style='height:" + height + "px; width:" + width + "px; background-color:" + bgColor + "; border-radius:" + borderRadius + "px;'></div>";
});