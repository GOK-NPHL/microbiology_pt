import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import Pagination from "react-js-pagination";
import { FetchShipments } from '../../../components/utils/Helpers';


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowPeriod: 0
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
                <div className="row">
                    {/* Settings side panel */}
                    <div className="col-sm-4">
                        <div className="card" style={{ "width": "18rem" }}>
                            <div className="card-header">
                                PT Settings Menu
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="#">Gram Stain</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Identification Tests</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Serotyping / Serogrouping </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Final Organism Detection </a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Antimicrobial Susceptibility Testing </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Settings body */}
                    <div className="col-sm-8">

                        {/* Gram stain settings */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h6>Gram Stain Reaction</h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>
                                <li className="list-group-item">
                                    <h6>Gram Stain Morphology</h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>

                            </ul>
                        </div>

                        {/* Indentification tests settings */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h6>Basic Biochemical Reaction </h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>
                                <li className="list-group-item">
                                    <h6>Final Identification Methods</h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>

                            </ul>
                        </div>

                        {/* Serotyping settings */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h6>Serotyping / Serogrouping  </h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>


                            </ul>
                        </div>

                        {/* Final Organism Detection */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h6>Final Organism Detection  </h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>

                            </ul>
                        </div>

                        {/* Antimicrobial Susceptibility Testing */}
                        <div className="card">

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <h6>Disk Diffusion Method </h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>

                                <li className="list-group-item">
                                    <h6>MIC Method  </h6>
                                    <label htmlFor="window_period">Length</label>
                                    <input type="number" onChange={
                                        (event) => this.windowPeriodhandler(event.target.value, "window_period")
                                    }
                                        value={this.state.windowPeriod} className="form-control" id="window_period" required />
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                {/* Message modal */}
                <div className="modal fade" id="settingModal" tabIndex="-1" role="dialog" aria-labelledby="settingModalTitle" aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="settingModalTitle">Notice!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
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

export default Index;

if (document.getElementById('configuration_page')) {
    ReactDOM.render(<Index />, document.getElementById('configuration_page'));
}