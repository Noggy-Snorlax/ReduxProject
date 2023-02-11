
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FPCSS from '../css/front-page.module.css';
import { changeValueOfPInput } from '../reducer/CalculatorRed';
import { changeValueOfBox, resetTicTacToe } from '../reducer/TicTacToeRed';

function Calculator() {
    const inputField = useSelector((state: any) => state.calculator.inputText);
    const dispatch = useDispatch();
    function isOperator(c: string) {
        if (c == "+" || c == "-" || c == "*" || c == "/" || c == "^") {
            return true;
        }
        else {
            return false;
        }
    }

    function precedence(c: string) {
        if (c == "^")
            return 3;
        else if (c == "*" || c == "/")
            return 2;
        else if (c == "+" || c == "-")
            return 1;
        else
            return -1;
    }

    function simpleCalculator(number1: number, number2: number, operatorSymbol: string) {
        switch (operatorSymbol) {

            case "+":
                return number1 + number2;

            case "-":
                return number1 - number2;
            case "*":
                return number1 * number2;
            case "/":
                return number1 / number2;
            default:
                break;
        }
        return 0;
    }
    function removeNumberBracket(array:any) {
        let stringNumber = array;
        let addArrayLenght=0;
        // console.log(stringNumber[1])
        for(let i=0;i<stringNumber.length+addArrayLenght;i++){
            if(stringNumber[i]==="("){
                console.log("come in");
                console.log(i);
                console.log(stringNumber);
                console.log(stringNumber[i-1]);
                console.log(stringNumber[i-1].match(/[0-9]/g));
                if(stringNumber[i-1].match(/[0-9]/g)!==null){
                    console.log(stringNumber[i-1])
                    stringNumber=stringNumber.replace(stringNumber[i-1]+"(", stringNumber[i-1]+"*(");
                    addArrayLenght++;
                }
            }
        }
        return stringNumber
        // console.log(stringNumber)
        }

    const re = /\+|\-|\*|\/|\(|\)/;
    function PrefixList(prefixText: string) {
        let ArrayListPrefix: Array<string> = [];
        let prefixTrim: string = prefixText.replaceAll(" ", "");
        prefixTrim = removeNumberBracket(prefixText)
        try{
                
        
        while (prefixTrim !== "") {
           
            // let operatorIndex:number = prefixTrim.indexOf({ '+', '-', '/', '*', '(', ')' });
            var match = prefixTrim.match(re);
            var operatorIndex = match?.index ?? -1;
            // console.log(match);
            if (operatorIndex === 0) {
                operatorIndex = operatorIndex + 1;
            }
            if (operatorIndex !== -1) {
                ArrayListPrefix.push(prefixTrim.substring(0, operatorIndex));
                prefixTrim = prefixTrim.slice(operatorIndex);
                if (prefixTrim !== ("")) {
                    // int operatorIndex2 = prefixTrim.IndexOfAny(new char[] { '+', '-', '/', '*', '(', ')' });
                    var match2 = prefixTrim.match(re);
                    var operatorIndex2 = prefixTrim.indexOf(match2![0]);
                    if (operatorIndex2 == 0) {
                        operatorIndex2++;
                    }
                    if (operatorIndex2 != -1) {
                        ArrayListPrefix.push(prefixTrim.substring(0, operatorIndex2));
                        prefixTrim = prefixTrim.slice(operatorIndex2);
                    }
                }
            }
            else {
                ArrayListPrefix.push(prefixTrim.substring(0, prefixTrim.length));
                prefixTrim = prefixTrim.slice(prefixTrim.length);
            }

            //check bracket behind is number
          
            //  console.log(ArrayListPrefix);
        }
    }catch(err){
        return [];
    }
        return ArrayListPrefix;
    }


    function convertPreFixIntoPostFix(preFix: Array<string>) {
        let postFixList: Array<string> = [];
        let stackOperator: Array<string> = [];

        preFix.forEach(item => {
            if (item === ("(")) {
                stackOperator.push(item);
            }
            else if (item === (")")) {
                while (stackOperator[stackOperator.length - 1] !== ("(")) {
                    postFixList.push(stackOperator.pop()!);
                }
                stackOperator.pop();
            }
            else {
                if (isOperator(item) && stackOperator.length == 0) {
                    stackOperator.push(item);
                }
                else if (isOperator(item) && stackOperator.length != 0) {
                    if (stackOperator[stackOperator.length - 1] === ("(")) {
                        stackOperator.push(item);
                    }
                    else {
                        if (precedence(item) < precedence(stackOperator[stackOperator.length - 1])) {
                            postFixList.push(stackOperator.pop()!);

                        }
                        if (stackOperator.length != 0) {
                            if (precedence(item) > precedence(stackOperator[stackOperator.length - 1])) {
                                stackOperator.push(item);
                            }
                            else if (precedence(item) == precedence(stackOperator[stackOperator.length - 1])) {
                                postFixList.push(stackOperator.pop()!);
                                stackOperator.push(item);
                            }
                        }
                        else {
                            stackOperator.push(item);
                        }
                    }
                }
                else {
                    postFixList.push(item);
                }
            }
            console.log(postFixList);
            console.log(stackOperator);
        })

        while(stackOperator.length>0){
            postFixList.push(stackOperator.pop()!);
        }
        // stackOperator.forEach(operatorItem => {
        //     postFixList.push(operatorItem);
        // }
        // )
        console.log(postFixList);
        return postFixList;
    }

    function postFixToAnswer(Postfix: Array<string>) {
if(Postfix){

}

        let postFixToAnswerTemp: Array<string> = Postfix;


        while (postFixToAnswerTemp.length > 1) {
            for (let count = 0; count < postFixToAnswerTemp.length; count++) {
                if (isOperator("" + postFixToAnswerTemp[count])) {
                    let number1: number = +(postFixToAnswerTemp[count - 2]);
                    let number2: number = +(postFixToAnswerTemp[count - 1]);
                    let operatorSymbol: string = "" + postFixToAnswerTemp[count];

                    let tempcal: number = simpleCalculator(number1, number2, operatorSymbol);

                    postFixToAnswerTemp.splice(count - 2, 1);
                    postFixToAnswerTemp.splice(count - 2, 1);
                    postFixToAnswerTemp.splice(count - 2, 1);
                    postFixToAnswerTemp.splice(count - 2, 0, "" + tempcal);
                    break;
                }
            }
        }

        return +(postFixToAnswerTemp[0]);
    }
    let stringtesting = "10 - ( 2.3 + 3.32 * ( 7 - 5 ) )";
    // console.log( convertPreFixIntoPostFix(PrefixList(stringtesting)))





    return (
        <div id="section6" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "1em", paddingBottom: "1em" }}>
            <div className={FPCSS.aboutMeTitleText + " " + FPCSS['font-30px'] + " " + FPCSS['font-bold'] + " " + FPCSS['font-color']} style={{}}>
                Calculator
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <input autoComplete="off" type="text" id="fname" name="fname" onChange={(i) => { dispatch(changeValueOfPInput(i.target.value)) }} />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div >
                            Answer:
                        </div>
                        <div style={{ paddingLeft: "4%" , whiteSpace: "nowrap"}}>
                            {
                            "" + postFixToAnswer(convertPreFixIntoPostFix(PrefixList(inputField))) === "NaN" ? "Unable to process" : postFixToAnswer(convertPreFixIntoPostFix(PrefixList(inputField)))
                            }
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div >
                            PostFix:
                        </div>
                        <div style={{ paddingLeft: "4%", whiteSpace: "nowrap" }}>
                            {
                            "" + convertPreFixIntoPostFix(PrefixList(inputField)) === "NaN" ? "Unable to process" : convertPreFixIntoPostFix(PrefixList(inputField))
                            // PrefixList(inputField)
                            }
                        </div>
                    </div>
                </div>


            </div>
            <div style={{width:"50%",paddingTop:"2em"}}>
                <button type="button" id="collapsible" className="collapsible"
                    onClick={() => {
                        var coll = document.getElementById("content")!;
                        if (coll.style.display === "block") {
                            coll.style.display = "none";
                        } else {
                            coll.style.display = "block";
                        }
                    }}>Formula used ↓</button>
                <div className="content" id="content">
                    <p>1) If OPERATOR arrives & Stack is empty, push this operator onto the stack.</p>
                    <p>2) IF incoming OPERATOR has HIGHER precedence than the TOP of the Stack, push it on stack.</p>
                    <p>3) IF incoming OPERATOR has LOWER precedence than the TOP of the Stack, then POP and print the TOP. Then test the incoming operator against the NEW TOP of stack.</p>
                    <p>4) IF incoming OPERATOR has EQUAL precedence with TOP of Stack, use ASSOCIATIVITY Rules.</p>
                    <p>5) PUSH incoming OPERATOR on stack.</p>
                    <p>6) At the end of Expression, POP & print all  OPERATORS from the stack.</p>
                    <p>7) IF incoming SYMBOL is ‘(‘ PUSH it onto Stack.</p>
                    <p>8) IF incoming SYMBOL is ‘)’ POP the stack and print OPERATORs till ‘(‘ is found. POP that ‘(‘.</p>
                    <p>9) IF TOP of stack is ‘(‘ PUSH OPERATOR on Stack.</p>
                </div>
            </div>



        </div>
    );
}

export default Calculator;
