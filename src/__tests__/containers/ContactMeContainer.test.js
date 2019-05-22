import { mapStateToProps } from '../../containers/ContactMeContainer'

describe('ContactMe Container', () => {
    it('should return the correct props from state', () => {
        const given = {
            contactMe: {
                name: 'Tom Brady',
                email: 'goat@football.com',
                message: 'We are going to win again!'
            },
            sections: ['USA', 'Boston', 'Patriots']
        };

        const expected = {
            contactMe: {
                name: 'Tom Brady',
                email: 'goat@football.com',
                message: 'We are going to win again!'
            },
        }

        expect(mapStateToProps(given)).toEqual(expected)
    });
});