const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newimg = document.createElement('img');
newimg.setAttribute("src", "https://picsum.photos/200");
newimg.setAttribute("alt", "Random image");
document.body.appendChild(newimg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newsection = document.createElement('section');
newsection.innerHTML = "<h2>DOM Basics</h2><p>this was added with javascript<p>";
document.body.appendChild(newsection);