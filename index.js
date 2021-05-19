function superbowlWin(records){
    let win = records.find(record => record.result === 'W');
    if (win){
        return win.year;
    } 
    // if (record.result === 'W')
    // return year;
// console.log('myRecord',record)
}
// record.find(superbowlWin);