import { Logger } from "./Logger";
import { InfoLogger } from "./InfoLogger";
import { DebugLogger } from "./DebugLogger";
import { ErrorLogger } from "./ErrorLogger";
import { WarningLogger } from "./WarningLogger";


const loggerObj: Logger = new InfoLogger(new DebugLogger(new ErrorLogger(new WarningLogger())));


loggerObj.log(Logger.DEBUG, "ITS DEBUG VALUE");
loggerObj.log(Logger.INFO, "HEY THIS IS INFORMATION");
loggerObj.log(Logger.ERROR, "EXCEPTION CAUGHT");
loggerObj.log(Logger.WARNING, "ITS WARNING ON REDNERING");