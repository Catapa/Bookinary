import { useRouter } from 'expo-router';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { IResponse } from '../../../types';
import { BookCard, Loader } from '../../common';

interface IProps extends Partial<IResponse> {
  heading: string;
  redirect?: string;
}
export const HorizontalList = ({
  data,
  isLoading,
  error,
  heading,
  redirect,
}: IProps) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>{heading}</Text>
        <TouchableOpacity
          style={styles.showAllContainer}
          onPress={() => {
            redirect && router.push(redirect);
          }}
        >
          <Text style={styles.showAllText}>Show all</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <BookCard item={item} round />}
          contentContainerStyle={{ columnGap: 8 }}
          //keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '500',
  },
  showAllContainer: {},
  showAllText: {
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
