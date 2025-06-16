// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/express';
import { NotificationsService } from "../notifications/notifications.service";

@Injectable()
export class AuthService {
  constructor(private notificationsService: NotificationsService) {}

  async signUp(email: string, password: string) {
    // Carga el nuevo usuario en Clerk
    const newUser = await clerkClient.users.createUser({ 
      emailAddress: [email], 
      password,
    });

    // Envía la notificación de bienvenida
    await this.notificationsService.sendWelcomeNotification(newUser.id);

    return newUser;
  }

  async getUser(id: string) {
    return clerkClient.users.getUser(id);
  }
}
