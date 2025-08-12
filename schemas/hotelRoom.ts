import { defineField } from "sanity";

const roomTypes = [
  { title: "Basic", value: "basic" },
  { title: "Luxury", value: "luxury" },
  { title: "Suite", value: "suite" },
];

const commonAmenities = [
  { icon: "🛏️", amenity: "King Size Bed" },
  { icon: "📺", amenity: "Smart TV" },
  { icon: "🌐", amenity: "Free WiFi" },
  { icon: "❄️", amenity: "Air Conditioning" },
  { icon: "🛁", amenity: "Private Bathroom" },
  { icon: "☕", amenity: "Coffee Maker" },
  { icon: "🧊", amenity: "Mini Fridge" },
  { icon: "🏊", amenity: "Pool Access" },
  { icon: "🍽️", amenity: "Room Service" },
  { icon: "🚗", amenity: "Valet Parking" },
  { icon: "🧘", amenity: "Spa Access" },
  { icon: "💼", amenity: "Work Desk" },
];

const hotelRoom = {
  name: "hotelRoom",
  title: "Hotel Room",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(50).error("Maximum 50 Characters"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required().min(100).error("Minimum 100 Characters"),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "External image URL",
            },
            {
              name: "file",
              title: "File",
              type: "file",
              description: "Upload image file",
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for accessibility",
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(10)
          .error("Minimum 3 images, maximum 10 images"),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        {
          name: "url",
          title: "URL",
          type: "url",
          description: "External image URL",
        },
        {
          name: "file",
          title: "File",
          type: "file",
          description: "Upload image file",
        },
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for accessibility",
          initialValue: "Hotel room cover image",
        },
      ],
      validation: (Rule) => Rule.required().error("Cover Image is required"),
    }),
    defineField({
      name: "type",
      title: "Room Type",
      type: "string",
      options: {
        list: roomTypes,
      },
      initialValue: "basic",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialNote",
      title: "Special Note",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.",
    }),
    defineField({
      name: "dimension",
      title: "Dimension",
      type: "string",
    }),
    defineField({
      name: "numberOfBeds",
      title: "Number Of Beds",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "offeredAmenities",
      title: "Offered Amenities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: commonAmenities.map((item) => ({
                  title: `${item.icon} ${item.amenity}`,
                  value: item.icon,
                })),
              },
            },
            {
              name: "amenity",
              title: "Amenity",
              type: "string",
              options: {
                list: commonAmenities.map((item) => ({
                  title: item.amenity,
                  value: item.amenity,
                })),
              },
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.min(3).error("Please add at least 3 amenities"),
    }),
    defineField({
      name: "isBooked",
      title: "Is Booked",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isFeatured",
      title: "Is Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    }),
  ],
};

export default hotelRoom;
