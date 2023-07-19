import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContextProvider } from '../../contexts/authContext'; // Import the AuthContextProvider
import NavigationBar from './NavigationBar';

jest.mock('react-router-bootstrap', () => ({
    LinkContainer: jest.fn(({ children }) => <div>{children}</div>)
}));

describe('NavigationBar', () => {
    test('renders navigation links', () => {
        render(
            <AuthContextProvider> {/* Wrap NavigationBar with AuthContextProvider */}
                <BrowserRouter>
                    <NavigationBar />
                </BrowserRouter>
            </AuthContextProvider>
        );

        // Assert that the navigation links are rendered
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    test('calls logout when Logout button is clicked', () => {
        const { logout } = require('../../hooks/useLogout');

        render(
            <AuthContextProvider> {/* Wrap NavigationBar with AuthContextProvider */}
                <BrowserRouter>
                    <NavigationBar />
                </BrowserRouter>
            </AuthContextProvider>
        );

        // Simulate a click on the Logout button
        fireEvent.click(screen.getByText('Logout'));

        // Assert that the logout function is called
        expect(logout).toHaveBeenCalled();
    });
});
