# Triển khai GitHub Pages

Trang là site tĩnh (`index.html` ở gốc, có `.nojekyll`) nên có thể xuất bản trực tiếp từ nhánh, không cần GitHub Actions.

## Tùy chọn A — Phục vụ từ nhánh `main` (đơn giản)
1. Commit và push code lên nhánh `main`.
2. Vào **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Chọn **Branch: `main`** và thư mục **`/ (root)`**, rồi Save.

Trang sẽ có địa chỉ `https://<tài-khoản>.github.io/<tên-repo>/` và cập nhật sau mỗi lần push lên `main`.

## Tùy chọn B — Nhánh `gh-pages` (npm script)
Dự án có sẵn `gh-pages` trong `devDependencies`:

```bash
npm install
npm run deploy
```

Script `scripts/deploy.sh` tạo bản chụp sạch từ commit hiện tại (`git archive HEAD`) rồi đẩy lên nhánh `gh-pages`, nên không đưa `node_modules/` hay tệp chưa commit lên site. Sau đó đặt **Settings → Pages → Source: Deploy from a branch** và chọn nhánh `gh-pages` (root).

> Lưu ý: lệnh `deploy` xuất bản từ **HEAD** đã commit. Hãy commit thay đổi trước khi chạy `npm run deploy`.

## Cập nhật
- Tùy chọn A: commit và push lên `main`.
- Tùy chọn B: commit rồi chạy `npm run deploy`.

Có thể cần hard-refresh trình duyệt để thấy thay đổi mới.
