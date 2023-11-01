import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { useRequest } from '../../api/hooks/generic/useRequest';
import { Grid } from '../../components/views';

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
      <Grid
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 8,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  headingPrimary: {
    fontSize: 24,
    fontWeight: '500',
  },
  headingSecondary: {
    fontSize: 24,
    fontWeight: '300',
    fontStyle: 'italic',
  },
});
