
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }


    let result =  matrix.reduce( (prev, item, index) => prev.concat(index % 2 === 0 ? item : item.reverse()), []);


    return result;
}





