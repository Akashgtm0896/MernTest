import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Editor from "./Editor/Editor";
import { Card } from "react-bootstrap";
import { CardBody, CardFooter } from "reactstrap";
// import Editor from ".././../public///photo.png.jpeg";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function Maincomp() {
  const name = "Akash";
  const [isOpen, setIsOpen] = useState(false);
  const [openLightbox, setOpenLightBox] = useState(false);
  const [openLightbox1, setOpenLightBox1] = useState(false);
  const [openLightbox2, setOpenLightBox2] = useState(false);
  const [openLightbox3, setOpenLightBox3] = useState(false);
  const [photoIndex, setphotoIndex] = useState({})

  let pic;
  const Editphoto = (e) => {
    console.log("PHOTO");
    pic = e;
    localStorage.setItem("imgaes", pic);
    console.log(pic);
    setIsOpen(true);
  };

  const handleViewImage = () => {
    setOpenLightBox(true);
    
  };
  const handleViewImage1 = () => {
    setOpenLightBox1(true);
    
  };
  const handleViewImage2 = () => {
    setOpenLightBox2(true);
    
  };
  const handleViewImage3 = () => {
    setOpenLightBox3(true);
    
  };
 
  return (
    <>
      {/* <input type="file" onChange={changeHandler} accept="image/*" multiple /> */}

      <div className="container ">
        <h1 className="text-center my-4">All Photos </h1>
        <div className="row">
          <div className="col-md-3">
            <Card className="text-center border">
              <CardBody className="">
                <div className="img-fluid float-left">
                  <small className="mb-1 text-uppercase">
                    <b> Image 1 </b>
                  </small>
                  <hr className="mt-2" />
                  <img
                    src="photo.jpeg"
                    alt=""
                    className="img-fluid"
                    onClick={handleViewImage}
                  />
                </div>
              </CardBody>
              <CardFooter>
              <button type="button" className="btn btn-info"  onClick={handleViewImage}>
                  Edit
                </button>
              </CardFooter>
            </Card>
          </div>

          <div className="col-md-3">
            <Card className="text-center border">
              <CardBody className="">
                <div className="img-fluid float-left">
                  <small className="mb-1 text-uppercase">
                    <b> Image 2 </b>
                  </small>
                  <hr className="mt-2" />
                  <img src="photo6.jpeg" alt="" className="img-fluid" />
                </div>
              </CardBody>
              <CardFooter>
              <button type="button" className="btn btn-info"  onClick={handleViewImage1}>
                  Edit
                </button>
              </CardFooter>
            </Card>
          </div>

          <div className="col-md-3">
            <Card className="text-center border">
              <CardBody className="">
                <div className="img-fluid float-left">
                  <small className="mb-1 text-uppercase">
                    <b> Image 3 </b>
                  </small>
                  <hr className="mt-2" />
                  <img src="photo2.jpeg" alt="" className="img-fluid" />
                </div>
              </CardBody>
              <CardFooter>
               
                <button type="button" className="btn btn-info"  onClick={handleViewImage2}>
                  Edit
                </button>
              </CardFooter>
            </Card>
          </div>

          <div className="col-md-3">
            <Card className="text-center border">
              <CardBody className="">
                <div className="img-fluid float-left">
                  <small className="mb-1 text-uppercase">
                    <b> Image 4 </b>
                  </small>
                  <hr className="mt-2" />
                  <img src="photo3.webp" alt="" className="img-fluid" />
                </div>
              </CardBody>
              <CardFooter>
              
              <button type="button" className="btn btn-info"  onClick={handleViewImage3}>
                  Edit
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {openLightbox ? (
        <Lightbox
          image="photo.jpeg"
          title="Image Title"
          onClose={() => setOpenLightBox(false)}
        />
      ) : (
        ""
      )}
       {openLightbox1 ? (
        <Lightbox
          image="photo6.jpeg"
          title="Image Title"
          onClose={() => setOpenLightBox1(false)}
        />
      ) : (
        ""
      )}
       {openLightbox2 ? (
        <Lightbox
          image="photo2.jpeg"
          title="Image Title"
          onClose={() => setOpenLightBox2(false)}
        />
      ) : (
        ""
      )}
       {openLightbox3 ? (
        <Lightbox
          image="photo3.webp"
          title="Image Title"
          onClose={() => setOpenLightBox3(false)}
        />
      ) : (
        ""
      )}
    </>
  );
}
