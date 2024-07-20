const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const saveBtn = document.getElementById("save-btn");
const noteArea = document.getElementById("note");
const darkMode = document.querySelector(".dark-mode");

/*-----Init-----*/
// Show clean up calendar
const today = new Date();
const weekday = today.getDay() - 1 >= 0 ? today.getDay() - 1 : 6;
getCleanupCalendar().then(function (result) {
  result.forEach((item, index) => {
    const tr = document.createElement("tr");
    const trContent = `
      <th class="${index === weekday ? "active" : ""}">${item.weekday}</th>
      <td class="${!item.users.status ? "inactive" : ""}">
        ${item.users.name}
      </td>`;
    tr.innerHTML = trContent;
    document.querySelector(".cleanup table tbody").appendChild(tr);
  });
});

// Show notes
getNotes().then(function (result) {
  noteArea.value = result[0].contents;
});

// Show payments
getPayment().then(function (result) {
  result.forEach((item) => {
    const button =
      '<button><span class="material-icons-sharp">edit</span></button>';
    const tr = document.createElement("tr");
    const trContent = `
        <td>${item.users.name}</td>
        <td>${item.product_name}</td>
        <td>${item.price}</td>
        <td>${item.buy_date}</td>
        <td>${button}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector("#payment tbody").appendChild(tr);
  });
});

// Event
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

saveBtn.addEventListener("click", () => {
  updateNotes(noteArea.value).then(function (result) {
    if (result) {
      alert("Ok bro");
    } else {
      alert("Có gì đó sai sai");
    }
  });
});
