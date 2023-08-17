document.addEventListener("DOMContentLoaded", function () {
	
	const expirationInput = document.getElementById("expiration");
	const payButton = document.getElementById("pay-button");
	const loadingGif = document.getElementById("loading-gif");
	const overlay = document.createElement("div");
	overlay.className = "overlay";

	expirationInput.addEventListener("input", function () {
		
		const trimmedValue = this.value.replace(/\s+/g, "");
		if (trimmedValue.length === 2 && !trimmedValue.includes("/")) {
			this.value = `${trimmedValue}/`;
		}

	});
	payButton.addEventListener("click", function () {
		const cardNumber = document.getElementById("card-number").value;
		const expiration = expirationInput.value;
		const cvv = document.getElementById("cvv").value;


		if (!/^\d{16}$/.test(cardNumber)) {
			alert("Número de tarjeta es inválida, por favor revise bien");
			return;
		}
		if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiration)) {
			alert("Fecha de vencimiento invalida (MM/AA)")
			return
		}

		if (!/^\d{3}$/.test(cvv)) {
			alert("CVV Inválido")
			return
		}

    loadingGif.style.display = "block";
    document.body.appendChild(overlay); 
    
    setTimeout(function () {
      loadingGif.style.display = "none";
      document.body.removeChild(overlay);
      showPaymentPopup();
    }, 5000); 

document.getElementById("card-number").value = ""; 
expirationInput.value = "";
document.getElementById("cvv").value = "";

	})

});


function showPaymentPopup() {
	
const popup = document.createElement("div");
popup.className = "payment-popup";

const overlay = document.createElement("div");
overlay.className = "overlay";

const checkmark = document.createElement("div");
checkmark.className = "checkmark";
checkmark.innerHTML = "&#10004";

popup.appendChild(overlay);
popup.appendChild(checkmark);

document.body.appendChild(popup);

setTimeout(function() {
	document.body.removeChild(popup);
},3000)

}