import react from 'react'

export default function ProductDetails(){
    const params=useParams();
    return(
        <div>
            ProductDetails {params.id}
        </div>
    )
}