import React from 'react'
import {  Link } from 'react-router-dom'
import { OldSearchWrapper } from '../OldSearch/style';

const SearchRecommend: React.FC<any> = (props) => {
    const { keywords } = props;
    return (
        <OldSearchWrapper>
            <div className="old-search-header">
                <div className="old-search-title">推荐搜索</div>
                {/* <i>1</i> */}
            </div>
            <div className="old-search-body">
                {keywords.map((item: any, index: any) => (
                    <Link to={{
                        pathname: `/searchDetail/${index}`

                    }}
                        key={index}
                    >
                        <span className="old-search-body-item" key={index}>{item}</span>
                    </Link>
                ))}
            </div>
        </OldSearchWrapper>
    )
}

export default SearchRecommend
