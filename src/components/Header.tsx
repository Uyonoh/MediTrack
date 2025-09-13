import { Search } from "lucide-react";

function Header() {
    return (
        <header className="grid grid-cols-5 p-4 font-bold text-xl border-b">
            <div className="logo">MediTrack</div>
            <div className="current-page">Overview</div>
            <div className="blank"></div>
            <div className="search flex items-center font-normal text-sm gap-2">
                <Search size={16} />
                <input type="search" name="search" id="search" placeholder="Search..." />
            </div>
            <div className="profile flex gap-1 text-sm font-normal">
                <div className="photo">
                    U
                </div>
                <div className="info flex flex-col">
                    <span>Dr. Evelyn Reed</span>
                    <span>Pharmacist</span>
                </div>
            </div>
        </header>
    )
}

export default Header;