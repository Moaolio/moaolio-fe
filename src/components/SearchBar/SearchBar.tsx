'use client'

import FilterIcon from '@/assets/FilterIcon'
import styles from './SearchBar.module.scss'
import SearchIcon from '@/assets/SearchIcon'
import { Controller, useForm, useFormContext } from 'react-hook-form'

const SearchBar = () => {
  const methods = useForm()
  const { register, handleSubmit, control } = methods

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit(data => alert(data.SearchBar))}>
      <Controller
        name="SearchBar"
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            className={styles.searchBar}
            type="text"
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur} // notify when input is touched/blur
          />
        )}
      />
      <div className={styles.iconContainer}>
        <div
          className={styles.filterIcon}
          onClick={() => null}>
          <FilterIcon />
        </div>
        <SearchIcon />
      </div>
    </form>
  )
}

export default SearchBar
