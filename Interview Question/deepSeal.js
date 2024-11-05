function deepSeal(obj) {
    // Seal the current object
    Object.seal(obj);

    // Recursively seal all properties that are objects
    for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepSeal(obj[key]);
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

deepSeal(config);

// Trying to add a new property (will fail)
config.api.newProperty = true; // ❌ Error: Cannot add property

// Modifying an existing property (allowed)
config.api.timeout = 7000; // ✅ Allowed

// Trying to delete a property (will fail)
delete config.settings.theme; // ❌ Error: Cannot delete property
