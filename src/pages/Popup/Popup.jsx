import React from 'react';
import './Popup.css';

const Popup = () => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      if (url.includes('linkedin.com')) {
        setActive(true);
      }
    });
    console.log('testing');
  }, []);

  return (
    <div className="App center">
      <div>
        <button
          className={`my-button ${active ? 'active' : 'disabled'}`}
          disabled={!active}
        >
          My Button
        </button>
        <p>Button is {active ? 'active' : 'disabled'}</p>
      </div>
    </div>
  );
};

export default Popup;
