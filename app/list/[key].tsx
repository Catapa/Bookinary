import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Trending } from '../../components';
const ListPage = () => {
  const { key } = useLocalSearchParams();
  let List;
  if (key === 'trending') List = <Trending />;
  return (
    <View style={{ flex: 1 }}>
      <Text>Bun venit la mine {key}</Text>
      {List}
    </View>
  );
};
export default ListPage;
