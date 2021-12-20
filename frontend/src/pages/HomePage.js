import CanyonCard from "../components/CanyonCard"

function HomePage(props) {
    const {canyons} = props
    console.log(canyons)

    return (
        <div><h1>Home Page</h1>
       
        <div className='homePage'>
            

            {canyons[0] && canyons.map((el,ind) =>{
                return (
                    <CanyonCard el={el} key={ind}/>
                )
            })}
        </div>
        
        </div>
    )
}

export default HomePage