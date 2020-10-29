import React from 'react';
import ImageUploader from 'react-images-upload';
import PropTypes from 'prop-types';
import Imgd from './imgdisplay'
export default class Image extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        console.log(this.state.pictures)
        return (<div>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            {(this.props.pictures|| []).map((picture) => (
<Imgd picture={picture} />
  ))}

        
</div>
        );
    }
}
Image.propTypes = {
    pictures: PropTypes.array.isRequired
}