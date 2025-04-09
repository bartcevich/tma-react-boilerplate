import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    price_display:
      "How {n, number, ::currency/USD} is displayed in your selected language",
    number_display:
      "This is how {n, number} is formatted in the selected locale",
    // friends
    Friends_invite: "Invite link",
    friends_instruction: "How it works",
  },
  [LOCALES.RUSSIAN]: {
    price_display:
      "Как {n, number, ::currency/RUB} отображается на выбранном языке",
    number_display:
      "Вот как {n, number} форматируется на основе выбранной локации",
    // friends
    Friends_invite: "ссылка для приглашения",
    friends_instruction: "что нужно сделать",
  },
};
