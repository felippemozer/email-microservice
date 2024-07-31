# Email API project

## Description

Service responsible for deal with email. It uses [Mailtrap](https://mailtrap.io/) as email delivery platform and [Typescript](https://www.typescriptlang.org/) as programming language along with [NodeJS](https://nodejs.org/pt) as runtime environment.

## Installation

```bash
git clone https://github.com/felippemozer/email-microservice.git
cd email-microservice
yarn ci
```

The command `yarn ci` cleans all previously installed dependencies and reinstalls them according to `yarn.lock` dependency versions. It is similar to [`npm ci`](https://docs.npmjs.com/cli/v10/commands/npm-ci) command.

## Usage

> Before usage: Contact repository owner to retrieve environment variables to execute locally.

To execute Node server locally, you need to run the command `yarn local`. It creates a server at port `4000`; ensure it is available when executing server. To access routes documentation locally, after initialize server, enter `http://localhost:4000/docs` on navigator.

**IMPORTANT:** To execute route correctly, you must send value `harafih372@fuzitea.com` to parameter `to` on route `POST send-email` (check [Notes](#notes) to explanation).

## Notes

Due by limitations on Mailtrap demonstration domain (demomailtrap.com), it is allowed to send emails to account owner only (harafih372@fuzitea.com). To avoid this behavior, it is needed to add a domain maintained by account owner and configured on Mailtrap account. As it is a demonstration project, it was not added any domain other than demonstration domain offered by Mailtrap.