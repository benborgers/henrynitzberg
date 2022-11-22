import classNames from "classnames";
import SuperadminText from "./SuperadminText";
import Portfolio from "./Portfolio";
import { messapiaBold } from "./fonts";

export default async function Home() {
  const basics = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/basics.json")
  ).json();

  const portfolio = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/portfolio.json")
  ).json();

  return (
    <div className="grid sm:grid-cols-[340px,1fr]">
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
      </div>

      <div className="p-4 pb-24 sm:pt-6 sm:pr-6 sm:pl-0">
        <Portfolio portfolio={portfolio} />
      </div>
    </div>
  );
}
