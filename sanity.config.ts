import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Luxury Hotel Management",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Hotel Management Section
            S.listItem()
              .title("Hotel Rooms")
              .child(S.documentTypeList("hotelRoom").title("Hotel Rooms")),
            S.listItem()
              .title("Bookings")
              .child(S.documentTypeList("booking").title("Bookings")),
            S.listItem()
              .title("Reviews")
              .child(S.documentTypeList("review").title("Reviews")),
            S.divider(),
            // User Management Section
            S.listItem()
              .title("Users")
              .child(S.documentTypeList("user").title("Users")),
            S.divider(),
            // Authentication Section
            S.listItem()
              .title("Authentication")
              .child(
                S.list()
                  .title("Authentication")
                  .items([
                    S.listItem()
                      .title("Accounts")
                      .child(S.documentTypeList("account").title("Accounts")),
                    S.listItem()
                      .title("Sessions")
                      .child(S.documentTypeList("session").title("Sessions")),
                    S.listItem()
                      .title("Verification Tokens")
                      .child(
                        S.documentTypeList("verificationToken").title(
                          "Verification Tokens"
                        )
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  // Studio configuration
  studio: {
    components: {
      // You can add custom studio components here
    },
  },
});
