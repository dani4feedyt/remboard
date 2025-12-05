  import { AuthConfig } from "convex/server";

  export default {
    providers: [
      {
        domain: "https://clerk.sweng.qzz.io",
        applicationID: "convex",
      },
    ],
  } satisfies AuthConfig;
