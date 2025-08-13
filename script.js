document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const themeToggle = document.getElementById("theme-toggle");

  // Load events from JSON
  loadAndRender();

  async function loadAndRender() {
    try {
      const res = await fetch("data/events.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      let events = await res.json();

      events.sort((a,b) => Number(a.year) - Number(b.year));
      events.forEach(ev => timeline.appendChild(makeItem(ev)));

      if (!events.length) timeline.innerHTML = `<p style="color:#888;">No events found.</p>`;
    } catch (err) {
      console.error("Failed to load events.json:", err);
      timeline.innerHTML = `<p style="color:#c00;">Error: could not load events.</p>`;
    }
  }

  // Create a timeline item
  function makeItem(ev) {
    const item = document.createElement("div");
    item.classList.add("timeline-item");

    const marker = document.createElement("div");
    marker.classList.add("event");

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `<h3>${ev.title}</h3><p>${ev.year}</p>`;

    item.addEventListener("click", () => openModal(ev));
    item.append(marker, content);
    return item;
  }

  // Show modal
  function openModal(ev) {
    modal.innerHTML = `
      <div class="dialog">
        <span id="close-btn" style="float:right;cursor:pointer;font-weight:bold;">&times;</span>
        <h2>${ev.title}</h2>
        <p><strong>Year:</strong> ${ev.year}</p>
        <p><strong>Category:</strong> ${ev.category}</p>
        <img src="${ev.imageURL}" alt="${ev.title}" style="max-width:100%;margin:10px 0;">
        <p>${ev.description}</p>
      </div>
    `;
    modal.style.display = "flex";
    modal.querySelector("#close-btn").addEventListener("click", closeModal);
  }

  function closeModal() { modal.style.display = "none"; }

  // Close modal by clicking outside
  window.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
  });

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-theme");
});
