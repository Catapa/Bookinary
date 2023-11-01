import { ReactElement } from 'react';

import { GridView } from './views';
import { useRequest } from '../api/hooks/generic/useRequest';

interface IProps {
  subject_query?: string;
  headerComponent?: ReactElement;
}
export const Subjects = ({ subject_query, headerComponent }: IProps) => {
  const { data, isLoading, error, refetch } = useRequest(
    `/subjects/${subject_query}`,
  );
  return (
    <>
      <GridView
        data={data?.works}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
        headerComponent={headerComponent}
      />
    </>
  );
};
