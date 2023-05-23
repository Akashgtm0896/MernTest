import { useState } from "react";
import ReactModal from "react-modal";
import Editor from "./Editor/Editor";
import { useNavigate } from "react-router-dom";
export default function Ass() {

    var image = ""
    const [isOpen, setIsOpen] = useState(false);
    // const navigate = useNavigate()
    // const [imge,setimge] = useState()

    const Editphoto = (img) => {
        localStorage.setItem('imge' , img)
        console.log("PHOTO")
        console.log(img)
        // setIsOpen(true)
        image = img
        // setimge(img)
        // navigate('/editor')
    }

    // const changeHandler = (e) => {
    //     const { files } = e.target
    //     for (let i = 0; i < files.length; i++) {
    //       const file = files[i];
    //     }
    //     setIsOpen(true)
    //   }

    return (
        <>
            <h2>MainComp</h2>

            {/* <input type="file" onChange={changeHandler} accept="image/*" multiple /> */}

            <div className="container my-3">
                <h1 className="text-center my-4">All Photos  </h1>
                <div className="row">

                    <div className="col-md-3">
                        <div className="col">
                            <img src="photo.png.jpeg" style={{ width: '15rem' }} alt=""></img>
                            <br></br>
                            <br></br>
                            <button type="button" onClick={()=>{Editphoto('photo.png.jpeg')}} className="btn btn-info">Edit</button>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <img src="photo6.png.jpeg" style={{ width: '15rem' }} alt=""></img>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={()=>{Editphoto('photo6.png.jpeg')}} className="btn btn-info">Edit</button>
                    </div>

                    <div className="col-md-3">
                        <img src="photo2.png.jpeg" style={{ width: '15rem' }} alt=""></img>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={()=>{Editphoto('photo2.png.jpeg')}} className="btn btn-info">Edit</button>
                    </div>

                    <div className="col-md-3">
                        <img src="photo3.png.webp" style={{ width: '15rem' }} alt=""></img>
                        <br></br>
                        <br></br>
                        <button type="button" onClick={()=>{Editphoto('photo3.png.webp')}} className="btn btn-info text-center">Edit</button>
                    </div>
                </div>

            </div>

            {/* < /> */}



            <div>
                <button type="button" onClick={() => setIsOpen(true)} className="btn btn-secondary text-center">Open Modal</button>
                 

                <ReactModal style={{ backgroundColor: 'light' }}
                    isOpen={isOpen} contentLabel="Example Modal" onRequestClose={() => setIsOpen(false)}
                >
                    <img src={image} alt=""></img>
                   
                    <Editor />
                </ReactModal>
            </div>

        </>
    )
}