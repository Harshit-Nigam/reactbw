
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.16d2b671b0454b0a83b02b5a28bb1cff',
  appName: 'BWStory Test',
  webDir: 'dist', // This is the folder where your web app's built files will go
  bundledWebRuntime: false,
  server: {
    // This URL is for live reload in development with Capacitor
    // Make sure it matches your Lovable project's preview URL
    url: 'https://16d2b671-b045-4b0a-83b0-2b5a28bb1cff.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0, // Optional: control splash screen behavior
    },
  },
};

export default config;
