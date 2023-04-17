function someDecorator(target) {
    // target.prototype.hello = function() {
    //     console.log('Hello, World!')
    // }
}

@someDecorator
export class SomeRequest {
    constructor(
        name,
        email
    ) {
        this.name = name
        this.email = email
    }
}