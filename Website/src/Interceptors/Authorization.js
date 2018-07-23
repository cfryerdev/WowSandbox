import fetchIntercept from 'fetch-intercept';
import Store from '../Utilities/Store';

let _authInterceptorCall = null;

const AuthorizationInterceptor = {
    init: function () {
      _authInterceptorCall = fetchIntercept.register({
                request: function (url, config) {
                      // Modify the url or config here
                      return [url, config];
                },
              
                response: function (response) {
                      if (response.url && response.url.endsWith('account/login')) {
                        return response;
                      }
                      switch (response.status)
                      {
                        case 401:
                          window.location.href = '/noaccess';
                          break;

                        case 403:
                          window.location.href = '/login';
                          break;

                        default:
                          return response;
                      }
                },
            });
    },
    unregister: function () {
      _authInterceptorCall();
    },
}

export default AuthorizationInterceptor;