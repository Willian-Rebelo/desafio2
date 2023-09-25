import React from 'react';
import Calendar from 'react-calendar';
import Header from './Header';
import 'react-calendar/dist/Calendar.css';
import Footer from './Footer';

const MyCalendar: React.FC = () => {
  return (
    <>
      <main className='h-screen bg-slate-700'>
        <div className=''> 
          < Calendar />
        </div>
      </main>
    </>
  );
};

export default MyCalendar;
