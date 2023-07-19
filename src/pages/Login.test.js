import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Login from "../pages/Login";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from 'react-router-dom';

jest.mock("../hooks/useLogin");
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));
// mock firebase
jest.mock("../services/firebase/config", () => ({
    auth: jest.fn(),
    db: jest.fn(),
    analytics: jest.fn(),
}));

describe("Login", () => {
    beforeEach(() => {
        useLogin.mockReturnValue({
            error: "",
            login: jest.fn().mockResolvedValue(true),
        });
        useNavigate.mockReturnValue(jest.fn());
    });

    it("renders without crashing", () => {
        render(<Login />);
        const loginElement = screen.getByRole('heading', { name: /Log In/i });
        expect(loginElement).toBeInTheDocument();
    });

    it("can fill and submit the form", async () => {
        render(<Login />);
        const emailInput = screen.getByLabelText("Email");
        const passwordInput = screen.getByLabelText("Password");
        const loginButton = screen.getByRole('button', { name: /Log In/i });

        await userEvent.type(emailInput, "user@example.com");
        expect(emailInput).toHaveValue("user@example.com");

        await userEvent.type(passwordInput, "password");
        expect(passwordInput).toHaveValue("password");

        fireEvent.click(loginButton);
        expect(useLogin().login).toHaveBeenCalledWith("user@example.com", "password");
    });
});
