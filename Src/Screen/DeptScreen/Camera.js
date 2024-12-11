import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import Geolocation from 'react-native-geolocation-service';
import Marker from 'react-native-image-marker';
import RNFS from 'react-native-fs';

const Camera = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [processedPhotoUri, setProcessedPhotoUri] = useState(null);

  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      async (response) => {
        if (response.didCancel) {
          console.log('User cancelled photo capture.');
        } else if (response.errorCode) {
          console.error('Error: ', response.errorMessage);
        } else {
          const { uri } = response.assets[0];
          setPhotoUri(uri);
          fetchAndEmbedLocation(uri);
        }
      }
    );
  };

  const fetchAndEmbedLocation = (photoUri) => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const locationText = `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`;
        try {
          const outputUri = await Marker.markText({
            src: photoUri, // Original image URI
            text: locationText, // Text to overlay
            X: 20, // X-coordinate for the text
            Y: 40, // Y-coordinate for the text
            color: '#FF0000', // Text color
            fontName: 'Arial-BoldMT', // Font
            fontSize: 40, // Text size
            scale: 1, // Scale factor
            quality: 100, // Quality of the output image
          });
          setProcessedPhotoUri(outputUri);
          Alert.alert('Success', 'Location embedded on photo!');
        } catch (error) {
          console.error('Error embedding text on photo:', error);
        }
      },
      (error) => {
        Alert.alert('Location Error', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Take Photo" onPress={takePhoto} />
      {processedPhotoUri && (
        <Image source={{ uri: processedPhotoUri }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 400,
    marginTop: 20,
  },
});

export default Camera;
