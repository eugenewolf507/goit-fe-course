const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const form = document.querySelector(".js-form");

//get filter params in array from .js-form (form)
function getFilterParams() {
  const filter = { size: [], color: [], release_date: [] };
  for (const eachSize of form.size) {
    if (eachSize.checked) {
      filter.size.push(eachSize.value);
    }
  }
  for (const eachColor of form.color) {
    if (eachColor.checked) {
      filter.color.push(eachColor.value);
    }
  }
  for (const eachDate of form.release_date) {
    if (eachDate.checked) {
      filter.release_date.push(eachDate.value);
    }
  }
  return filter;
}

//filters array laptops with getFilterParams()
function filterLaptots(laptops, filter) {
  var filteredLaptops=laptops;
  if (filter.size.length) {
    filteredLaptops = filteredLaptops.filter(laptop =>
      filter.size.includes(`${laptop.size}`)
    );
  }
  if (filter.color.length) {
    filteredLaptops = filteredLaptops.filter(laptop =>
      filter.color.includes(`${laptop.color}`)
    );
  }
  if (filter.release_date.length) {
    filteredLaptops = filteredLaptops.filter(laptop =>
      filter.release_date.includes(`${laptop.release_date}`)
    );
  }
  return filteredLaptops;
}

//output filteredLaptopsList with handlebars template
function outputLaptops(filteredLaptopsList) {
  const source = document.querySelector("#laptop").innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = filteredLaptopsList.reduce((acc, item) => acc + template(item), "");
  const container = document.querySelector("#output-container");
  container.innerHTML = markup;
}

//handler for filter laptops and submit function
function submitFunc(event) {
  event.preventDefault();
  const filter = getFilterParams();
  console.log(filter);
  const filteredLaptopsList = filterLaptots(laptops, filter);
  outputLaptops(filteredLaptopsList);
}

function resetFunc() {
  const container = document.querySelector("#output-container");
  container.innerHTML = '';
}

//show all laptops before filtering
const filter = { size: [], color: [], release_date: [] };
const filteredLaptopsList = filterLaptots(laptops, filter);
outputLaptops(filteredLaptopsList);

form.addEventListener("submit", submitFunc);
form.addEventListener("reset", resetFunc);
//===============================================
/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
          Есть массив объектов (дальше в задании), каждый из которых описывает 
          ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
          Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
          чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
          какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 

            Подсказка: составьте объект формата
            const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
    Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
    после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/
