---
layout: default
title: Issues & Roadmap
nav_order: 3
description: "Current issues and planned features for SKIES Mobile"
permalink: /issues/
---

# Known Issues & Planned Features

This page tracks the current known issues and our roadmap for future development of SKIES Mobile.

## Current Issues (Top Priority)

### Interactions & Content

#### Unable to like posts, comments, or activities

- Missing or undocumented API endpoints
- Need to inspect web client traces and Mobile API
- Like counts are visible but interactions are disabled

#### Comments may not load correctly for activities

- Currently using posts endpoint instead of activities endpoint

### Events & Calendar

#### Events sometimes show as ongoing after end

- API lacks finish timestamps for all events
- Finish data is currently hardcoded (~4 hours from start)
- Requires backend API improvements

### Localization & UX

#### Some List dropdown menus are not scaled with Dynamic Type

- Custom menu implementation needed for full accessibility
- Standard SwiftUI menus don't respect all Dynamic Type settings

#### Some languages not fully translated

- Localization files should be reviewed and updated
- Full localization check scheduled after v1.0 release

## Planned Features

### UI / UX Improvements (Easy)

#### Improve image viewer

- Add zoom functionality
- Implement sharing from image viewer

#### Calendar export improvements

- Fix flaky iCal/ICS export behavior
- Revisit EventKit implementation
- Test edge cases (recurrence, timezone handling)

### Offline / Search / Caching (Medium)

#### Enhanced offline caching

- Extend caching for ActivityDetails
- Define and implement cache TTL policies
- Current cache limit: 500 MB total

#### In-app search functionality

- Prototype local content indexing
- Implement offline search for cached content
- Add fallback to API-based search when online

#### iCloud sync (Currently in development)

- Sync user state (read/unread markers)
- Sync preferences and settings
- CloudKit integration for seamless device sync

### Integration & System Features (Medium)

#### Safari extension

- Suggest opening SKIES Mobile for matching URLs
- Deep link support from Safari
- Small extension prototype needed

#### Widget & Live Activity support

- Decide on widget content (upcoming activities, latest posts)
- Implement read-only widget first
- Explore Live Activity for ongoing events

#### Mark items as read/unread

- iCloud sync for cross-device state

### Backend-Dependent / Larger Features

#### Add / Edit posts and activities

- Requires API write endpoints
- Permission checks and validation needed
- Content creation and editing UI

#### Waitlist support for activities

- Backend-dependent feature
- Queue management for full activities
- Notification system for waitlist status

#### Rich notifications (Currently in development)

- Push notifications with images
- Action buttons in notifications
- Requires server-side push payload support
- Attachment handling in notifications

## How to Report Issues

If you encounter any issues or have feature requests:

> Contact me at [hello@vakesz.com](mailto:hello@vakesz.com)
