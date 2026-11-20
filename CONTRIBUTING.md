# Đóng góp

Cảm ơn bạn đã quan tâm đến dự án.

## Nguyên tắc

- Mọi nội dung hiển thị (tên, thời gian, địa điểm, liên hệ, cổng, ảnh, lời mời) nên chỉnh trong `invite.config.js` khi có thể.
- `app.js` chỉ xử lý logic hiển thị/chạy; tránh nhúng nội dung cứng vào đây.
- Giữ giao diện gọn, dễ đọc, và hỗ trợ tiếng Việt có dấu.
- Không commit `node_modules/`, tệp cache, hoặc thông tin cá nhân nhạy cảm.

## Chạy cục bộ

```bash
python3 -m http.server 8000
```

Mở `http://localhost:8000` để xem trước.

## Gửi thay đổi

1. Tạo nhánh mới từ `main`.
2. Thực hiện chỉnh sửa và kiểm tra hiển thị trên máy.
3. Mô tả rõ thay đổi trong pull request (kèm ảnh chụp màn hình nếu có thay đổi giao diện).

## Báo lỗi

Khi báo lỗi, vui lòng cung cấp:
- Trình duyệt và thiết bị.
- Các bước tái hiện.
- Kết quả mong đợi và kết quả thực tế.
- Ảnh chụp màn hình hoặc thông báo lỗi (nếu có).
