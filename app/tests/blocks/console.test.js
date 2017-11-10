import { parseCommand } from '../../utils/console.function';

describe('console command parsing function', () => {
    it('should return selectTab(tabIndex) command parsing result', () => {
        expect(
            parseCommand('selectTab(1)'),
        ).toEqual({ argsArray: ['1'], strCommand: 'selectTab' });
    });

    // «Двойные скобки» — должен вернуть null в строке команды.
    it('should return selectTab(1)() command parsing null result', () => {
        expect(
            parseCommand('selectTab(1)()'),
        ).toEqual({ argsArray: null, strCommand: null });
    });

    // Опечатка — должен вернуть null в строке команды.
    it('should return selecttab(1) command parsing null result', () => {
        expect(
            parseCommand('selecttab(1)'),
        ).toEqual({ argsArray: null, strCommand: null });
    });

    it('should return swapTabs(tabIndex1, tabIndex2) command parsing result', () => {
        expect(
            parseCommand('swapTabs(1, 2)'),
        ).toEqual({ argsArray: ['1', '2'], strCommand: 'swapTabs' });
    });

    it('should return showStat() command parsing result', () => {
        expect(
            parseCommand('showStat()'),
        ).toEqual({ argsArray: null, strCommand: 'showStat' });
    });

    it('should return setBest(maxStars) command parsing result', () => {
        expect(
            parseCommand('setBest(5)'),
        ).toEqual({ argsArray: ['5'], strCommand: 'setBest' });
    });

    it('should return setBest(maxStars) command parsing result', () => {
        expect(
            parseCommand('setBest(5)'),
        ).toEqual({ argsArray: ['5'], strCommand: 'setBest' });
    });

    it('should return empty command parsing result', () => {
        expect(
            parseCommand(''),
        ).toEqual({ argsArray: null, strCommand: '' });
    });
});
