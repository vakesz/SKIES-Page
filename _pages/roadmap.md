---
layout: default
title: Roadmap
nav_order: 5
description: "Development roadmap for SKIES Mobile"
permalink: /roadmap/
---

## Roadmap

This document outlines the planned features and improvements for SKIES Mobile. It is subject to change based on user feedback, technical feasibility, and organizational priorities.

---

## Upcoming Release 0.5

### In-app search functionality

- Prototype local content indexing
- Implement offline search for cached content
- Add fallback to API-based search when online

### Enhanced offline caching

- Extend caching for ActivityDetails
- Define and implement cache TTL policies
- Current cache limit: 500 MB total

---

## Unplanned/Not yet planned Features

### Onboarding experience

- First-time user setup flow
- App introduction and feature highlights
- Guided setup process
- Custom app URL support via onboarding
- Custom client ID configuration
- Custom tenant ID support
- Allow users to connect to different instances

### Calendar export improvements

- Fix flaky iCal/ICS export behavior
- Revisit EventKit implementation
- Test edge cases (recurrence, timezone handling)

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

### Waitlist support for activities

- Backend-dependent feature
- Queue management for full activities
- Notification system for waitlist status

### Smart Activity Recommendations

- ML-based suggestions based on attendance history
- Personalized recommendations
- Pattern recognition for preferred times/types

### Siri Shortcuts Integration

- "Show my upcoming activities"
- "Sign up for next yoga class"
- Voice-based navigation
- Custom shortcuts for common actions

### Personal History & Analytics (needs iCloud sync first)

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
