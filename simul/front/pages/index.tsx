import React from 'react';
import MainVisual from 'components/MainVisual';
import Invitation from 'components/Invitation';
import Calendar from 'components/Calendar';
import Share from 'components/Share';
import Gallery from 'components/Gallery';
import Location from 'components/Location';
import Attendance from 'components/Attendance';

const Index = () => {
  return (
    <div>
      <h1>모바일 청첩장</h1>
      <MainVisual />
      <Invitation />
      <Calendar />
      <Gallery />
      <Location />
      <Attendance />
      <Share />
    </div>
  );
};

export default Index;
