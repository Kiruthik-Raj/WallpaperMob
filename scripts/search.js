const images = [];
const searchInput = document.getElementById("search-bar");
const searchResultsDiv = document.getElementById("search-results");

function extractImages() {
  const imageElements = document.querySelectorAll("a > img");
  imageElements.forEach((imageElement) => {
    const url = imageElement.src;
    const title = imageElement.title;
    images.push({ title, url });
  });
}

function searchWallpapers() {
  const searchQuery = searchInput.value.toLowerCase();
  searchResultsDiv.innerHTML = "";

  try {
    const matches = images.filter((image) => image.title.toLowerCase().includes(searchQuery));
    if (matches.length > 0) {
      matches.forEach((image) => {
        const resultsDiv = document.createElement("div");
        const resultImg = document.createElement("img");
        resultImg.src = image.url;
        resultImg.title = image.title;
        resultsDiv.appendChild(resultImg);
        searchResultsDiv.appendChild(resultsDiv);
      });
    } else {
      const noResultText = document.createElement("p");
      noResultText.innerText = "No Matches Found";
      searchResultsDiv.appendChild(noResultText);
    }

    

  } catch (error) {
    console.error("Error occurred while searching:", error);
  }



}

extractImages();
searchInput.addEventListener("keyup", searchWallpapers);
