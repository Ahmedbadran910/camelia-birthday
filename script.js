// EDIT THESE DETAILS when the party date, venue and contact number are confirmed.
const CONFIG = {
  // Countdown is set to the start of the birthday date because the party time
  // has not been provided yet. Update this when the time is confirmed.
  dateTime: "2026-11-20T16:00:00",
  dateLabel: "Friday, 20 November 2026 / الجمعة 20 نوفمبر 2026",
  timeLabel: "04:00 p.m / الساعة 4:00 عصراً",
  venue: "Gezira Youth Center Club, Zamalek / نادي مركز شباب الجزيرة، الزمالك",
  address: "نادي مركز شباب الجزيرة، الزمالك",
  mapsUrl: "https://maps.app.goo.gl/2AUJjBGDVe5e6DjH6",
  whatsappNumber: "201144953950",
  babyName: "Camellia"
};

function goTo(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");
  window.scrollTo({top: 0, behavior: "smooth"});
}
function toggleLanguage() {
  const btn = document.getElementById("langBtn");
  btn.textContent = btn.textContent === "العربية" ? "English" : "العربية";
  document.documentElement.lang = btn.textContent === "English" ? "en" : "ar";
  document.body.classList.toggle("arabic-mode");
  alert(btn.textContent === "English" ? "The invitation includes both Arabic and English. Full language switching can be added in the next customization." : "الدعوة فيها عربي وإنجليزي.");
}
function updateCountdown() {
  const target = new Date(CONFIG.dateTime).getTime();
  const now = Date.now();
  const el = document.getElementById("countdown");
  if (!target || Number.isNaN(target)) return;
  const diff = target - now;
  if (diff <= 0) { el.innerHTML = "<b>It's party time! 🎉</b>"; return; }
  const units = [
    Math.floor(diff / 86400000),
    Math.floor((diff % 86400000) / 3600000),
    Math.floor((diff % 3600000) / 60000),
    Math.floor((diff % 60000) / 1000)
  ];
  const labels = ["Days", "Hours", "Minutes", "Seconds"];
  el.innerHTML = units.map((v,i) => `<div><b>${String(v).padStart(2,"0")}</b><small>${labels[i]}</small></div>`).join("");
}
document.getElementById("dateText").textContent = CONFIG.dateLabel;
document.getElementById("timeText").textContent = CONFIG.timeLabel;
document.getElementById("venueText").textContent = CONFIG.venue;
document.getElementById("addressText").textContent = CONFIG.address;
document.getElementById("mapLink").href = CONFIG.mapsUrl;
const message = `Hello! We'd love to confirm our attendance at ${CONFIG.babyName}'s first birthday.`;
document.getElementById("rsvpLink").href = CONFIG.whatsappNumber
  ? `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`
  : `https://wa.me/?text=${encodeURIComponent(message)}`;
updateCountdown();
setInterval(updateCountdown, 1000);
