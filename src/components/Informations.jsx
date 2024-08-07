import Text from '../components/Text';
import Button from './Button';
import NavbarItem from './NavbarItem';
import Subtitles from './Subtitles';


export default function informations() {
  return (
    <div className="flex flex-col w-[890px] h-[466px] align-itens:flex-star p-[30px] bg-white">
      <div className="flex justify-between  ">
        <div>
          <Text type="UPgray-description" children="Minhas Informações" />
        </div>
        <div>
           <Button type='link' children='editar' />
        </div>
      </div>

      <div className="border-b mt-5 mb-5 border-gray-500"></div>
      <div>
        <Subtitles type='third2' children="Minhas Informações" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="Nome:"/>
        <Subtitles type='third2' children="Wesnei de Paiva Batista" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="CPF:"/>
        <Subtitles type='third2' children="5326665232" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="E-mail:"/>
        <Subtitles type='third2' children="wesneipaiva@gmail.com" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="Celular:"/>
        <Subtitles type='third2' children="(88)988155616" />
      </div>
      <div className="border-b mt-5 mb-5 border-gray-500"></div>
      <div>
        <Subtitles type='third2' children="Informações de Entrega" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="Endereço:"/>
        <Subtitles type='third2' children="Rua José Bezerra do Vale Nº150" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="Bairro:"/>
        <Subtitles type='third2' children="Boa Viaginha" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="Cidade:"/>
        <Subtitles type='third2' children="Boa Viagem" />
      </div>
      <div className='flex gap-2 items-center' >
        <Text type='mini-description' children="Cep:"/>
        <Subtitles type='third2' children="63870-000" />
      </div>

    
      



    </div>
  );
}
