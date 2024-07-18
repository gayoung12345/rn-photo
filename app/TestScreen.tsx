import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const TestScreen = () => {
  return (
    <View>
      <Text>테스트페이지</Text>
      <Link href="/">로그인화면</Link>
    </View>
  );
};

export default TestScreen;
