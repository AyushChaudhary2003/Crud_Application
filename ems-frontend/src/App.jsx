import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path="/" element={<ListEmployeeComponent />} />
        {/* https://localhost:3000/employees */}
        <Route path="/employees" element={<ListEmployeeComponent />} />
        {/* // https://localhost:3000/add-employees */}
        <Route path ='/add-employee' element = { <EmployeeComponent/>}></Route>

        {/* // https://localhost:3000/edit-employees/1 */}
        <Route path = '/edit-employee/:id' element = {<EmployeeComponent /> }></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
