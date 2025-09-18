import { salesHeadings, sales } from "../services/sales"

function TotalSalesTable({ className }: { className?: string }) {
    return (
        <div className={`col-span-8 sales p-4 m-4 ${className}`}>
            {/* <h4>Product Inventory</h4> */}
            <table className="w-full text-left table-auto md:table-fixed border-separate">
                <thead>
                    <tr>
                        {salesHeadings.map((heading) => {
                            return <th className="text-base pr-4 py-2">{heading.toUpperCase()}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {sales.map((product) => {
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

export default TotalSalesTable;