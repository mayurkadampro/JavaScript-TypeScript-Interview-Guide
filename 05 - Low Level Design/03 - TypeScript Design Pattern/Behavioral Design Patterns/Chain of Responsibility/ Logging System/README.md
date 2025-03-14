# Logging System - Chain of Responsibility Design Pattern

## Overview
This project implements a **Logging System** using the **Chain of Responsibility** design pattern in TypeScript. The Chain of Responsibility pattern allows multiple objects to process a request in a sequential manner, passing the request along the chain if necessary.

## **Flow of Execution**
1. **Base Logger Class (`Logger.ts`)**:
   - Defines the logging levels: `INFO`, `DEBUG`, `ERROR`, and `WARNING`.
   - Implements a `setNext` method to pass requests down the chain.
   
2. **Concrete Loggers**:
   - `InfoLogger.ts`: Handles `INFO` level logs.
   - `DebugLogger.ts`: Handles `DEBUG` level logs.
   - `ErrorLogger.ts`: Handles `ERROR` level logs.
   - `WarningLogger.ts`: Handles `WARNING` level logs.
   - If a logger cannot handle the request, it forwards it to the next logger in the chain.

3. **Setting Up the Chain (`index.ts`)**:
   - Loggers are chained together: `InfoLogger -> DebugLogger -> ErrorLogger -> WarningLogger`.
   - When a log request is made, it is passed through the chain until a matching logger processes it.

## **Code Example**
### Logger Class (Base Abstract Class)
```typescript
abstract class Logger {
    static INFO = 1;
    static DEBUG = 2;
    static ERROR = 3;
    static WARNING = 4;

    nextLogger: Logger | null;
    constructor(nextLogger: Logger | null = null) {
        this.nextLogger = nextLogger;
    }

    abstract log(logLevel: number, message: string): void;

    setNext(logLevel: number, message: string) {
        this.nextLogger?.log(logLevel, message);
    }
}
```

### **Concrete Logger Implementation**
```typescript
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
```

### **Index File - Setting Up the Chain**
```typescript
import { Logger } from "./Logger";
import { InfoLogger } from "./InfoLogger";
import { DebugLogger } from "./DebugLogger";
import { ErrorLogger } from "./ErrorLogger";
import { WarningLogger } from "./WarningLogger";

const loggerObj: Logger = new InfoLogger(
    new DebugLogger(
        new ErrorLogger(
            new WarningLogger()
        )
    )
);

loggerObj.log(Logger.DEBUG, "ITS DEBUG VALUE");
loggerObj.log(Logger.INFO, "HEY THIS IS INFORMATION");
loggerObj.log(Logger.ERROR, "EXCEPTION CAUGHT");
loggerObj.log(Logger.WARNING, "ITS WARNING ON RENDERING");
```

## **Benefits of the Chain of Responsibility Pattern**
- **Decouples sender and receiver**: The client doesn’t need to know which logger will handle the request.
- **Flexible and Scalable**: New log levels can be added without modifying existing code.
- **Improved Maintainability**: Each logger has a single responsibility, making debugging easier.

## **When to Use?**
- When multiple handlers should process a request in sequence.
- When the handler for a request isn’t known beforehand and should be determined dynamically.
- When it is necessary to avoid tight coupling between the request sender and the processing objects.

## **Conclusion**
The Chain of Responsibility pattern is a powerful way to handle requests dynamically. This logging system ensures flexibility, maintainability, and modularity in handling log messages of different severity levels.

