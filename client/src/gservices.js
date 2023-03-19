import { GoogleOAuthProvider } from "google-oauth-gsi";

export const googleProvider = new GoogleOAuthProvider({
  clientId:
    "199941469614-tcdpve2r36ljnm2o504ptn992udrj75e.apps.googleusercontent.com",
  onScriptLoadError: () => console.log("onScriptLoadError"),
  onScriptLoadSuccess: () => console.log("onScriptLoadSuccess"),
});
