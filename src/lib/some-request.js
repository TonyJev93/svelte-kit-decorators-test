const readOnly = (target) => { // with new Person, target will be an instance of Person
    target.descriptor.writable = false
};


export class Person {
    constructor(
        firstName,
        lastName
    ) {
        this.firstName = firstName
        this.lastName = lastName
    }

    @readOnly
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

