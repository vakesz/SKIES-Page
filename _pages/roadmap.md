---
layout: default
title: Roadmap
nav_order: 4
description: "Development roadmap for SKIES Mobile"
permalink: /roadmap/
---

## Roadmap

This document outlines the planned features and improvements for SKIES Mobile. It is subject to change based on user feedback, technical feasibility, and organizational priorities.

---

{: .note }
Version 1.0.0 is planned for release when all major bugs are fixed and Application supports multiple endpoints (custom app/tenant IDs), via Onboarding experience.

---

## In Development (Version 0.5.1)

The following features are currently being implemented:

- Unread count badges on Posts and Activities tabs
- Profile share URLs with web portal links
- Attendance display improvements ("X / Y + Z attending")
- Waitlist button on full activities
- Better toolbar button spacing
- System-default theme settings
- Smaller app size (icon asset optimization)
- Localized deep link text
- Enhanced theme accessibility
- Various bug fixes and stability improvements

---

## Upcoming Release Features

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

### Smart Activity Recommendations

- ML-based suggestions based on attendance history
- Personalized recommendations
- Pattern recognition for preferred times/types

### Siri Shortcuts Integration

- "Show my upcoming activities"
- "Sign up for next yoga class"
- Voice-based navigation
- Custom shortcuts for common actions

### Customizable QR Code Profile Sharing

- Add option to select which information is shared in QR code
- Allow users to include/exclude multiple phone numbers
- Toggle personal email visibility
- Toggle LinkedIn profile inclusion
- Toggle "About Me" section
- Select any other available profile fields
- Save sharing preferences for quick access
- Multiple QR code profiles (work, personal, etc.)

**Note:** By default includes name, business email, and business phone number only

### Keyword-based Post Highlighting

- Allow users to define custom keywords
- Automatically mark posts as important based on keywords
- Configurable keyword list in settings
- Visual indicators for important posts
- Filter/sort options to view important posts first

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
