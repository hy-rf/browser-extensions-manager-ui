document.addEventListener("DOMContentLoaded", () => {
  const data = getData();
  const dataList = document.getElementById("data-list");
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p>Name: ${item.name}, Age: ${item.description}</p><img src=${item.logo} alt=${item.name}></img>`;
    dataList.appendChild(listItem);
  });
});

function getData() {
  return [
    {
      logo: "./assets/images/logo-devlens.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-speed-boost.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-json-wizard.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-markup-notes.svg",
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-grid-guides.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      logo: "./assets/images/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      logo: "./assets/images/logo-console-plus.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ];
}

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
  removeAll();
  const data = getData();
  const dataList = document.getElementById("data-list");
  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p>Name: ${item.name}, Age: ${item.description}</p><img src=${item.logo} alt=${item.name}></img>`;
    dataList.appendChild(listItem);
  });
}

function showActive() {
  removeAll();
  const data = getData();
  const dataList = document.getElementById("data-list");
  data.forEach((item) => {
    if (item.isActive) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>Name: ${item.name}, Age: ${item.description}</p><img src=${item.logo} alt=${item.name}></img>`;
      dataList.appendChild(listItem);
    }
  });
}

function showInactive() {
  removeAll();
  const data = getData();
  const dataList = document.getElementById("data-list");
  data.forEach((item) => {
    if (!item.isActive) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>Name: ${item.name}, Age: ${item.description}</p><img src=${item.logo} alt=${item.name}></img>`;
      dataList.appendChild(listItem);
    }
  });
}
