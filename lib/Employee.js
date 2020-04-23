// TODO: Write code to define and export the Employee class
const Employee = require("./Employee");
class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        if (this.title === undefined) {
            return "Employee";
        }

        return this.title;
    }
}

module.exports = Employee;