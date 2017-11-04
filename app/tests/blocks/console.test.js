import { Console } from '../../blocks';

describe('console component', () => {
    it('should return showStat() command parsing result', () => {
        expect(
            Console.parseCommand('showStat()'),
        ).toEqual({ strArgs: '', command: 'showStat()' });
    });
});
