"use client";

import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PortfolioEntry from "./portfolio_entry";

export default function Portfolio({
  portfolio,
}: {
  portfolio: PortfolioEntry[];
}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 800: 2, 1100: 3 }}>
      <Masonry gutter="1.5rem">
        {portfolio.map((entry) => (
          <Link key={entry.id} href={`/${entry.id}`} className="cursor-zoom-in">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={entry.image} alt={entry.name} className="rounded-lg" />
          </Link>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
