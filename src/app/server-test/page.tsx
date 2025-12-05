export default async function ServerPage(){
    console.log("SERVER - Onde estou?");

    const data = await fetch('https://api.restful-api.dev/objects');

    const text = await data.text();

    const json = JSON.parse(text);

    return(
        <div>
            <h1>Server Component</h1>
            <pre>{JSON.stringify(json, null, 2)}</pre>
        </div>
    )
}