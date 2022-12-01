import BaseHead from "./BaseHead";

export default function Head() {
  return (
    <>
      <BaseHead />
      <meta
        property="og:image"
        content={`https://v1.screenshot.11ty.dev/${encodeURIComponent(
          "https://henrynitzberg.com"
        )}/opengraph/_${new Date().toISOString().split("T")[0]}`}
      />
    </>
  );
}
