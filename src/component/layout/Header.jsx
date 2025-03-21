import { Bell, Search } from 'lucide-react';
import { useInternalRouter } from '@/src/hook/useInternalRouter';
import '@/style/index.css';

const Header = () => {
  const router = useInternalRouter();

  return (
    <header className="header">
      {/* 왼쪽 여백 (균형 맞추기) */}
      <div className="w-6"></div>

      {/* 중앙 텍스트 */}
      <h1 className="header-title" onClick={() => router.push('/')}>
        개발놈<span className="bold">TEST</span>
      </h1>

      {/* 우측 아이콘 (알림 + 검색) */}
      <div className="icon-container">
        <Bell size={18} aria-label="알림" />
        <Search size={18} aria-label="검색" />
      </div>
    </header>
  );
};

export default Header;
