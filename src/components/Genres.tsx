import { useState } from "react";
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from "react-native";
import { TYPES } from "@/utils/types";
import { Badge } from "./Badge";

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
    const [selectedType, setSelectedType] = useState<string | null>(null);

    // Função para lidar com a seleção do tipo
    const handleSelectType = (type: string) => {
        setSelectedType(type);
        onSelectType(type); // Chama a função de callback passada na prop
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Procure pelos generos</Text>

            <FlatList
                data={TYPES}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectType(item.name)} style={styles.badgeContainer}>
                        <Badge
                            label={item.name}
                            variant={selectedType === item.name ? "default" : "secondary"}
                        />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.badgesList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginTop: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 16,
    },
    badgesList: {
        paddingHorizontal: 16, // Espaço nas laterais para dar um efeito de início e fim à rolagem
    },
    badgeContainer: {
        marginRight: 8,
    },
});