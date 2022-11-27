import Script from "next/script";

const TITLE = "Henry Nitzberg";

export default function BaseHead({ title = undefined }: { title?: string }) {
  return (
    <>
      <title>{title ? title + " - " + TITLE : TITLE}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.png" />

      <Script
        src="https://owl.benborgers.com/script.js"
        data-site="IDHNIEZW"
        data-included-domains="henrynitzberg.com"
        data-spa="auto"
        defer
      />
    </>
  );
}
