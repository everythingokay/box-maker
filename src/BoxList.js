import React, { Component } from "react";
import Box from "./Box";
import NewBox from "./NewBox";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [] };
        this.create = this.create.bind(this);
    };
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    };
    remove(id) {
        this.setState({
            boxes: [...this.state.boxes.filter(box => box.id !== id)]
        });
    };

    render () {
        const boxes = this.state.boxes.map(box => (
            <Box 
            key={box.id} 
            id={box.id} 
            width={box.width} 
            height={box.height} 
            color={box.color} 
            remove={() => this.remove(box.id)}
            />
        ));
        return (
            <div>
                <h1>BOX MAKER</h1>
                <NewBox createBox={this.create} />
                {boxes}
            </div>
        );
    };
};

export default BoxList;