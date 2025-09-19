import { useEffect, useState } from "react";

import * as z from "zod";

const lastLoggedInUserSchema = z.string().nullable();
type LastLoggedInUserType = z.infer<typeof lastLoggedInUserSchema>;

export const useLastConnectedUser = (): LastLoggedInUserType => {
  const [user, setUser] = useState<LastLoggedInUserType>(null);
  useEffect(() => {
    try {
      const fullname = lastLoggedInUserSchema.parse(localStorage.getItem("LAST_CONNECTED_FULLNAME"));
      setUser(fullname);
    } catch {
      setUser(null);
    }
  }, []);
  return user;
};
