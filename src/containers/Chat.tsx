import React from 'react';

const Chat: React.FC = () => (
    <div className="container">
        <div className="row">
            <div className="border rounded-lg col-md-12">
                <blockquote className="blockquote">
                <small className="form-text text-muted">{new Date().toLocaleDateString()}</small>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
                <blockquote className="blockquote text-right">
                <small className="form-text text-muted">{new Date().toLocaleDateString()}</small>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
                <blockquote className="blockquote text-right">
                <small className="form-text text-muted">{new Date().toLocaleDateString()}</small>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
                <blockquote className="blockquote">
                <small className="form-text text-muted">{new Date().toLocaleDateString()}</small>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </div>
            <form className="col-md-4 offset-md-4">
                <div className="form-group row">
                    <input type="email" className="form-control col-md-9" id="colFormLabelSm" placeholder="Enter message" />
                    <button type="submit" className="btn btn-primary col-md-3">Send</button>
                </div>
            </form>
        </div>
    </div>
)

export default Chat

