/* =========================================================
   CHỈ SỬA FILE NÀY — mọi thông tin thiệp nằm ở đây.
   ========================================================= */
window.INVITE = {
  studentName: "Trần Võ Sơn Tùng",
  graduationYear: "2026",
  nickname: "Tùng Núi, Cụ",
  degree: "Cử nhân Công nghệ Thông tin",
  heroLabel: "Chúc mừng bị đuổi khỏi trường",
  // Mọi trường ảnh đều nhận URL hoặc file trong assets/.
  // Có thể gõ "student-placeholder.svg" (tự hiểu là assets/student-placeholder.svg).
  studentPhoto: "assets/student_img.jpg",
  gradPhoto: "assets/grad-photo.svg",
  entrancePhoto: "assets/entrance-placeholder.svg",

  dateISO: "2026-12-12T17:30:00",
  dateDisplay: "Thứ Tư, ngày 25 tháng 11 năm 2026",
  timeDisplay: "13:30",
  timeNote: "Trước 13:30 hoặc sau 16:30",

  venue: "Hội trường A – Đại học Quốc gia TP. Hồ Chí Minh",
  address: "Linh Trung, Thủ Đức, TP. Hồ Chí Minh",

  // Mỗi cổng có một ảnh — dán URL hoặc gõ tên file trong assets/.
  // Ảnh đổi theo cổng đang chọn. Nếu link lỗi, thiệp dùng ảnh dự phòng bên dưới.
  gates: [
    {
      name: "Cổng trước UIT (A)",
      note: "Gần xe buýt 170 nhất.",
      photo: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TgHAkW0VZrPxYdv2SwuYGbM4Ab0Dpjq2fDwwklqxPI9YmAAOgjmWMEHb6kxZu6msAQaYi5hpAKANZBMdtvli3-jIZ3FMelpiN9J0l3ylrY_gPiBTDrUbQ9QeqGrPgjkcys7jTMbmD_mWqk=w224-h298-n-k-no",
      lat: 10.8704192, lng: 106.8021049,
      pinX: 70, pinY: 47
    },
    {
      name: "Cổng sau UIT (B) - Đối diện Suối tiên",
      note: "Cổng này lội bộ từ xe bus hơi xa",
      photo: "assets/B_gate.png",
      lat: 10.8690162, lng: 106.8039559,
      pinX: 38, pinY: 42
    },
  ],

  locationTitle: "Chọn cổng để được chỉ đường",
  locationHint: "Đường chính phong tỏa. Chọn cổng bạn sẽ đến.",
  mapHint: "Chạm để mở bản đồ trên điện thoại.",
  tour360Url: "https://tuyensinh.uit.edu.vn/uit-tour-360/",
  tourLabel: "Tour 360°",
  // "modal" = nhúng tour ngay trên thiệp. "tab" = mở thẳng tab mới.
  // Tour đã có sẵn nhạc autoplay; không thêm nhạc riêng để tránh nhân đôi tiếng.
  tourMode: "modal",
  multiGoUrl: "https://multigo.golabs.vn/",
  multiGoCopiedMessage: "Đã sao chép địa chỉ. Bạn có thể dán vào MultiGo để tìm đường.",

  phoneDisplay: "+84 392 211 343",
  phoneDial: "+84392211343",
  messenger: "Tranvosontung",
  zalo: "84912345678",

  rsvpDate: "05 tháng 12 năm 2026",
  smsMessage: "Chào {name}, mình xác nhận sẽ đến dự lễ tốt nghiệp vào {date}. Hẹn gặp bạn tại buổi lễ.",
  closingLine: "Hẹn gặp bạn tại buổi lễ.",

  message: "Mình mời bạn đến chia vui trong ngày tốt nghiệp. Có bạn ở đó là ngày ấy thêm trọn vẹn.",

  busNote: "Xe buýt và xe đưa đón đỗ quanh khuôn viên.",
  busFootnote: "Giờ xe có thể thay đổi.",
  buses: [
    {
      number: "170",
      route: "Bến xe buýt ĐHQG (Khu A) → KTX Khu B",
      detail: "Tới sát cổng UIT · Tuyến trung chuyển Làng Đại học, chạy ngang đường Hàn Thuyên dừng sát cổng trường",
      time: "05:30 – 21:00"
    },
    {
      number: "53",
      route: "Lê Hồng Phong → ĐHQG TP.HCM",
      detail: "Phải đi bộ · Dừng ngang khu vực ĐH Nhân Văn, đi bộ ~7–10 phút sang UIT (hoặc bắt tiếp tuyến 170)",
      time: "04:45 – 22:00"
    },
    {
      number: "08",
      route: "Bến xe Quận 8 → ĐHQG TP.HCM",
      detail: "Phải đi bộ / bắt 170 · Dừng tại Bến xe buýt ĐHQG (Khu A), đi bộ ~10–15 phút hoặc bắt tuyến 170 vào UIT",
      time: "04:40 – 20:30"
    },
    {
      number: "19",
      route: "Bến Thành → ĐHQG TP.HCM",
      detail: "Phải đi bộ / bắt 170 · Dừng tại Bến xe buýt ĐHQG (Khu A), đi bộ ~10–15 phút hoặc bắt tuyến 170 vào UIT",
      time: "05:00 – 20:15"
    },
    {
      number: "33",
      route: "Bến xe An Sương → ĐHQG TP.HCM",
      detail: "Phải đi bộ / bắt 170 · Dừng tại Bến xe buýt ĐHQG (Khu A), đi bộ ~10–15 phút hoặc bắt tuyến 170 vào UIT",
      time: "04:30 – 22:00"
    }
  ],
  steps: [
    { title: "Đến {gate}", note: "Gọi mình nếu ko biết đường." },
    { title: "Vào toà A", note: "." }
  ]
};
