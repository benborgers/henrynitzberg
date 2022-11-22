import BaseHead from "../BaseHead";
import getPortfolioEntry from "./getPortfolioEntry";

export default async function Head({ params }: { params: { slug: string } }) {
  const entry = await getPortfolioEntry(params.slug);

  return <BaseHead title={entry?.name} />;
}
