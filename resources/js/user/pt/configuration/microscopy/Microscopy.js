import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SaveMicroscopyConfig } from '../../../../components/utils/Helpers';
import '../config.css'

class Microscopy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gramStainItems: [],
            gramStainShouldIncludeOtherOption: false,
            message: ''
        }
        this.gramStainReactionHanler = this.gramStainReactionHanler.bind(this);
    }

    componentDidMount() {
        (async () => {

            // let response = await GetAllFcdrrSettings();
            // let windowPeriod = 5;

            // if (response.status == 500) {
            //     this.setState({
            //         message: response.data.Message,
            //     });
            //     $('#settingModal').modal('toggle');
            // } else {
            //     response.map((setting) => {
            //         if (setting.name == 'window_period') {
            //             windowPeriod = setting.value
            //         }
            //     })
            //     this.setState({
            //         windowPeriod: windowPeriod
            //     })
            // }

        })();
    }

    gramStainReactionHanler() {

        let gramStain = document.getElementById("gram-stain-reaction").value;

        if (gramStain == '' || gramStain == null || gramStain == undefined) {
            this.setState({
                message: "Gram stain reaction name cannot be empty",
            });
            $('#microscopyMessageModal').modal('toggle');

            return;
        }

        let gramStainItems = this.state.gramStainItems;

        (async () => {

            let response = await SaveMicroscopyConfig(config);

            if (response.status == 500) {
                this.setState({
                    message: response.data.Message,
                });
                $('#settingModal').modal('toggle');
            }

        })();


        let id = uuidv4();
        let item = <li key={id} className="congigItem">
            <span style={{ "float": "left" }}> {gramStain}</span>
            <span data-id={gramStainItems.length} className="pointerCursor"
                onClick={(event) => {
                    let items = this.state.gramStainItems;
                    delete items[event.target.dataset.id]
                    this.setState({
                        gramStainItems: items
                    });
                }}
                style={{ "float": "right", "marginRight": "6px" }}
                data-toggle="tooltip" data-placement="bottom" title="Delete item"
            > &#10006; </span>
        </li>;
        gramStainItems.push(item);

        this.setState({
            gramStainItems: gramStainItems
        });


    }

    render() {


        return (
            <React.Fragment>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h6>Gram Stain Reaction</h6>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="gram stain reaction name"
                                aria-label="gram stain reaction name"
                                id="gram-stain-reaction"
                                aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button type="button"
                                    onClick={() => this.gramStainReactionHanler()}
                                    className="btn btn-info"> Add Gram Stain Reaction</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="input-group" style={{ "marginBottom": "15px" }}>
                                <input className="form-control border-end-0 border rounded-pill"
                                    type="text" placeholder="search" id="example-search-input" />
                                <span className="input-group-append">
                                    <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                            <br />
                            <ul className="itemNamesListing">
                                {
                                    this.state.gramStainItems.map((item) => {
                                        if (item) return item;
                                    })
                                }
                                {/* <li className="congigItem">
                                    <span style={{ "float": "left" }}> 1</span>
                                    <span className="pointerCursor" style={{ "float": "right", "marginRight": "6px" }}> x</span>
                                </li> */}
                            </ul>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" onChange={(event) => {
                                this.setState({
                                    gramStainShouldIncludeOtherOption: !this.state.gramStainShouldIncludeOtherOption
                                })
                            }

                            }
                                id="flexCheckChecked" checked={this.state.gramStainShouldIncludeOtherOption} />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Should include  other field option
                            </label>
                        </div>

                    </li>

                    <li className="list-group-item">
                        <h6>Gram Stain Morphology</h6>
                        <label htmlFor="window_period">Length</label>

                    </li>

                </ul>

                {/* Message modal */}
                <div className="modal fade" id="microscopyMessageModal" tabIndex="-1" role="dialog" aria-labelledby="microscopyMessageModalTitle" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="microscopyMessageModalTitle">Notice!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="microscopyMessageModal" className="modal-body">
                                {
                                    this.state.message ? this.state.message : ''
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div >
                {/* End Message modal */}

            </React.Fragment>
        );
    }

}

export default Microscopy;
