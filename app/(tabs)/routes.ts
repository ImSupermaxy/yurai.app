import HomeScreen from "@/screens/home/home";
import { NotFoundScreen } from "@/screens/not-found/not-found-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface AppRoutesMenuModel {
    component?: () => React.JSX.Element
    routerName: string
    routerIcon: keyof typeof MaterialCommunityIcons.glyphMap,
    routerIconDescription?: string
}

const defaultScreen = NotFoundScreen;

const appRoutes: AppRoutesMenuModel[] = [
    {
        component: HomeScreen,
        routerName: "Início",
        routerIcon: "home"
    },
    // {
    //     component: HomeScreen,
    //     routerName: "HomePage",
    //     routerIcon: "home"
    // },
    {
        component: defaultScreen,
        routerName: "Salvos / Favoritos??",
        routerIcon: "bookmark-outline"
    },
    {
        component: defaultScreen,
        routerName: "account-menu",
        routerIcon: "account-circle"
    },
    // {
    //     component: defaultScreen,
    //     routerName: "config",
    //     routerIcon: "settings-helper"
    // },
];

export function GetRoutes(): AppRoutesMenuModel[] {
    const appRoutesMapped = appRoutes.map(a => {
        if (a.routerIconDescription === undefined)
            a.routerIconDescription = a.routerName;
        if (a.component === undefined)
            a.component = defaultScreen;
        return a;
    });

    return appRoutesMapped;
}