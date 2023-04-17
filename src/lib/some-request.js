import {validate, Length} from "class-validator";

const readOnly = (target, property, descriptor) => { // with new Person, target will be an instance of Person
    descriptor.value = () => {return 'hello, decorators!'}
    descriptor.writable = false;
    return descriptor; // this function MUST return descriptor
};


export class Person {
    @Length(0, 10)
    title = "title"

    constructor(
        title,
        firstName,
        lastName
    ) {
        this.title = title
        this.firstName = firstName
        this.lastName = lastName
    }

    @readOnly
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    async validateForTest() {
        const isValid = await validate(this)
        console.log("isValid : ", isValid)
    }
}

