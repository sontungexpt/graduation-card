/* =========================================================
   CHỈ SỬA FILE NÀY — mọi thông tin thiệp nằm ở đây.
   Sau khi sửa, lưu file và tải lại trang (Ctrl+F5 nếu cần).
   ========================================================= */
window.INVITE = {
  // --- Thông tin cá nhân ---
  // Họ tên đầy đủ (hiển thị lớn trên thiệp, tiêu đề trang, lịch, chân trang).
  // Cách lấy: ghi đúng họ tên của bạn.
  studentName: "Trần Võ Sơn Tùng",
  // Niên khóa tốt nghiệp (hiển thị ở dòng "Khoá ...").
  // Cách lấy: năm tốt nghiệp, ví dụ "2026".
  graduationYear: "2026",
  // Tên gọi thân mật/danh xưng. Dùng thay cho {name} trong tin nhắn SMS và hướng dẫn.
  // Cách lấy: biệt danh hoặc cách bạn muốn người khác gọi (vd "Tùng", "Sơn Tùng").
  nickname: "Tùng Núi, Cụ",
  // Học vị/ngành (hiển thị dưới tên và trong mô tả lịch).
  // Cách lấy: ghi theo bằng tốt nghiệp, vd "Cử nhân Công nghệ Thông tin".
  degree: "Cử nhân Công nghệ Thông tin",
  // Dòng chữ trên dải giấy đầu thiệp.
  // Cách lấy: tự viết câu chúc/tiêu đề ngắn bạn muốn.
  heroLabel: "Chúc mừng bị đuổi khỏi trường",

  // --- Ảnh ---
  // Mỗi trường ảnh nhận: URL ảnh (https://...), hoặc file trong thư mục assets/
  //   - "assets/ten-anh.jpg" hoặc chỉ "ten-anh.jpg" (tự hiểu là assets/ten-anh.jpg)
  // Cách lấy file local: chép ảnh vào thư mục assets/ rồi ghi tên file.
  // Cách lấy URL: tải ảnh lên (Drive/Imgur/...) lấy link trực tiếp, hoặc chuột phải ảnh trên web > Sao chép địa chỉ hình ảnh.
  // Nếu ảnh lỗi/không tải được, thiệp dùng ảnh dự phòng (entrancePhoto cho ảnh cổng, studentPhoto cho ảnh tốt nghiệp).

  // Ảnh chân dung (ảnh trái ở phần đầu).
  studentPhoto: "assets/student-portrait.jpg",
  // Ảnh tốt nghiệp (ảnh phải ở phần đầu). Nếu lỗi sẽ dùng studentPhoto.
  gradPhoto: "assets/graduate-photo.svg",
  // Ảnh cổng/dự phòng khi ảnh của cổng không tải được.
  entrancePhoto: "assets/placeholder-gate.svg",

  // --- Thời gian thực (đếm ngược & "Lưu vào lịch") ---
  // Đây là mốc thời gian máy dùng để đếm ngược và tạo file lịch (.ics), không phải chữ hiển thị.
  event: {
    // Ngày diễn ra.
    // Định dạng: "DD/MM/YYYY" (vd "25/11/2026") hoặc "YYYY-MM-DD" (vd "2026-11-25").
    // Cách lấy: xem ngày trên giấy mời/lịch trường.
    date: "25/11/2026",
    // Giờ (mốc bắt đầu lễ), theo 24 giờ.
    // Định dạng: "HH:mm" (vd "13:30", "08:00", "17:00").
    time: "13:30",
    // Múi giờ (độ lệch so với UTC).
    // Định dạng: "±HH:MM". Việt Nam là "+07:00". Bỏ trống sẽ mặc định "+07:00".
    timezone: "+07:00",
  },

  // --- Nội dung thời gian hiển thị trên thiệp (tự do viết) ---
  // Dòng ngày hiển thị (bên cạnh nhãn "Giờ ghé thăm").
  // Cách lấy: tự viết ngày tháng bằng tiếng Việt như bạn muốn hiện.
  dateDisplay: "Thứ Tư, ngày 25 tháng 11 năm 2026",
  // Dòng giờ/khung giờ hiển thị (nổi bật, cùng hàng với ngày).
  // Cách lấy: ghi khung giờ bạn muốn khách ghé (vd "Trước 13:30 hoặc sau 16:30").
  timeDisplay: "Trước 13:30 hoặc sau 16:30",
  // Ghi chú nhỏ bên dưới phần thời gian.
  // Cách lấy: giải thích thêm để khách hiểu nên đến lúc nào.
  timeNote: "Mình bận lễ từ 13:30 đến 16:30, bạn ghé ngoài khung giờ này để tụi mình có thời gian gặp nhau nhé.",

  // --- Địa điểm chung ---
  // Tên địa điểm/tòa nhà (hiển thị ở đầu thiệp, chân trang và dùng trong lịch/bản đồ).
  // Cách lấy: tên hội trường/tòa theo thông báo của trường.
  venue: "Hội trường A – Đại học Quốc gia TP. Hồ Chí Minh",
  // Địa chỉ khu vực (hiển thị dưới ảnh cổng, dùng trong lịch và khi sao chép cho MultiGo).
  // Cách lấy: địa chỉ/quận/phường hoặc khu vực ghi trên Google Maps.
  address: "Linh Trung, Thủ Đức, TP. Hồ Chí Minh",

  // --- Cổng vào (chọn cổng -> đổi ảnh, ghi chú, liên kết bản đồ & hướng dẫn) ---
  // Mỗi cổng là một mục trong danh sách. Có thể thêm/bớt cổng (giữ cấu trúc như mẫu).
  gates: [
    {
      // Tên cổng hiển thị trên nút chọn, chú thích ảnh và dùng thay {gate} trong hướng dẫn.
      // Cách lấy: tên/gọi tắt cổng theo biển báo hoặc cách mọi người hay gọi.
      name: "Cổng trước UIT (A)",
      // Ghi chú ngắn về cổng (hiển thị dưới nhóm nút chọn cổng).
      // Cách lấy: mẹo đi lại, vd cổng gần xe buýt/taxi nhất.
      note: "Gần xe buýt 170 nhất.",
      // Ảnh cổng: URL hoặc file trong assets/ (xem hướng dẫn phần Ảnh ở trên).
      // Ảnh sẽ đổi theo cổng đang chọn.
      photo: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TgHAkW0VZrPxYdv2SwuYGbM4Ab0Dpjq2fDwwklqxPI9YmAAOgjmWMEHb6kxZu6msAQaYi5hpAKANZBMdtvli3-jIZ3FMelpiN9J0l3ylrY_gPiBTDrUbQ9QeqGrPgjkcys7jTMbmD_mWqk=w224-h298-n-k-no",
      // Tọa độ thực của cổng (vĩ độ, kinh độ) để mở Google Maps/Apple Maps đúng điểm.
      // Cách lấy: mở Google Maps > nhấp chuột phải vào đúng vị trí cổng > bấm vào dãy số đầu tiên để sao chép (số thứ nhất là lat, số thứ hai là lng).
      lat: 10.8704192, lng: 106.8021049
    },
    {
      // Tên cổng hiển thị và dùng thay {gate} trong hướng dẫn.
      name: "Cổng sau UIT (B) - Đối diện Suối tiên",
      // Ghi chú ngắn về cổng.
      note: "Cổng này lội bộ từ xe bus hơi xa",
      // Ảnh cổng (URL hoặc tên file trong assets/).
      photo: "assets/gate-b.png",
      // Tọa độ thực của cổng (lat: vĩ độ, lng: kinh độ) lấy từ Google Maps.
      lat: 10.8690162, lng: 106.8039559
    },
  ],

  // --- Phần địa điểm & chỉ đường (chữ hiển thị) ---
  // Tiêu đề mục địa điểm.
  locationTitle: "Chọn cổng để được chỉ đường",
  // Dòng mô tả ngắn dưới tiêu đề (hướng dẫn chọn cổng/lưu ý đường).
  locationHint: "Đường chính phong tỏa. Chọn cổng bạn sẽ đến.",
  // Gợi ý nhỏ dưới nhóm nút bản đồ.
  mapHint: "Chạm để mở bản đồ trên điện thoại.",

  // --- Tour 360° ---
  // Đường link tour tham quan 360° khuôn viên.
  // Cách lấy: dán URL trang tour (vd tour của trường). Nếu không dùng, có thể để "" (chuỗi rỗng).
  tour360Url: "https://tuyensinh.uit.edu.vn/uit-tour-360/",
  // Nhãn hiển thị trên nút tour.
  tourLabel: "Tour 360°",
  // Cách mở tour: "modal" = nhúng ngay trên thiệp; "tab" = mở tab mới.
  // Lưu ý: tour nhúng có thể tự phát âm thanh của chính tour.
  tourMode: "modal",

  // --- MultiGo (dự phòng khi cần app gọi xe/chỉ đường riêng) ---
  // Link mở MultiGo. Nút "MultiGo" sẽ sao chép địa chỉ rồi mở link này để bạn dán tìm đường.
  // Cách lấy: giữ link trang/app MultiGo bạn muốn dùng.
  multiGoUrl: "https://multigo.golabs.vn/",
  // Thông báo hiện ra sau khi sao chép địa chỉ (nhấn nút MultiGo).
  multiGoCopiedMessage: "Đã sao chép địa chỉ. Bạn có thể dán vào MultiGo để tìm đường.",

  // --- Liên hệ ---
  // Số điện thoại hiển thị (có thể thêm khoảng trắng/dấu cho dễ đọc).
  // Cách lấy: ghi số của bạn theo dạng dễ nhìn, vd "+84 392 211 343".
  phoneDisplay: "+84 392 211 343",
  // Số dùng để gọi/nhắn (tel:/sms:), nên viết liền, có mã quốc gia.
  // Cách lấy: số của bạn dạng +84..., bỏ khoảng trắng, vd "+84392211343".
  phoneDial: "+84392211343",
  // Messenger: username/ID hoặc link đầy đủ.
  // Cách lấy: vào trang Facebook cá nhân > lấy phần tên sau facebook.com/ (username), hoặc dán link https://m.me/<username>.
  messenger: "Tranvosontung",
  // Zalo: số điện thoại (không cần dấu +) hoặc link đầy đủ.
  // Cách lấy: số Zalo của bạn (vd "0392211343" hoặc "84912345678"), hoặc dán link https://zalo.me/<số>.
  zalo: "84912345678",

  // --- Lời mời, SMS và lời kết ---
  // Giá trị thay cho {date} trong tin nhắn SMS và hướng dẫn (steps).
  // Cách lấy: ghi ngày/khung giờ bạn muốn nhắc trong tin nhắn (tự do, không bắt buộc trùng dateDisplay).
  rsvpDate: "05 tháng 12 năm 2026",
  // Mẫu tin nhắn SMS khi bấm "Nhắn tin". Hỗ trợ: {name} -> nickname, {date} -> rsvpDate.
  // Cách lấy: tự viết nội dung; giữ {name}/{date} nếu muốn tự điền.
  smsMessage: "Chào {name}, mình xác nhận sẽ đến dự lễ tốt nghiệp vào {date}. Hẹn gặp bạn tại buổi lễ.",
  // Dòng chữ trên dải giấy phần kết.
  closingLine: "Hẹn gặp bạn tại buổi lễ.",
  // Lời mời ngắn trong thẻ "Lời mời".
  message: "Mình mời bạn đến chia vui trong ngày tốt nghiệp. Có bạn ở đó là ngày ấy thêm trọn vẹn.",

  // --- Xe buýt ---
  // Ghi chú chung về xe buýt/bãi đỗ.
  busNote: "Xe buýt và xe đưa đón đỗ quanh khuôn viên.",
  // Ghi chú nhỏ cuối danh sách xe buýt.
  busFootnote: "Giờ xe có thể thay đổi.",
  // Danh sách tuyến xe buýt. Mỗi tuyến gồm: number (số tuyến), route (lộ trình), detail (mẹo đi bộ/điểm dừng), time (giờ chạy).
  // Cách lấy: tra trên BusMap (busmap.vn), Google Maps (chỉ đường bằng xe buýt) hoặc website xe buýt địa phương; kiểm tra lại giờ chạy gần ngày đi.
  buses: [
    {
      // Số hiệu tuyến xe buýt.
      number: "170",
      // Lộ trình chính (điểm đầu -> điểm cuối).
      route: "Bến xe buýt ĐHQG (Khu A) → KTX Khu B",
      // Chi tiết/mẹo: dừng ở đâu, có cần đi bộ/bắt tiếp tuyến không.
      detail: "Tới sát cổng UIT · Tuyến trung chuyển Làng Đại học, chạy ngang đường Hàn Thuyên dừng sát cổng trường",
      // Khoảng giờ hoạt động của tuyến (có thể thay đổi).
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

  // --- Hướng dẫn từng bước (đổi theo cổng đang chọn) ---
  // Mỗi bước gồm title (tiêu đề) và note (ghi chú). Hỗ trợ: {name} -> nickname, {date} -> rsvpDate, {gate} -> tên cổng đang chọn.
  // Cách lấy: viết các bước ngắn để khách tìm đến chỗ bạn; dùng {gate} để tự chèn tên cổng.
  steps: [
    {
      // Tiêu đề bước (vd đến cổng nào). {gate} sẽ được thay bằng tên cổng đang chọn.
      title: "Đến {gate}",
      // Ghi chú cho bước.
      note: "Gọi mình nếu ko biết đường."
    },
    {
      title: "Vào toà A",
      note: "."
    }
  ]
};
