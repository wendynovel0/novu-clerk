// src/notifications/notifications.service.ts
import { Injectable } from '@nestjs/common';
import { Novu } from "@novu/node";

@Injectable()
export class NotificationsService {
  private novu: Novu;

  constructor() {
    this.novu = new Novu("635fa0d994282ddc7b10735c6f32b7d9"); // API key de Novu
  }

  async sendWelcomeNotification(userId: string) {
    try {
      await this.novu.trigger("welcome-template", {
        to: { subscriberId: userId },
        payload: {
          message: "¡Bienvenido a nuestra aplicación!",
        },
      });
      console.log(`Notificación de bienvenida enviada a ${userId}.`);
    } catch (error) {
      console.error(
        `Error al enviar notificación de bienvenida a ${userId}.`,
        error,
      );
      throw error;
    }
  }
}
