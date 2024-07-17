import React from "react";

class ConnectionStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'online',
        };
        this.updateNetworkStatus = this.updateNetworkStatus.bind(this);
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

    updateNetworkStatus() {
        this.setState({
            status: navigator.onLine ? 'online' : 'offline'
        });
    }

    render() {
        const { status } = this.state;
        const statusClass = status === 'offline' ? 'status_offline' : '';

        return (
            <div className={`status ${statusClass}`}>{status}</div>
        );
    }
}

export default ConnectionStatus;
