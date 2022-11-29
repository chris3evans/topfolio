import {
  InvalidTokenError,
  UnauthorizedError,
  InsufficientScopeError,
} from "express-oauth2-jwt-bearer";

const errorHandler = (error, request, response, next) => {

  let status = 'error';

  if (error instanceof InsufficientScopeError) {
    const message = "Permission denied";

    response.status(error.status).json({ status, message });

    return;
  }

  if (error instanceof InvalidTokenError) {
    const message = "Bad credentials";

    response.status(error.status).json({ status, message });

    return;
  }

  if (error instanceof UnauthorizedError) {
    const message = "Requires authentication";

    response.status(error.status).json({ status, message });

    return;
  }

  const status_code = 500;
  const message = "Internal Server Error";

  response.status(status_code).json({ status, message });
};

export { errorHandler };