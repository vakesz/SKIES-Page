---
title: "SiteConfig Setup"
description: "How to configure SiteConfig.json for your backend"
summary: "SiteConfig.json controls every aspect of how SKIES Mobile connects to your backend — authentication, API paths, field mappings, and more."
date: 2025-01-01T00:00:00+00:00
lastmod: 2025-01-01T00:00:00+00:00
draft: false
weight: 5
toc: true
seo:
  title: "SKIES Mobile SiteConfig Setup Guide"
  description: "Complete reference for configuring SiteConfig.json — authentication, API paths, field mappings, assets, and connection settings."
  canonical: ""
  noindex: false
---

This document explains every field in `SiteConfig.json` and how to configure it for your backend. Start by copying `SiteConfig.json.template` and filling in your environment-specific values.

{{< callout context="note" >}}
If you need a capability, auth policy option, or asset strategy that is not listed here, please open an issue or pull request at [github.com/vakesz/SKIES-iOS](https://github.com/vakesz/SKIES-iOS).

Not yet open, but planned to be with release 1.0.0.
{{< /callout >}}

## Top-level structure

```json
{
  "schemaVersion": 1,
  "capabilities": { ... },
  "links": { ... },
  "api": { ... },
  "fields": { ... },
  "assets": { ... },
  "textFormatting": { ... },
  "connection": { ... }
}
```

| Field | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `schemaVersion` | integer | No | `1` | Config schema version for forward compatibility. Always set to `1`. |
| `capabilities` | object | Yes | — | Feature flags and auth mode. |
| `links` | object | Yes | — | Web portal link-building configuration. |
| `api` | object | Yes | — | API path, query, body, wrapper, and auth policy mappings. |
| `fields` | object | Yes | — | JSON field name mappings for each API model. |
| `assets` | object | Yes | — | Asset URL resolution strategy. |
| `textFormatting` | object | No | `{"outgoingLineBreak": "crlf"}` | Text encoding settings for outgoing requests. |
| `connection` | object | No* | — | Backend URLs and OAuth credentials. Required when distributing via in-app file import. |

## capabilities

Controls which features are enabled and how authentication is enforced.

```json
"capabilities": {
  "authMode": "required",
  "supportsCurrentUser": true,
  "supportsUserDirectory": true,
  "supportsComments": true,
  "supportsLikes": true,
  "supportsActivityRegistration": true,
  "supportsProfiler": true,
  "birthYearHiddenJobTitles": ["example-role"],
  "meaninglessDietaryValues": ["nothing", "none", "n/a", "na", "no", "nil"]
}
```

### authMode

**Type:** string (enum) — **Required**

Controls the global authentication gate for the app.

| Value | Behavior |
| --- | --- |
| `"required"` | All users must sign in. Anonymous access is not allowed. |
| `"optional"` | Authentication is available but not required. Unauthenticated users can browse. |
| `"disabled"` | Authentication is completely disabled. No sign-in UI or token handling. |

### Feature flags

All are boolean. Set to `false` to disable the feature entirely in the app UI and API calls.

| Field | Description |
| --- | --- |
| `supportsCurrentUser` | Enables fetching and displaying the signed-in user's own profile. |
| `supportsUserDirectory` | Enables the user directory / people search feature. |
| `supportsComments` | Enables comments on posts and activities. |
| `supportsLikes` | Enables like/reaction counts and toggling on posts, activities, and comments. |
| `supportsActivityRegistration` | Enables sign-up / registration for activities. |
| `supportsProfiler` | Enables the external profiler link on user profiles. |

### birthYearHiddenJobTitles

**Type:** array of strings — **Required** (can be empty `[]`)

Job titles for which the birth year should not be displayed on user profiles. Matching is case-sensitive. Use the exact role identifier strings your backend returns.

```json
"birthYearHiddenJobTitles": ["consultant", "contractor"]
```

### meaninglessDietaryValues

**Type:** array of strings — **Required** (can be empty `[]`)

Dietary/food preference values that should be treated as "no preference" and suppressed in the UI. Matching is case-insensitive. Include all variants your backend may return.

```json
"meaninglessDietaryValues": ["nothing", "none", "n/a", "na", "no", "nil", "nincs"]
```

## links

Describes how deep links and web portal URLs are constructed for posts, activities, and user profiles.

```json
"links": {
  "webPortalPath": "/YOUR_PORTAL_PATH",
  "resourceQueryKey": "resourceId",
  "postIdentifierQueryKey": "postId",
  "activityIdentifierQueryKey": "activityId",
  "profileUsernameQueryKey": "userName",
  "postResourceID": "POST_RESOURCE_ID",
  "activityResourceID": "ACTIVITY_RESOURCE_ID",
  "userResourceID": "USER_RESOURCE_ID",
  "postExtraQueryItems": [],
  "activityExtraQueryItems": [
    { "name": "mode", "value": "activity" }
  ],
  "profileExtraQueryItems": [
    { "name": "mode", "value": "profile" }
  ]
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `webPortalPath` | string | Yes | The URL path appended to `connection.webPortalURL` for all portal links. Example: `"/main.asp"`. |
| `resourceQueryKey` | string | Yes | Query parameter name used to identify the resource type. Example: `"rID"`. |
| `postIdentifierQueryKey` | string | Yes | Query parameter name for the post ID. Example: `"coreID"`. |
| `activityIdentifierQueryKey` | string | Yes | Query parameter name for the activity ID. Example: `"aktID"`. |
| `profileUsernameQueryKey` | string | Yes | Query parameter name for the username in profile links. Example: `"username"`. |
| `postResourceID` | string | Yes | The value passed for `resourceQueryKey` when linking to a post. Example: `"200"`. |
| `activityResourceID` | string | Yes | The value passed for `resourceQueryKey` when linking to an activity. Example: `"2"`. |
| `userResourceID` | string | Yes | The value passed for `resourceQueryKey` when linking to a user profile. Example: `"1"`. |
| `postExtraQueryItems` | array | No | Additional query parameters appended to post deep links. Defaults to `[]`. |
| `activityExtraQueryItems` | array | No | Additional query parameters appended to activity deep links. Defaults to `[]`. |
| `profileExtraQueryItems` | array | No | Additional query parameters appended to profile deep links. Defaults to `[]`. |

Each item in `*ExtraQueryItems` is an object with `"name"` and `"value"` string fields:

```json
{ "name": "mode", "value": "activity" }
```

## api

Maps logical API concepts to the actual path segments, query parameter names, request body keys, response wrapper keys, and per-endpoint authentication policies used by your backend.

### api.paths

URL path segments appended to the API base URL for each resource.

```json
"paths": {
  "posts": "posts",
  "activities": "activities",
  "me": "current-user",
  "users": "users",
  "user": "user",
  "comments": "comments",
  "like": "reactions",
  "participants": "participants"
}
```

| Key | Description | Example value |
| --- | --- | --- |
| `posts` | Path segment for the posts list endpoint. | `"posts"` |
| `activities` | Path segment for the activities list endpoint. | `"activities"` |
| `me` | Path segment for the current user endpoint. | `"me"`, `"current-user"` |
| `users` | Path segment for the user directory endpoint. | `"users"` |
| `user` | Path segment for a single user detail endpoint. | `"user"` |
| `comments` | Path segment for comments on a post or activity. | `"comments"` |
| `like` | Path segment for the like/reaction endpoint. | `"like"`, `"reactions"` |
| `participants` | Path segment for activity participants. | `"participants"` |

### api.queryKeys

Query parameter names used in API requests.

```json
"queryKeys": {
  "page": "page",
  "size": "size",
  "department": "department",
  "geography": "location",
  "name": "name",
  "mobile": "phone",
  "userName": "userName",
  "subscribed": "subscribed",
  "registrationAnswer": "response",
  "guestCount": "guestCount"
}
```

| Key | Description |
| --- | --- |
| `page` | Pagination: page number parameter name. |
| `size` | Pagination: page size parameter name. |
| `department` | Filter by department parameter name. |
| `geography` | Filter by location/geography parameter name. |
| `name` | Search by name parameter name. |
| `mobile` | Filter or search by phone number parameter name. |
| `userName` | Filter or lookup by username parameter name. |
| `subscribed` | Filter activities by subscription status parameter name. |
| `registrationAnswer` | Activity registration answer parameter name. |
| `guestCount` | Activity registration guest count parameter name. |

### api.bodyKeys

Keys used in request bodies (POST/PUT payloads).

```json
"bodyKeys": {
  "comment": "body",
  "liked": "isLiked",
  "count": "itemCount"
}
```

| Key | Description |
| --- | --- |
| `comment` | Body key for the comment text when creating a comment. |
| `liked` | Body key for the boolean liked state when toggling a reaction. |
| `count` | Body key for item count in paginated response bodies. |

### api.wrapperKeys

Keys used to unwrap paginated or list responses from your API.

```json
"wrapperKeys": {
  "items": "items",
  "total": "total",
  "totalGuests": "guestTotal",
  "users": "users",
  "totalCount": "totalCount",
  "page": "page",
  "size": "size"
}
```

| Key | Description |
| --- | --- |
| `items` | Key containing the array of results in a list response. |
| `total` | Key containing the total item count in a list response. |
| `totalGuests` | Key containing the total guest count for activity participants. |
| `users` | Key containing the array of users in a user directory response. |
| `totalCount` | Key containing the total count in user directory responses. |
| `page` | Key containing the current page in a paginated response. |
| `size` | Key containing the page size in a paginated response. |

### api.authPolicies

Per-endpoint authentication policy. Specifies whether a valid auth token is required, optional, or not used for each API call.

```json
"authPolicies": {
  "posts": "required",
  "postDetails": "required",
  "postComments": "required",
  "commentCreation": "required",
  "activities": "required",
  "activityDetails": "required",
  "activityComments": "required",
  "activityParticipants": "required",
  "activityRegistration": "required",
  "currentUser": "required",
  "users": "required",
  "userDetails": "required",
  "likes": "required",
  "commentDeletion": "required",
  "fileDownloads": "required"
}
```

**Allowed values for every policy key:**

| Value | Behavior |
| --- | --- |
| `"required"` | Request is blocked if the user is not authenticated. |
| `"ifAvailable"` | Auth token is included when available, but the request proceeds without it. |
| `"none"` | No auth token is sent, even if one is available. |

**Policy keys:**

| Key | Endpoint it controls |
| --- | --- |
| `posts` | Post list fetch |
| `postDetails` | Single post detail fetch |
| `postComments` | Comments on a post |
| `commentCreation` | Creating a new comment |
| `activities` | Activity list fetch |
| `activityDetails` | Single activity detail fetch |
| `activityComments` | Comments on an activity |
| `activityParticipants` | Participant list for an activity |
| `activityRegistration` | Signing up for / leaving an activity |
| `currentUser` | Current user profile fetch |
| `users` | User directory listing |
| `userDetails` | Single user detail fetch |
| `likes` | Like / reaction toggle |
| `commentDeletion` | Deleting a comment |
| `fileDownloads` | Downloading file attachments |

## fields

Maps logical field names the app uses internally to the actual JSON keys returned by your API. Every value is a string containing the exact key name from your backend response.

### fields.post

JSON key mappings for a post object.

| App field | Template default | Description |
| --- | --- | --- |
| `id` | `"id"` | Unique post identifier |
| `title` | `"title"` | Post title |
| `body` | `"body"` | Post body / content |
| `imageUrl` | `"imageUrl"` | Post cover image URL |
| `created` | `"createdAt"` | Post creation timestamp |
| `city` | `"city"` | City associated with the post |
| `country` | `"country"` | Country associated with the post |
| `companyName` | `"organizationName"` | Originating organization name |
| `departmentId` | `"departmentId"` | Originating department identifier |
| `departmentName` | `"departmentName"` | Originating department name |
| `companyId` | `"organizationId"` | Originating organization identifier |
| `summary` | `"summary"` | Short preview / summary text |
| `link` | `"link"` | External URL linked from the post |
| `userName` | `"userName"` | Author username |
| `userPhoto` | `"userPhotoUrl"` | Author profile photo URL |
| `pinned` | `"pinned"` | Whether the post is pinned |
| `hasExtraParticipants` | `"hasAdditionalParticipants"` | Whether there are extra participants not counted in capacity |
| `commentsCount` | `"commentsCount"` | Number of comments |
| `likesCount` | `"likesCount"` | Number of likes/reactions |
| `liked` | `"liked"` | Whether the current user has liked the post |
| `global` | `"isGlobal"` | Whether the post is org-wide / global |
| `activityId` | `"activityId"` | Linked activity identifier |
| `activityCommentsCount` | `"activityCommentsCount"` | Number of activity comments |
| `startDate` | `"startDate"` | Event start date |
| `signUpDeadline` | `"signUpDeadline"` | Registration deadline |
| `totalCapacity` | `"totalCapacity"` | Maximum number of participants |
| `subscribed` | `"subscribed"` | Whether the current user is registered |
| `question` | `"registrationQuestion"` | Question shown during registration |
| `attachment` | `"attachmentUrl"` | URL to a file attachment |
| `important` | `"isImportant"` | Whether the post is marked as important |

### fields.activity

JSON key mappings for an activity object.

| App field | Template default | Description |
| --- | --- | --- |
| `id` | `"id"` | Unique activity identifier |
| `postId` | `"postId"` | Parent post identifier |
| `link` | `"link"` | External URL |
| `title` | `"title"` | Activity title |
| `description` | `"body"` | Activity description / body |
| `type` | `"type"` | Activity type label |
| `imageUrl` | `"imageUrl"` | Cover image URL |
| `created` | `"createdAt"` | Creation timestamp |
| `startDate` | `"startDate"` | Event start date |
| `signUpDeadline` | `"signUpDeadline"` | Registration deadline |
| `cityId` | `"cityId"` | City identifier |
| `cityName` | `"cityName"` | City name |
| `countryId` | `"countryId"` | Country identifier |
| `countryName` | `"countryName"` | Country name |
| `departmentId` | `"departmentId"` | Originating department identifier |
| `departmentName` | `"departmentName"` | Originating department name |
| `companyId` | `"organizationId"` | Originating organization identifier |
| `companyName` | `"organizationName"` | Originating organization name |
| `organizerUserName` | `"userName"` | Organizer's username |
| `organizerPhoto` | `"organizerPhotoUrl"` | Organizer's photo URL (primary) |
| `organizerPhotoFallbacks` | `["userPhotoUrl"]` | Fallback photo URL keys tried in order if `organizerPhoto` is absent |
| `pinned` | `"pinned"` | Whether the activity is pinned |
| `hasExtraParticipants` | `"hasAdditionalParticipants"` | Whether there are extra participants |
| `totalCapacity` | `"totalCapacity"` | Maximum number of participants |
| `subscribed` | `"subscribed"` | Whether the current user is registered |
| `commentsCount` | `"activityCommentsCount"` | Number of comments |
| `likesCount` | `"likesCount"` | Number of likes/reactions |
| `liked` | `"liked"` | Whether the current user has liked the activity |
| `location` | `"location"` | Venue / location description |
| `tags` | `"tags"` | Tags or categories |
| `requirements` | `"requirements"` | Requirements text |
| `category` | `"category"` | Activity category |
| `question` | `"registrationQuestion"` | Registration question |
| `global` | `"isGlobal"` | Whether the activity is org-wide / global |

{{< callout context="note" >}}
`organizerPhotoFallbacks` is an **array of strings**, not a single string. List fallback key names in priority order.
{{< /callout >}}

### fields.activityParticipant

JSON key mappings for a participant entry in an activity.

| App field | Template default | Description |
| --- | --- | --- |
| `userName` | `"participantId"` | Participant's username or identifier |
| `signupDate` | `"signupDate"` | When the participant registered |
| `department` | `"department"` | Participant's department |
| `guests` | `"guestCount"` | Number of additional guests brought by this participant |
| `answer` | `"response"` | Participant's answer to the registration question |
| `foodRestrictions` | `"foodRestrictions"` | Dietary restrictions |
| `photo` | `"photoUrl"` | Participant's profile photo URL |

### fields.user

JSON key mappings for a user profile object.

| App field | Template default | Description |
| --- | --- | --- |
| `userName` | `"userName"` | Username / unique identifier |
| `firstName` | `"firstName"` | First name |
| `lastName` | `"lastName"` | Last name |
| `userPhoto` | `"userPhotoUrl"` | Profile photo URL |
| `workPhone` | `"workPhone"` | Work phone number |
| `personalPhone` | `"personalPhone"` | Personal/mobile phone number |
| `workEmail` | `"workEmail"` | Work email address |
| `personalEmail` | `"personalEmail"` | Personal email address |
| `educationType` | `"educationType"` | Education type label |
| `educationTitle` | `"educationTitle"` | Education title / degree |
| `cityId` | `"cityId"` | City identifier |
| `countryId` | `"countryId"` | Country identifier |
| `departmentId` | `"departmentId"` | Department identifier |
| `departmentName` | `"departmentName"` | Department name |
| `companyId` | `"organizationId"` | Organization identifier |
| `employeeNumber` | `"employeeNumber"` | Employee number |
| `birthday` | `"birthday"` | Date of birth |
| `foodPreferences` | `"foodPreferences"` | Dietary preferences |
| `aboutMyJob` | `"aboutMyJob"` | "About my job" free-text field |
| `aboutMe` | `"aboutMe"` | "About me" free-text field |
| `externalProfileId` | `"externalProfileId"` | Identifier used for the external profiler link |
| `jobTitle` | `"jobTitle"` | Job title |
| `office` | `"office"` | Office location |

### fields.comment

JSON key mappings for a comment object.

| App field | Template default | Description |
| --- | --- | --- |
| `commentId` | `"commentId"` | Unique comment identifier |
| `postId` | `"postId"` | Parent post identifier |
| `activityId` | `"activityId"` | Parent activity identifier |
| `body` | `"body"` | Comment text content |
| `header` | `"headline"` | Comment headline / subject |
| `userName` | `"userName"` | Author username |
| `userPhoto` | `"userPhotoUrl"` | Author profile photo URL |
| `createdAt` | `"createdAt"` | Comment creation timestamp |
| `likesCount` | `"likesCount"` | Number of likes |
| `liked` | `"liked"` | Whether the current user has liked the comment |

### fields.activitySubscription

JSON key mappings for the activity subscription/registration status object.

| App field | Template default | Description |
| --- | --- | --- |
| `activityId` | `"activityId"` | Activity identifier |
| `userName` | `"userName"` | Username of the registrant |
| `answer` | `"response"` | Answer to the registration question |
| `number` | `"guestCount"` | Number of additional guests |
| `subscribed` | `"subscribed"` | Whether the user is currently registered |

## assets

Controls how asset (image) URLs are constructed for activities.

```json
"assets": {
  "activityAssetIdentifierStrategy": "postIdOrActivityId"
}
```

### activityAssetIdentifierStrategy

**Type:** string (enum) — **Required**

Determines which ID is used to build the asset URL path for activity images.

| Value | Behavior |
| --- | --- |
| `"activityId"` | Always use the activity's own ID when constructing the asset URL. |
| `"postId"` | Always use the parent post's ID when constructing the asset URL. |
| `"postIdOrActivityId"` | Use the post ID if available; fall back to the activity ID. |

## textFormatting

Controls how text is encoded in outgoing API requests (e.g. comment bodies).

```json
"textFormatting": {
  "outgoingLineBreak": "crlf"
}
```

### outgoingLineBreak

**Type:** string (enum) — **Optional** (defaults to `"crlf"`)

The line break sequence used when sending text to the API.

| Value | Sequence | When to use |
| --- | --- | --- |
| `"crlf"` | `\r\n` | Most Windows-style or legacy backends. This is the default. |
| `"lf"` | `\n` | Unix/Linux-style backends. |
| `"cr"` | `\r` | Rare; older systems. |

## connection

Contains all backend URLs and OAuth credentials. This section is **required when distributing the config file** via in-app import (the app validates its presence on load). When omitted, the app falls back to values baked into `Info.plist` at build time.

All URL values must use the `https://` scheme. The app will reject any `http://` or malformed URL.

```json
"connection": {
  "apiBaseURL": "https://YOUR_API_BASE_URL",
  "assetsBaseUrl": "https://YOUR_ASSETS_BASE_URL",
  "avatarOrgBaseURL": "https://YOUR_AVATAR_BASE_URL",
  "webPortalURL": "https://YOUR_WEB_PORTAL_URL",
  "profilerURL": "https://YOUR_PROFILER_URL",
  "tenantID": "YOUR_AZURE_TENANT_ID",
  "clientID": "YOUR_AZURE_CLIENT_ID",
  "redirectURI": "msalYOUR_CLIENT_ID://auth",
  "scopes": ["openid", "profile", "email", "api://YOUR_CLIENT_ID/YOUR_SCOPE_NAME"],
  "authProviderDisplayName": "Microsoft"
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiBaseURL` | string (HTTPS URL) | Yes | Root URL of your backend REST API. All API path segments are appended to this. |
| `assetsBaseUrl` | string (HTTPS URL) | Yes | Base URL for activity and post image assets. |
| `avatarOrgBaseURL` | string (HTTPS URL) | Yes | Base URL used to resolve user avatar/profile photos. |
| `webPortalURL` | string (HTTPS URL) | Yes | Base URL of the web portal, used together with `links.webPortalPath` to build deep links. |
| `profilerURL` | string (HTTPS URL) | Yes | URL of the external profiler service. Used when `capabilities.supportsProfiler` is `true`. |
| `tenantID` | string | No | Azure AD tenant ID (GUID). Required for Microsoft OAuth authentication. |
| `clientID` | string | No | Azure AD app registration client ID (GUID). Required for Microsoft OAuth authentication. |
| `redirectURI` | string | No | MSAL redirect URI registered in your Azure app. Must match exactly. Conventional format: `"msal<clientID>://auth"`. |
| `scopes` | array of strings | No | OAuth scopes to request. Typically includes OpenID Connect scopes and your API's application scope. |
| `authProviderDisplayName` | string | Yes | Display name shown in the sign-in UI. Example: `"Microsoft"`. |

{{< callout context="caution" >}}
Never commit a `SiteConfig.json` containing real credentials to source control. The file is listed in `.gitignore` and should be distributed to users out-of-band (e.g. via MDM, email, or a secure link).
{{< /callout >}}

## Minimal example

Below is the smallest valid config to get started. Replace all placeholder values before use.

```json
{
  "schemaVersion": 1,
  "capabilities": {
    "authMode": "required",
    "supportsCurrentUser": true,
    "supportsUserDirectory": true,
    "supportsComments": true,
    "supportsLikes": true,
    "supportsActivityRegistration": true,
    "supportsProfiler": false,
    "birthYearHiddenJobTitles": [],
    "meaninglessDietaryValues": ["none", "n/a", "no"]
  },
  "links": {
    "webPortalPath": "/portal",
    "resourceQueryKey": "resourceId",
    "postIdentifierQueryKey": "postId",
    "activityIdentifierQueryKey": "activityId",
    "profileUsernameQueryKey": "userName",
    "postResourceID": "1",
    "activityResourceID": "2",
    "userResourceID": "3",
    "postExtraQueryItems": [],
    "activityExtraQueryItems": [],
    "profileExtraQueryItems": []
  },
  "api": {
    "paths": {
      "posts": "posts",
      "activities": "activities",
      "me": "me",
      "users": "users",
      "user": "user",
      "comments": "comments",
      "like": "like",
      "participants": "participants"
    },
    "queryKeys": {
      "page": "page",
      "size": "size",
      "department": "department",
      "geography": "location",
      "name": "name",
      "mobile": "phone",
      "userName": "userName",
      "subscribed": "subscribed",
      "registrationAnswer": "answer",
      "guestCount": "guests"
    },
    "bodyKeys": {
      "comment": "body",
      "liked": "liked",
      "count": "count"
    },
    "wrapperKeys": {
      "items": "items",
      "total": "total",
      "totalGuests": "totalGuests",
      "users": "users",
      "totalCount": "totalCount",
      "page": "page",
      "size": "size"
    },
    "authPolicies": {
      "posts": "required",
      "postDetails": "required",
      "postComments": "required",
      "commentCreation": "required",
      "activities": "required",
      "activityDetails": "required",
      "activityComments": "required",
      "activityParticipants": "required",
      "activityRegistration": "required",
      "currentUser": "required",
      "users": "required",
      "userDetails": "required",
      "likes": "required",
      "commentDeletion": "required",
      "fileDownloads": "required"
    }
  },
  "fields": {
    "post": {
      "id": "id", "title": "title", "body": "body", "imageUrl": "imageUrl",
      "created": "createdAt", "city": "city", "country": "country",
      "companyName": "companyName", "departmentId": "departmentId",
      "departmentName": "departmentName", "companyId": "companyId",
      "summary": "summary", "link": "link", "userName": "userName",
      "userPhoto": "userPhoto", "pinned": "pinned",
      "hasExtraParticipants": "hasExtraParticipants",
      "commentsCount": "commentsCount", "likesCount": "likesCount",
      "liked": "liked", "global": "global", "activityId": "activityId",
      "activityCommentsCount": "activityCommentsCount", "startDate": "startDate",
      "signUpDeadline": "signUpDeadline", "totalCapacity": "totalCapacity",
      "subscribed": "subscribed", "question": "question",
      "attachment": "attachment", "important": "important"
    },
    "activity": {
      "id": "id", "postId": "postId", "link": "link", "title": "title",
      "description": "description", "type": "type", "imageUrl": "imageUrl",
      "created": "createdAt", "startDate": "startDate",
      "signUpDeadline": "signUpDeadline", "cityId": "cityId",
      "cityName": "cityName", "countryId": "countryId",
      "countryName": "countryName", "departmentId": "departmentId",
      "departmentName": "departmentName", "companyId": "companyId",
      "companyName": "companyName", "organizerUserName": "userName",
      "organizerPhoto": "organizerPhoto",
      "organizerPhotoFallbacks": ["userPhoto"],
      "pinned": "pinned", "hasExtraParticipants": "hasExtraParticipants",
      "totalCapacity": "totalCapacity", "subscribed": "subscribed",
      "commentsCount": "commentsCount", "likesCount": "likesCount",
      "liked": "liked", "location": "location", "tags": "tags",
      "requirements": "requirements", "category": "category",
      "question": "question", "global": "global"
    },
    "activityParticipant": {
      "userName": "userName", "signupDate": "signupDate",
      "department": "department", "guests": "guests",
      "answer": "answer", "foodRestrictions": "foodRestrictions",
      "photo": "photo"
    },
    "user": {
      "userName": "userName", "firstName": "firstName",
      "lastName": "lastName", "userPhoto": "userPhoto",
      "workPhone": "workPhone", "personalPhone": "personalPhone",
      "workEmail": "workEmail", "personalEmail": "personalEmail",
      "educationType": "educationType", "educationTitle": "educationTitle",
      "cityId": "cityId", "countryId": "countryId",
      "departmentId": "departmentId", "departmentName": "departmentName",
      "companyId": "companyId", "employeeNumber": "employeeNumber",
      "birthday": "birthday", "foodPreferences": "foodPreferences",
      "aboutMyJob": "aboutMyJob", "aboutMe": "aboutMe",
      "externalProfileId": "externalProfileId",
      "jobTitle": "jobTitle", "office": "office"
    },
    "comment": {
      "commentId": "commentId", "postId": "postId",
      "activityId": "activityId", "body": "body", "header": "header",
      "userName": "userName", "userPhoto": "userPhoto",
      "createdAt": "createdAt", "likesCount": "likesCount",
      "liked": "liked"
    },
    "activitySubscription": {
      "activityId": "activityId", "userName": "userName",
      "answer": "answer", "number": "number", "subscribed": "subscribed"
    }
  },
  "assets": {
    "activityAssetIdentifierStrategy": "postIdOrActivityId"
  },
  "textFormatting": {
    "outgoingLineBreak": "crlf"
  },
  "connection": {
    "apiBaseURL": "https://api.example.com",
    "assetsBaseUrl": "https://assets.example.com",
    "avatarOrgBaseURL": "https://avatars.example.com",
    "webPortalURL": "https://portal.example.com",
    "profilerURL": "https://profiler.example.com",
    "tenantID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "clientID": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
    "redirectURI": "msalyyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy://auth",
    "scopes": [
      "openid", "profile", "email",
      "api://yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy/access_as_user"
    ],
    "authProviderDisplayName": "Microsoft"
  }
}
```
