import { DrawerContent } from "@/components/Drawer-content"
import { Drawer } from "expo-router/drawer"

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: "75%",

                },
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >

            <Drawer.Screen
                name="(tabs)"
                
            />
            <Drawer.Screen
                name="details"
               
            />
            <Drawer.Screen
                name="search"
            />
        </Drawer>
    )
}