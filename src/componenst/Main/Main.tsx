import illustration from '../../assets/images/illustration-mockups.svg'
import * as S from './style'

export const Main: React.FC = ()=>{
    return(
        <S.main>
            <article>
                <figure>
                    <img src={illustration} alt="" />
                </figure>

                <section>
                    <h2>
                        Build The Community Your Fans Will Love
                    </h2>
                    <p>
                        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                        Create connections with your users as you engage in genuine discussion. 
                    </p>

                <button>Register</button>
                </section>
            </article>
        </S.main>
    )
}