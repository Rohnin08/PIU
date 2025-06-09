import './Galeria.css'

const Galeria = (props) => {
    return (
        <div className='galeria'>
            {props.children}
        </div>
    );
};

export default Galeria;