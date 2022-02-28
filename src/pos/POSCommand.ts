export interface POSCommand {
    prefix: string;
    command: string;

    payload: string;
};

export const CHAR = (toEncode: number[]) => toEncode.reduce<string>((acc, byte) => `${acc}${String.fromCharCode(byte)}`, "");
export const ESC = CHAR([0x1b]);
export const GS = CHAR([0x1d]);
export const LF = CHAR([0x0a]);
