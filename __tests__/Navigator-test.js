//react native testing library 

import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import RootNavigator from '../navigation/RootNavigator';

describe('Testing react navigation', () => {
  test('page contains the title and detail screen', async () => {
    const component = (
      
        <RootNavigator />
      
    );

    const { findByText, findAllByText } = render(component);

    const title = await findAllByText('Morning');
    const item = await findByText('Where ever you Go');

    expect(title).toBeTruthy();
    expect(item.item).toBeTruthy();
  });

  test('go to the details screen', async () => {
    const component = (
      
        <RootNavigator />
      
    );

    const { findByText } = render(component);
    const toClick = await findByText('Morning');

    fireEvent(toClick, 'press');
    const title = await findByText('Morning ');
    const item = await findByText('Where ever you Go');

    expect(title).toBeTruthy();
    expect(item).toBeTruthy();
  });
});