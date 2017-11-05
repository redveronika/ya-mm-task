import { parseCommand } from '../../utils/shared.function';

describe('console component', () => {
    it('should return selectTab(tabIndex) command parsing result', () => {
        expect(
            parseCommand('selectTab(1)'),
        ).toEqual({ strArgs: '1', strCommand: 'selectTab' });
    });

    // «Двойные скобки» — должен вернуть null в строке команды.
    it('should return selectTab(1)() command parsing null result', () => {
        expect(
            parseCommand('selectTab(1)()'),
        ).toEqual({ strArgs: null, strCommand: null });
    });

    // Опечатка — должен вернуть null в строке команды.
    it('should return selecttab(1) command parsing null result', () => {
        expect(
            parseCommand('selecttab(1)'),
        ).toEqual({ strArgs: null, strCommand: null });
    });

    it('should return swapTabs(tabIndex1, tabIndex2) command parsing result', () => {
        expect(
            parseCommand('swapTabs(1, 2)'),
        ).toEqual({ strArgs: '1, 2', strCommand: 'swapTabs' });
    });

    it('should return showStat() command parsing result', () => {
        expect(
            parseCommand('showStat()'),
        ).toEqual({ strArgs: '', strCommand: 'showStat' });
    });

    it('should return setBest(maxStars) command parsing result', () => {
        expect(
            parseCommand('setBest(5)'),
        ).toEqual({ strArgs: '5', strCommand: 'setBest' });
    });

    it('should return setBest(maxStars) command parsing result', () => {
        expect(
            parseCommand('setBest(5)'),
        ).toEqual({ strArgs: '5', strCommand: 'setBest' });
    });
});
