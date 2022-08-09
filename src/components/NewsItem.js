import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-primary">{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : "https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2016/12/news-2-e1481703815958-690x481.jpg"} className="card-img-top" alt="News" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-primary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem