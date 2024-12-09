import { NavigationBar } from "@/components/NavigationBar";
import { View, Text, Image} from "react-native";
import { getPetsById } from "@/functions/getPetById";
import { useState, useEffect } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import  Card from "@/components/Card";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";



export interface DataItem {
  id: number
  name: string
  years: string
  description: string
  race: string
  type: string
  weight: number
  image: string
}

type SearchParams = {
  id?: string; // O id pode vir como string
};

const Details: React.FC = () => {
  
  const { id } = useLocalSearchParams() as SearchParams

  const numericId = id ? parseInt(id, 10) : undefined;

  const [data, setData] = useState<DataItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)


  useEffect(() => {
    if (numericId) {
      setLoading(true);
      getPetsById(numericId, setData, setLoading, setError)
    }
  }, [numericId])

  
  useEffect(() => {
    if (error) {
      console.log("Erro ao buscar dados.")
    }
  }, [error])


  return (
    <View className="flex-1 bg-primary-400 px-4 items-center justify-center relative">
      <View className="w-full mt-10 mx-6 justify-between flex-row bg-primary-400">
        <Link href={"/(drawer)/(tabs)/home"}>
          <Feather name="arrow-left" size={32} color={colors.black} />
        </Link>
        <Link href={"/(drawer)/(tabs)/home"}>
          <Feather name="x" size={32} color={colors.black} />
        </Link>
      </View>
     
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

      <View className="flex-1 relative">
      <Image source={require("@/assets/imageFundo.png")} style={{width: 420, height: "100%"}} />
      
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data ? (
          <View className="w-screen absolute bottom-10 right-0 gap-2">
          <View className="flex-row gap-2">
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
          <View className="w-[92%] h-40 p-4 bg-black/40 rounded-3xl">
            <Text className="text-white font-bold mb-2 text-lg">Sobre</Text>
            <Text className="text-white/80 ">{data.description}</Text>
          </View>

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
