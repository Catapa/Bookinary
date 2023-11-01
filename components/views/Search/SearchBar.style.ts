import { StyleSheet } from 'react-native';

import { COLORS } from '../../../styles';
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
    backgroundColor: COLORS.white,
    width: 250,
  },
  searchInput: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: COLORS.secondary,
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
export default styles;
