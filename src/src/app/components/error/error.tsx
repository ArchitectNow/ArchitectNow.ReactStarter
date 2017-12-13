import * as React from 'react';
import './error.scss';

export class Error extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Error</h2>
                        <p>An error has occured in the application.</p>
                    </div>
                </div>
            </div>
        );
    }
}