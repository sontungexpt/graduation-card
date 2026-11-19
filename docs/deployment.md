# Triển khai GitHub Pages

## Tùy chọn A — Actions (khuyến nghị, đã cấu hình sẵn)
1. Push code lên nhánh `main`.
2. Vào **Settings → Pages** của repository.
3. Chọn **Source: GitHub Actions**.
4. Workflow `.github/workflows/deploy-pages.yml` sẽ tự xuất bản trang.

Trang sẽ có địa chỉ: `https://<tài-khoản>.github.io/<tên-repo>/`

## Tùy chọn B — Nhánh `gh-pages` (npm script)
Dự án có sẵn `gh-pages` trong `devDependencies`:

```bash
npm install
npm run deploy
```

Script `deploy` chạy `gh-pages -d .` để đẩy nội dung thư mục hiện tại lên nhánh `gh-pages`. Sau đó đặt **Settings → Pages → Source: Deploy from a branch** và chọn nhánh `gh-pages` (root).

> Lưu ý: `gh-pages -d .` sẽ xuất bản cả thư mục; hãy đảm bảo `.gitignore`/cấu hình loại trừ phù hợp và không để lộ thông tin nhạy cảm.

## Cập nhật
Sau mỗi lần sửa (thường là `invite.config.js`), commit và push (hoặc chạy `npm run deploy`). Có thể cần hard-refresh trình duyệt để thấy thay đổi mới.
