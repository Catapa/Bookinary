import { ReactElement } from 'react';
import { FlatList, View, Text } from 'react-native';

import styles from './GridView.style';
import { IResponse } from '../../../types';
import { Loader, BookCard } from '../../common';

interface IProps extends IResponse {
  headerComponent?: ReactElement;
}

/**
 * Component: GridView
 *
 * This component displays a grid of items, such as books or other content.
 * It provides loading feedback, error handling, and an option to manually refresh the data.
 *
 * @param {IProps} props - An object containing the properties for rendering the grid view.
 * @param {Array<Object>} props.data - An array of data items to display in the grid.
 * @param {boolean} props.isLoading - A flag indicating whether the data is currently loading.
 * @param {Error | null} props.error - An optional error object, if an error occurred during data fetching.
 * @param {Function} props.refetch - A function to trigger a manual refresh of the data.
 * @param {ReactNode} props.headerComponent - An optional component to display at the top of the grid.
 *
 * Usage:
 * ```javascript
 * <GridView
 *   data={itemsArray}
 *   isLoading={loadingState}
 *   error={errorObject}
 *   refetch={refreshFunction}
 *   headerComponent={<CustomHeaderComponent />}
 * />
 * ```
 *
 * @component
 */
export const GridView = ({
  data,
  isLoading,
  error,
  refetch,
  headerComponent,
}: IProps) => {
  if (isLoading) return <Loader />;
  if (error) return <Text>Something went wrong</Text>;
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => <BookCard item={item} />}
        keyExtractor={(item) => item.key}
        refreshing={isLoading}
        onRefresh={() => refetch()}
        ListHeaderComponent={headerComponent}
      />
    </View>
  );
};
