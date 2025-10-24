
import { render, fireEvent } from '@testing-library/react-native';
import Link from '../../../src/components/atoms/Link';

describe('<Link />', () => {
    
    test('should exec when is clicked', () => {
        const mockFn = jest.fn();
         
        
        const { getByText } = render(<Link text="Mi Enlace" onPress={mockFn} />);
        
        fireEvent.press(getByText('Mi Enlace'));
        
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

});