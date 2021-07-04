import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = ' https://pokeapi.co/api/v2/pokemon/'
const AppContext = React.createContext()
const numbers = []
for (let i = 1; i < 152; i++) {
  numbers.push(i.toString())
}

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortedPokemon, setSortedPokemon] = useState([])
  const [selectTerm, setSelectTerm] = useState('pokedex')
  const [typesState, setTypesState] = useState([
    { type: 'grass', checked: true },
    { type: 'bug', checked: true },
    { type: 'dragon', checked: true },
    { type: 'electric', checked: true },
    { type: 'fairy', checked: true },
    { type: 'fire', checked: true },
    { type: 'flying', checked: true },
    { type: 'ghost', checked: true },
    { type: 'ground', checked: true },
    { type: 'ice', checked: true },
    { type: 'normal', checked: true },
    { type: 'poision', checked: true },
    { type: 'psychic', checked: true },
    { type: 'rock', checked: true },
    { type: 'water', checked: true }
  ])

  const fetchPokemon = useCallback(async () => {
    setLoading(true)
    try {
      for (let i = 0; i < numbers.length; i++) {
        const response = await fetch(`${url}${numbers[i]}`)
        const data = await response.json()
        const newPokemon = () => {
          const {
            name,
            order,
            height,
            abilities,
            moves,
            sprites,
            other,
            stats,
            types
          } = data
          return {
            name,
            order,
            height,
            abilities,
            moves,
            sprites,
            other,
            stats,
            types
          }
        }
        setPokemon((prevState) => [...prevState, newPokemon()])
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
  }, [])

  const filterPokemon = () => {
    let tempPokes = [...pokemon]
    //sort by search name
    if (searchTerm !== '') {
      tempPokes = pokemon.filter((item) =>
        item.name.includes(searchTerm.toLowerCase())
      )
    }
    // sort by stats
    if (selectTerm === 'alphabetical') {
      tempPokes = tempPokes.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (selectTerm === 'hp') {
      tempPokes = tempPokes
        .slice()
        .sort((a, b) => (a.stats[0].base_stat < b.stats[0].base_stat ? 1 : -1))
    }

    if (selectTerm === 'attack') {
      tempPokes = tempPokes
        .slice()
        .sort((a, b) => (a.stats[1].base_stat < b.stats[1].base_stat ? 1 : -1))
    }

    if (selectTerm === 'defense') {
      tempPokes = tempPokes
        .slice()
        .sort((a, b) => (a.stats[2].base_stat < b.stats[2].base_stat ? 1 : -1))
    }

    if (selectTerm === 'sp-attack') {
      tempPokes = tempPokes
        .slice()
        .sort((a, b) => (a.stats[3].base_stat < b.stats[3].base_stat ? 1 : -1))
    }

    if (selectTerm === 'sp-defense') {
      tempPokes = tempPokes
        .slice()
        .sort((a, b) => (a.stats[4].base_stat < b.stats[4].base_stat ? 1 : -1))
    }

    if (selectTerm === 'speed') {
      tempPokes = tempPokes
        .slice()
        .sort((a, b) => (a.stats[5].base_stat < b.stats[5].base_stat ? 1 : -1))
    }

    //Sort by type
    let typesArray = []
    typesState.forEach((item) => {
      if (item.checked) typesArray.push(Object.values(item)[0])
    })

    const temp = tempPokes.slice(0).filter((poke) => {
      return typesArray.includes(poke.types[0].type.name)
    })

    const temp2 = tempPokes.slice(0).filter((poke) => {
      let x
      if (poke.types[1]) {
        x = typesArray.includes(poke.types[1].type.name)
      }
      return x
    })

    const temp3 = temp.concat(temp2)

    tempPokes = [...new Set(temp3)]

    setSortedPokemon(tempPokes)
  }

  useEffect(() => {
    fetchPokemon()
  }, [fetchPokemon])

  return (
    <AppContext.Provider
      value={{
        loading,
        sortedPokemon,
        searchTerm,
        selectTerm,
        typesState,
        setTypesState,
        setSearchTerm,
        filterPokemon,
        setSelectTerm
      }}>
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const usePokedexContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
