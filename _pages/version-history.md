---
layout: default
title: Version History
nav_order: 5
description: "Version history and release notes for SKIES Mobile"
permalink: /version-history/
---

## Version History

This page tracks the major and minor releases of SKIES Mobile.

---

## Version 0.4

This release is a big one packed with new features, visual polish, and long-awaited improvements.

### New Features

- Custom Color Picker - Personalize your app with your own primary color
- iCloud Sync - Your preferences, settings, and read/unread state now sync seamlessly across devices
- Notifications (finally yay!) - Get rich push notifications with images and quick-action buttons
- App Lock - Secure your app with a passcode or biometric lock
- Default Browser Setting - Choose which browser to open links with
- Badges for Unread Items - See your unread count right on the app icon
- Image Viewer - Added an enhanced image viewer to detail view and user profiles
- Custom AI system prompt - Customize how summaries are generated (experimental)
- Birthday Privacy - Birthday information shows only month and day for general users, with birth year visible only to appropriate personnel

### Redesigned Settings

Gave Settings a full makeover with cleaner layout, better organization, and more intuitive controls. Make sure to check it out to explore all the new customization options.

### Quality & Polish

- Improved image viewer (zoom + share options)
- Smoother iCloud sync for state and preferences
- General performance boosts and bug fixes
- StoreKit integration groundwork

---

## Version 0.3

Welcome to 0.3! This major update brings intelligent content summaries, extensive customization options, and numerous improvements to make your experience smoother and more personalized.

### AI-Powered Summaries (iOS 18.2+)

- Generate quick summaries of posts and activities with on-device Apple Intelligence
- Long-press any post or activity and select "Generate Summary" to get an instant overview
- Enable auto-summaries in settings to automatically generate summaries for new content
- All processing happens on your device - your privacy is protected

### Customizable Content Display

- Control how post titles appear: choose between original formatting, uppercase, or sentence case
- Adjust post description preview length (1-10 lines) to match your reading preference
- Toggle images in post previews on or off for a cleaner feed
- Customize activity titles with the same formatting options as posts
- Hide join/leave buttons on activity cards for a distraction-free view

### Improved Link Handling

- Links from web portal now automatically open in the app when tapped
- Fixed deep linking - tapping skiesmobile:// links in Safari, Messages, or notifications now properly opens the specific content
- Web links in markdown content are intelligently converted to open in-app when possible

### Better Sharing

- Share posts and activities with proper titles, descriptions, and web links
- Improved share sheet experience with rich content previews

### Smarter Caching

- Profile photos now cache properly with 24-hour refresh - no more unnecessary reloading
- Activity details are now cached and stay up-to-date across the app
- Automatic cache validation and repair keeps your offline experience smooth

---

## Version 0.2

Introduced core social features and expanded functionality. This release established the foundation for rich user interactions and content management.

### Major Features

- Social interaction features including likes and comments
- Activity subscription system with guest management
- Enhanced user profiles with detailed information
- Demo mode for testing without backend connectivity
- Attachment handling with download and sharing capabilities

### Architecture & Performance

- Implemented comprehensive caching system with offline support
- Improved data models and repository patterns
- Enhanced navigation and deep linking capabilities
- Better image loading and processing pipeline

### User Experience

- Activity participants display with avatars and capacity indicators
- Calendar integration with event export functionality
- Pull-to-refresh with haptic feedback
- Improved markdown rendering and text formatting

---

## Version 0.1

Initial release establishing the foundation of the application. This version brought the core functionality and design system to life.

### Core Features

- Authentication with Microsoft identity platform
- Posts and activities feed with real-time updates
- Comment threads on posts and activities
- User profiles and navigation

### Design System

- Modern SwiftUI interface with native components
- Dynamic theming with light and dark mode support
- Adaptive layouts for iPhone and iPad
- Consistent typography and spacing

### Infrastructure

- MVVM architecture with clean separation of concerns
- Networking layer with API client and error handling
- Secure token management and refresh flows
- Local caching and offline capabilities

---

## Future Releases

For upcoming features and planned improvements, please see the [Roadmap](/roadmap/) page.
