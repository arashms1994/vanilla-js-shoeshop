import El from "../utils/create-element"
import { GetProducts } from "../api/Products";

export function products(){
    return El({
        element:'div',
        children:[
            "All Products"
        ]
    })
}


export function productsBrand({data, params}){
    console.log("params",params)
    const brand = El({element:"div" ,children:[data.brand] })


    return El({
        element:'div',
        children:[
            brand
        ]
    })
}


export function productDetail({data}){
    const brand = El({element:"div" ,children:[data.brand] })
    const productId = El({element:"div" ,children:[data.id] })

    return El({
        element:'div',
        children:[
            brand,
            productId
        ]
    })
}