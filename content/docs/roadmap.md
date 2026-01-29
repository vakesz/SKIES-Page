---
title: "Roadmap"
description: "Development roadmap for SKIES Mobile"
summary: "This document outlines the planned features and improvements for SKIES Mobile."
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 4
toc: true
seo:
  title: "SKIES Mobile Roadmap"
  description: "Development roadmap for SKIES Mobile - planned features and improvements."
  canonical: ""
  noindex: false
---

This document outlines the planned features and improvements for SKIES Mobile. It is subject to change based on user feedback, technical feasibility, and organizational priorities.

{{< callout context="note" >}}
Version 1.0.0 is planned for release with:

- Multiple authentication providers (Sign in with Apple, Microsoft, or no authentication)
- Onboarding experience for custom tenants and public pages (configurable client ID, tenant ID, and endpoints)
- Open source release
- Squashing all bugs
- Finishing all planned features

{{< /callout >}}

## Planned Features

### Unread/All filter for feeds - Will be added in v0.7.0

- Add toggle filter to Posts page (unread/all)
- Add toggle filter to Activities page (unread/all)
- Persist filter preference across sessions

### Pinned posts support - Will be added in v0.7.0

- Display pinned posts at top of feed
- Visual indicator for pinned status
- Investigate: auto-expiration vs manual toggle behavior
- Handle pinned post ordering when multiple exist

### Global info bar

- Text-only announcement bar on website (skies.vakesz.com)
- Display global messages (e.g., open source announcement)
- Easy content updates without code changes

### Quick Actions (3D Touch / Haptic Touch) - Will be added in v0.7.0

- Long-press app icon shortcuts
- "View upcoming activities" action
- "Search" action
- "View latest posts" action

### Handoff support

- Continue reading a post on another device
- Leverage existing iCloud sync infrastructure
- Support for iPhone ↔ iPad ↔ Mac transitions

### Keyword-based Post Highlighting

- Allow users to define custom keywords
- Automatically mark posts as important based on keywords
- Configurable keyword list in settings
- Visual indicators for important posts
- Filter/sort options to view important posts first

### Microsoft Teams Integration - Direct Chat from User Profile

- Display Teams icon or "Chat with person" button on user profile
- Icon/button opens Microsoft Teams direct chat window with that person
- Quick one-tap access to messaging from SKIES context
- Show Teams online status/availability indicator, maybe?
- Deep link support to Teams chat
- Handle users without Teams accounts gracefully

### Onboarding experience enhancements

- First-time user setup flow
- App introduction and feature highlights
- Guided setup process

### Calendar export improvements

- Fix flaky iCal/ICS export behavior
- Revisit EventKit implementation
- Test edge cases (recurrence, timezone handling)

---

## Unplanned/Not yet planned Features

### Apple Watch app

- View upcoming activities at a glance
- Quick RSVP from wrist
- Notification support on Watch
- Complications for next event

### Safari extension

- Suggest opening SKIES Mobile for matching URLs
- Deep link support from Safari
- Small extension prototype needed

### Widget & Live Activity support (needs proper ideas)

- Decide on widget content (upcoming activities, latest posts)
- Implement read-only widget first
- Explore Live Activity for ongoing events

### Add / Edit posts and activities

- Requires API write endpoints
- Permission checks and validation needed
- Content creation and editing UI

### Smart Activity Recommendations

- ML-based suggestions based on attendance history
- Personalized recommendations
- Pattern recognition for preferred times/types

### Personal History & Analytics

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
