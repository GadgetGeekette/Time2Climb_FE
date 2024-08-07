import React from "react";
import { Button, View, Text } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Landing Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.replace('Main')}
      />
    </View>
  );
}