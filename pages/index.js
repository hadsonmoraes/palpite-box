import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Seja Bem-vindo' />
      <p className='mt-12 text-center'>
        O resturante X sempre Busca por atender melhor seus Clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua Opnião.
      </p>
      <div className='text-center my-16'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data && <p className='text-center py-4'>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-8 text-center'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index  