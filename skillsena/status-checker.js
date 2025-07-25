function checkGameAccess(pageKey, redirectTo = "dashboard.html") {
  const settings = JSON.parse(localStorage.getItem("game_status_settings"));

  if (!settings || settings[pageKey] === "off") {
    alert("❌ Ye feature abhi band hai!");
    window.location.href = redirectTo;
  }
}