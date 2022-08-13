import styled from 'styled-components'
import style,{px2rem} from '@/assets/styles/global-style'
export const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height:${px2rem(44)};
    background: #fafafa;
    border-top:${px2rem(1)} solid black;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.active {
            color: ${style["theme-color"]};
        }
        .tabbar-name{
            font-size: ${style["font-size-s"]};
        }
        i{
            font-size: ${px2rem(20)};
        }
    }
` 