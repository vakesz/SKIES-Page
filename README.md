# SKIES Mobile Website

Official website for SKIES Mobile - A modern iOS application for team connectivity and content sharing.

## About

This repository contains the source code for the SKIES Mobile website, built with [Hugo](https://gohugo.io/) and the [Lotus Docs](https://github.com/colinwilson/lotusdocs) theme.

**Live Site**: [skies.vakesz.com](https://skies.vakesz.com)

## Features

- **Responsive Design**: Works on all devices
- **Light/Dark Mode**: Automatic theme switching
- **Fast**: Static site generation for optimal performance
- **SEO Optimized**: Built-in SEO best practices

## Pages

- **Home**: Overview of SKIES Mobile
- **Features**: Comprehensive feature list
- **Issues**: Known issues and roadmap
- **Privacy**: Privacy policy and data handling
- **Contact**: Get in touch
- **Documentation**:
  - Architecture guide
  - Development guide
  - Changelog

## Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.151.0 or later
- [Go](https://golang.org/dl/) 1.22 or later

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/vakesz/SKIES-Page.git
cd SKIES-Page
```

2. Install Hugo modules:
```bash
hugo mod tidy
```

3. Start the development server:
```bash
hugo server -D
```

4. Open your browser to [http://localhost:1313](http://localhost:1313)

### Building

Build the static site:
```bash
hugo --gc --minify
```

The built site will be in the `public/` directory.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `master` branch.

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically build and deploy on push

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── hugo.yml          # GitHub Actions deployment workflow
├── content/                  # Markdown content
│   ├── _index.md            # Home page
│   ├── features/            # Features page
│   ├── issues/              # Issues & roadmap
│   ├── privacy/             # Privacy policy
│   ├── contact/             # Contact page
│   └── docs/                # Documentation
│       ├── architecture/    # Architecture guide
│       ├── development/     # Development guide
│       └── changelog/       # Version history
├── static/                   # Static assets
├── hugo.toml                # Hugo configuration
└── README.md                # This file
```

## Configuration

Site configuration is in `hugo.toml`. Key settings:

- **baseURL**: `https://skies.vakesz.com/`
- **theme**: Lotus Docs (via Hugo modules)
- **email**: `hello@vakesz.com`
- **GitHub**: `vakesz/Skies-iOS`

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Test locally: `hugo server -D`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature/my-feature`
7. Submit a pull request

## Related Projects

- [SKIES-iOS](https://github.com/vakesz/Skies-iOS) - The iOS application source code

## License

See the main [SKIES-iOS repository](https://github.com/vakesz/Skies-iOS) for license information.

## Contact

- **Email**: [hello@vakesz.com](mailto:hello@vakesz.com)
- **GitHub**: [@vakesz](https://github.com/vakesz)

## Acknowledgments

- Built with [Hugo](https://gohugo.io/)
- Theme by [Lotus Docs](https://github.com/colinwilson/lotusdocs)
