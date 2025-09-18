

// interface Product {
//     productName: string;
//     batch: string;
//     stockLevel: number;
//     expiryDate: string;
//     status: string;
// }

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

export { productHeadings, products };