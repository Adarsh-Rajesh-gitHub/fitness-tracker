import React from 'react';
import { SafeAreaView } from 'react-native';
import ImageUploadScreen from './screens/ImageUploadScreen'; // <- THIS PATH

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageUploadScreen />
    </SafeAreaView>
  );
}
