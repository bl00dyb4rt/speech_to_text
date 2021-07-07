import React, {useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {CharacterItem} from './CharacterItem'
import axios from 'axios'

export const CharacterGrid = ({
                                  items,
                                  isLoading,
                                  query,
                                  setItems,
                                  setIsLoading
                              }) => {
    useEffect(() => {
        const fetchItems = async () => {


            const result = await axios(
                `http://127.0.0.1:8000/api/v1/list_image_tag?tag=${query}`,
            )
            console.log(result.data)
            setItems(result.data.data.list_objects)
            setIsLoading(false)

        }
        fetchItems()
    }, [query, setIsLoading, setItems])
    return (
        <div>
            {isLoading ? (
                <div className='center'>
                    <Loader
                        type='Puff'
                        color='#ffff'
                        height={100}
                        width={100}
                        timeout={3000}
                    />
                </div>
            ) : (
                <section className='cards'>
                    {items.map((item) => (
                        <CharacterItem key={item.id} item={item}/>
                    ))}
                </section>
            )}
        </div>
    )
}
