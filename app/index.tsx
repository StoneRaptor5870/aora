import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar style="auto" />
      <Text className="pt-4">
        <Link href="../tabs/home" className="text-amber-700">
          Go to home
        </Link>
      </Text>
    </View>
  );
};

export default App;
