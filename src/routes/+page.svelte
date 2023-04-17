<script>
    import {Person} from "../lib/some-request.js";

    export const person = new Person('계원', '전')
    console.log(person.getFullName())

    console.log(Person.prototype.getFullName = () => "CRACKED")
</script>

<h1>Decorator Test</h1>
<p>
    {person.firstName}<br/>
    {person.lastName}
</p>
