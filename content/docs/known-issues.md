---
title: "Known Issues"
description: "Current known issues for SKIES Mobile"
summary: "This page lists the current known issues and limitations in SKIES Mobile."
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 3
toc: true
seo:
  title: "SKIES Mobile Known Issues"
  description: "Current known issues and limitations in SKIES Mobile. We are actively working to resolve these in future releases."
  canonical: ""
  noindex: false
---

This page lists the current known issues and limitations in SKIES Mobile. I am actively working to resolve these in future releases.

### Unable to like posts, comments, or activities

- Missing or undocumented API endpoints
- Need to inspect web client traces and Mobile API
- Like counts are visible but interactions are disabled

### Order of posts do not match web

- API returns items in non-chronological order with creation timestamps
- Needs to be investigated whether this can be queried otherwise or sorted client-side

### Notifications may not be delivered reliably

- Push notifications may fail to arrive in some cases
- Known issue persisting in 0.6, actively investigating

## How to Report Issues

If you encounter any issues or have feature requests, please visit the [Contact](/docs/contact/) page.
