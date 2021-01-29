import { useContext } from "react";
import { Context } from "../store/appContext";
import {ModalPlanets} from "./modalplanets"


export const Planetas = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
          <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <div className="btn btn-info btn-sm btn btn-dark" id="prev" onClick={() => {

                        actions.llamarPlanetas(store.planets.previous)
                    }}>
                        prev
                </div>
                    <div className="btn btn-info btn-sm btn btn-dark" id="next" onClick={() => {

                        actions.llamarPlanetas(store.planets.next)
                    }}>
                        next
                </div>
                </div>
            </div>
            <div className="row" >
                {
                    !!store.planets &&
                    store.planets.results.map((valor, i) => {
                        return (
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${(i + 1) + store.c}.jpg`} style={{ height: "100%", width: "100%" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{valor.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button type="button" class="btn btn-dark" data-toggle="modal" data-target={"#exampleModalCenter" + i}>
                                        Learn more</button>&nbsp;&nbsp;
                                        <ModalPlanets index={i} planets={valor}/>
                                        <button type="button" className="btn btn-dark" onClick={() => {
                                        actions.addFavorite(valor.name)
                                    }}>
                                    <i className = {store.favorite.includes(valor.name) ? "color fas fa-heart" : "far fa-heart"} 
                                        
                                        ></i></button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}


