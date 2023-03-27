import MockAdapter from 'axios-mock-adapter';
import { axiosTestAPI } from 'src/services';

const mock = new MockAdapter(axiosTestAPI());

export default mock;
