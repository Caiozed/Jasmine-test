function Calculator() {
}

Calculator.prototype.sum = function(a, b){
  if(this.isNum(a) && this.isNum(b)){
    return a + b; 
  }else{
    return "Only numbers allowed!";
  }
};

Calculator.prototype.times = function(a, b){
  if(this.isNum(a) && this.isNum(b)){
    return a * b; 
  }else{
    return "Only numbers allowed!";
  }
};

Calculator.prototype.sub = function(a, b){
  if(this.isNum(a) && this.isNum(b)){
    return a - b; 
  }else{
    return "Only numbers allowed!";
  }
};

Calculator.prototype.div = function(a, b){
  if(this.isNum(a) && this.isNum(b)){
    return a / b; 
  }else{
    return "Only numbers allowed!";
  }
};

Calculator.prototype.isNum = function(num){
  if(typeof num === "number"){
    return true; 
  }else{
    return false;
  }
};

module.exports = Calculator;
