---
title: "Architecture"
description: "Understanding SKIES Mobile's modular architecture"
weight: 1
---

# Architecture

SKIES Mobile follows a modern, modular architecture with clear separation of concerns, built using Swift 6, SwiftUI, and iOS 18 features.

## Design Principles

- **Modular Architecture**: Clear separation by business domain
- **MVVM Pattern**: View models handle business logic, views handle presentation
- **Swift 6 Concurrency**: Modern async/await patterns throughout
- **Dependency Injection**: Clean, testable code with protocol-based dependencies
- **SwiftUI Native**: Pure SwiftUI implementation without UIKit dependencies

## Project Structure

```text
├── App/                   # Application entry point and lifecycle
├── Features/              # Domain features organized by business capability
│   ├── Posts/             # News and content sharing
│   ├── Users/             # User profiles, bookmarks, and user views
│   ├── Activities/        # Events and activities
│   ├── Settings/          # App settings, appearance, cache, support
│   ├── Authentication/    # Login and security
│   └── Summaries/         # AI-powered content summarization - iOS 26+
├── Infrastructure/        # Infrastructure concerns
│   ├── Networking/        # HTTP client and interceptors
│   ├── Storage/           # Data persistence and caching
│   ├── Configuration/     # App configuration
│   ├── Demo/              # Demo mode and fixtures
│   ├── Logging/           # Logging infrastructure
│   └── Monitoring/        # Performance monitoring
├── Shared/                # Shared utilities and components
│   ├── UI/                # Common UI components
│   ├── Services/          # Shared business services
│   ├── Domain/            # Domain models and settings
│   └── Extensions/        # Utility extensions
├── Resources/             # Assets, localizations
└── Supporting/            # Info.plist, entitlements, etc.
```

## Core Layers

### 1. App Layer

**Responsibility**: Application lifecycle, bootstrap, and global state management

- **AppDelegate**: iOS application lifecycle
- **SceneDelegate**: Window scene management
- **AppState**: Global application state (@Observable)
- **Bootstrap**: App initialization and setup

### 2. Features Layer

**Responsibility**: Business domain features with dedicated modules

Each feature module contains:
- **Models**: Domain-specific data models
- **ViewModels**: Business logic and state management (@Observable)
- **Views**: SwiftUI views and components
- **Services**: Feature-specific services and repositories

#### Posts Feature
- News feed with infinite scroll
- Post detail with comments
- Rich content rendering (text, images, attachments)
- Markdown support

#### Activities Feature
- Activity feed with temporal grouping
- Event subscription and registration
- Participant management
- Calendar integration

#### Users Feature
- User profiles and detail views
- Bookmark management
- User search and discovery

#### Settings Feature
- App configuration
- Theme and appearance
- Cache management
- Support and diagnostics

#### Authentication Feature
- Microsoft MSAL integration
- Token management
- Security checks (jailbreak detection)

#### Summaries Feature (iOS 26+)
- AI-powered content summarization
- Apple Intelligence integration
- On-device processing

### 3. Infrastructure Layer

**Responsibility**: Cross-cutting concerns and technical infrastructure

#### Networking
- **APIClient**: HTTP client with interceptors
- **CircuitBreaker**: Network resilience and retry logic
- **Interceptors**: Request/response processing (auth, logging)
- **URLSession**: Network communication layer

#### Storage
- **CacheManager**: Unified caching interface
- **SwiftData**: Modern persistence layer
- **UserDefaults**: Settings and preferences
- **Keychain**: Secure token storage

#### Configuration
- **AppConfig**: Centralized configuration
- **Environment**: Environment-specific settings
- **Feature Flags**: Conditional feature enablement

#### Logging
- **Log Categories**: Structured logging by subsystem
  - Network
  - Activities
  - Posts
  - Cache
  - Authentication
  - Performance
- **Privacy-Safe**: Production-safe logging practices

### 4. Shared Layer

**Responsibility**: Reusable components across features

#### UI Components
- **GroupedListItem**: Consistent list styling
- **AuthenticatedImage**: Secure image loading
- **MarkdownTextView**: Markdown rendering
- **LikeButton**: Social interaction components
- **Various modifiers**: Reusable SwiftUI view modifiers

#### Services
- **ImageService**: Image loading and caching
- **DateFormattingService**: Consistent date formatting
- **MarkdownRenderingService**: Markdown processing
- **UserService**: User profile management

#### Domain Models
- **Post**: News and content model
- **Activity**: Event and activity model
- **Comment**: Discussion model
- **User**: User profile model

## Data Flow

### Standard Flow (Read)

1. **View** triggers data fetch
2. **ViewModel** coordinates the operation
3. **Repository/Service** checks cache first
4. If not cached, **APIClient** fetches from network
5. **Response** flows back through layers
6. **Cache** stores data for offline access
7. **View** updates via @Observable property changes

### Write Flow (Create/Update)

1. **View** captures user input
2. **ViewModel** validates and prepares request
3. **APIClient** sends data to server
4. **Optimistic Update**: UI updates immediately
5. **Server Response** confirms or rolls back
6. **Cache** updates with latest data
7. **View** reflects final state

## Caching Strategy

### Multi-Layer Cache

1. **Memory Cache**: Fast, in-memory storage
2. **Disk Cache**: Persistent SwiftData storage
3. **Cache Policies**: TTL-based expiration
   - User photos: 24 hours
   - Activity details: On demand
   - Posts: On demand

### Cache Limits

- **Total Size**: 500 MB maximum
- **Posts**: Up to 1000 cached
- **Activities**: Up to 500 cached
- **Users**: Up to 500 cached

### Cache Management

- Automatic cleanup when limits reached
- Manual clearing in settings
- Cache warming on app launch
- Intelligent invalidation

## Concurrency Model

### Swift 6 Concurrency

- **@MainActor**: UI updates on main thread
- **async/await**: Modern async patterns
- **Task**: Structured concurrency
- **Actor**: Thread-safe state management

### Concurrency Zones

- **UI Layer**: @MainActor (main thread)
- **ViewModels**: @MainActor (state management)
- **Services**: Background actors
- **Networking**: Concurrent execution
- **Cache**: Serial queue for data integrity

## Security Architecture

### Authentication
- Microsoft MSAL for OAuth 2.0
- Secure token storage in Keychain
- Automatic token refresh
- Silent authentication support

### Network Security
- TLS 1.3 for all connections
- Certificate pinning (optional)
- Request signing
- Response validation

### Device Security
- Jailbreak detection (35+ checks)
- MDM compliance detection
- Secure enclave usage
- Background protection

## Testing Strategy

### Unit Tests
- ViewModel logic
- Service layer
- Data transformations
- Business rules

### Integration Tests
- API client
- Cache system
- Authentication flow

### UI Tests (Future)
- Critical user flows
- Accessibility validation

## Build System

### Tuist

- **Project Generation**: Deterministic Xcode projects
- **Dependency Management**: Swift Package Manager integration
- **Module Organization**: Clear feature boundaries
- **Build Scripts**: Automated tooling

### Code Quality

- **SwiftFormat**: Consistent code style
- **SwiftLint**: Static analysis and best practices
- **Strict Concurrency**: Swift 6 concurrency checking
- **Type Safety**: Explicit types, no force unwrapping

## Performance

### Optimization Strategies

- **Image Downsampling**: Reduce memory usage
- **Lazy Loading**: Load content on demand
- **List Virtualization**: Efficient scrolling
- **Background Refresh**: Preload content
- **Cache Warming**: Faster initial load

### Monitoring

- Performance logging
- Slow request tracking
- Memory pressure handling
- Battery usage optimization

## Future Architecture

### Planned Improvements

- Widget Extension
- Safari Extension
- Live Activities
- Background refresh
- CloudKit sync architecture
- Modular feature flags system

## Resources

- [GitHub Repository](https://github.com/vakesz/Skies-iOS)
- [Development Guide](/docs/development/)
- [Changelog](/docs/changelog/)
