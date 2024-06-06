import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'
import ExtrasPage from './pages/ExtrasPage'
import NotFoundPage from './pages/NotFoundPage'
import Coming from './pages/Coming'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/collection" element={<CollectionPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/extras/*" element={<ExtrasPage darkMode={darkMode} setDarkMode={setDarkMode} />}>
            <Route path="music" element={<ExtrasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="events" element={<ExtrasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="youtubers" element={<ExtrasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="communities" element={<ExtrasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="insights" element={<ExtrasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Route>
          <Route path='/coming' element={<Coming darkMode={darkMode} setDarkMode={setDarkMode} />}></Route>
          <Route path="*" element={<NotFoundPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
