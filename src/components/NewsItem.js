import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, publishedAt, author, source} = props
    return (
      <div className='my-3'>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body" >
                <h4 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}>{source}</span></h4>
                <p className="card-text">{description}</p>
                <h6 className='card-date'>Published At: {new Date(publishedAt).toGMTString()}</h6>
                <h6 className="card-author">Author: {author?author: "Unknown"}</h6>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
