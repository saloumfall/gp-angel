// src/app/core/env.config.ts

const _isDev = window.location.port.indexOf('4200') > -1;
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;

  return `${protocol}//${host}`;
};

const apiURI = _isDev ? 'http://localhost:8083/api/v2/' : '/api/v2/';

export const  ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};
