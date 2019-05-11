import React from 'react';
import { connect } from 'react-redux';

import {saveSettingsAction, resetSettingsAction} from '../store/actions'
import {getSettingsSelector} from '../store/selectors'

const Settings = ({settings, saveSettingsAction, resetSettingsAction}: any) => {
    const updateForm = (event: any) => {
        event.persist()
        console.log('event', event.target.id)
        const obj: {[key: string]: any} = {};
        obj[event.target.id] = event.target.value;
        saveSettingsAction(obj);
    }
    return (
    <div className="container">
        <div className="row">
            <div className="border rounded-lg col-md-12">
                <form className="col-md-4 offset-md-4" onChange={(event) => updateForm(event)}>
                    <div className="form-group">
                        <label>User name</label>
                        <input type="text" className="form-control" id="username" value={settings.username} placeholder="Enter name" />
                    </div>
                </form>
                <form className="col-md-4 offset-md-4" onChange={(event) => updateForm(event)}>
                    <div className="form-group">
                        <label className="form-row">Interface color</label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="interfacecolor"
                                value="white"
                                checked={settings.interfacecolor === 'white'} />
                            <label className="form-check-label">Light</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="interfacecolor"
                                value="black"
                                checked={settings.interfacecolor === 'black'} />
                                <label className="form-check-label">Dark</label>
                        </div>
                    </div>
                </form>
                <form className="col-md-4 offset-md-4" onChange={(event) => updateForm(event)}>
                    <div className="form-group">
                        <label className="form-row">Clock display</label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="clockdisplay"
                                value="12"
                                checked={settings.clockdisplay === '12'} />
                                <label className="form-check-label">12 Hours</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="clockdisplay"
                                value="24"
                                checked={settings.clockdisplay === '24'} />
                                <label className="form-check-label">24 Hours</label>
                        </div>
                    </div>
                </form>
                <form className="col-md-4 offset-md-4" onChange={(event) => updateForm(event)}>
                    <div className="form-group">
                        <label className="form-row">Send message on CTRL+enter</label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="sendmessagetype"
                                value="1"
                                checked={settings.sendmessagetype === "1"} />
                            <label className="form-check-label">On</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="sendmessagetype"
                                value="0"
                                checked={settings.sendmessagetype === "0"} />
                                <label className="form-check-label">Off</label>
                        </div>
                    </div>
                </form>
                <form className="col-md-4 offset-md-4" onChange={(event) => updateForm(event)}>
                    <div className="form-group">
                        <label>Language</label>
                        <select value={settings.language} id="language" className="form-control">
                            <option value='eng'>English</option>
                            <option selected value='ger'>German</option>
                        </select>
                    </div>
                </form>
            </div>
            <button className="btn btn-primary col-md-4 offset-md-4" onClick={() => resetSettingsAction()}>Reset to default</button>
        </div>
    </div>
    )
}

export default connect((state) => {
    return ({
        settings: getSettingsSelector(state)
    });
}, {
    saveSettingsAction,
    resetSettingsAction
})(Settings)