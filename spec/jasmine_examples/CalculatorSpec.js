describe("Calculator test", function(){
  var calculator;
  beforeEach(function(){
    var Calculator = require("../../lib/jasmine_examples/Calculator.js");
    calculator = new Calculator();
  });
  
  describe("Addition", function(){
    it("add two numbers", function(){
      expect(calculator.sum(1, 2)).toEqual(3);
    });
    
    it("return error on not number character", function(){
      expect(calculator.sum("a", 1)).toEqual("Only numbers allowed!");
    });
    
    it("return error on not number character", function(){
      expect(calculator.sum(1, "a")).toEqual("Only numbers allowed!");
    });
  });
  
  describe("Multiplication", function(){
    it("Multiplies two numbers", function(){
      expect(calculator.times(1, 2)).toEqual(2);
    });
    
    it("return error on not number character", function(){
      expect(calculator.times("a", 1)).toEqual("Only numbers allowed!");
    });
    
    it("return error on not number character", function(){
      expect(calculator.times(1, "a")).toEqual("Only numbers allowed!");
    });
  });
  
  describe("Subtraction", function(){
    it("Subtracts two numbers", function(){
      expect(calculator.sub(1, 2)).toEqual(-1);
    });
    
    it("return error on not number character", function(){
      expect(calculator.sub("a", 1)).toEqual("Only numbers allowed!");
    });
    
    it("return error on not number character", function(){
      expect(calculator.sub(1, "a")).toEqual("Only numbers allowed!");
    });
  });
  
  describe("Division", function(){
    it("Devides one number by the other", function(){
      expect(calculator.div(4, 2)).toEqual(2);
    });
    
    it("return error on not number character", function(){
      expect(calculator.div("a", 1)).toEqual("Only numbers allowed!");
    });
    
    it("return error on not number character", function(){
      expect(calculator.div(1, "a")).toEqual("Only numbers allowed!");
    });
  });
 
  
  describe("Chartacter check", function(){
    it("return true on number characters", function(){
      expect(calculator.isNum(1)).toBeTruthy();
    });
    
    it("return false on not number characters", function(){
      expect(calculator.isNum("s")).toBeFalsy();
    });
  });
});