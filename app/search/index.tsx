import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import styles from './search.style';
import { useRequest } from '../../api/hooks/generic/useRequest';
import { GridView } from '../../components/views';
import { COLORS } from '../../styles';

/**
 * Component: PageHeader
 *
 * This component displays a page header with a primary heading and a secondary heading.
 * It is typically used to show additional information about the page content.
 *
 * @param text - The text to display as the secondary heading.
 *
 * Usage:
 * ```javascript
 * <PageHeader text="Page title" />
 * ```
 *
 * @component
 */
const PageHeader = ({ text = '' }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headingPrimary}>Search results for: </Text>
      <Text style={styles.headingSecondary}>&quot;{text}&quot;</Text>
    </View>
  );
};

/**
 * Component: SearchPage
 *
 * This component displays search results based on a query search param and provides options to
 * refine the search or refresh the results.
 *
 * Usage:
 * ```javascript
 * <SearchPage />
 * ```
 *
 * @component
 */
const SearchPage = () => {
  const { query } = useLocalSearchParams();
  const { data, isLoading, error, refetch } = useRequest('search.json', {
    q: query,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightGray },
          headerShadowVisible: false,
          /* headerLeft: () => (
            <TouchableOpacity>
              <Feather name="menu" size={36} color={COLORS.white} />
            </TouchableOpacity>
          ), */
          headerRight: () => (
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}
            >
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 16,
                  fontWeight: '200',
                }}
              >
                My Library
              </Text>
              <Ionicons name="library" size={36} color={COLORS.black} />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <GridView
        data={data?.docs}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
        headerComponent={<PageHeader text={query as string} />}
      />
    </SafeAreaView>
  );
};
export default SearchPage;
