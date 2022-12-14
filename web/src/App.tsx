import {GameController} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'



import { useState, useEffect } from 'react';
import './styles/main.css';
import logoImg from './assets/logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreatedAdBanner';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}
function App() {

const [games, setGames]= useState<Game[]>([])

useEffect(() => {
  fetch('http://localhost:3333/games')
  .then(response => response.json())
  .then(data => 
    setGames(data)
   
  )
}, []) 
 return (

  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImg}/>

    <h1 className="text-6xl text-white font-black mt-20">Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo </span>  está aqui!</h1>


    <div className='grid grid-cols-6 gap-6 mt-16'>
      {games.map(game => {
        return (
          <GameBanner 
          key= {game.id}
          bannerUrl={game.bannerUrl} 
          title={game.title} 
          adsCount={game._count.ads} 
          />
          

          
        )
      })}   
      

    </div>

    <Dialog.Root>
      <CreateAdBanner />

      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>
          Publique um anúncio
        </Dialog.Title>

        <Dialog.Content>
            <form action="">
              <div>
                <label htmlFor="game">Qual o game?</label>
                <input type="text" placeholder='Selecione o game que deseja jogar'/>
              </div>
              <div>
                <label htmlFor="Seu nome (ou nickname)"></label>
                <input id='name' placeholder='Como te chamam dentro do game'/> 
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                </div>
                <div>
                  <label htmlFor="discord">Qual seu discord</label>
                  <input type="text" placeholder='Usuario#0000'/>
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar</label>
                </div>
                <div>
                  <label htmlFor="hourStart">Qual horario do dia</label>

                  <div>
                    <input id="hourStart" type="time" placeholder='De' />
                    <input id="hourEnd" type="time" placeholder='Até' />
                  </div>
                </div>
              </div>

              <div>
                <input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer>
                <button>Cancelar</button>
                <button type='submit'>
                  <GameController />
                  Encontrar duo
                  </button>

              </footer>

            </form>
        </Dialog.Content>
        </Dialog.Content>


      </Dialog.Portal>

      </Dialog.Root>

      
  </div>

 )

}
export default App
