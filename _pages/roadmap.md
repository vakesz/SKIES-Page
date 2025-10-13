---
layout: default
title: Roadmap
nav_order: 4
description: "Development roadmap for SKIES Mobile"
permalink: /roadmap/
---

## Upcoming Release 0.4

### iCloud sync (Currently in development)

- Sync user state (read/unread markers)
- Sync preferences and settings
- CloudKit integration for seamless device sync

### Rich notifications (Currently in development)

- Push notifications with images
- Action buttons in notifications
- Requires server-side push payload support
- Attachment handling in notifications

## Upcoming Release 0.5

### In-app search functionality

- Prototype local content indexing
- Implement offline search for cached content
- Add fallback to API-based search when online

### Enhanced offline caching

- Extend caching for ActivityDetails
- Define and implement cache TTL policies
- Current cache limit: 500 MB total

## Unplanned Features

### UI / UX Improvements

#### Improve image viewer

- Add zoom functionality
- Implement sharing from image viewer

#### Calendar export improvements

- Fix flaky iCal/ICS export behavior
- Revisit EventKit implementation
- Test edge cases (recurrence, timezone handling)

### Integration & System Features

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

### Personal History & Analytics - iCloud synced

#### Personal timeline of attended events

- Historical view of all past activities
- Chronological timeline with event details
- Filter by date range, activity type

#### Statistics and insights

- Activities per month tracking
- Favorite activity types analysis
- Participation trends over time
- Achievement badges (e.g., "Attended 10 events")

#### Personal content history

- Comments left on events
- Posts made by user
- Engagement history

### Smart Features & AI Integration

#### Smart Activity Recommendations

- ML-based suggestions based on attendance history
- Personalized recommendations
- Pattern recognition for preferred times/types

### Voice & Automation

#### Siri Shortcuts Integration

- "Show my upcoming activities"
- "Sign up for next yoga class"
- Voice-based navigation
- Custom shortcuts for common actions
