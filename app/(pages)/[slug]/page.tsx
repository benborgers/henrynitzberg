import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import classNames from "classnames";
import cdn from "../cdn";
import Prose from "../Prose";
import XIcon from "../XIcon";
import PortfolioEntry from "../portfolio_entry";
import { getPortfolio } from "../getPortfolio";

const getPortfolioEntry = async (slug: string) => {
  const portfolio = await getPortfolio();
  return portfolio.find((entry) => entry.slug.toString() === slug);
};

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const entry = await getPortfolioEntry(params.slug);
  return {
    title: `${entry?.name} - Henry Nitzberg`,
    icons: {
      shortcut: "/favicon.png",
    },
  };
}

export default async function PortfolioEntry({ params }: { params: Params }) {
  const entry = await getPortfolioEntry(params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="p-4 sm:p-6 h-screen grid grid-rows-[max-content,1fr] gap-y-2">
      <div className="flex justify-end">
        <Link
          href="/"
          className="bg-gray-800 hover:bg-gray-700 transition-colors h-7 w-7 rounded-full grid place-items-center"
        >
          <XIcon className="h-5 w-5 text-gray-400" />
        </Link>
      </div>

      <div
        className={classNames("self-center", {
          "grid md:grid-cols-[max-content,1fr] gap-x-6 gap-y-4 items-end":
            entry.caption,
          "justify-self-center": !entry.caption,
        })}
      >
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={cdn(entry.image, 2000)}
          alt={entry.name}
          className={classNames(
            "object-contain rounded-xl max-h-[calc(100vh-5rem)]",
            {
              "md:max-w-[calc(100vw-3rem-1.5rem-250px)]": entry.caption,
              "max-w-[calc(100vw-3rem)]": !entry.caption,
            }
          )}
        />
        <div className="md:max-w-[250px]">
          {entry.caption && <Prose document={entry.caption} />}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const portfolio = await getPortfolio();
  return portfolio.map((item) => ({
    slug: item.slug,
  }));
}
