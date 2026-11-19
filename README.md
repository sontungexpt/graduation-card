# Thiệp mời tốt nghiệp — Trần Võ Sơn Tùng

Trang thiệp mời tốt nghiệp tĩnh (HTML/CSS/JS), phong cách collage giấy ấm. Mọi nội dung hiển thị được cấu hình tập trung trong một tệp.

## Cấu trúc

- `invite.config.js` — **chỉ sửa file này** khi đổi thông tin
- `script.js` — logic hiển thị (không cần chỉnh)
- `index.html` — khung trang
- `styles.css` — giao diện
- `assets/` — ảnh/placeholder (có thể dùng ảnh thật hoặc URL)
- `docs/` — hướng dẫn tùy chỉnh và triển khai
- `.github/` — workflow CI/Pages và mẫu issue/PR

## Bắt đầu

```bash
python3 -m http.server 8000
# hoặc
npm start
```

Mở `http://localhost:8000`.

## Kiểm tra

```bash
npm run check
# hoặc
./scripts/check.sh
```

## Chỉnh sửa

Mở `invite.config.js` và sửa object `window.INVITE`:

- **Cá nhân:** `studentName`, `graduationYear`, `nickname`, `degree`, `studentPhoto`, `gradPhoto`
- **Sự kiện:** `dateISO`, `dateDisplay`, `timeDisplay`, `timeNote`, `venue`, `address`
- **Liên hệ:** `phoneDisplay`, `phoneDial`, `messenger`, `zalo`
- **Cổng vào:** mảng `gates` với `name`, `note`, `photo` (URL ảnh cổng), `lat`, `lng`, `pinX`, `pinY`. Chỉ cần dán link ảnh, không cần đưa file vào `assets/`. Nếu link lỗi, thiệp dùng ảnh dự phòng `entrancePhoto`.
- **Chỉ đường:** `locationTitle`, `locationHint`, `mapHint`, `steps`
- **Tour 360°:** `tour360Url`, `tourLabel`, `tourMode` — dán URL tour vào đây. `tourMode: "modal"` nhúng tour ngay trên thiệp; `"tab"` mở tab mới. Tour tự phát nhạc có sẵn, không thêm nhạc riêng để tránh nhân đôi tiếng
- **Xe buýt:** `busNote`, `busFootnote`, `buses`
- **Lời mời:** `message`, `closingLine`, `smsMessage`, `rsvpDate`

`{name}` → `nickname`, `{date}` → `rsvpDate`, `{gate}` → tên cổng đang chọn.

### Ảnh: asset hoặc link

Mọi trường ảnh (`studentPhoto`, `gradPhoto`, `entrancePhoto`, `photo` của mỗi cổng) đều nhận một trong hai dạng:

```js
studentPhoto: "assets/anh-cua-ban.jpg",                    // file trong assets/
studentPhoto: "anh-cua-ban.jpg",                          // tên file cũng được
studentPhoto: "https://example.com/anh-cua-ban.jpg",      // link ảnh
```

Nếu link không tải được, thiệp tự dùng ảnh dự phòng (`entrancePhoto` cho ảnh cổng, `studentPhoto` cho ảnh tốt nghiệp).

## Điểm chính

- Thông tin sự kiện, đồng hồ đếm ngược và **số điện thoại + 4 nút liên hệ** nằm ngay trong phần đầu
- Lời mời ngắn, ba khối rõ ràng: địa điểm/chỉ đường, xe buýt, lời kết
- Chọn cổng → đổi ảnh cổng, ghim, địa chỉ và liên kết bản đồ
- Google Maps / Apple Maps / MultiGo dùng chung một kiểu nút, thêm nút tour 360° nhúng trong lightbox (nhạc có sẵn của tour tự phát)
- Playfair Display cho tiêu đề, Be Vietnam Pro cho nội dung tiếng Việt
