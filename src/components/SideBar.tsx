import { Archive, LayoutDashboard, ChartNoAxesCombined,
  TriangleAlert, Settings
 } from "lucide-react"

 import { Link } from "react-router-dom";

function SideBar() {
    return (
        <nav className="border-r-1 border-[#aab3ab5c] side-bar col-span-2 row-span-3 flex flex-col p-6
            gap-3">
            <div ><Link to="/" className="nav-item flex gap-2 hover:bg-green-100"><LayoutDashboard />Overview</Link></div>
            <div className="nav-item flex gap-2"><Archive /><Link to="#">Inventory</Link></div>
            <div className="nav-item flex gap-2"><ChartNoAxesCombined /><Link to="/sales">Sales</Link></div>
            <div className="nav-item flex gap-2"><TriangleAlert /><Link to="#">Alerts</Link></div>
            <div className="nav-item flex gap-2"><Settings /><Link to="/settings">Settings</Link></div>
        </nav>
    )
}

export default SideBar;