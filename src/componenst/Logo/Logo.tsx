import * as S from './style'
import imgLogo from '../../assets/images/logo.svg'
export const Logo: React.FC = ()=>{
    return(
        <S.logo>
            <img src={imgLogo} alt="" />
        </S.logo>
    )
}