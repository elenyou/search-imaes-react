import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spans: 0
        };
        //accessing the DOM with Refs 
        this.imageRef = React.createRef();
    }

    //callback on Image load
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
       const height = this.imageRef.current.clientHeight;
       const spans = Math.ceil(height / 10);

       this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div  style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    alt={description} 
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;
