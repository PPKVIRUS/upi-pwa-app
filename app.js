function generateQR() {
  const amount = document.getElementById("amount-input").value;
  if (!amount) {
    alert("Please enter an amount!");
    return;
  }

  // Load UPI ID from localStorage (saved in settings)
  const upiID = localStorage.getItem("upiID") || "yourupiid@bank";

  // UPI payment URL
  const upiURL = `upi://pay?pa=${upiID}&am=${amount}&cu=INR`;

  // Google Chart API for QR
  const qrAPI = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(upiURL)}`;

  // Display QR
  document.getElementById("qr-code").innerHTML = `<img src="${qrAPI}" alt="UPI QR Code">`;
  document.getElementById("amount-display").innerText = `₹${amount}`;
}

function openSettings() {
  window.location.href = "settings.html";
}
