const CanyonCard = (props) => {
    const {el} = props


    return(
        <div className='canyonCard'>
            <img    src={'https://www.roadtripryan.com/go/tripimage/maxwidth?size=222&id=0pzP'} alt="" />

            <h1>{el.canyon_name}</h1>
            <h2>{el.length}</h2>
            <h2>{el.rating}</h2>
        </div>
    )
}

export default CanyonCard