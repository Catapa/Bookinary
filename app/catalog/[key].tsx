import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Trending } from '../../components';
import { Subjects } from '../../components/Subjects';

const Header = ({ text = '' }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};
const ListPage = () => {
  const { key, query } = useLocalSearchParams();
  let List;
  if (key === 'trending')
    List = <Trending headerComponent={<Header text="Trending books" />} />;
  else if (key === 'subjects') {
    List = (
      <Subjects
        subject_query={query as string}
        headerComponent={
          <Header
            text={`${
              query === 'accessible_book' ? 'Classic' : (query as string)
            } books`}
          />
        }
      />
    );
  }

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
    textTransform: 'capitalize',
  },
});
