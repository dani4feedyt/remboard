  import { AuthConfig } from "convex/server";

  export default {
    providers: [
      {
        domain: "https://flowing-glider-78.clerk.accounts.dev",
        applicationID: "convex",
      },
    ],
  } satisfies AuthConfig;