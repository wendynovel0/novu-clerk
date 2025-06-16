import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/express';
import { sendWelcomeNotification } from "../notifications/notifications.service";

@Injectable()
export class AuthService {
  async signUp(email: string, password: string) {
    const newUser = await clerkClient.users.createUser({ 
      emailAddress: [email], 
      password 
    });

    await sendWelcomeNotification(newUser.id);

    return newUser;
  }

  async getUser(id: string) {
    return clerkClient.users.getUser(id);
  }
}
