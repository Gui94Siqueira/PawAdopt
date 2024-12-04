import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { View, ScrollView, Text, Image } from "react-native";

import { CustomOptions } from "@/types/navigation"
import { DrawerButton } from "@/components/Drawer-button"

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
    return (
        <View className="flex-1 bg-primary-400 overflow-hidden">
            <View className="w-full h-36 mt-4 border-b pb-6 border-black/30 justify-center items-center">
                <Image source={require("@/assets/Pawadopt.png")}  className="w-fix " resizeMode="contain" />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 42 }}
            >
                <View className="mt-2">
                    {drawerProps.state.routes.map((route, index) => {
                        const isFocused = drawerProps.state.index === index
                        const options = drawerProps.descriptors[route.key]
                            .options as CustomOptions

                        if (options.title === undefined) {
                            return
                        }

                        const onPress = () => {
                            const event = drawerProps.navigation.emit({
                                type: "drawerItemPress",
                                canPreventDefault: true,
                                target: route.key,
                            })

                            if (!isFocused && !event.defaultPrevented) {
                                drawerProps.navigation.navigate(route.name, route.params)
                            }
                        }

                        return (
                            <View key={route.key} className="w-full">
                                {options.sectionTitle && (
                                    <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                                        {options.sectionTitle}
                                    </Text>
                                )}

                                <DrawerButton
                                    title={options.title}
                                    isFocused={isFocused}
                                    iconName={options.iconName}
                                    isDivider={options.isDivider}
                                    notifications={options.notifications}
                                    onPress={onPress}
                                />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}