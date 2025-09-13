import { Routes, Route } from 'react-router-dom'
// import './App.css'
import Header from "./components/Header"
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  )
}

export default App



// import { Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Inventory from "./pages/Inventory";
// import Sales from "./pages/Sales";

// function App() {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-4">
//         <nav className="space-y-4">
//           <Link to="/" className="block hover:text-gray-300">Dashboard</Link>
//           <Link to="/inventory" className="block hover:text-gray-300">Inventory</Link>
//           <Link to="/sales" className="block hover:text-gray-300">Sales</Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/inventory" element={<Inventory />} />
//           <Route path="/sales" element={<Sales />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;
