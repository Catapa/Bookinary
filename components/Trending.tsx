import { Text } from 'react-native';

import { Grid } from './views';
import { useTrendingBooks } from '../api/hooks';

interface IProps {
  limit?: number;
}
export const Trending = ({ limit }: IProps) => {
  const { data, isLoading, error, refetch } = useTrendingBooks('monthly', {
    limit,
  });

  return (
    <>
      <Grid
        data={data?.works}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
      />
    </>
  );
};
