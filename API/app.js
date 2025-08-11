const URL = "https://dog.ceo/api/breeds/image/random";
const Img = document.querySelector(".img");
const Btn = document.querySelector("#btn");
const getImg = async () => {
    console.log("Fetching Fact");
    let response = await fetch(URL);
    let data = await response.json();
    Img.innerHTML = `<img src="${data.message}" alt="Dog Image" />`;
}
Btn.addEventListener("click", getImg);