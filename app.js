/* Thiệp mời tốt nghiệp — runtime.
   Không sửa nội dung ở đây. Mọi thông tin nằm trong invite.config.js */

const INVITE = window.INVITE;
const $ = (id) => document.getElementById(id);
const setText = (id, value) => { $(id).textContent = value; };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Ảnh có thể là URL, hoặc file trong assets/ (gõ tên file cũng được)
const imageSrc = (value) => {
  const v = String(value || "").trim();
  if (!v) return "";
  return /^(https?:)?\/\/|^data:|^blob:|^\/|^\.\/|^assets\//i.test(v) ? v : `assets/${v}`;
};
const setImage = (img, value, fallback = "") => {
  img.onerror = null;
  if (!value) {
    if (fallback) img.src = imageSrc(fallback);
    return;
  }
  img.onerror = () => {
    img.onerror = null;
    if (fallback) img.src = imageSrc(fallback);
  };
  img.src = imageSrc(value);
};

const ICONS = {
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
  bus: '<rect x="4" y="4" width="16" height="14" rx="3"/><path d="M4 10h16M8 21h.01M16 21h.01M8 14h.01M16 14h.01"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
  chat: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/>',
  messenger: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.3A8 8 0 1 1 21 12Z"/><path d="m12 7-3 5h3l-1 5 4-6h-3l1-4Z"/>',
  zalo: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.3A8 8 0 1 1 21 12Z"/><path d="M9 9h6l-6 6h6"/>',
  tour: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

function renderPills(id, items) {
  $(id).innerHTML = items.map((item) => {
    const external = item.href.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
    const copy = item.copy ? ` data-copy="${esc(item.copy)}"` : "";
    if (item.tour) {
      return `<a class="pill" href="${esc(item.href)}" target="_blank" rel="noopener" data-tour="${esc(item.href)}">${icon(item.icon)}<span>${esc(item.label)}</span></a>`;
    }
    return `<a class="pill" href="${esc(item.href)}"${external}${copy}>${icon(item.icon)}<span>${esc(item.label)}</span></a>`;
  }).join("");
}

let toastTimer;
function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-visible"), 3200);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) { /* dùng cách dự phòng */ }

  const area = document.createElement("textarea");
  area.value = text;
  area.style.cssText = "position:fixed;opacity:0";
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (error) { ok = false; }
  area.remove();
  return ok;
}

document.addEventListener("DOMContentLoaded", () => {
  const fill = (s, gate = "") => String(s)
    .replace(/\{name\}/g, INVITE.nickname)
    .replace(/\{date\}/g, INVITE.rsvpDate)
    .replace(/\{gate\}/g, gate || INVITE.gates[0].name);
  const isLink = (s) => /^https?:\/\//.test(s);

  // ---------- Đổ nội dung ----------
  document.title = `Thiệp mời tốt nghiệp — ${INVITE.studentName}`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", `Thiệp mời dự lễ tốt nghiệp của ${INVITE.studentName}.`);

  const content = {
    studentName: INVITE.studentName, degree: INVITE.degree, heroLabel: INVITE.heroLabel,
    gradYear: INVITE.graduationYear, footerYear: INVITE.graduationYear,
    footerName: INVITE.studentName, footerVenue: INVITE.venue,
    dateDisplay: INVITE.dateDisplay, timeDisplay: INVITE.timeDisplay, timeNote: INVITE.timeNote,
    venue: INVITE.venue, address: INVITE.address,
    locationTitle: INVITE.locationTitle, locationHint: INVITE.locationHint, mapHint: INVITE.mapHint,
    phoneDisplay: INVITE.phoneDisplay,
    closingLine: INVITE.closingLine, inviteMessage: INVITE.message,
    busNote: INVITE.busNote, busFootnote: INVITE.busFootnote
  };
  Object.entries(content).forEach(([id, value]) => setText(id, value));

  const photoJoke = $("photoJoke");
  if (photoJoke) {
    const joke = INVITE.photoJoke || "";
    photoJoke.textContent = joke;
    photoJoke.hidden = !joke;
  }

  setImage($("studentPhoto"), INVITE.studentPhoto);
  $("studentPhoto").alt = `Chân dung ${INVITE.studentName}`;
  setImage($("gradPhoto"), INVITE.gradPhoto, INVITE.studentPhoto);
  $("gradPhoto").alt = `${INVITE.studentName} trong ngày tốt nghiệp`;
  $("callBtn").href = `tel:${INVITE.phoneDial}`;

  // ---------- Chọn cổng -> đổi bản đồ ----------
  $("gatePicker").innerHTML = INVITE.gates.map((gate, i) => `
    <button type="button" class="gate-chip${i ? "" : " is-active"}" data-gate="${i}">${esc(gate.name)}</button>`).join("");

  function showGate(index) {
    const gate = INVITE.gates[index];
    document.querySelectorAll(".gate-chip").forEach((chip) =>
      chip.classList.toggle("is-active", Number(chip.dataset.gate) === index));
    setText("gate", gate.name);
    setText("gateNote", gate.note);

    setImage($("entrancePhoto"), gate.photo, INVITE.entrancePhoto);
    $("entrancePhoto").alt = `Lối vào ${gate.name}`;

    const coords = encodeURIComponent(`${gate.lat},${gate.lng}`);
    renderPills("mapLinks", [
      { label: "Google Maps", icon: "pin", href: `https://www.google.com/maps/dir/?api=1&destination=${coords}&travelmode=transit` },
      { label: "Apple Maps", icon: "compass", href: `https://maps.apple.com/?ll=${coords}&q=${encodeURIComponent(gate.name)}&z=17` },
      { label: "MultiGo", icon: "bus", href: INVITE.multiGoUrl, copy: `${INVITE.venue}, ${gate.name}, ${INVITE.address}` },
      { label: INVITE.tourLabel, icon: "tour", href: INVITE.tour360Url, tour: true }
    ]);

    $("steps").innerHTML = INVITE.steps.map((step, i) => `
      <li><span>${String(i + 1).padStart(2, "0")}</span>
        <div><strong>${esc(fill(step.title, gate.name))}</strong><small>${esc(fill(step.note, gate.name))}</small></div>
      </li>`).join("");
  }

  $("gatePicker").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-gate]");
    if (!chip) return;
    const index = Number(chip.dataset.gate);
    if (chip.classList.contains("is-active")) {
      const gate = INVITE.gates[index];
      const coords = `${gate.lat},${gate.lng}`;
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coords)}`,
        "_blank",
        "noopener"
      );
      return;
    }
    showGate(index);
  });
  showGate(0);

  // ---------- Liên hệ ----------
  const messengerUrl = isLink(INVITE.messenger) ? INVITE.messenger : `https://m.me/${INVITE.messenger}`;
  const zaloUrl = isLink(INVITE.zalo) ? INVITE.zalo : `https://zalo.me/${INVITE.zalo.replace(/^\+/, "")}`;
  renderPills("contactLinks", [
    { label: "Gọi điện", icon: "phone", href: `tel:${INVITE.phoneDial}` },
    { label: "Nhắn tin", icon: "chat", href: `sms:${INVITE.phoneDial}?body=${encodeURIComponent(fill(INVITE.smsMessage))}` },
    { label: "Messenger", icon: "messenger", href: messengerUrl },
    { label: "Zalo", icon: "zalo", href: zaloUrl }
  ]);

  $("busList").innerHTML = INVITE.buses.map((bus) => `
    <li><span class="bus-no">${esc(bus.number)}</span>
      <span class="bus-route"><strong>${esc(bus.route)}</strong><small>${esc(bus.detail)}</small></span>
      <span class="bus-time">${esc(bus.time)}</span></li>`).join("");

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-copy]");
    if (button) copyText(button.dataset.copy).then(() => toast(INVITE.multiGoCopiedMessage));
  });

  // ---------- Tour 360° ----------
  const tourModal = $("tourModal");
  const tourOpen = $("tourOpen");
  const tourPanel = tourModal.querySelector(".tour-modal__panel");
  let lastFocused = null;
  tourOpen.href = INVITE.tour360Url;

  function enterLandscapeForTour() {
    const el = tourPanel || tourModal;
    const mobile = window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(max-width: 900px)").matches;
    if (!mobile) return;
    const fs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (fs) Promise.resolve(fs.call(el)).catch(() => {});
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock("landscape").catch(() => {});
    }
  }
  function exitLandscapeForTour() {
    if (screen.orientation && screen.orientation.unlock) {
      try { screen.orientation.unlock(); } catch (_) { /* bỏ qua */ }
    }
    const doc = document;
    const exit = doc.exitFullscreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    const fullEl = doc.fullscreenElement || doc.webkitFullscreenElement || doc.msFullscreenElement;
    if (exit && fullEl) Promise.resolve(exit.call(doc)).catch(() => {});
  }

  function openTour(url) {
    lastFocused = document.activeElement;
    tourOpen.href = url;
    const mount = $("tourMount");
    // Tạo mới iframe mỗi lần mở để không có phiên chạy cũ bị nhân đôi
    mount.replaceChildren();
    const frame = document.createElement("iframe");
    frame.title = "Tour 360° khuôn viên Đại học Công nghệ thông tin";
    frame.allow = "autoplay; fullscreen";
    frame.allowFullscreen = true;
    frame.src = url;
    mount.appendChild(frame);
    tourModal.hidden = false;
    document.body.style.overflow = "hidden";
    enterLandscapeForTour();
    $("tourClose").focus();
  }
  function closeTour() {
    if (tourModal.hidden) return;
    tourModal.hidden = true;
    // Xóa hẳn iframe để dừng âm thanh và nội dung
    $("tourMount").replaceChildren();
    document.body.style.overflow = "";
    exitLandscapeForTour();
    if (lastFocused) lastFocused.focus();
  }
  $("tourClose").addEventListener("click", closeTour);
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-tour]");
    if (trigger && INVITE.tourMode === "modal") {
      event.preventDefault();
      openTour(trigger.dataset.tour || trigger.href);
      return;
    }
    if (event.target.closest("[data-close-tour]")) closeTour();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !tourModal.hidden) closeTour();
  });

  // ---------- Đếm ngược ----------
  const counter = $("countdown");
  const units = { days: $("cdDays"), hours: $("cdHours"), mins: $("cdMins"), secs: $("cdSecs") };

  function parseEventDate(invite) {
    if (invite.dateISO) return new Date(invite.dateISO);
    const ev = invite.event;
    if (!ev || !ev.date || !ev.time) return new Date(NaN);
    let y, m, d;
    const date = String(ev.date).trim();
    if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)) [y, m, d] = date.split("-").map(Number);
    else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) [d, m, y] = date.split("/").map(Number);
    else return new Date(NaN);
    const [hh, mm = 0] = String(ev.time).trim().split(":").map(Number);
    const tz = String(ev.timezone || ev.timeZone || "+07:00").trim();
    const pad = (n, l = 2) => String(n).padStart(l, "0");
    return new Date(`${y}-${pad(m)}-${pad(d)}T${pad(hh)}:${pad(mm)}:00${tz}`);
  }

  const eventDate = parseEventDate(INVITE);
  let timer;

  function setUnit(key, value) {
    const el = units[key];
    const next = String(value).padStart(2, "0");
    if (el.textContent === next) return;
    el.textContent = next;
    el.classList.remove("is-ticking");
    void el.offsetWidth;
    el.classList.add("is-ticking");
  }

  function tickCountdown() {
    const diff = eventDate - Date.now();
    if (Number.isNaN(eventDate.getTime()) || diff <= 0) {
      Object.keys(units).forEach((key) => setUnit(key, 0));
      if (!Number.isNaN(eventDate.getTime())) {
        counter.classList.add("is-live");
        counter.setAttribute("aria-label", "Buổi lễ đã bắt đầu");
      } else {
        counter.setAttribute("aria-label", "Chưa thiết lập thời gian sự kiện");
      }
      clearInterval(timer);
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    [["days", d], ["hours", h], ["mins", m], ["secs", s]].forEach(([key, value]) => setUnit(key, value));
    counter.setAttribute("aria-label", `Còn ${d} ngày, ${h} giờ, ${m} phút và ${s} giây nữa đến buổi lễ`);
  }

  tickCountdown();
  if (!Number.isNaN(eventDate.getTime()) && !counter.classList.contains("is-live")) timer = setInterval(tickCountdown, 1000);

  // ---------- Lưu vào lịch ----------
  const icsDate = (date) => date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const icsText = (value) => String(value).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

  $("calendarBtn").addEventListener("click", () => {
    if (Number.isNaN(eventDate.getTime())) {
      toast("Chưa thiết lập thời gian sự kiện.");
      return;
    }
    const start = new Date(eventDate);
    const end = new Date(start.getTime() + 7200000);
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Thiep Moi Tot Nghiep//VI", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT", `UID:${Date.now()}@graduation-invitation`, `DTSTAMP:${icsDate(new Date())}`,
      `DTSTART:${icsDate(start)}`, `DTEND:${icsDate(end)}`,
      `SUMMARY:${icsText(`Lễ tốt nghiệp của ${INVITE.studentName}`)}`,
      `LOCATION:${icsText(`${INVITE.venue}, ${INVITE.address}`)}`,
      `DESCRIPTION:${icsText(`Mừng lễ tốt nghiệp của ${INVITE.studentName} — ${INVITE.degree}. Liên hệ: ${INVITE.phoneDisplay}`)}`,
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");

    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `tot-nghiep-${INVITE.studentName.toLowerCase().replace(/\s+/g, "-")}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  });
});
