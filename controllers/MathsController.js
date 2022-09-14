
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
function findPrime(n) {
    let primeNumer = 0;
    for (let i = 0; i < n; i++) {
        primeNumer++;
        while (!isPrime(primeNumer)) {
            primeNumer++;
        }
    }
    return primeNumer;
}

const path = require('path');
const fs = require('fs');
module.exports =
    class MathsController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext);
            this.params = this.HttpContext.path.params;
        }
        error(message) {
            this.params.error = message;
            
            return false;
        }
        checkParamsCount(nbParams){
            if(Object.keys(this.params).length > nbParams){
                return this.error("too many parameters");
            }
            return true;
        }
        
        get() {
            if (this.HttpContext.path.queryString == '?') {
                let helpPagePath = path.join(process.cwd(), "wwwroot/helpPages/mathsServiceHelp.html");
                let content = fs.readFileSync(helpPagePath);
                this.HttpContext.response.content("text/html", content);
                // send help page html
            } else {
                if (this.params.op == ' ')
                     this.params.op = '+';
                if (this.params.op) {
                    switch (this.params.op) {

                        case '+':
                            if(!(this.checkParamsCount(3)))
                                this.HttpContext.response.JSON(this.params);
                            else if (this.HttpContext.path.params.x == undefined || this.HttpContext.path.params.y == undefined){
                                this.HttpContext.path.params.error = "one of the parameter is missing";
                                this.HttpContext.response.JSON(this.HttpContext.path.params)
                            }   
                            else {                      
                                 let valeurxadd = parseInt(this.HttpContext.path.params.x)
                                let valeuryadd = parseInt(this.HttpContext.path.params.y)
                                if (isNaN(valeurxadd)) {
                                    this.HttpContext.path.params.error = "'x' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }

                                else if (isNaN(valeuryadd)) {
                                    this.HttpContext.path.params.error = "'y' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.op = "+";
                                    this.HttpContext.path.params.value = valeurxadd + valeuryadd;
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                  
                                }
                                
                            }




                            break;
                        case '-':
                            if(!(this.checkParamsCount(3)))
                                this.HttpContext.response.JSON(this.params);
                            else if (this.HttpContext.path.params.x == undefined || this.HttpContext.path.params.y == undefined) {
                                this.HttpContext.path.params.error = "one of the parameter is missing";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            }
                            else {
                                let valeurxsous = parseInt(this.HttpContext.path.params.x)
                                let valeurysous = parseInt(this.HttpContext.path.params.y)
                                if (isNaN(valeurxsous)) {
                                    this.HttpContext.path.params.error = "'x' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else if (isNaN(valeurysous)) {
                                    this.HttpContext.path.params.error = "'y' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = valeurxsous - valeurysous;
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                            }
                            break;
                        case '*':
                            if(!(this.checkParamsCount(3)))
                                this.HttpContext.response.JSON(this.params);
                            else if (this.HttpContext.path.params.x == undefined || this.HttpContext.path.params.y == undefined) {
                                this.HttpContext.path.params.error = "one of the parameter is missing";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            }
                            else {
                                let valeurxmult = parseInt(this.HttpContext.path.params.x)
                                let valeurymult = parseInt(this.HttpContext.path.params.y)
                                if (isNaN(valeurxmult)) {
                                    this.HttpContext.path.params.error = "'x' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else if (isNaN(valeurymult)) {
                                    this.HttpContext.path.params.error = "'y' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = valeurxmult * valeurymult;
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                            }

                            break;
                        case '/':
                            if(!(this.checkParamsCount(3)))
                                this.HttpContext.response.JSON(this.params);
                            else if (this.HttpContext.path.params.x == undefined || this.HttpContext.path.params.y == undefined) {
                                this.HttpContext.path.params.error = "one of the parameter is missing";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            }
                            else {
                                let valeurxdiv = parseInt(this.HttpContext.path.params.x)
                                let valeurydiv = parseInt(this.HttpContext.path.params.y)
                                if (isNaN(valeurxdiv)) {
                                    this.HttpContext.path.params.error = "'x' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else if (isNaN(valeurydiv)) {
                                    this.HttpContext.path.params.error = "'y' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = valeurxdiv / valeurydiv;

                                    if (this.HttpContext.path.params.value == null || this.HttpContext.path.params.value == Infinity || isNaN(this.HttpContext.path.params.value) )
                                    {
                                        this.HttpContext.path.params.error ='null' ;
                                    }
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);

                                }
                            }
                            break;
                        case '%':
                            if(!(this.checkParamsCount(3))){
                                this.HttpContext.response.JSON(this.params);
                            }
                            else if (this.HttpContext.path.params.x == undefined || this.HttpContext.path.params.y == undefined) {
                                this.HttpContext.path.params.error = "one of the parameter is missing";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            }
                            else {
                                let valeurxmod = parseInt(this.HttpContext.path.params.x)
                                let valeurymod = parseInt(this.HttpContext.path.params.y)
                                if (isNaN(valeurxmod)) {
                                    this.HttpContext.path.params.error = "'x' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else if (isNaN(valeurymod)) {
                                    this.HttpContext.path.params.error = "'y' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = valeurxmod % valeurymod;

                                    if (this.HttpContext.path.params.value == null || this.HttpContext.path.params.value == Infinity || isNaN(this.HttpContext.path.params.value) )
                                    {
                                        this.HttpContext.path.params.error ='null' ;
                                    }
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                            }
                            break;
                        case '!':
                            if(!(this.checkParamsCount(2))){
                                this.HttpContext.response.JSON(this.params);
                            }
                            else if (this.HttpContext.path.params.n == undefined) {
                                this.HttpContext.path.params.error = "'n' parameter is not defined";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            } else {
                                let valeurnfac = parseInt(this.HttpContext.path.params.n)

                                if (isNaN(valeurnfac)) {
                                    this.HttpContext.path.params.error = "'n' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = factorial(valeurnfac);
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                            }

                            break;
                        case 'p':
                            if(!(this.checkParamsCount(2))){
                                this.HttpContext.response.JSON(this.params);
                            }
                            if (this.HttpContext.path.params.n == undefined) {
                                this.HttpContext.path.params.error = "'n' parameter is not defined";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            } else {
                                let nprime = parseInt(this.HttpContext.path.params.n)

                                if (isNaN(nprime)) {
                                    this.HttpContext.path.params.error = "'n' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = isPrime(nprime);
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                            }

                            break;
                        case 'np':
                            if(!(this.checkParamsCount(2))){
                                this.HttpContext.response.JSON(this.params);
                            }
                            else if (this.HttpContext.path.params.n == undefined) {
                                this.HttpContext.path.params.error = "'n' parameter is not defined";
                                this.HttpContext.response.JSON(this.HttpContext.path.params);
                            } else {
                                let ntrouverPrime = parseInt(this.HttpContext.path.params.n)

                                if (isNaN(ntrouverPrime)) {
                                    this.HttpContext.path.params.error = "'n' parameter is not a number";
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                                else {
                                    this.HttpContext.path.params.value = findPrime(ntrouverPrime);
                                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                                }
                            }

                            break;
                        default:
                            this.HttpContext.path.params.error = "this operator don't exist, do maths?";
                            this.HttpContext.response.JSON(this.HttpContext.path.params);

                    }


                } else {
                    this.HttpContext.path.params.error = "parameter 'op' is missing";
                    this.HttpContext.response.JSON(this.HttpContext.path.params);
                }

            }
        }
    }