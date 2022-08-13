import styled from 'styled-components'
import style ,{px2rem}from '@/assets/styles/global-style'

export const SearchWrapper = styled.div`
  
   position:fixed;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   /* width: 100%; */
	overflow-y: overlay;
	/* overflow-x:overlay ; */

   /* width: 15rem; */
   padding:0  ${px2rem(10)};
    /* top: 0;
    left:0;
    right:0;
    bottom:0; */
    width: 100%;
    z-index: 1;
    overflow: hidden;
    /* background: #f2f3f4; */
    transform-origin: right bottom;
    /* CSSTranstion 过度类型给children  */
   &.fly-enter,&.fly-appear {
        opacity: 0;
        /* 启用GPU加速 */
        transform: translate3d(100%, 0, 0);
    }
    &.fly-enter-active, &.fly-apply-active {
        opacity: 1;
        transition: all .3s;
        transform: translate3d(0, 0, 0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0)
    }
    &.fly-exit-active {
        opacity: 0;
        transition: all .3s;
        transform: translate3d(100%, 0, 0);
    }
    .position-box{
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        left: ${px2rem(0)};
        top: ${px2rem(50)};
    }
    .search-item-box{
        z-index: 101;
    }
    .search-body-box{
        z-index: 100;
    }
    /* .none{
        display: none;
    } */
   
`



