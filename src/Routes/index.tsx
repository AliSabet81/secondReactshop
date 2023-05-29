import HomeScreen from "../screens/home";
export type RouteChildren = {
    name : string,
    path  : string,
    element :React.ReactElement
}
export type RouteType = {
    element : React.ReactElement;
    path: string;
    variant ?:string,
    name : string,
    children ?: RouteChildren[] | undefined
}

export const ROUTES = {
    HOME : "/",
    SHOPALL : "/ShopAll",
    Flower : "/Flower",
    CheapWeed : "/CheapWeed",
    Indica : "/Indica",
    Hybrica : "/Hybrica",
    Sativa : "/Sativa",
    AAAAWeed : "/AAAAWeed",
    ShakeTrim : "/ShakeTrim",

    Edibles : "/Edibles",
    Concentrates : "/Concentrates",
    Concentrates2 : "/Concentrates2",
    Mushrooms : "/Mushrooms",
    Promotions : "/Promotions1",
    Promotions2 : "/Promotions2",
    Promotions3 : "/Promotions3",
    Promotions4 : "/Promotions4",
    Support : "/Support",
    Rewards : "/Rewards",
    Blog : "/Blog",
    Track : "/Track",
    Refunds : "/Refunds",
    ShippingFaq : "ShippingFaq"
}

export const menuRoutes : RouteType[]=[
    {
        element: <HomeScreen/>,
        path:ROUTES.HOME,
        name:"home"
    },
    {
        element:<h1>hello</h1>,
        path : ROUTES.Track,
        name : "Track Your Order"
    },
    {
        element:<h1>hello</h1>,
        path : ROUTES.SHOPALL,
        variant : "nav",
        name : "SHOPALL"
    },
    {
        element:<h1>hello</h1>,
        path : ROUTES.Flower,
        variant : "nav",
        name : "Flower",
        children : [
            {
                name : "Cheap Weed",
                path : ROUTES.CheapWeed,
                element : <h1>hello</h1>
            },
            {
                name : "Indica",
                path : ROUTES.Indica,
                element : <h1>hello</h1>
            },
            {
                name : "Hybrica",
                path : ROUTES.Hybrica,
                element : <h1>hello</h1>
            },{
                name : "Sativa",
                path : ROUTES.Sativa,
                element : <h1>hello</h1>
            },
            {
                name : "AAAA Weed",
                path : ROUTES.AAAAWeed,
                element : <h1>hello</h1>
            },{
                name : "Shake/Trim",
                path : ROUTES.ShakeTrim,
                element : <h1>hello</h1>
            },
        ]

    },{
        element:<h1>hello</h1>,
        path : ROUTES.Edibles,
        variant : "nav",
        name : "Edibles"
    },{
        element:<h1>hello</h1>,
        path : ROUTES.Concentrates,
        variant : "nav",
        name : "Concentrates",
        children : [
            {
                name : "Concentratessub",
                path : ROUTES.Concentrates,
                element : <h1>hello</h1>
            },
            {
                name : "Concentratessub",
                path : ROUTES.Concentrates2,
                element : <h1>hello</h1>
            },
        ]
    },{
        element:<h1>hello</h1>,
        path : ROUTES.Mushrooms,
        variant : "nav",
        name : "Mushrooms"
    },{
        element:<h1>hello</h1>,
        path : ROUTES.Promotions,
        variant : "nav",
        name : "Promotions/Bundles",
        children : [
            {
                name : "Promotionssub",
                path : ROUTES.Promotions,
                element : <h1>hello</h1>
            },
            {
                name : "Promotionssub",
                path : ROUTES.Promotions2,
                element : <h1>hello</h1>
            },{
                name : "Promotionssub",
                path : ROUTES.Promotions3,
                element : <h1>hello</h1>
            },
            {
                name : "Promotionssub",
                path : ROUTES.Promotions4,
                element : <h1>hello</h1>
            },
        ]
    },{
        element:<h1>hello</h1>,
        path : ROUTES.Support,
        variant : "nav",
        name : "Support",
        children : [
            {
                name : "Supportsub",
                path : ROUTES.Support,
                element : <h1>hello</h1>
            }
        ]
    },{
        element:<h1>hello</h1>,
        path : ROUTES.Rewards,
        variant : "nav",
        name : "Rewards"
    },
    {
        element:<h1>hello</h1>,
        path : ROUTES.Blog,
        variant : "nav",
        name : "Blog"
    },
    {
        element:<h1>hello</h1>,
        path : ROUTES.Refunds,
        name : "Refunds"
    },{
        element:<h1>hello</h1>,
        path : ROUTES.ShippingFaq,
        name : "Shipping Faq"
    },
]

export const submenuRoutes : RouteType[]=[
    {
        name : "Cheap Weed",
        path : ROUTES.CheapWeed,
        element : <h1>hello</h1>
    },
    {
        name : "Indica",
        path : ROUTES.Indica,
        element : <h1>hello</h1>
    },
    {
        name : "Hybrica",
        path : ROUTES.Hybrica,
        element : <h1>hello</h1>
    },{
        name : "Sativa",
        path : ROUTES.Sativa,
        element : <h1>hello</h1>
    },
    {
        name : "AAAA Weed",
        path : ROUTES.AAAAWeed,
        element : <h1>hello</h1>
    },{
        name : "Shake/Trim",
        path : ROUTES.ShakeTrim,
        element : <h1>hello</h1>
    },
]