import { Logger } from "./Logger";

class InfoLogger extends Logger {

    constructor(nextLogger: Logger | null = null) {
        super(nextLogger);
    }

    log(logLevel: number, message: string) {
        if (logLevel === Logger.INFO) {
            console.log(`INFO : ${message}`);
        } else {
            super.setNext(logLevel, message);
        }
    }
}

export { InfoLogger };