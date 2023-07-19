import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { useAuthContext } from '../../hooks/useAuthContext';

// Mocking the useAuthContext hook
jest.mock('../../hooks/useAuthContext');

describe('Home', () => {
    beforeEach(() => {
        // Providing a mock return value for the useAuthContext hook
        useAuthContext.mockReturnValue({
            user: { email: 'test@test.com', uid: '123' },
        });
    });

    it('renders without crashing', () => {
        render(<Home />);
    });
});
