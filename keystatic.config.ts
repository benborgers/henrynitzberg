import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "benborgers/henrynitzberg",
  },
  singletons: {
    basics: singleton({
      label: "Site Basics",
      schema: {
        image: fields.file({
          label: "Image",
          directory: "public/uploads",
          publicPath: "/uploads",
        }),
        bio: fields.document({
          label: "Bio",
          formatting: true,
          links: true,
        }),
        contact: fields.document({
          label: "Contact Text",
          formatting: true,
          links: true,
        }),
      },
    }),
    portfolioOrder: singleton({
      label: "Portfolio order",
      schema: {
        order: fields.array(
          fields.relationship({
            label: "Portfolio piece",
            collection: "portfolio",
          }),
          {
            label: "Order",
            description:
              "Only portfolio pieces placed in order here will show on the website.",
            itemLabel: (props) => props.value ?? "",
          }
        ),
      },
    }),
  },
  collections: {
    portfolio: collection({
      label: "Portfolio",
      slugField: "name",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        image: fields.file({
          label: "Image",
          directory: "public/uploads",
          publicPath: "/uploads",
        }),
        caption: fields.document({
          label: "Caption (optional)",
          formatting: true,
          links: true,
        }),
      },
    }),
  },
});
