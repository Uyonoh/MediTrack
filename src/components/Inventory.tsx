
// interface Product {
//     productName: string;
//     batch: string;
//     stockLevel: number;
//     expiryDate: string;
//     status: string;
// }

function Inventory() {
    const productHeadings: string[] = [
        "product name", "batch", "stock level",
        "expiry date", "status"
    ]

    const products: string[][] = [
        ["Paracetamol 500mg", "B2345", "1500", "2026-12-32", "Good"],
        ["Ibuprofen 200mg", "C2442", "800", "2026-12-32", "Good"],
        ["Amoxicillin 250mg", "D4301", "50","2026-12-32","Low Stock",],
        ["Cetirizine 10mg", "E5520", "200", "2026-12-32", "Expiring Soon",],
        ["Omeprazole 20mg", "F0266", "1000", "2026-12-32", "Good",]
    ]

    return (
        <div className="col-span-8 inventory p-4 m-4">
            <h4>Product Inventory</h4>
            <table className="w-full text-left table-auto md:table-fixed border-separate">
                <thead>
                    <tr>
                        {productHeadings.map((heading) => {
                            return <th className="text-base pr-4 py-2">{heading.toUpperCase()}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr>
                                {product.map((data) => {
                                    return (
                                        <td className="border-b pr-4 py-2">{data}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Inventory;