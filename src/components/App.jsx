/* eslint-disable react/prop-types */
const PRODUCTS = [
    {category: "fruits", price: "$1", stocked: true, name:"Apple"},
    {category: "fruits", price: "$1", stocked: true, name:"Dragonfruit"},
    {category: "fruits", price: "$2", stocked: false, name:"PAssionfruit"},
    {category: "vegetables", price: "$2", stocked: true, name:"Spinach"},
    {category: "vegetables", price: "$4", stocked: false, name:"Pumpkin"},
    {category: "vegetables", price: "$1", stocked: true, name:"Peas"}
];

export default function App(){
    return <FilterableProductTable products={PRODUCTS} />;
}


function FilterableProductTable( {products }){
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
}

function SearchBar(){
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

function ProductTable({ products }){
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow 
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan='2'>
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }){
    const name = product.stocked ? product.name :
        <span style={{color:'red'}}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}