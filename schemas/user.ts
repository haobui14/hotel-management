import { defineField } from "sanity";

const user = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "emailVerified",
      title: "Email Verified",
      type: "datetime",
      description: "When the email was verified",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "url",
      description: "User profile image URL",
    }),
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "A brief description about the user",
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      hidden: true,
      description: "Hashed password (for credential login)",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "email",
      imageUrl: "image",
    },
    prepare(selection: {
      title?: string;
      subtitle?: string;
      imageUrl?: string;
    }) {
      const { title, subtitle } = selection;
      return {
        title: title || "Unnamed User",
        subtitle: subtitle || "No email",
        // Don't use media for URL strings - this was causing the createElement error
        media: undefined,
      };
    },
  },
};

export default user;
