const imageInput = document.getElementById("image-url");
const topInput = document.getElementById("top-input");
const bottomInput = document.getElementById("bottom-input");

const memeImage = document.getElementById("meme-image");

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

const generateBtn = document.getElementById("generate-btn");
const topValue = topInput.value.trim();
const bottomValue = bottomInput.value.trim();
const memeHistory = document.getElementById("meme-history");
const clearBtn = document.getElementById("clear-btn");

let memes = [];

generateBtn.addEventListener("click", () => {
  const imageUrl = imageInput.value.trim();
  const topValue = topInput.value.trim();
  const bottomValue = bottomInput.value.trim();

  if (
    imageUrl === "" ||
    topValue === "" ||
    bottomValue === ""
  ) {
    alert("Fill in the fields.");
    return;
  }

  memeImage.src = imageUrl;
  topText.textContent = topValue;
  bottomText.textContent = bottomValue;

  memes.push({
    image: imageUrl,
    top: topValue,
    bottom: bottomValue
  });

  if (memes.length > 5) {
    memes.shift();
  }

  displayMemes();
});

function displayMemes() {
  memeHistory.innerHTML = "";

  memes.forEach((meme) => {
    memeHistory.innerHTML += `<img src="${meme.image}" width="100">`;
  });
}

clearBtn.addEventListener("click", () => {
  memes = [];
  displayMemes();
});