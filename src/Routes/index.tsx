
type RouteType = {
    element : any;
    path: string;
}

export const ROUTES = {
    HOME : "/",
}


export const routes:RouteType[] = [
    {
        element: <h1>hello</h1>,
        path:ROUTES.HOME
    },
]