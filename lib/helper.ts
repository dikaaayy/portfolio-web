export const filterImage = (images: String) => {
  const array = images.split(',')
  return array[0]
}

export const techStackArr = (stack: String) => {
  const arrays = stack.split(',')
  return arrays
}

export const timeFilter = (isotime: string) => {
  const time = new Date(isotime)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = time.getDate()
  const mon = time.getMonth()
  const year = time.getFullYear()
  return `${date} ${monthNames[mon]} ${year}`
}
