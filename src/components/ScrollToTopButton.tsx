import { useScrollPosition } from '../hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const isVisible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top bg-tint/80 hover:bg-primary/50 border-shade border hover:border-tint transition z-20 ${isVisible ? 'show' : ''}`}
      aria-label='Scroll to top'
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
