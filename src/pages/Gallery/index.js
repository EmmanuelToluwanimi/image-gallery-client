import React, { useEffect, useState } from 'react'
import imga from '../../asset/Rashford.jpg'
import { getAllImages, uploadImage } from '../../api/axios'
import { ToastContainer, toast } from 'react-toastify'

function Gallery() {

    const [imgo, setImgo] = useState({
        fileUrl: "",
        description: ""
    })

    const [dbFiles, setDbFiles] = useState([])

    // const notify = () => toast.loading("Wow so easy!");

    const getImages = async () => {
        // toast.loading("Uploading image")
        try {
            const res = await toast.promise(
                getAllImages,
                {
                  pending: 'Loading gallery',
                  success: 'Gallery updated 👌',
                  error: 'Promise rejected 🤯'
                }
            )
            
            // const res = await getAllImages()
            setDbFiles(res.data.payload)
            console.log(res.data.payload)
        } catch (error) {
            console.log(error.message.message)
        }
    }

    useEffect(() => {
        getImages()
        // console.log(dbFiles)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const res = await toast.promise(
                uploadImage(imgo),
                {
                  pending: 'Uploading image',
                  success: 'Gallery updated 👌',
                  error: 'Something went wrong 🤯'
                }
            )

            // const res = await uploadImage(imgo)
            setDbFiles(res.data.payload)
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const handleImg = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImgo({ ...imgo, fileUrl: reader.result })
        }

    }

    return (
        <>
            <div className="p-5">
                <div className="p-3 w-100 text-center">
                    <h3>Upload images to the cloud</h3>
                    <div className="inps">

                        <div className="m-2" >
                            <img className="shadow" src={imgo.fileUrl || imga} style={{ width: '200px', height: '200px', objectFit: "cover", objectPosition: "center" }} alt="preview" />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input type="file" onChange={handleImg} name="fileUrl" className="form-control" />
                            <input type="text" onChange={(e) => setImgo({ ...imgo, description: e.target.value })} className="form-control mt-2" name="description" />
                            <button className="btn btn-primary m-3">Upload</button>

                        </form>
                        {/* <button className="btn btn-danger" onClick={notify}>Alert</button> */}
                        <ToastContainer />

                    </div>
                </div>
                <div className="border card">
                    <h2 className="card-header">Gallery</h2>
                    <div className="card-body row">
                        {
                            dbFiles === 0 ? <h3 className="text-center col-12 text-muted">
                                No gallery to display
                            </h3> : dbFiles.map((cx) => {
                                return <div className="col-3 mt-3 border-0  card" style={{}} key={cx._id}>
                                    <img className="" src={cx.fileUrl} style={{ width: '100%', height: '300px', objectFit: "cover", objectPosition: "center" }} alt="preview" />
                                    <div className="card-body">
                                        Description: {cx.description}
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery
