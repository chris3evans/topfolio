# TOPFOLIO - A Professional Portfolio Web App

TOPFOLIO is a web app that helps professionals create their personal portfolios, showcase their skills, work experience and projects they've worked on.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

### Environment Variables

To run the project, you need to set up environment variables. 

For the **client**, you will need to create a file in `Project_Folder\apps\topfolio\src\environments` with the following variables:

* API_URL 
* REACT_APP_AUTH0_DOMAIN 
* REACT_APP_AUTH0_CLIENT_ID 
* REACT_APP_AUTH0_CALLBACK_URL 
* REACT_APP_AUTH0_AUDIENCE 
* GOOGLE_FONT_API 
* GPT3_KEY 

For the **server**, you will need to create a file in `Project_Folder\apps\api\src\environments` with the following variables:

* DB_URI 
* AUTH0_DOMAIN 
* AUTH0_AUDIENCE 
* Test_db 
* Test_token 
* email 
* password 

### Running the App

Once you have the environment variables set up, you can run the app with the following commands: 

* For the server: `npm run serve:api`
* For the client: `npm start`

## Contributing

To contribute to TOPFOLIO, please submit a pull request.

## License

TOPFOLIO is released under the MIT license. See [LICENSE](LICENSE) for more details.
