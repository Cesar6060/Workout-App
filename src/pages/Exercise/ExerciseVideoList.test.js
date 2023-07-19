import React from 'react';
import { render } from '@testing-library/react';
import ExerciseVideoList from './Exercise';
import axios from 'axios';

jest.mock('axios');

describe('ExerciseVideoList', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: { results: [] } });
    });

    it('renders without crashing', () => {
        render(<ExerciseVideoList />);
    });
});
