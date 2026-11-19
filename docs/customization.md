# Tùy chỉnh thiệp

Tất cả nội dung hiển thị được đặt trong `invite.config.js`. Sau khi chỉnh, mở lại trang (hoặc hard-refresh) để thấy thay đổi.

## Thông tin cá nhân
- `studentName`, `nickname`, `degree`, `graduationYear`, `heroLabel`
- Ảnh: `studentPhoto`, `gradPhoto`, `entrancePhoto` — nhận đường dẫn trong `assets/` (ví dụ `"assets/anh.jpg"` hoặc chỉ tên file) hoặc URL.

## Sự kiện
- `dateISO`: thời điểm sự kiện theo ISO 8601 (dùng cho đếm ngược/lịch), ví dụ `2026-11-25T13:30:00+07:00`.
- `dateDisplay`, `timeDisplay`, `timeNote`, `venue`, `address`

## Liên hệ
- `phoneDisplay`, `phoneDial`
- `messenger`: username Facebook (vd `"ten.nguoi.dung"`), ID, hoặc link `https://m.me/...`
- `zalo`: số điện thoại hoặc link `https://zalo.me/...`

## Cổng và bản đồ
Mỗi phần tử trong `gates` có:
- `name`, `note`, `photo` (asset hoặc URL)
- `lat`, `lng`: tọa độ thực để mở Google/Apple Maps
- `pinX`, `pinY`: vị trí ghim trang trí trên ảnh cổng (phần trăm, 0–100)

## Tour 360°
- `tour360Url`, `tourLabel`, `tourMode` (`"modal"` nhúng trên trang, `"tab"` mở tab mới)

## Lời mời và xe buýt
- `message`, `closingLine`, `smsMessage`, `rsvpDate`
- `buses`: danh sách `{ number, route, detail, time }`
- `steps`: hướng dẫn đi bộ `{ title, note }` — hỗ trợ `{name}`, `{date}`, `{gate}`

## Kiểm tra nhanh
```bash
node --check invite.config.js
node --check script.js
python3 -m http.server 8000
```
