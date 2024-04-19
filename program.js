console.log("hi from js");
async function get()
{
    const response=await fetch("https://dog.ceo/api/breeds/image/random");
    let data=await response.json();
    console.log(data.message);
    document.getElementById("dogimage").src=data.message;
}
get();