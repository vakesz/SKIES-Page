---
layout: default
title: Known Issues
nav_order: 3
description: "Current known issues for SKIES Mobile"
permalink: /issues/
---

## Known Issues

This page lists the current known issues and limitations in SKIES Mobile. I am actively working to resolve these in future releases.

---

### Unable to like posts, comments, or activities

- Missing or undocumented API endpoints
- Need to inspect web client traces and Mobile API
- Like counts are visible but interactions are disabled

### Order of posts and activities do not match web

- API returns items in non-chronological order with creation timestamps
- Needs to be investigated whether this can be queryed otherwise or sorted client-side

### Some List dropdown menus are not scaled with Dynamic Type

- Custom menu implementation needed for full accessibility
- Standard SwiftUI menus don't respect all Dynamic Type settings

### Some languages not fully translated

- Localization files should be reviewed and updated
- Full localization check scheduled after v1.0 release

## How to Report Issues

If you encounter any issues or have feature requests:

> Contact me at [hello@vakesz.com](mailto:hello@vakesz.com)
