const UrunKutusu=(props)=>{
    return(
        <div className='card'>
            <h4 className='font-bold'>{props.ad}</h4>
            <div className="mt-2">
                {props.stokAdedi > 0 ?(
                    <span className='badge-success'>Stokta Var ({props.stokAdedi}) adet</span>
                ) : (
                    <span className='badge-dange'> Stokta Yok - Tükendi</span>
                )}
            </div>

            <div className="mt-2">
                {props.indirimdeMi && (
                    <span className='badge-danger'>Kampanyalı Ürün</span>
                )}
            </div>
        </div>
    )
}

function Demo5Rendering() {
  return (
    <div className='p-4'>
        <h3 className="text-xl font-bold">Demo 5: Koşullu Rendering</h3>
        <div className='product-grid'>
            <UrunKutusu ad="Televizyon" stokAdedi={5} indirimdeMi={true}/>
            <UrunKutusu ad="Bisiklet" stokAdedi={2} indirimdeMi={false}/>
            <UrunKutusu ad="Kahve Makinesi" stokAdedi={17} indirimdeMi={true}/>
        </div>
    </div>
  )
}

export default Demo5Rendering