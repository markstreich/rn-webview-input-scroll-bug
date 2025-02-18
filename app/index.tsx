import { Button, Keyboard, ScrollView, View } from "react-native";
import WebView from "react-native-webview";
import { useEffect, useState } from "react";

export default function RootLayout() {
  return (
    <ScrollView style={{ backgroundColor: "red", flex: 1, height: "100%" }}>
      <View style={{ height: 700, backgroundColor: "green" }} />
      <View style={{ flex: 1, height: 300, backgroundColor: "blue" }}>
        <WebView
          source={require("../assets/index.html")}
          scrollEnabled={true}
        />
      </View>
      <View style={{ height: 700, width: "100%", backgroundColor: "green" }} />
    </ScrollView>
  );
}
