import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';


// =========== error middleware ============

// error handler
export const handleError: ErrorRequestHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).json({ message, status });
}

// 404 handler
export const notFound: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  const error: any = new Error('Not found.');
  error.status = 404;
  next(error);
}