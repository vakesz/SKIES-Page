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
Version 1.0.0 is currently in beta testing via TestFlight with:

- Multi-site support via SiteConfig (configurable endpoints with no-auth or MSAL authentication)
- Microsoft Teams chat integration from user profiles
- Major stability and platform improvements, including optimizations when running on Mac

Still planned for future releases:

- Sign in with Apple authentication
- Open source release

{{< /callout >}}

## Planned Features

### Global info bar

- Text-only announcement bar on website (skies.vakesz.com)
- Display global messages (e.g., open source announcement)
- Easy content updates without code changes

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

### Onboarding experience enhancements

- First-time user setup flow for new users
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

### Theme-aware Splash Screen & Color Scheme

- Flying icons on the splash screen adapt to match the selected app icon theme
- App color scheme adjusts based on the chosen app icon
- Cohesive visual experience from launch through the entire app

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
