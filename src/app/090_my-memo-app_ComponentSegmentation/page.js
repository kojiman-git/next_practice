"use client"
import { useState } from 'react';
import MemoList from './components/MemoList';
import MemoInput from './components/MemoInput';
import SearchInput from './components/SearchInput';

export default function Home() {
  const [memos, setMemos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addMemo = (memo) => {
    setMemos([...memos, { id: Date.now(), text: memo }]);
  };

  const editMemo = (id, updatedText) => {
    setMemos(memos.map(memo => (memo.id === id ? { ...memo, text: updatedText } : memo)));
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter(memo => memo.id !== id));
  };

  const filteredMemos = memos.filter(memo => memo.text.includes(searchQuery));

  return (
    <div>
      <h1>メモ帳アプリ</h1>
      <SearchInput setSearchQuery={setSearchQuery} />
      <MemoInput addMemo={addMemo} />
      <MemoList memos={filteredMemos} editMemo={editMemo} deleteMemo={deleteMemo} />
    </div>
  );
}
