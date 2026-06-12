import React from 'react'


const DegistirilmeyenKart = (props)=>{
    const deneVeHataGoster=()=>{
        try{
            props.baslik="Yeni Baslik";
        } catch(hata){
            alert("Hata Yakalandı: Props Degistirlemez." +hata.message)
        }
    }
      return (
    <div className='card'>
        <h4 className="font-bold">
            {props.baslik}
        </h4>
        <p className='text-gray-500'>Gelen Prop Değeri: {props.baslik}</p>
        <button onClick={deneVeHataGoster} className='btn-red'>Prop değiştirmeyi dene</button>
    </div>
  )
};

function Demo8ReadonlyProps() {
    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 8: Salt okunur ReadOnly Props</h3>
            <div className="mt-4">
                <DegistirilmeyenKart  baslik="Değiştirilmeyen Kart Başlık"/>
            </div>
        </div>
    )
};

export default Demo8ReadonlyProps