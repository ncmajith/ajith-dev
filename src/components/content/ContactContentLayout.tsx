const ContactContentLayout = () => {
  return (
    <form className="md:w-96 sm:w-80 w-72">
      <label
        htmlFor="grid-first-name"
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
      >
        Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Name"
      />
      <label
        htmlFor="grid-email"
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
      >
        Email
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-email"
        type="text"
        placeholder="Email"
      />
      <label
        htmlFor="grid-details"
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
      >
        Details
      </label>
      <textarea
        id="grid-details"
        className="appearance-none block w-full h-40 bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      />
      <button className="mt-2 p-4 bg-black text-white dark:bg-white dark:text-black rounded-lg">
        Send
      </button>
    </form>
  );
};

export default ContactContentLayout;
