import React from 'react'
import SearcheGameList from './SearchedGameList'
import SearchForm from '../components/SearchForm'
import { Divider } from 'semantic-ui-react'


export default  class SearchContainer extends React.Component{

  constructor(){
    super( )

    this.state = {
      page: 1,
      search: '',
      currentPage: null,
      searchedGames: [],
      currentGame: {}
    }
  }

  searchForGames = (event) => {
    event.preventDefault()

    let game = event.currentTarget.firstElementChild.value

    event.currentTarget.firstElementChild.value = ''

    let search = game.split(" ").join("-")
    this.setState({search: search})
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
        this.setState({currentPage: games})
        this.setState({searchedGames: games.results })
      })

}

changePage = (side) => {
  if (side === 'next'){
    this.setState({page: this.state.page + 1})
  }
  if (side === 'previous'){
    this.setState({page: this.state.page - 1})
  }

  console.log(this.state.currentPage[side] )

  if (this.state.currentPage[side]  !== null){
  fetch(`https://rawg-video-games-database.p.rapidapi.com/games?page=${this.state.page}&search=${this.state.search}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
    }
  })
  .then(response => response.json())
  .then(results => this.setState({searchedGames: results.results}))
  .catch(err => console.log(err.message) )
}
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

      <Divider/>

      <SearcheGameList games={this.state.searchedGames} displayGame={this.props.displayGame}/>


      { this.state.searchedGames.length === 0
        ? null
        : <div className="ui buttons">
            <button className="ui labeled icon button" onClick={()=> this.changePage('previous')}>
              <i className="left chevron icon"></i>
              Previous
            </button>
            <button className="ui button">

            </button>
            <button className="ui right labeled icon button" onClick={()=> this.changePage('next')}>
              Next
              <i className="right chevron icon"></i>
            </button>
          </div>
      }
    </div>

  )

}

}
