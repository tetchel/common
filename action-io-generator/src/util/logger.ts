let isSilent = false;

export function setSilent(silent: boolean): void {
    isSilent = silent;
}

export function log(s: string, ...args: unknown[]): void {
    if (!isSilent) {
        if (args.length > 0) {
            console.log(s, ...args);
        }
        else {
            console.log(s);
        }
    }
}
