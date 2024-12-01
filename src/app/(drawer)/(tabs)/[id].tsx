import { NavigationBar } from "@/components/NavigationBar";
import { View, Text, Image } from "react-native";
import { getUser } from "@/functions/getPetById";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { useLocalSearchParams } from "expo-router";
import  Card from "@/components/Card";



interface DataItem {
  id: number;
  name: string;
  years: string;
  description: string;
  race: string;
  weight: number;
  image: string;
}

type SearchParams = {
  id?: string; // O id pode vir como string
};

const Details: React.FC = () => {
  
  const { id } = useLocalSearchParams() as SearchParams;

  const numericId = id ? parseInt(id, 10) : undefined; 

  const [data, setData] = useState<DataItem | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  useEffect(() => {
    if (numericId) {
      setLoading(true); 
      getUser(numericId, setData, setLoading, setError);
    }
  }, [numericId]); 

  
  useEffect(() => {
    if (error) {
      console.log("Erro ao buscar dados.");
    }
  }, [error]);

  useEffect(() => {
    console.log(data); 
  }, [data]);

  return (
    <View className="flex-1 bg-primary-400 px-4 items-center justify-center">
      <Header />
     
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data ? (
          <View className="w-fit items-center -mt-8">
            <Text className="text-2xl font-bold -mb-1">
              {data.name} 
            </Text>
            <Text>
              {data.race}
            </Text>
          </View>
        ) : (
          <Text>No data available.</Text>
        )
      )}

      <View className="flex-1">

      <Image source={require("@/assets/imageFundo.png")} style={{width: 420, height: "80%", marginTop: 40}} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data ? (
          <View className="w-full justify-center items-center flex-row gap-2 absolute bottom-60">
            <Card
            iconName="calendar"
            text1="Idade"
            data={data.years}
            text2="Anos"
          />
           <Card
            iconName="heart"
            text1="Peso"
            data={data.weight}
            text2="Kg"
          />
    
          </View>
        ) : (
          <Text>No data available.</Text>
        )
      )}
      </View>

      <NavigationBar />
    </View>
  );
};

export default Details;
