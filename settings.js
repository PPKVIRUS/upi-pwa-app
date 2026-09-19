function addUPI() {
  let name = document.getElementById("upiName").value;
  let id = document.getElementById("upiId").value;
  if(name && id) {
    let accounts = JSON.parse(localStorage.getItem("upiAccounts")) || [];
    accounts.push({name, id});
    localStorage.setItem("upiAccounts", JSON.stringify(accounts));
    loadUPIs();
  }
}

function loadUPIs() {
  let accounts = JSON.parse(localStorage.getItem("upiAccounts")) || [];
  let list = document.getElementById("upiList");
  list.innerHTML = "";
  accounts.forEach((acc, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${acc.name} (${acc.id}) <button onclick="setDefault(${index})">Set Default</button>`;
    list.appendChild(li);
  });
}

function setDefault(index) {
  localStorage.setItem("lastUsedIndex", index);
}

window.onload = loadUPIs;
