import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating "N" dev-mode indicator in the bottom-left during
  // `next dev`. Has no effect on production builds (the indicator is
  // dev-only) — but cleans up the corner while iterating locally.
  devIndicators: false,
};

export default nextConfig;
