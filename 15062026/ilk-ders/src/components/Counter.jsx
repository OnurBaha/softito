import {useState} from 'react'


function Counter() {
  
  const [sayi, setSayi] = useState(0); 
  
  const arttir=()=>{
    setSayi(sayi+1);
  }

  const azalt=()=>{
    setSayi(sayi-1);
  }

  const sifirla = () =>{
    setSayi(0);
  }

  const besArttir = () =>{
    setSayi((oncekiSayi)=>oncekiSayi+5);
  }


  return (
    <div className='p-4'>
        <h3 className='font-bold text-xl'>Temel Counter</h3>
        <div className='card p-4'>
            <span className="text-sm">Mevcut Değer</span>
            <span className="text-6xl">{sayi}</span>

            <div className="flex flex-wrap gap-2">
                <button className='flex-1' onClick={azalt}>-1 Azalt</button>
                <button className="flex-1" onClick={arttir}>1 Arttır</button>
                <button className="flex-1" onClick={sifirla}>Sıfırla</button>
                <button className="mt-3" onClick={besArttir}>+5 Arttir (Güvenli callback prev)</button>
            </div>
            <div className="mt-6">
                <h4 className="foont-semibold">Öğrenim Notu</h4>
                <ul className='list-disc'>
                    <li>(0) ifadesi başlangıç değerini 0 olarak kodlar</li>
                    <li>State içindeki sayi = sayi+1 şeklinde değiştirilemez. UseState bir fonksiyon ister set ile başlayan bu state içindeki değeri güncellemek vb. işlemleri yapmak için kullanılır</li>
                    <li>Ardışık veya asenkron durumlarda önceki dğeere bağımlı güncellemeler için prev(callback) yapısı tercih edilmelidir.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Counter