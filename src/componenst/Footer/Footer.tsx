import { FaInstagram, FaFacebookF, FaTwitter} from "react-icons/fa";

import * as S from './style'

export const Footer: React.FC = ()=>{
    return(
        <S.footer>
            <button>
                <FaFacebookF/>
            </button>
            <button>
                <FaTwitter/>
            </button>
            <button>
                <FaInstagram/>
            </button>
        </S.footer>
    )
}