import { Account } from "./Account";

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
        return this.accounts[accountNumber].balance;
    }

    nonAuthCheckPersonName(accountNumber: any): string {
        return this.accounts[accountNumber].name;
    }
}

export { Bank };