import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>

     <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
  
        <Navbar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
        <Footer />
    </div>
        
    </>
  )
}

export default Layout