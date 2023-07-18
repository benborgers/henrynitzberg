"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-8">
        <p className="text-white font-bold">
          Sent! Thank you for your message.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const data: { [key: string]: string } = {};
        form.querySelectorAll("input, textarea").forEach((_el) => {
          const el = _el as HTMLInputElement | HTMLTextAreaElement;
          data[el.name] = el.value;
        });

        setSubmitted(true);

        fetch("https://neptune.ooo/contact-henry-nitzberg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((json) => {
            if (!json.success) {
              alert("Something went wrong.");
            }
          })
          .catch(() => {
            alert("Something went wrong.");
          });
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
          name="email"
          id="email"
          type="email"
          required
          className="mt-1 rounded-lg bg-gray-800 border-gray-700 w-full focus:ring-0 focus:border-gray-500 transition-colors text-gray-50"
        />
      </div>

      <div>
        <label
          htmlFor="body"
          className="block text-gray-500 text-sm font-medium"
        >
          What’re you looking to have commissioned?
        </label>
        <textarea
          name="body"
          id="body"
          required
          className="mt-1 rounded-lg bg-gray-800 border-gray-700 w-full focus:ring-0 focus:border-gray-500 transition-colors text-gray-50 h-48 resize-none"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button className="bg-gray-800 hover:bg-gray-700 transition-colors px-3 py-2 rounded-lg text-gray-50 font-medium">
          Send Message
        </button>
      </div>
    </form>
  );
}
