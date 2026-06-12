import React from 'react'

const ProfilKarti=({isim="Ali Hocamız", rol="Borsa Kaplanı"})=>{
    return(
        <div className="card">
            <h4 className="font-bold">{isim}</h4>
            <p className='text-gray-300'>Rol:{rol}</p>
        </div>
    )
}


function Demo9DefaultProps() {
  return (
    <div className='p-4'>
        <h3 className="text-xl font-bold">Demo 9: Varsayılan (default) Props</h3>
        <div className="product-grid">
            <ProfilKarti isim='Ali Yılmaz' rol='Yönetici'/>
            <ProfilKarti isim='Ayben' rol='Yarı Hataylı'/>
            <ProfilKarti />
        </div>
    </div>
  )
}

export default Demo9DefaultProps


//Demo 10 :React Composition