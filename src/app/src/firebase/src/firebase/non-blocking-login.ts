import { signInAnonymously, Auth } from "firebase/auth";

export function initiateAnonymousSignIn(auth: Auth) {
  return signInAnonymously(auth).catch((err) => {
    console.error("Anonymous sign-in failed:", err);
  });
}
