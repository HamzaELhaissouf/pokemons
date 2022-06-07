import { getAllByTestId, getByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ItemCard from '../ItemCard'
import { Item } from '../../../store/types'
import { Provider, useSelector } from 'react-redux'
import store from '../../../store'
import { upperFirstChar } from '../../../utils'
import { dreamWorlUrl } from '../../../config'



test('check element renders without crashing', () => {

  const item = {
    name: 'master-ball',
    id: 1,
    height: 100,
    weight: 100,
    stats: [],
    abilities: [],
    types: [],
  }

  const { getByTestId } = render(
    <Provider store={store}>
      <ItemCard item={item} />
    </Provider>
  )

  expect(getByTestId('name-holder')).toHaveTextContent(upperFirstChar(item.name))
  expect(getByTestId('image')).toHaveAttribute('src', `${dreamWorlUrl}/${item.id}.svg`)
})