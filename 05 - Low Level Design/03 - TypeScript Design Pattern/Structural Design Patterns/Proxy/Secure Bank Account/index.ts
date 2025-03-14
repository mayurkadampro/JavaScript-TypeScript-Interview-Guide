import { Bank } from "./Bank";
import { ProxyServer } from "./ProxyServer";

const accountNumber = "MFHY2125466456645";
const bankAccount = new Bank("Mayur", accountNumber, 35555455300);


// DIRECT OPERATION WITHOUT PROXY
console.log("Before Withdraw : ", bankAccount.checkBalance(accountNumber));
bankAccount.withdraw(accountNumber, 1254668);
console.log("After Withdraw : ", bankAccount.checkBalance(accountNumber));
console.log("After Withdraw : ", bankAccount.nonAuthCheckPersonName(accountNumber));
console.log();

// WITH PROXY with auth user
const proxyServer = new ProxyServer(bankAccount, true);
console.log("Before Withdraw : ", proxyServer.checkBalance(accountNumber));
proxyServer.withdraw(accountNumber, 1254668);
console.log("After Withdraw : ", proxyServer.checkBalance(accountNumber));
console.log("After Withdraw : ", proxyServer.nonAuthCheckPersonName(accountNumber));
console.log();


// WITH PROXY with non auth user
const proxyServer1 = new ProxyServer(bankAccount, false);
console.log("Before Withdraw : ", proxyServer1.checkBalance(accountNumber));
proxyServer1.withdraw(accountNumber, 1254668);
console.log("After Withdraw : ", proxyServer1.checkBalance(accountNumber));
console.log("After Withdraw : ", proxyServer1.nonAuthCheckPersonName(accountNumber));
console.log()