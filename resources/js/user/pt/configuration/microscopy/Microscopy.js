import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../config.css'

class Microscopy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gramStainItems: []
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
        let gramStainItems = this.state.gramStainItems;
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

        (async () => {

            // let response = await SaveFcdrrSetting(value, name);

            // if (response.status == 500) {
            //     this.setState({
            //         message: response.data.Message,
            //     });
            //     $('#settingModal').modal('toggle');
            // }

        })();
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
                    </li>

                    <li className="list-group-item">
                        <h6>Gram Stain Morphology</h6>
                        <label htmlFor="window_period">Length</label>

                    </li>

                </ul>

            </React.Fragment>
        );
    }

}

export default Microscopy;
