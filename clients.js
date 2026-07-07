const CLIENTS = [

];
const grid = document.getElementById("clientGrid");
CLIENTS.forEach(c => {
    grid.insertAdjacentHTML("beforeend", `
    <a class="client-card tilt reveal" href="${c.url}" target="_blank" rel="noopener noreferrer">
      <div class="client-tag mono">CLIENT</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="client-link">Visit page →</span>
    </a>`);
});