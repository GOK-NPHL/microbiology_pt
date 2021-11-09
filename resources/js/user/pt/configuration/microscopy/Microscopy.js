import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../config.css'

class Microscopy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.windowPeriodhandler = this.windowPeriodhandler.bind(this);
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

    windowPeriodhandler(value, name) {
        this.setState({
            windowPeriod: value
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
                            <input type="text" className="form-control" placeholder="gram stain reaction name" aria-label="gram stain reaction name" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-info"> Add Gram Stain Reaction</button>
                            </div>
                        </div>

                        <div className="card">
                            <ul style={{ "height": "120px", "overflow": "auto" }}>
                                <li className="congigItem">
                                    <span style={{ "float": "left" }}> 1</span>
                                    <span style={{ "float": "right", "marginRight": "6px" }}> x</span>
                                </li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
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
