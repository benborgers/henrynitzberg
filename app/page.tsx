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
    <div className="grid grid-cols-[340px,1fr]">
      <div className="p-6 pt-24 sticky top-0 w-full h-screen">
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

      <div className="pt-4 pr-4 sm:pt-6 sm:pr-6 pb-24">
        <Portfolio portfolio={portfolio} />
      </div>
    </div>
  );
}
