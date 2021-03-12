// На сайте reddit ссылки на разделы (сабреддиты) формируются следующим образом:

//     https://reddit.com/r/название_раздела/

// Напишите функцию, которая принимает ссылку на раздел и возвращает название раздела. 


function getSubredditName(link) {
    link += "";
    const splitted = link.trim().split("/r/");
    if (splitted.length <= 1)
        return "";

    const name = splitted[splitted.length - 1];
    if (name.endsWith("/"))
        return name.slice(0, -1);
    return name;
}

module.exports = getSubredditName;