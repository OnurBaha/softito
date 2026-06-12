const UrunKarti=(props)=>{
    return(
        <div className='card'>
            <h4 className='font-bold'>{props.ad}</h4>
            <p className='text-gray-600'>Fiyat: {props.fiyat}TL</p>
            <p className='text-sm'>
                Stokta:{props.stoktaVar ? "Var" : "Yok"}
            </p>
        </div>
    )
}


function Demo3PropsBasic() {
  return (
    <div className='p-4'>
        <h4 className='font-bold text-xl'>Demo 3 Props Basic</h4>
        <div className='mt-4 product-grid'>
            <UrunKarti ad="Laptop" fiyat={150000} stoktaVar={true}/>
            <UrunKarti ad="Telefon" fiyat={230000} stoktaVar={true}/>
            <UrunKarti ad="Kulaklık" fiyat={17500} stoktaVar={false}/>
            <UrunKarti ad="Dyson" fiyat={7500} stoktaVar={true}/>
        </div>
    </div>
  )
}

export default Demo3PropsBasic