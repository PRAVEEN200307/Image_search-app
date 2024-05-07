const accessKey = "RnltKuc4W8dnLNhOhmI31xGYdP6sSYWw7mHwl4As8jw";

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

const formEl = document.forms.searchImage;
const inputEl = document.querySelector("#searchImageEl");
const searchResult = document.querySelector(".grid-nature");
const showMore = document.querySelector("#showMore");


let inputData = "";
let page = 20;

const searchImages = async () => {
  
  
  inputData = inputEl.value;
  try {
    const url = `${API_URL}?query=${inputData}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
      
    if(inputEl.value){
        searchResult.innerHTML=''
    }

    data.results.forEach((value)=>{
      //  const img =document.createElement('img');
      //  img.src=value.links.download;       
      //  searchResult.appendChild(img);

  
      //   <a href="${value.links.download}" download="New Image" class="bg-red-500 text-white p-2 absolute bottom-2 right-16" 

    //  <img src="${value.links.download}" alt="Restrant" id="myImage">
      //   target="_blank">
  //</a>
 
      

      const img =document.createElement('img');
      img.src=value.links.download;
      img.id="myImage"

      const aEl =document.createElement('a');
      aEl.href=value.links.download;
      aEl.download="Image download";
      aEl.append(img);
      aEl.target="_blank"

      searchResult.appendChild(aEl)

    });


  } catch (e) {
    console.log(e);
  }
};

searchImages()


formEl.addEventListener('submit',(e)=>{
  e.preventDefault();
  inputData = inputEl.value;
  searchImages()
});
