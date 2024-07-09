import React from 'react';
import useFetch from "../../hooks/useFetch";
import "./featured.css"

const Featured = () => {
  const {data,loading,error} = useFetch("hotels/countByCity?cities=berlin,madrid,london");

  return (
    <div className="featured">
        {loading ? ("Loading..."
        ) : ( 
          <>
            <div className="featuredItem">
              <img src="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2017/05/16213722/Berlin_city_viewXL.jpg" alt="" className="featuredImg" />
              <div className="featuredTitles">
                  <h1>Berlin</h1>
                  <h2>{data[0]} properties</h2>
              </div>
          </div>
          <div className="featuredItem">
          <img
            src="https://wallpaperaccess.com/full/2719795.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Toronto</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://th.bing.com/th/id/R.6df8132d1c63208fc5832f9efc12569d?rik=IXH6%2f%2fLxuA4LEw&pid=ImgRaw&r=0"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div> 
      </>
      )}
    </div>
  );
};

export default Featured;
