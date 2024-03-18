import { Button } from "@/components/form/Input";
import { FaTelegramPlane } from "react-icons/fa";

const SupportPage = () => {
  return (
    <main className="w-full lg:w-3/4 bg-green-50 p-5 rounded-3xl flex">
      <div className="w-full md:w-full px-3 md:pr-20 md:pl-4">
        <div className="w-full h-fit flex flex-wrap flex-col md:flex-row">
          <div className="w-full lg:w-4/5 h-fit px-2 lg:px-8 py-3">
            <div className="mb-10 my-2">
              <h2 className="font-bold text-lg lg:text-3xl">CONTACT US</h2>
              <p className="text-xl lg:w-2/3 leading-snug mt-4">
                We're here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>
            <div className="w-full ">
              <form action="">
                <div className="w-full items-center flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
                  <div className="flex flex-col space-y-2 w-full flex-wrap">
                    <label htmlFor="firstname" className="font-bold text-lg">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="w-full bg-gray-200 px-5 py-3 text-lg placeholder:text-gray-400 rounded-lg"
                      autoComplete="autocomplete"
                    />
                  </div>

                  <div className="flex flex-col space-y-2 w-full flex-wrap">
                    <label htmlFor="firstname" className="font-bold text-lg">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="w-full bg-gray-200 px-5 py-3 text-lg placeholder:text-gray-400 rounded-lg"
                      autoComplete="autocomplete"
                    />
                  </div>
                </div>

                <div className="w-full items-center flex space-x-5 mt-7">
                  <div className="flex flex-col space-y-2 w-full flex-wrap">
                    <label htmlFor="firstname" className="font-bold text-lg">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="w-full bg-gray-200 px-5 py-3 text-lg placeholder:text-gray-400 rounded-lg"
                      autoComplete="autocomplete"
                    />
                  </div>
                </div>

                <div className="w-full items-center flex space-x-5 mt-7">
                  <div className="flex flex-col space-y-2 w-full flex-wrap">
                    <label htmlFor="firstname" className="font-bold text-lg">
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="w-full bg-gray-200 px-5 py-3 text-lg placeholder:text-gray-400 rounded-lg"
                      autoComplete="autocomplete"
                    />
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <Button
                    text={"Send Message"}
                    icon={<FaTelegramPlane />}
                    type={"text"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SupportPage;
