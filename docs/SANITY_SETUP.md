# Sanity CMS Setup Guide

## Overview

This project uses Sanity CMS as the content management system for hotel room data, bookings, reviews, and user management.

## Recent Updates (August 2025)

### ✅ Enhanced Schemas

- **Hotel Room Schema**: Added alt text for images, improved amenity selection with predefined options
- **Booking Schema**: Added booking status, special requests, booking notes, better validation
- **Review Schema**: Added review titles, approval system, helpful votes, enhanced preview
- **All Schemas**: Better validation, descriptions, and preview functionality

### ✅ Updated Configuration

- **API Version**: Updated to 2025-01-01 (latest)
- **Studio Structure**: Organized content with custom navigation
- **Better Previews**: Enhanced document previews in Studio

### ✅ New Utilities (`src/libs/sanityUtils.ts`)

- Image URL helpers with optimization
- CRUD operations for bookings and reviews
- Room availability validation
- Search and filter functionality
- Admin helpers for approval workflows

### ✅ Enhanced Queries (`src/libs/sanityQueries.ts`)

- Added admin dashboard statistics
- Enhanced room queries with ratings and review counts
- Improved booking queries with status and details
- Review queries with approval filtering

## Sanity Studio Access

- **Local Studio**: http://localhost:3000/studio
- **Production Studio**: https://your-domain.com/studio

## Schema Structure

### 🏨 Hotel Room

- Basic information (name, description, price, discount)
- Images with alt text for accessibility
- Room type (Basic, Luxury, Suite)
- Amenities with predefined options
- Booking status and featured flag

### 📅 Booking

- User and room references
- Check-in/out dates with validation
- Guest count (adults/children)
- Booking status workflow
- Special requests and internal notes

### ⭐ Review

- Rating system (1-5 stars)
- Review text with title
- Approval workflow for moderation
- Helpful votes functionality

### 👤 User & Authentication

- User profiles with admin flags
- NextAuth integration
- Account and verification token schemas

## Key Features

### 🎯 Admin Features

- Booking status management
- Review approval system
- Dashboard statistics
- Content organization

### 🔍 Search & Filter

- Room search by name/description
- Filter by room type
- Availability checking

### 📱 Responsive Images

- Optimized image delivery
- WebP format support
- Responsive sizing

## Environment Variables Required

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_TOKEN=your_studio_token
```

## Common Operations

### Creating a Booking

```javascript
import { createBooking } from "@/libs/sanityUtils";

const booking = await createBooking({
  user: { _ref: userId },
  hotelRoom: { _ref: roomId },
  checkinDate: "2025-08-15",
  checkoutDate: "2025-08-20",
  // ... other booking data
});
```

### Getting Optimized Images

```javascript
import { getOptimizedImageUrl } from "@/libs/sanityUtils";

const imageUrl = getOptimizedImageUrl(room.coverImage, 800, 600, 85);
```

### Checking Room Availability

```javascript
import { validateRoomAvailability } from "@/libs/sanityUtils";

const availability = await validateRoomAvailability(
  roomId,
  "2025-08-15",
  "2025-08-20"
);
```

## Best Practices

1. **Always use optimized images** for better performance
2. **Validate room availability** before creating bookings
3. **Use approval workflows** for user-generated content
4. **Include alt text** for all images for accessibility
5. **Use proper error handling** for all Sanity operations

## Troubleshooting

### Common Issues

1. **Missing environment variables**: Check .env.local file
2. **Image not loading**: Verify image URL structure
3. **Studio access denied**: Check project ID and dataset
4. **Query errors**: Verify schema field names

### Performance Tips

1. Use `useCdn: true` in production
2. Implement proper caching strategies
3. Use optimized image queries
4. Limit query results with pagination

## Migration Notes

- API version updated from 2024-04-09 to 2025-01-01
- New fields added to existing schemas (backward compatible)
- Enhanced validation rules (may require data cleanup)
- New utility functions available for common operations
