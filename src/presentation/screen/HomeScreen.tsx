import { Text, View } from "react-native"
import { colors, styles } from "../../config/theme/AppTheme"
import { CalculatorButton } from "../components/CalculatorButton"
import { useCalculator } from "../hooks/useCalculator"


export const HomeScreen = () => {

  const { number, buildNumber } = useCalculator();


  return (
    <View style={styles.calculatorContainer}>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>15000</Text>
      <Text style={styles.subResult}>2+50</Text>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log("a")} label="C" color={colors.lightGray} blakText />
        <CalculatorButton onPress={() => console.log("a")} label="+/-" color={colors.lightGray} blakText />
        <CalculatorButton onPress={() => console.log("a")} label="del" color={colors.lightGray} blakText />
        <CalculatorButton onPress={() => console.log("")} label="/" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("7")} label="7" />
        <CalculatorButton onPress={() => buildNumber("8")} label="8" />
        <CalculatorButton onPress={() => buildNumber("9")} label="9" />
        <CalculatorButton onPress={() => console.log("")} label="X" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("4")} label="4" />
        <CalculatorButton onPress={() => buildNumber("5")} label="5" />
        <CalculatorButton onPress={() => buildNumber("6")} label="6" />
        <CalculatorButton onPress={() => console.log("")} label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber("1")} label="1" />
        <CalculatorButton onPress={() => buildNumber("2")} label="2" />
        <CalculatorButton onPress={() => buildNumber("3")} label="3" />
        <CalculatorButton onPress={() => console.log("")} label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log("")} label="0" doubleSize />
        <CalculatorButton onPress={() => buildNumber(".")} label="." />
        <CalculatorButton onPress={() => console.log("")} label="=" color={colors.orange} />
      </View>




    </View>
  )
}

