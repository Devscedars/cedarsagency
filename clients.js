const CLIENTS = [
    { name: "Client Name", url: "https://example.com", desc: "What you did for them." },
    { name: "Your New Client", url: "https://theirsite.com", desc: "Website redesign and Meta ads campaign." },
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