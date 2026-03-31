/* fetchNotes
fetchNoteById
getMe
checkSession. */

import { nextServer } from "./api";
import { cookies } from "next/headers";

export const checkSession = async () => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};
