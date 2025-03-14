# Proxy Design Pattern in TypeScript

## 📌 Overview
The **Proxy Design Pattern** is a **structural pattern** that provides a substitute or placeholder for another object to control access, add security, cache results, or perform lazy initialization.

In this example, we implement a **ProxyServer** that acts as a security layer for a **Bank** object. The proxy ensures that only authenticated users can perform transactions while allowing non-authenticated users to check account holder names.

---

## 🔄 **Flow of Execution**
1. **`Bank` Class**: Stores user account details and provides methods for withdrawal, balance checking, and retrieving account holder names.
2. **`ProxyServer` Class**: Acts as a middle layer, enforcing authentication before allowing access to sensitive operations like withdrawals and balance checks.
3. **Client Code**:
   - Tries to withdraw money via the proxy.
   - If authenticated, the proxy forwards the request to the real `Bank` object.
   - If not authenticated, the proxy blocks access and displays an error.

---

## 🚀 **Code Implementation**
```typescript
// Define a common interface for both Bank and Proxy
interface Account {
    withdraw(accountNumber: string, amount: number): void;
    checkBalance(accountNumber: string): number;
    nonAuthCheckPersonName(accountNumber: string): string;
}

// Real Bank implementation
class Bank implements Account {
    private accounts: { [key: string]: { name: string; balance: number } } = {};

    constructor(name: string, accountNumber: string, balance: number) {
        this.accounts[accountNumber] = { name, balance };
    }

    withdraw(accountNumber: string, amount: number): void {
        const account = this.accounts[accountNumber];
        if (!account) {
            console.log("Account not found.");
            return;
        }

        if (amount > account.balance) {
            console.log("Insufficient funds.");
            return;
        }

        account.balance -= amount;
        console.log(`Withdrawn: $${amount}. Remaining balance: $${account.balance}`);
    }

    checkBalance(accountNumber: string): number {
        return this.accounts[accountNumber]?.balance ?? 0;
    }

    nonAuthCheckPersonName(accountNumber: string): string {
        return this.accounts[accountNumber]?.name ?? "Unknown";
    }
}

// Proxy class implementing the same interface
class ProxyServer implements BankAccount {
    private bank: Bank;
    private isAuthenticated: boolean;

    constructor(bank: Bank, isAuthenticated: boolean) {
        this.bank = bank;
        this.isAuthenticated = isAuthenticated;
    }

    withdraw(accountNumber: string, amount: number): void {
        if (!this.isAuthenticated) {
            console.log("Access Denied: Authentication required.");
            return;
        }
        this.bank.withdraw(accountNumber, amount);
    }

    checkBalance(accountNumber: string): number {
        if (!this.isAuthenticated) {
            console.log("Access Denied: Authentication required.");
            return 0;
        }
        return this.bank.checkBalance(accountNumber);
    }

    nonAuthCheckPersonName(accountNumber: string): string {
        return this.bank.nonAuthCheckPersonName(accountNumber);
    }
}

// Usage example
const realBank = new Bank("Alice", "12345", 1000);
const proxy = new ProxyBankAccount(realBank, false);

proxy.withdraw("12345", 200); // Output: Access Denied: Authentication required.

const authProxy = new ProxyBankAccount(realBank, true);
authProxy.withdraw("12345", 200); // Withdraws successfully
```

---

## 🎯 **Benefits of the Proxy Pattern**
✅ **Access Control** – Restricts unauthorized users from performing sensitive actions.  
✅ **Security Enhancement** – Prevents direct access to important objects.  
✅ **Lazy Initialization** – Loads objects only when needed, optimizing resource usage.  
✅ **Logging & Monitoring** – Allows tracking of actions before execution.  
✅ **Performance Optimization** – Implements caching or request batching.  

---

## 📌 **When to Use the Proxy Pattern?**
🔹 **Security Proxies** – Control access to sensitive objects based on authentication.  
🔹 **Cache Proxy** – Store previously fetched data to improve performance.  
🔹 **Logging Proxy** – Log requests before executing operations.  
🔹 **Lazy Loading Proxy** – Load expensive objects only when required.  
🔹 **Virtual Proxy** – Represent resource-intensive objects with lightweight stand-ins.  

---

## 📚 **Conclusion**
The Proxy Design Pattern is an excellent way to enforce **security, access control, and optimization** without modifying the original class. By wrapping the **real object** with a **proxy**, we ensure that all interactions are controlled and managed efficiently. 🚀

