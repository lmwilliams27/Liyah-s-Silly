let message = document.querySelector(".message");
let submitButton = document.querySelector(".submitButton");

console.log("baby");

submitButton.addEventListener("click", function () {
    let lipstickInput = document.querySelector(".lipstickInput").value;
    let freakyInput = document.querySelector(".freakyInput").value;
    let freaky = freakyInput;
    let lipstick = lipstickInput;

    if (freaky === "More than 5" && lipstick === "Coral Blue No.5") {
        message.innerHTML = `
            <div class="freakybob">
                <h2>YOU GOT A CALL FROM...</h2>
                <h3>THE FREAKIEST BOB</h3>
                <h4>He only calls the freakiest bobs</h4>
                <img src="freakybob.jpg" width="300" alt="Freaky Bob Image">
            </div>
        `;
    }
});