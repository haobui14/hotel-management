# 🧩 Component Documentation

This guide covers all reusable components in the Hotel Management System.

## 📁 Component Structure

```
src/components/
├── AuthProvider/          # Authentication context
├── BackDrop/             # Modal backdrop overlay
├── BookRoomCta/          # Call-to-action booking button
├── Chart/                # Analytics charts
├── CountUpNumber/        # Animated number counter
├── FeaturedRoom/         # Highlighted room display
├── Footer/               # Site footer
├── Gallery/              # Image gallery with lightbox
├── Header/               # Navigation header
├── HeroSection/          # Landing page hero
├── HotelPhotoGallery/    # Room photo slideshow
├── NewsLetter/           # Newsletter signup
├── PageSearch/           # Search functionality
├── Rating/               # Star rating display
├── RatingModal/          # Review submission modal
├── RoomCard/             # Room preview card
├── RoomReview/           # Review display
├── Search/               # Room search filters
├── Table/                # Data table component
├── ThemeProvider/        # Dark/light theme context
└── Toast/                # Notification toasts
```

---

## 🔐 Authentication Components

### AuthProvider
**Purpose**: Provides authentication context throughout the app

**Usage:**
```tsx
import { AuthProvider } from '@/components/AuthProvider/AuthProvider';

<AuthProvider>
  <App />
</AuthProvider>
```

**Features:**
- NextAuth.js session management
- User state persistence
- Authentication guards

---

## 🏠 Layout Components

### Header
**Purpose**: Main navigation with authentication controls

**Usage:**
```tsx
import Header from '@/components/Header/Header';

<Header />
```

**Features:**
- Responsive navigation menu
- User profile dropdown
- Theme toggle
- Authentication status display
- Mobile hamburger menu

**Props:**
```typescript
interface HeaderProps {
  // No props - uses global state
}
```

### Footer
**Purpose**: Site footer with links and information

**Usage:**
```tsx
import Footer from '@/components/Footer/Footer';

<Footer />
```

**Features:**
- Contact information
- Social media links
- Newsletter signup
- Responsive layout

---

## 🏨 Room Components

### RoomCard
**Purpose**: Displays room preview in listings

**Usage:**
```tsx
import RoomCard from '@/components/RoomCard/RoomCard';

<RoomCard room={roomData} />
```

**Props:**
```typescript
interface RoomCardProps {
  room: Room;
}

interface Room {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount?: number;
  coverImage: {
    url: string;
    alt?: string;
  };
  type: string;
  dimension: string;
  numberOfBeds: number;
  isBooked: boolean;
  isFeatured: boolean;
}
```

**Features:**
- Hover animations
- Price display with discounts
- Quick booking link
- Featured room badge

### FeaturedRoom
**Purpose**: Highlights a special room offer

**Usage:**
```tsx
import FeaturedRoom from '@/components/FeaturedRoom/FeaturedRoom';

<FeaturedRoom featuredRoom={roomData} />
```

**Features:**
- Large image display
- Prominent call-to-action
- Discount highlighting
- Responsive design

### HotelPhotoGallery
**Purpose**: Interactive room photo slideshow

**Usage:**
```tsx
import HotelPhotoGallery from '@/components/HotelPhotoGallery/HotelPhotoGallery';

<HotelPhotoGallery photos={photoArray} />
```

**Props:**
```typescript
interface HotelPhotoGalleryProps {
  photos: {
    _key: string;
    url: string;
    alt?: string;
  }[];
}
```

**Features:**
- Swipe navigation
- Thumbnail preview
- Keyboard navigation
- Responsive layout

---

## 🔍 Search Components

### Search
**Purpose**: Advanced room search with filters

**Usage:**
```tsx
import Search from '@/components/Search/Search';

<Search 
  roomTypeFilter={roomType}
  searchQuery={query}
/>
```

**Props:**
```typescript
interface SearchProps {
  roomTypeFilter: string;
  searchQuery: string;
}
```

**Features:**
- Date range picker
- Guest count selector
- Room type filter
- Price range slider
- Real-time filtering

### PageSearch
**Purpose**: Simple search input for the homepage

**Usage:**
```tsx
import PageSearch from '@/components/PageSearch/PageSearch';

<PageSearch />
```

**Features:**
- Auto-complete suggestions
- Search history
- Mobile-optimized

---

## ⭐ Review Components

### RoomReview
**Purpose**: Displays customer reviews and ratings

**Usage:**
```tsx
import RoomReview from '@/components/RoomReview/RoomReview';

<RoomReview roomId={roomId} />
```

**Props:**
```typescript
interface RoomReviewProps {
  roomId: string;
}
```

**Features:**
- Star ratings display
- User avatars
- Timestamp formatting
- Pagination support
- Loading states

### Rating
**Purpose**: Interactive star rating component

**Usage:**
```tsx
import Rating from '@/components/Rating/Rating';

<Rating 
  rating={4.5} 
  ratingCount={23}
  isChangeable={false}
/>
```

**Props:**
```typescript
interface RatingProps {
  rating: number;
  ratingCount?: number;
  isChangeable?: boolean;
  onChange?: (rating: number) => void;
}
```

**Features:**
- Half-star support
- Interactive vs. display modes
- Accessibility support
- Custom styling

### RatingModal
**Purpose**: Modal for submitting reviews

**Usage:**
```tsx
import RatingModal from '@/components/RatingModal/RatingModal';

<RatingModal
  isOpen={isModalOpen}
  ratingValue={rating}
  setRatingValue={setRating}
  ratingText={reviewText}
  setRatingText={setReviewText}
  isOkDisabled={!isValid}
  reviewSubmitHandler={handleSubmit}
  toggleRatingModal={toggleModal}
/>
```

**Features:**
- Form validation
- Character counter
- Rating selection
- Error handling

---

## 🎨 UI Components

### BackDrop
**Purpose**: Modal backdrop overlay

**Usage:**
```tsx
import BackDrop from '@/components/BackDrop/BackDrop';

<BackDrop onClick={closeModal} />
```

**Features:**
- Click-to-close
- Smooth animations
- Accessibility support

### CountUpNumber
**Purpose**: Animated number counter

**Usage:**
```tsx
import CountUpNumber from '@/components/CountUpNumber/CountUpNumber';

<CountUpNumber 
  endValue={1234} 
  duration={2000}
  suffix="+"
/>
```

**Props:**
```typescript
interface CountUpNumberProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}
```

**Features:**
- Smooth animation
- Custom duration
- Prefix/suffix support
- Intersection observer

### Toast
**Purpose**: Notification toasts

**Usage:**
```tsx
import { toast } from 'react-hot-toast';

// Success toast
toast.success('Booking confirmed!');

// Error toast
toast.error('Something went wrong');

// Custom toast
toast.custom(<CustomToast />);
```

**Features:**
- Multiple toast types
- Auto-dismiss
- Custom positioning
- Action buttons

---

## 📊 Data Components

### Table
**Purpose**: Sortable data table

**Usage:**
```tsx
import Table from '@/components/Table/Table';

<Table
  tableData={bookingData}
  tableHeaders={headers}
/>
```

**Props:**
```typescript
interface TableProps {
  tableData: any[];
  tableHeaders: string[];
}
```

**Features:**
- Sortable columns
- Pagination
- Search filtering
- Responsive design

### Chart
**Purpose**: Analytics charts

**Usage:**
```tsx
import Chart from '@/components/Chart/Chart';

<Chart 
  data={chartData}
  type="line"
/>
```

**Features:**
- Multiple chart types
- Interactive tooltips
- Responsive design
- Export functionality

---

## 🎭 Theme Components

### ThemeProvider
**Purpose**: Dark/light theme management

**Usage:**
```tsx
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';

<ThemeProvider>
  <App />
</ThemeProvider>
```

**Features:**
- System preference detection
- Smooth theme transitions
- Persistence across sessions
- Context-based state management

---

## 🖼️ Media Components

### Gallery
**Purpose**: Image gallery with lightbox

**Usage:**
```tsx
import Gallery from '@/components/Gallery/Gallery';

<Gallery images={imageArray} />
```

**Props:**
```typescript
interface GalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}
```

**Features:**
- Lightbox overlay
- Zoom functionality
- Navigation controls
- Keyboard shortcuts
- Touch gestures

---

## 📝 Form Components

### BookRoomCta
**Purpose**: Room booking call-to-action

**Usage:**
```tsx
import BookRoomCta from '@/components/BookRoomCta/BookRoomCta';

<BookRoomCta 
  price={299}
  discount={10}
  specialNote="Early bird special"
/>
```

**Features:**
- Price calculation
- Availability checking
- Booking form integration
- Special offers display

### NewsLetter
**Purpose**: Newsletter subscription form

**Usage:**
```tsx
import NewsLetter from '@/components/NewsLetter/NewsLetter';

<NewsLetter />
```

**Features:**
- Email validation
- Subscription tracking
- Success/error states
- GDPR compliance

---

## 🏠 Hero Components

### HeroSection
**Purpose**: Landing page hero section

**Files:**
- `HeroSection.tsx` - Main component
- `ClientComponent.tsx` - Client-side interactions  
- `ServerComponent.tsx` - Server-rendered content

**Usage:**
```tsx
import HeroSection from '@/components/HeroSection/HeroSection';

<HeroSection />
```

**Features:**
- Background image carousel
- Search integration
- Responsive design
- Call-to-action buttons

---

## 🎨 Styling Guidelines

### CSS Classes
All components use Tailwind CSS with consistent patterns:

```tsx
// Container classes
className="container mx-auto px-4"

// Glass morphism effect
className="backdrop-blur-lg bg-white/10 border border-white/20"

// Gradient backgrounds
className="bg-gradient-to-r from-tertiary-dark to-tertiary-light"

// Hover effects
className="transition-all duration-300 hover:scale-105"
```

### Theme Variables
```css
:root {
  --primary: #1e40af;
  --secondary: #f59e0b;
  --tertiary-dark: #4c1d95;
  --tertiary-light: #c084fc;
}
```

---

## 🧪 Testing Components

### Unit Testing
```bash
npm run test:components
```

### Component Testing
```tsx
import { render, screen } from '@testing-library/react';
import RoomCard from '@/components/RoomCard/RoomCard';

test('renders room name', () => {
  render(<RoomCard room={mockRoom} />);
  expect(screen.getByText('Deluxe Suite')).toBeInTheDocument();
});
```

---

## 🚀 Performance Tips

1. **Lazy Loading**: Use `dynamic` imports for heavy components
2. **Memoization**: Use `React.memo` for expensive renders
3. **Image Optimization**: Always use Next.js Image component
4. **Bundle Analysis**: Check component bundle impact

---

For more information, check the main [README](../README.md) or explore the component source code.
