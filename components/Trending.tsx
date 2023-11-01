import { ReactElement } from 'react';

import { Grid } from './views';
import { useTrendingBooks } from '../api/hooks';

interface IProps {
  headerComponent?: ReactElement;
  limit?: number;
}
export const Trending = ({ limit, headerComponent }: IProps) => {
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
        headerComponent={headerComponent}
      />
    </>
  );
};
