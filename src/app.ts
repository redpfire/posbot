import { CommandPaperFeed } from "./pos/Commands";
import { POSPrinter } from "./pos/POSPrinter";

async function app() {
    const printer = new POSPrinter();

    printer.writeCommand(new CommandPaperFeed(1));
    printer.write("================\n");
    printer.write("Pokwitowanie\n");
    printer.write("================\n\n\n");
    printer.write("Dziekuje\ncapfen_\nza followa!\n");
    printer.writeCommand(new CommandPaperFeed(12));
    //printer.cut();
};

app();
