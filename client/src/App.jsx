import React, { useEffect, useState } from 'react';
import './App.css'; 
import languages from './constants/languages';

function App() {


  const [translatedText, setTranslatedText] = useState('Translated text will appear here...')
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [typedText, setTypedText] = useState('');
  const [serverHealth,setServerHealth] = useState('Pinging Server...');
  const [loading,setLoading] = useState('');

  // JUST FOR DEVS,NOT TO BE TAUGHT!
  useEffect(()=>{
    (async function healthCheck() {
      try {
        const response = await fetch(`https://server-gdsc-session.onrender.com/healthz`);
        console.log(response.body)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setServerHealth("Servers Active and Healthy. [PING-CHECK-200]")
      } catch (error) {
        setServerHealth("Servers Inactive. [PING-CHECK500]")
        console.error('There was a problem with the fetch operation:', error);
      }
    })()
  },[])


  async function translateOnClick() {
    setLoading(prev => prev = "Translating...")
    console.log(selectedLanguage)
    const requestBody = {
      text: typedText,
      toLang: selectedLanguage,
    };

    try {
      const response = await fetch(`https://server-gdsc-session.onrender.com/translate`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(requestBody),
      });
      console.log(response.body)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log(responseData);
      setTranslatedText(prev => prev = responseData)
      setLoading(prev => prev = "Translation Done!")
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setLoading(prev => prev = "Failed Translation!")
      
    }
  }

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Text Translation App</h1>
      </header>
      <main className="main">
        <textarea onChange={(event) => {
          setTypedText(prev => prev = event.target.value);
        }} className="input" placeholder="Enter text to translate..." />
        <div className="language-selection">
          <label className="language-label" htmlFor="language-select">Select Language:</label>
          <select
            id="language-select"
            className="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="">Select a language...</option>
            {Object.entries(languages).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>
        </div>
        <button className="translate-button" onClick={(event) => {
          event.preventDefault();
          translateOnClick();
        }}>Translate</button>

        <div className="output">{translatedText}</div>
        <p className="hint">Hint: Click the 'Translate' button to see the translated text.</p>
        <br />
        <br />
        <p>{loading}</p>
      </main>

      
      <footer className="footer">
        <center>
        <p>Server Health: {serverHealth}</p>
        </center>
      </footer>

    </div>
  );
}

export default App;
