import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { OldSearchWrapper } from './style'
import { FlexColumnBetweenWrapper, FlexRowBetweenWrapper } from '@/components/commonstyle'

const OldSearch: React.FC<any> = (props) => {
    const { oldSearchList,keywords } = props;
    // console.log(oldSearchList,"old");

    return (
        <OldSearchWrapper>
            <FlexRowBetweenWrapper className="old-search-header">
                <div className="old-search-title">历史记录</div>
                <i>1</i>
            </FlexRowBetweenWrapper>
            <div className="old-search-body">
                {oldSearchList.map((item: any, index: any) => (
                    <Link to={{
                        pathname: `/searchDetail/${keywords.indexOf(item)}`
                    }}
                        key={index}
                    >
                        <div className="old-search-body-item" >{item}</div>
                    </Link>
                ))}
            </div>
        </OldSearchWrapper>
    )
}

export default OldSearch
