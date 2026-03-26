import { Pressable, Text } from "react-native"
import { colors, styles } from "../../config/theme/AppTheme"


interface props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blakText?: boolean;
}

export const CalculatorButton = ({ label, color = colors.darkGray, doubleSize = false, blakText = false, }: props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...styles.button,
            backgroundColor: color,
            opacity: (pressed) ? 0.8 : 1,
            width: (doubleSize) ? 180 : 80,
        })}>
            <Text style={{ ...styles.buttonText, color: (blakText) ? "black" : "white" }}>
                {label}
            </Text>
        </Pressable>
    )
}

