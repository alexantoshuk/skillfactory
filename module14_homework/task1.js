// Задание 1.
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его
// в консоль.

//  XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>

// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }



const XML_STRING = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`


const parser = new DOMParser();
const xmlDOM = parser.parseFromString(XML_STRING, "text/xml");

let newObject = { "list": [] };
let list = newObject["list"];

const listNode = xmlDOM.querySelector("list");

for (let node of listNode.children) {
    const nameNode = node.querySelector("name");
    const lang = nameNode.getAttribute("lang");
    const firstName = nameNode.querySelector("first").textContent;
    const secondName = nameNode.querySelector("second").textContent;
    const age = node.querySelector("age").textContent;
    const prof = node.querySelector("prof").textContent;
    list.push({ name: `${firstName} ${secondName}`, age: age, prof: prof, lang: lang });
}

const json = JSON.stringify(newObject, null, '  ');
console.log(json);
