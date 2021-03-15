module.exports = function toReadable (number) {
    let zero = "zero";
    let bis9 = ["one","two","three","four","five","six","seven","eight","nine"];
    let bis19 = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let mitzero = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if (number === 0) {
        return zero;
    }
   else if (number > 99 && number < 1000) {
 if (number % 100 == 0) {
        return `${bis9[Math.floor(number / 100 - 1)]} hundred`;
    } else if (number > 99 && number < 1000) {
        return `${bis9[Math.floor(number / 100 - 1)]} hundred ${redableZahl(number - (Math.floor(number / 100)) * 100)}`;
    } else return redableZahl(number - (Math.floor(number / 100)) * 100);
    } else {
        return redableZahl(number - (Math.floor(number / 100)) * 100);
    }
    
    function redableZahl(number) {
        if (number <= 9) {
            return bis9[number - 1];
        } else if (number <= 19) {
            return bis19 [number - 10];
        } else if (number % 10 == 0) {
            return  `${mitzero [Math.floor(number / 10) - 2]}`;
        } else {
            return `${mitzero [Math.floor(number / 10) - 2]} ${bis9[number % 10 - 1]}`
        }
    }
}
