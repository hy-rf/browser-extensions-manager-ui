document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const dataList = document.getElementById("data-list");
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${item.name}, Age: ${item.description}`;
        dataList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
});

document
  .getElementsByClassName("sort-buttons")[0]
  .children[0].addEventListener("click", showAll);

document
  .getElementsByClassName("sort-buttons")[0]
  .children[1].addEventListener("click", showActive);

document
  .getElementsByClassName("sort-buttons")[0]
  .children[2].addEventListener("click", showInactive);

function removeAll() {
  const dataList = document.getElementById("data-list");
  dataList.innerHTML = "";
}

function showAll() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      removeAll();
      const dataList = document.getElementById("data-list");
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${item.name}, Age: ${item.description}`;
        dataList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
}

function showActive() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      removeAll();
      const dataList = document.getElementById("data-list");
      data.forEach((item) => {
        if (item.isActive) {
          const listItem = document.createElement("li");
          listItem.textContent = `Name: ${item.name}, Age: ${item.description}`;
          dataList.appendChild(listItem);
        }
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
}

function showInactive() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      removeAll();
      const dataList = document.getElementById("data-list");
      data.forEach((item) => {
        if (!item.isActive) {
          const listItem = document.createElement("li");
          listItem.textContent = `Name: ${item.name}, Age: ${item.description}`;
          dataList.appendChild(listItem);
        }
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
}
