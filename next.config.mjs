import { promises as fs } from "fs";
import path from "path";

// Load settings.json using the fs.promises API
const settingsPath = path.join(process.cwd(), "settings.json");
const settings = await fs.readFile(settingsPath, "utf-8").then(JSON.parse);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(settings.api).hostname,
        pathname: "**",
      }
    ],
  },
};

export default nextConfig;
