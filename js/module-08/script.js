/*
Реализуйте функционал:

  - При клике в элемент preview, необходимо подменить src тега img внутри fullview
    на url из data-атрибута выбраного элемента.
   - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
  - Изображений может быть произвольное количество.
  - Используйте делегирование для элементов preview.
  - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

*/

// Массив объектов с данными для создания компонента выглядит следующим образом.
const gallerypreviewItemList = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

//image-gallery есть изначально в HTML-разметке как контейнер для компонента.
const jsImageGalleryDiv = document.querySelector(".js-image-gallery");

//fullview содержит в себе увеличенную версию выбранного изображения из preview
//создается динамически при загрузке страницы.
const fullviewDiv = document.createElement("div");
const fullviewImage = document.createElement("img");

fullviewDiv.classList.add("fullview");
fullviewImage.setAttribute("src", gallerypreviewItemList[0].fullview);
fullviewImage.setAttribute("alt", gallerypreviewItemList[0].alt);

fullviewDiv.appendChild(fullviewImage);
jsImageGalleryDiv.prepend(fullviewDiv);

// preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
// он содержит ссылку на большое изображение. preview и его элементы, также создаются
// динамически, при загрузке страницы.

const createItemImage = image => {
  const previewItemLi = document.createElement("li");
  const newImage = document.createElement("img");

  newImage.setAttribute("src", image.preview);
  newImage.setAttribute("alt", image.alt);
  newImage.dataset.fullview = image.fullview;
  previewItemLi.appendChild(newImage);

  return previewItemLi;
};

function createCards(postsArr) {
  return postsArr.map(post => createItemImage(post));
}
const cards = createCards(gallerypreviewItemList);

const previewListUl = document.createElement("ul");
previewListUl.classList.add("preview");
cards.forEach(post => previewListUl.appendChild(post));
jsImageGalleryDiv.append(previewListUl);

//===================================

previewListUl.addEventListener("click", showFullview);

function showFullview(event) {
  const target = event.target;
  if (target.tagName === "IMG") {
    fullviewImage.setAttribute("src", target.dataset.fullview);
    const previewEffect = document.querySelector(".preview-effect");
    if (previewEffect !== null) {
      previewEffect.classList.remove("preview-effect");
    }
    target.classList.add("preview-effect");
  }
}
