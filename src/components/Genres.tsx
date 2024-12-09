import { useState } from "react";
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from "react-native";
import { TYPES } from "@/utils/types";
import { Badge } from "./Badge";
import { DataItem } from "@/app/(drawer)/(tabs)/details/[id]";

// Define o tipo para cada objeto em TYPES
interface SkillType {
    name: string;
}

// Define as props do componente
interface Props {
    onSelectType: (type: string) => void;
}

export function Genres({ onSelectType }: Props) {
    // Estado para armazenar o tipo selecionado
    const [selectedType, setSelectedType] = useState<String>();

    // Função para lidar com a seleção do tipo
    const handleSelectType = (type: string) => {
        setSelectedType(type);
        onSelectType(type); // Chama a função de callback passada na prop
    };

    return (
        <View className="ml-6">
            <Text className="mb-6 font-semibold text-gray-500">Escolha seu novo pet por categoria</Text>

            <FlatList
                data={TYPES}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectType(item.name)} className="mr-2">
                        <Badge
                            label={item.name}
                            variant={selectedType === item.name ? "default" : "secondary"}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

