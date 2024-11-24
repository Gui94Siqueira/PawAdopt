import { DrawerContent } from "@/components/Drawer-content"
import { CustomOptions } from "@/types/navigation"
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
                name="(tabs)/index"
                options={
                    {
                      title: "Home",
                      iconName: "home",
                      isDivider: false
                    } as CustomOptions
                  }
                
            />
            <Drawer.Screen
                name="(tabs)/details"
                options={
                    {
                      title: "Detalhes",
                      iconName: "info",
                      isDivider: false
                    } as CustomOptions
                  }
               
            />
            <Drawer.Screen
                name="(tabs)/user"
                options={
                    {
                      title: "Perfil",
                      iconName: "account-circle",
                      isDivider: false
                    } as CustomOptions
                  }
            />

            <Drawer.Screen
                name="(tabs)/favorites"
                options={
                    {
                      title: "Favoritos",
                      iconName: "favorite",
                      isDivider: false
                    } as CustomOptions
                  }
            />

            <Drawer.Screen
                name="(tabs)/search"
                options={
                    {
                      title: "Buscar",
                      iconName: "search",
                      isDivider: false
                    } as CustomOptions
                  }
            />
        </Drawer>
    )
}