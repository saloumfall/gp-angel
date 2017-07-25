// src/app/auth/auth.config.ts

import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'HGdHWUh7gUF2yMiGpGbDZQc8j8z6NaUK',
  CLIENT_DOMAIN: 'saloumfall.eu.auth0.com',
  AUDIENCE: 'http://localhost:8083/api/v2/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};
