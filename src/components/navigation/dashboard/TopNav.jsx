import { FaBell, FaSearch } from 'react-icons/fa'

export const TopNav = () => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="py-4">
                <form>
                    <div className="w-[200pt] min-h-[20pt] rounded-3xl bg-gray-100 px-3 py-2 text-gray-700 flex items-center space-x-3 text-sm">
                        <button className="border-none bg-transparent">
                            <FaSearch />
                        </button>
                        <input type="text" className="border-none bg-transparent w-full hover:border-none focus:border-none focus-within:border-none py-1 px-2 font-[450]" placeholder="Search" />
                    </div>
                </form>
            </div>

            <div className="w-full hidden md:flex md:justify-end md:items-center px-5 md:space-x-10">
                    <div className="flex justify-center items-center h-full">
                        <select className="font-[450] border-none bg-transparent text-sm">
                            <option value="EN">EN</option>
                        </select>
                    </div>

                    <div className="flex justify-center items-center h-full text-xl">
                        <button className="">
                            <FaBell />
                        </button>
                    </div>

                    <div className="flex justify-center items-center h-full">
                        <img src="./download.jpeg" alt="Profile" className="rounded-full h-[40pt] w-[40pt]" />
                    </div>
            </div>
        </div>
    )
}
