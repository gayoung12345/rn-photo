import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const ListScreen = () => {
  return (
    <View>
      <Text>리스트화면</Text>
      <Link href="/">로그인화면</Link>
    </View>
  );
};

export default ListScreen;
