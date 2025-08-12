import { defineField } from "sanity";

const session = {
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    defineField({
      name: "sessionToken",
      title: "Session Token",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "userId",
      title: "User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "expires",
      title: "Expires",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "sessionToken",
      subtitle: "userId",
      expires: "expires",
    },
    prepare(selection: any) {
      const { title, subtitle, expires } = selection;
      return {
        title: `Session: ${title?.substring(0, 20)}...`,
        subtitle: `User: ${subtitle} - Expires: ${new Date(expires).toLocaleDateString()}`,
      };
    },
  },
};

export default session;
