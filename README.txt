НЭН × VK Видео: «ВК о важном» (Кукояки)
Адрес: https://n-e-n.ru/vk-o-vazhnom/

Как выложить
- Статическая страница без сборки: залить содержимое папки vk-o-vazhnom на сервер так, чтобы index.html открывался по https://n-e-n.ru/vk-o-vazhnom/.
- Отдавать мимо шаблона сайта, как https://n-e-n.ru/blogery/ (у страницы свои шрифты, стили и скрипт).
- Все пути относительные, поэтому адрес без слеша (/vk-o-vazhnom) должен редиректить на /vk-o-vazhnom/.
- Яндекс Метрика (счетчик 41151484) уже вставлена в <head> и срабатывает только на домене n-e-n.ru.
- Внешние ресурсы: плееры VK Видео (iframe vkvideo.ru/video_ext.php) и mc.yandex.ru. Больше страница ничего не грузит.

Что проверить после выкладки
- Превью ссылки в соцсетях: og:image = https://n-e-n.ru/vk-o-vazhnom/assets/img/og.jpg (1200×630), canonical = https://n-e-n.ru/vk-o-vazhnom/.
- Страница должна индексироваться: тега noindex в ней нет, robots.txt в папку не кладем.
- Три видео в разделах должны воспроизводиться.

Состав
index.html, styles.css, app.js
assets/logos.svg, assets/play-small.svg
assets/fonts/onest-*.ttf
assets/img/*.webp (фото, коллажи, меловой декор), assets/img/og.jpg
