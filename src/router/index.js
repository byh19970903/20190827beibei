import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Xiebao,
    Muying,
    Nvzhuang,
    Meizhuang
} from "@pages"

export const tabBarRoute = [
    {
        path:"/jingxuan",
        component:Home,
        meta:{
            flag:true
        },
        name:"精选",
        icon:"\ue628"
    },
    {
        path:"/baihuo",
        component:Find,
        meta:{
            flag:true
        },
        name:"百货",
        icon:"\ue663"
    },
    {
        path:"/shipin",
        component:Order,
        meta:{
            flag:true
        },
        name:"食品",
        icon:"\ue737"
    },
    {
        path:"/tongzhuang",
        component:Mine,
        meta:{
            flag:true,
           
        },
        name:"童装",
        icon:"\ue617"
    },
    {
        path:"/muying",
        component:Muying,
        meta:{
            flag:true,
            
        },
        name:"母婴",
        icon:"\ue617"
    },
    {
        path:"/nvzhuang",
        component:Nvzhuang,
        meta:{
            flag:true,
            
        },
        name:"女装",
        icon:"\ue617"
    },
    {
        path:"/meizhuang",
        component:Meizhuang,
        meta:{
            flag:true,
            
        },
        name:"美妆",
        icon:"\ue617"
    },
    {
        path:"/xiebao",
        component:Xiebao,
        meta:{
            flag:true,
         
        },
        name:"鞋包",
        icon:"\ue617"
    }


]

export const noTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:true
        },
        name:"登陆",
       
    },
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"精选",
       
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)