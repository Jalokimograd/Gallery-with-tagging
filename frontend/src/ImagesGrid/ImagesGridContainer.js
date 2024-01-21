import React, { Component } from "react";
import ImageIconContainer from "./ImageIconContainer";
import "./ImagesGridContainer.css";

class ImagesGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        "https://images.freeimages.com/vhq/images/previews/cf0/free-flowers-background-94732.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/365/images/previews/da4/fine-pattern-background-14639.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/image/previews/095/global-time-zone-map-tags-mapid-worldmarket-qzone-5690059.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/365/images/previews/123/free-dog-vector-pack-59083.png?fmt=webp&w=500",
        "https://images.freeimages.com/images/large-previews/03e/oxford-architecture-1233371.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/images/large-previews/9f9/selfridges-2-1470748.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/variants/ARFoM1GQWRqUuBDXfvwPBvux/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500",
        "https://images.freeimages.com/images/large-previews/866/butterfly-1-1535829.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/images/large-previews/cf6/jellyfish-1459351.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/images/large-previews/a12/head-of-ship-1448437.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/vme/images/2/2/229960/vector_jungle_tree_preview.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/365/images/previews/443/old-world-map-1280.jpg?fmt=webp&w=500",
        "https://media.istockphoto.com/id/1418883950/vector/watercolor-cute-pattern-green-forest-abstract-and-birds.webp?b=1&s=612x612&w=0&k=20&c=8PnDyWW1ZHzA7L20HODFVcqHaDL0TCxZpwfmyHa8MxY=",
        "https://media.istockphoto.com/id/97403986/vector/aerial-landscape.webp?b=1&s=612x612&w=0&k=20&c=DXZADJtR3ezrYG6xexcGo5CrJ23fS-rnUqKGUEATY_w=",
        "https://images.freeimages.com/vhq/images/previews/e89/identity-branding-mockup-vol-3-397171.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/365/images/previews/750/snowflake-ui-kit-61739.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/cme/images/previews/e77/starbucks-tumbler-template-45530.png?fmt=webp&w=500",
        "https://images.freeimages.com/image/previews/343/framemockupstationerycomposition-5691143.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/vhq/images/previews/ed5/63-arrow-icons-set-559900.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/vhq/images/previews/350/195-world-national-flags-icon-set-495194.jpg?fmt=webp&w=500",
        "https://images.freeimages.com/image/previews/594/slimline-social-icons-5690411.jpg?fmt=webp&w=500",
        "https://media.istockphoto.com/id/1351148968/vector/detailed-world-map-divided-into-six-continents-accurate-correct-version.webp?b=1&s=612x612&w=0&k=20&c=dtogm7DUWC3GWIs8Z3F2v9gR1d_vyXinuZj17XrPRPg=",
        "https://media.istockphoto.com/id/530922532/vector/grayscale-world-map-illustration.webp?b=1&s=612x612&w=0&k=20&c=K6AMwvAEtW-oiF_bfL-nLvSx5FgswebhMZSiwrrIfBI=",
      ],
      selectedImages: [],
    };

    this.createImageItems = this.createImageItems.bind(this);
    this.checkUncheckImage = this.checkUncheckImage.bind(this);
  }

  checkUncheckImage(imageIndex) {
    let updatedSelectedImages = [];

    if (this.state.selectedImages.includes(imageIndex)) {
      updatedSelectedImages = this.state.selectedImages.filter(
        (item) => item !== imageIndex
      );
    } else {
      updatedSelectedImages = this.state.selectedImages;
      updatedSelectedImages.push(imageIndex);
    }

    this.setState({
      selectedImages: updatedSelectedImages,
    });
  }

  createImageItems(item) {
    return (
      <ImageIconContainer
        imagePath={item}
        checkUncheckImage={this.checkUncheckImage}
        selectedImages={this.state.selectedImages}
      />
    );
  }

  render() {
    var ImagesItems = this.state.files.map(this.createImageItems);

    return (
      <div className="gallery-container">
        <div className="overlay-gallery"> </div>{" "}
        <div className="gallery-component">
          <div className="images-grid"> {ImagesItems} </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default ImagesGridContainer;
