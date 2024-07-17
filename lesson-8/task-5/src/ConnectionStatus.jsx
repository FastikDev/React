import React from "react";

class ConnectionStatus extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            status: 'Online',
        };
    }

    componentDidMount() {
        window.addEventListener('online', this.updateNetworkStatus);
        window.addEventListener('offline', this.updateNetworkStatus);
        this.updateNetworkStatus();
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.updateNetworkStatus);
        window.removeEventListener('offline', this.updateNetworkStatus);
    }

    updateNetworkStatus = () => {
        this.setState({
            status: navigator.onLine ? 'Online' : 'Offline'
        });
    }

    render() {
        const { status } = this.state;
        const statusClass = status === 'Offline' ? 'status_offline' : '';

        return (
            <div className={`status ${statusClass}`}>{status}</div>
        );
    }
}

export default ConnectionStatus;
