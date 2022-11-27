import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.revalidate("/");
  res.revalidate("/contact");

  const json = await (
    await fetch("https://superadmin.elk.sh/~henrynitzberg/portfolio.json")
  ).json();

  for (const entry of json) {
    res.revalidate(`/${entry.id}`);
  }

  res.send("OK");
}
