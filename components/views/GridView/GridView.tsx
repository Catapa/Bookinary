import { ReactElement } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import { IResponse } from '../../../types';
import { Loader, BookCard } from '../../common';

interface IProps extends IResponse {
  headerComponent?: ReactElement;
}
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

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
});
