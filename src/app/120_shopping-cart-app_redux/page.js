"use client";
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function Home() {
  return (
    <main>
      <ProductList />
      <Cart />
    </main>
  );
}