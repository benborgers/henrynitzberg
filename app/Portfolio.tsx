"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Portfolio() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="1.5rem">
        <img src="https://source.unsplash.com/random/400x200" />
        <img src="https://source.unsplash.com/random/500x1000" />
        <img src="https://source.unsplash.com/random/300x490" />
        <img src="https://source.unsplash.com/random/300x490" />
        <img src="https://source.unsplash.com/random/400x200" />
        <img src="https://source.unsplash.com/random/500x1000" />
        <img src="https://source.unsplash.com/random/500x1000" />
        <img src="https://source.unsplash.com/random/400x200" />
        <img src="https://source.unsplash.com/random/300x490" />
      </Masonry>
    </ResponsiveMasonry>
  );
}
