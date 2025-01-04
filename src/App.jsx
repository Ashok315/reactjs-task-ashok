import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TabLayout from './components/layout/TabLayout'
import MainLayout from './components/layout/MainLayout'
import InterviewDetails from './pages/InterviewDetails'
import BasicDetails from './pages/BasicDetails'
import ContactDetails from './pages/ContactDetails'
import AcademicDetails from './pages/AcademicDetails'


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Main Layout */}
            <Route path="/" element={<MainLayout />}>
                <Route element={<TabLayout />}>
                  <Route index element={<InterviewDetails/>} /> {/* Default route */}
                  <Route path="/basic-details" element={<BasicDetails></BasicDetails>} />
                  <Route path="/contact-details" element={<ContactDetails></ContactDetails>} />
                  <Route path="/academic-details" element={<AcademicDetails></AcademicDetails>} />
                </Route>

                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
