import { SSTConfig } from "sst";
import { ProfileStack } from "./stacks/ProfileStack";

export default {
  config(_input) {
    return {
      name: "InSearchOf-Profile",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ProfileStack);
  }
} satisfies SSTConfig;
