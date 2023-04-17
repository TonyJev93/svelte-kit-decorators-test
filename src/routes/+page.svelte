<script>
    import {SomeRequest} from "../lib/some-request.js";

    export const request = new SomeRequest("전계원", "allstarz12@naver.com")
</script>

<h1>Decorator Test</h1>
<p>
    {request.name}<br/>
    {request.email}
</p>
