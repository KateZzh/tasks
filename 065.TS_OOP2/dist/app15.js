// Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
// интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
// недостаточно, выбрасывайте ошибку.
class Account1 {
    balance = 1000;
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
        return `success: ${this.balance}`;
    }
    withdraw(amount) {
        if (this.balance < amount)
            return 'error';
        this.balance = this.balance - amount;
        return `success: ${this.balance}`;
    }
}
const account1 = new Account1();
console.log(account1.deposit(100));
console.log(account1.withdraw(50));
console.log(account1.withdraw(5000));
console.log(account1.getBalance());
