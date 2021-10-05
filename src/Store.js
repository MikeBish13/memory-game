import create from 'zustand';
import { Data } from './Data';
import { doubleAndShuffleArray, cleanButtons } from './helpers/Helpers';

export const useStore = create((set, get) => ({
    mode: 'numbers',
    setMode: (mode) => {
        set({mode: mode})
    },
    gridSize: 8,
    setGridSize: (size) => {
        set({gridSize: size})
    },
    gameStatus: 'start',
    setGameStatus: (status) => {
        set({gameStatus: status})
    },
    gameData: [],
    setGameData: (data) => {
        set({gameData: data})
    },
    first: undefined,
    setFirst: (num) => set({first: num}),  
    second: undefined,
    setSecond: (num) => set({second: num}),  
    moves: 0,
    increaseMoves: () => set(state => ({moves: state.moves + 1})),
    resetMoves: () => set({moves: 0}),
    correctMatches: 5,
    increaseCorrectMatches: () => set(state => ({correctMatches: state.correctMatches + 1})),
    resetCorrectMatches: () => set({correctMatches: 0}),
    time: 0,
    increaseTime: () => set(state => ({time: state.time + 1})),
    resetTime: () => set({time: 0}),
    players: [{
        id: 1,
        score: 0
    }],
    addPlayers: (number) => {
        if(number > 1) {
        set({players: []})
        const newPlayers = get().players;
        for(let i = 0; i < number; i++) {
            newPlayers.push({
                id: i + 1,
                score: 0
            })
        }
        set({players: newPlayers})
    } else {
        set({players: [{
            id: 1,
            score: 0
        }]})
    }},
    currentPlayer: 0,
    resetCurrentPlayer: () => {
        set({currentPlayer: 0})
    },
    nextPlayer: () => {
        let currentIndex = get().currentPlayer;
        let currentPlayers = get().players;
        if(currentIndex === currentPlayers.length - 1) {
            set({currentPlayer: 0})
        } else {
            set(state => ({currentPlayer: state.currentPlayer + 1}))
        }
    },
    setPlayerScore: (index) => {
        set(state => (state.players[index].score += 1))
    },
    resetPlayerScores: () => {
        for(let i = 0; i < get().players.length; i++) {
            set(state => (state.players[i].score = 0))
        }
    },
    menuModal: false,
    setMenuModal: () => set(state => ({menuModal: !state.menuModal})),
    resetMenuModal: () => set({menuModal: false}),
    resetGame: () => {
        cleanButtons();
        get().resetMoves();
        get().resetCorrectMatches();
        get().setGameStatus('game');
        get().resetTime();
        get().resetCurrentPlayer();
        get().resetPlayerScores();
        get().setFirst(undefined);
        get().setSecond(undefined);
        get().setGameData(doubleAndShuffleArray(Data, get().gridSize));
        get().resetMenuModal();
    },
    newGame: () => {
        get().resetGame();
        get().setGameStatus('start');
        get().addPlayers(1);
        get().setGridSize(8);
        get().setMode('numbers');
    }
})) 