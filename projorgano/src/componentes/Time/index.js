import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
//outra forma de usar o css 
//const css = { background: props.corSecundaria}
//        <section className='time' style={css}>
       (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}} >{props.nome}</h3>
           <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

// outra forma
// (props.colaboradores.lenght > 0) ? <section className='time' style={css}
//     <h3> style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
//     <div className='colaboradores'>
//         {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem})}
//     </div>
// </section>
// : ''

export default Time