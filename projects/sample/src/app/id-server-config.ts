import { AuthConfig } from 'angular-oauth2-oidc';

const config: AuthConfig = {
  issuer: 'https://furstidentityservertest.interapp.intra.furst.no',
  redirectUri: window.location.origin,
  clientId: '4c8a325ae2434ae79a39dd78cf1733b2.furst.angularoidcpoc',
  responseType: 'code',
  scope: 'openid profile offline_access pasientrutine',
  silentRefreshRedirectUri: `${window.location.origin}`,
  useSilentRefresh: false,
  showDebugInformation: true,
  sessionChecksEnabled: false,
  timeoutFactor: 0.01,
  clearHashAfterLogin: true,
};

export function idServerConfig(): AuthConfig {
  console.table(config);
  return config;
}
