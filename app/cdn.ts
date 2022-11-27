export default function cdn(url: string, height: number) {
  return `https://wsrv.nl?url=${encodeURIComponent(
    url
  )}&h=${height}&output=jpg`;
}
