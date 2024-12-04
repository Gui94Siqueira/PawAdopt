import { Header } from "@/components/Header"
import { NavigationBar } from "@/components/NavigationBar"
import Section from "@/components/Section"
import { View, Text, Image, TouchableOpacity } from "react-native"
import Home from "./home"
import { FlatList } from "react-native-gesture-handler"
import { TYPES } from "@/utils/types"
import { useEffect, useState } from "react"
import { getPetsById } from "@/functions/getPetById"
import { DataItem } from "./details/[id]"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import CardAdoption from "@/components/CardAdoption"

export default function Favorites() {

    const [data, setData] = useState<DataItem | null>(null); 
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);


  useEffect(() => {
      setLoading(true); 
      getPetsById(1, setData, setLoading, setError);
  }, []); 


    return(
        <View className="flex-1 bg-primary-400 flex-col">
            <Header />

            <View className="flex-1 mx-4 my-4">
                <View className="w-full bg-white h-24 flex-row items-center rounded-full">
                    <Image 
                        source={require("@/assets/billy.jpg")} 
                        style={{width: 70, height: 70}}  
                        className="w-20 h-20 rounded-full mx-4"    
                    />
                    <View className="w-full mx-2 ">
                        <Text className="font-bold text-xl font-sans">Olá, Jhon Wick</Text>
                        <Text className="font-sans text-lg text-black/70">jhowWick@gmail.com</Text>
                    </View>
                </View>

                <Section 
                    title="Favoritos"
                    subTitle="Ver Mais"
                    action={() => <Home />}
                />

                <FlatList 
                    data={TYPES}
                    keyExtractor={(item) => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity className="mr-2">
                            <View>
                                <View className="w-44 h-full mb-4 bg-black rounded-3xl">
                                    <View className="w-full items-center flex-row justify-between">
                                        <Image 
                                            source={{ uri: data?.image}} 
                                            style={{width: 60, height: 60}}
                                            className="rounded-full m-4"
                                        />

                                        <Feather 
                                            name="more-vertical" 
                                            size={26} 
                                            color={colors.white}
                                            className="mr-2" 
                                        />

                                    </View>

                                    <Text className="text-white font-semibold text-base font-sans mx-4">{data?.name}</Text>
                                    <Text className="text-white/70 text-medium font-sans mx-4">{data?.race}</Text>    

                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    className="flex-1"
                />

                <Section 
                    title="Pontos de Adoção"
                    subTitle="Ver Mais"
                    action={() => <Home />}
                />

                <View>
                    <CardAdoption />
                </View>
            </View>


            <NavigationBar />
        </View>
    )
}