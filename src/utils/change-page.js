export function changePage(page, data) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page(data));
}
