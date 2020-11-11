import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Card from './index';

describe('Card component', () => {
  let realUseContext;
  let useContextMock;
  let stringMock, numberMock, booleanMock;

  beforeEach(() => {
    stringMock = '';
    numberMock = 1;
    booleanMock = false;
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('renders without crashing', async() => {
    useContextMock.mockReturnValue('Test Value');

    const element = new ShallowRenderer().render(
      <Card
        key={numberMock}
        id={numberMock}
        title={stringMock}
        imageLink={stringMock}
        detailsUrl={stringMock}
        typeVideo={stringMock}
        checked={booleanMock} />
    );

    expect(element).toMatchSnapshot();

  });

});
