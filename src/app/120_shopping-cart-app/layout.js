"use client";
import './globals.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="ja">
        <body>{children}</body>
      </html>
    </Provider>
  );
}