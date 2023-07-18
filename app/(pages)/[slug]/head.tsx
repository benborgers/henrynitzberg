import BaseHead from "../BaseHead";
import cdn from "../cdn";
import getPortfolioEntry from "./getPortfolioEntry";

export default async function Head({ params }: { params: { slug: string } }) {
  const entry = await getPortfolioEntry(params.slug);

  return (
    <>
      <BaseHead title={entry?.name} />
      {entry?.image && <meta name="og:image" content={cdn(entry.image, 800)} />}
    </>
  );
}
