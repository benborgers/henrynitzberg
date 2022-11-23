import Link from "next/link";
import Prose from "../Prose";
import ContactForm from "./ContactForm";
import XIcon from "../XIcon";

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
          <Prose html={basics.contact} />
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
