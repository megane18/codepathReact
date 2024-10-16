import React, {Component, useState} from 'react'

const Barista = ()=> {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });

      const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
      }
    const onNewDrink = () => {

    }

    const onCheckAnswer = () => {
        
    }
    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <form>

            </form>
            <button className='button submit'type='submit' onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button className='button newdrink' type='new-drink-button' onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    )
}

export default Barista;