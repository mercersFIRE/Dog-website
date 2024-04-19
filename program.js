console.log("hi from js");
async function get(selectedbreed) {
    const response = await fetch(`https://dog.ceo/api/breed/${selectedbreed}/images`);
    let data = await response.json();
    //console.log(data.message);
    return data.message;
    document.getElementById("dogimage").src = data.message;
}
async function get2() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await response.json();
    let a = data.message;
    let s = ''
    for (let x in a) {
        s += `<option>${x} </option>`;
    }
    //console.log(s);
    let drop = document.getElementById("drop");

    drop.innerHTML = `<option>Choose Your Favourite Breed </option>${s}`
}

get2();
async function choose(x) {
    let arr = await get(x);
    console.log(arr);
    let index = 0;

    function changeImageWithAnimation() {
        if (index < arr.length) {
            console.log(arr[index]);
            let dogImage = document.getElementById("dogimage");
            dogImage.src = arr[index];
            dogImage.classList.add("animate__animated", "animate__fadeIn");

            // Remove animation class after animation completes
            setTimeout(() => {
                dogImage.classList.remove("animate__fadeIn");
            }, 1000); // Animation duration (1 second)

            index++;
            setTimeout(changeImageWithAnimation, 5000); // Delay of 5000ms (5 seconds)
        }
    }

    changeImageWithAnimation();
}


document.getElementById("drop").addEventListener("change", function () {
    console.log(this.value);
    choose(this.value);
});