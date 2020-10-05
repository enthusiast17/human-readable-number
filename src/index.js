const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const uniques = ['ten', 'eleven', 'twelve']

const tens = [undefined, undefined, 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']

module.exports = function toReadable (number) {
    return [...String(number)].map((element) => parseInt(element)).reduce((res, element, index, arr) => {
        const last = res[res.length - 1] || ''
        if (res.length === 0 || !uniques.includes(last) && !last.includes('teen')) {
            const len = arr.length - index
            switch (len) {
                case 3:
                    res.push(ones[element], 'hundred')
                    break
                case 2:
                    if (element === 1 && arr[index + 1] <= 2) res.push(uniques[arr[index + 1]]) 
                    else if (element === 1) arr[index + 1] === 4 ? res.push('fourteen') : res.push(tens[arr[index + 1]] + 'teen')
                    else tens[element] !== undefined ? res.push(tens[element] + 'ty') : res
                    break
                case 1:
                    (last.includes('ty') || last === 'hundred') && element === 0 ? res: res.push(ones[element])
                    break
            }
        }
        return res
    }, []).join(' ')
}
