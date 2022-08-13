import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import { debounce } from '@/utils/debounce';
import { SearchInputWrapper } from './style'

const SearchInput: React.FC<any> = (props) => {
  const { newQuery } = props;
  const { handleQuery, back } = props;
  const queryRef: any = useRef<HTMLInputElement>();
  const [query, setQuery] = useState('');
  // 父组件传过来的函数封装一下
  // 优化再升级
  // useMomo 可以缓存 上一次函数计算的结果 
  let handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 500)
  }, [handleQuery])
  // mount 
  useEffect(() => {
    // 挂载后
    queryRef.current.focus();
  }, [])
  // 使用useEffect 去更新 
  useEffect(() => {
    handleQueryDebounce(query)
  }, [query])
  useEffect(() => {
    // mount 时候 执行 父组件  newQuery -> input query 
    let curQuery = query;
    if (newQuery !== query) {
      curQuery = newQuery;
      queryRef.current.value = newQuery;
    }
    setQuery(curQuery)
    // newQuery 更新时执行
  }, [newQuery])

  const clearQuery = () => {
    setQuery('');
    queryRef.current.value = "";
    queryRef.current.focus();
  }
  const handleChange = (e: any) => {
    let val = e.currentTarget.value
    setQuery(val)
  }
  const displayStyle = query ? { display: 'block' } : { display: 'none' };

  return (
    <SearchInputWrapper>
      {/* 搜索表单盒子 */}
      <div className="search-box">
        <i className='iconfont icon-sousuo'></i>
        <input type="text" placeholder='搜索内容' ref={queryRef}
          onChange={handleChange} />
        <i className='iconfont icon-quxiao'
          style={displayStyle}
          onClick={clearQuery}></i>
      </div>
      {/* 返回按钮 */}
      <div className='back' onClick={() => back()}>取消</div>
    </SearchInputWrapper>
  )
}

export default SearchInput