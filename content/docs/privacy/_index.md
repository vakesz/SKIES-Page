---
title: "Privacy"
description: "How SKIES Mobile protects your privacy"
weight: 300
---

# Privacy Policy

SKIES Mobile is built with **privacy by design**. We believe in transparency and your right to understand exactly how your data is handled.

## Our Privacy Commitment

SKIES Mobile is a client-side iOS application that acts as a secure bridge between you and your organization's data. We collect only essential data for core functionality and never monetize your information.

## What We Collect

### Authentication Data

- **Microsoft Account Information**: Used for sign-in and authentication
- **Access Tokens**: Stored locally on your device in the secure keychain
- **User Profile**: Basic profile information from your organization's directory

**Storage**: All authentication data is stored locally on your device using iOS Secure Keychain.

### Content You Create

- **Posts**: News and updates you share with your organization
- **Comments**: Discussions and replies on posts and activities
- **Activities**: Events and activities you create or register for
- **Bookmarks**: Posts and activities you save for later

**Storage**: Shared with your organization through Microsoft APIs. Cached locally for offline access.

### Technical Data

- **Diagnostic Logs**: Error reports and performance metrics
- **Cache Data**: Offline copies of posts, activities, and user profiles
- **App Settings**: Your preferences for theme, notifications, and display options

**Storage**: Stored locally on your device only. Never transmitted to external servers.

### iCloud Sync (Optional)

When you enable iCloud Sync:

- Settings and preferences
- Bookmarks for posts and activities
- Reading history

**Storage**: All data is encrypted before being stored in iCloud using Apple's end-to-end encryption.

## What We Don't Do

### We Don't Store Your Data on External Servers

All data is either:
- Stored locally on your device
- Accessed directly from your organization's Microsoft services
- Synced via iCloud (if enabled, with encryption)

We don't operate any backend servers that store your content or personal information.

### We Don't Build Advertising Profiles

- No tracking pixels
- No advertising IDs
- No behavioral profiling
- No third-party advertising networks

### We Don't Sell Your Information

Your data is yours. We will never:
- Sell your personal information
- Share it with advertisers
- Use it for marketing purposes
- Monetize your activity

### We Don't Track You Across Apps or Websites

- No cross-site tracking
- No fingerprinting
- No analytics that identify you personally
- No data sharing with social media platforms

## How Your Data is Used

### Core Functionality

Your data is used exclusively for:

1. **Authentication**: Signing you in and maintaining your session
2. **Content Display**: Showing you posts, activities, and user profiles
3. **Offline Access**: Caching content for use without internet
4. **Personalization**: Applying your chosen theme and display preferences
5. **Synchronization**: Syncing your settings across devices (if enabled)

### AI Features (iOS 26+)

When you use AI-powered summaries:

- **All processing happens on your device** using Apple Intelligence
- No data is sent to external servers for AI processing
- Summaries are cached locally for performance
- You can disable auto-summaries in settings at any time

### Diagnostic Information

When you experience crashes or errors:

- Logs are generated locally on your device
- You can view logs in Settings → Support → Application Logs
- Logs are never automatically transmitted
- You can manually share logs when reporting issues

## Data Security

### Encryption

- **In Transit**: All network communication uses HTTPS/TLS encryption
- **At Rest**: Sensitive data stored using iOS Secure Keychain
- **iCloud**: End-to-end encryption for synced data

### Security Features

- **Jailbreak Detection**: Enhanced security checks (35+ detection methods)
- **Certificate Pinning**: Protection against man-in-the-middle attacks
- **Token Security**: Automatic token refresh and expiration
- **Device Compliance**: MDM enrollment detection

### Access Control

- Authentication required for all app features
- Automatic session timeout for security
- Token-based API access with proper scopes
- Permission-based content access

## Data Retention

### Local Cache

- **Posts & Activities**: Limited to 1000 posts and 500 activities
- **User Profiles**: Limited to 500 cached users
- **Total Cache Size**: Maximum 500 MB
- **Automatic Cleanup**: Old content removed when limits are reached

### Cache Expiration

- **User Photos**: 24-hour refresh cycle
- **Activity Details**: Refreshed on app launch and pull-to-refresh
- **Birthday Data**: Daily refresh with automatic cleanup after 1 month

### Manual Control

You can manually clear cache at any time:
- Settings → Cache → Clear All Cache Data
- This removes all locally stored content
- Your account remains signed in

## Third-Party Services

### Microsoft Services

SKIES Mobile integrates with:

- **Microsoft Authentication Library (MSAL)**: For secure sign-in
- **Microsoft Graph API**: For user profile information (optional)
- **Your Organization's API**: For posts, activities, and content

These services are governed by [Microsoft's Privacy Policy](https://privacy.microsoft.com/).

### Apple Services

When you enable iCloud Sync:

- Data synced via iCloud is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/)
- All data is encrypted end-to-end
- Apple cannot access your synced content

## Your Rights

You have the right to:

1. **Access Your Data**: View all locally stored data in the app
2. **Delete Your Data**: Clear cache and remove local data at any time
3. **Disable Sync**: Turn off iCloud sync in settings
4. **Export Your Data**: Access diagnostic logs and cache information
5. **Delete Your Account**: Contact your organization's administrator

## Children's Privacy

SKIES Mobile is designed for workplace use and is not directed at children under 13. We do not knowingly collect personal information from children.

## Changes to This Policy

We may update this privacy policy from time to time. Changes will be:

- Posted on this page with an updated revision date
- Announced in app release notes for significant changes
- Available in the app's About section

## Open Source

SKIES Mobile is open source. You can:

- Review the source code on [GitHub](https://github.com/vakesz/Skies-iOS)
- Verify our privacy claims
- Contribute to the project
- Report security issues

## Contact Us

If you have questions about privacy or data handling:

**Email**: [hello@vakesz.com](mailto:hello@vakesz.com)
**GitHub**: [github.com/vakesz/Skies-iOS](https://github.com/vakesz/Skies-iOS)

---

**Last Updated**: October 2024
**Version**: 1.0
