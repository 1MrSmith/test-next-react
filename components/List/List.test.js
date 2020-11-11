import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import List from './index';

describe('List component', () => {
  let container;
  let realUseContext;
  let useContextMock;
  let arrayMock, stringMock, numberMock;

  beforeEach(() => {
    arrayMock = [];
    stringMock = '';
    numberMock = 1;
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    React.useContext = realUseContext;
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', async() => {
    useContextMock.mockReturnValue('Test Value');
    await act(async () => {
      render(
      <List
        data={arrayMock}
        detailsUrl={stringMock}
        paginationUrl={stringMock}
        activePage={numberMock}
        totalPage={numberMock}
        typeVideo={stringMock} />, container);
    });

  });

});
