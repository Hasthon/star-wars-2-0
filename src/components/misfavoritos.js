import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ReactPlayer from 'react-player'


export const Misfavoritos = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="list-group">
                    <div className="list-group-item" id="favorito">Favorites<span className="float-right">{store.favorite.length}</span></div>
                    {
                        !!store.favorite.length !== 0 &&
                        store.favorite.map((valor, index) => {
                            return <a key={index} className="list-group-item" id="favorito2">{valor}<i onClick={()=> actions.deleteFavorite(valor)}className="fa fa-trash-alt" style={{float:"right"}}></i></a>
                        })
                    }
                </div>
            </div>

            <div className="card-body1 col-md-4" style={{ textAlign: "center" }}>
                <div className="video2" style={{ height: "45vh", width: "80vh" }}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=CBnbrpt_kj0&ab_channel=StarWarsExplained'
                        className='react-player'
                        playing
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        </div>
    )

};

