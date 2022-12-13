import { toast, Toaster } from "react-hot-toast";

const Newsletter = () => {
  const submitNewsletter = async (e) => {
    e.preventDefault();

    await toast.promise(
      fetch(`/newsletter/subscribe/${e.target.email.value}`),
      {
        loading: "Submitting...",
        success: "Thanks for subscribing!",
        error: "Something went wrong.",
      }
    );

    e.target.reset();
  };

  return (
    <div className="bg-indigo-700 ">
      <Toaster />

      <div className="mx-auto max-w-7xl py-16 px-12 sm:py-16 lg:flex lg:items-center lg:py-20">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="font-[Gordita] text-2xl font-bold tracking-tight text-white sm:text-center lg:text-left">
            Get notified when I write and release.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-indigo-100 sm:text-center lg:mx-0 lg:text-left">
            2023 is going to be a wild ride that you're not going to want to
            miss. I'll be writing about my journey, and releasing new projects.
            Stay in the loop by subscribing to my newsletter.
          </p>
        </div>
        <div className="mt-12 sm:mx-auto sm:w-full sm:max-w-md sm:text-center lg:mt-0 lg:ml-8 lg:flex-1 lg:text-right">
          <form className="sm:flex" onSubmit={(e) => submitNewsletter(e)}>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="youre@awesome.com"
              autoComplete="email"
              required
              className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
            />
            <button
              type="submit"
              className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Sign me up!
            </button>
          </form>
          <p className="mt-3 text-sm text-indigo-100">
            I'll never share your email address with anyone else.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
