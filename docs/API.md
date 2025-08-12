# 🔌 API Documentation

This document outlines all API endpoints available in the Hotel Management System.

## Base URL

```
http://localhost:3001/api
```

## Authentication

Most endpoints require authentication. The system uses NextAuth.js with sessions.

### Headers
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer <session_token>"
}
```

---

## 🏨 Room Endpoints

### Get All Rooms
```http
GET /api/rooms
```

**Query Parameters:**
- `checkInDate` (optional) - ISO date string
- `checkOutDate` (optional) - ISO date string
- `adults` (optional) - Number of adults (default: 1)
- `children` (optional) - Number of children (default: 0)

**Response:**
```json
{
  "rooms": [
    {
      "_id": "room_id",
      "name": "Deluxe Ocean View",
      "slug": "deluxe-ocean-view",
      "description": "...",
      "price": 299,
      "discount": 10,
      "images": [...],
      "amenities": [...],
      "type": "Deluxe",
      "specialNote": "...",
      "dimension": "450 sq ft",
      "numberOfBeds": 1,
      "offeredAmenities": [...],
      "isBooked": false,
      "isFeatured": true,
      "coverImage": {...}
    }
  ]
}
```

### Get Room by Slug
```http
GET /api/rooms/[slug]
```

**Response:**
```json
{
  "room": {
    "_id": "room_id",
    "name": "Deluxe Ocean View",
    "slug": "deluxe-ocean-view",
    "description": "...",
    "price": 299,
    "discount": 10,
    "images": [...],
    "amenities": [...],
    "type": "Deluxe",
    "specialNote": "...",
    "dimension": "450 sq ft",
    "numberOfBeds": 1,
    "offeredAmenities": [...],
    "isBooked": false,
    "isFeatured": true,
    "coverImage": {...}
  }
}
```

---

## 👤 User Endpoints

### Get User Profile
```http
GET /api/users
```

**Headers:**
- `Authorization: Bearer <token>` (required)

**Response:**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "image": "profile_image_url",
  "about": "User bio...",
  "isAdmin": false,
  "_createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Update User Profile
```http
PATCH /api/users
```

**Headers:**
- `Authorization: Bearer <token>` (required)
- `Content-Type: application/json`

**Body:**
```json
{
  "name": "Updated Name",
  "image": "new_image_url",
  "about": "Updated bio..."
}
```

**Response:**
```json
{
  "message": "User updated successfully",
  "user": {
    "_id": "user_id",
    "name": "Updated Name",
    "email": "john@example.com",
    "image": "new_image_url",
    "about": "Updated bio...",
    "isAdmin": false,
    "_createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## 📝 Review Endpoints

### Get Room Reviews
```http
GET /api/room-reviews/[roomId]
```

**Response:**
```json
{
  "reviews": [
    {
      "_id": "review_id",
      "text": "Amazing room with great amenities!",
      "userRating": 5,
      "user": {
        "name": "Jane Smith"
      },
      "_createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

### Create Room Review
```http
POST /api/room-reviews/[roomId]
```

**Headers:**
- `Authorization: Bearer <token>` (required)
- `Content-Type: application/json`

**Body:**
```json
{
  "reviewText": "Great experience!",
  "ratingValue": 5
}
```

**Response:**
```json
{
  "message": "Review created successfully",
  "review": {
    "_id": "review_id",
    "text": "Great experience!",
    "userRating": 5,
    "user": {
      "_ref": "user_id"
    }
  }
}
```

---

## 💳 Payment Endpoints

### Create Payment Intent
```http
POST /api/stripe
```

**Headers:**
- `Content-Type: application/json`

**Body:**
```json
{
  "checkinDate": "2024-02-01",
  "checkoutDate": "2024-02-03",
  "adults": 2,
  "children": 0,
  "numberOfDays": 2,
  "hotelRoomSlug": "deluxe-ocean-view",
  "discount": 10
}
```

**Response:**
```json
{
  "paymentIntent": {
    "id": "pi_1234567890",
    "client_secret": "pi_1234567890_secret_1234",
    "amount": 53820,
    "currency": "usd"
  },
  "totalPrice": 538.20,
  "discount": 10
}
```

---

## 🔗 Webhook Endpoints

### Stripe Webhook
```http
POST /api/webhooks
```

Handles Stripe webhook events for payment processing.

**Headers:**
- `stripe-signature: <signature>` (required)

---

## 🔐 Authentication Endpoints

### NextAuth Endpoints
```http
GET/POST /api/auth/[...nextauth]
```

Handles all NextAuth.js authentication flows:
- `/api/auth/signin` - Sign in page
- `/api/auth/signout` - Sign out
- `/api/auth/session` - Get current session
- `/api/auth/csrf` - CSRF token
- `/api/auth/providers` - Available providers

### Custom Sign Up
```http
POST /api/sanity/signUp
```

**Body:**
```json
{
  "email": "user@example.com",
  "name": "User Name",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "_id": "user_id",
    "email": "user@example.com",
    "name": "User Name",
    "isAdmin": false
  }
}
```

---

## 📊 Booking Endpoints

### Get User Bookings
```http
GET /api/users/[userId]/bookings
```

**Headers:**
- `Authorization: Bearer <token>` (required)

**Response:**
```json
{
  "bookings": [
    {
      "_id": "booking_id",
      "hotelRoom": {
        "name": "Deluxe Ocean View",
        "slug": "deluxe-ocean-view",
        "price": 299
      },
      "checkinDate": "2024-02-01",
      "checkoutDate": "2024-02-03",
      "numberOfDays": 2,
      "adults": 2,
      "children": 0,
      "totalPrice": 538.20,
      "discount": 10
    }
  ]
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": "Additional error details"
}
```

### Common Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

### Authentication Errors
```json
{
  "error": "Authentication required",
  "code": "AUTH_REQUIRED"
}
```

### Validation Errors
```json
{
  "error": "Validation failed",
  "code": "VALIDATION_ERROR",
  "fields": {
    "email": "Invalid email format",
    "password": "Password must be at least 8 characters"
  }
}
```

---

## Rate Limiting

API endpoints have rate limiting to prevent abuse:

- **General endpoints**: 100 requests per 15 minutes
- **Authentication endpoints**: 10 requests per 15 minutes
- **Payment endpoints**: 20 requests per 15 minutes

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 99
X-RateLimit-Reset: 1640995200
```

---

## Testing

### Using curl
```bash
# Get all rooms
curl -X GET "http://localhost:3001/api/rooms"

# Create a review (requires auth)
curl -X POST "http://localhost:3001/api/room-reviews/room_id" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"reviewText": "Great room!", "ratingValue": 5}'
```

### Using Postman
Import our [Postman collection](./postman/hotel-management-api.json) for easy testing.

---

For more information, check the main [README](../README.md) or contact the development team.
