let amount = "";

// Handle keypad input
function pressKey(num) {
  amount += num;
  document.getElementById("amount-display").innerText = amount;
}

// Clear amount
function clearAmount() {
  amount = "";
  document.getElementById("amount-display").innerText = "0";
  document.getElementById("qr-code").innerHTML = "";
}

// Generate UPI QR
function generateQR() {
  if (amount === "") {
    alert("Please enter an amount first!");
    return;
  }

  // Load UPI ID from localStorage (saved in settings)
  let upiID = localStorage.getItem("upiID") || "yourupiid@bank";

  // UPI payment URL
  const upiURL = `upi://pay?pa=${upiID}&am=${amount}&cu=INR`;

  // Google Chart API for QR
  const qrAPI = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(upiURL)}`;

  // Display QR
  document.getElementById("qr-code").innerHTML =
    `<img src="${qrAPI}" alt="UPI QR Code">`;
}

// Open Settings Page
function openSettings() {
  window.location.href = "settings.html";
}
