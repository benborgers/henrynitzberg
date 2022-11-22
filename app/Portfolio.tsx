"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type PortfolioEntry = {
  id: number;
  image: string;
  name: string;
};

export default function Portfolio({
  portfolio,
}: {
  portfolio: PortfolioEntry[];
}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 800: 2, 1100: 3 }}>
      <Masonry gutter="1.5rem">
        {portfolio.map((entry) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={entry.id}
            src={entry.image}
            alt={entry.name}
            className="rounded-lg"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
