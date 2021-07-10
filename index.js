function LetterCountI(str = "") {
    let strArray = str.trim().split(" ");

    let strResult = '';
    let countResult = 0;

    for(let arrIndex = 0; arrIndex < strArray.length; arrIndex++) {
        let arrSort = strArray[arrIndex].split("").sort();

        let lastedChar = '';
        let lastedCount = 0;

        arrSort.forEach(char => { 
            if(char != lastedChar) {
                lastedChar = char;
            }
            else if(char == lastedChar) {
                lastedCount++;
            }
        });

        if(lastedCount > countResult) {
            strResult = strArray[arrIndex];
            countResult = lastedCount;
        }
    }

    if(strResult != '') {
        return strResult;
    }
    else {
        return -1;
    }
}

let a = LetterCountI("Hello apple pie")
console.log(a); //for debug in console chrome