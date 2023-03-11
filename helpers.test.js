const {mean, median, mode} = require('./helpers')

describe("mean tests", function(){
    it("correctly finds mean of a set", function(){ 
      expect(mean([1,2,3])).toEqual(2)
      expect(mean([4,5,6,7,8,9])).toEqual(6.5)
    })
  });

describe("median tests", function(){
    it("correctly finds median of a set", function(){ 
      expect(median([1,2,3,4,5])).toEqual(3)
      expect(median([5,6,7,8,100])).toEqual(7)
    })

    it("correctly finds median of a set with even number of elements", function(){ 
      expect(median([1,2,3,4,5,6])).toEqual(3.5)
      expect(median([5,6,7,8,100,101])).toEqual(7.5)
    })
  });

describe("mode tests", function(){
    it("correctly finds mode of a set", function(){ 
      expect(mode([1,2,3,4,5,5,5])).toEqual(5)
      expect(mode([5,67,3,1,5,6,2,1,1,4,5,1])).toEqual(1)
    })
  });