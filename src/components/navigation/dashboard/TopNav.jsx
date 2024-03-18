import { FaBell, FaHamburger, FaList, FaSearch } from "react-icons/fa";

export const TopNav = () => {
  return (
    <div className="w-full flex justify-between items-center px-5 space-x-10">
      <div className="flex justify-start space-x-5 items-center">
        <div className="flex justify-center items-center h-full">
          <img
            // src="download.jpeg"
            src="https://thispersondoesnotexist.com"
            alt="Profile"
            className="rounded-full h-[30pt] w-[30pt]"
          />
        </div>

        <div className="flex justify-center items-center h-full text-xl">
          <button className="">
            <FaBell />
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <FaList />
      </div>
    </div>
  );
};
