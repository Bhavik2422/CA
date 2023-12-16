/**
 * This is common constant values used in application, which will never changed.
 * 
 * @returns {JSON} JSON Object of all constant values with key-value pair
 */
export default {

    /**
     * API type
     */
    POST:'POST',
    GET : 'GET',
    DELETE: 'DELETE',
    PUT: 'PUT',
    /**
     * API headers
     */
    HEADER_GENERAL: { 'Content-Type': 'application/json; charset=utf-8' },
    /**
     * Ai base url
     */
    BASE_URL:  'https://dummyjson.com',
    /**
     * API end points
     */
    GET_ALL_PRODUCTS:  '/products',
    LOGIN_USER: '/auth/login',
    ADD_PRODUCT: '/products/add',
    PRODUCT_SEARCH: '/products/search',
    /**
     * API parameters
     */
    SKIP: 'skip',
    LIMIT: 'limit',
    QUERY_STRING_SEARCH: 'q',




    /** ******************************
     * For Navigation
     */
    ERROR_NET_TITLE:"Network Error",
    IS_HEADER_SHOWN : false,
    
     /**
     * Multiple API call in single page, this define All the API call type
     */    
     API_CALL_TYPE: Object.freeze({NONE:0}),

     /**
      * Loader size
      */
     GENERAL_LOADER_SIZE: 70,
     SPLASH_LOADER_SIZE: 30

};