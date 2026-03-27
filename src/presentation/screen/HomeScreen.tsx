import { Text, View } from "react-native"
import { colors, styles } from "../../config/theme/AppTheme"
import { CalculatorButton } from "../components/CalculatorButton"
import { useCalculator } from "../hooks/useCalculator"


export const HomeScreen = () => {

  const {
    number,
    previosNumber,
    formula,
    buildNumber,
    clean,
    deleteLastChart,
    toggleSing,
    addOparation,
    divideOparation,
    multiplyOparation,
    subtractOparation,
    calculateResult
  } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>

      <Text 
        adjustsFontSizeToFit 
        numberOfLines={1} 
        style={styles.mainResult}
      >
        {formula}
      </Text>

      <Text 
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.subResult}
      >
        {(previosNumber === "0") ? "" : previosNumber}
      </Text>


      <View style={styles.row}>
        <CalculatorButton onPress={() => clean()} label="C" color={colors.lightGray} blakText />
        <CalculatorButton onPress={() => toggleSing()} label="+/-" color={colors.lightGray} blakText />
        <CalculatorButton onPress={() => deleteLastChart()} label="del" color={colors.lightGray} blakText />
        <CalculatorButton onPress={() => divideOparation()} label="/" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton onPress={() => multiplyOparation()} label="X" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton onPress={() => subtractOparation()} label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton onPress={() => addOparation()} label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("0")} label="0" doubleSize />
        <CalculatorButton onPress={() => buildNumber(".")} label="." />
        <CalculatorButton onPress={() => calculateResult()} label="=" color={colors.orange} />
      </View>




    </View>
  )
}

