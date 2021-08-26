import MealsSummary from "./MealsSummary";
import AvailableMeals from './AvailableMeals'
import Modal from '../Modal/Modal'

const Main = props =>{
    return <main>
        <MealsSummary></MealsSummary>
        <AvailableMeals/>
        <Modal></Modal>
    </main>
}

export default Main