

async function apiCall(url = "") {

//    let apikey = 'dfe97463e2a4e502f1b7c6667e00af9e';

   let apikey = 'd6df736322f22e844f9c5b1cd07ea0d2' //shantanu3

//    let apikey = 'a67fce3d70138121e1059cefe6e02341' //shantnau4

//    let apikey = '3e15ad33efae754d7e3030b008978645' // shantanu8

    //add api call logic here

    fetch(`https://gnews.io/api/v4/top-headlines?&token=${apikey}&topic=${url}&country=in&lang=en`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.articles);
        appendArticles(data.articles)
    });


}


function appendArticles(articles, main="") {

document.getElementById('main').innerHTML = '';

 //add append logic here
articles.forEach(({image, title,description, content})=>{

qid =  Math.random()*100000000000000000

let articlesStorage = JSON.parse(localStorage.getItem('articles'))

if(articlesStorage==null){
  articlesStorage =[];
}

let obj={
  qid, title, description, content,image
}

articlesStorage.push(obj)

localStorage.setItem('articles', JSON.stringify(articlesStorage))

// console.log(image,title,description)

let single_articleDiv = document.createElement("div")

single_articleDiv.classList.add("rounded","shadow","mx-4","my-4")

let img = document.createElement('img')
img.src = image;
img.classList.add("rounded","w-[400px]")


let titleH3 = document.createElement('h3')
titleH3.innerHTML = title
titleH3.setAttribute('id',qid)
titleH3.classList.add("text-xl","font-bold")

titleH3.setAttribute("onclick", 'fullnews(this.id)' ) 

console.log(titleH3)

let descriptionP = document.createElement('p')
descriptionP.innerHTML = description

single_articleDiv.append(img,titleH3,descriptionP)

document.getElementById('main').append(single_articleDiv)
})


}

// function  searchterm() {

//   let searchquery =  document.getElementById('searchbar').value

//   window.location.href = './search.html'
//     searchbox(searchquery)
// }





export { apiCall, appendArticles}