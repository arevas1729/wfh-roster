<script>
const API_URL = "https://script.google.com/macros/s/AKfycbwoFDK-p2uYtevJFv9mMobvvQVWfO2JF9sRhbpRkaUuKYaIf0BVPprNPWWMvGkB-UBKYg/exec";

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
</script>
