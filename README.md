# КОМАНДИ

### встановленя всіх залежностей

yarn

### запуску режиму розробки

yarn dev

### зібрати Production версію

yarn build

==============================================

# HTML ШАБЛОНІЗАЦІЯ

### приклад импорту

<load ="src/html/header/header.html" />

### прклад вкористання змінних

- ініціалізація

  <load ="src/some-static-link.htm"
  text="Go to DuckDuckGo"
  href="https://duckduckgo.com" />

- імпорт

  <a href=" {=$href} " >{=$text} </a>
