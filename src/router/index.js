import {lazy}  from "react";
export default [
    { 
        path:'/',
        element:lazy(()=>import('pages/normal'))
    },
    { 
        path:'ddd',
        element:lazy(()=>import('pages/ddd'))
    }
]
