const API_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

async function apiPost(action, data = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, token, ...data })
  });
  return res.json();
}

async function apiGet(action) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}?action=${action}&token=${token}`);
  return res.json();
}
