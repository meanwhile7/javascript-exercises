const removeFromArray = function(arr,...rem) {
    newarr = [];
    arr.forEach((item)=> {
        if(!rem.includes(item)){
            newarr.push(item)
        }
    });
    return newarr
    
};

// Do not edit below this line
module.exports = removeFromArray;
