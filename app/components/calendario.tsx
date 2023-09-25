import React from 'react';
import Calendar from 'react-calendar';
import Header from './Header';
import 'react-calendar/dist/Calendar.css';
import Footer from './Footer';

const MyCalendar: React.FC = () => {
  return (
    <>
    <Header/>
    <section className='items-center justify-center '>
        <Calendar/>
    </section>
    <Footer/>
    
    </>
  );
};

export default MyCalendar;
