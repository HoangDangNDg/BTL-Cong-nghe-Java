document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const headerRight = document.querySelector(".header-right");

  if (loggedInUser && headerRight) {
    headerRight.innerHTML = `
      <a href="#" style="color: yellow;">Xin chào, ${loggedInUser.name}</a>
      <span>|</span>
      <a href="#" id="logout-button">Đăng xuất</a>
    `;

    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        sessionStorage.removeItem("loggedInUser");
        alert("Đã đăng xuất.");
        window.location.href = "menu.html";
      });
    }
  }

  const tabs = document.querySelectorAll(".promo-tab");
  const cards = document.querySelectorAll(".promo-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-tab");
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        card.style.display = filter === "all" || filter === category ? "block" : "none";
      });
    });
  });

  document.querySelectorAll(".copy-btn").forEach((button) => {
    const codeElement = button.closest(".promo-code").querySelector("code");
    const codeToCopy = codeElement.textContent.trim();

    button.addEventListener("click", async () => {
      const originalHtml = button.innerHTML;

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(codeToCopy);
        }

        button.innerHTML = '<i class="fas fa-check"></i> Đã chép';
        button.disabled = true;

        setTimeout(() => {
          button.innerHTML = originalHtml;
          button.disabled = false;
        }, 2000);
      } catch (err) {
        console.error("Lỗi khi copy:", err);
      }
    });
  });
});
