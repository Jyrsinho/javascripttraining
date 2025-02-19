// These formats are identified by the standardized media types text/plain, text/html, and application/json.


let url = "https://eloquentjavascript.net/author ";


// luetaan json data
const response = await fetch(url,
{
    method: "GET",
        headers: {
    Accept: "application/json"
}
}
).then(response => response.json()).then(data => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.website);
    });

// luetaan plaintext data
const responsePlainText = await (fetch(url,
    {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    }
    ).then(response => response.text().then(data =>  {
        console.log(data);
})));

// luetaan plain html
const responseHTML = await (fetch(url,
    {
        method: "GET",
        headers: {
            Accept: "text/html"
        }
    })).then(response => response.text().then(data =>  {
        console.log(data);
}))



