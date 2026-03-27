import { useEffect, useRef, useState } from "react"

enum Operators {
    add = "+",
    subtract = "-",
    multiply = "x",
    divide = "/",
}


export const useCalculator = () => {

    const [formula, setFormula] = useState("");
    const [number, setNumber] = useState("0")
    const [previosNumber, setPreviosNumber] = useState("0")

    const lastOperation = useRef<Operators | undefined>(null);

    useEffect(() => {

        if (lastOperation.current) {
            const firstFormula = formula.split(" ").at(0);
            setFormula(`${firstFormula} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number);
        }

    }, [number]);

    useEffect(() => {
        const subResult = claculateSubResult();
        setPreviosNumber(`${subResult}`);
    }, [formula])


    const clean = () => {
        setNumber("0");
        setPreviosNumber("0");
        lastOperation.current = undefined;
        setFormula("");
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
        calculateResult();
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

        const result = claculateSubResult();
        setFormula(`${result}`)
        lastOperation.current = undefined;
        setPreviosNumber("0")
    }

    const claculateSubResult = ():number => {

        const [value1, operation, value2] = formula.split(" ");
        const num1 = Number(value1);
        const num2 = Number(value1);

        if (isNaN(num2)) return num1;

        switch (operation) {

            case Operators.add:
                return num1 + num2;
                break;
            case Operators.subtract:
                return num1 - num2
                break;
            case Operators.divide:
                return num1 / num2
                break;
            case Operators.multiply:
                return num1 * num2
                break;

            default:
                throw new Error("No Operation");
        }
        
    }

    return {
        //Propiedades
        number,
        previosNumber,
        formula,

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




