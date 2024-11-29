export function changePage(page, data = {}) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page(data));
}

// export function changePage(page, data = {}) {
//   const app = document.getElementById("app");
//   console.log("App element:", app);
//   if (!app) {
//     console.error('Element with ID "app" not found.');
//     return;
//   }
//   app.innerHTML = "";
//   app.appendChild(page(data));
//   console.log("Page function:", page);
//   console.log("Data passed:", data);
// }