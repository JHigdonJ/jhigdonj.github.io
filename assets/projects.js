
const grid = document.getElementById("project-grid");
const sortSelect = document.getElementById("sort");
const filterButtons = document.querySelectorAll(".filter-button");
const emptyState = document.getElementById("empty-state");

let currentFilter = "all";

function applyProjects() {
  const cards = Array.from(grid.querySelectorAll(".project-card"));

  cards.sort((a, b) => {
    const titleA = a.querySelector("h2").textContent.trim().toLowerCase();
    const titleB = b.querySelector("h2").textContent.trim().toLowerCase();

    switch (sortSelect.value) {
      case "oldest":
        return new Date(a.dataset.date) - new Date(b.dataset.date);
      case "az":
        return titleA.localeCompare(titleB);
      case "za":
        return titleB.localeCompare(titleA);
      case "newest":
      default:
        return new Date(b.dataset.date) - new Date(a.dataset.date);
    }
  });

  let visible = 0;

  cards.forEach(card => {
    const categories = card.dataset.category.split(" ");
    const show = currentFilter === "all" || categories.includes(currentFilter);
    card.classList.toggle("hidden", !show);
    if (show) visible++;
    grid.appendChild(card);
  });

  emptyState.style.display = visible === 0 ? "block" : "none";
}

sortSelect.addEventListener("change", applyProjects);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    applyProjects();
  });
});

applyProjects();
