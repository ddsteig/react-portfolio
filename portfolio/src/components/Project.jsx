import React from 'react'
import '../pages/style.css'

const Project = (props) => {
    const { name, image, alt, url, text, github } = props
    console.log(image)
 
        return (
        <React.Fragment>            
                <div className="col-sm-12 col-md-6 col-lg-4 card-block">
                    <div className="card">
                        <a href={url} target="_blank" rel="noreferrer">
                            <img src={image} className="card-img-top projimg" alt={alt} /></a>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{text}</p>
                        </div>
                        <div className="card-footer">
                            <small className="repo">
                                <a className="btn-floating btn-git" type="button" role="button"
                                    href={github} target="_blank" rel="noreferrer">
                                    <i className="fa fa-github" id="project-one"></i></a>
                                   Github Repo
                            </small>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Project