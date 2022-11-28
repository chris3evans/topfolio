import { environment } from "../environments/environment";
const {
  auth,
  claimCheck,
  InsufficientScopeError,
} = require("express-oauth2-jwt-bearer");
const dotenv = require("dotenv");

dotenv.config();

const validateAccessToken = auth({
  issuerBaseURL: `https://${environment.AUTH0_DOMAIN}`,
  audience: environment.AUTH0_AUDIENCE,
});


module.exports = {
  validateAccessToken,
};
