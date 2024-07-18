import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const AddScreen = () => {
  return (
    <View>
      <Text>새글쓰기</Text>
      <Link href="/">로그인화면</Link>
    </View>
  );
};

export default AddScreen;
