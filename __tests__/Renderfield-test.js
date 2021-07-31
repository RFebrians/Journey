import React from 'react';
import {cleanup, render} from '@testing-library/react-native';

import App from '../App';

afterEach(cleanup);

describe('HomeScreen', () => {
  it('should show the title header Journey', () => {
    const JourneyText = 'Journey';
    const notFoundText = 'Not found text';

    const {toJSON, getByText, queryByText} = render(<App/>);

    const foundJourneyTextElement = getByText(JourneyText);
    const notFoundTextElement = queryByText(notFoundText);

    expect(foundJourneyTextElement.props.children).toEqual(JourneyText);
    expect(notFoundTextElement).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should find the button via testId', () => {
    const testIdName = 'pressMeButton';

    const {getAllByTestId} = render( <App/>);

    const foundButton = getAllByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });

  it('should find the button via accessibilityLabel', () => {
    const accessibilityLabel = 'Press me';

    const {getAllByA11yLabel} = render(<App />);

    const foundButton = getAllByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });
});