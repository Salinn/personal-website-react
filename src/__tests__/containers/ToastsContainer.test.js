import { mapStateToProps } from '../../containers/ToastsContainer'

describe('Toasts Container', () => {
    it('should return the correct props from state', () => {
        const given = {
            toasts: [
                {
                    message: 'Hello Testers',
                    id: '42',
                }
            ]
        };

        const expected = {
            toasts: [
                {
                    message: 'Hello Testers',
                    id: '42',
                }
            ]
        }

        expect(mapStateToProps(given)).toEqual(expected)
    });
});