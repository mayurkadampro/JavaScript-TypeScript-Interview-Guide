function deepFreeze(obj) {
    // Freeze the current object
    Object.freeze(obj);

    // Recursively freeze all properties that are objects
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    }

    return obj;
}

// Example usage
const config = {
    api: {
        url: "https://api.example.com",
        timeout: 5000,
    },
    settings: {
        theme: "dark",
        notifications: true,
    },
};

deepFreeze(config);

// Trying to modify any property (will fail)
config.api.timeout = 7000; // ❌ Error: Cannot assign to read-only property

// Trying to add a new property (will fail)
config.settings.newProperty = "test"; // ❌ Error: Cannot add property

// Trying to delete a property (will fail)
delete config.settings.theme; // ❌ Error: Cannot delete property
