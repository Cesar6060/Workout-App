import { render, fireEvent } from '@testing-library/react';
import WorkoutPlan from './WorkoutPlan';

it('renders without crashing', () => {
    render(<WorkoutPlan />);
});

it('can fill and submit the form', () => {
    const { getByTestId } = render(<WorkoutPlan />);
    const form = getByTestId('workout-plan-form');
    const muscleGroupSelect = getByTestId('muscleGroup-select');
    const exerciseInput = getByTestId('exercise-input');
    const repsInput = getByTestId('reps-input');
    const setsInput = getByTestId('sets-input');
    const saveButton = getByTestId('save-button');

    fireEvent.change(muscleGroupSelect, { target: { value: 'Biceps' } });
    fireEvent.change(exerciseInput, { target: { value: 'Bicep Curl' } });
    fireEvent.change(repsInput, { target: { value: '10' } });
    fireEvent.change(setsInput, { target: { value: '3' } });
    fireEvent.click(saveButton);

    expect(form).toHaveFormValues({
        muscleGroup: 'Biceps',
        exercise: 'Bicep Curl',
        reps: '10',
        sets: '3'
    });
});
