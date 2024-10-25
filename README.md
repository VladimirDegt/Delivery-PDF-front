# DeliveryPDF
[https://delivery-pdf-front.vercel.app](https://delivery-pdf-front.vercel.app/)

## Description

This web application was developed to streamline and significantly accelerate the process of sending completed work reports for a municipal company’s document department. Previously, employees manually copied and pasted over 500 customer emails each month, which was both time-consuming and prone to errors. This application simplifies the workflow by allowing users to simply drag and drop a document, after which the system automatically detects the customer’s email from the document and sends it accordingly.

Additional features include:

- Option to manually specify an email if none is detected within the document.
- Real-time error notifications for issues such as invalid emails.
- A detailed report of sent documents, complete with sorting and filtering options.

This solution has improved efficiency by **8x**, saving valuable time and reducing errors in email delivery.

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
├── .env.local.example              # Environment variables
├── .gitignore                      # GitHub ignore
├── .prettierignore                 # Prettier ignore
├── .prettierrc                     # Prettier config
├── .stylelintrc.json               # Stylelint config
├── .next.config.js                 # Next config
├── .playwright.config.js           # Playwright config
├── eslint.config.js                # ESLint config
├── .github                         
│   ├── workflows                   # GitHub Actions CI Pipeline config
├── messages                        # Local strategies folder
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── hooks                       # React hooks
│   ├── i18n                        # Internationalization
│   ├── shared                      # Common components
│   ├── store                       # State manager
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
└── tsconfig.json                   # TypeScript configuration
```

## Usage

Your document can have any structure, content, and meet the following simple criteria:

- must have a .pdf extension
- must not exceed 5MB in size
- must include an "e-mail" field

Example of the document: <img alt="image" src="/public/assets/readme/document.png" />

The document will be sent to the found email from my test email account, with a test subject.

Example of the delivered email: <img alt="image" src="/public/assets/readme/info.JPG" />

Please do not use the application for spam, as I do not want to create a new test account 🤝

To use your email and SMTP settings, please contact me privately.

## Backend
Created with [Nest.js](https://github.com/nestjs/nest)

GitHub - [https://github.com/VladimirDegt/Delivery-PDF-back](https://github.com/VladimirDegt/Delivery-PDF-back)

## Support

Next is an MIT-licensed open source project

## Stay in touch

- Author - Volodymyr Dehtiarev
- Email - [degtyarevvladimirr@gmail.com](mailto:degtyarevvladimirr@gmail.com)
- WhatsApp - [WhatsApp](https://wa.me/380503250874)
- LinkedIn - [LinkedIn profile](https://www.linkedin.com/in/volodymyr-dehtiarev/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE)