import React, { useState, memo, useEffect } from 'react'
import { SideBar } from 'antd-mobile'
import { SideBarWrapper } from './style'
import classnames from 'classnames'
import { CateListType } from '@/models'
import style, { px2rem } from '@/assets/styles/global-style'
import LazyLoad from 'react-lazyload'
import defaultImg from '@/assets/imgs/default.png'

interface SideBarType {
  cateList: CateListType[];
}
const SideBarComponent: React.FC<SideBarType> = (props) => {
  const { cateList } = props;
  const [activeKey, setActiveKey] = useState("")
  useEffect(() => {
    if (cateList.length > 0) {
      setActiveKey("" + cateList[0].id);
    }
  }, [cateList])
  return (
    <SideBarWrapper>
      <SideBar
        activeKey={activeKey}
        onChange={setActiveKey}
        style={{
          "--width": `${px2rem(80)}`,
          "--background-color": "#f8f8f8"

        }}>

        {cateList.map((item: any) => (

          <SideBar.Item
            key={item.id}
            title={item.name}
            // className={classnames(
            //   { chosed: activeKey == `${item.id}` }
            // )}
          >
          </SideBar.Item>

        ))}
      </SideBar>

      <div className='sidebar-content'>
        {cateList.map(item => (
          <div key={item.id} className={classnames(
            { content: true },
            { active: activeKey == `${item.id}` }
          )}>
            {item.subCateList.map(item2 => (
              <div className='content-item' key={item2.id}>
                <div className='cate-img'>

                  <LazyLoad
                    placeholder={<img width="100%"
                      height="100%" src={defaultImg} />}>
                    <img src={item2.wapBannerUrl} alt="" width="100%" height="100%" />
                  </LazyLoad>


                </div>
                <div>{item2.name}</div>
              </div>
            ))}
          </div>
        ))}
      </div>


    </SideBarWrapper>
  )
}
export default memo(SideBarComponent)
