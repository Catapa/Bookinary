import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useTrendingBooks } from '../api/hooks';
import { HorizontalList } from '../components/views';

export default function App() {
  const { data, isLoading, error } = useTrendingBooks('daily', {
    limit: 20,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.hero}>
          <Text style={styles.heading}>Bookinary</Text>
          <Text style={styles.subheading}>What will you read next?</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              placeholder="Search books, subjects or authors"
              numberOfLines={1}
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Feather
              name="search"
              size={24}
              color="white"
              style={styles.searchButtonIcon}
            />
          </TouchableOpacity>
        </View>
        <HorizontalList
          data={data?.works}
          isLoading={isLoading}
          error={error}
          heading="Trending"
          redirect="/list/trending"
        />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    backgroundColor: '#454ade',
    paddingVertical: 36,
    paddingHorizontal: 4,
    borderBottomEndRadius: 150,
    marginBottom: 16,
  },
  heading: {
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'center',
    color: '#ffffff',
  },
  subheading: {
    fontSize: 24,
    fontWeight: '200',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 4,
    gap: 8,
  },
  searchWrapper: {
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#fff',
    width: 250,
  },
  searchInput: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: '#f46036',
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  searchButtonIcon: {
    //height: '100%',
    //width: '100%',
  },
});
