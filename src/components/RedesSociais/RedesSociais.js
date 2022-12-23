import './RedesSociais.css';

const RedesSociais = () => {

    const ListaRedes = [ 
        { id: 1, urlNome: 'Instagram' , url: 'https://www.instagram.com/jorgenetto.dev/'},
        { id: 2, urlNome: 'Linkedin' , url: 'https://www.linkedin.com/in/jorgenettodev'},
        { id: 3, urlNome: 'Github' , url: 'https://github.com/jorgenettodev'},
        { id: 4, urlNome: 'Whatsapp' , url: 'https://api.whatsapp.com/send?phone=5582999167727'},
    ]

    const LinksRedes = ListaRedes.map( (props) => 
        <div key={props.id} className='conteudo_links'>
            <a href={props.url}>{props.urlNome}</a>
        </div>
    
    )


    return (
        <>
            {LinksRedes}
        </>
    )
}

export default RedesSociais

