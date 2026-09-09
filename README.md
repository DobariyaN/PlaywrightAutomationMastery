# Playwright Automation Mastery

A Playwright end-to-end test automation project.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/DobariyaN/PlaywrightAutomationMastery.git
   cd PlaywrightAutomationMastery
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Install Playwright and its browser binaries:

   ```bash
   npm init playwright@latest
   ```

   Or, if Playwright is already listed in `package.json` (as in this repo), just install the browsers:

   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/tta-check.spec.ts
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Show the HTML test report after a run:

```bash
npx playwright show-report
```

## Using Codegen

Playwright Codegen records your interactions with a browser and generates test code automatically — a great way to bootstrap new tests.

Launch codegen against a target URL:

```bash
npx playwright codegen https://example.com
```

Launch codegen with a specific browser:

```bash
npx playwright codegen --browser=firefox https://example.com
```

Save the generated code directly to a file:

```bash
npx playwright codegen --output tests/generated-test.spec.ts https://example.com
```

Record with a specific viewport size or device emulation:

```bash
npx playwright codegen --viewport-size=1280,720 https://example.com
npx playwright codegen --device="iPhone 13" https://example.com
```

## Project Structure

```
PlaywrightAutomationMastery/
├── tests/                 # Test spec files
├── playwright.config.ts   # Playwright configuration
├── package.json
└── README.md
```

## Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Codegen Docs](https://playwright.dev/docs/codegen)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
