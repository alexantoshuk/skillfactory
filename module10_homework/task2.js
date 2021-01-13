let x = 4;

let type_of_x = typeof x;
switch (type_of_x) {
    case "number":
        console.log('X — число');
        break;
    case "string":
        console.log('X — строка');
        break;
    case "boolean":
        console.log('X — логический тип');
        break;

    default:
        console.log('Тип x не определён');
}