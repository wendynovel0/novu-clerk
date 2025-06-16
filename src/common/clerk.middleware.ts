import { Injectable, NestMiddleware } from '@nestjs/common';
import { clerkMiddleware } from '@clerk/express';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ClerkMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    clerkMiddleware()(req, res, next);
  }
}
