export const environment = {
  production: false,
  APP_NAME: 'compliance365-webapp',
  KEYCLOAK_URL: 'https://keycloak1.itbycloud.com:8443/',
  KEYCLOAK_RELM: 'compliance365',
  KEYCLOAK_REDIRECT_URI: 'http://localhost/keycloak',
  KEYCLOAK_CLIENT_ID: 'compliance365-client',
  KEYCLOAK_CLIENT_SECRET: 'gw5YGxVG3ypCVGF3VkSRjHoKKytMS9G1',
  KEYCLOAK_TOKEN_ENDPOINT: 'https://keycloak1.itbycloud.com:8443/realms/compliance365/protocol/openid-connect/token',
  KEYCLOAK_AUTH_ENDPOINT: 'https://keycloak1.itbycloud.com:8443/realms/compliance365/protocol/openid-connect/auth',
  KEYCLOAK_LOGIN_URI: 'http://localhost:9193/',
  KEYCLOAK_LOGOUT_URI: 'http://localhost/login',
  KEYCLOAK_PKEC_CHALLENGE: 'S256',
  API_GATEWAY_URL: 'http://localhost'
  
};

