import { defineField } from "sanity";

const review = {
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hotelRoom",
      title: "Hotel Room",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(1000),
      description: "Write your detailed review (10-1000 characters)",
    }),
    defineField({
      name: "userRating",
      title: "User Rating",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
      description: "Rate from 1 (poor) to 5 (excellent)",
    }),
    defineField({
      name: "title",
      title: "Review Title",
      type: "string",
      validation: (Rule) => Rule.max(100),
      description: "Optional short title for your review",
    }),
    defineField({
      name: "isApproved",
      title: "Is Approved",
      type: "boolean",
      initialValue: true,
      description: "Admin approval for public display",
    }),
    defineField({
      name: "helpfulVotes",
      title: "Helpful Votes",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "user.name",
      rating: "userRating",
      room: "hotelRoom.name",
    },
    prepare(selection: any) {
      const { title, subtitle, rating, room } = selection;
      const stars = "⭐".repeat(rating || 0);
      return {
        title: title || `Review for ${room || "Unknown Room"}`,
        subtitle: `${subtitle || "Anonymous"} - ${stars} (${rating || 0}/5)`,
      };
    },
  },
};

export default review;
