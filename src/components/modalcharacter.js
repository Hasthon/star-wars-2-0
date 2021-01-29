
export const Modal = ({ index, character }) => {


    return (
        <>
            <div class="modal fade" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{character.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <li className="list-group-item">Created : {character.created}</li>
                            <li className="list-group-item">Edited : {character.edited}</li>
                            <li className="list-group-item">Hair color : {character.hair_color}</li>
                            <li className="list-group-item">Skin Color : {character.skin_color}</li>
                            <li className="list-group-item ">BIRTH :{character.birth_year}</li>
                            <li className="list-group-item">EYE COLOR :{character.eye_color}</li>
                            <li className="list-group-item">HEIGHT  :{character.height}</li>
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