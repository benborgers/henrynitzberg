const TITLE = "Henry Nitzberg";

export default function BaseHead({ title = undefined }: { title?: string }) {
  return (
    <>
      <title>{title ? title + " - " + TITLE : TITLE}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="" />
      <link rel="icon" href="https://emojicdn.elk.sh/✨" />
    </>
  );
}
