import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      if (url.includes('linkedin.com')) {
        setActive(true);
      }
    });
  }, []);
  return (
    <div className="App">
      <button disabled={!active}>My Button</button>
    </div>
  );
};

export default Popup;
