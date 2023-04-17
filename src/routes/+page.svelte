<script>
    import {Person} from "../lib/some-request.js";

    export const person = new Person('계원', '전')
    console.log(person.getFullName())
</script>

<h1>Decorator Test</h1>
<p>
    {person.firstName}<br/>
    {person.lastName}<br/>
    {person.getFullName()}
</p>
