import { CHAR, ESC, GS, POSCommand } from './POSCommand';

export class CommandInit implements POSCommand {
    prefix = ESC;
    command = "@";

    payload = "";
};

export class CommandPaperCut implements POSCommand {
    prefix = GS;
    command = "V";

    payload = CHAR([66, 0]);
};

export class CommandPaperFeed implements POSCommand {
    prefix = ESC;
    command = "d";

    payload = CHAR([0]);

    constructor(lines: number) {
        this.payload = CHAR([lines]);
    }
};

export class CommandPrintMode implements POSCommand {
    prefix = ESC;
    command = "!";

    payload = CHAR([0]);

    constructor(printMode: number) {
        this.payload = CHAR([printMode]);
    }
};
