function myJoin(array, separator) {
    var string = ''

    if(separator===undefined) separator = ','

    for(let i=0; i<array.length; i++) {
        if(array[i]===undefined || array[i]===null) string += '' + separator
        else if(i !== array.length-1) string += array[i] + separator
        else string += array[i]
    }
    
    return string;
}

console.log(myJoin(['hello', undefined, 'world'], '-'))