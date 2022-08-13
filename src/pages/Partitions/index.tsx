import React,{useEffect,memo} from 'react'
import {PartitionsWrapper} from "./style"
import { connect } from 'react-redux'
import { rootState } from '@/store';
import { getCateList } from '@/store/actions/cartList'
import { AnyAction, Dispatch } from 'redux';
import {CateListType} from '@/models/CateListTypes'
import SideBar from './SideBarComponent'
import SideBarComponent from './SideBarComponent';
export interface HomeProps {
    cateList: CateListType[];
    getCateListDispatch: () => void;
  }
const Partitions: React.FC<HomeProps> = (props) => {
const {cateList}=props
const {getCateListDispatch}=props
    useEffect(()=>{
        getCateListDispatch()
        
    },[])
    return (
        <PartitionsWrapper>
            <SideBarComponent cateList={cateList}/>
        </PartitionsWrapper>
    )
}
const mapStateToProps = (state:rootState) => {
    return {
      cateList: state.partitions.cateList,
    }
  }
  const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
      getCateListDispatch() {
        dispatch(getCateList())
      },
    }
  }
export default memo(connect(mapStateToProps, mapDispatchToProps)(Partitions))
