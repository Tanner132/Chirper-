import React, { Component } from "react";
import Cards from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Feed extends Component {
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch('/api/items')
            .then(res => res.json())
            .then(json => {
                this.setState({ isLoaded: true, items: json })
            })
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (<div>{items.map(items => (<div className="chirp" key={items.id}> 
            <Cards color="Dark" dark>
                <CardContent>
                    <Typography paragraph>
                        {items.chirp}
                    </Typography>
                </CardContent>
            </Cards>
                )}
                </div>)
            )}</div>
            )
        }
    }

}

export default Feed;