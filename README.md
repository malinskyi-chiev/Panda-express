# Panda-express

Проект Panda-express является 'велосипедом'. 

## Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используется препроцессор [SCSS](https://sass-lang.com/)

## Компонентный подход 
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один HTML-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * HTML-файл блока импортируется в файл ```src/views/index.html``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├──header
│   │   ├── header.html
│   │   ├── header.js
│   │   ├── header.scss
```

## Организация правил scss
Ниже представлен пример организации правил SCSS, позволяющий значительно упростить и ускорить верстку, а также поддерживать уже существующий код через какое-то время после окончания активных работ:

```scss
.block {
  margin: 0;

  @media ($tablet) {
    margin: 0;
  }

  @media ($desktop) {
    margin: 0;
  }

  &::before {
    margin: 0;

    @media ($tablet) {
      margin: 0;
    }

    @media ($desktop) {
      margin: 0;
    }
  }

  &:hover {
    margin: 0;

    @media ($tablet) {
      margin: 0;
    }

    @media ($desktop) {
      margin: 0;
    }

    &::before {
      margin: 0;

      @media ($tablet) {
        margin: 0;
      }

      @media ($desktop) {
        margin: 0;
      }
    }
  }

  &--modifier {
    margin: 0;

    @media ($tablet) {
      margin: 0;
    }

    @media ($desktop) {
      margin: 0;
    }

    &::before {
      margin: 0;

      @media ($tablet) {
        margin: 0;
      }

      @media ($desktop) {
        margin: 0;
      }
    }

    &:hover {
      margin: 0;

      @media ($tablet) {
        margin: 0;
      }

      @media ($desktop) {
        margin: 0;
      }

      &::before {
        margin: 0;
    
        @media ($tablet) {
          margin: 0;
        }
    
        @media ($desktop) {
          margin: 0;
        }
      }
    }
  }
}
