<script>
    import {Person} from "../lib/some-request.js";

    export const person = new Person('12345678901','계원', '전')
    console.log(person.getFullName())

    person.validateForTest()
</script>

<h1>{person.title}</h1>
<p>
    {person.firstName}<br/>
    {person.lastName}<br/>
    {person.getFullName()}
</p>
