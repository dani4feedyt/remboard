  import { AuthConfig } from "convex/server";

  export default {
    providers: [
      {
        domain: "https://direct-filly-36.clerk.accounts.dev",
        applicationID: "convex",
      },
    ],
  } satisfies AuthConfig;