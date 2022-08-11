import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)


    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const update = async () => {
        props.setProgress(10);
        const url =`http://api.mediastack.com/v1/news?access_key=${props.apikey}&countries=${props.country}&categories=${props.category}&offset=${page}&limit=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let dataparsed = await data.json();
        props.setProgress(70);
        setArticles(dataparsed.data);
        setTotalResults(dataparsed.pagination.total);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsBook - ${capitalize(props.category)}`;
        update();
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        const url =`http://api.mediastack.com/v1/news?access_key=${props.apikey}&countries=${props.country}&categories=${props.category}&offset=${page+props.pageSize}&limit=${props.pageSize}`;
        setPage(page + props.pageSize);
        let data = await fetch(url);
        let dataparsed = await data.json();
        setArticles(articles.concat(dataparsed.data));
        setTotalResults(dataparsed.pagination.total);
    };

    return (
        <>
            <h1 style={{ margin: '35px 0px' , marginTop : '90px'}} className='text-center'> News<span style={{ marginLeft : '2px', color : 'white', backgroundColor :'#0275d8', borderRadius :'4px'}}>Book</span> - Top {capitalize(props.category)} Headlines.</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image} newsUrl={element.url} author={element.author} date={element.published_at} source={element.source ? element.source : "Unknown"} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News