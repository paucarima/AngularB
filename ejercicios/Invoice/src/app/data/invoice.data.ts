import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice={
    id:"001",
    company:{
        ruc:"1792285747001",
        name:"Clear Minds Consultors",
        direccion:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57",
        },
    },
    customer:{
        id:"1714646123",
        name:"Paola",
        surname:"Nathalyas",
        address:{
            city:"Quito",
            principalStreet:"Juan Pablo Sanz",
            secondaryStreet:"Iñaquito",
            code:"N-57",
        }
    },
    items:[
        {
            id:100,
            product:{
                id:"500",
                name:"Papas  fritas",
                price:0.50,
                description:"Las papas más sabrosas",
                category:{
                    id:1,
                    name:"Papitas",
                }
            },
            quantity: 23,
        },

        {
            id:101, 
            product:{
                id:"5500",
                name:"Doritos",
                price:0.50,
                description:"Las doritos más sabrosas",
                category:{
                    id:2,
                    name:"Doritos",
                }
            },
            quantity: 25,
        },

        {
            id:102,
            product:{
                id:"580",
                name:"Kachitos",
                price:0.30,
                description:"Cachos más sabrosas",
                category:{
                    id:3,
                    name:"Cachitos",
                }
            },
            quantity: 2,
        },
    ],
}