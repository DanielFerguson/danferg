import { toast, Toaster } from "react-hot-toast";

const Newsletter = () => {
  const submitNewsletter = async (e) => {
    e.preventDefault();

    const formBody =
      "userGroup=danferg&danferg=true&email=" +
      encodeURIComponent(e.target.email.value);

    await toast.promise(
      fetch(
        "https://app.loops.so/api/newsletter-form/clbebaql1006ekx08xvsrrn43",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      ),
      {
        loading: "Submitting...",
        success: "Thanks for subscribing!",
        error: "Something went wrong.",
      }
    );
  };

  return (
    <div className="bg-indigo-700 ">
      <Toaster />

      <div className="max-w-7xl mx-auto py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Get notified when we&apos;re launching.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-indigo-100">
            We're moments away from revolutionizing the way you manage your
            data. You&apos;re not going to want to miss it.
          </p>
        </div>
        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
          <form className="sm:flex" onSubmit={(e) => submitNewsletter(e)}>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              id="email-address"
              autoComplete="email"
              required
              className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            />
            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Notify me
            </button>
          </form>
          <p className="mt-3 text-sm text-indigo-100">
            We'll never share your email address with anyone else.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
