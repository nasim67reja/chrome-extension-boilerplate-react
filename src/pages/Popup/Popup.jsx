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

  const [user, setUser] = React.useState({});

  React.useEffectuseEffect(() => {
    chrome.runtime.onMessage.addListener((message) => {
      setUser(message);
    });
  }, []);

  return (
    <div className="App center">
      <h1>{user.name}</h1>
      <p>{user.title}</p>
      <p>{user.location}</p>

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
