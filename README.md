## Portfolio (React + Vite)

Trang portfolio cá nhân gồm: Giới thiệu, Kỹ năng (Frontend/Backend/Tooling), Dự án đã làm, Liên hệ. Responsive và sẵn sàng deploy Vercel.

### Chạy cục bộ

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Deploy lên Vercel

- Tạo repo GitHub và push mã nguồn này lên.
- Truy cập Vercel, Import Project từ repo.
- Thiết lập:
  - Framework Preset: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Hoặc để tự động với `public/vercel.json` đã cấu hình.

### Tùy chỉnh

- Sửa dữ liệu trong `src/data.ts` (kỹ năng, dự án, liên kết).
- Cập nhật thông tin liên hệ trong `src/components/Contact.tsx` và footer.
- Tùy chỉnh màu sắc, giao diện trong `src/App.css`.
