import { Account } from "./Account";
import { Bank } from "./Bank";

class ProxyServer implements Account {

    bank: Bank;
    isAuthenticated: boolean;

    constructor(bank: Bank, isAuthenticated: boolean = false) {
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
    checkBalance(accountNumber: string): number | null {
        if (!this.isAuthenticated) {
            console.log("Access Denied: Authentication required.");
            return null;
        }
        
        return this.bank.checkBalance(accountNumber);
    }
    nonAuthCheckPersonName(accountNumber: string): string {
        return this.bank.nonAuthCheckPersonName(accountNumber);
    }
}

export { ProxyServer };