import Header from '@/src/component/UI/Header';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}