import { fsSignup } from "@/lib/firestore";

const Register = () => {
  const countries = [
    {
      label: "nigeria",
      id: "ngn",
    },
    {
      label: "united states",
      id: "usa",
    },
  ];

  const handleSignup = async (e) => {
    "use server";

    e.preventDefault();

    const password = e.formData.password;
    const verifyPsd = e.formData.verifyPsd;

    const name = e.formData.name;
    const email = e.formData.email;

    if (password != verifyPsd) {
      alert("Password did not match");
      return;
    }

    const registered = await fsSignup(name, email, password);
  };

  return (
    <div class="bg-grey-200 min-h-screen flex flex-col">
      <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-5">
        <div class="bg-white px-6 py-8 rounded shadow-xl text-slate-900 w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <form action={handleSignup}>
            <input
              type="text"
              class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <select
              class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
              name="location"
            >
              {countries.map((country) => (
                <option
                  key={country.id}
                  value={country.id}
                  className="capitalize"
                >
                  {country.label}
                </option>
              ))}
            </select>

            <input
              type="password"
              class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-800 focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?{" "}
          <a class="no-underline border-b border-blue text-blue" href="/login">
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};
export default Register;
