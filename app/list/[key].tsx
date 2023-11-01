import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Trending } from '../../components';

const Header = ({ text = '' }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};
const ListPage = () => {
  const { key } = useLocalSearchParams();
  let List;
  if (key === 'trending')
    List = <Trending headerComponent={<Header text="Trending books" />} />;
  return <View style={{ flex: 1 }}>{List}</View>;
};
export default ListPage;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
  },
});
