import { POSCommand } from "./POSCommand";
import * as fs from 'fs';
import { CommandInit, CommandPaperCut, CommandPrintMode } from "./Commands";

export class POSPrinter {
    private filePath: string;
    private file: number;

    constructor() {
        this.filePath = "/dev/ttyUSB0";
        this.file = fs.openSync(this.filePath, 'w')

        this.writeCommand(new CommandInit());
        this.writeCommand(new CommandPrintMode(16+32));
    }

    destructor() {
        fs.closeSync(this.file);
    }

    cut() {
        this.writeCommand(new CommandPaperCut());
    }

    writeCommand(command: POSCommand) {
        return this.write(`${command.prefix}${command.command}${command.payload}`);
    }

    write(data: string) {
        console.log(`writing ${data}`);

        fs.writeSync(this.file, data);
    }
};
