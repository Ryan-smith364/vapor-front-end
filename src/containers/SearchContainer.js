import React from 'react'
import GameList from '../components/SearchedGameList'
import SearchForm from '../components/SearchForm'
import { Divider } from 'semantic-ui-react'

export default  class SearchContainer extends React.Component{

  constructor(){
    super( )

    this.state = {
      currentPage: null,
      searchedGames: []
    }
  }

  searchForGames = (event) => {
    event.preventDefault()
    
    let game = event.currentTarget.firstElementChild.value
    
    event.currentTarget.firstElementChild.value = ''

    let search = game.split(" ").join("-")
    
    this.fetchGameSearch(search)
}



fetchGameSearch = (search) =>{
    
    fetch(`https://rawg-video-games-database.p.rapidapi.com/games?search=${search}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
        }
      })
      .then(response => response.json())
      .then(games => {
        console.log(games)
        this.setState({searchedGames: games.results })
      })
      
}

// displayGame = (title) => {
  
//     fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${title}`, {
//         "method": "GET",
//         "headers": {
//           "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//           "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
//         }
//       })
//         .then(response => response.json())
//         .then(game => console.log(game))
//         .catch(err => {
//             console.log(err);
//         });
// }

  render(){
      
  return ( 
  
    <div>
    <SearchForm search={this.searchForGames}/>

    <Divider/>

    <GameList games={this.state.searchedGames} displayGame={this.props.displayGame} setCurrent={this.props.setCurrent}/>
</div>
      
  ) 

}

}