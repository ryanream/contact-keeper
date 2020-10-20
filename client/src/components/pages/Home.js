import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
  return (
    // 2 column grid
    <div className='grid-2'>
      <div>{<ContactForm />}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
