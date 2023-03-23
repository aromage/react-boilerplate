import mock from './mock';

mock.onGet('/test').reply(() => {
  return [
    200,
    {
      data: 'test',
    },
  ];
});

mock.onPost('/test').reply((config) => {
  return [200, config];
});

mock.onAny().passThrough();
