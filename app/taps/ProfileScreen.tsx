import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text>마이페이지화면</Text>
      <Link href="/">로그인화면</Link>
    </View>
  );
};

export default ProfileScreen;
