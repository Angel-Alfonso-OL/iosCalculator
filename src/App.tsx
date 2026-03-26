
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './presentation/screen/HomeScreen';
import { StatusBar, View } from 'react-native';
import { styles } from './config/theme/AppTheme';

export const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.background}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={"black"}
        />
        <HomeScreen />
      </View>

    </SafeAreaProvider>
  );
}
