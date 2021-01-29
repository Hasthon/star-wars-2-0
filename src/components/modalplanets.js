import { useContext } from "react";
import { Context } from "../store/appContext";


export const ModalPlanets = ({ index, planets }) => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div class="modal fade" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{planets.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <li className="list-group-item">Orbital period : {planets.orbital_period}</li>
                            <li className="list-group-item">Diameter : {planets.diameter}</li>
                            <li className="list-group-item">Climate : {planets.climate}</li>
                            <li className="list-group-item">Gravity: {planets.gravity}</li>
                            <li className="list-group-item ">Terrain :{planets.terrain}</li>
                            <li className="list-group-item">Surface water :{planets.surface_water}</li>
                            <li className="list-group-item">Population  :{planets.population}</li>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}