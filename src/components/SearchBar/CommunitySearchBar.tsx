'use client'

import styles from './SearchBar.module.scss'
import SearchIcon from '@/assets/SearchIcon'
import { Controller, useForm } from 'react-hook-form'

const CommunitySearchBar = () => {
  const methods = useForm()
  const { handleSubmit, control } = methods

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit(data => alert(data.CommunitySearchBar))}>
      <Controller
        name="CommunitySearchBar"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <input
            className={`${styles.searchBar} ${styles.communitySearchBar}`}
            type="text"
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <div
        className={`${styles.iconContainer} ${styles.communityIconContainer}`}>
        <SearchIcon
          color="#909090"
          width={18}
          height={19}
        />
      </div>
    </form>
  )
}

export default CommunitySearchBar
