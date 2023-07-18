// keystatic.config.ts
import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
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
  },
});
