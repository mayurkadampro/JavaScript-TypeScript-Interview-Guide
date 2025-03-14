interface Account {
    withdraw(accountNumber: string, amount: number): void;
    checkBalance(accountNumber: string): number | null;
    nonAuthCheckPersonName(accountNumber: string): string;
}

export { Account };