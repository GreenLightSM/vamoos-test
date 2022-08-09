// DRY ------------
// DRY means don't repeat yourself
// So you don't need to write similar code for n times
// What you can do - is loop through and do what you need
// Example:

// No DRY code:
const NoDry = () => {
  return (
    <>
      <Item label='location' value='London' />
      <Item label='population' value='20 000 000' />
      <Item label='rateStart' value='5' />
    </>
  )
}

// DRY code
const arr = [
  {
    key: 0,
    label: 'location',
    value: 'London',
  },
  {
    key: 1,
    label: 'population',
    value: '20 000 000',
  },
  {
    key: 2,
    label: 'rateStart',
    value: '5',
  },
]

const Dry = () => {
  return arr.map((item) => <Item key={item.key} {...item} />)
}

const Item = ({ label, value }) => {
  return (
    <>
      <div>{label}</div>
      <div>{value}</div>
    </>
  )
}
