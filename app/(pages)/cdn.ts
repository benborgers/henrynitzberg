export default function cdn(url: string | null, height: number) {
  if (!url) {
    return "";
  }

  if (process.env.NODE_ENV === "development") {
    return url;
  }

  if (url.startsWith("/")) {
    url = `https://henrynitzberg.com${url}`;
  }

  return `https://wsrv.nl?url=${encodeURIComponent(
    url
  )}&h=${height}&output=jpg`;
}
