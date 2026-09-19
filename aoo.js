let amount = "";
let upiAccounts = JSON.parse(localStorage.getItem("upiAccounts")) || [{name:"Default", id:"praveen@upi"}];
let currentIndex = localStorage.getItem("lastUsedIndex") || 0;

function addDigit(digit) {
  amount += digit;
  document.getElementById("amountDisplay").innerText = amount;
}

function clearAmount() {
  amount = "";
  document.getElementById("amountDisplay").innerText = "0";
  document.getElementById("qrcode").innerHTML = "";
}

function generateQR() {
  if(amount === "") return;
  let upiId = upiAccounts[currentIndex].id;
  let name = upiAccounts[currentIndex].name;
  let upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), upiUrl);

  localStorage.setItem("lastUsedIndex", currentIndex);
}
