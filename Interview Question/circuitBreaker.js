const HALT_TIME = 5000; // 5 seconds
const FAILED_THRESHOLD = 3; // Number of failed attempts before halting

const circuitBreaker = (cb, haltTime = HALT_TIME, failThreshold = FAILED_THRESHOLD) => {
    let failCount = 0;
    let isHalted = false;
    let timeout;

    return () => {
        if (isHalted) {
            console.log("Service is currently unavailable. Please wait a moment and try again.");
            return;
        }

        try {
            const result = cb();
            failCount = 0; // Reset fail count if call succeeds
            console.log("Call succeeded");
            return result;
        } catch (error) {
            failCount++;
            console.log(`Call failed (${failCount}/${failThreshold})`);

            if (failCount >= failThreshold) {
                isHalted = true;
                console.log(`Threshold reached. Halting calls for ${haltTime / 1000} seconds.`);

                timeout = setTimeout(() => {
                    failCount = 0; // Reset fail count after halt period
                    isHalted = false;
                    console.log("Service resumed.");
                }, haltTime);
            }
        }
    };
};

// Example usage:
const mockApiCall = () => {
    if (Math.random() > 0.5) {
        throw new Error("API call failed.");
    }
    return "API call succeeded.";
};

const testFunction = circuitBreaker(mockApiCall);

// Simulate multiple calls
for (let i = 0; i < 10; i++) {
    testFunction();
}


// let request after some interval
setTimeout(() => {
    testFunction();
}, HALT_TIME);
