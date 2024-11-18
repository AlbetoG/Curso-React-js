import { useState, useId } from 'react'
import '../css/Filters.css'
import { useFilters } from '../hooks/useFilters.js'

export function Filters() {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    // const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) => {
        // setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>
                    Price starting at:
                </label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>
                    ${filters.minPrice}
                </span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>
                    Category
                </label>
                <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="home-decoration">Home decoration</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}