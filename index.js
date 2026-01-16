// index.js

let generateImageForm =
    document.getElementById('generate-image-form');
let formInput =
    document.getElementById('input-value');
let imageContainerText =
    document.getElementById('imageContainerText');
let imageGenerated =
    document.getElementById('generated-image');
let imageContainer =
    document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        const accessKey = "Bj6L-OOdapa-7pBdbwpy8Vho14x7fZnqTkbVxoM4e4I"; // 👈 paste here

        const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${category}&client_id=${accessKey}`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch the data");
        }

        const data = await response.json();

        imageContainerText.innerText =
            `Image related to "${category}"`;
        imageContainer.style.display = "block";

        imageGenerated.src = data.urls.regular;
    } catch (error) {
        console.error(error);
        imageContainerText.innerText = "Failed to load image 😢";
    }
}




generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText !== "") {
        fetchImages(enteredText);
    }
    else {
        imageContainerText.innerText =
            "Input field can not be empty!";
    }
})