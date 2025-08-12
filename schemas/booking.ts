import { defineField } from "sanity";

const bookingStatuses = [
  { title: "Pending", value: "pending" },
  { title: "Confirmed", value: "confirmed" },
  { title: "Checked In", value: "checked_in" },
  { title: "Checked Out", value: "checked_out" },
  { title: "Cancelled", value: "cancelled" },
];

const booking = {
  name: "booking",
  title: "Booking",
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
      name: "checkinDate",
      title: "Check-in Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkoutDate",
      title: "Check-out Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "numberOfDays",
      title: "Number Of Days",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "adults",
      title: "Adults",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: "children",
      title: "Children",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0).max(10),
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "status",
      title: "Booking Status",
      type: "string",
      options: {
        list: bookingStatuses,
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialRequests",
      title: "Special Requests",
      type: "text",
      description: "Any special requests from the guest",
    }),
    defineField({
      name: "bookingNotes",
      title: "Booking Notes",
      type: "text",
      description: "Internal notes for staff",
    }),
  ],

  preview: {
    select: {
      title: "hotelRoom.name",
      subtitle: "user.name",
      checkin: "checkinDate",
      status: "status",
    },
    prepare(selection: any) {
      const { title, subtitle, checkin, status } = selection;
      return {
        title: title || "Unknown Room",
        subtitle: `${subtitle || "Unknown Guest"} - ${checkin || "No date"} (${status || "unknown"})`,
      };
    },
  },
};

export default booking;
