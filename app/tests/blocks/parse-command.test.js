import { parseCommand } from '../../utils/console.function';

describe('console command parsing function', () => {
    it('should return selectTab(tabIndex) command parsing result', () => {
        expect(
            parseCommand('selectTab(1)'),
        ).toEqual({ argsArray: ['1'], strCommand: 'selectTab' });
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

    it('should return setScore(score) command parsing result', () => {
        expect(
            parseCommand('setScore(3)'),
        ).toEqual({ argsArray: ['3'], strCommand: 'setScore' });
    });

    it('should return setActiveColor(HEX) command parsing result', () => {
        expect(
            parseCommand('setActiveColor("#ffe000")'),
        ).toEqual({ argsArray: ['#ffe000'], strCommand: 'setActiveColor' });
    });

    it('should return setInactiveColor(HEX) command parsing result', () => {
        expect(
            parseCommand('setInactiveColor("#eee")'),
        ).toEqual({ argsArray: ['#eee'], strCommand: 'setInactiveColor' });
    });

    it('should return setProgress(progress) command parsing result', () => {
        expect(
            parseCommand('setProgress(50)'),
        ).toEqual({ argsArray: ['50'], strCommand: 'setProgress' });
    });

    // Пустой ввод — должен вернуть null в строке команды и пустую строку в аргументах
    it('should return empty command parsing result', () => {
        expect(
            parseCommand(''),
        ).toEqual({ argsArray: null, strCommand: '' });
    });

    // «Двойные скобки» — должен вернуть null в строке команды.
    it('should return selectTab(1)() command parsing null result', () => {
        expect(
            parseCommand('selectTab(1)()'),
        ).toEqual({ argsArray: null, strCommand: null });
    });

    // Лишний символ после скобок — должен вернуть null в строке команды.
    it('should return selectTab(1)a command parsing null result', () => {
        expect(
            parseCommand('selectTab(1)а'),
        ).toEqual({ argsArray: null, strCommand: null });
    });

    // Отсутствует «закрывающая скобка» — должен вернуть null в строке команды.
    it('should return selectTab( command parsing null result', () => {
        expect(
            parseCommand('selectTab('),
        ).toEqual({ argsArray: null, strCommand: null });
    });

    // Опечатка — должен вернуть null в строке команды.
    it('should return selecttab(1) command parsing null result', () => {
        expect(
            parseCommand('selecttab(1)'),
        ).toEqual({ argsArray: null, strCommand: null });
    });

    // Не введено имя команды — должен вернуть null в строке команды и аргументов.
    it('should return empty command name parsing result', () => {
        expect(
            parseCommand('(3, 4)'),
        ).toEqual({ argsArray: null, strCommand: null });
    });
});
