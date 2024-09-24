interface SearchIconProps {
  color?: string
  width?: number
  height?: number
}

const SearchIcon: React.FC<SearchIconProps> = ({
  color = 'white',
  width = 22,
  height = 23
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="8.60884"
        cy="8.60884"
        r="7.60884"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M14.348 14.3481L21.0438 22.0004"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}

export default SearchIcon
