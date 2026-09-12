# Playwright Automation Mastery

A basic end-to-end test automation project using [Playwright Test](https://playwright.dev/docs/intro) and TypeScript/JavaScript test files.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (LTS recommended)
- npm (included with Node.js)

## Installation and setup

Clone the repository and install its dependencies:

```bash
git clone https://github.com/DobariyaN/PlaywrightAutomationMastery.git
cd PlaywrightAutomationMastery
npm install
```

Install the Playwright browser binaries:

```bash
npx playwright install
```

On Linux CI machines, install the browsers and their system dependencies with:

```bash
npx playwright install --with-deps
```

The main configuration is in `playwright.config.ts`. Tests are stored in `tests/`.

## Run tests

Run the complete test suite:

```bash
npm test
```

Run tests with a visible browser, debug mode, or a specific test file:

```bash
npm run test:headed
npm run test:debug
npx playwright test tests/example.spec.ts
```

Open the HTML report after a test run:

```bash
npm run report
```

## Generate tests with Codegen

Codegen opens a browser, records your actions, and generates Playwright test code. Start it with:

```bash
npx playwright codegen https://example.com
```

Save generated code to a test file:

```bash
npx playwright codegen --output tests/generated-test.spec.ts https://example.com
```

Useful options include browser selection, viewport size, and device emulation:

```bash
npx playwright codegen --browser=firefox https://example.com
npx playwright codegen --viewport-size=1280,720 https://example.com
npx playwright codegen --device="iPhone 13" https://example.com
```

The equivalent npm script can be used when passing Codegen arguments:

```bash
npm run codegen -- https://example.com
```

Review generated locators and assertions before committing the test. Avoid committing credentials or other sensitive data recorded by Codegen.

## Project structure

```text
PlaywrightAutomationMastery/
├── tests/                              # Playwright test specifications
├── playwright-architecture-guide/      # Playwright architecture reference material
├── LearningPlaywrightFundamentals3x/   # Merged fundamentals curriculum (23 topics)
├── playwright.config.ts                # Playwright configuration
├── package.json                        # Project scripts and dependencies
└── README.md                           # Setup and usage guide
```

## Useful links

- [Playwright installation](https://playwright.dev/docs/intro)
- [Playwright test generator / Codegen](https://playwright.dev/docs/codegen)
- [Playwright assertions](https://playwright.dev/docs/test-assertions)
