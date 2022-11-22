import PortfolioEntryType from "../portfolio_entry";

export default async function getPortfolioEntry(slug: string) {
  const portfolio: PortfolioEntryType[] = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/portfolio.json")
  ).json();

  return portfolio.find((entry) => entry.id.toString() === slug);
}
