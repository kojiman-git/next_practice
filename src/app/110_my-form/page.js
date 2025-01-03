"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('test');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // デフォルトの動作を防ぐ
    // バリデーションやデータ処理をここで行う
    const newErrors = {};

    // バリデーション
    if (!name) newErrors.name = '名前は必須です。';
    if (!email) {
      newErrors.email = 'メールアドレスは必須です。';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = '有効なメールアドレスを入力してください。';
    }
    if (!password) {
      newErrors.password = 'パスワードは必須です。';
    } else if (password.length < 8) {
      newErrors.password = 'パスワードは8文字以上である必要があります。';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log({ name, email, password });
      // フォーム送信後の処理をここに追加
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div>
      <h1>ユーザー登録フォーム</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>メールアドレス:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>パスワード:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
