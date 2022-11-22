import { notFound } from "next/navigation";
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
    <div className="p-8">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src={entry.image}
        alt={entry.name}
        className="object-contain rounded-xl block max-h-[calc(100vh-4rem)] max-w-[calc(100vh-4rem)] mx-auto"
      />
    </div>
  );
}
