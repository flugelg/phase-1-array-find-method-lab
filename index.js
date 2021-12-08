function superbowlWin(array){
    const result = array.find(array => array.result === "W")
    if (result != undefined){
        return result.year;
    }
}