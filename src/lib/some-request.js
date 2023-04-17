const readOnly = (target, property, descriptor) => { // with new Person, target will be an instance of Person
    descriptor.value = () => {return 'hello, decorators!'}
    descriptor.writable = false;
    return descriptor; // this function MUST return descriptor
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

