import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Header = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.header,
        {backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'},
      ]}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const Footer = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.footer,
        {backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'},
      ]}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};

const Search = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.search,
        {backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'},
      ]}>
      <Text style={styles.searchText}>Search</Text>
    </View>
  );
};
const Categories = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.categories,
        {backgroundColor: colorScheme === 'dark' ? '#000' : '#fff'},
      ]}>
      <Text style={styles.categoriesText}>Categories</Text>
    </View>
  );
};
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>{'Find your Daily \nItems with Us'}</Text>
      <Search />
      <Categories />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
