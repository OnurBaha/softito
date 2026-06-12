const Selamla = () =>{
    return(
        <div className='p-3 border'>
    <h4 className='font-bold'>Merhaba Dünya</h4>
</div>
    )
}

function Demo2Component() {

  return (
    <div className='p-4'>
        <h4 className='font-bold'>Demo 2 bileşen</h4>
        <div className="mt-4">
            <Selamla/>
            <Selamla/>
            <Selamla/>
        </div>
    </div>
  )
}

export default Demo2Component;