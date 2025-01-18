

const numObject = {
    name: 'Alex',
    num: 12,
    num1: 13,
    name2: 'Vova'
}




function sumFuncObject(obj){
    let sum = 0
    for (const key in numObject){
        if (typeof(numObject[key])=='number'){
            sum+=numObject[key]
        }
    }
    return sum
}

console.log(sumFuncObject(numObject))


function getSortedNumericFields(obj) {

    const numericFields = Object.entries(obj).filter(([key, value]) => typeof value === 'number');

    numericFields.sort((a, b) => b[1] - a[1]);


    return numericFields.map(([key]) => key);
}


const exampleObj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
};

console.log(getSortedNumericFields(exampleObj)); // Вывод: ['likes', 'projects', 'friends']