import { View, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { PETS } from "@/utils/pets";

import { SwipeableCard } from "./SwipeableCard";

import { getPets } from "@/functions/getPets";
import { useEffect, useState } from "react";
import { DataItem } from "@/app/(drawer)/(tabs)/details/[id]";



export const CardStack = () => {
  const shuffleBack = useSharedValue(false);

  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        getPets(setData, setLoading, setError);
    }, []);
  return (
    <View style={styles.container}>
      {data?.map((item, index) => (
        <SwipeableCard
          card={
            { 
              images: item.image,
              name: item.name,
              id: item.id
            }
          }
          key={index}
          index={index}
          shuffleBack={shuffleBack}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBD6C6",
  },
});