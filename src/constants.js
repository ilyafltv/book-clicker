import bookDefault from '@images/icons/book-default.png';
import textbookDefault from '@images/icons/textbook-default.png';
import coursesDefault from '@images/icons/courses-default.png'
import brainDefault from '@images/icons/brain-default.png'
import brainCold from "@images/icons/brain-cold.png";
import speedReading from "@images/icons/speedreading.png";
import coffeeDefault from "@images/icons/coffee-default.png";
import brainGold from "@images/icons/brain-gold.png";
import textbookGold from "@images/icons/textbook-gold.png";
import coursesGold from "@images/icons/courses-gold.png"
import sun from "@images/icons/sun.svg"

export const currency = brainDefault;

export const initialProgress = {
  exp: 0,
  speed: 0,
  clickPower: 1,
  productsEducation: [
    { id: 1, title: 'Книга', description: 'Чтение - самый верный способ получить новые знания!', price: 10, image: bookDefault, speedAmount: 0.1, count: 0 },
    { id: 2, title: 'Учебник', description: 'Учебники создаются для передачи опыта настоящих профессионалов студентам.', price: 100, image: textbookDefault, speedAmount: 0.5, count: 0 },
    { id: 3, title: 'Курсы', description: 'Получите новые знания благодаря готовым материалам при поддержке преподавателей.', price: 1000, image: coursesDefault, speedAmount: 5, count: 0 }
  ],
  productsImprovements: [
    { id: 1, title: 'Холодная голова', description: 'Охлаждая мозг, вы сосредотачиваетесь на поставленной задаче.', price: 10, image: brainCold, isBought: false },
    { id: 2, title: 'Скорочтение', description: 'Эта техника позволит вам стать эффективнее.', price: 1000, image: speedReading, isBought: false },
    { id: 3, title: 'Кофе', description: 'Выпейте напиток для ускорения.', price: 5000, image: coffeeDefault, isBought: false },
    { id: 4, title: 'Золотая звезда', description: 'Звезда сделает вас эффективнее в два раза.', price: 20000, image: sun, isBought: false }
  ],
  achievementsDefault: [
    { id: 1, title: 'Название1', description: "Сделать", image: brainGold, isDone: false },
    { id: 2, title: 'Название2', description: "Сделать", image: textbookGold, isDone: false },
    { id: 3, title: 'Название3', description: "Сделать", image: coursesGold, isDone: false },
  ]
}

export const loadInitialProgress = () => {
  localStorage.setItem("progress", JSON.stringify(initialProgress));

  return JSON.parse(localStorage.getItem('progress'))
};