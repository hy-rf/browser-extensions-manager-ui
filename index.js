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
