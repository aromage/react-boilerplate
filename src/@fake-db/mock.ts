import MockAdapter from 'axios-mock-adapter';
import { axiosGeneralAPI } from 'src/services';

const mock = new MockAdapter(axiosGeneralAPI());

export default mock;
