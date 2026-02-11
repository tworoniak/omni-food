import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function AppLayout() {
  return (
    <div className='min-h-screen pb-24'>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
