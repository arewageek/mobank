import { FaChartArea, FaCog, FaCreditCard, FaHome, FaStar, FaUser, FaUsers } from 'react-icons/fa'

export const Sidenav = () => {

    const links = [
        {
            active: true,
            label: 'Home',
            icon: <FaHome />,
            url: '#'
        },

        {
            label: 'Payments',
            icon: <FaCreditCard />,
            url: '#'
        },

        {
            label: 'Community',
            icon: <FaUsers />,
            url: '#'
        },

        {
            label: 'Referrals',
            icon: <FaStar />,
            url: '#'
        },
    ]

    const profileLinks = [
        {
            label: 'Account',
            icon: <FaUser />,
            url: '#'
        },

        {
            label: 'Settings',
            icon: <FaCog />,
            url: '#'
        },
    ]
    
    return (
        <div className="h-screen w-full">
            <div className="w-full h-[80%] flex flex-col justify-between text-sm">
                <div className="flex flex-col space-y-4">
                    {/* nav */}

                    {
                        links.map((link, index) => (
                            <div key={index} className={`${link.active && 'bg-slate-300'} hover:bg-slate-300 transition duration-300 cursor-pointer text-slate-700 flex items-center font-[500] rounded-xl px-4 py-3 space-x-5`}>
                                <div className="text-2xl">
                                    {link.icon }
                                </div>
                                <div>
                                    { link.label }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col space-y-4">
                    {/* nav */}

                    {
                        profileLinks.map((link, index) => (
                            <div key={index} className={`${link.active && 'bg-slate-300'} hover:bg-slate-300 transition duration-300 cursor-pointer text-slate-700 flex items-center font-[500] rounded-xl px-4 py-3 space-x-5`}>
                                <div className="text-2xl">
                                    {link.icon }
                                </div>
                                <div>
                                    { link.label }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
