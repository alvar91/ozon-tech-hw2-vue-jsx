# Домашка 2 #

## Что необходимо ##

+ Верстка с первого домашнего задания
+ Набор данных
+ Макет - https://www.figma.com/file/OLPVfbWHFpdbfX7OKgu0QG/Untitled?node-id=1%3A5419

## Задание ##
+ Логически поделить элементы страницы на схожие блоки, и вынести их в отдельные компоненты
+ Обновить верстку страницы с помощью созданных компонентов

## Задание со звёздочкой (алмазом) ##

+ Реализовать клик на списке в левом меню, что бы данные в карточке обновлялись в зависимости от выбранного пункта меню
+ Реализовать поиск по принципу фильтра - при вводе имени левый список должен фильтроваться

## Стоит учесть ##

+ Вся верстка, стили, js лежат в компонентах (не осталось хардкода)
+ Нет ненужного дублирования компонентов (нет разделения на несколько компонентов, если они только отличится, допустим, только цветом статуса )
+ При взаимодействии с интерфейсом, в особенности для заданий со звёздочкой, нет ошибок, все данные проставляются правильно

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
