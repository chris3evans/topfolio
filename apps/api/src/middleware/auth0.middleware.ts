import { environment } from "../environments/environment";

import {
  auth,
  claimCheck,
  InsufficientScopeError,
} from "express-oauth2-jwt-bearer";

import * as dotenv from "dotenv";

dotenv.config();

const validateAccessToken = auth({
  issuerBaseURL: `https://${environment.AUTH0_DOMAIN}`,
  audience: environment.AUTH0_AUDIENCE,
});



export { validateAccessToken }