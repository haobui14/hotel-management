import { defineField } from "sanity";

const account = {
  name: "account",
  title: "Account",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Account Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "provider",
      title: "Provider",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "providerAccountId",
      title: "Provider Account ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "refresh_token",
      title: "Refresh Token",
      type: "text",
    }),
    defineField({
      name: "access_token",
      title: "Access Token",
      type: "text",
    }),
    defineField({
      name: "expires_at",
      title: "Expires At",
      type: "number",
    }),
    defineField({
      name: "token_type",
      title: "Token Type",
      type: "string",
    }),
    defineField({
      name: "scope",
      title: "Scope",
      type: "string",
    }),
    defineField({
      name: "id_token",
      title: "ID Token",
      type: "text",
    }),
    defineField({
      name: "session_state",
      title: "Session State",
      type: "string",
    }),
    defineField({
      name: "userId",
      title: "User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default account;
