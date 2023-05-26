import './miOrg.css'


const MiOrg = (props)=>{
    const cambiarForm = ()=> props.expandirForm();
    return <section className="miOrg__section">
            <h3 className="miOrg__title">Mi Organizacion</h3>
        <img className="miOrg__button" src="img/addButton.png" onClick={cambiarForm} alt="Añadir colaborador"/>
    </section>
}

export default MiOrg

