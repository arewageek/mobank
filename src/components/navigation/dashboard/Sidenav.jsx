import { FaCog, FaCreditCard, FaHome, FaUsers } from "react-icons/fa";

import Link from "next/link";

export const Sidenav = () => {
  const links = [
    {
      active: true,
      label: "Home",
      icon: <FaHome />,
      url: "/user",
    },

    {
      label: "Payments",
      icon: <FaCreditCard />,
      url: "/user/payments",
    },

    {
      label: "Customer Care",
      icon: <FaUsers />,
      url: "/user/support",
    },
  ];

  const profileLinks = [
    {
      label: "Settings",
      icon: <FaCog />,
      url: "/user/settings",
    },
  ];

  return (
    <div className={`h-screen w-full hidden lg:block`}>
      <div className="w-full h-[80%] flex flex-col justify-between text-sm">
        <div className="flex flex-col space-y-4">
          {/* nav */}

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`${
                link.active && "bg-green-300"
              } hover:bg-green-300 transition duration-300 cursor-pointer text-green-700 flex items-center font-[500] rounded-xl px-4 py-3 space-x-5`}
            >
              <div className="text-2xl">{link.icon}</div>
              <div>{link.label}</div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          {profileLinks.map((link, index) => (
            <div
              key={index}
              className={`${
                link.active && "bg-green-300"
              } hover:bg-green-300 transition duration-300 cursor-pointer text-green-700 flex items-center font-[500] rounded-xl px-4 py-3 space-x-5`}
            >
              <div className="text-2xl">{link.icon}</div>
              <div>{link.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
