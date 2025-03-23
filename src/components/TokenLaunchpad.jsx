import { createMint } from '@solana/spl-token'
export function TokenLaunchpad() {

    function createToken(){
        const name = document.getElementById('name').value
        const symbol = document.getElementById('symbol').value
        const image = document.getElementById('image').value
        const supply = document.getElementById('supply').value
        console.log(name, symbol, image, supply)
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name' id="name"></input> <br />
        <input className='inputText' type='text' placeholder='Symbol' id="symbol"></input> <br />
        <input className='inputText' type='text' placeholder='Image URL' id="image"></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'id="supply"></input> <br />
        <button className='btn' onClick={createToken}>Create a token</button>
    </div>
}