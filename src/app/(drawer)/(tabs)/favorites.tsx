import { Header } from "@/components/Header"
import { NavigationBar } from "@/components/NavigationBar"
import Section from "@/components/Section"
import { View, Text, Image } from "react-native"
import Home from "./home"
import { FlatList } from "react-native-gesture-handler"
import { useEffect, useState } from "react"
import { getPets } from "@/functions/getPets"
import { DataItem } from "./details/[id]"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import CardAdoption from "@/components/CardAdoption"
import { Link } from "expo-router"

export default function Favorites() {

    const [data, setData] = useState<DataItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        getPets(setData, setLoading, setError);
    }, []);


    return (
        <View className="flex-1 bg-primary-400 flex-col">
            <Header />

            <View className="flex-1 mx-4 my-4">
                <View className="w-full bg-white h-24 flex-row items-center rounded-full">
                    <Image
                        source={require("@/assets/billy.jpg")}
                        style={{ width: 70, height: 70 }}
                        className="w-20 h-20 rounded-full mx-2"
                    />
                    <View className="w-full mx-2">
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
                    data={data}
                    keyExtractor={(item) => item.name}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    renderItem={({ item }) => (

                        <View className="mr-2">
                            <View className="w-44 h-full mb-4 bg-black rounded-3xl">
                                <View className="w-full items-center flex-row justify-between">
                                    <Image
                                        source={{ uri: item?.image }}
                                        style={{ width: 60, height: 60 }}
                                        className="rounded-full m-4"
                                    />
                                    <Link href={`/(drawer)/(tabs)/details/${item.id}`}>
                                    
                                    <Feather
                                        name="more-vertical"
                                        size={26}
                                        color={colors.white}
                                        className="mr-2"
                                    />
                                    </Link>

                                </View>

                                <Text className="text-white font-semibold text-base font-sans mx-4">{item?.name}</Text>
                                <Text className="text-white/70 text-medium font-sans mx-4">{item?.race}</Text>

                            </View>
                        </View>

                    )}
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