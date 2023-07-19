import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";
import PortfolioEntry from "./portfolio_entry";

const reader = createReader(process.cwd(), config);

export const getPortfolio = async () => {
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

  return portfolio;
};
