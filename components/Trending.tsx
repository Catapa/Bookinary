import { Text } from 'react-native';

import { Grid } from './views';
import { useTrendingBooks } from '../api/hooks';

export const Trending = () => {
  const { data, isLoading, error, refetch } = useTrendingBooks('monthly');

  return (
    !isLoading && (
      <>
        <Text>Alo?</Text>
        <Grid
          data={data.works}
          isLoading={isLoading}
          error={error}
          refetch={refetch}
        />
      </>
    )
  );
};
