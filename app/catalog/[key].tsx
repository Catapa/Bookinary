import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import styles from './catalog.style';
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
