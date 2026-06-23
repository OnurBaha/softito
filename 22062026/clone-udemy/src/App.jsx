import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import CourseWatch from './pages/CourseWatch';
import MyCourses from './pages/MyCourses';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="app-container">
        <Sidebar />
        <main className="app-main">
          <div className="space-y-xl">
            <div className="preview-card">
              <div className="preview-header">Ana Sayfa</div>
              <Home />
            </div>
            <div className="preview-card">
              <div className="preview-header">Kurs Listesi</div>
              <CourseList />
            </div>
            <div className="preview-card">
              <div className="preview-header">Kurs Detayı</div>
              <CourseDetail />
            </div>
            <div className="preview-card">
              <div className="preview-header">Ders İzleme Paneli</div>
              <CourseWatch />
            </div>
            <div className="preview-card">
              <div className="preview-header">Eğitimlerim</div>
              <MyCourses />
            </div>
            <div className="preview-card">
              <div className="preview-header">Ödeme Sayfası</div>
              <Payment />
            </div>
            <div className="preview-card">
              <div className="preview-header">Ödeme Başarılı</div>
              <PaymentSuccess />
            </div>
            <div className="preview-card">
              <div className="preview-header">Ödeme Başarısız</div>
              <PaymentFailed />
            </div>
            <div className="preview-card">
              <div className="preview-header">Profilim</div>
              <Profile />
            </div>
            <div className="preview-card">
              <div className="preview-header">İletişim & Destek</div>
              <Contact />
            </div>
          </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}