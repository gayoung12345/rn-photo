import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const MapScreen = () => {
  return (
    <View>
      <Text>지도화면</Text>
      <Link href="/">로그인화면</Link>
    </View>
  );
};

export default MapScreen;
