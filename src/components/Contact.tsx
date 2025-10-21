import { useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; msg: string }>(null);

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
  const canSubmitRemotely = useMemo(() => Boolean(formspreeId && formspreeId.trim().length > 0), [formspreeId]);

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function isValidEmail(email: string) {
    return /.+@.+\..+/.test(email);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    if (!form.name || !isValidEmail(form.email) || !form.subject || !form.message) {
      setResult({ ok: false, msg: 'Vui lòng điền đầy đủ thông tin bắt buộc.' });
      return;
    }
    if (!canSubmitRemotely) {
      const params = new URLSearchParams({ subject: form.subject, body: `Tên: ${form.name}\nEmail: ${form.email}\nĐiện thoại: ${form.phone}\n\n${form.message}` });
      window.location.href = `mailto:you@example.com?${params.toString()}`;
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setResult({ ok: true, msg: 'Gửi thành công! Mình sẽ phản hồi sớm.' });
        setForm(initialState);
      } else {
        setResult({ ok: false, msg: 'Gửi thất bại. Vui lòng thử lại sau.' });
      }
    } catch (err) {
      setResult({ ok: false, msg: 'Có lỗi kết nối. Vui lòng thử lại.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Liên hệ</h2>
        <p>Hãy để lại thông tin, mình sẽ liên hệ lại sớm.</p>
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Họ và tên *</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="Nguyễn Văn A" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="ban@congty.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="phone">Điện thoại</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="0901 234 567" />
            </div>
            <div className="form-field">
              <label htmlFor="subject">Chủ đề *</label>
              <input id="subject" name="subject" type="text" required value={form.subject} onChange={onChange} placeholder="Hợp tác dự án" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="message">Nội dung *</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Mô tả nhu cầu của bạn..."></textarea>
          </div>
          {result && (
            <div className={`form-note ${result.ok ? 'form-note--ok' : 'form-note--error'}`}>{result.msg}</div>
          )}
          <div className="form-actions">
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              {submitting ? 'Đang gửi...' : canSubmitRemotely ? 'Gửi liên hệ' : 'Gửi qua email'}
            </button>
            <div className="pill-row">
              <a className="btn" href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          {!canSubmitRemotely && (
            <p className="form-hint">Tip: đặt biến môi trường <code>VITE_FORMSPREE_ID</code> để bật gửi form qua Formspree.</p>
          )}
        </form>
      </div>
    </section>
  );
}


