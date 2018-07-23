import fetchIntercept from 'fetch-intercept';

let _httpInterceptorCall = null;

const HttpInterceptor = {
    init: function () {
      _httpInterceptorCall = fetchIntercept.register({
                
        response: function (response) {
            return response.json();
        },
        
        responseError: function (error) {
                // Handle an fetch error
                return Promise.reject(error);
            }
        });
    },
    unregister: function () {
        _httpInterceptorCall();
    },
}

export default HttpInterceptor;