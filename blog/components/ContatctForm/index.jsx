import { useState } from 'react';
import styles from './styles.module.css';

export const ContatctForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(event) {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ ...form }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your email</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your name</label>
            <input
              type='text'
              id='name'
              name='name'
              required
              onChange={handleChange}
              value={form.name}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your message</label>
          <textarea
            id='message'
            name='message'
            rows='5'
            onChange={handleChange}
            value={form.message}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
};
