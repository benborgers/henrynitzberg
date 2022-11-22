"use client";

export default function ContactForm() {
  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Oops, this form doesn’t work yet.");
      }}
    >
      <div>
        <label
          htmlFor="email"
          className="block text-gray-500 text-sm font-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 rounded-lg bg-gray-800 border-gray-700 w-full focus:ring-0 focus:border-gray-500 transition-colors text-gray-50"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-gray-500 text-sm font-medium"
        >
          What’re you looking to have commissioned?
        </label>
        <textarea className="mt-1 rounded-lg bg-gray-800 border-gray-700 w-full focus:ring-0 focus:border-gray-500 transition-colors text-gray-50 h-48 resize-none"></textarea>
      </div>

      <div className="flex justify-end">
        <button className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-2 rounded-lg text-gray-50 font-medium">
          Send Message
        </button>
      </div>
    </form>
  );
}
