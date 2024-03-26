export default function TableHeading() {
    return(
        <>
        <thead className="text-xs bg-slate-100 border-solid ">
          <tr className=" border-y-2  border-black">
            <th scope="col" className="px-6 py-3">
              COURIER PARTNER
            </th>
            <th scope="col" className="px-6 py-3">
              RATING
            </th>
            <th scope="col" className="px-6 py-3">
              EXPECTED PICKUP
            </th>
            <th scope="col" className="px-6 py-3">
              ESTIMATED DELIVERY
            </th>
            <th scope="col" className="px-6 py-3">
              CHARGEABLE WEIGHT
            </th>
            <th scope="col" className="px-6 py-3">
              CHARGES
            </th>
            <th scope="col" className="px-6 py-3">
              ACTIONS
            </th>
          </tr>
        </thead>
        </>
    )
}