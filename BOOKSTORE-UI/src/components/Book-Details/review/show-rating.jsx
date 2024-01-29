const showRating = (rating) =>{
    switch (rating){
        case 1 :
            return <i className="bi bi-star-fill"></i>
        case 2 :
            return (
                <>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                </>
            )
        case 3 :
            return (
                <>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                </>
            )
        case 4 :
            return (
                <>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                </>
            )
        case 5 :
            return (
                <>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                   <i className="bi bi-star-fill"></i>
                </>
            )
    }
}

export default showRating;