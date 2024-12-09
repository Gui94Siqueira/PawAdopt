import { colors } from "@/styles/colors";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

export default function CardAdoption() {
    return(
        <View className="w-full h-48 bg-black/40 rounded-3xl p-4">
            <View className="flex-row items-center">
                <Image 
                    source={require("@/assets/billy.jpg")} 
                    style={{ width:50, height:50}}
                    className="rounded-full mr-4"
                />
                <View className="flex-1">
                    <Text className="text-white font-bold text-lg">Nome da Instituição</Text>
                    <Text className="text-white">Rua Tito - Lapa São Paulo</Text>
                </View>

                <Feather name="more-vertical" size={26} color={colors.white} />

            </View>

            <View>
                <Text className="text-white/80 mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Quae fuga expedita iure blanditiis
                    magnam earum libero reprehenderit et, 
                    distinctio nihil laboriosam doloremque voluptates sequi non tempora quo. 
                    Officiis, nostrum dolor.
                </Text>
            </View>

        </View>
    )
}