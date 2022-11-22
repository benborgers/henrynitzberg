import classNames from "classnames";
import SuperadminText from "./SuperadminText";
import Portfolio from "./Portfolio";
import { messapiaBold } from "./fonts";
import Link from "next/link";

export default async function Home() {
  const basics = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/basics.json")
  ).json();

  const portfolio = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/portfolio.json")
  ).json();

  return (
    <div className="grid sm:grid-cols-[340px,1fr] sm:gap-2">
      <div className="p-6 pt-12 sm:pt-24 sm:sticky sm:top-0 w-full sm:h-screen">
        <h1
          className={classNames(
            "text-gray-50 text-2xl font-bold",
            messapiaBold.className
          )}
        >
          Henry Nitzberg
        </h1>

        <div className="mt-4">
          <SuperadminText text={basics.bio} />
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className={classNames(
              "block border border-gray-500 px-4 py-2 rounded-full text-gray-50 bg-gray-900",
              "hover:bg-gray-50 hover:text-gray-900 hover:border-gray-50 transition-colors duration-200",
              "font-medium text-center"
            )}
          >
            Request Commission
          </Link>
        </div>
      </div>

      <div className="p-4 pb-24 sm:pt-6 sm:pr-6 sm:pl-0">
        <Portfolio portfolio={portfolio} />
      </div>
    </div>
  );
}
