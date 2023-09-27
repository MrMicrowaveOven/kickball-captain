import React from 'react';
import {
  SafeAreaView, Text, View, StyleSheet
} from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <View><Text>Hi!</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;