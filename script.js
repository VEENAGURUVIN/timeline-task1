// Task 3 — Vanilla JS interactivity with theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const themeToggle = document.getElementById("theme-toggle");

  // Load events from JSON and render
  loadAndRender();

  async function loadAndRender() {
    try {
      const res = await fetch("data/events.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      let events = await res.json();

      events.sort((a, b) => Number(a.year) - Number(b.year));
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

    // Click handler to open modal
    item.addEventListener("click", () => openModal(ev));

    item.append(marker, content);
    return item;
  }

  // Open modal with event details
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

    // Close button
    modal.querySelector("#close-btn").addEventListener("click", closeModal);
  }

  function closeModal() {
    modal.style.display = "none";
  }

  // Close modal when clicking outside the dialog
  window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  // Theme toggle logic
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Optional: store preference in localStorage
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Apply saved theme on load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
});
