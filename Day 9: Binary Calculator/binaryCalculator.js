window.onload = () => {
    let nums = [];
    let op = "";
    
    const btn0 = document.getElementById("btn0");
    btn0.addEventListener("click" , () => {
        //set the value of res to 0
        setValue("0");
    });
    
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click" , () => {
        //set the value of res to 1
        setValue("1");
    });
    
    const btnClr = document.getElementById("btnClr");
    btnClr.addEventListener("click" , () => {
        //we should clear the res completely
        nums = [""];
        op = "";
        
        showRes();
    });
    
    const btnEql = document.getElementById("btnEql");
    btnEql.addEventListener("click" , () => {
        //we should calculate the operation and print the result in res
        //if we have both numbers and operator, Let's calculate
        if(nums.length === 2 && op.length === 1){
            var value1 = parseInt(nums[0] , 2); //convert binary to decimal first num
            var value2 = parseInt(nums[1] , 2); //convert binary to decimal second num
            var answer;
            
            switch(op){
                case "+": //calculate the sum and convert to binary
                    answer = (value1 + value2).toString(2);
                    break;
                case "-": //calculate the sub and convert to binary
                    answer = (value1 - value2).toString(2);
                    break;
                case "*": //calculate the sub and convert to binary
                    answer = (value1 * value2).toString(2);
                    break;
                case "/": //calculate the sub and convert to binary
                    answer = (value1 / value2).toString(2);
                    break;
            }
            nums = [answer];
            op = "";
            showRes();
        }
    });
    
    const btnSum = document.getElementById("btnSum");
    btnSum.addEventListener("click" , () => {
        //set the value of op to +
        setOP("+");
    });
    
    const btnSub = document.getElementById("btnSub");
    btnSub.addEventListener("click" , () => {
        //set the value of op to -
        setOP("-");
    });
    
    const btnMul = document.getElementById("btnMul");
    btnMul.addEventListener("click" , () => {
        //set the value of op to *
        setOP("*");
    });
    
    const btnDiv = document.getElementById("btnDiv");
    btnDiv.addEventListener("click" , () => {
        //set the value of op to /
        setOP("/");
    });
    
    
    /*setvalue function to set the value of input
    * @param {String} input - the input from btn0 or btn1
    */
    const setValue = (input) => {
        //if this is the first time we get the first number
        if(nums.length === 0){
            nums[0] = input;
        }
        //if this is still the first number
        else if(nums.length === 1 && op.length ===0){
            nums[0] += input;
        }
        //if this is the first time we get the second number
        else if(nums.length ===1 && op.length ===1){
            nums[1] = input;
        }
        //if this is still the second number
        else if(nums.length === 2 && op.length ===1){
            nums[1] += input;
        }
        
        showRes();
    }
    
    /*setOP function to set the value of op (operator)
    * @param {String} operator - the input from btnSum | btnSub | btnMul | btnDiv
    */
    const setOP = (operator) => {
        //if we have our first number
        if(nums.length === 1){
            op = operator;
        }
        showRes();
    }
    
    /*showRes function to show the value in "res" div
    * @param {String} res - the div innerText
    */
    const showRes = () => {
        const res = document.getElementById("res");
        let value1 = nums[0] === undefined ? '' : nums[0];
        let value2 = nums[1] === undefined ? '' : nums[1];
        
        res.innerText = `${value1}${op}${value2}`;
    }
    
    
};
