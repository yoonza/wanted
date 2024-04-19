const add = (a,b) => {
    return a+b;
}

//mock api에서 숫자 배열 가져오기 
export const getNumbers = async () => {

    return fetch("http://localhost:5001/numbers");

}

export const addArrayNumbers = (arr) => {
    let sum = 0;
    arr.map((arrayItem) => {
        sum = sum + arrayItem;
    });

    return sum;
}

export default add;