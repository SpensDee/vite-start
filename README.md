# КОМАНДИ

#### встановленя всіх залежностей

- yarn

#### запуск режиму розробки

- yarn dev

#### зібрати Production версію

- yarn build

# HTML ШАБЛОНІЗАЦІЯ

#### импорт html компонента

```
<load ="src/html/header/header.html" />
```

#### вкористання змінних

- ініціалізація

```
  <load ="src/some-static-link.htm"
  text="Go to DuckDuckGo"
  href="https://duckduckgo.com" />
```

- імпорт

```
  <a href=" {=$href} " >{=$text} </a>
```
