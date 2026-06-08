const imageInput = document.getElementById("image-url");
const topInput = document.getElementById("top-input");
const bottomInput = document.getElementById("bottom-input");

const memeImage = document.getElementById("meme-image");

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");

const generateBtn = document.getElementById("generate-btn");
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
  id: Date.now(),
  image: imageUrl,
  top: topValue,
  bottom: bottomValue
});

  if (memes.length > 5) {
    memes.shift();
  }

  displayMemes();
});

function deleteMeme(id) {
  memes = memes.filter(meme => String(meme.id) !== String(id));
  displayMemes();
}

function displayMemes() {
  memeHistory.innerHTML = "";

  memes.forEach((meme) => {
    const memeDiv = document.createElement("div");
   memeDiv.classList.add("meme", "history-meme");

    const img = document.createElement("img");
    img.src = meme.image;

    const topCaption = document.createElement("div");
    topCaption.classList.add("text", "top-text");
    topCaption.textContent = meme.top;

    const bottomCaption = document.createElement("div");
    bottomCaption.classList.add("text", "bottom-text");
    bottomCaption.textContent = meme.bottom;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

   
    deleteBtn.dataset.id = meme.id;

    deleteBtn.addEventListener("click", (e) => {
      deleteMeme(e.target.dataset.id);
    });

    memeDiv.append(img, topCaption, bottomCaption, deleteBtn);
    memeHistory.appendChild(memeDiv);
  });
}







clearBtn.addEventListener("click", () => {
  memes = [];
  displayMemes();

  memeImage.src = "";
  topText.textContent = "";
  bottomText.textContent = "";
});