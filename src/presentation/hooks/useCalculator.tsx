import { useReducer, useRef, useState } from "react"

enum Operators {
    add,
    subtract,
    multiply,
    divide,
}


export const useCalculator = () => {

    const [number, setNumber] = useState("0")
    const [previosNumber, setPreviosNumber] = useState("0")

    const lastOperation = useRef<Operators>(null);


    const clean = () => {
        setNumber("0");
        setPreviosNumber("0");
    }

    const deleteLastChart = () => {

        if (number.startsWith("-") && (number.length == 2)) {
            return setNumber("0");
        }

        if (number.length > 1) {
            setNumber(number.substring(0, number.length - 1));
        } else {
            setNumber("0");
        }

    }

    const toggleSing = () => {
        if (number.startsWith("-")) {
            setNumber(number.replace("-", ""));
        } else {
            setNumber("-" + number);
        }
    }



    const buildNumber = (numberString: string) => {

        if (number.includes(".") && numberString === ".") return;

        if (number.startsWith("0") || number.startsWith("-0")) {
            if (numberString === ".") {
                return setNumber(number + numberString);
            }
            if (numberString === "0" && (number.includes("."))) {
                return setNumber(number + numberString)
            }

            if (numberString !== "0" && !number.includes(".")) {
                return setNumber(numberString)
            }

            if (numberString === "0" && !number.includes(".")) return;

            return setNumber(number + numberString);
        }


        setNumber(number + numberString);


    }

    const setLastNumber = () => {
        if (number.endsWith(".")) {
            setPreviosNumber(number.slice(0, -1));
        } else {
            setPreviosNumber(number);
        }
        setNumber("0");
    }

    const divideOparation = () => {
        setLastNumber();
        lastOperation.current = Operators.divide;
    }
    const addOparation = () => {
        setLastNumber();
        lastOperation.current = Operators.add;
    }

    const subtractOparation = () => {
        setLastNumber();
        lastOperation.current = Operators.subtract;
    }

    const multiplyOparation = () => {
        setLastNumber();
        lastOperation.current = Operators.multiply;
    }

    const calculateResult = () => {
        const num1 = Number(number);
        const num2 = Number(previosNumber);

        switch (lastOperation.current) {

            case Operators.add:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.subtract:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.divide:
                setNumber(`${num1 / num2}`);
                break;
            case Operators.multiply:
                setNumber(`${num2 * num1}`);
                break;

            default:
                throw new Error("No Operation");
        }
        setPreviosNumber("0");
    }

    return {
        //Propiedades
        number,
        previosNumber,

        //Metodos
        buildNumber,
        toggleSing,
        clean,
        deleteLastChart,
        subtractOparation,
        divideOparation,
        addOparation,
        multiplyOparation,
        calculateResult
    }

}




