import { useEffect, useState } from "react"
// import { useEffect, useState } from "../../../public/" mean 

export default function Editor(props) {   
   
    let pc = "";

    
    pc = localStorage.getItem('imgaes')
    useEffect(() => {
        pc = localStorage.getItem('imgaes')
        console.log(pc)
        console.log(props.pic)
    });

    return (
        <>
            <div className="container">

                {/* <h2></h2> */}
                <h2>{props.n}'s Editor</h2>

                <div className="container col">
                    <img src={pc} alt="" width="300" height="300" />

                    <br></br>
                    <button type="button" className="btn btn-dark"> <i className="bi bi-arrow-clockwise"></i>
                        <svg xmlns={pc} width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                    </button>

                    <button type="button" className="btn btn-dark"> <i className="bi bi-arrow-clockwise"></i>
                        <svg xmlns={pc} width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                    </button>

                </div>

            </div>

        </>
    )
}