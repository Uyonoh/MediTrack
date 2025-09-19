 import { CustomNavLink } from '../components/CustomNavLink';

 function Settings() {
    return (
        <div className="p-5 font-medium">
            <div className="">
                <h2 className="font-bold text-2xl">Settings</h2>
                <p>Manage your account and preferences.</p>
            </div>
            <section className="settings grid grid-cols-12 py-10">
                <nav className="col-span-3 py-2">
                    <ul className="flex flex-col gap-3">
                        <li className="">
                            <CustomNavLink to="#profile" label="Profile"
                            className="size-full block hover:bg-green-100 p-2 rounded-sm"
                            active
                            />
                        </li>
                        <li className="">
                            <CustomNavLink to="#preferences" label="Preferences"
                            className="size-full block hover:bg-green-100 p-2 rounded-sm"
                            />
                        </li>
                        <li className="">
                            <CustomNavLink to="#notifications" label="Notifications"
                            className="size-full block hover:bg-green-100 p-2 rounded-sm"
                            />
                        </li>
                        <li className="">
                            <CustomNavLink to="#security" label="Security"
                            className="size-full block hover:bg-green-100 p-2 rounded-sm"
                            />
                        </li>
                    </ul>
                </nav>

                {/* Prevent default for all forms on submit */}
                <div className="col-span-8 flex flex-col gap-5 p-2">
                    <section id="profile" className="border border-[#00000024] rounded-lg p-5">
                        <h2 className="text-xl font-bold pb-5">Profile</h2>
                        <form action="" method="post"
                            className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="border border-[#00000024] rounded-sm p-1"/>
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="border border-[#00000024] rounded-sm p-1"/>
                                </div>
                                <div className="col-span-2 flex flex-col gap-2 ">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="tel" name="phoneNumber" id="phoneNumber" className="border border-[#00000024] rounded-sm p-1"/>
                                </div>
                                <button type="submit" className="col-start-2 justify-self-end rounded-sm bg-green-500 text-white max-w-[150px] transition delay-150 duration-300 hover:bg-green-400">
                                    Update Profile
                                </button>
                        </form>
                    </section>
                    
                    <section id="preferences" className="border border-[#00000024] rounded-lg p-5">
                        <h2 className="text-xl font-bold pb-5">Preferences</h2>
                        <form action="" method="post"
                            className="grid md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="language">Language</label>
                                    <select name="language" id="language" className="border border-[#00000024] rounded-sm p-1">
                                        <option value="en-us">English (USA)</option>
                                        <option value="en-uk">English (UK)</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="timeZone">Time Zone</label>
                                    <select name="timeZone" id="timeZone" className="border border-[#00000024] rounded-sm p-1">
                                        <option value="GMT">GMT</option>
                                        <option value="GMT+1" selected>GMT+1</option>
                                        <option value="GMT+1">GMT+2</option>
                                    </select>
                                </div>
                                <button type="submit" className="col-start-2 justify-self-end rounded-sm bg-green-500 text-white max-w-[180px] transition delay-150 duration-300 hover:bg-green-400">
                                    Save Preferences
                                </button>
                        </form>
                    </section>

                    <section id="notifications" className="border border-[#00000024] rounded-lg p-5">
                        <h2 className="text-xl font-bold pb-5">Notifications</h2>
                        <form action="" method="post"
                            className="grid md:grid-cols-12 gap-4">
                                <div className="col-span-10">
                                    <p className="">Email Notifications</p>
                                    <p className="text-gray-400">
                                        Recieve email notifications for new orders and updates.
                                    </p>
                                </div>
                                <div className="col-span-2 flex items-center cursor-pointer">
                                    <label htmlFor="toggle-a" className="flex items-center cursor-pointer">
                                        {/* <!-- toggle --> */}
                                        <div className="relative">
                                            {/* <!-- input --> */}
                                            <input type="checkbox" id="toggle-a" className="sr-only peer" />
                                            {/* <!-- line --> */}
                                            <div className="w-10 h-4 bg-gray-400 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
                                            {/* <!-- dot --> */}
                                            <div className="absolute w-6 h-6 bg-white border border-gray-700 rounded-full -top-1 left-0 transition-transform transition-border-color duration-300 peer-checked:translate-x-full peer-checked:border-green-700"></div>
                                        </div>
                                    </label>
                                </div>
                        </form>
                    </section>

                    <section id="security" className="border border-[#00000024] rounded-lg p-5">
                        <h2 className="text-xl font-bold pb-5">Security</h2>
                        <form action="" method="post"
                            className="grid md:grid-cols-12 gap-4">
                                <div className="col-span-10">
                                    <p className="">In-App Notifications</p>
                                    <p className="text-gray-400">
                                        Recieve in-app notifications for urgent alerts.
                                    </p>
                                </div>
                                <div className="col-span-2 flex items-center cursor-pointer">
                                    <label htmlFor="toggle-in-app-notifications" className="flex items-center cursor-pointer">
                                        {/* <!-- toggle --> */}
                                        <div className="relative">
                                            {/* <!-- input --> */}
                                            <input type="checkbox" id="toggle-in-app-notifications" className="sr-only peer" />
                                            {/* <!-- line --> */}
                                            <div className="w-10 h-4 bg-gray-400 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
                                            {/* <!-- dot --> */}
                                            <div className="absolute w-6 h-6 bg-white border border-gray-700 rounded-full -top-1 left-0 transition-transform transition-border-color duration-300 peer-checked:translate-x-full peer-checked:border-green-700"></div>
                                        </div>
                                    </label>
                                </div>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    );
 }

 export default Settings;