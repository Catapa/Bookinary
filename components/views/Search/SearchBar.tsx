import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

export const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const search = (query: string) => {
    router.push(
      `search?${new URLSearchParams({
        query,
      })}`,
    );
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Search books, subjects or authors"
          numberOfLines={1}
          style={styles.searchInput}
          onChangeText={(text) => setSearchQuery(() => text)}
          onSubmitEditing={() => search(searchQuery)}
        />
      </View>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => search(searchQuery)}
      >
        <Feather
          name="search"
          size={24}
          color="white"
          style={styles.searchButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
