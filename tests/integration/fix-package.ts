import { writeFileSync } from "node:fs";

const manifest = {
  types: "../../../../dist/index.d.ts",
};

writeFileSync(
  "./node_modules/express-zod-api/package.json",
  `${JSON.stringify(manifest)}\n`,
);
