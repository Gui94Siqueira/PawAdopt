import { useEffect, useState } from "react";
import { Genres } from "@/components/Genres";
import { Header } from "@/components/Header";
import { CardStack } from "@/components/CardStack";

import { StatusBar, Text, View } from "react-native";
import { NavigationBar } from "@/components/NavigationBar";
import { DataItem } from "./details/[id]";
import { getPets } from "@/functions/getPets";


interface GenresProps {
    onSelectType: (type: string) => void;
}

export default function Home() {

    const [data, setData] = useState<DataItem[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        getPets(setData, setLoading, setError);
    }, []);

    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleSelectType = (type: string) => {
        setSelectedType(type);
    };

    const filteredPets = selectedType ? data?.filter((pet: DataItem) => pet.type === selectedType) : data;

    return (
        <>
            <View className="flex-1 bg-primary-400 flex-col">
                <Header />
                <Text className="w-full mx-6 mt-6 mb-2 font-bold text-4xl">Discovery</Text>

                {/* Passa a função de filtro para o componente Genres */}
                <Genres onSelectType={handleSelectType} />

                {/* Passa a lista filtrada de pets para o CardStack */}
                <CardStack />

                <NavigationBar />
            </View>
            <StatusBar />
        </>
    );
}