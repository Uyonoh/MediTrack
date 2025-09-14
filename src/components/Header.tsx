import { Search } from "lucide-react";

function Header() {
    return (
        <header className="grid grid-cols-5 p-4 font-bold text-xl border-b gap-4">
            <div className="logo">MediTrack</div>
            <div className="current-page">Overview</div>
            <div className="blank"></div>
            <div className="search flex items-center font-normal text-sm gap-2 justify-self-end">
                <Search size={16} />
                <input className="w-full py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 transition"
                type="search" name="search" id="search" placeholder="Search..." />
            </div>
            <div className="profile flex gap-1 text-sm font-normal justify-self-end">
                <div className="photo">
                    <img className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent transition duration-300 hover:ring-green-500"
                    alt="profile photo"
                    src="/src/assets/images/profile.jpg"/>
                </div>
                <div className="info flex flex-col">
                    <span className="font-bold">Dr. Evelyn Reed</span>
                    <span>Pharmacist</span>
                </div>
            </div>
        </header>
    )
}

export default Header;