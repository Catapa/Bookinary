import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import styles from './search.style';
import { useRequest } from '../../api/hooks/generic/useRequest';
import { GridView } from '../../components/views';

const PageHeader = ({ text = '' }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headingPrimary}>Search results for: </Text>
      <Text style={styles.headingSecondary}>&quot;{text}&quot;</Text>
    </View>
  );
};

const SearchPage = () => {
  const { query } = useLocalSearchParams();
  const { data, isLoading, error, refetch } = useRequest('search.json', {
    q: query,
  });
  return (
    <View style={{ flex: 1 }}>
      <GridView
        data={data?.docs}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
        headerComponent={<PageHeader text={query as string} />}
      />
    </View>
  );
};
export default SearchPage;
