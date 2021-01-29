

export const ModalNaves = ({ index, naves }) => {
   

    return (
        <>
            <div class="modal fade" id={"exampleModalCenter" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{naves.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <li className="list-group-item">Model : {naves.model}</li>
                            <li className="list-group-item">manufacturer : {naves.manufacturer}</li>
                            <li className="list-group-item">length : {naves.length}</li>
                            <li className="list-group-item">Atmosphering speed : {naves.max_atmosphering_speed}</li>
                            <li className="list-group-item ">passengers :{naves.passengers}</li>
                            <li className="list-group-item">Cargo cargo_capacity :{naves.cargo_capacity}</li>
                            <li className="list-group-item">MGLT  :{naves.MGLT}</li>
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