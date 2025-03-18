import Header from '../../component/UI/Header';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}
