import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import axios from "axios";

function ProductImage() {
    const [Images, setImages] = useState();
    const listImage = [];
    useEffect(async () => {
        listImage = await axios.get(
            "http://localhost:8080/api/ImageProduct/allImage"
        );
    }, []);

    console.log(listImage);

    return <div>{/* <ImageGallery items={Images} /> */}</div>;
}

export default ProductImage;
