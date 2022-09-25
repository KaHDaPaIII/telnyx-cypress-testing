const db = require('../fixtures/db.json');

export class UserCredentials {
    constructor() {
        this.username = this.randomUsername(8);
        this.password = this.randomPassword();
        this.firstname = db.firstName[Math.floor(Math.random() * db.firstName.length)];
        this.lastname = db.lastName[Math.floor(Math.random() * db.lastName.length)].toLowerCase();
        this.lastname = this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1); // first letter to upper case
        this.email = this.firstname.toLowerCase() + '.' + this.lastname.toLowerCase() + Math.floor(400 + Math.random() * 99999) + '@' + db.domains[Math.floor(Math.random() * db.domains.length)];
    }

    randomUsername(n){
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let s = '';
        for(let i = 0; i < n; i++){
            s += chars[Math.floor(Math.random() * chars.length)];
        }
        return s;
    }

    randomPassword(){
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!#$%&()*-./:;<>?@[]^_{|}';
        let s = '';
        s += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]; // Contain at least one upper-case letter
        s += numbers[Math.floor(Math.random() * numbers.length)]; // Contain at least one number
        s += symbols[Math.floor(Math.random() * symbols.length)]; // Contain at least one symbol
        const allChars = upperCaseLetters + numbers + symbols + 'abcdefghijklmnopqrstuvwxyz';
        for(let i = 3; i < 12; i++){
            s += allChars[Math.floor(Math.random() * allChars.length)];
        }
        s = s.split('').sort(function(){return 0.5 - Math.random()}).join('');
        return s;
    }
}