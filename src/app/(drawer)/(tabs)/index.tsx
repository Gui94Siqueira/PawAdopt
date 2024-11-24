import { useState } from "react";
import { Genres } from "@/components/Genres";
import { Header } from "@/components/Header";
import { CardStack } from "@/components/CardStack";
import { PETS } from "@/utils/pets";
import { StatusBar, Text, View } from "react-native";
import { NavigationBar } from "@/components/NavigationBar";

// Define o tipo de cada objeto pet
interface Pet {
    id: number; // Incluído id para o tipo Pet
    name: string; // Incluído name para o tipo Pet
    type: string;
    images: any[]; // Alterado para images como array
}

// Define as props esperadas pelo componente Genres
interface GenresProps {
    onSelectType: (type: string) => void;
}

export default function Home() {
    // Estado para armazenar o tipo selecionado
    const [selectedType, setSelectedType] = useState<string | null>(null);

    // Função para atualizar o tipo selecionado
    const handleSelectType = (type: string) => {
        setSelectedType(type);
    };

    // Filtra a lista de pets com base no tipo selecionado
    const filteredPets: Pet[] = selectedType ? PETS.filter((pet: Pet) => pet.type === selectedType) : PETS;

    return (
        <>
            <View className="w-full flex-1 bg-primary-400 flex-col justify-between">
                <Header />
                <Text className="mx-6 mt-6 mb-2 font-bold text-4xl">Discovery</Text>

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