import { act, cleanup, render, wait } from '@testing-library/react';
import React from 'react';
import { UseEffectHook } from './UseEffectHook';

jest.mock('../utils.js', () => ({
  getJoke: async () => ({
    value: 'Chuck Norris built the Panama Canal with his left foot.'
  })
}));

afterEach(cleanup);

describe('UseEffectHook', () => {
  it('загружает и показывает шутку о Чаке Норрисе', async () => {
    let getByTestIdReference;

    act(() => {
      const { getByTestId } = render(<UseEffectHook />);
      getByTestIdReference = getByTestId;
    });

    await wait(() => getByTestIdReference('joke'));
    expect(getByTestIdReference('joke').textContent).toEqual('Chuck Norris built the Panama Canal with his left foot.');
  });
});
