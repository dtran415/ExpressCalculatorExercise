const express = require('express')
const ExpressError = require('./expressError')
const {mean, median, mode} = require('./helpers')

const app = express();

app.get('/mean', (req, res) => {
    const nums = checkNums(req.query.nums);
    const meanRes = mean(nums)
    const result = {'operation':'mean', value: meanRes}
    res.json(result);
});

app.get('/median', (req, res)=> {
    const nums = checkNums(req.query.nums);
    const medianRes = median(nums);
    const result = {'operation':'median', value: medianRes}
    res.json(result);
});

app.get('/mode', (req, res) => {
    const nums = checkNums(req.query.nums);
    const modeRes = mode(nums);
    const result = {'operation':'mode', value: modeRes}
    res.json(result);
});

function checkNums(nums) {
    if (!nums) {
        throw new ExpressError("Missing parameter 'nums'", 400);
    }

    const numsArray = nums.split(",").map(val => {
        const trimmed = Number(val.trim());
        if (!trimmed || isNaN(Number(trimmed)))
            throw new ExpressError('nums contains a value that is not a number', 400);
        return trimmed;
    })

    return numsArray;
}

// should end up here if route not found
app.use((req, res, next) => {
    throw new ExpressError("Page not found", 404);
});

// error handler
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });

app.listen(3000, ()=>{
    console.log("App on port 3000");
});