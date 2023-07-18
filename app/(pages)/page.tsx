import classNames from "classnames";
import Prose from "./Prose";
import Portfolio from "./Portfolio";
import Button from "./Button";
import { messapiaBold } from "./fonts";
import cdn from "./cdn";

export default async function Home() {
  const basics = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/basics.json")
  ).json();

  const portfolio = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/portfolio.json")
  ).json();

  return (
    <div className="grid sm:grid-cols-[340px,1fr] sm:gap-2">
      <div className="px-4 pb-8 pt-8 sm:p-6 sm:pt-16 sm:sticky sm:top-0 w-full sm:h-screen">
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={cdn(basics.image, 200)}
          alt="Henry Nitzberg"
          className="h-28 rounded-full"
        />

        <h1
          className={classNames(
            "mt-4 text-gray-50 text-2xl font-bold",
            messapiaBold.className
          )}
        >
          Henry Nitzberg
        </h1>

        <div className="mt-4">
          <Prose html={basics.bio} />
        </div>

        <div className="mt-8 sm:mt-10">
          <Button href="/contact">Contact</Button>
        </div>
      </div>

      <div className="p-4 pb-36 sm:pt-6 sm:pr-6 sm:pl-0">
        <Portfolio portfolio={portfolio} />
      </div>
    </div>
  );
}
