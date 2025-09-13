import { Archive, LayoutDashboard, ChartNoAxesCombined,
  TriangleAlert, Settings
 } from "lucide-react"

function SideBar() {
    return (
        <nav className="border-r-1 border-[#aab3ab5c] side-bar col-span-2 row-span-3 flex flex-col p-6
            gap-3">
            <div className="nav-item flex gap-2"><LayoutDashboard /><a href="#">Overview</a></div>
            <div className="nav-item flex gap-2"><Archive /><a href="#">Inventory</a></div>
            <div className="nav-item flex gap-2"><ChartNoAxesCombined /><a href="#">Sales</a></div>
            <div className="nav-item flex gap-2"><TriangleAlert /><a href="#">Alerts</a></div>
            <div className="nav-item flex gap-2"><Settings /><a href="#">Settings</a></div>
        </nav>
    )
}

export default SideBar;