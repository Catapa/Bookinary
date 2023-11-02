import { Feather, Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { useTrendingBooks } from '../api/hooks';
import { useRequest } from '../api/hooks/generic/useRequest';
import { HorizontalList, SearchBar } from '../components/views';
import { COLORS } from '../styles';

export default function App() {
  /* Retrieve trending */
  const {
    data: trendingData,
    isLoading: trendingLoading,
    error: trendingError,
  } = useTrendingBooks('daily', {
    limit: 10,
  });

  /* Retrieve classic books */
  const classicBooksKey = 'accessible_book';
  const {
    data: classicBooksData,
    isLoading: classicBooksLoading,
    error: classicBooksError,
  } = useRequest(`/subjects/${classicBooksKey}`, {
    limit: 10,
  });

  /* Retrieve business books */
  const businessBooksKey = 'business';
  const {
    data: businessBooksData,
    isLoading: businessBooksLoading,
    error: businessBooksError,
  } = useRequest(`/subjects/${businessBooksKey}`, {
    limit: 10,
  });

  /* Retrieve programming books */
  const programmingBooksKey = 'programming';
  const {
    data: programmingBooksData,
    isLoading: programmingBooksLoading,
    error: programmingBooksError,
  } = useRequest(`/subjects/${programmingBooksKey}`, {
    limit: 10,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity>
              <Feather name="menu" size={36} color={COLORS.white} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}
            >
              <Text
                style={{ color: COLORS.white, fontSize: 16, fontWeight: '200' }}
              >
                My Library
              </Text>
              <Ionicons name="library" size={36} color={COLORS.white} />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.hero}>
          <Text style={styles.heading}>Bookinary</Text>
          <Text style={styles.subheading}>What will you read next?</Text>
        </View>

        {/* Search */}
        <SearchBar />

        {/* Trending */}
        <HorizontalList
          data={trendingData?.works}
          isLoading={trendingLoading}
          error={trendingError}
          heading="Trending"
          redirect="/catalog/trending"
        />

        {/* Classic books */}
        <HorizontalList
          data={classicBooksData?.works}
          isLoading={classicBooksLoading}
          error={classicBooksError}
          heading="Classic books"
          redirect={`/catalog/subjects?${new URLSearchParams({
            query: classicBooksKey,
          })}`}
        />

        {/* Business books */}
        <HorizontalList
          data={businessBooksData?.works}
          isLoading={businessBooksLoading}
          error={businessBooksError}
          heading="Business books"
          redirect={`/catalog/subjects?${new URLSearchParams({
            query: businessBooksKey,
          })}`}
        />

        {/* Programming books */}
        <HorizontalList
          data={programmingBooksData?.works}
          isLoading={programmingBooksLoading}
          error={programmingBooksError}
          heading="Programming books"
          redirect={`/catalog/subjects?${new URLSearchParams({
            query: programmingBooksKey,
          })}`}
        />
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  hero: {
    backgroundColor: COLORS.primary,
    paddingVertical: 64,
    paddingHorizontal: 4,
    borderBottomEndRadius: 150,
    marginBottom: 16,
  },
  heading: {
    fontSize: 36,
    fontWeight: '300',
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'DMRegular',
  },
  subheading: {
    fontSize: 24,
    fontWeight: '200',
    textAlign: 'center',
    fontStyle: 'italic',
    color: COLORS.white,
    fontFamily: 'DMRegular',
  },
});
