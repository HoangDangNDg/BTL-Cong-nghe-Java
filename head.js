/**
 * Header Module - Manages user authentication display and logout functionality
 */

document.addEventListener("DOMContentLoaded", () => {
  // Get logged-in user from session storage
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const headerRight = document.querySelector(".header-right");

  // If user is logged in, display user info and logout button
  if (loggedInUser && headerRight) {
    headerRight.innerHTML = `
      <a href="#" style="color: #FFD700; font-weight: 600;">Xin chào, ${loggedInUser.name}</a>
      <span>|</span>
      <a href="#" id="logout-button" style="color: inherit;">Đăng xuất</a>
    `;

    // Setup logout event listener
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", handleLogout);
    }
  }
});

/**
 * Handle user logout
 * @param {Event} event - Click event from logout button
 */
function handleLogout(event) {
  event.preventDefault();
  sessionStorage.removeItem("loggedInUser");
  alert("Đã đăng xuất.");
  window.location.href = "/menu.html";
}