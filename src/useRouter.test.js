import { useContext } from 'react';

import { useRouter } from './Router';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('useRouter', () => {
  context('without provider', () => {
    beforeEach(() => {
      const context = undefined;

      useContext.mockImplementation(() => context);
    });

    it('throws error', () => {
      try {
        useRouter();
      } catch (e) {
        expect(e.message).toBe('useRouter should be used within Router');
      }
    });
  });

  context('without provider', () => {
    beforeEach(() => {
      const context = 'value';

      useContext.mockImplementation(() => context);
    });

    it('returns value', () => {
      expect(useRouter()).toBe('value');
    });
  });
});
