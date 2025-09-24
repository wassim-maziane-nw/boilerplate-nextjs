const LAST_CONNECTED_EMAIL_KEY = "LAST_CONNECTED_EMAIL";
export const getLastConnectedEmail = (): string => {
  return localStorage.getItem(LAST_CONNECTED_EMAIL_KEY) ?? "";
};
