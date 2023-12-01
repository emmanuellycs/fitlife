'use client'
import Image from 'next/image'
import logoName from '@/assets/logo-name.png'
import { ChevronDown, ChevronUp, Import } from 'lucide-react'
import { womanProducts } from '@/data/woman-db'
import { useState, useEffect } from 'react'
import { generalProducts } from '@/data/general-db'
import { manProducts } from '@/data/men-db'

enum ProductsTypes {
  General = 'general',
  Woman = 'woman',
  Man = 'man',
}

export default function Store() {
  const [productsTypes, setProductsType] = useState<ProductsTypes>(ProductsTypes.General)
  const [showFilters, setShowFilters] = useState(false)

  const handleProductsTypeChange = (type: ProductsTypes) => {
    setProductsType(type)
    setShowFilters(!showFilters)
  }

  const handleShowFilters = () => {
    setShowFilters(!showFilters)
  }

  useEffect(() => {

  }, [showFilters, productsTypes])

  return (
    <div className="w-full min-h-screen flex flex-col mt-20 gap-4">
      <header className='flex items-center justify-between p-4'>
        <Image src={logoName} alt="store logo" width={224} height={54} />
        <button
          type='button'
          onClick={() => handleShowFilters()}
          className='w-10 h-10 flex items-center justify-center rounded-md shadow-lg text-white shadow-pink-400 bg-black' >
          {
            showFilters ? <ChevronUp /> :
              <ChevronDown />
          }
        </button >
      </header>

      {
        showFilters &&
        <div className='w-full p-4 flex flex-col items-center justify-center gap-2'>
          <h1 className='font-medium text-xl'>O que voce quer ver?</h1>
          <button
            className='w-full h-12 rounded-md font-bold text-sm uppercase text-white bg-black'
            type='button'
            onClick={() => handleProductsTypeChange(ProductsTypes.Woman)}
          >
            Roupas Femininas
          </button>
          <button
            className='w-full h-12 rounded-md font-bold text-sm uppercase text-white bg-black'
            type='button'
            onClick={() => handleProductsTypeChange(ProductsTypes.Man)}
          >
            Roupas Masculinas
          </button>
          <button
            className='w-full h-12 rounded-md font-bold text-sm uppercase text-white bg-black'
            type='button'
            onClick={() => handleProductsTypeChange(ProductsTypes.General)}
          >
            acessorios
          </button>

        </div>
      }

      <main className='grid grid-cols-2 gap-1 p-4'>
        {
          productsTypes === 'general' && generalProducts.map(product => {
            return (
              <div key={product.id} className='w-32 flex flex-col gap-1 text-sm font-light'>
                <Image src={product.image} alt={product.description} width={128} height={96} />
                <h1>{product.description}</h1>
                <strong className='font-bold'>{product.price}</strong>
              </div>
            )
          })
        }

        {
          productsTypes === 'woman' && womanProducts.map(product => {
            return (
              <div key={product.id} className='w-32 flex flex-col gap-1 text-sm font-light'>
                <Image src={product.image} alt={product.description} width={128} height={96} />
                <h1>{product.description}</h1>
                <strong className='font-bold'>{product.price}</strong>
              </div>
            )
          })
        }
        {
          productsTypes === 'man' && manProducts.map(product => {
            return (
              <div key={product.id} className='w-32 flex flex-col gap-1 text-sm font-light'>
                <Image src={product.image} alt={product.description} width={128} height={96} />
                <h1>{product.description}</h1>
                <strong className='font-bold'>{product.price}</strong>
              </div>
            )
          })
        }
      </main>
    </div>
  )
}
