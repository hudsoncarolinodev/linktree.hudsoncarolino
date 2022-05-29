import imgProfile from './../../../public/img/hudson.jpg'
function Profilesection(){
    return (
        <section>
            { <img src={imgProfile} alt="Hudson Carolino" />}
            <article>
                <p>Desenvolvedor Front-end com alto nível de competência em JavaScript (ECMAS 5/6), HTML, CSS, PHP, Wordpress. Mais de 5 anos de experiência como desenvolvedor Front-end e mais de 4 anos de experiência no setor de TI como desenvolvedor web. Após 5 anos trabalhando como linha de frente nas entregas de projetos. Hoje sou facilitador de programação na Kenzie Academy Brasil.</p>
            </article>
        </section>
    )
}
export default Profilesection