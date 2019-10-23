export const context: any = {
    request: {
      method: 'POST',
      url: '/creditcard/verify',
      header: {
        'content-type': 'application/json',
        'user-agent': 'PostmanRuntime/7.17.1',
        accept: '*/*',
        'cache-control': 'no-cache',
        'postman-token': '3fabd05d-ccdb-4c98-874f-0100148eae80',
        host: 'localhost:3000',
        'accept-encoding': 'gzip, deflate',
        'content-length': '290',
        connection: 'keep-alive'
      }
    },
    response: {
      status: 404,
      message: 'Not Found',
      header: {}
    },
    app: {
      subdomainOffset: 2,
      proxy: false,
      env: 'development'
    },
    originalUrl: '/creditcard/verify',
    req: '<original node req>',
    res: '<original node res>',
    socket: '<original node socket>'
  };

export const fullContext: any = (() => {
    context.request.body = {
        method: 'POST',
        url: '/creditcard/verify',
        header: {
          'content-type': 'application/json',
          'user-agent': 'PostmanRuntime/7.17.1',
          accept: '*/*',
          'cache-control': 'no-cache',
          'postman-token': '5eeca60e-2a99-440c-ae28-bf6a001aa87e',
          host: 'localhost:3000',
          'accept-encoding': 'gzip, deflate',
          'content-length': '290',
          connection: 'keep-alive'
        }
    };
    
    return context;
})

export const body: any = {
	customerId: 1,
	document: 'creditcard',
	type: 'Visa',
  name: 'Prasad S Udugama',
  number: 4408041234567893,
  csv: 120,
};

export const saveCardResponse: any = {
  _id: '5d935e212ed59007872bfef3',
	customerId: 1,
	document: 'creditcard',
	type: 'Visa',
  name: 'Prasad S Udugama',
  number: 4408041234567893,
  csv: 120,
  __v: 0 
};
