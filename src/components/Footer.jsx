import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../context/filters'

export function Footer () {
  const { filters } = useContext(FiltersContext)

  return (
    <footer className='footer'>
      <h4>Aprendiendo React</h4>
      {JSON.stringify(filters)}
    </footer>
  )
}
