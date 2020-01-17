import React from 'react'
import SearcheGameList from '../containers/SearchedGameList'
import SearchForm from '../components/SearchForm'


export default  class SearchContainer extends React.Component{

  constructor(){
    super( )

    this.state = {
      searchedGames: [],
      currentGame: {}
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
      .then(games => this.setState({searchedGames: games.results }))
      
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
//         .then(game => 

//           <Switch>
//              <Route path='/games/details' render={ () => <GameDetails game={game}/> } /> 
//           </Switch>
          
//         )
//         .catch(err => {
//             console.log(err);
//         });
// }

  render(){
      
  return ( 
  
    <div>
      <SearchForm search={this.searchForGames}/>

      <SearcheGameList games={this.state.searchedGames} displayGame={this.props.displayGame}/>
    </div>
      
  ) 

}

}