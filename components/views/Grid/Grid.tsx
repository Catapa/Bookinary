import { FlatList, View, Text, StyleSheet } from 'react-native';

import { IResponse } from '../../../types';
import { Loader, TrendingCard } from '../../common';

export const Grid = ({ data, isLoading, error, refetch }: IResponse) => {
  if (isLoading) return <Loader />;
  if (error) return <Text>Something went wrong</Text>;
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => <TrendingCard item={item} />}
        keyExtractor={(item) => item.key}
        refreshing={isLoading}
        onRefresh={() => refetch()}
        //contentContainerStyle={styles.list}
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
