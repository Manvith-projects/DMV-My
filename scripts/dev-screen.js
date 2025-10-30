import { execSync, execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import VALID_SCREENS from "../src/constants/validScreens.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI escape codes for console colors
const ANSI_RED = "\x1b[31m";
const ANSI_GREEN = "\x1b[32m";
const ANSI_RESET = "\x1b[0m";

const screenName = process.argv[2];

if (!screenName) {
  console.error(
    `${ANSI_RED}%s${ANSI_RESET}`,
    "Error: No screen name provided."
  );
  console.log("Usage: npm run screen <screen-name>");
  process.exit(1);
}

if (!VALID_SCREENS.includes(screenName)) {
  console.error(
    `${ANSI_RED}%s${ANSI_RESET}`,
    `Error: Invalid screen name: '${screenName}'.`
  );
  console.log(
    "Please use one of the valid screen names. You can find the list in src/constants/validScreens.js or project documentation."
  );
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, "..");
const mockDataPath = path.join(
  projectRoot,
  "src",
  "mock-data",
  `${screenName}.json`
);

if (!fs.existsSync(mockDataPath)) {
  console.error(
    `${ANSI_RED}%s${ANSI_RESET}`,
    `Error: Mock data file not found for screen '${screenName}'.`
  );
  console.log(
    `Please create '${screenName}.json' in the 'src/mock-data/' directory.`
  );
  process.exit(1);
}

process.env.VITE_SCREEN_NAME = screenName;

console.log(
  `${ANSI_GREEN}%s${ANSI_RESET}`,
  `Starting Vite dev server for screen: ${screenName}...`
);

try {
  // Prefer the locally installed Vite binary inside node_modules/.bin so
  // we don't rely on a globally-installed `vite` command. On Windows the
  // binary will be `vite.cmd`.
  const viteBin = path.join(
    projectRoot,
    "node_modules",
    ".bin",
    process.platform === "win32" ? "vite.cmd" : "vite"
  );

  if (fs.existsSync(viteBin)) {
    execFileSync(viteBin, { stdio: "inherit" });
  } else {
    // Fallback to npx which will run the local or remote vite if available.
    execSync("npx vite", { stdio: "inherit" });
  }
} catch (error) {
  console.error(
    `${ANSI_RED}%s${ANSI_RESET}`,
    `Vite server failed to start or exited with an error for screen: ${screenName}.`
  );
  // Print the underlying error to help debugging
  console.error(error && error.stack ? error.stack : error);
  process.exit(error && error.status ? error.status : 1);
}
