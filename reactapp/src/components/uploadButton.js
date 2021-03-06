import React from "react";
import {Carousel} from "./carousel";
import "../styles/uploadButton.css";
import PropTypes from 'prop-types';

export class UploadButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="welcome flex-grow-1 d-flex flex-column">
				<h3>
					Depict accurate and personalized outcomes of climate change using AI.<br/>
					<span className="href-link" onClick={this.props.loadTagsForm}>
						Help us collect images
					</span> of flooded houses and streets to train our climate model.
				</h3>
				<div className="pb-5">
                    <span className="button btn btn-danger btn-lg" onClick={this.props.loadTagsForm}>
                        UPLOAD YOUR PHOTOS
                    </span>
				</div>
				<div className="carousel-wrapper flex-grow-1">
					<Carousel/>
				</div>
			</div>
		)

	}
}

UploadButton.propTypes = {
	loadTagsForm: PropTypes.func.isRequired
};
