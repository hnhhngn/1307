const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const noteArea = document.getElementById("note");
const darkMode = document.querySelector(".dark-mode");

noteArea.value = Notes;

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

const today = new Date();
const weekday = today.getDay() - 1 > 0 ? today.getDay() : 6;
Cleanup.forEach((item, index) => {
  const tr = document.createElement("tr");
  const trContent = `
    <th class="${index === weekday ? "active" : ""}">${item.weekday}</th>
    <td>${item.name}</td>`;
  tr.innerHTML = trContent;
  document.querySelector(".cleanup table tbody").appendChild(tr);
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${
          order.status === "Declined"
            ? "danger"
            : order.status === "Pending"
            ? "warning"
            : "primary"
        }">${order.status}</td>
        <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector(".recent-orders table tbody").appendChild(tr);
});
