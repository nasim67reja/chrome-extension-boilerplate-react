// content.js
const nam = 'name';
const title = 'title';
const location = 'location';

chrome.runtime.sendMessage({ nam, title, location });
