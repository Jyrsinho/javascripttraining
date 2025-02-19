let url = "https://eloquentjavascript.net/author ";


// luetaan json data
const response = await fetch(url,
{
    method: "GET",
        headers: {
    Accept: "application/json",
},
}
).then(response => response.json()).then(data => {
    console.log(data)
    })
;


