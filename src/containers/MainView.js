import React from 'react';
import GameSearch from '../components/GameSearch'
import GameList from '../containers/GameList'
import GameDisplay from '../components/GameDisplay'
import SavedGames from '../containers/SavedGames'

export default  class MainView extends React.Component{
    constructor(){
    super()

    this.state = {
        searchedGames: [],
        savedGames: [],
        filteredGames: [],
        currentGame: null
    }
    }

    searchForGames = (event) => {
        event.preventDefault()
        
        let game = event.currentTarget.firstElementChild.value
        
        event.currentTarget.firstElementChild.value = ''

        let search = game.split(" ").join("-")
        
        this.fetchGame(search)
    }

    fetchGame = (search) =>{
        
        fetch(`https://chicken-coop.p.rapidapi.com/games?title=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
                "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
            }
            })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if(json.games !== "No result"){
                this.setState({searchedGames: json.result})}
            })
            
    
    }

    displayGame = (title) => {
        console.log(title)
        // `https://chicken-coop.p.rapidapi.com/games/${title}?platform=${platform}`

            fetch(`https://chicken-coop.p.rapidapi.com/games/${title}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
                    "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
                }
            })
            .then(response => response.json())
            .then(game => this.setState({currentGame: game.result}))
            // this.setState({currentGame: game})
    }

    showSavedGame = (game) => {
        console.log(game)
        this.setState({currentGame: game})
    }
    
    saveGame = (game) => {
        console.log(game)
        this.setState({savedGames: [...this.state.savedGames, game]})
    }

  render(){
    return (
        <div>
            <div>
                <GameSearch search={this.searchForGames}/>
                <GameList games={this.state.searchedGames} displayGame={this.displayGame}/>
            </div>

            <div>
                {this.state.currentGame ?  <GameDisplay currentGame={this.state.currentGame} saveGame={this.saveGame}/> : null}
            </div>

            <div>
                <SavedGames savedGames={this.state.savedGames} displayGame={this.showSavedGame}/>
            </div>
        </div>
    )

  }

}