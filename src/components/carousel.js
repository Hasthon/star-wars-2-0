

export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" style={{ height:"60vh", width:"100%" }}>
                    <div className="carousel-item active">
                        <img src={"img/imagen11.jpg"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" >
                        <img src={"img/img16.jpg"} className="d-block w-100" alt="..." /> 
                    </div>
                    <div className="carousel-item" >
                        <img src={"img/img17.jpg"} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}