import type { OpenNextConfig } from '@opennextjs/cloudflare';
import { defineCloudflareConfig } from '@opennextjs/cloudflare';

const baseConfig = defineCloudflareConfig();

const config: OpenNextConfig = {
  ...baseConfig,
  // Extend here if we need to tweak the default Cloudflare adapter behavior.
};

export default config;
