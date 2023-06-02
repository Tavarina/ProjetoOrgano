import { Fragment } from 'react'
import './Banner.css'

export const Banner = () => {
 //JSX
    return(
        //Se usar <Fragment></Fragment> é igual a usar ele vazio <></>
        <> 
        <header className='banner'>
        <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
        </>
    )
}
