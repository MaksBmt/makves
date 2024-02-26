# Тестовое задание для компании Makves

* Sidebar сделан адаптивным и может не теряя функциональности и общей концепции дизайна использовать контент разной ширины. Это позволит менять его в админке не трогая стили и скрипт.
* Адаптивность и плавная функциональность достигается работой js.  Нужные данные для переменных скрипт получает при загрузке страницы и после этого присваивается класс по умолчанию "sidebar--closed". В этом состоянии контент скрыт и юзер может видеть только svg и аватар. При клике на кнопку в виде стрелки происходит переключение класса на "sidebar--opened" и sidebar, получив от скрипта нужные ширины своим оберткам, плавно раскрывается. 
* При клике на поле "sidebar__user" плавно раскрывается модальное окно и последовательно заполняется контентом.
* Автор взял на себя смелость сделать картинку логотипа в виде svg и немного анимировать ее. Лого для семантики находится в теге 'img', но при этом, благодаря использованию технологии SMIL, анимация работает.

## Установка зависимостей

```sh
npm install
```
### Запуск проекта

```sh
npm run dev
```

### Сборка проекта

```sh
npm run build
```