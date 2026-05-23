// import { Productlist } from "../Features/Productlist/Productlist"
// import { Parent } from "../Utilities/Parent"

import React, { Suspense, lazy } from "react"
import { Loading } from "../Loader/Loading"

export const Products = () => {
    const Productlist = React.lazy(() => import("../Features/Productlist/Productlist"))
    return (
        <div className="products-page">
           

            <Suspense fallback={<center><Loading/></center>}>
                <Productlist />
            </Suspense>
        </div>
    )
}
