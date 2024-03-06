import { TypeAnimation as Typing } from 'react-type-animation'

export default function TypeAnimation () {
  return (
    <h1 className='mb-5 text-2xl leading-tight text-center md:text-left dark:text-neutral-200 text-gray-900'>
      ¡Yo puedo
      <Typing
        sequence={[
          750,
          ' planificarlo!',
          750,
          ' diseñarlo!',
          750,
          ' desarrollarlo!'
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}
        className='font-bold text-blue-600'
      />
    </h1>
  )
}
