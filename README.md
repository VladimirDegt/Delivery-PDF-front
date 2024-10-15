## Description

[Next.js 14+](https://nextjs.org/) framework TypeScript starter project

## Philosophy

- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Dependencies are updated regularly
- Easy to customize
- Minimal code
- ☕ SEO-friendly
- 🚀 Production-ready

## Requirements

- Node.js 20+ and npm

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# build
$ npm run build
```

## Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```bash
npx playwright install # Only for the first time in a new environment
npm run playwright
```

## Format code

```bash
# prettier
$ npm run prettier:fix

# eslint
$ npm run lint:fix
```

## GitHub Actions CI Pipeline

The GitHub Actions configuration is located in the /.github/workflows directory. 
The CI pipeline is set up to run various tasks including linting, testing, and building the project. 
These automated workflows ensure that the codebase maintains quality standards and
that the project is correctly built and tested on every push or pull request to the specified branches

## Project structure

```bash
.
├── README.md                       # README file
├── .env.local                      # Environment variables
├── .gitignore                      # GitHub ignore
├── .prettierignore                 # Prettier ignore
├── .prettierrc                     # Prettier config
├── .stylelintrc.json               # Stylelint config
├── .next.config.js                 # Next config
├── .playwright.config.js           # Playwright config
├── eslint.config.js                # ESLint config
├── .github                         
│   ├── workflows                   # GitHub Actions CI Pipeline config
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── hooks                       # React hooks
│   ├── shared                      # Common components
│   ├── store                       # State manager
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
└── tsconfig.json                   # TypeScript configuration
```

## Support

Next is an MIT-licensed open source project

## Stay in touch

- Author - Volodymyr Dehtiarev
- Email - [degtyarevvladimirr@gmail.com](mailto:degtyarevvladimirr@gmail.com)
- LinkedIn - [LinkedIn profile](https://www.linkedin.com/in/volodymyr-dehtiarev/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE)