import FilterableProductTable from "./FilterableProductTable";

const PRODUCTS = [
    {category: "fruits", price: "$1", stocked: true, name:"Apple"},
    {category: "fruits", price: "$1", stocked: true, name:"Dragonfruit"},
    {category: "fruits", price: "$2", stocked: false, name:"Passionfruit"},
    {category: "vegetables", price: "$2", stocked: true, name:"Spinach"},
    {category: "vegetables", price: "$4", stocked: false, name:"Pumpkin"},
    {category: "vegetables", price: "$1", stocked: true, name:"Peas"}
];

export default function App(){
    return <FilterableProductTable products={PRODUCTS} />;
}
