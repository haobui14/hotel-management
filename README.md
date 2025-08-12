# 🏨 Luxury Hotel Management System

> A modern, full-stack hotel management application built with Next.js 15, React 19, and Sanity CMS

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38b2ac)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-3.98.0-f03e2f)](https://www.sanity.io/)

## 🚀 Live Demo

**[View Live Demo →](https://main--hotel-management-next.netlify.app)**

Experience the full hotel management system with all features including room booking, user authentication, reviews, and more!

## 🌟 Features

### 🏠 **Core Functionality**
- **Modern Hotel Booking System** - Complete reservation management
- **Room Management** - Detailed room information with amenities
- **User Authentication** - Secure login with multiple providers
- **Review System** - Customer reviews and ratings
- **Payment Integration** - Stripe payment processing
- **Admin Dashboard** - Comprehensive management interface

### 🎨 **Design & UX**
- **Luxury Theme** - Premium hotel branding with warm gradients
- **Responsive Design** - Mobile-first, works on all devices
- **Dark Mode Support** - Seamless light/dark theme switching
- **Glass Morphism** - Modern UI with backdrop blur effects
- **Smooth Animations** - Engaging micro-interactions

### 📱 **Pages & Components**
- **Home Page** - Hero section with room search
- **Rooms** - Browse and filter hotel rooms
- **Gallery** - Image showcase with lightbox
- **About** - Company information and team
- **Contact** - Contact form and location details
- **Privacy** - Privacy policy and legal compliance
- **User Profiles** - Account management with image upload

### 🔧 **Technical Features**
- **Next.js 15** - App Router with Server Components
- **TypeScript** - Full type safety
- **Sanity CMS** - Headless content management
- **NextAuth.js** - Authentication (GitHub, Google, Credentials)
- **SWR** - Data fetching and caching
- **Stripe** - Payment processing
- **Image Optimization** - Next.js Image with CDN support

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/haobui14/hotel-management.git
   cd hotel-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_STUDIO_TOKEN=your_studio_token
   
   # NextAuth
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3001
   
   # OAuth Providers
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # Stripe
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

6. **Access Sanity Studio**
   Navigate to [http://localhost:3001/studio](http://localhost:3001/studio)

## 📁 Project Structure

```
hotel-management/
├── src/
│   ├── app/
│   │   ├── (cms)/           # Sanity Studio routes
│   │   ├── (web)/           # Main website routes
│   │   └── api/             # API endpoints
│   ├── components/          # React components
│   ├── context/            # React contexts
│   ├── hooks/              # Custom hooks
│   ├── libs/               # Utility libraries
│   └── models/             # TypeScript types
├── schemas/                # Sanity CMS schemas
├── public/                 # Static assets
└── docs/                   # Documentation
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3001
npm run build        # Build for production
npm start           # Start production server on port 3001

# Code Quality
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint errors
npm run typecheck   # Run TypeScript checks
npm run check       # Run both typecheck and lint

# Maintenance
npm run clean       # Clean build cache
```

## 🏗️ Tech Stack

### **Frontend**
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.1** - UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### **Backend & CMS**
- **Sanity 3.98.0** - Headless CMS for content management
- **NextAuth.js 4.24.11** - Authentication solution
- **Stripe** - Payment processing

### **Data & State**
- **SWR 2.3.6** - Data fetching and caching
- **Axios** - HTTP client
- **React Hook Form** - Form handling

### **Utilities**
- **date-fns** - Date manipulation
- **bcryptjs** - Password hashing
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

## 🎯 Key Features Detailed

### **Room Management**
- Browse available rooms with filtering
- Detailed room information with amenities
- Image galleries with optimized loading
- Real-time availability checking

### **Booking System**
- Interactive date selection
- Guest count configuration
- Price calculation with discounts
- Stripe payment integration
- Booking confirmation emails

### **Review System**
- Customer reviews and ratings (1-5 stars)
- Review moderation (auto-approved)
- Review statistics and analytics
- Helpful votes functionality

### **User Management**
- User registration and authentication
- Profile management with image upload
- Booking history and analytics
- Admin user capabilities

### **Content Management**
- Sanity Studio integration
- Image optimization and CDN
- Content versioning and drafts
- Real-time content updates

## 🔧 Configuration

### **Sanity Setup**
1. Create a new Sanity project at [sanity.io](https://www.sanity.io)
2. Configure your project ID and dataset
3. Set up authentication tokens
4. Import the schemas from the `schemas/` directory

### **Stripe Setup**
1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Configure webhook endpoints for payment processing
4. Set up your product catalog

### **OAuth Setup**
1. **GitHub OAuth**: Create an app at [GitHub Developer Settings](https://github.com/settings/developers)
2. **Google OAuth**: Set up OAuth at [Google Cloud Console](https://console.cloud.google.com)

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic builds

### **Other Platforms**
The app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- AWS
- Digital Ocean

## 📖 Documentation

- **[Sanity Setup Guide](./docs/SANITY_SETUP.md)** - Complete CMS configuration
- **[API Documentation](./docs/API.md)** - API endpoints and usage
- **[Component Guide](./docs/COMPONENTS.md)** - Component documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hao Bui** - [GitHub](https://github.com/haobui14)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Sanity.io for the flexible CMS
- Tailwind CSS for the utility-first approach
- Stripe for seamless payment processing

---

<div align="center">
  <p>Made with ❤️ for luxury hospitality experiences</p>
</div>
