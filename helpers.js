function mean(numbers) {
    return numbers.reduce((sum, ele) => sum + ele)/numbers.length;
}

// copied from https://stackoverflow.com/questions/45309447/calculating-median-javascript
function median(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function mode(numbers) {
    const freq = {};
    let modeRes = null;
    let max = 0;
    for (let num of numbers) {
        if (freq[num])
            freq[num] = freq[num] + 1;
        else
            freq[num] = 1;
        
        if (freq[num] > max) {
            max = freq[num];
            modeRes = num;
        }
    }
    
    return modeRes;
}

module.exports = {mean, median, mode}