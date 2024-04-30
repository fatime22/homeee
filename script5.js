 function Netice() {
    let ban1 = parseInt(document.getElementById("ban1").value);
    var ban3 = parseInt(document.getElementById("ban3").value);

    let sum = ban1 + ban3;

    document.getElementById("ban4").value = sum;
}

document.getElementById("tan").addEventListener("click", function() {
    Netice();
});


document.addEventListener("submit", function(event) {
    event.preventDefault(); 
    Netice(); 
});
