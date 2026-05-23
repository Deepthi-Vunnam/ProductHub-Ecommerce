import { Child } from "./Child"
import { data } from "./data"


export const Parent = () => {
    return (
        <>
            <center>
                <h1>Our Products</h1>
                <div className="parent">
                    {
                        data.map((items)=>{
                            return(
                            <Child key={items.id} url={items.url} title={items.title} price={items.price}/>

                            )
                        })
                    }
                </div>
            </center>
        </>
    )
}