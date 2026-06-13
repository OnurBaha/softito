import React from 'react'


const DegistirilmeyenKart = (props)=>{
    const deneVeHataGoster=()=>{
        try{
            /* HATANIN NEDENİ BURASIDIR:
               
               1. React'ta "Props are Read-Only" (Propslar sadece okunabilir) kuralı vardır.
               2. Bir bileşene (component) dışarıdan gelen props nesnesi, React tarafından dondurulur (Object.freeze).
               3. props.baslik = "Yeni Baslik"; satırıyla bu salt-okunur nesneyi doğrudan değiştirmeye (mutate etmeye) çalışıyoruz.
               4. React, bileşenin tutarlılığını korumak için buna izin vermez ve bir "TypeError" fırlatır.
               
               Eğer bu veri değişecekse, nesneyi doğrudan değiştirmek yerine 
               React'ın "State" (Durum) mekanizması kullanılmalıdır.
            */
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



