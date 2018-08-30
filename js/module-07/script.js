/*
1. Модифицируйте готовую функцию createPostCard() из задания 
номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
чтобы она принимала объект post с данными для заполнения полей 
в карточке.
  
2. Создайте функцию createCards(posts), которая принимает массив
объектов-карточек, вызывает функцию createPostCard(post) столько
раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
массив DOM-элементов всех постов.

3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const post = {
  img: "https://placeimg.com/400/150/arch",
  title: "Post title 1",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
  link: "link-1.com"
};

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

const createPostCard = (inputPost) => {

  const division = document.createElement("div");
  division.classList.add("post");

  const image = document.createElement("img");
  image.classList.add("post__image");
  image.setAttribute("src", inputPost.img);
  image.setAttribute("alt", "post image");

  const header2 = document.createElement("h2");
  header2.classList.add("post__title");
  header2.textContent = inputPost.title;

  const paragraph = document.createElement("p");
  paragraph.classList.add("post__text");
  paragraph.textContent = inputPost.text;

  const link = document.createElement("a");
  link.classList.add("button");
  link.href = inputPost.link;
  link.textContent = "Read more";

  division.appendChild(image);
  division.appendChild(header2);
  division.appendChild(paragraph);
  division.appendChild(link);

  return division;
};

function createCards (postsArr) {
  return postsArr.map(post => createPostCard(post));
}

const cards = createCards(posts);
const body = document.querySelector("body");
cards.forEach(post => body.appendChild(post));