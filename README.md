# Nike test project (nuxt.js)

Проект был реализован с использованием технологии SSR (Nuxt.js). В качестве API использован простейший JSON файл, наполненный тестовыми данными с официального сайта Nike. Подключение к API реализовано по средствам AJAX с помощью библиотеки Axios. Общая разметка структуры стилей реализована по методологии БЭМ. Для быстрого развертывания проекта использовались средства контейнеризации Docker. В процессе написания стилей было принято решение использовать непоследовательных подход, т.е. использование разных приемов стилизации элементов для демонстрации навыка верстки. Некоторые элементы функционала были намеренно упрощены специально в рамках тестового задания. В проекте также присутствует eslint и eslint-plugin-prettier.

При переходе на главную страницу, система намеренно перенаправляет посетителя на заданную программно страницу товара, т.к. отсутствует макет главной страницы.

**Весь список поставленных задач был успешно выполнен, а именно:**
- Адаптивная верстка с использованием технологий Flex, Grid и т.д.;
- Подгрузка данных и отрисовка страницы товара;
- Функциональное добавление товара в корзину;
- Сохранение состояния корзины на клиенте;
- История просмотренных товаров;
- Сохранение состояния истории просмотренных товаров;
- Вывод похожих товаров (простейший алгоритм реализован в рамках тестового задания);
- Динамическая отрисовка списка категорий товаров (не статических страниц).

При добавлении одного и того же товара с разными характеристика в корзину, его карточка в списке дублируется специально для того, чтобы пользователь мог изменять значения кол-во товара специально для выбранных параметров.

В макете тестового задания были замечены некоторые упущения. Критичным упущением было отсутствие отображения характеристики цвета товара в корзине: при добавлении 2-х одинаковых товаров, со схожими характеристиками размера, но разными характеристиками цвета товара, товары в корзине отображаются визуально идентичными, что может ввести пользователя в заблуждение.

**Не было реализовано:**
- Страница 404. При переходе на несуществующий роут система выдаст ошибку.
- Проверка валидности url параметра на странице товара.

Для развертывания проекта требуется предустановленный в системе Docker и Docker compose.
