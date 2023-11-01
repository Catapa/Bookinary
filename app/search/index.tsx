import { useLocalSearchParams } from 'expo-router';
import { Text, ScrollView, View } from 'react-native';

import { useRequest } from '../../api/hooks/generic/useRequest';
import { Grid } from '../../components/views';
const SearchPage = () => {
  const { query } = useLocalSearchParams();
  const { data, isLoading, error, refetch } = useRequest('search.json', {
    q: query,
  });
  return (
    <Grid
      data={data?.docs}
      isLoading={isLoading}
      error={error}
      refetch={refetch}
      headerComponent={<Text>Cautam? {query}</Text>}
    />
  );
};
export default SearchPage;
