---
title: "Development Guide"
description: "Getting started with SKIES Mobile development"
weight: 2
---

# Development Guide

This guide will help you set up your development environment and start contributing to SKIES Mobile.

## Prerequisites

Before you begin, ensure you have the following installed:

- **macOS**: Latest version recommended
- **Xcode 16+**: iOS 18 SDK required
- **Tuist 4.x**: Project generation tool
- **Swift 6.1.2**: Included with Xcode 16+
- **Git**: Version control

### Installing Tuist

```bash
# Using Homebrew
brew install tuist

# Or using curl
curl -Ls https://install.tuist.io | bash
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vakesz/Skies-iOS.git
cd Skies-iOS
```

### 2. Generate Xcode Project

```bash
# Generate the Xcode project and workspace
tuist generate
```

This will:
- Generate the Xcode project from `Project.swift`
- Resolve dependencies
- Set up the workspace

### 3. Open in Xcode

```bash
# Open the generated workspace
open SKIES.xcworkspace
```

### 4. Build the Project

```bash
# Build using Tuist
tuist build

# Or build in Xcode
# Select the SKIES scheme and press Cmd+B
```

### 5. Run the App

1. Select a simulator or connected device
2. Select the **SKIES** scheme
3. Press `Cmd+R` to build and run

## Project Structure

The project uses Tuist for project generation. All configuration is in `Project.swift`.

### Key Directories

- **App/**: Application entry point and lifecycle
- **Features/**: Business domain features (Posts, Activities, Users, etc.)
- **Infrastructure/**: Cross-cutting concerns (Networking, Storage, etc.)
- **Shared/**: Reusable components and utilities
- **Resources/**: Assets, localizations, and resources
- **Tests/**: Unit and integration tests

## Development Workflow

### Code Quality Tools

The project uses SwiftFormat and SwiftLint to maintain consistent code style.

#### Install Tools

```bash
# Install both tools
make install-tools
```

#### Format Code

```bash
# Format all Swift files
make format
```

#### Run Linting

```bash
# Check for linting issues
make lint
```

#### Run Both

```bash
# Format and lint
make check
```

### Available Make Commands

```bash
# Install development tools
make install-tools

# Format code
make format

# Run linting
make lint

# Run both format and lint
make check

# Generate Xcode project
make generate

# Build the project
make build
```

## Code Style Guidelines

### Swift Conventions

- Use Swift 6 strict concurrency
- Prefer `async/await` over completion handlers
- Use `@MainActor` for UI-related code
- Follow Apple's [Swift API Design Guidelines](https://swift.org/documentation/api-design-guidelines/)

### SwiftUI Best Practices

- Use `@Observable` instead of `ObservableObject`
- Prefer composition over inheritance
- Extract view logic into computed properties or methods
- Keep views small and focused

### Naming Conventions

- **ViewModels**: Suffix with `ViewModel` (e.g., `PostsViewModel`)
- **Services**: Suffix with `Service` (e.g., `ImageService`)
- **Views**: Descriptive names (e.g., `PostDetailView`)
- **Models**: Singular nouns (e.g., `Post`, not `Posts`)

## Architecture Patterns

### MVVM Pattern

```swift
// Model
struct Post {
    let id: String
    let title: String
    let content: String
}

// ViewModel
@MainActor
@Observable
final class PostsViewModel {
    var posts: [Post] = []
    var isLoading = false

    func fetchPosts() async {
        isLoading = true
        defer { isLoading = false }
        // Fetch logic
    }
}

// View
struct PostsView: View {
    let viewModel: PostsViewModel

    var body: some View {
        List(viewModel.posts) { post in
            PostRow(post: post)
        }
        .task {
            await viewModel.fetchPosts()
        }
    }
}
```

### Dependency Injection

```swift
// Protocol
protocol ImageServiceProtocol {
    func loadImage(url: URL) async throws -> UIImage
}

// Implementation
final class ImageService: ImageServiceProtocol {
    func loadImage(url: URL) async throws -> UIImage {
        // Implementation
    }
}

// Usage in ViewModel
@MainActor
@Observable
final class PostDetailViewModel {
    private let imageService: ImageServiceProtocol

    init(imageService: ImageServiceProtocol = ImageService.shared) {
        self.imageService = imageService
    }
}
```

## Testing

### Running Tests

```bash
# Run all tests in Xcode
# Press Cmd+U

# Or use Tuist
tuist test
```

### Writing Tests

```swift
import XCTest
@testable import SKIES

final class PostsViewModelTests: XCTestCase {
    func testFetchPosts() async {
        // Arrange
        let viewModel = PostsViewModel()

        // Act
        await viewModel.fetchPosts()

        // Assert
        XCTAssertFalse(viewModel.posts.isEmpty)
    }
}
```

## Configuration

### Environment Configuration

The app supports multiple environments configured in `Infrastructure/Configuration/AppConfig.swift`:

- **Production**: Live API endpoints
- **Demo**: Offline demo mode with fixtures

### API Configuration

API endpoints are configured in `Project.swift` in the `Config` enum:

```swift
enum Config {
    static let apiBaseURL = "https://api.example.com"
    static let msalClientId = "your-client-id"
}
```

## Debugging

### Enable Debug Logging

Debug builds automatically include verbose logging. Check the console in Xcode for:

- Network requests and responses
- Cache operations
- Authentication flow
- Performance metrics

### Application Logs

You can also view logs in the app:

1. Open Settings
2. Tap Support
3. Tap Application Logs

### Common Issues

#### Build Failures

**Issue**: "Module not found"
```bash
# Clean and regenerate
rm -rf SKIES.xcodeproj SKIES.xcworkspace
tuist generate
```

**Issue**: "Swift version mismatch"
- Ensure you're using Xcode 16+ with Swift 6.1.2

#### Runtime Issues

**Issue**: "API authentication fails"
- Check `Project.swift` for correct MSAL configuration
- Verify redirect URI matches Azure AD configuration

**Issue**: "Jailbreak detection triggers on simulator"
- This is expected behavior in debug builds on jailbroken devices
- Disable in development if needed

## Contributing

### Before Submitting a PR

1. **Format your code**: `make format`
2. **Run linting**: `make lint`
3. **Test your changes**: Run all tests
4. **Update documentation**: If you've changed behavior
5. **Write clear commit messages**: Follow conventional commits

### Pull Request Guidelines

- Create a feature branch: `git checkout -b feature/my-feature`
- Keep changes focused and atomic
- Include tests for new functionality
- Update documentation as needed
- Ensure all checks pass

### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test additions or changes
- `chore`: Build process or auxiliary tool changes

**Example**:
```
feat(posts): add infinite scroll to posts feed

Implements infinite scrolling in the posts feed using SwiftUI's
.onAppear modifier. Loads 20 posts at a time when user scrolls
to the bottom.

Closes #123
```

## Development Tips

### Xcode Shortcuts

- `Cmd+B`: Build
- `Cmd+R`: Run
- `Cmd+U`: Run tests
- `Cmd+Shift+K`: Clean build folder
- `Cmd+Option+P`: Resume SwiftUI preview

### SwiftUI Previews

Use Xcode previews for rapid UI development:

```swift
#Preview {
    PostDetailView(post: .preview)
}
```

### Demo Mode

Enable demo mode for offline development:

```swift
// In Settings
Toggle "Demo Mode"
```

This allows you to develop without API access using fixture data.

## Resources

### Documentation

- [Architecture Guide](/docs/architecture/)
- [Apple Swift Documentation](https://swift.org/documentation/)
- [SwiftUI Documentation](https://developer.apple.com/documentation/swiftui/)
- [Tuist Documentation](https://docs.tuist.io/)

### Community

- [GitHub Issues](https://github.com/vakesz/Skies-iOS/issues)
- [GitHub Discussions](https://github.com/vakesz/Skies-iOS/discussions)

### Contact

- **Email**: [hello@vakesz.com](mailto:hello@vakesz.com)
- **GitHub**: [@vakesz](https://github.com/vakesz)

## Next Steps

Now that you have the development environment set up:

1. Explore the codebase and [architecture](/docs/architecture/)
2. Check the [issues page](/issues/) for tasks to work on
3. Join the discussion on GitHub
4. Start contributing!

Happy coding!
