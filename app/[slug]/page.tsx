import Link from "next/link";
import { notFound } from "next/navigation";
import cdn from "../cdn";
import XIcon from "../XIcon";
import getPortfolioEntry from "./getPortfolioEntry";

export default async function PortfolioEntry({
  params,
}: {
  params: { slug: string };
}) {
  const entry = await getPortfolioEntry(params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Link
          href="/"
          className="bg-gray-800 hover:bg-gray-700 transition-colors h-7 w-7 rounded-full grid place-items-center"
        >
          <XIcon className="h-5 w-5 text-gray-400" />
        </Link>
      </div>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={cdn(entry.image, 2000)}
        alt={entry.name}
        className="object-contain rounded-xl block max-h-[calc(100vh-5rem)] max-w-[calc(100vw-2rem)] mx-auto"
      />
    </div>
  );
}
