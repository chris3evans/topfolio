# TOPFOLIO - A Professional Portfolio Web App

TOPFOLIO is a web app that helps professionals create their personal portfolios, showcase their skills, work experience and projects they've worked on.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

### Environment Variables

To run the project, you need to set up environment variables. 

For the **client**, you will need to create a file in `Project_Folder\apps\topfolio\src\environments\environment.ts` with the following variables:
```
export const environment = {
  production: false,
  API_URL: 'http://localhost:3333/user',
  REACT_APP_AUTH0_DOMAIN: '',
  REACT_APP_AUTH0_CLIENT_ID: '',
  REACT_APP_AUTH0_CALLBACK_URL: 'http://localhost:4200/callback',
  REACT_APP_AUTH0_AUDIENCE: 'https://hello-world.example.com',
  GOOGLE_FONT_API:
    'https://www.googleapis.com/webfonts/v1/webfonts?key=<YOUR KEY GOES HERE>',
  GPT3_KEY: '',
};
```
For the **server**, you will need to create a file in `Project_Folder\apps\api\src\environments\environment.ts` with the following variables:
```
export const environment = {
  production: false,
  DB_URI:"MongoDB or Atlas connection link",
  AUTH0_DOMAIN: '',
  AUTH0_AUDIENCE: 'https://hello-world.example.com',
  Test_db: '',
  Test_token:'',
  email: '',
  password: '',
};
```


### Running the App

Once you have the environment variables set up, you can run the app with the following commands: 

* For the server: `npm run serve:api`
* For the client: `npm start`

## Usage

Once the application is up and running, you can start creating your personal portfolio. You will be able to add your skills, work experience and projects, as well as customize the look. Finally you can share the link to your portfolio with potential employers, colleagues and friends.

## Tech Stack

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Express]([https://nestjs.com/](https://expressjs.com/)
* [Nx](https://nx.dev/)

## Contributing

To contribute to TOPFOLIO, please submit a pull request.

## License

TOPFOLIO is released under the MIT license. See [LICENSE](LICENSE) for more details.
