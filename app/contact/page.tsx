import Link from "next/link";
import SuperadminText from "../SuperadminText";
import ContactForm from "./ContactForm";

export default async function Contact() {
  const basics = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/basics.json")
  ).json();

  return (
    <div className="p-2 sm:p-6 sm:min-h-screen grid sm:place-items-center">
      <div className="bg-gray-900 border border-gray-800 max-w-md w-full mx-auto p-4 pb-5 rounded-lg mb-12">
        <div className="flex justify-end">
          <Link
            href="/"
            className="bg-gray-800 hover:bg-gray-700 transition-colors h-7 w-7 rounded-full grid place-items-center"
          >
            <XIcon className="h-5 w-5 text-gray-400" />
          </Link>
        </div>

        <div className="mt-4">
          <SuperadminText text={basics.contact} />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function XIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}
