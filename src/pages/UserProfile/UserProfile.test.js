import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
    it('renders without crashing', () => {
        render(<UserProfile />);
    });

    it('can fill and submit the form', () => {
        const { getByTestId } = render(<UserProfile />);
        const form = getByTestId('user-form');
        const nameInput = getByTestId('name-input');
        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@doe.com' } });
        fireEvent.change(passwordInput, { target: { value: 'secret' } });


        fireEvent.submit(form);
    });
});
