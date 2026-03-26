import { Text, View } from "react-native"
import { colors, styles } from "../../config/theme/AppTheme"
import { CalculatorButton } from "../components/CalculatorButton"


export const HomeScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.mainResult}>15000</Text>
      <Text style={styles.subResult}>2+50</Text>
      <View style={styles.row}>
        <CalculatorButton label="C" color={colors.lightGray} blakText />
        <CalculatorButton label="+/-" color={colors.lightGray} blakText />
        <CalculatorButton label="del" color={colors.lightGray} blakText />
        <CalculatorButton label="/" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="X" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" color={colors.orange} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="0" doubleSize />
        <CalculatorButton label="." />
        <CalculatorButton label="=" color={colors.orange} />
      </View>




    </View>
  )
}

