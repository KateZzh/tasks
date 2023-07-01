// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.
class Account {
    balance = 0;
    deposit(money) {
        this.balance += money;
    }
    withdraw(money) {
        if (this.balance > money) {
            this.balance -= money;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new Account();
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance());
