import HomeScreen from "@/screens/home/home";
import { NotFoundScreen } from "@/screens/not-found/not-found-screen";
import SearchScreen from "@/screens/search/search";
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
    {
        component: SearchScreen,
        routerName: "Buscar",
        routerIcon: "card-search-outline"
    },
    {
        component: defaultScreen,
        routerName: "Nova Review",
        routerIcon: "plus-circle-outline"
    },
    {
        component: defaultScreen,
        routerName: "Favoritos",
        routerIcon: "cards-heart-outline"
    },
    {
        component: defaultScreen,
        routerName: "Conta",
        routerIcon: "account"
    },
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