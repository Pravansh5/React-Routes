import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLanguageContext } from './context/LanguageContextProvider'

function App() {
  const [count, setCount] = useState(0)
  const {language,toggleLanguage}=useLanguageContext();
  const translations={
    english:{title:"Masai Journey",greetings:"Welcome to my journey",About:"This article is about my jorney in Masai. I have joined maai back in feb 2025 & Now I am in last phase of the my course"},
  hindi: {
  title: "मसाई यात्रा",
  greetings: "मेरी यात्रा में आपका स्वागत है",
  About: "यह लेख मसाई में मेरी यात्रा के बारे में है। मैंने फरवरी 2025 में मसाई जॉइन किया था और अब मैं अपने कोर्स के अंतिम चरण में हूँ।"
}
  }
  return (
    <>
     <section>
      <div >
        <button onClick={toggleLanguage}>{language=="english"?"हिंदी में बदलें":"Switch to English"}</button>
        <h1>{translations[language].title}</h1>
      </div>
     </section>
     <section>
      <p>
        {translations[language].About}
      </p>
     </section>
     <section>

     </section>
    </>
  )
}

export default App
