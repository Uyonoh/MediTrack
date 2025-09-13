
function TopSales() {
    const medications: string[] = [
        "Ibuprofen", "Astrovastatin", "Cetirizine", "Omeprazole", "Amoxicillin",
        "Metformin", "Paracetamol"]
    return (
        <div className="col-span-4 top-sales p-4 m-4 flex flex-col gap-2 border-b border-l">
            <h4 className="">Top-selling Medications</h4>
            {medications.map((medication: string) => {
            return <p>{medication}</p>}
            )}
        </div>
    )
}

export default TopSales;