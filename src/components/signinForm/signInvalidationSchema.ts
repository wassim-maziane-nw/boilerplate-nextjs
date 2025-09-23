import txKeys from "~i18n/translations";
import type { useTranslation } from "~i18n/useTranslation";

import * as z from "zod";

export const buildSignInValidationSchema = (
  translate: ReturnType<typeof useTranslation>,
): z.ZodObject<{ email: z.ZodEmail; password: z.ZodString }> =>
  z.object({
    email: z
      .email(translate(txKeys.common.signInPage.errors.email))
      .endsWith("@theodo.com", translate(txKeys.common.signInPage.errors.email)),
    password: z
      .string(translate(txKeys.common.signInPage.errors.password))
      .min(4, translate(txKeys.common.signInPage.errors.password)),
  });

export type signInValidationType = z.infer<ReturnType<typeof buildSignInValidationSchema>>;
