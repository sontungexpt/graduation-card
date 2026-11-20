# Tùy chỉnh thiệp

Tất cả nội dung hiển thị được đặt trong `invite.config.js`. Sau khi chỉnh, mở lại trang (hoặc hard-refresh) để thấy thay đổi.

## Thông tin cá nhân
- `studentName`, `nickname`, `degree`, `graduationYear`, `heroLabel`
- Ảnh: `studentPhoto`, `gradPhoto`, `entrancePhoto` — nhận đường dẫn trong `assets/` (ví dụ `"assets/anh.jpg"` hoặc chỉ tên file) hoặc URL.

## Sự kiện
- `event`: thời điểm dùng cho đếm ngược và lịch
  - `date`: ngày, dạng `DD/MM/YYYY` (ví dụ `"25/11/2026"`) hoặc `YYYY-MM-DD`
  - `time`: giờ theo 24h, dạng `HH:mm` (ví dụ `"13:30"`)
  - `timezone`: múi giờ/độ lệch UTC (mặc định `"+07:00"`)
- `dateDisplay`, `timeDisplay`, `timeNote`, `venue`, `address`: nội dung hiển thị trên thiệp (tự do viết bằng tiếng Việt)

## Liên hệ
- `phoneDisplay`, `phoneDial`
- `messenger`: username Facebook (vd `"ten.nguoi.dung"`), ID, hoặc link `https://m.me/...`
- `zalo`: số điện thoại hoặc link `https://zalo.me/...`

## Cổng và bản đồ
Mỗi phần tử trong `gates` có:
- `name`, `note`, `photo` (asset hoặc URL)
- `lat`, `lng`: tọa độ thực để mở Google/Apple Maps

## Tour 360°
- `tour360Url`, `tourLabel`, `tourMode` (`"modal"` nhúng trên trang, `"tab"` mở tab mới)

## Lời mời và xe buýt
- `message`, `closingLine`, `smsMessage`, `rsvpDate`
- `buses`: danh sách `{ number, route, detail, time }`
- `steps`: hướng dẫn đi bộ `{ title, note }` — hỗ trợ `{name}`, `{date}`, `{gate}`

## Kiểm tra nhanh
```bash
bash scripts/check.sh
python3 -m http.server 8000
```
