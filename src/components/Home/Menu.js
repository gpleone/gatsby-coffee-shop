import React from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

function ListItem({item}){
  return (
    <li key={item.id}>
      <div><Img fixed={item.image.fixed}/></div>
      <h3>{item.title}</h3>
      <div>{item.price}</div>
      <p>{item.description.description}</p>
    </li>
  )
}

function List({items}){

  return(
    <section>
      <ul>
        {items.map(({node}) => <ListItem item={node}/>)}
      </ul>
    </section>
  )
}

function Filters({items, handleFilterSelection}){
  return (
    <ul>
      {items.map(item => <li key={item} onClick={() => handleFilterSelection(item)}>{item}</li>)}
    </ul>
  )
}

function getCategories(items){
  let temp = items.map(item => item.node.category);
  // add ALL, remove duplicates, make it an array
  return Array.from(new Set(['all', ...temp]));
}

export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: props.items.edges,
      displayItems: props.items.edges,
      categories: getCategories(props.items.edges)
    }
  }
  handleFilterSelection = (filter) => {
    this.setState((prevState) => {
      return {
        displayItems: filter === 'all' ? [...prevState.items] : prevState.items.filter(({node}) => node.category === filter)
      }
    })
  }
  render(){
    return (
      <div>
        <Title title="Menu" />
        <Filters items={this.state.categories} handleFilterSelection={this.handleFilterSelection}/>
        {
          this.state.displayItems && this.state.displayItems.length > 0
          ? <List items={this.state.displayItems}/>
          : <div>sorry no content</div>
        }
      </div>
    )
  }

}