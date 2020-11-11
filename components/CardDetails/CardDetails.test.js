import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CardDetails from './index';

const mockStore = configureStore([]);

describe('CardDetails component', () => {
  let realUseContext;
  let useContextMock;
  let store;

  beforeEach(() => {
    store = mockStore({
      tvShowDetail: [],
      isLoading: false,
    });
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('renders without crashing', async() => {
    useContextMock.mockReturnValue('Test Value');

    const element = new ShallowRenderer().render(
      <Provider store={store}>
        <CardDetails />
      </Provider>
    );

    expect(element).toMatchSnapshot();

  });

});
