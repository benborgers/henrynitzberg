import { DocumentElement } from "@keystatic/core";

type PortfolioEntry = {
  name: string;
  slug: string;
  image: string;
  caption: DocumentElement[];
};

export default PortfolioEntry;
