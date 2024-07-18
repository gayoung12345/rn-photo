import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>홈 화면</Text>
      <Image
        source={require('../../assets/images/react-logo.png')}
        style={{ width: 200, height: 200 }}
      />
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2024/05/31/09/37/living-room-8800183_640.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Link href="/">로그인화면</Link>
    </View>
  );
};

export default HomeScreen;
