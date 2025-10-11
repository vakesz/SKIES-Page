---
title: "Changelog"
description: "Version history and release notes"
weight: 3
---

# Changelog

All notable changes to SKIES Mobile are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Latest Release

### [0.3.0] - 2025-10-09 - Public Beta Release

Welcome to SKIES Mobile 0.3.0! This major update brings intelligent content summaries, extensive customization options, and numerous improvements.

#### What's New

**AI-Powered Summaries (iOS 26+)**
- Generate quick summaries of posts and activities with on-device Apple Intelligence
- Long-press any post or activity and select "Generate Summary"
- Enable auto-summaries in settings to automatically generate summaries for new content
- All processing happens on your device - your privacy is protected
- Requires iOS/iPadOS 18.2+ or macOS 15.2+ with Apple Intelligence support

**Customizable Content Display**
- Control post title formatting: original, uppercase, or sentence case
- Adjust post description preview length (1-10 lines)
- Toggle images in post previews
- Customize activity titles with the same formatting options
- Hide join/leave buttons on activity cards

**Improved Link Handling**
- Links from web portal now automatically open in the app
- Fixed deep linking - tapping skiesmobile:// links properly opens specific content
- Web links in markdown content intelligently converted to open in-app

**Better Sharing**
- Share posts and activities with proper titles, descriptions, and web links
- Improved share sheet experience with rich content previews

#### Improvements

**Smarter Caching**
- Profile photos cache properly with 24-hour refresh
- Activity details cached and stay up-to-date
- Automatic cache validation and repair
- Fixed AI summaries regenerating after every refresh

**User Experience**
- Long-press activities to view participant lists
- Improved markdown rendering
- Enhanced navigation with better touch targets
- Consistent haptic feedback

**Performance & Reliability**
- Reduced battery usage from AI summary generation
- Improved cache management prevents data corruption
- More reliable offline mode
- Better error handling and stability

#### Bug Fixes

- Fixed deep links not opening specific content
- Fixed share action to include full web URLs
- Fixed offline cache restoration issues
- Fixed AI summaries being lost after app refresh
- Fixed dark mode color consistency
- Resolved user photos being refetched unnecessarily

## Recent Releases

### [0.2.12] - 2025-10-08
- AI Summary Persistence fixes
- Improved summarization prompts
- Dark mode UI consistency fixes

### [0.2.11] - 2025-10-08
- Apple Intelligence support for iOS 26+
- AI summary settings improvements
- Code refactoring and architecture improvements

### [0.2.10] - 2025-10-06
- Summary generation fixes
- Hotfix release

### [0.2.9] - 2025-10-06
- Post summary generation services
- Activity participants context menu
- Deep link fixes

### [0.2.8] - 2025-10-05
- Post & activity settings
- Sharing improvements
- Caching enhancements
- Markdown improvements

## Earlier Versions

### [0.2.7] - 2025-10-03
- User caching system
- Birthday cache improvements
- Project configuration centralization
- Enhanced logging infrastructure

### [0.2.6] - 2024-12-05
- Like & comment management
- Enhanced error handling
- UI improvements

### [0.2.5] - 2024-11-29
- Contact view
- Documentation system
- Cache enhancements

### [0.2.4] - 2024-10-28
- Activity subscription UX improvements
- UI state management

### [0.2.3] - 2024-09-28
- Accessibility presets
- Typography scaling
- Caching overhaul

### [0.2.2] - 2024-09-27
- Activity participants
- Pull-to-refresh improvements

### [0.2.1] - 2024-09-26
- User profiles
- Activity participants service

### [0.2.0] - 2024-09-26
- Demo Mode
- Asset management

### [0.1.3] - 2024-09-24
- Security & user experience improvements
- Jailbreak detection
- MVVM architecture refactor

### [0.1.2] - 2024-09-23
- Tuist support
- Site models
- CI improvements

### [0.1.1] - 2024-09-22
- Attachment system
- Native markdown
- App theming

### [0.1.0] - 2024-09-21
- Calendar integration
- Birthday celebrations
- Activity subscriptions

### [0.0.16] - 2024-09-20
- iPad support
- Language management
- Theming improvements

### [0.0.14] - 2024-09-19
- Design system
- Grouped list styling
- Dark mode fixes

### [0.0.13] - 2024-09-19
- Localization improvements
- App icons

### [0.0.12] - 2024-09-19
- Silent authentication
- Enhanced date support
- Background operations fixes

### [0.0.11] - 2024-09-18
- Profile improvements
- Activity encoding
- GIF playback fixes

### [0.0.10] - 2024-09-17
- Comment system overhaul
- Shared comments architecture

### [0.0.9] - 2024-09-16
- Critical bug fixes
- Crash prevention
- Authentication improvements

### [0.0.8] - 2024-09-15
- Device compliance
- Two-stage authentication

### [0.0.7] - 2024-09-14
- Social features
- Like system
- Toast notifications

### [0.0.6] - 2024-09-13
- Image processing
- Performance improvements

### [0.0.5] - 2024-09-12
- API client enhancements
- View model improvements

### [0.0.4] - 2024-09-11
- Bug fixes
- Performance optimizations

### [0.0.3] - 2024-09-10
- Core feature implementation
- Posts & activities
- Authentication

### [0.0.2] - 2024-09-05
- Project setup
- Build system

### [0.0.1] - 2024-08-30
- Initial development
- Repository creation
- Architecture foundation

## Full Changelog

For detailed technical changes and complete version history, please refer to the [full CHANGELOG.md](https://github.com/vakesz/Skies-iOS/blob/master/CHANGELOG.md) on GitHub.

## Version Compatibility

| Version | Min iOS | Xcode | Swift |
|---------|---------|-------|-------|
| 0.3.0   | 18.0    | 16.0  | 6.1.2 |
| 0.2.x   | 18.0    | 16.0  | 6.1.2 |
| 0.1.x   | 18.0    | 16.0  | 6.1.2 |
| 0.0.x   | 18.0    | 16.0  | 6.1.2 |

## Upgrade Notes

### From 0.2.x to 0.3.0

- No breaking changes
- AI features require iOS 26+ (18.2+ beta) with Apple Intelligence
- All other features work on iOS 18.0+

## Feedback

Found an issue with a release? Please:

1. Check [known issues](/issues/)
2. Report on [GitHub Issues](https://github.com/vakesz/Skies-iOS/issues)
3. Email [hello@vakesz.com](mailto:hello@vakesz.com)

## Stay Updated

- Watch the [GitHub repository](https://github.com/vakesz/Skies-iOS) for release notifications
- Follow release announcements in the app
- Check this page for the latest changes
