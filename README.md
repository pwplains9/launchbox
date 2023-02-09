# Информация о проекте

Репа: undefined

Тест: undefined

Прод: undefined

# Работа со сборкой

1. Запуск сервера для разработки - ``npm run start``.

2. Создание билда - ``npm run build``.

3. Создание билда для прода - ``npm run build:prod``.

4. Линтинг кода:

    4.1. Все сразу - ``npm run lint``;

    4.2. Скрипты - ``npm run lint:scripts``;

    4.3. Стили - ``npm run lint:styles``;

    4.4. Разметка - ``npm run lint:pug``.

5. Автоматическое создание файлов для компонентов и страниц:

    5.1. Компонент - ``npm run create-files <НАЗВАНИЕ ПАПКИ>``. Например: ``npm run create-files header`` - создаст папку ``header`` внутри папки ``src/components``, содержащую следующий список файлов и подпапок: ``images (папка), data.js, header.js, header.pug, header.scss``;

    5.2. Страница - ``npm run create-files <НАЗВАНИЕ ПАПКИ> --page``. Например: ``npm run create-files home --page`` - создаст папку ``home`` внутри папки ``src/pages``, с аналогичной созданию компонента структурой.

6. Конвертация шрифтов ``(ttf, otf, svg)`` в форматы ``woff`` и ``woff2`` - ``npm run fonts:convert``. Берет шрифты из папки ``src/assets/fonts`` и преобразует их в указанные выше форматы, с сохранением структуры и исходных форматов.

7. Конвертация картинок в формат ``webp`` или ``avif``. По умолчанию берет картинки из папок ``src/assets/images``, ``src/components`` и ``src/pages`` и преобразует их в формат ``webp`` с качеством ``90%``:

    7.1. WebP - ``npm run images:convert``;

    7.2. AVIF - ``npm run images:convert avif``;

    7.3. С указанием качества - ``npm run images:convert quality=70``, по умолчанию - ``90`` (в процентах);

    7.4. С указанием папки - ``npm run images:convert only=assets`` (только картинки из папки ``src/assets/images``), ``npm run images:convert only=components`` (только картинки из папки ``src/components``), ``npm run images:convert only=pages`` (только картинки из папки ``src/pages``);

    7.5. С указанием необходимого пути - ``npm run images:convert path=<ПУТЬ К ПАПКЕ>``. Например - ``npm run images:convert path=src/pages/home/images/background``;

    7.6. Сочетание параметров (пример) - ``npm run images:convert only=pages avif quality=50``.

8. Сжатие картинок ``(png, jpg, gif, webp, avif)``:

    8.1. Сжатие картинок из папок ``src/assets/images``, ``src/components`` и ``src/pages`` - ``npm run images:compress``

    8.2. С указанием качества - ``npm run images:compress quality=80``, по умолчанию - ``75`` (в процентах);

    8.3. С указанием папки - ``npm run images:compress only=assets`` (только картинки из папки ``src/assets/images``), ``npm run images:compress only=components`` (только картинки из папки ``src/components``), ``npm run images:compress only=pages`` (только картинки из папки ``src/pages``);

    8.4. С указанием необходимого пути - ``npm run images:compress path=<ПУТЬ К ПАПКЕ>``. Например - ``npm run images:compress path=src/components/header/burger``;

    8.5. Сочетание параметров (пример) - ``npm run images:compress only=assets avif quality=65``.

9. Архивирование папки ``build`` - ``npm run zip``. Создаст архив ``build.zip`` в корневой папке проекта:

    9.1. Добавление версии - ``npm run zip v=<ВЕРСИЯ>``. Например: ``npm run zip v=14`` - создаст архив ``build-v14.zip``;

    9.2. Указание имени - ``npm run zip name=<ИМЯ>``. Например: ``npm run zip name=build_19022022`` - создаст архив с именем ``build_19022022.zip``.

10. Удаление папки ``build`` - ``npm run clean``.

11. Автоматическое удаление файлов из билда для продакшн версии. По умолчанию будет удаляться файл ``robots.txt`` из папки ``build``. Отменить удаление данного файла или добавить другие можно изменяя массив свойства ``build.remove`` внутри файла ``config.js``. Например хотим добавить удаление ``.htaccess`` - ``remove: ['robots.txt'. '.htaccess']``. Или ничего не будем удалять - ``remove: []``. Данное правило будет работать только при условии, что метод ``html.isProd`` будет возвращать ``true``, т.е. только когда собираем сборку командой ``npm run build:prod`` или если поменять его вручную.
