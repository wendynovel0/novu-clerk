// src/notification.service.ts
import { Novu } from "@novu/node";

const novu = new Novu("635fa0d994282ddc7b10735c6f32b7d9");

export async function sendWelcomeNotification(userId: string) {
  await novu.trigger("welcome-template", {
    to: { subscriberId: userId },
    payload: {
      message: "¡Bienvenido a nuestra aplicación!",
    },
  });
}
