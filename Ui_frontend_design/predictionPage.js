// predictionPage.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PredictionPage = ({ onPredict }) => {
  const [imagePath, setImagePath] = useState('');

  const handlePredict = () => {
    // Call the onPredict function passed from the main JS with the image path
    onPredict(imagePath);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter image path"
        value={imagePath}
        onChangeText={text => setImagePath(text)}
      />
      <Button
        title="Predict"
        onPress={handlePredict}
      />
    </View>
  );
};

export default PredictionPage;
