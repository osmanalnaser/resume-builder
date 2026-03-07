import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import ResumeEditor from './pages/ResumeEditor'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/resume/:id" element={
          <ProtectedRoute><ResumeEditor /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App