import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nicobytes.app',
  appName: 'Nicobytes App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
