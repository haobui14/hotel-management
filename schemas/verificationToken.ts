import { defineField } from "sanity";

const verificationToken = {
  name: "verificationToken",
  title: "Verification Token",
  type: "document",
  fields: [
    defineField({
      name: "identifier",
      title: "Identifier",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "token",
      title: "Token",
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
};

export default verificationToken;
