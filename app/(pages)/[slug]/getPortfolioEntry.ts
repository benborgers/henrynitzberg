import { createReader } from "@keystatic/core/reader";
import PortfolioEntry from "../portfolio_entry";
import config from "../../../keystatic.config";

const reader = createReader(process.cwd(), config);

export default async function getPortfolioEntry(slug: string) {
  const order = (await reader.singletons.portfolioOrder.read())!.order;

  const portfolio: PortfolioEntry[] = [];

  for (const slug of order) {
    const item = await reader.collections.portfolio.read(slug!);
    if (item !== null && slug !== null && item.image !== null) {
      portfolio.push({
        ...item,
        slug,
        image: item.image,
        caption: await item.caption(),
      });
    }
  }

  return portfolio.find((entry) => entry.slug.toString() === slug);
}
