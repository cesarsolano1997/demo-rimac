import React from 'react';
import { Text} from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../../../src/components/atoms/Button';


describe('<CustomButton />', () => {
  const mockOnPress = jest.fn();
  const buttonText = 'Click Me';
  beforeEach(() => {
    mockOnPress.mockClear();
  });

  test('should call onPress when button is pressed', () => {
    const { getByText } = render(
      <CustomButton onPress={mockOnPress} type='submit'>
        <Text>{buttonText}</Text>
      </CustomButton>
    );

    const buttonElement = getByText(buttonText);
    fireEvent.press(buttonElement);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('should NOT call onPress when button is disabled', () => {
    const { getByText } = render(
      <CustomButton onPress={mockOnPress} disabled={true} type='submit'>
        <Text>{buttonText}</Text>
      </CustomButton>
    );

    const buttonElement = getByText(buttonText);
    fireEvent.press(buttonElement);

    expect(mockOnPress).not.toHaveBeenCalled();
  });


});