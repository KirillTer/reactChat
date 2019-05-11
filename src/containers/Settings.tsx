import React from 'react';
import { connect } from 'react-redux';

import {saveSettings, resetSettings} from '../store/actions'

const Settings = (saveSettings: any, resetSettings: (this: void) => void) => (
    <div className="container">
        <div className="row">
            <div className="border rounded-lg col-md-12">
                <form className="col-md-4 offset-md-4">
                    <div className="form-group">
                        <label>User name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label className="form-row">Interface color</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label">Light</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">Dark</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-row">Clock display</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label">12 Hours</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">24 Hours</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-row">Send message on CTRL+enter</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label">On</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">Off</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Language</label>
                        <select id="inputState" className="form-control">
                            <option selected>English</option>
                            <option>German</option>
                        </select>
                    </div>
                </form>
            </div>
            <button className="btn btn-primary col-md-4 offset-md-4" onClick={() => resetSettings()}>Reset to default</button>
        </div>
    </div>
)

export default connect((state) => {
    return ({

    });
}, {
    saveSettings,
    resetSettings
})(Settings)