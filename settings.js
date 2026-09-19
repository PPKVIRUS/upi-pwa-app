function saveUPI() {
  const upiID = document.getElementById("upi-input").value;
  if (!upiID) {
    alert("Please enter a UPI ID!");
    return;
  }
  localStorage.setItem("upiID", upiID);
  alert("UPI ID saved successfully!");
  window.location.href = "index.html";
}
